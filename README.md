# 🚀 Hoblix AI - Intelligent Coworking Assistant

> An AI-powered coworking assistant that streamlines onboarding, workspace booking, profile management, and information retrieval through a conversational interface.

---

## 🌐 Live Demo

**Application URL:**
[ADD DEPLOYMENT URL HERE]

---

## 📌 Overview

Hoblix AI is a full-stack AI application designed to improve the coworking experience by combining:

* Conversational AI
* Intelligent onboarding
* Workspace booking automation
* User profile management
* Retrieval-Augmented Generation (RAG)

Instead of navigating multiple pages and forms, users interact with a single intelligent assistant capable of answering questions, managing bookings, and maintaining user profiles.

---

## ✨ Key Features

### 🔐 Authentication

* JWT Authentication
* Google OAuth Login
* Secure Session Management

### 🤖 AI Assistant

* Context-aware conversations
* Intent detection
* Follow-up question handling
* General assistance

### 📚 Retrieval-Augmented Generation (RAG)

* Semantic search using FAISS
* Knowledge-base grounded responses
* Reduced hallucinations
* Faster and more accurate answers

### 📝 Conversational Onboarding

* Step-by-step onboarding workflow
* State tracking
* Automatic profile creation
* Resume onboarding capability

### 📅 Booking Management

* Meeting room booking
* Workspace booking
* Availability checking
* Booking history tracking

### 👤 Profile Management

* View profile
* Edit profile
* Profile completion tracking
* Persistent user preferences

### 💬 Enhanced User Experience

* New Chat functionality
* Auto-scrolling conversations
* Typing indicators
* Booking quick actions
* Responsive modern UI

---

# 🏗️ Frontend Request Flow

```text
User
 │
 ▼
React UI
 │
 ▼
Axios Service Layer
 │
 ▼
FastAPI API Endpoint
 │
 ▼
Backend Response
 │
 ▼
State Update (Zustand)
 │
 ▼
UI Re-render
```

---

# ⚙️ Backend Request Flow

```text
User Message
      │
      ▼
   Chat API
      │
      ▼
 Intent Router
      │
 ┌────┼─────────────┬─────────────┐
 ▼    ▼             ▼             ▼

RAG Booking     Onboarding     General
 │     │            │             │
 ▼     ▼            ▼             ▼

FAISS Booking  Workflow      General
Search Engine  Engine        Response
 │
 ▼
Groq LLM
 │
 ▼
Final Response
```

---

# 🧠 AI Architecture Decisions & Trade-offs

## 1. Intent Router Before LLM

### Problem

Sending every request directly to an LLM increases cost and latency.

### Solution

A lightweight intent router classifies requests before invoking AI services.

### Benefits

* Faster responses
* Lower inference costs
* Better scalability
* Predictable routing behavior

---

## 2. Retrieval-Augmented Generation (RAG)

### Problem

Large Language Models may hallucinate.

### Solution

Retrieve relevant information from a knowledge base before generating responses.

### Benefits

* More reliable answers
* Reduced hallucinations
* Domain-specific accuracy

---

## 3. FAISS Loaded at Startup

### Problem

Loading vector indexes on every request causes significant delays.

### Solution

Load the FAISS index and embeddings once during application startup.

### Benefits

* Reduced response latency
* Better runtime performance
* Lower I/O overhead

---

## 4. Conversational Onboarding

### Traditional Approach

Long static forms.

### Implemented Approach

Guided AI-powered onboarding conversation.

### Benefits

* Better user experience
* Higher completion rates
* More natural interaction

---

## 5. Zustand Instead of Redux

### Trade-off

Redux provides powerful tooling but introduces additional boilerplate.

### Choice

Zustand

### Benefits

* Simpler architecture
* Faster development
* Easier maintenance

---

## 6. Service-Oriented Backend Design

Each major feature is isolated into dedicated modules:

* Authentication
* Chat
* Booking
* Onboarding
* RAG
* Profile Management

### Benefits

* Easier testing
* Better maintainability
* Improved scalability

---

# 🛠️ Technology Stack

## Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* Zustand
* Axios

## Backend

* FastAPI
* SQLAlchemy
* PostgreSQL
* Pydantic

## AI Stack

* Groq
* Llama 3.1 8B Instant
* Sentence Transformers
* FAISS

## Authentication

* JWT
* Google OAuth

---

# 🎯 User Journey

```text
Login
  │
  ▼
Onboarding
  │
  ▼
Profile Creation
  │
  ▼
AI Assistant
  │
  ├── Ask Questions
  │
  ├── Retrieve Information
  │
  ├── Book Workspace
  │
  └── Manage Profile
  │
  ▼
Booking History
```

---

# 🚀 Future Improvements

* Multi-session chat history
* Real-time notifications
* Calendar integrations
* AI workspace recommendations
* Analytics dashboard
* Admin portal
* Voice assistant integration

---

# 👨‍💻 Author

**Shakti Sarada Prasad**

GitHub: https://github.com/shakti-sarada

---

# 📄 License

This project is built for learning, portfolio, and demonstration purposes.

---

⭐ If you found this project interesting, consider giving it a star!
