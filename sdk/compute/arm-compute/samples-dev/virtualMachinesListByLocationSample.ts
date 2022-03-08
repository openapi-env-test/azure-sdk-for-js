/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets all the virtual machines under the specified subscription for the specified location.
 *
 * @summary Gets all the virtual machines under the specified subscription for the specified location.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/compute/ListVirtualMachinesInASubscriptionByLocation.json
 */
async function listsAllTheVirtualMachinesUnderTheSpecifiedSubscriptionForTheSpecifiedLocation() {
  const subscriptionId = "{subscriptionId}";
  const location = "eastus";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.virtualMachines.listByLocation(location)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listsAllTheVirtualMachinesUnderTheSpecifiedSubscriptionForTheSpecifiedLocation().catch(
  console.error
);
