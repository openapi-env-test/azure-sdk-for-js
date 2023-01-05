/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureDigitalTwinsManagementClient } = require("@azure/arm-digitaltwins");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Delete a DigitalTwinsInstance endpoint.
 *
 * @summary Delete a DigitalTwinsInstance endpoint.
 * x-ms-original-file: specification/digitaltwins/resource-manager/Microsoft.DigitalTwins/stable/2022-10-31/examples/DigitalTwinsEndpointDelete_example.json
 */
async function deleteADigitalTwinsInstanceEndpoint() {
  const subscriptionId = "50016170-c839-41ba-a724-51e9df440b9e";
  const resourceGroupName = "resRg";
  const resourceName = "myDigitalTwinsService";
  const endpointName = "myendpoint";
  const credential = new DefaultAzureCredential();
  const client = new AzureDigitalTwinsManagementClient(credential, subscriptionId);
  const result = await client.digitalTwinsEndpoint.beginDeleteAndWait(
    resourceGroupName,
    resourceName,
    endpointName
  );
  console.log(result);
}

deleteADigitalTwinsInstanceEndpoint().catch(console.error);

/**
 * This sample demonstrates how to Delete a DigitalTwinsInstance endpoint.
 *
 * @summary Delete a DigitalTwinsInstance endpoint.
 * x-ms-original-file: specification/digitaltwins/resource-manager/Microsoft.DigitalTwins/stable/2022-10-31/examples/DigitalTwinsEndpointDelete_WithIdentity_example.json
 */
async function deleteADigitalTwinsInstanceEndpointWithIdentity() {
  const subscriptionId = "50016170-c839-41ba-a724-51e9df440b9e";
  const resourceGroupName = "resRg";
  const resourceName = "myDigitalTwinsService";
  const endpointName = "myendpoint";
  const credential = new DefaultAzureCredential();
  const client = new AzureDigitalTwinsManagementClient(credential, subscriptionId);
  const result = await client.digitalTwinsEndpoint.beginDeleteAndWait(
    resourceGroupName,
    resourceName,
    endpointName
  );
  console.log(result);
}

deleteADigitalTwinsInstanceEndpointWithIdentity().catch(console.error);
