let express = require('express');
let cartController = require('./controllers/cartController');

module.exports = app => {
    let router = express.Router();
    app.use('/api/carrito', router);

    router.post('/', cartController.create);

    router.delete('/:id', cartController.delete);

    router.get('/:id/productos', cartController.getProducts);

    router.post('/:id/productos', cartController.addProduct);

    router.delete('/:id/productos/:id_prod', cartController.removeProduct);
}