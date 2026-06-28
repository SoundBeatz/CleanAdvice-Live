# Service ticket schema

Clean Service should create a structured ticket when a machine issue cannot be solved directly.

## Required fields

- Customer name
- Company name
- Email address
- Phone number
- Machine brand
- Machine model
- Serial number if known
- Symptom
- When the issue started
- What has already been checked
- Photos or video if available
- Urgency
- Preferred contact method

## Diagnostic fields

- Suction motor audible: yes/no/unknown
- Hose flushed: yes/no/unknown
- Hose blockage checked: yes/no/unknown
- Squeegee checked: yes/no/unknown
- Squeegee rubber damage: yes/no/unknown
- Tank seal checked: yes/no/unknown
- Float checked: yes/no/unknown
- Vacuum leak suspected: yes/no/unknown

## Output summary

The AI should summarize:

- reported symptom;
- likely cause;
- checks already completed;
- recommended next step;
- whether a technician is needed.
