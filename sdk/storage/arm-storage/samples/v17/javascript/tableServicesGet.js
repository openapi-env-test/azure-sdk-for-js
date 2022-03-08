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
 * This sample demonstrates how to Gets the properties of a storage account’s Table service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
 *
 * @summary Gets the properties of a storage account’s Table service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2021-08-01/examples/TableServicesGet.json
 */
const { StorageManagementClient } = require("@azure/arm-storage");
const { DefaultAzureCredential } = require("@azure/identity");

async function tableServicesGet() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "res4410";
  const accountName = "sto8607";
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.tableServices.getServiceProperties(resourceGroupName, accountName);
  console.log(result);
}

tableServicesGet().catch(console.error);
