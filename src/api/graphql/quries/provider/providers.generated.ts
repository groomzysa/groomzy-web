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
export type ProvidersQueryVariables = Types.Exact<{
  search?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type ProvidersQueryResult = { __typename?: 'Query', providers: Array<{ __typename?: 'Provider', id: number, tradingName?: string | null, phone?: string | null, addresses?: Array<{ __typename?: 'Address', id: number, streetNumber?: string | null, streetName?: string | null, town?: string | null, city?: string | null, province?: string | null, areaCode?: string | null }> | null, operatingTimes?: Array<{ __typename?: 'OperatingTime', id: number, day?: Types.DayType | null, opens?: string | null, closes?: string | null }> | null, socials?: Array<{ __typename?: 'Social', id: number, name?: string | null, username?: string | null }> | null }> };


export const ProvidersDocument = `
    query providers($search: String) {
  providers(search: $search) {
    id
    tradingName
    phone
    addresses {
      id
      streetNumber
      streetName
      town
      city
      province
      areaCode
    }
    operatingTimes {
      id
      day
      opens
      closes
    }
    socials {
      id
      name
      username
    }
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    providers: build.query<ProvidersQueryResult, ProvidersQueryVariables | void>({
      query: (variables) => ({ document: ProvidersDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useProvidersQuery, useLazyProvidersQuery } = injectedRtkApi;
