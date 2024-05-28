import { NextFunction, Request, Response } from "express";

const express = require('express');
const app = express();
const PORT = 9191;

const morgan = require('morgan');
const cors = require('cors');
const stripe = require('stripe')(`${process.env.STRIPE_KEY}`)
require('dotenv').config()

// Inbuilt Middlewares
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Third party
app.use(morgan('dev'));
app.use(cors())

app.post('/create-checkout-session', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body
        console.log('req >> ', data)
        const session = await stripe.checkout.sessions.create({
            customer_email: 'customer@example.com',
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'T-shirt',
                        },
                        unit_amount: 2000,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: 'http://localhost:9191/success',
            cancel_url: 'http://localhost:9191/cancel',
        });
        // const paymentIntent = await stripe.paymentIntents.create({
        //     amount: 4000,
        //     currency: "usd",
        //     // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        //     automatic_payment_methods: {
        //         enabled: true,
        //     },
        // });
        res.json({
            status: 200,
            // url: session
        })
    } catch (err) {
        return next(err)
    }
})

app.get('/success', (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log('req is >> ', req.body)
        res.json({
            // data,
            message: 'successfull',
            status: 200
        })
    } catch (err) {
        return next(err);
    }
})

app.get('/cancel', (req: Request, res: Response, next: NextFunction) => {
    try {
        const { data } = req.body;
        console.log('data is >> ', data)
        res.json({
            data,
            status: 200
        })
    } catch (err) {
        return next(err);
    }
})

app.post('/webhook-triggered', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const event = req.body;
        console.log('event >> ', event)
        if (event.type == 'checkout.session.completed') {
            var sessionId = event.data.object.id;
            console.log("session Id is >> ", sessionId)
            console.log("event ko payment intent >> ", event.data.object.payment_intent)
            const result = await stripe.checkout.sessions.retrieve(sessionId, { expand: ['payment_intent.payment_method'] });
            console.log("Result is >> ", result)
        }
        res.json({
            message: 'Response'
        })
    } catch (err) {
        return next(err);
    }
})

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
    res.status(err.status || 500);
    res.json({
        message: err.message || err,
        status: err.status || 400
    })
})

app.listen(PORT, () => {
    console.log(`Server is listening at port: ${PORT}`)
})