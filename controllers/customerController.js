const express = require("express");
const Customer = require("../models/customer");
const BAD_REQUEST = 400;

const isValidNumber = (num) => {
  const regexp = /^\d+$/;
  return regexp.test(num) && num.length === 10;
};

const createCustomer = async (req, res) => {
  try {
    const { name, email, contactNumber, address } = req.body;
    if(name && email && contactNumber && isValidNumber(contactNumber) && address){
      const newCustomer = new Customer({ name, email, contactNumber, address });
      const customer = await newCustomer.save();
      res.json(customer);
    } else {
      res.status(400).send({ message: 'Invalid field entry' });
      log.error('Empty Fields Recieved');
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const retrieveCustomer = async (req, res) => {
  try {
    const customer = await Customer.find();
    if (customer) {
        res.json(customer);
    } else {
      res.status(404).json({ error: 'Customer not found' });
    }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateCustomer = async (req, res) => {
    try {
      const customerId = req.body.customerId;
      const { name, email, contactNumber, address } = req.body;

      const updateCustomer = await Customer.findByIdAndUpdate(
        customerId,
        { name, email, contactNumber, address },
        { new: true }
      );
        if (updateCustomer) {
            res.json(updateCustomer);
        } else {
            res.status(404).json({ error: 'Customer not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteCustomer = async (req, res) => {
  try {
    const deleteCustomer = await Customer.findOneAndDelete({ _id: req.body.customerId });
    if (deleteCustomer) {
        res.json(deleteCustomer);
    } else {
        res.status(404).json({ error: 'Customer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
}
};


module.exports = {
  createCustomer,
  retrieveCustomer,
  updateCustomer,
  deleteCustomer
};