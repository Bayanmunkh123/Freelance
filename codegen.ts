import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4012/graphql",
  documents: [
    "src/**/queries.ts",
    "src/**/mutations.ts",
    "src/**/subscription.ts",
  ],
  generates: {
    // 'src/generated/': { preset: 'client', plugins: [], presetConfig: { gqlTagName: 'gql' } },
    "src/generated/index.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",

        // 'typescript-graphql-files-modules',
        // 'typescript-document-nodes',
        "fragment-matcher",
      ],
      config: {
        reactApolloVersion: 3,
        hooksImportFrom: "@apollo/react-hooks",
        namingConvention: {
          typeNames: "change-case-all#pascalCase",
          enumValues: "change-case-all#upperCase",
        },
      },
    },
    "src/generated/graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
  hooks: {
    afterAllFileWrite: [
      // "prettier --write",
      // "eslint --fix"
    ],
  },
}

export default config
