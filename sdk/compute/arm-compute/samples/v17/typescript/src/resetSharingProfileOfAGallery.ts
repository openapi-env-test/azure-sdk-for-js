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
 * This sample demonstrates how to Update sharing profile of a gallery.
 *
 * @summary Update sharing profile of a gallery.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-10-01/examples/gallery/ResetSharingProfileInAGallery.json
 */
import { SharingUpdate, ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

async function resetSharingProfileOfAGallery() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const galleryName = "myGalleryName";
  const sharingUpdate: SharingUpdate = { operationType: "Reset" };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.gallerySharingProfile.beginUpdateAndWait(
    resourceGroupName,
    galleryName,
    sharingUpdate
  );
  console.log(result);
}

resetSharingProfileOfAGallery().catch(console.error);
