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
 * This sample demonstrates how to Fetches the status of an operation such as triggering a backup, restore. The status can be in progress, completed
or failed. You can refer to the OperationStatus enum for all the possible states of the operation. Some operations
create jobs. This method returns the list of jobs associated with the operation.
 *
 * @summary Fetches the status of an operation such as triggering a backup, restore. The status can be in progress, completed
or failed. You can refer to the OperationStatus enum for all the possible states of the operation. Some operations
create jobs. This method returns the list of jobs associated with the operation.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2021-12-01/examples/AzureIaasVm/ProtectedItemOperationStatus.json
 */
const { RecoveryServicesBackupClient } = require("@azure/arm-recoveryservicesbackup");
const { DefaultAzureCredential } = require("@azure/identity");

async function getOperationStatusOfProtectedVM() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const vaultName = "NetSDKTestRsVault";
  const resourceGroupName = "SwaggerTestRg";
  const fabricName = "Azure";
  const containerName = "IaasVMContainer;iaasvmcontainerv2;netsdktestrg;netvmtestv2vm1";
  const protectedItemName = "VM;iaasvmcontainerv2;netsdktestrg;netvmtestv2vm1";
  const operationId = "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.protectedItemOperationStatuses.get(
    vaultName,
    resourceGroupName,
    fabricName,
    containerName,
    protectedItemName,
    operationId
  );
  console.log(result);
}

getOperationStatusOfProtectedVM().catch(console.error);
