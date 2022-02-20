const productsService = require("../services/productsService");

class Product {

    constructor() {}

    async getAll(req, res) {
        try {
            let product_id = Number(req.params.id);
            if (product_id) {
                let product = await productsService.getById(product_id);
                res.status(200).json(product);
            } else {
                let products = await productsService.getAll();
                res.status(200).json(products);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async create(req, res) {
        try {
            let product = req.body;
            let newProduct = await productsService.create(product);
            res.status(201).json(newProduct);
        } catch (error) {
            console.log(error);
        }
    }

    async update(req, res) {
        try {
            let id = req.params.id;
            let newProduct = req.body;
            newProduct = await productsService.update(id, newProduct);
            res.status(200).json(newProduct);
        } catch (error) {
            console.log(error);
        }
    }

    async delete(req, res) {
        try {
            let id = req.params.id;
            await productsService.delete(id);
            res.status(200).send({ message: "Product deleted" });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new Product();