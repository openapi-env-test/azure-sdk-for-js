/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureMediaServices } from "@azure/arm-mediaservices";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get a Content Key Policy including secret values
 *
 * @summary Get a Content Key Policy including secret values
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/stable/2022-08-01/examples/content-key-policies-get-with-secrets.json
 */
async function getAnContentKeyPolicyWithSecrets() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "contoso";
  const accountName = "contosomedia";
  const contentKeyPolicyName = "PolicyWithMultipleOptions";
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.contentKeyPolicies.getPolicyPropertiesWithSecrets(
    resourceGroupName,
    accountName,
    contentKeyPolicyName
  );
  console.log(result);
}

getAnContentKeyPolicyWithSecrets().catch(console.error);
