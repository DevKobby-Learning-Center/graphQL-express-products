class Product {
    constructor(id, {name, description, price, soldOut, status, stores}) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.soldOut = soldOut;
        this.status = status;
        this.stores = stores;
    }
}

const productDatabase = {};

const resolvers = {
    getProduct: ({id}) => new Product(id, productDatabase[id]),
    createProduct: ({input}) => {
        const id = require('crypto').randomBytes(10).toString('hex');

        productDatabase[id] = input;
        return new Product(id, input)
    }
}

export default resolvers;