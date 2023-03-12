import { graphql } from "../gql";

export const createFormMutation = graphql(`
  mutation Mutation($createFormInput: FormInput!) {
    createForm(createFormInput: $createFormInput) {
      code
      message
      data {
        id
        name
        email
        phone
        college
        course
        year
        consent
      }
    }
  }
`)