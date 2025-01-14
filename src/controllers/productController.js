const Product = require('../models/productModel');

// Get All Products
exports.getProducts = async (req, res) => {
    try {
        const data = await Product.find();
        
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
};

// Create Product
exports.createProduct = async (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock
    })

    try {
        const data = await newProduct.save();

        res.status(201).json(data)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
};

// Restock Product
exports.restockProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const increaseStock = req.body.increaseStock;
        const product = await Product.findById(id);

        product.stock += increaseStock;
        const data = await product.save();

        res.status(200).json(data);
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
};

// Sell Product
exports.sellProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const decreaseStock = req.body.decreaseStock;
        const product = await Product.findById(id);

        if (product.stock > 0 && product.stock >= decreaseStock) {
            product.stock -= decreaseStock;
            const data = await product.save();

            res.status(200).json(data);
        }
        else {
            res.status(400).json({message: 'Out of Stock'})
        }
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
};