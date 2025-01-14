const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/', productController.getProducts);
router.post('/', productController.createProduct);
router.post('/:id/restock', productController.restockProduct);
router.post('/:id/sell', productController.sellProduct);

module.exports = router;
