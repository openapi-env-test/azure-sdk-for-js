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
  SummariesGetMachinesOptionalParams,
  ServiceMap
} from "@azure/arm-servicemap";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Returns summary information about the machines in the workspace.
 *
 * @summary Returns summary information about the machines in the workspace.
 * x-ms-original-file: specification/service-map/resource-manager/Microsoft.OperationalInsights/preview/2015-11-01-preview/examples/Summaries/SMSummariesGetMachinesGet.json
 */
async function smSummariesGetMachinesGet() {
  const subscriptionId =
    process.env["SERVICE-MAP_SUBSCRIPTION_ID"] ||
    "63BE4E24-FDF0-4E9C-9342-6A5D5A359722";
  const resourceGroupName =
    process.env["SERVICE-MAP_RESOURCE_GROUP"] || "rg-sm";
  const workspaceName = "D6F79F14-E563-469B-84B5-9286D2803B2F";
  const startTime = new Date("2018-01-08T19:41:59.3360000Z");
  const endTime = new Date("2018-01-08T19:42:14.3360000Z");
  const options: SummariesGetMachinesOptionalParams = { startTime, endTime };
  const credential = new DefaultAzureCredential();
  const client = new ServiceMap(credential, subscriptionId);
  const result = await client.summaries.getMachines(
    resourceGroupName,
    workspaceName,
    options
  );
  console.log(result);
}

async function main() {
  smSummariesGetMachinesGet();
}

main().catch(console.error);
