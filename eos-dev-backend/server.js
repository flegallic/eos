const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const azCustomers = require("./app/azure/controllers/customers.controller.js");
const azInvoices = require("./app/azure/controllers/invoices.controller.js");
const azConsumption = require("./app/azure/controllers/consumption.controller.js");

const app = express();
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
// parse requests of content-type - application/json, x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// route
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to EOS App" });
});
app.get("/api/azure/customers", azCustomers.findAll);
app.get("/api/azure/customers/:id", azCustomers.findOne);
app.put("/api/azure/customers/:id", azCustomers.update);
app.get("/api/azure/billing", azInvoices.findAll);
app.get("/api/azure/billing/:reference", azConsumption.findOne);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
