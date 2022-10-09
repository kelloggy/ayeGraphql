import {GraphQLFieldConfig, GraphQLList, GraphQLObjectType, GraphQLString, GraphQLInputObjectType, graphql, GraphQLInt} from 'graphql'
import { argsToArgsConfig } from 'graphql/type/definition';
import { resolve } from 'path';
import { List } from '../../entities/List'
import { ListType } from './type';

export const updateList = {
  type: ListType,
  args: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    tasks: { type: new GraphQLList(new GraphQLInputObjectType({
      name: "updateTask",
      fields: () => ({
        taskTitle: { type: GraphQLString},
        status: {type: GraphQLString}
      })
    }))} 
  },
  resolve(parent, args) {
    return List.update({id: args.id},{
      title: args.title,
      tasks: args.tasks,
      updatedAt: new Date()
    })
  }
}

export const createList = {
  type: ListType,
  args: {
    title: { type: GraphQLString },
    tasks: { type: new GraphQLList(new GraphQLInputObjectType({
      name: "createTask",
      fields: () => ({
        taskTitle: { type: GraphQLString},
        status: {type: GraphQLString}
      })
    }))}
  },
  resolve(parent, args) {
    return List.save({
      title: args.title,
      tasks: args.tasks,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }
}

export const moveTaskPosition = {
  type: ListType,
  args: {
    id: { type: GraphQLString },
    currentPosition: { type: GraphQLInt },
    moveTo: { type: GraphQLInt }
  },
  async resolve(parent, args) {
    const currentTask = await List.findOneOrFail({
      where: {
        id: args.id
      }
    })
    const temp = currentTask.tasks[args.currentPosition];
    currentTask.tasks[args.currentPosition] =  currentTask.tasks[args.moveTo];
    currentTask.tasks[args.moveTo] = temp;
    await List.update({
      id: args.id
    }, {
      tasks: currentTask.tasks
    })

  }
}