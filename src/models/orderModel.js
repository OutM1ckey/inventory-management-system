const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerId: {
        required: true,
        type: String,
        maxlength: 50
    },
    products: [
        {
            productId: { 
                type: mongoose.Schema.Types.ObjectId,
                required: true, 
                ref: 'Product' 
            },
            quantity: { 
                type: Number, 
                required: true, 
                min: 1,
                maxlength: 50
            }
        }
    ],
})

module.exports = mongoose.model('Order', orderSchema)
