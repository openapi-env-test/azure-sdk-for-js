/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ChaosManagementClient } from "@azure/arm-chaos";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get a list of Capability Type resources for given Target Type and location.
 *
 * @summary Get a list of Capability Type resources for given Target Type and location.
 * x-ms-original-file: specification/chaos/resource-manager/Microsoft.Chaos/preview/2023-04-15-preview/examples/ListCapabilityTypes.json
 */
async function listAllCapabilityTypesForAVirtualMachineTargetResourceOnWestus2Location() {
  const subscriptionId =
    process.env["CHAOS_SUBSCRIPTION_ID"] ||
    "6b052e15-03d3-4f17-b2e1-be7f07588291";
  const locationName = "westus2";
  const targetTypeName = "Microsoft-VirtualMachine";
  const credential = new DefaultAzureCredential();
  const client = new ChaosManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.capabilityTypes.list(
    locationName,
    targetTypeName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listAllCapabilityTypesForAVirtualMachineTargetResourceOnWestus2Location();
}

main().catch(console.error);
