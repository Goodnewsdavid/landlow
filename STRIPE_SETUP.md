# Stripe Payment Setup Instructions

## Complete Setup Guide

### Step 1: Get Your Stripe API Keys

1. Go to https://dashboard.stripe.com/apikeys
2. Copy both keys:
   - **Publishable key** (starts with `pk_test_` for test mode)
   - **Secret key** (starts with `sk_test_` for test mode)

### Step 2: Set Up Backend Server

1. **Navigate to server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file:**
   ```bash
   cp .env.example .env
   ```

4. **Add your Stripe Secret Key to `server/.env`:**
   ```
   STRIPE_SECRET_KEY=sk_test_your_actual_secret_key_here
   PORT=3001
   FRONTEND_URL=http://localhost:5173
   ```

5. **Start the backend server:**
   ```bash
   npm run dev
   ```
   
   The server will run on `http://localhost:3001`

### Step 3: Set Up Frontend

1. **Create `.env` file in the root directory (landlow folder):**
   ```
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_publishable_key_here
   VITE_API_URL=http://localhost:3001
   ```

2. **Restart your frontend development server:**
   ```bash
   npm run dev
   ```

### Step 4: Test the Integration

1. Make sure both servers are running:
   - Backend: `http://localhost:3001`
   - Frontend: `http://localhost:5173`

2. Navigate to a property detail page
3. Click "Reserve Now with Secure Checkout"
4. Fill in the form and use Stripe test card: `4242 4242 4242 4242`
5. Use any future expiry date, any CVC, and any ZIP code

## File Structure

```
landlow/
├── server/              # Backend server
│   ├── server.js       # Express server with Stripe integration
│   ├── .env            # Backend environment variables (SECRET KEY)
│   └── package.json
├── src/
│   └── pages/
│       └── Checkout.tsx # Frontend checkout page
└── .env                # Frontend environment variables (PUBLISHABLE KEY)
```

## Security Notes

- **Never commit `.env` files** with real keys to version control
- **Secret key** stays on the backend only (server/.env)
- **Publishable key** is safe to use in frontend (root .env)
- Use **test keys** during development
- Switch to **live keys** only in production

## Stripe Test Cards

For testing payments, use these test card numbers:
- **Success:** `4242 4242 4242 4242`
- **Decline:** `4000 0000 0000 0002`
- **Requires Authentication:** `4000 0025 0000 3155`

Use any future expiry date, any CVC, and any ZIP code.

