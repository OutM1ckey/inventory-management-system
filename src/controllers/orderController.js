const mongoose = require('mongoose');
const Order = require('../models/orderModel');
const Product = require('../models/productModel');

// Create Order
exports.createOrder = async (req, res) => {
    try {
        const { customerId, products } = req.body;

        if (!customerId || !products || !Array.isArray(products) || products.length === 0) {
            return res.status(400).json({ message: "Invalid order data. Provide customerId and products array." });
        }

        let isStockValid = true;

        for (const item of products) {
            if (!mongoose.Types.ObjectId.isValid(item.productId)) {
                return res.status(400).json({ 
                    message: `Invalid productId: ${item.productId}. Please provide a valid ObjectId.` 
                });
            }

            const product = await Product.findById(item.productId);

            if (!product) {
                return res.status(404).json({ message: `Product with ID ${item.productId} not found.` });
            }

            if (product.stock < item.quantity) {
                isStockValid = false;
                return res.status(400).json({ 
                    message: `Insufficient stock for product ${product.name}. Available: ${product.stock}, Requested: ${item.quantity}` 
                });
            }
        }

        for (const item of products) {
            const product = await Product.findById(item.productId);

            product.stock -= item.quantity;
            await product.save();
        }

        const newOrder = new Order({
            customerId,
            products,
            createdAt: new Date(),
        });

        const savedOrder = await newOrder.save();

        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
