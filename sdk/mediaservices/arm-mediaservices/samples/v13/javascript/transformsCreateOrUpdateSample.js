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
 * This sample demonstrates how to Creates or updates a new Transform.
 *
 * @summary Creates or updates a new Transform.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/stable/2021-11-01/examples/transforms-create.json
 */
async function createOrUpdateATransform() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "contosoresources";
  const accountName = "contosomedia";
  const transformName = "createdTransform";
  const parameters = {
    description: "Example Transform to illustrate create and update.",
    outputs: [
      {
        preset: {
          odataType: "#Microsoft.Media.BuiltInStandardEncoderPreset",
          presetName: "AdaptiveStreaming",
        },
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.transforms.createOrUpdate(
    resourceGroupName,
    accountName,
    transformName,
    parameters
  );
  console.log(result);
}

createOrUpdateATransform().catch(console.error);
