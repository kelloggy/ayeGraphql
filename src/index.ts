import { graphqlHTTP } from "express-graphql";
import { schema } from "./schemas/schema";
import { connectionSource } from "../ormconfig";
const express = require('express');

const app = express();
const main = async () => {
  try {
    await connectionSource.initialize();
    app.use(express.json());
    app.use('/graphql', graphqlHTTP({
      schema,
      graphiql: true
    }))
    app.listen(8080, () => {
      console.log("App is running: 8080")
    })
  } catch (err) {
    throw new Error(err)
  }
}

main();