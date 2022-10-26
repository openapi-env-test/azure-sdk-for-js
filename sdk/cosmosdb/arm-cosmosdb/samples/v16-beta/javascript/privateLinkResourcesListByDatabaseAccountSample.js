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
 * This sample demonstrates how to Gets the private link resources that need to be created for a Cosmos DB account.
 *
 * @summary Gets the private link resources that need to be created for a Cosmos DB account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-08-15-preview/examples/CosmosDBPrivateLinkResourceListGet.json
 */
async function getsPrivateEndpointConnection() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "rg1";
  const accountName = "ddb1";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.privateLinkResources.listByDatabaseAccount(
    resourceGroupName,
    accountName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getsPrivateEndpointConnection().catch(console.error);
