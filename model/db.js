const mongoose = require('mongoose')
console.log("Howw");
mongoose.connect("mongodb://localhost:27017/Products", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connected with Mongodb")
}).catch((err) => {
    console.log(err);
})

require('../model/product.schema')