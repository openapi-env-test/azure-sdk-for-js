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
 * This sample demonstrates how to Checks that the storage account name is valid and is not already in use.
 *
 * @summary Checks that the storage account name is valid and is not already in use.
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2021-08-01/examples/StorageAccountCheckNameAvailability.json
 */
const { StorageManagementClient } = require("@azure/arm-storage");
const { DefaultAzureCredential } = require("@azure/identity");

async function storageAccountCheckNameAvailability() {
  const subscriptionId = "{subscription-id}";
  const accountName = {
    name: "sto3363",
    type: "Microsoft.Storage/storageAccounts",
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.storageAccounts.checkNameAvailability(accountName);
  console.log(result);
}

storageAccountCheckNameAvailability().catch(console.error);
