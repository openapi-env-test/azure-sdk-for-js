/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { StorSimpleManagementClient } from "@azure/arm-storsimple1200series";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Retrieves all the disks in a iSCSI server.
 *
 * @summary Retrieves all the disks in a iSCSI server.
 * x-ms-original-file: specification/storsimple1200series/resource-manager/Microsoft.StorSimple/stable/2016-10-01/examples/IscsiDisksListByIscsiServer.json
 */
async function iscsiDisksListByIscsiServer() {
  const subscriptionId = "9eb689cd-7243-43b4-b6f6-5c65cb296641";
  const deviceName = "HSDK-0NZI14MDTF";
  const iscsiServerName = "HSDK-0NZI14MDTF";
  const resourceGroupName = "ResourceGroupForSDKTest";
  const managerName = "hAzureSDKOperations";
  const credential = new DefaultAzureCredential();
  const client = new StorSimpleManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.iscsiDisks.listByIscsiServer(
    deviceName,
    iscsiServerName,
    resourceGroupName,
    managerName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

iscsiDisksListByIscsiServer().catch(console.error);
