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
 * This sample demonstrates how to Lists the containers that can be registered to Recovery Services Vault.
 *
 * @summary Lists the containers that can be registered to Recovery Services Vault.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2021-12-01/examples/AzureStorage/ProtectableContainers_List.json
 */
const { RecoveryServicesBackupClient } = require("@azure/arm-recoveryservicesbackup");
const { DefaultAzureCredential } = require("@azure/identity");

async function listProtectableItemsWithBackupManagementTypeFilterAsAzureStorage() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const vaultName = "testvault";
  const resourceGroupName = "testRg";
  const fabricName = "Azure";
  const filter = "backupManagementType eq 'AzureStorage' and workloadType eq 'AzureFileShare'";
  const options = { filter: filter };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.protectableContainers.list(
    vaultName,
    resourceGroupName,
    fabricName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listProtectableItemsWithBackupManagementTypeFilterAsAzureStorage().catch(console.error);
