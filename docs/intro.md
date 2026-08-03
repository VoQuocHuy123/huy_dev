---
sidebar_position: 1
---

# AmenityBook AI Documentation

Welcome to the **AmenityBook AI** documentation - a comprehensive guide for building an AI-powered amenity booking system.

## 📖 What is AmenityBook AI?

AmenityBook AI is an intelligent amenity booking and management system designed for residential communities, condominiums, and corporate housing complexes.

### Key Features

- 🤖 **AI Agent:** Natural language booking in Vietnamese using LangGraph
- 📱 **Mobile App:** React Native resident interface  
- 💻 **Admin Web:** Next.js management dashboard
- 🔒 **Policy Engine:** Deterministic rule-based decision making
- ⚡ **Real-time:** Instant calendar updates via Supabase
- 🛡️ **Zero Double-Booking:** Database-level concurrency control

## 🎯 Project Overview

| Aspect | Details |
|--------|---------|
| **Timeline** | 6 weeks MVP |
| **Team Size** | 4 members |
| **Tech Stack** | FastAPI, Next.js, React Native, LangGraph, PostgreSQL |
| **AI Model** | GPT-4o-mini with function calling |

## 📚 Documentation Sections

### Product Overview
Based on comprehensive PRD (Product Requirements Document) covering:
- Product charter and vision
- Problem statement and opportunity
- Objectives and success metrics  
- Scope definition and boundaries

### Requirements
- **Functional Requirements:** Complete feature specifications (FR-01 to FR-18)
- **Non-Functional Requirements:** Performance, security, scalability
- **Data Model:** PostgreSQL schema with entities and relationships
- **Business Rules:** 13 core business rules (BR-01 to BR-13)

### Architecture
- **System Design:** Component architecture and data flow
- **AI Agent Design:** LangGraph workflow and tool schemas
- **Security:** RBAC, authentication, data protection
- **Policy Engine:** Deterministic evaluation logic

### Business Processes
- Booking flow with hold mechanism
- Approval workflow for exceptions
- User stories for residents and admins
- State machines for booking lifecycle

## 🚀 Key Technical Decisions

### 1. Two-Phase Booking (Hold → Confirm)
- 2-minute hold prevents slot conflicts
- User reviews before final commitment
- Automatic expiration and cleanup

### 2. Deterministic Policy Engine
- No LLM in business logic
- Same input → same output (reproducible)
- Version-controlled rule configurations

### 3. Agent as Interface, Not Decision-Maker
- Agent handles conversation only
- Backend validates all business rules
- Prevents hallucination in critical operations

### 4. Database-Level Concurrency Control
- Unique constraints prevent double-booking
- Pessimistic locking for critical sections
- Idempotent operations with retry safety

## 📊 Success Criteria

| Metric | Target |
|--------|--------|
| Tool Selection Accuracy | ≥ 90% |
| Entity Extraction | ≥ 85% |
| Booking Success Rate | ≥ 85% |
| Agent Latency (p95) | ≤ 5 seconds |
| Double-booking Rate | 0% |
| Policy Determinism | 100% |

## 🔗 Source Documents

This documentation is based on:
- **AmenityBook_PRD.md** - Complete product requirements document
- **VHR-02_AmenityBook_AI.md** - Technical specification

## 🛠️ Technology Stack

**Frontend:**
- Mobile: React Native + Expo
- Web: Next.js 14 + TypeScript + Tailwind

**Backend:**
- API: FastAPI + Python 3.11+
- Database: PostgreSQL (Supabase)
- Auth: Supabase Auth (JWT)

**AI/ML:**
- Framework: LangGraph
- Model: GPT-4o-mini
- Pattern: Function calling with structured outputs

**Infrastructure:**
- Deployment: Vercel (web) + Railway (API)
- Realtime: Supabase Realtime
- Monitoring: Sentry

## 📝 Contributing

This is a 6-week MVP project for academic/training purposes using synthetic data only.

## 📄 Version

**Document Version:** 2.1 (Approval Version)  
**Last Updated:** August 2026  
**Status:** MVP Development
