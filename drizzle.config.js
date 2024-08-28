/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://AI-content-generator_owner:e1Fd2xEZHOQS@ep-tight-brook-a18o4x1x.ap-southeast-1.aws.neon.tech/AI-content-generator?sslmode=require',
    }
  };