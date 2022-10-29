const mongoose = require("mongoose");
const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
const myEnv = dotenv.config();
dotenvExpand.expand(myEnv);

const products = require("./data/products");
const Product = require("../model/product");

mongoose.set("useFindAndModify", false);
mongoose.set("useUnifiedTopology", true);
mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  .then(() =>
    Product.collection.insertMany(products, () =>
      console.log("Fixtures created successfully")
    )
  );
