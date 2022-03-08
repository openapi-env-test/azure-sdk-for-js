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
 * This sample demonstrates how to Deletes the specified attached data network.
 *
 * @summary Deletes the specified attached data network.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/preview/2022-01-01-preview/examples/AttachedDataNetworkDelete.json
 */
const { MobileNetworkManagementClient } = require("@azure/arm-mobilenetwork");
const { DefaultAzureCredential } = require("@azure/identity");

async function deleteAttachedDataNetworkResource() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const packetCoreControlPlaneName = "TestPacketCoreCP";
  const packetCoreDataPlaneName = "TestPacketCoreDP";
  const attachedDataNetworkName = "TestAttachedDataNetwork";
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const result = await client.attachedDataNetworks.beginDeleteAndWait(
    resourceGroupName,
    packetCoreControlPlaneName,
    packetCoreDataPlaneName,
    attachedDataNetworkName
  );
  console.log(result);
}

deleteAttachedDataNetworkResource().catch(console.error);
