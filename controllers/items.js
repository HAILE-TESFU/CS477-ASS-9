
const Product = require('../models/product');

exports.getProductForm = (req, res, next) => {
    res.render('add-product', { 'pageTitle': 'My product page' })
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product({
        title: title,
        price: price,
        description: description,
        imageUrl: imageUrl,
        userId: req.user
    });
    product.save()
        .then(result => {
            res.redirect('/product');
        })
        .catch(err => console.log(err));
};


exports.getAllProducts = (req, res, next) => {
    Product.find()
    .then(products=>{
    res.render('product', {prod: products});
     })
     .catch(err=>console.log(err))
}

exports.getAdminProducts = (req, res, next) => {
    Product.find()
    .then(products=>{
    res.render('admin-Products', {prod: products});
     })
     .catch(err=>console.log(err))
}

exports.viewProduct = (req, res, next) => {
    Product.findById(req.params.productId)
        .then(product=>{
            res.render('product-detail', { prod: product });

        }) .catch(err=>console.log(err))
};

exports.editProductPage = (req, res, next) => {
    Product.findById(req.params.productId)
    .then(product=>{
        res.render('edit-product', { prod: product });

    }).catch(err=>console.log(err))
}

exports.editProductPost = (req, res, next) => {
    const updateItem = new Item(req.body.id, req.body.title, req.body.price, req.body.imageURL, req.body.description);
    updateItem.update()
        .then(result => {
            res.redirect('/shop');
        })
        .catch(err => console.log(err));

}



exports.deleteProduct = (req, res, next) => {
    Product.findByIdAndRemove(req.body.id)
        .then(result => {
            res.redirect('/adminProducts');
        })
        .catch(err => console.log(err));

}

