import {GraphQLFieldConfig, GraphQLList, GraphQLObjectType} from 'graphql'
import { List } from '../../entities/List'
import { ListType } from './type';

export const getAllLists:  GraphQLFieldConfig<any, any, any> = {
  type: new GraphQLList(ListType),
  resolve: (parent, args) => {
  return List.find();
  }
}