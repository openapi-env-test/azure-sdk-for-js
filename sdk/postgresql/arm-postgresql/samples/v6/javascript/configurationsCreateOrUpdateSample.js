/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { PostgreSQLManagementClient } = require("@azure/arm-postgresql");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates a configuration of a server.
 *
 * @summary Updates a configuration of a server.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/stable/2017-12-01/examples/ConfigurationCreateOrUpdate.json
 */
async function configurationCreateOrUpdate() {
  const subscriptionId = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName = "TestGroup";
  const serverName = "testserver";
  const configurationName = "array_nulls";
  const parameters = { source: "user-override", value: "off" };
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementClient(credential, subscriptionId);
  const result = await client.configurations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serverName,
    configurationName,
    parameters
  );
  console.log(result);
}

configurationCreateOrUpdate().catch(console.error);