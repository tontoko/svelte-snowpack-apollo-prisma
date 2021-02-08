import { GraphQLClient } from 'graphql-request'
import { getSdk } from '../generated/graphql'
const API_ROOT = 'http://localhost:4000'
export const client = getSdk(new GraphQLClient(API_ROOT))
