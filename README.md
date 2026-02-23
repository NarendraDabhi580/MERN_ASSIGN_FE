# ShopHub — Frontend

React + TypeScript + Vite frontend for the ShopHub e-commerce assignment.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Routing**: React Router DOM v7
- **HTTP Client**: Axios
- **Auth**: JWT stored in localStorage

## Project Structure

```
src/
├── api/
│   └── api.ts              # Axios instance with auth interceptor
├── components/
│   ├── Navbar.tsx
│   └── ToastProvider.tsx
├── context/
│   └── AuthContext.tsx     # Global auth state (token, login, logout)
├── pages/
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── Products.tsx        # Product catalog with search & filter
│   ├── Cart.tsx            # Shopping cart
│   └── Checkout.tsx        # Order checkout
├── App.tsx                 # Routes + private route guard
├── main.tsx                # App entry point
└── index.css               # Global styles
```

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/NarendraDabhi580/MERN_ASSIGN_FE.git
cd MERN_ASSIGN_FE
```

### 2. Install dependencies

```bash
npm install
```

### 3. (Optional) Setup environment variable

By default the app connects to `http://localhost:3200/api`.  
If your backend runs on a different URL, create a `.env` file:

```bash
cp .env.example .env
```

Then set:

```
VITE_API_URL=http://localhost:3200/api
```

### 4. Make sure the backend is running

See the [backend repo](https://github.com/NarendraDabhi580/MERN_ASSIGN_BE) and start it first.

### 5. Start the frontend

```bash
npm run dev
```

App runs on `http://localhost:5173`

---

## Features

- 🔐 Register & Login with JWT authentication
- 🛍️ Product catalog with search and category filter
- 🛒 Add / remove / update items in cart
- 💳 Checkout flow
- 🔒 Private routes (redirects to login if not authenticated)
- 📱 Responsive design

---

## Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start dev server         |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

---

## Environment Variables

| Variable       | Default                     | Description          |
| -------------- | --------------------------- | -------------------- |
| `VITE_API_URL` | `http://localhost:3200/api` | Backend API base URL |
