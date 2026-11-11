# CreditResolve — case study

## The problem

Problem-loan management (classified loans, non-accrual, charge-offs, suspects) has a completely different information shape than origination or performing-loan monitoring — it's organized around who owns what exposure and how fast it's deteriorating, not around application workflows. I wanted to test, quickly, whether a dashboard built around that actual bucket taxonomy (not a generic "loans table") would feel right to someone who works this desk — before investing in a real backend.

## Why vibe-coded, on purpose

This was built in days through AI-assisted iteration specifically to keep the cost of being wrong low. The question I was answering wasn't "can we build this" — it's whether the four-tab taxonomy (Classified / Non-Accrual / Principal Recovery & Active Charge-Offs / Suspects) and the responsibility-centre rollup are the right mental model for a risk unit manager, and that question gets answered by clicking through a fake-but-functional UI, not by a requirements doc. Building a real backend first would have meant paying full engineering cost before knowing if the structure was right. Being explicit about that trade-off in the README — what's real, what's mock data — is itself a product decision: I'd rather a reviewer trust the one honest claim I make than discover an inflated one later.

## A design decision I reversed: color as decoration vs. color as signal

The first pass used five different saturated gradients across the stat cards and pastel-block backgrounds on the risk-unit tiles — the kind of visual variety that reads as effort but actually just competes for attention with no information behind the variety. I replaced it with one neutral card shell where the only thing that varies is a small icon chip's color, and softened the risk-unit tiles to near-white with a crisp colored border carrying the signal instead of a filled block. The lesson that generalized: in a density-first analyst tool, color should mean something (a status, a category) or it should get out of the way — it shouldn't exist just because it's possible to add it.

## What I'd build next if this moved past prototype

The associate assignment column ("Priya Sharma" / "Marcus Webb") is illustrative text today, not a real ownership model — the next real decision is whether assignment is per-loan, per-responsibility-centre, or workload-balanced, and that decision needs real usage data to make well. I'd rather name that as the open question than fake an answer with more mock data.
