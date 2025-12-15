const { CosmosClient } = require("@azure/cosmos");
require("dotenv").config();

const cosmosConfig = {
  endpoint: process.env.COSMOS_ENDPOINT,
  key: process.env.COSMOS_KEY,
};

const client = new CosmosClient({
    endpoint: cosmosConfig.endpoint,
    key: cosmosConfig.key,
  });
  
module.exports = client;