# LandLow Backend Server

Backend API server for handling Stripe payment processing.

## Setup Instructions

1. **Install dependencies:**
   ```bash
   cd server
   npm install
   ```

2. **Create a `.env` file:**
   ```bash
   cp .env.example .env
   ```

3. **Add your Stripe Secret Key:**
   - Go to https://dashboard.stripe.com/apikeys
   - Copy your **Secret key** (starts with `sk_test_` for test mode)
   - Paste it in the `.env` file:
     ```
     STRIPE_SECRET_KEY=sk_test_your_actual_key_here
     ```

4. **Start the server:**
   ```bash
   npm run dev
   ```

   The server will run on `http://localhost:3001`

## API Endpoints

### POST `/api/create-payment-intent`
Creates a Stripe PaymentIntent for a property reservation.

**Request Body:**
```json
{
  "amount": 2500,
  "propertyId": 1,
  "customerInfo": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "(555) 123-4567"
  }
}
```

**Response:**
```json
{
  "clientSecret": "pi_xxx_secret_xxx",
  "paymentIntentId": "pi_xxx"
}
```

### POST `/api/confirm-payment`
Retrieves payment status and details.

**Request Body:**
```json
{
  "paymentIntentId": "pi_xxx"
}
```

### POST `/api/webhook`
Stripe webhook endpoint for payment events (optional).

## Security Notes

- Never commit your `.env` file with real keys
- Use test keys during development
- Switch to live keys only in production
- Keep your secret key secure and never expose it to the frontend

