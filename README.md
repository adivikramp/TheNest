# 🌿 The Nest - Online Nursery

A full-stack MERN web application for an online nursery business. Browse plants and garden tools, place orders, leave feedback, and manage your account - all in one place.

---

## Features

- **Browse Plants & Tools** - 20+ plant varieties and 11 garden tools with care details and pricing
- **User Authentication** - Register and login with JWT-based auth, passwords hashed with bcrypt
- **Place Orders** - Submit orders with delivery location details, stored per user
- **Leave Feedback** - Rate product and delivery quality, visible on your dashboard
- **User Dashboard** - View all your orders and feedbacks in one place
- **Protected Routes** - Auth-gated pages redirect unauthenticated users
- **Responsive Design** - Mobile-first layout with hamburger nav

---

## Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| React Router DOM | 7 | Client-side routing |
| Tailwind CSS | 4 | Utility-first styling |
| Vite | 8 | Build tool and dev server |
| Biome | 2 | Linter and formatter |

### Backend
| Technology | Version | Purpose |
|---|---|---|
| Node.js | - | Runtime |
| Express | 5 | HTTP server and routing |
| MongoDB + Mongoose | 9 | Database and ODM |
| JSON Web Token | 9 | Authentication tokens |
| bcryptjs | 3 | Password hashing |
| dotenv | 17 | Environment variable loading |
| nodemon | 3 | Dev server auto-restart |

---

## Project Structure

```
Nursery/
├── frontend/                 # React + Vite app
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── contexts/         # React context (User, Form)
│   │   ├── controllers/      # Fetch API wrappers
│   │   ├── data/             # Static JSON data (plants, tools, carousel)
│   │   ├── pages/            # Route-level page components
│   │   │   ├── forms/        # Order and Feedback forms
│   │   │   └── users/        # Login, Register, Dashboard
│   │   └── routes/           # AuthRoutes and GuestRoutes guards
│   └── public/images/        # Plant, tool, and hero images
│
└── backend/                  # Express + MongoDB API
    ├── controllers/          # Route handler logic
    ├── middleware/            # JWT auth middleware
    ├── models/               # Mongoose schemas
    └── routes/               # API route definitions
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB instance (local or Atlas)

### 1. Clone the repository

```bash
git clone <repo-url>
cd Nursery
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_jwt_secret_here
```

Start the backend:

```bash
node index.js          # production
npx nodemon index.js   # development (auto-restart)
```

### 3. Set up the frontend

```bash
cd frontend
npm install
```

Create `frontend/.env`:

```env
VITE_BACKEND_URL=http://localhost:5000
```

Start the dev server:

```bash
npm run dev
```

App runs at **http://localhost:5173**

---

## Available Scripts

### Frontend

| Script | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Run Biome linter |
| `npm run format` | Auto-format source files |
| `npm run check` | Lint + format with auto-fix |

---

## API Endpoints

### Auth - `/api/users`

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/register` | Register new user | No |
| POST | `/login` | Login, returns JWT | No |

### Forms - `/api/forms`

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| POST | `/order` | Place a new order | Yes |
| POST | `/feedback` | Submit feedback | Yes |
| GET | `/userOrders` | Get current user's orders | Yes |
| GET | `/userFeedbacks` | Get current user's feedbacks | Yes |

> Auth endpoints require `Authorization: Bearer <token>` header.

---

## Environment Variables

### Backend (`backend/.env`)

| Variable | Description |
|---|---|
| `PORT` | Server port (default `5000`) |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for signing JWTs |

### Frontend (`frontend/.env`)

| Variable | Description |
|---|---|
| `VITE_BACKEND_URL` | Backend base URL (e.g. `http://localhost:5000`) |

---

## License

MIT
