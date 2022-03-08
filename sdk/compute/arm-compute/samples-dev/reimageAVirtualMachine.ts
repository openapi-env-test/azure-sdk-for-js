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
 * This sample demonstrates how to Reimages the virtual machine which has an ephemeral OS disk back to its initial state.
 *
 * @summary Reimages the virtual machine which has an ephemeral OS disk back to its initial state.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/compute/ReimageVirtualMachine.json
 */
import {
  VirtualMachineReimageParameters,
  ComputeManagementClient
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

async function reimageAVirtualMachine() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const vmName = "myVMName";
  const parameters: VirtualMachineReimageParameters = { tempDisk: true };
  const options = { parameters: parameters };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachines.beginReimageAndWait(
    resourceGroupName,
    vmName,
    options
  );
  console.log(result);
}

reimageAVirtualMachine().catch(console.error);
