/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Form = {
  __typename?: 'Form';
  college: Scalars['String'];
  consent: Scalars['Boolean'];
  course: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  phone: Scalars['String'];
  year: Scalars['String'];
};

export type FormInput = {
  college: Scalars['String'];
  consent: Scalars['Boolean'];
  course: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  year: Scalars['String'];
};

export type FormResponse = Response & {
  __typename?: 'FormResponse';
  code: Scalars['String'];
  data: Array<Maybe<Form>>;
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createForm?: Maybe<FormResponse>;
};


export type MutationCreateFormArgs = {
  createFormInput: FormInput;
};

export type Query = {
  __typename?: 'Query';
  server?: Maybe<Scalars['String']>;
};

export type Response = {
  code: Scalars['String'];
  message: Scalars['String'];
};

export type MutationMutationVariables = Exact<{
  createFormInput: FormInput;
}>;


export type MutationMutation = { __typename?: 'Mutation', createForm?: { __typename?: 'FormResponse', code: string, message: string, data: Array<{ __typename?: 'Form', id: string, name: string, email: string, phone: string, college: string, course: string, year: string, consent: boolean } | null> } | null };


export const MutationDocument = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "name": { "kind": "Name", "value": "Mutation" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "createFormInput" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "FormInput" } } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "createForm" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "createFormInput" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "createFormInput" } } }], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "code" } }, { "kind": "Field", "name": { "kind": "Name", "value": "message" } }, { "kind": "Field", "name": { "kind": "Name", "value": "data" }, "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" } }, { "kind": "Field", "name": { "kind": "Name", "value": "name" } }, { "kind": "Field", "name": { "kind": "Name", "value": "email" } }, { "kind": "Field", "name": { "kind": "Name", "value": "phone" } }, { "kind": "Field", "name": { "kind": "Name", "value": "college" } }, { "kind": "Field", "name": { "kind": "Name", "value": "course" } }, { "kind": "Field", "name": { "kind": "Name", "value": "year" } }, { "kind": "Field", "name": { "kind": "Name", "value": "consent" } }] } }] } }] } }] } as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;