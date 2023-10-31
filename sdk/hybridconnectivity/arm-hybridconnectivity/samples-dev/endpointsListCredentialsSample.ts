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
  ListCredentialsRequest,
  EndpointsListCredentialsOptionalParams,
  HybridConnectivityManagementAPI
} from "@azure/arm-hybridconnectivity";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the endpoint access credentials to the resource.
 *
 * @summary Gets the endpoint access credentials to the resource.
 * x-ms-original-file: specification/hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/stable/2023-03-15/examples/EndpointsPostListCredentials.json
 */
async function hybridConnectivityEndpointsPostListCredentials() {
  const resourceUri =
    "subscriptions/f5bcc1d9-23af-4ae9-aca1-041d0f593a63/resourceGroups/hybridRG/providers/Microsoft.HybridCompute/machines/testMachine";
  const endpointName = "default";
  const expiresin = 10800;
  const listCredentialsRequest: ListCredentialsRequest = { serviceName: "SSH" };
  const options: EndpointsListCredentialsOptionalParams = {
    expiresin,
    listCredentialsRequest
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridConnectivityManagementAPI(credential);
  const result = await client.endpoints.listCredentials(
    resourceUri,
    endpointName,
    options
  );
  console.log(result);
}

async function main() {
  hybridConnectivityEndpointsPostListCredentials();
}

main().catch(console.error);
