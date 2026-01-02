# How to Get Free Stripe Test API Keys

## Quick Steps (Takes 2-3 minutes)

### Step 1: Create a Free Stripe Account
1. Go to: **https://dashboard.stripe.com/register**
2. Sign up with your email (no credit card required for test mode)
3. Verify your email address

### Step 2: Get Your Test API Keys
1. After logging in, go to: **https://dashboard.stripe.com/test/apikeys**
2. You'll see two keys:
   - **Publishable key** (starts with `pk_test_...`)
   - **Secret key** (starts with `sk_test_...`) - Click "Reveal test key" to see it

### Step 3: Add Keys to Your Project

**Backend (`server/.env`):**
```
STRIPE_SECRET_KEY=sk_test_51xxxxxxxxxxxxx
PORT=3001
FRONTEND_URL=http://localhost:5173
```

**Frontend (root `.env`):**
```
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_51xxxxxxxxxxxxx
VITE_API_URL=http://localhost:3001
```

## Important Notes

✅ **Test keys are FREE** - No credit card required  
✅ **Test mode is safe** - No real charges will be made  
✅ **Test keys start with `pk_test_` and `sk_test_`**  
✅ **You can test immediately** after getting the keys  

## Test Card Numbers

Once you have your keys, use these test cards:

- **Success:** `4242 4242 4242 4242`
- **Decline:** `4000 0000 0000 0002`
- **Requires 3D Secure:** `4000 0025 0000 3155`

Use any:
- Future expiry date (e.g., 12/25)
- Any 3-digit CVC (e.g., 123)
- Any ZIP code (e.g., 12345)

## Need Help?

- Stripe Documentation: https://stripe.com/docs/testing
- Stripe Dashboard: https://dashboard.stripe.com
- Support: https://support.stripe.com





