/**
 *
 * THIS FILE IS AUTOGENERATED, DO NOT EDIT IT!
 *
 * instead, edit one of the `.graphql` files in this project and run
 *
 * npm run graphql-codegen
 *
 * for this file to be re-created
 */

import type * as Types from '../../api.schema';

import { api } from '../../..';
export type AddServiceMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  description: Types.Scalars['String'];
  price: Types.Scalars['Float'];
  duration: Types.Scalars['Float'];
  durationUnit: Types.DurationUnitType;
  inHouse: Types.Scalars['Boolean'];
  category: Types.CategoryType;
}>;


export type AddServiceMutationResult = { __typename?: 'Mutation', addService: { __typename?: 'Service', id: number, name?: string | null, description?: string | null, price?: number | null, duration?: number | null, durationUnit?: Types.DurationUnitType | null, inHouse?: boolean | null, category?: Types.CategoryType | null } };


export const AddServiceDocument = `
    mutation addService($name: String!, $description: String!, $price: Float!, $duration: Float!, $durationUnit: DurationUnitType!, $inHouse: Boolean!, $category: CategoryType!) {
  addService(
    name: $name
    description: $description
    price: $price
    duration: $duration
    durationUnit: $durationUnit
    inHouse: $inHouse
    category: $category
  ) {
    id
    name
    description
    price
    duration
    durationUnit
    inHouse
    category
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    addService: build.mutation<AddServiceMutationResult, AddServiceMutationVariables>({
      query: (variables) => ({ document: AddServiceDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useAddServiceMutation } = injectedRtkApi;

