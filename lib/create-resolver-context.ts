import { ContextFunction } from "apollo-server-core";
import { NextApiRequest, NextApiResponse, NextPageContext } from "next";

export type GraphQLContext = {req: NextApiRequest, res: NextApiResponse};

const createResolverContext: ContextFunction<NextPageContext> = (
    {req, res}
) => {
  // Here these are supposed to exist.
  if (!req || !res) throw new Error('never');
  return { req, res };
};

export default createResolverContext;
