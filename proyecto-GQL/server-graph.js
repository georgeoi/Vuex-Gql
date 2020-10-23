const express = require('express');
const {ApolloServer, gql} = require('apollo-server-express');
const {fetchTasks,findTask,createTask,updateTask,deleteTask}= require("./task-services")
const cors = require('cors')

const typeDefs = gql`
    type Task{
        id: ID!
        name: String!
    }
    type Query {
      hello: String
      tasks: [Task]
      task(id:ID!): Task
      }

    input TaskInput{
      name: String!
    }

    type Mutation{
      createTask(input:TaskInput):Task
      updateTask(id:ID, input: TaskInput): Task
      deleteTask(id:ID): Boolean
    }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    tasks: ()=> fetchTasks(),
    task:(_,{id})=>{
      return findTask(id)
    }
  },
  Mutation:{
    createTask:(_,{input})=>{
      return createTask(input)
    },
    updateTask:(_,{id,input})=>{
      return updateTask(id, input)
    },
    deleteTask:(_,{id})=>{
      return deleteTask(id)
    }
  }
};


const APP_URL= 'http://localhost:8080';

const schema = new ApolloServer({ typeDefs, resolvers });



// const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
schema.applyMiddleware({ app })

app.options("*", cors());
app.use(cors({origin: APP_URL}));

// app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));
// app.get('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));

// server.applyMiddleware({ app });

app.listen({port: 3000}, () =>
  console.log(`Now browse to http://localhost:3000`+ schema.graphqlPath )
);