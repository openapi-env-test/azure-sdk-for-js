/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  TableCreateUpdateParameters,
  CosmosDBManagementClient
} from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Create or update an Azure Cosmos DB Table
 *
 * @summary Create or update an Azure Cosmos DB Table
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-08-15-preview/examples/CosmosDBTableCreateUpdate.json
 */
async function cosmosDbTableReplace() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const tableName = "tableName";
  const createUpdateTableParameters: TableCreateUpdateParameters = {
    location: "West US",
    options: {},
    resource: { id: "tableName" },
    tags: {}
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.tableResources.beginCreateUpdateTableAndWait(
    resourceGroupName,
    accountName,
    tableName,
    createUpdateTableParameters
  );
  console.log(result);
}

cosmosDbTableReplace().catch(console.error);
