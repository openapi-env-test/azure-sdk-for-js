/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureMediaServices } = require("@azure/arm-mediaservices");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List Assets in the Media Services account with optional filtering and ordering
 *
 * @summary List Assets in the Media Services account with optional filtering and ordering
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/stable/2022-08-01/examples/assets-list-in-date-range.json
 */
async function listAssetCreatedInADateRange() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "contoso";
  const accountName = "contosomedia";
  const filter = "properties/created gt 2012-06-01 and properties/created lt 2013-07-01";
  const orderby = "properties/created";
  const options = { filter, orderby };
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.assets.list(resourceGroupName, accountName, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAssetCreatedInADateRange().catch(console.error);

/**
 * This sample demonstrates how to List Assets in the Media Services account with optional filtering and ordering
 *
 * @summary List Assets in the Media Services account with optional filtering and ordering
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/stable/2022-08-01/examples/assets-list-by-date.json
 */
async function listAssetOrderedByDate() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "contoso";
  const accountName = "contosomedia";
  const orderby = "properties/created";
  const options = { orderby };
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.assets.list(resourceGroupName, accountName, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAssetOrderedByDate().catch(console.error);

/**
 * This sample demonstrates how to List Assets in the Media Services account with optional filtering and ordering
 *
 * @summary List Assets in the Media Services account with optional filtering and ordering
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/stable/2022-08-01/examples/assets-list-all.json
 */
async function listAllAssets() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "contoso";
  const accountName = "contosomedia";
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.assets.list(resourceGroupName, accountName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAllAssets().catch(console.error);
