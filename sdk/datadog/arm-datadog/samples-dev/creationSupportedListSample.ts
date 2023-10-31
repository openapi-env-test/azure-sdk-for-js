/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MicrosoftDatadogClient } from "@azure/arm-datadog";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Informs if the current subscription is being already monitored for selected Datadog organization.
 *
 * @summary Informs if the current subscription is being already monitored for selected Datadog organization.
 * x-ms-original-file: specification/datadog/resource-manager/Microsoft.Datadog/stable/2023-01-01/examples/CreationSupported_List.json
 */
async function creationSupportedList() {
  const subscriptionId =
    process.env["DATADOG_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const datadogOrganizationId = "00000000-0000-0000-0000";
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftDatadogClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.creationSupported.list(datadogOrganizationId)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  creationSupportedList();
}

main().catch(console.error);
