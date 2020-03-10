const express = require('express');
const itemController=require('../controllers/items')

const options = {
    "caseSensitive": false,
    "strict": false
};
const router = express.Router(options);

router.get('/product', itemController.getProductForm);
router.post('/product', itemController.postAddProduct);
router.get('/shop', itemController.getAllProducts);
router.get('/adminProducts', itemController.getAdminProducts);

router.get('/detail-product/:productId', itemController.viewProduct);
router.get('/edit-product/:productId', itemController.editProductPage);
router.post('/edit-product', itemController.editProductPost);
router.post('/delete-product', itemController.deleteProduct);




module.exports=router;