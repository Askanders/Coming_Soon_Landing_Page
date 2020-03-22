require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//----------------------------------------------------------

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
const DB_PORT = 27017;
const DB_NAME = "subscribersDB";

mongoose.connect(
  `mongodb://localhost:${DB_PORT}/${DB_NAME}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  },
  (err) => {
    if (err) throw err;
    console.log(`Established connection to Database;`);
    console.log(`Database in use: ${DB_NAME};`);
    console.log(`Database active on port: ${DB_PORT};`);
  }
);

//----------------------------------------------------------

// Schemas
const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email field required"],
    unique: true
  }
});

// Models
const Subscriber = new mongoose.model("Subscriber", subscriberSchema);

//----------------------------------------------------------

app
  .route("/")
  .get((req, res) => {
    res.sendFile(__dirname + "/index.html");
  })
  .post((req, res) => {
    const newSubscriber = new Subscriber({
      email: req.body.email
    });

    newSubscriber.save();
    res.sendFile(__dirname + "/success.html");
  });

app.listen(PORT, () => console.log(`Server started on port ${PORT};`));
