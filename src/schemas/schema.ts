import {GraphQLObjectType, GraphQLSchema} from 'graphql';
import { getAllLists } from './list/query';
import { updateList, createList, moveTaskPosition } from './list/mutation';

const Query = new GraphQLObjectType({
  name: 'BaseQuery',
  description: 'The base query',
  fields: {
    getAllLists
  }
})

const Mutation = new GraphQLObjectType({
  name: 'BaseMutation',
  description: 'The base mutation',
  fields: {
    updateList,
    createList,
    moveTaskPosition
  }
})

export const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
})