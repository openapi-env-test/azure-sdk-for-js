/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to The operation to reapply a virtual machine's state.
 *
 * @summary The operation to reapply a virtual machine's state.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/compute/ReapplyVirtualMachine.json
 */
import { ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

async function reapplyTheStateOfAVirtualMachine() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "ResourceGroup";
  const vmName = "VMName";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachines.beginReapplyAndWait(
    resourceGroupName,
    vmName
  );
  console.log(result);
}

reapplyTheStateOfAVirtualMachine().catch(console.error);
