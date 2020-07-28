import { GraphQLClient } from "graphql-request";

const cms = (query, variables, options) => {
  const client = new GraphQLClient(process.env.GRAPH_CMS_URL, options);
  return client.request(query, variables);
};
export default cms;
