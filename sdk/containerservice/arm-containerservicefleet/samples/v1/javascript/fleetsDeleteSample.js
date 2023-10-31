/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ContainerServiceFleetClient } = require("@azure/arm-containerservicefleet");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Delete a Fleet
 *
 * @summary Delete a Fleet
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/fleet/stable/2023-10-15/examples/Fleets_Delete.json
 */
async function deletesAFleetResourceAsynchronouslyWithALongRunningOperation() {
  const subscriptionId = process.env["CONTAINERSERVICE_SUBSCRIPTION_ID"] || "subid1";
  const resourceGroupName = process.env["CONTAINERSERVICE_RESOURCE_GROUP"] || "rg1";
  const fleetName = "fleet1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceFleetClient(credential, subscriptionId);
  const result = await client.fleets.beginDeleteAndWait(resourceGroupName, fleetName);
  console.log(result);
}

async function main() {
  deletesAFleetResourceAsynchronouslyWithALongRunningOperation();
}

main().catch(console.error);
