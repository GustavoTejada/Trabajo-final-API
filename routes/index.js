let apiProducts = require('../components/products');
let apiCart = require('../components/cart');

module.exports = app => {
    apiProducts(app);
    apiCart(app);

    app.get('/', (req, res) => {
        res.send('Desde la carpeta routes');
    });
}