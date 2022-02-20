let fs = require('fs');

class ProductsService {
    async getAll() {
        try {
            let products = JSON.parse(await fs.promises.readFile('./utils/Productos.json', 'utf8'));
            return products;
        } catch (error) {
            console.log(error);
        }
    }

    async getById(id) {
        try {
            let products = await this.getAll();
            let product = products.find(p => p.id === id);
            return product;
        } catch (error) {
            console.log(error);
        }
    }

    async create(product) {
        try {
            let products = await this.getAll();
            product.id = products.length + 1;
            product.timestamp = new Date();
            products.push(product);
            await fs.promises.writeFile('./utils/Productos.json', JSON.stringify(products));
            return product;
        } catch (error) {
            console.log(error);
        }
    }

    async update(id, product) {
        try {
            let products = await this.getAll();
            let index = products.findIndex(p => p.id === id);
            products[index] = product;
            await fs.promises.writeFile('./utils/Productos.json', JSON.stringify(products));
            return product;
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id) {
        try {
            let products = await this.getAll();
            let index = products.findIndex(p => p.id === id);
            products.splice(index, 1);
            await fs.promises.writeFile('./utils/Productos.json', JSON.stringify(products));
            return { message: 'Product deleted' };
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new ProductsService();