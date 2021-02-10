import gql from 'graphql-tag'

export const AllGameQuery = gql`
  query AllGameQuery($categoryName: String) {
    games(where: { categories: { some: { name: { equals: $categoryName } } } }) {
      id
      name
      description
      categories {
        id
        name
      }
    }
  }
`

export const Evalute = gql`
  mutation Evalute($id: Int!, $value: Int!) {
    evaluate(data: { value: $value, game: { connect: { id: $id } } }) {
      id
      value
    }
  }
`
