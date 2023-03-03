import { graphql } from "../gql";

export const createFormMutation = graphql(`
  mutation Mutation($createFormInput: FormInput!) {
    createForm(createFormInput: $createFormInput) {
      code
      message
      data {
        id
        name
        place
        email
        phone
        alum
        website
        startup
        description
        sector
        consent
      }
    }
  }
`)