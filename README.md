# NATA Monorepo

MERN starter for a marketing + membership site with Auth0, protected dashboard routing, and Stripe/Square checkout adapters.

## Stack

- Frontend: React, React Router DOM, Redux Toolkit, Axios, Material UI, Framer Motion
- Backend: Node.js, Express, MongoDB (Mongoose)
- Auth: Auth0
- Payments: Stripe and Square provider adapters

## Structure

- frontend: Vite React app
- backend: Express API app

## Setup

1. Copy env templates:
   - frontend/.env.example to frontend/.env
   - backend/.env.example to backend/.env
2. Fill in Auth0, MongoDB, Stripe, and Square credentials.
3. Install dependencies from repo root:
   npm install
4. Start both apps from repo root:
   npm run dev

## Routes

Frontend routes:

- / (Home)
- /about
- /membership
- /contact
- /auth/login
- /auth/signup
- /auth/callback
- /dashboard (protected)

Backend API routes:

- GET /health
- POST /api/contact
- GET /api/membership/plans
- POST /api/payments/checkout-session
- POST /api/payments/webhook/:provider
- GET /api/user/me (Auth0 JWT required)

## Notes

- Navigation uses centered circular gold logo placeholder.
- Cart and search icons are intentionally removed.
- Right nav action switches between Register/Login and Dashboard/Logout based on auth state.
- Top white call-us bar is intentionally not included.
- Dashboard is a protected starter shell for the next content phase.
