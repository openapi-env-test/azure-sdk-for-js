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
  VirtualNetwork,
  VirtualNetworksCreateOptionalParams,
  AzureArcVMwareManagementServiceAPI
} from "@azure/arm-connectedvmware";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create Or Update virtual network.
 *
 * @summary Create Or Update virtual network.
 * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/preview/2022-01-10-preview/examples/CreateVirtualNetwork.json
 */
async function createVirtualNetwork() {
  const subscriptionId =
    process.env["CONNECTEDVMWARE_SUBSCRIPTION_ID"] ||
    "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName =
    process.env["CONNECTEDVMWARE_RESOURCE_GROUP"] || "testrg";
  const virtualNetworkName = "ProdNetwork";
  const body: VirtualNetwork = {
    extendedLocation: {
      name:
        "/subscriptions/a5015e1c-867f-4533-8541-85cd470d0cfb/resourceGroups/demoRG/providers/Microsoft.ExtendedLocation/customLocations/contoso",
      type: "customLocation"
    },
    location: "East US",
    moRefId: "aaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
    vCenterId:
      "/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.ConnectedVMwarevSphere/VCenters/ContosoVCenter"
  };
  const options: VirtualNetworksCreateOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new AzureArcVMwareManagementServiceAPI(
    credential,
    subscriptionId
  );
  const result = await client.virtualNetworks.beginCreateAndWait(
    resourceGroupName,
    virtualNetworkName,
    options
  );
  console.log(result);
}

async function main() {
  createVirtualNetwork();
}

main().catch(console.error);
