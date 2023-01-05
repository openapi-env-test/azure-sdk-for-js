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
  ResyncInput,
  SiteRecoveryManagementClient
} from "@azure/arm-recoveryservices-siterecovery";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to The operation to resynchronize replication of an ASR migration item.
 *
 * @summary The operation to resynchronize replication of an ASR migration item.
 * x-ms-original-file: specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/stable/2022-10-01/examples/ReplicationMigrationItems_Resync.json
 */
async function resynchronizesReplication() {
  const subscriptionId = "cb53d0c3-bd59-4721-89bc-06916a9147ef";
  const resourceName = "migrationvault";
  const resourceGroupName = "resourcegroup1";
  const fabricName = "vmwarefabric1";
  const protectionContainerName = "vmwareContainer1";
  const migrationItemName = "virtualmachine1";
  const input: ResyncInput = {
    properties: {
      providerSpecificDetails: {
        instanceType: "VMwareCbt",
        skipCbtReset: "true"
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new SiteRecoveryManagementClient(credential, subscriptionId);
  const result = await client.replicationMigrationItems.beginResyncAndWait(
    resourceName,
    resourceGroupName,
    fabricName,
    protectionContainerName,
    migrationItemName,
    input
  );
  console.log(result);
}

resynchronizesReplication().catch(console.error);
