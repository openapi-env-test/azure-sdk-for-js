/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { HybridContainerServiceClient } from "@azure/arm-hybridcontainerservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Deletes the hybrid identity metadata proxy resource.
 *
 * @summary Deletes the hybrid identity metadata proxy resource.
 * x-ms-original-file: specification/hybridaks/resource-manager/Microsoft.HybridContainerService/preview/2022-05-01-preview/examples/DeleteHybridIdentityMetadata.json
 */
async function deleteHybridIdentityMetadata() {
  const subscriptionId = "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName = "testrg";
  const provisionedClustersName = "ContosoTargetCluster";
  const hybridIdentityMetadataResourceName = "default";
  const credential = new DefaultAzureCredential();
  const client = new HybridContainerServiceClient(credential, subscriptionId);
  const result = await client.hybridIdentityMetadataOperations.delete(
    resourceGroupName,
    provisionedClustersName,
    hybridIdentityMetadataResourceName
  );
  console.log(result);
}

deleteHybridIdentityMetadata().catch(console.error);
