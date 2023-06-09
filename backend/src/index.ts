import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import { Resolvers } from './gql/resolvers-types';

const schema = readFileSync('./src/gql/schema.graphql', 'utf8')

const resolvers: Resolvers = {
  Query: {
    forms: async (_parent, _args) => {
      try {
        const ret = await prisma.form.findMany(
          {
            include: {
              questions: {
                include: {
                  options: true,
                  logics: {
                    include: {
                      options: true,
                      formOutput: true,
                      nextQuestion: true,
                    }
                  }
                },
              },
              responses: {
                include: {
                  selectedOptions: true
                },
              },
              formOutputs: true,
            },
          }
        );
        return ret;
      } catch (e) {
        console.error(e);
        return [];
      }
    },
    form: async (_parent, args) => {
      try {
        const ret = await prisma.form.findUnique(
          {
            where: { id: args.id },
            include: {
              questions: {
                include: {
                  options: true,
                  logics: {
                    include: {
                      options: true,
                      formOutput: true,
                      nextQuestion: true,
                    }
                  }
                },
              },
              responses: {
                include: {
                  selectedOptions: true
                },
              },
              formOutputs: true,
            },
          }
        );
        return ret;
      } catch (e) {
        console.error(e);
        return null;
      }
    },
    questions: async (_parent, _args) => {
      try {
        const ret = await prisma.question.findMany(
          {
            include: {
              options: true,
            },
          }
        );
        return ret;
      } catch (e) {
        console.error(e);
        return [];
      }
    },
    question: async (_parent, args) => {
      try {
        const ret = await prisma.question.findUnique(
          {
            where: { id: args.id },
            include: {
              options: true,
            },
          }
        );
        return ret;
      } catch (e) {
        console.error(e);
        return null;
      }
    },
    options: async (_parent, _args) => {
      try {
        const ret = await prisma.option.findMany();
        return ret;
      } catch (e) {
        console.error(e);
        return [];
      }
    },
    option: async (_parent, args) => {
      try {
        const ret = await prisma.option.findUnique(
          {
            where: { id: args.id },
          }
        );
        return ret;
      } catch (e) {
        console.error(e);
        return null;
      }
    },
    responses: async (_parent, _args) => {
      try {
        const ret = await prisma.response.findMany(
          {
            include: {
              selectedOptions: true,
            },
          }
        );
        return ret;
      } catch (e) {
        console.error(e);
        return [];
      }
    },
    response: async (_parent, args) => {
      try {
        const ret = await prisma.response.findUnique(
          {
            where: { id: args.id },
            include: {
              selectedOptions: true,
            },
          }
        );
        return ret;
      } catch (e) {
        console.error(e);
        return null;
      }
    },
  },
  Mutation: {
    createForm: async (_parent, args) => {
      try {
        const ret = await prisma.form.create(
          {
            data: {
              title: args?.title || "",
            },
          }
        );
        return ret
      } catch (e) {
        console.error(e);
        return null;
      }
    },
    createQuestion: async (_parent, args) => {
      try {
        const prevFormQs = await prisma.form.findUnique(
          {
            where: { id: args.formId },
            include: {
              questions: true,
            },
          }
        );
        const ret = await prisma.question.create(
          {
            data: {
              content: args.content || "",
              index: prevFormQs?.questions.length || 0,
              multiple: args.multiple || false,
              form: {
                connect: {
                  id: args.formId,
                },
              },
            },
          }
        );
        return ret
      } catch (e) {
        console.error(e);
        return null;
      }
    },
    createOption: async (_parent, args) => {
      try {
        const prevQOpts = await prisma.question.findUnique(
          {
            where: { id: args.questionId },
            include: {
              options: true,
            },
          }
        );
        const ret = await prisma.option.create(
          {
            data: {
              content: args.content || "",
              index: prevQOpts?.options.length || 0,
              question: {
                connect: {
                  id: args.questionId,
                },
              },
            },
          }
        );
        return ret
      } catch (e) {
        console.error(e);
        return null;
      }
    },
    createResponse: async (_parent, args) => {
      try {
        const ret = await prisma.response.create(
          {
            data: {
              form: {
                connect: {
                  id: args.formId,
                },
              },
              selectedOptions: {
                connect: args.optionIds.map((id) => ({ id })),
              }
            },
            include: {
              selectedOptions: true,
            }
          }
        );
        return ret
      } catch (e) {
        console.error(e);
        return null;
      }
    },
    createFormOutput: async (_parent, args) => {
      try {
        const ret = await prisma.formOutput.create(
          {
            data: {
              form: {
                connect: {
                  id: args.formId,
                },
              },
              content: "",
            },
          }
        );
        return ret
      } catch (e) {
        console.error(e);
        return null;
      }
    },
    createLogic: async (_parent, args) => {
      try {
        const question = await prisma.question.findUnique(
          {
            where: { id: args.questionId },
            include: {
              logics: true,
            },
          }
        );

        const ret = await prisma.logic.create(
          {
            data: {
              index: question?.logics.length || 0,
              isIf: question?.logics.length === 0,
              isElse: args.isElse,
              question: {
                connect: {
                  id: args.questionId,
                },
              },
            },
          }
        );
        return ret
      } catch (e) {
        console.error(e);
        return null;
      }
    },
    updateForm: async (_parent, args) => {
      try {
        const ret = await prisma.form.update(
          {
            where: { id: args.id },
            data: {
              title: args?.title || "",
            },
          }
        );
        return ret
      } catch (e) {
        console.error(e);
        return null;
      }
    },
    updateQuestion: async (_parent, args) => {
      try {
        const ret = await prisma.question.update(
          {
            where: { id: args.id },
            data: {
              content: args?.content || undefined,
              multiple: args?.multiple || undefined,
            },
          }
        );
        return ret
      } catch (e) {
        console.error(e);
        return null;
      }
    },
    updateOption: async (_parent, args) => {
      try {
        const ret = await prisma.option.update(
          {
            where: { id: args.id },
            data: {
              content: args?.content || undefined,
              index: args?.index || undefined,
            },
          }
        );
        return ret
      } catch (e) {
        console.error(e);
        return null;
      }
    },
    updateFormOutput: async (_parent, args) => {
      try {
        const ret = await prisma.formOutput.update(
          {
            where: { id: args.id },
            data: {
              content: args?.content || undefined,
              title: args?.title || undefined,
            },
          }
        );
        return ret
      } catch (e) {
        console.error(e);
        return null;
      }
    },
    updateLogic: async (_parent, args) => {
      try {
        const prevOptions = await prisma.logic.findUnique(
          {
            where: { id: args.id },
            include: {
              options: true,
            },
          }
        );
        const newConnections = args?.options?.filter((id) => !prevOptions?.options?.map((option) => option.id).includes(id));
        const newDisconnections = args?.options ? prevOptions?.options?.filter((option) => !args?.options?.includes(option.id)) : [];
        const ret = await prisma.logic.update(
          {
            where: { id: args.id },
            data: {
              isElse: args?.isElse === null ?  undefined : args?.isElse,
              options: {
                connect: newConnections?.map((id) => ({ id })) || undefined,
                disconnect: newDisconnections?.map((option) => ({ id: option.id })) || undefined,
              },
              isReturn: args?.isReturn === null ?  undefined : args?.isReturn,
              formOutputId: args?.formOutputId || undefined,
              nextQuestionId: args?.nextQuestionId || undefined,
            },
            include: {
              options: true,
              formOutput: true,
              nextQuestion: true,
            },
          }
        );
        return ret
      } catch (e) {
        console.error(e);
        return null;
      }
    },
    deleteForm: async (_parent, args) => {
      try {
        const ret = await prisma.form.delete(
          {
            where: { id: args.id },
          }
        );
        return ret != null
      } catch (e) {
        console.error(e);
        return false;
      }
    },
    deleteQuestion: async (_parent, args) => {
      try {
        const ret = await prisma.question.delete(
          {
            where: { id: args.id },
          }
        );
        return ret != null
      } catch (e) {
        console.error(e);
        return false;
      }
    },
    deleteOption: async (_parent, args) => {
      try {
        const ret = await prisma.option.delete(
          {
            where: { id: args.id },
          }
        );
        return ret != null
      } catch (e) {
        console.error(e);
        return false;
      }
    },
    deleteFormOutput: async (_parent, args) => {
      try {
        const ret = await prisma.formOutput.delete(
          {
            where: { id: args.id },
          }
        );
        return ret != null
      } catch (e) {
        console.error(e);
        return false;
      }
    },
    deleteLogic: async (_parent, args) => {
      try {
        const ret = await prisma.logic.delete(
          {
            where: { id: args.id },
          }
        );
        return ret != null
      } catch (e) {
        console.error(e);
        return false;
      }
    }
  },
}

const prisma = new PrismaClient()


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const apolloServer = new ApolloServer({
    typeDefs: schema,
    resolvers,
})
  
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
startStandaloneServer(apolloServer, {
  listen: { port: 4000 },
  context: async () => ({ prisma }),
}).then(({url}) => {
  console.log(`🚀  Server ready at: ${url}`);
  console.log("this needs to print")
});