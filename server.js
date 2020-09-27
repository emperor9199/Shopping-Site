const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51HVfwqDg3IaavaVbqXaX2Ox9bJwUDgH9oE1rM73iAkZVqIfxTg4Hbd8OnUNo8rYHb0J2tzjGixwQGo40hPqpLSTM008agVWkfq"
);
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server Side");
});

app.post("/checkout", async (req, res) => {
  let error;
  let status;

  try {
    const { product, token } = req.body;
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const key = uuidv4();

    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
        description: "all products description",
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      { idempotencyKey: key }
    );
    status = "success";
  } catch (error) {
    console.log(error);
    status = "error";
  }
  res.json({ status });
});

app.listen(3001);
