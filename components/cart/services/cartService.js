let fs = require('fs');

class CartService {

    async create() {
        try {
            let carts = JSON.parse(await fs.promises.readFile('./utils/Carritos.json', 'utf8'));
            let cart = {
                id: carts.length + 1,
                timestamp: new Date(),
                productos: []
            }
            carts.push(cart);
            await fs.promises.writeFile('./utils/Carritos.json', JSON.stringify(carts));
            return cart;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            let carts = JSON.parse(await fs.promises.readFile('./utils/Carritos.json', 'utf8'));
            return carts;
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id) {
        try {
            let carts = await this.getAll();
            let index = carts.findIndex(c => c.id === id);
            carts.splice(index, 1);
            await fs.promises.writeFile('./utils/Carritos.json', JSON.stringify(carts));
            return { message: 'Cart deleted' };
        } catch (error) {
            console.log(error);
        }
    }

    async getProductos(id) {
        try {
            let carts = await this.getAll();
            let cart = carts.find(c => c.id === id);
            return cart.productos;
        } catch (error) {
            console.log(error);
        }
    }

    async addProducto(id, id_prod) {
        try {
            let carts = await this.getAll();
            let index = carts.findIndex(c => c.id === id);
            carts[index].productos.push(id_prod);
            await fs.promises.writeFile('./utils/Carritos.json', JSON.stringify(carts));
            return id_prod;
        } catch (error) {
            console.log(error);
        }
    }

    async removeProducto(id, producto_id) {
        try {
            let carts = await this.getAll();
            let index = carts.findIndex(c => c.id === id);
            let indexProducto = carts[index].productos.findIndex(p => p.id === producto_id);
            carts[index].productos.splice(indexProducto, 1);
            await fs.promises.writeFile('./utils/Carritos.json', JSON.stringify(carts));
            return { message: 'Product removed' };
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new CartService();