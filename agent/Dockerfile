FROM python:3.11-slim

WORKDIR /agent

RUN pip install uv

COPY pyproject.toml ./
RUN uv sync

COPY src ./src

CMD ["uv", "run", "python", "src/agent.py", "dev"]
