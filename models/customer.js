const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
    },

    email: {
        type: String,  
    },

    contactNumber: {
        type: Number,
       
    },
    address: {
      type: String,  
  },

}, { timestamps: true });

module.exports = mongoose.model("Customer", customerSchema);