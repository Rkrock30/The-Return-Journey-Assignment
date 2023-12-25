const mongoose = require('mongoose')

var productSchema = new mongoose.Schema(
    {
        productId: {
            type: String,
            required: true,
        index: {
            unique: true
        }
        },
        productName:
        {
            type: String,
            required: true,
        },
        price:
        {
            type: Number,
            required: true,
        },
        created_on:
        {
            type: Date,
        default: Date.now
        
        },
        updated_on:
        {
            type: Date,
            
        }
        
    })
const product = new mongoose.model("Product", productSchema)
module.exports=product