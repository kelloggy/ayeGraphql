
import {  GraphQLString, GraphQLObjectType, GraphQLList, graphql } from "graphql";

export const ListType = new GraphQLObjectType({
  name: "List",
  fields: () => ({
    id: { type: GraphQLString},
    title: { type: GraphQLString},
    tasks: { type: new GraphQLList(new GraphQLObjectType({
      name: "task",
      fields: () => ({
        taskTitle: { type: GraphQLString},
        status: {type: GraphQLString}
      })
    }))}
  })
});
