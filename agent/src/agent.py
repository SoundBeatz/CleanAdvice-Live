from pathlib import Path

from dotenv import load_dotenv

from livekit.agents import Agent, AgentSession, JobContext, WorkerOptions, cli, inference, room_io
from livekit.plugins import noise_cancellation

from config import AGENT_IMAGE_URL, ASSISTANT_INSTRUCTIONS

try:
    from livekit.plugins import lemonslice
except Exception:
    lemonslice = None

ROOT_ENV = Path(__file__).resolve().parents[2] / '.env.local'
PROJECT_ENV = Path(__file__).resolve().parents[3] / '.env.local'

load_dotenv(ROOT_ENV)
load_dotenv(PROJECT_ENV)


class CleanAdviceAgent(Agent):
    def __init__(self) -> None:
        super().__init__(instructions=ASSISTANT_INSTRUCTIONS)


async def entrypoint(ctx: JobContext):
    await ctx.connect()

    session = AgentSession(
        llm=inference.LLM(model='openai/gpt-4o-mini'),
        stt=inference.STT(model='deepgram/nova-3'),
        tts=inference.TTS(
            model='elevenlabs/eleven_turbo_v2_5',
            voice='cgSgspJ2msm6clMCkdW9'
        ),
    )

    if lemonslice is not None:
        avatar = lemonslice.AvatarSession(
            agent_image_url=AGENT_IMAGE_URL,
            agent_prompt='a professional Clean360 cleaning advisor talking calmly on camera',
            agent_idle_prompt='a professional Clean360 cleaning advisor waiting calmly'
        )
        await avatar.start(session, room=ctx.room)

    await session.start(
        room=ctx.room,
        agent=CleanAdviceAgent(),
        room_options=room_io.RoomOptions(
            audio_input=room_io.AudioInputOptions(
                noise_cancellation=noise_cancellation.BVC()
            ),
            audio_output=False,
        ),
    )


if __name__ == '__main__':
    cli.run_app(WorkerOptions(entrypoint_fnc=entrypoint))
