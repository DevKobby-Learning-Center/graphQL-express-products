import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type ProductStatus {
        status: String
    }

    type Store {
        name: String
    }

    type Product {
        id: ID
        name: String
        description: String
        price: Float
        soldOut: Boolean
        status: String
        stores: [Store]!
    }

    type Query {
        getProduct(id: ID): Product
    }

    input StoreInput {
        name: String
    }

    input ProductInput {
        id: ID
        name: String
        description: String
        price: Float
        soldOut: Boolean
        status: String
        stores: [StoreInput]!
    }

    type Mutation {
        createProduct(input: ProductInput): Product
    }
`);

export default schema;