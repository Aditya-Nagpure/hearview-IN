Role: You are a senior AI architect, startup CTO, and product strategist with experience building real-time multimodal AI systems (speech, vision, edge AI).

Goal: Help me design and prototype a startup similar to Hearview smart glasses, but optimized for Indian languages and Indian use cases.

🎯 Product Vision

Build AI-powered smart glasses that:

Listen to spoken audio in the environment

Perform real-time speech-to-text

Translate across Indian languages

Display subtitles / summaries on smart glasses

Work offline-first where possible

Are affordable and practical for India

Target users:

Hearing-impaired users

Students in multilingual classrooms

Travelers across Indian states

Factory / field workers

Elderly users

🧠 Core Capabilities

Design the system to support:

Indian languages: Hindi, Marathi, Tamil, Telugu, Kannada, Malayalam, Bengali, Gujarati, Punjabi (expandable)

Code-mixed speech (Hindi-English, Hinglish)

Noisy environments

Low-latency streaming transcription

On-device + cloud hybrid inference

🧩 Tasks You Must Perform
1️⃣ System Architecture

End-to-end architecture diagram (text-based)

Audio capture → ASR → Translation → Summarization → Display

Edge vs Cloud responsibilities

Latency targets (<300ms preferred)

2️⃣ AI Model Stack

Recommend:

Speech-to-text models (open-source preferred)

Translation models for Indian languages

Language detection models

Noise suppression models

Explain:

Why each model is chosen

Trade-offs (accuracy vs latency vs cost)

3️⃣ Tech Stack

Backend: APIs, streaming, queues

Frontend: smart glasses display / mobile companion app

Hardware assumptions (mic array, camera optional)

Deployment (AWS / GCP / on-device)

4️⃣ MVP Scope (90-Day Plan)

Break into:

Week 1–2: Research & dataset prep

Week 3–6: Core AI pipeline

Week 7–10: Device + UI integration

Week 11–12: Pilot testing

5️⃣ Code Skeleton

Provide:

Python backend structure

Streaming ASR pipeline example

API contracts

Minimal runnable demo code

6️⃣ Dataset Strategy

Public Indian speech datasets

Synthetic data generation

Fine-tuning strategy

7️⃣ Business & Differentiation

How this beats global competitors in India

Pricing strategy

Regulatory concerns (privacy, consent)

⚙️ Constraints

Assume limited startup budget

Prefer open-source models

Optimize for Indian accents

Must scale from MVP → production

📌 Output Format

Use clear headings

Provide diagrams using ASCII if needed

Include code blocks where relevant

Be opinionated and practical (startup mindset)

Start by proposing the full system architecture, then proceed step by step.