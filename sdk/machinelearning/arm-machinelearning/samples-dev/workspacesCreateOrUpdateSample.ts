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
  Workspace,
  AzureMachineLearningWorkspaces
} from "@azure/arm-machinelearning";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates a workspace with the specified parameters.
 *
 * @summary Creates or updates a workspace with the specified parameters.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2022-10-01/examples/Workspace/create.json
 */
async function createWorkspace() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "workspace-1234";
  const workspaceName = "testworkspace";
  const parameters: Workspace = {
    description: "test description",
    applicationInsights:
      "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/workspace-1234/providers/microsoft.insights/components/testinsights",
    containerRegistry:
      "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/workspace-1234/providers/Microsoft.ContainerRegistry/registries/testRegistry",
    encryption: {
      identity: {
        userAssignedIdentity:
          "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/workspace-1234/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testuai"
      },
      keyVaultProperties: {
        identityClientId: "",
        keyIdentifier:
          "https://testkv.vault.azure.net/keys/testkey/aabbccddee112233445566778899aabb",
        keyVaultArmId:
          "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/workspace-1234/providers/Microsoft.KeyVault/vaults/testkv"
      },
      status: "Enabled"
    },
    friendlyName: "HelloName",
    hbiWorkspace: false,
    identity: {
      type: "SystemAssigned,UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/00000000111122223333444444444444/resourceGroups/workspace1234/providers/MicrosoftManagedIdentity/userAssignedIdentities/testuai": {}
      }
    },
    keyVault:
      "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/workspace-1234/providers/Microsoft.KeyVault/vaults/testkv",
    location: "eastus2euap",
    sharedPrivateLinkResources: [
      {
        name: "testdbresource",
        groupId: "Sql",
        privateLinkResourceId:
          "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/workspace-1234/providers/Microsoft.DocumentDB/databaseAccounts/testdbresource/privateLinkResources/Sql",
        requestMessage: "Please approve",
        status: "Approved"
      }
    ],
    storageAccount:
      "/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/accountcrud-1234/providers/Microsoft.Storage/storageAccounts/testStorageAccount"
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningWorkspaces(credential, subscriptionId);
  const result = await client.workspaces.beginCreateOrUpdateAndWait(
    resourceGroupName,
    workspaceName,
    parameters
  );
  console.log(result);
}

createWorkspace().catch(console.error);
