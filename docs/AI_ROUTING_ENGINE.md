# AI Routing Engine

The AI Routing Engine is the first decision layer before any response is generated.

## Goal

Determine the visitor's intent and route the conversation to the correct specialist module.

## Initial routes

- Clean Advice: cleaning services and general advice.
- Clean Quote: quote requests.
- Clean Shop: products and machines.
- Clean Service: technical support.
- Clean Planner: appointments.

## Principles

1. Detect intent before answering.
2. Ask one focused question at a time when information is missing.
3. Preserve conversation context.
4. Reply in the visitor's language.
5. Summarize collected information before handing off or finishing.

## Future

The routing engine should support adding new specialists without changing the core platform.
