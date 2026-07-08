# 🤝 Collab Board

A modern full-stack **MERN** application that helps developers, designers, and creators find collaborators for their projects.

Users can create collaboration posts by providing their name, project title, description, and required skills. Other users can browse the latest collaboration requests, filter them by skill tags, and remove posts when needed.

This project was built as part of the **OneShopAI Web Development Intern Technical Assignment**, focusing on clean architecture, responsive design, and a simple yet intuitive user experience.

---

# 🚀 Features

- ✨ Create collaboration posts
- 👤 Add author name (no authentication required)
- 📝 Project title and detailed description
- 🏷️ Add multiple skill tags
- 📋 Browse posts in reverse chronological order
- 🔍 Filter posts by skill tags
- 🗑️ Delete collaboration posts
- 💾 Persistent MongoDB storage
- 📱 Fully responsive design
- ⚡ Loading states and toast notifications
- 🚫 Basic input validation
- 📭 Empty state when no posts match the selected filter

---

# 🛠️ Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | React (Vite), Tailwind CSS, Axios, React Hot Toast, Day.js |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Development Tools | Git, GitHub, VS Code |

---

# 📂 Project Structure

```text
collab-board/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── PostForm.jsx
│   │   │   ├── PostList.jsx
│   │   │   ├── PostCard.jsx
│   │   │   ├── SkillFilter.jsx
│   │   │   ├── Loader.jsx
│   │   │   └── EmptyState.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .env.example
│   └── package.json
│
├── server/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── postController.js
│   │
│   ├── models/
│   │   └── Post.js
│   │
│   ├── routes/
│   │   └── postRoutes.js
│   │
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Prerequisites

Before running the project, make sure you have:

- Node.js (v18 or later)
- npm
- MongoDB (Local or MongoDB Atlas)

---

## Clone the Repository

```bash
git clone https://github.com/your-username/collab-board.git

cd collab-board
```

---

## Install Backend Dependencies

```bash
cd server

npm install
```

---

## Install Frontend Dependencies

```bash
cd ../client

npm install
```

---

# 🔑 Environment Variables

### Server (.env)

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/collab-board

CLIENT_ORIGIN=http://localhost:5173
```

---

### Client (.env)

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

---

# ▶️ Running the Application

### Start Backend

```bash
cd server

npm run dev
```

---

### Start Frontend

```bash
cd client

npm run dev
```

---

After starting both servers:

Frontend

```
http://localhost:5173
```

Backend

```
http://localhost:5000
```

---

# 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/posts` | Retrieve all collaboration posts |
| POST | `/api/posts` | Create a new collaboration post |
| DELETE | `/api/posts/:id` | Delete a collaboration post |

---

# 🗄️ Database Schema

Each collaboration post contains:

```javascript
{
  name: String,
  title: String,
  description: String,
  skills: [String],
  createdAt: Date
}
```

---

# 📋 Assumptions

- No authentication was implemented, as specified in the assignment.
- Any user can create or delete collaboration posts.
- Skill filtering is handled on the client side because the expected dataset is small.
- Skill tags are entered as free text.
- Duplicate skill tags for the same post are prevented.
- Posts are displayed in reverse chronological order.
- Deleting a post permanently removes it from the database.

---

# 🚀 Future Improvements

If more time were available, the following features could be added:

### Authentication

- JWT Authentication
- Secure Login & Registration
- Password hashing using bcrypt
- Protected Routes
- Users can edit/delete only their own posts

### Scalability

- Backend filtering
- Pagination
- Infinite scrolling
- Search functionality
- MongoDB indexing
- Redis caching
- Docker deployment
- Cloud deployment (Render/Vercel)
- Rate limiting
- Logging & monitoring

---

# 📈 Stretch Goal Completed

✔ Basic input validation

✔ Empty state when no posts match the selected filter

---

# 🧠 Key Design Decisions

- Built using a modular React component architecture for maintainability.
- Used Axios for centralized API communication.
- Used Mongoose for clean database modeling.
- Client-side filtering provides instant feedback for smaller datasets.
- Responsive design ensures usability across desktop, tablet, and mobile devices.
- Toast notifications improve user experience for create and delete actions.

---

# 💡 Hardest Part of the Assignment

The most challenging part was designing a clean and responsive user interface while keeping the application simple and within the assignment scope. I focused on building reusable React components, maintaining clear state management, and ensuring smooth communication between the React frontend and the Express backend using REST APIs.

---
#challenges 
The most challenging part of this assignment was designing a clean and responsive user interface while keeping the application within the required scope. I approached it by breaking the UI into reusable React components and implementing each feature incrementally. I also focused on maintaining clean API communication between the React frontend and Express backend while ensuring a smooth user experience through loading states, validation, and responsive layouts.
---
# 👨‍💻 Author

**Khwahish Seth**

Built as part of the **OneShopAI Web Development Technical Assignment**.
