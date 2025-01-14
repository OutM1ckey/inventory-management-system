const express = require('express');
const orderController = require('../controllers/orderController');
const validateRequest = require('../validation/validateMiddleware');
const { orderSchema } = require('../validation/validationSchemas');

const router = express.Router();

router.post('/', validateRequest(orderSchema), orderController.createOrder);

module.exports = router;
