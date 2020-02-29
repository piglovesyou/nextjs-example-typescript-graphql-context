import { ApolloServer } from 'apollo-server-micro'
import context from "../../lib/create-resolver-context"
import schema from '../../lib/schema'

const apolloServer = new ApolloServer({ schema, context })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
