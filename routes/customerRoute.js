const express = require("express");
const router = express.Router();

const {createCustomer, retrieveCustomer, updateCustomer, deleteCustomer} = require("../controllers/customerController")

router.post("/create-Customer", createCustomer);

router.get("/retrieve-Customer", retrieveCustomer);

router.put("/update-Customer", updateCustomer);

router.post("/delete-Customer", deleteCustomer);


module.exports = router;