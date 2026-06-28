# Service routing rules

## Purpose

These rules help the AI Router decide when to route a visitor to Clean Service.

## Core routing

IF visitor mentions a machine fault
THEN route to Clean Service.

IF visitor mentions no water pickup, poor suction, water stays on floor or machine does not vacuum
THEN start SRV-001.

IF visitor mentions streaks, stripes, dirty trails or wet lines behind machine
THEN start SRV-002.

IF visitor mentions brush not spinning, pad not turning or brush motor issue
THEN start SRV-003.

## Fallback

IF no matching protocol exists
THEN collect machine model, symptom, urgency and contact details and create a service ticket draft.

## Language

Always answer in the same language as the visitor.

## Safety

IF there is smoke, burning smell, electric shock risk, leaking battery or overheating
THEN advise the visitor to stop using the machine and contact service immediately.
