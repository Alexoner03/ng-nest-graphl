import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    graphql: {
      schema: process.env.GRAPHQL_SCHEMA_NAME,
    },
    port: process.env.PORT,
  };
});
