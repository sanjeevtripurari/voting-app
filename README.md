# Voting App

A simple full-stack voting application that allows users to vote **YES** or **NO**, stores each vote in a database with timestamps, and provides real-time summaries and timeline analytics.

---

# 📌 Features

* Cast votes (YES / NO)
* Store votes with timestamp
* View total YES vs NO count
* View vote timeline (grouped by time)
* Clean separation of frontend and backend
* Designed for scalability (ready for Docker & Kubernetes)

---

# 🧱 Architecture

```
Frontend (React)
        |
        | REST API
        ↓
Backend (Node.js + Express)
        |
        ↓
MySQL Database
```

---

# 📁 Project Structure

```
voting-app/
│
├── backend/        # Node.js API
├── frontend/       # React UI
├── database/       # SQL schema
├── docker-compose.yml
└── README.md
```

---

# ⚙️ Tech Stack

* **Frontend:** React
* **Backend:** Node.js, Express
* **Database:** MySQL
* **API Communication:** REST

---

# 🚀 Local Setup (Without Docker)

## 1. Prerequisites

* Node.js (v18+ recommended)
* MySQL installed and running

---

## 2. Database Setup

Login to MySQL:

```bash
mysql -u root -p
```

Run:

```sql
CREATE DATABASE voting_app;

USE voting_app;

CREATE TABLE votes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vote_type ENUM('YES', 'NO') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 3. Backend Setup

```bash
cd backend
npm install
```

### Configure environment

Create/update `.env`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=voting_app
PORT=5000
```

### Run backend

```bash
node server.js
```

Backend runs on:

```
http://localhost:5000
```

---

## 4. Frontend Setup

```bash
cd frontend
npm install
```

### Ensure API URL

Edit `src/api.js`:

```js
const API = "http://localhost:5000";
```

### Start frontend

```bash
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

# 🧪 Testing

## UI Testing

1. Open browser: `http://localhost:3000`
2. Click **YES** or **NO**
3. Verify:

   * Summary updates
   * Timeline updates

---

## API Testing

### Add vote

```bash
curl -X POST http://localhost:5000/vote \
-H "Content-Type: application/json" \
-d '{"vote":"YES"}'
```

### Get summary

```bash
curl http://localhost:5000/vote/summary
```

### Get timeline

```bash
curl http://localhost:5000/vote/timeline
```

---

# 🗄️ Database Verification

```sql
USE voting_app;
SELECT * FROM votes;
```

---

### Set backend URL:

```js
const API = "http://localhost:5000";
```

---

From project root:

```bash
npm start
```

---

## 🔄 What happens when you run `npm start`

* Backend starts using **nodemon**

  * Auto-restarts on code changes
* Frontend starts using **React dev server**

  * Hot reload enabled
* Logs appear in terminal:

  * `[BACKEND]`
  * `[FRONTEND]`

---

## 🌐 Access URLs

* Frontend → http://localhost:3000
* Backend → http://localhost:5000

---

# 🛑 Stop Application

Press:

```bash
CTRL + C
```

👉 This will stop both frontend and backend.

---

# 🔧 Configuration Changes

---

## 🔁 Change Backend Port

Edit:

```
backend/.env
```

```env
PORT=6000
```

---

## 🔁 Change Database Connection

Edit:

```
backend/.env
```

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=voting_app
```

---

## 🔁 Update Frontend API (if port changes)

If backend port changes (e.g., 6000), update:

```
frontend/src/api.js
```

```js
const API = "http://localhost:6000";
```

