const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        maxlength: 50
    },
    description: {
        required: true,
        type: String,
        maxlength: 50
    },
    price: {
        required: true,
        type: Number,
        maxlength: 50,
        min: 0
    },
    stock: {
        required: true,
        type: Number,
        maxlength: 50,
        min: 0
    }
})

module.exports = mongoose.model('Product', productSchema)
