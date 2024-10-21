// functions/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Stripe = require('stripe');
const stripe = Stripe('YOUR_SECRET_KEY'); // Use your Stripe secret key

admin.initializeApp();

exports.createPaymentIntent = functions.https.onRequest(async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }
    const { amount } = req.body; // Amount should be in cents
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd', // Change to your desired currency
        });
        res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});
