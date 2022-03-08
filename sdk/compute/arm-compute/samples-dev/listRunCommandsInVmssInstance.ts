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
 * This sample demonstrates how to The operation to get all run commands of an instance in Virtual Machine Scaleset.
 *
 * @summary The operation to get all run commands of an instance in Virtual Machine Scaleset.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/runCommands/ListVirtualMachineScaleSetVMRunCommands.json
 */
import { ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

async function listRunCommandsInVmssInstance() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const vmScaleSetName = "myvmScaleSet";
  const instanceId = "0";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.virtualMachineScaleSetVMRunCommands.list(
    resourceGroupName,
    vmScaleSetName,
    instanceId
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listRunCommandsInVmssInstance().catch(console.error);
