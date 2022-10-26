/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ResourceConnectorManagementClient } from "@azure/arm-resourceconnector";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets the upgrade graph of an Appliance with a specified resource group and name and specific release train.
 *
 * @summary Gets the upgrade graph of an Appliance with a specified resource group and name and specific release train.
 * x-ms-original-file: specification/resourceconnector/resource-manager/Microsoft.ResourceConnector/preview/2022-04-15-preview/examples/UpgradeGraph.json
 */
async function getApplianceUpgradeGraph() {
  const subscriptionId = "11111111-2222-3333-4444-555555555555";
  const resourceGroupName = "testresourcegroup";
  const resourceName = "appliance01";
  const upgradeGraph = "stable";
  const credential = new DefaultAzureCredential();
  const client = new ResourceConnectorManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.appliances.getUpgradeGraph(
    resourceGroupName,
    resourceName,
    upgradeGraph
  );
  console.log(result);
}

getApplianceUpgradeGraph().catch(console.error);
