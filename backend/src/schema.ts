import { idArg, intArg, list, makeSchema, nonNull, nullable, objectType, stringArg } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'

const Game = objectType({
  name: 'Game',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.description()
    t.model.categories({
      pagination: false,
    })
    t.model.game_evaluation({
      pagination: false,
    })
    t.model.createdAt()
    t.model.updatedAt()
  },
})

const Category = objectType({
  name: 'Category',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.games({
      pagination: false,
    })
    t.model.createdAt()
    t.model.updatedAt()
  },
})

const GameEvaluation = objectType({
  name: 'GameEvaluation',
  definition(t) {
    t.model.id()
    t.model.game()
    t.model.value()
    t.model.createdAt()
    t.model.updatedAt()
  },
})

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.crud.game()
    t.crud.games({ filtering: true })
    t.crud.category()
    t.crud.categories({ filtering: true })
    t.crud.gameEvaluations({ filtering: true })
    t.field('averageEvaluation', {
      type: 'Int',
      args: {
        game: nonNull(intArg()),
      },
      resolve: async (_, { game }, ctx) => {
        const avarage = await ctx.prisma.gameEvaluation.aggregate({
          avg: {
            value: true,
          },
          where: {
            id: game,
          },
        })
        return avarage.avg.value
      },
    })

    // t.list.field('feed', {
    //   type: 'Post',
    //   resolve: (_, args, ctx) => {
    //     return ctx.prisma.post.findMany({
    //       where: { published: true },
    //     })
    //   },
    // })

    // t.list.field('filterPosts', {
    //   type: 'Post',
    //   args: {
    //     searchString: nullable(stringArg()),
    //   },
    //   resolve: (_, { searchString }, ctx) => {
    //     return ctx.prisma.post.findMany({
    //       where: {
    //         OR: [{ title: { contains: searchString } }, { content: { contains: searchString } }],
    //       },
    //     })
    //   },
    // })
  },
})

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneGame()
    t.crud.createOneCategory()
    t.crud.createOneGameEvaluation({ alias: 'evaluate' })
    // t.crud.deleteOneCategory()
    // t.crud.deleteOneGameEvaluation()
    // t.field('createDraft', {
    //   type: 'Post',
    //   args: {
    //     title: nonNull(stringArg()),
    //     content: stringArg(),
    //     authorEmail: nonNull(stringArg()),
    //   },
    //   resolve: (_, { title, content, authorEmail }, ctx) => {
    //     return ctx.prisma.post.create({
    //       data: {
    //         title,
    //         content,
    //         published: false,
    //         author: {
    //           connect: { email: authorEmail },
    //         },
    //       },
    //     })
    //   },
    // })
    // t.nullable.field('publish', {
    //   type: 'Post',
    //   args: {
    //     id: intArg(),
    //   },
    //   resolve: (_, { id }, ctx) => {
    //     return ctx.prisma.post.update({
    //       where: { id: Number(id) },
    //       data: { published: true },
    //     })
    //   },
    // })
  },
})

export const schema = makeSchema({
  types: [Query, Mutation, Game, Category, GameEvaluation],
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  contextType: {
    module: require.resolve('./context'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
})
