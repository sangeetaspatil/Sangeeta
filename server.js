const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = 8080 || process.env.PORT

mongoose.connect('mongodb+srv://Sangeeta:12345@cluster0.ggcupvz.mongodb.net/customer', { useNewUrlParser: true,            useUnifiedTopology: true })

app.use(express.json())
app.use(cors());
app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`)
});

app.use('/api/customers', require("./routes/customerRoute"))




