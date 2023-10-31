/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ApiManagementClient } from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes the specified comment from an Issue.
 *
 * @summary Deletes the specified comment from an Issue.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementDeleteApiIssueAttachment.json
 */
async function apiManagementDeleteApiIssueAttachment() {
  const subscriptionId =
    process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const apiId = "57d1f7558aa04f15146d9d8a";
  const issueId = "57d2ef278aa04f0ad01d6cdc";
  const attachmentId = "57d2ef278aa04f0888cba3f3";
  const ifMatch = "*";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.apiIssueAttachment.delete(
    resourceGroupName,
    serviceName,
    apiId,
    issueId,
    attachmentId,
    ifMatch
  );
  console.log(result);
}

async function main() {
  apiManagementDeleteApiIssueAttachment();
}

main().catch(console.error);
