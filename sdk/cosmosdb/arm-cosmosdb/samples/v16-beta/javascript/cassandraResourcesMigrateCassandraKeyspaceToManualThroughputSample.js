/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Migrate an Azure Cosmos DB Cassandra Keyspace from autoscale to manual throughput
 *
 * @summary Migrate an Azure Cosmos DB Cassandra Keyspace from autoscale to manual throughput
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-08-15-preview/examples/CosmosDBCassandraKeyspaceMigrateToManualThroughput.json
 */
async function cosmosDbCassandraKeyspaceMigrateToManualThroughput() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const keyspaceName = "keyspaceName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result =
    await client.cassandraResources.beginMigrateCassandraKeyspaceToManualThroughputAndWait(
      resourceGroupName,
      accountName,
      keyspaceName
    );
  console.log(result);
}

cosmosDbCassandraKeyspaceMigrateToManualThroughput().catch(console.error);
