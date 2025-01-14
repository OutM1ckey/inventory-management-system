const express = require('express');
const productController = require('../controllers/productController');
const validateRequest = require('../validation/validateMiddleware');
const { createProductSchema, restockProductSchema, sellProductSchema } = require('../validation/validationSchemas');

const router = express.Router();

router.get('/', productController.getProducts);
router.post('/', validateRequest(createProductSchema), productController.createProduct);
router.post('/:id/restock', validateRequest(restockProductSchema), productController.restockProduct);
router.post('/:id/sell', validateRequest(sellProductSchema), productController.sellProduct);

module.exports = router;
