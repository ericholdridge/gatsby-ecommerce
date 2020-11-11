const express = require("express");
const gatsby = require("gatsby-plugin-nodejs");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const stripe = require("stripe")("sk_test_X36cH7sG8ETI9igvqeIcj0fa");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

gatsby.prepare({ app }, () => {
  app.post("/checkout", async (req, res) => {
    const { email, totalPrice } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalPrice,
      currency: "usd",
      // Verify your integration in this guide by including this parameter
      metadata: { integration_check: "accept_a_payment" },
      receipt_email: email,
    });

    res.json({ client_secret: paymentIntent["client_secret"] });
  });
});

const port = 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
