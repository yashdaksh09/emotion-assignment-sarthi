# React + TypeScript + Vite

# Emotion Reflection Tool

A simple full-stack web application that allows users to write a reflection (e.g., “I feel nervous about my first job interview”) and returns a **mock emotion analysis** using a Python FastAPI backend and a React + TypeScript frontend.

---

---

## Prerequisites

Make sure the following tools are installed on your system:

- [Node.js](https://nodejs.org/) (v16 or later)
- [Python 3.8+](https://www.python.org/)
- Git (optional but helpful)

---

## Getting Started

### Step 1: Clone the Project (Optional)

```bash
git clone https://github.com/yashdaksh09/emotion-assignment-sarthi.git
cd emotion-assignment-sarthi

## Backend Setup(FastAPI)
cd backend

#Step 2: Install Dependencies

pip install fastapi uvicorn pydantic


 Step 4: Run the FastAPI Server

 uvicorn main:app --reload


#Frontend Setup (React + TypeScript)
cd ../frontend

#Step 2: Install Node Modules
npm install

#Step 3: Start React App
npm run dev       # if you're using Vite
# OR
npm start         # if using Create React App (CRA)
