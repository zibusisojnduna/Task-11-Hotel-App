// Payment.js
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY'); // Use your Stripe publishable key

const Payment = () => {
    const [amount, setAmount] = useState(0);
    const [loading, setLoading] = useState(false);

    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);

        const stripe = await stripePromise;

        // Create a payment intent
        const response = await fetch('https://<YOUR_REGION>-<YOUR_PROJECT_ID>.cloudfunctions.net/createPaymentIntent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: amount * 100 }), // Convert to cents
        });

        const { clientSecret } = await response.json();

        const { error } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: {
                    number: '4242 4242 4242 4242', // For testing
                    exp_month: 12,
                    exp_year: 2024,
                    cvc: '123',
                },
            },
        });

        if (error) {
            console.error('Payment failed:', error);
        } else {
            alert('Payment successful!');
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handlePayment}>
            <h2>Make a Payment</h2>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Processing...' : 'Pay Now'}
            </button>
        </form>
    );
};

export default Payment;
