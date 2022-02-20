const cartService = require('../services/cartService');

class Cart {

    constructor() { }

    async create(req, res) {
        try {
            let cart = await cartService.create();
            res.status(200).json(cart);
        } catch (error) {
            console.log(error);
        }
    }

    async delete(req, res) {
        try {
            let cart_id = Number(req.params.id);
            if (cart_id) {
                let cart = await cartService.delete(cart_id);
                res.status(200).json(cart);
            } else {
                res.status(404).send({ message: "Cart not found" });
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getProducts(req, res) {
        try {
            let cart_id = Number(req.params.id);
            if (cart_id) {
                let products = await cartService.getProductos(cart_id);
                res.status(200).json(products);
            } else {
                res.status(404).send({ message: "Cart not found" });
            }
        } catch (error) {
            console.log(error);
        }
    }

    async addProduct(req, res) {
        try {
            let cart_id = Number(req.params.id);
            let product_id = Number(req.body.product_id);
            if (cart_id) {
                let product = await cartService.addProducto(cart_id, product_id);
                res.status(200).json(product);
            } else {
                res.status(404).send({ message: "Cart not found" });
            }
        } catch (error) {
            console.log(error);
        }
    }

    async removeProduct(req, res) {
        try {
            let cart_id = Number(req.params.id);
            let product_id = Number(req.params.product_id);
            if (cart_id) {
                let product = await cartService.removeProducto(cart_id, product_id);
                res.status(200).json(product);
            } else {
                res.status(404).send({ message: "Cart not found" });
            }
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = new Cart();