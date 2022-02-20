let express = require('express');
let productsController = require('./controllers/productsController'); 

module.exports = app => {
    let router = express.Router();
    app.use('/api/productos', router);

    router.get('/:id?', productsController.getAll);

    router.post('/', productsController.create);

    router.put('/:id', productsController.update);

    router.delete('/:id', productsController.delete);
}