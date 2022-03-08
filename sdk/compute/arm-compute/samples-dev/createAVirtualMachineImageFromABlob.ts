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
 * This sample demonstrates how to Create or update an image.
 *
 * @summary Create or update an image.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/compute/CreateAnImageFromABlob.json
 */
import { Image, ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

async function createAVirtualMachineImageFromABlob() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const imageName = "myImage";
  const parameters: Image = {
    location: "West US",
    storageProfile: {
      osDisk: {
        blobUri:
          "https://mystorageaccount.blob.core.windows.net/osimages/osimage.vhd",
        osState: "Generalized",
        osType: "Linux"
      },
      zoneResilient: true
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.images.beginCreateOrUpdateAndWait(
    resourceGroupName,
    imageName,
    parameters
  );
  console.log(result);
}

createAVirtualMachineImageFromABlob().catch(console.error);
