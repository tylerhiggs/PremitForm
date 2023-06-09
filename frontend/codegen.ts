import type { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
  schema: "http://localhost:4000/graphql",
  documents: ["./src/**/*.graphql"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
        withMutationFn: true,
        withRefetchFn: true,
        withQueryFn: true,
      },
    },
  },
};
export default config;