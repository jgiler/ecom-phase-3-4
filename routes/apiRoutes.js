const mysql = require("mysql"); // allows us to connect to mysql
const router = require("express").Router();
require("dotenv").config(); // allows creation of .env file. 


const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "ecommerce",
});

connection.connect();


router.get("/products", function(req, res) {
  connection.query(
    "SELECT prices.price_id,products.product,prices.price,products.about,products.category,products.url FROM prices INNER JOIN Products ON prices.price_id = products.product_id GROUP BY price_id",
    function(err, data) {
      err ? res.send(err) : res.send({ products: data });
    }
  );
});

router.get("/contacts", function(req, res) {
  connection.query("SELECT * FROM contacts", function(err, data) {
    err ? res.send(err) : res.json({ contacts: data });
  });
});
router.get("/productfilter/:category", function(req, res) {
  let category = req.params.category;
  connection.query(
    "SELECT * FROM products WHERE category LIKE ?",
    [category],
    function(err, data) {
      err ? res.send(err) : res.json({ products: data });
    }
  );
});

module.exports = router;
