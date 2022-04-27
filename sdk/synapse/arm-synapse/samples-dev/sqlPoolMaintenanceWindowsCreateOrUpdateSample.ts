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
  MaintenanceWindows,
  SynapseManagementClient
} from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates a Sql pool's maintenance windows settings.
 *
 * @summary Creates or updates a Sql pool's maintenance windows settings.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/CreateOrUpdateMaintenanceWindows.json
 */
async function setsMaintenanceWindowSettingsForASelectedSqlAnalyticsPool() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "samplerg";
  const workspaceName = "testworkspace";
  const sqlPoolName = "testsp";
  const maintenanceWindowName = "current";
  const parameters: MaintenanceWindows = {
    timeRanges: [
      { dayOfWeek: "Saturday", duration: "PT60M", startTime: "00:00:00" }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.sqlPoolMaintenanceWindows.createOrUpdate(
    resourceGroupName,
    workspaceName,
    sqlPoolName,
    maintenanceWindowName,
    parameters
  );
  console.log(result);
}

setsMaintenanceWindowSettingsForASelectedSqlAnalyticsPool().catch(
  console.error
);