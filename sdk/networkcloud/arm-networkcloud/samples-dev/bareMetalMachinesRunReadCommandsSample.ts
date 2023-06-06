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
  BareMetalMachineRunReadCommandsParameters,
  NetworkCloud
} from "@azure/arm-networkcloud";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Run one or more read-only commands on the provided bare metal machine. The URL to storage account with the command execution results and the command exit code can be retrieved from the operation status API once available.
 *
 * @summary Run one or more read-only commands on the provided bare metal machine. The URL to storage account with the command execution results and the command exit code can be retrieved from the operation status API once available.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2022-12-12-preview/examples/BareMetalMachines_RunReadCommands.json
 */
async function runAndRetrieveOutputFromReadOnlyCommandsOnBareMetalMachine() {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const bareMetalMachineName = "bareMetalMachineName";
  const bareMetalMachineRunReadCommandsParameters: BareMetalMachineRunReadCommandsParameters = {
    limitTimeSeconds: 60,
    commands: [
      { arguments: ["pods", "-A"], command: "kubectl get" },
      { arguments: ["192.168.0.99", "-c", "3"], command: "ping" }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.bareMetalMachines.beginRunReadCommandsAndWait(
    resourceGroupName,
    bareMetalMachineName,
    bareMetalMachineRunReadCommandsParameters
  );
  console.log(result);
}

async function main() {
  runAndRetrieveOutputFromReadOnlyCommandsOnBareMetalMachine();
}

main().catch(console.error);
