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
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-08-01/examples/CreateAManagedDiskWithSSDZRSAccountType.json
 */
import { Disk, ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

async function createAManagedDiskWithSsdZrsAccountType() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: { createOption: "Empty" },
    diskSizeGB: 200,
    location: "West US",
    sku: { name: "Premium_ZRS" }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

createAManagedDiskWithSsdZrsAccountType().catch(console.error);
