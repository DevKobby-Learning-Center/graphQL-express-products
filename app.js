import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';
import resolvers from './resolvers';
const PORT = process.env.PORT || 8081 

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing');
})

const root = resolvers;



app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(PORT, () => console.log('Server is running...'));