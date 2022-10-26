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
  IntegrationRuntimeRegenerateKeyParameters,
  DataFactoryManagementClient
} from "@azure/arm-datafactory";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Regenerates the authentication key for an integration runtime.
 *
 * @summary Regenerates the authentication key for an integration runtime.
 * x-ms-original-file: specification/datafactory/resource-manager/Microsoft.DataFactory/stable/2018-06-01/examples/IntegrationRuntimes_RegenerateAuthKey.json
 */
async function integrationRuntimesRegenerateAuthKey() {
  const subscriptionId = "12345678-1234-1234-1234-12345678abc";
  const resourceGroupName = "exampleResourceGroup";
  const factoryName = "exampleFactoryName";
  const integrationRuntimeName = "exampleIntegrationRuntime";
  const regenerateKeyParameters: IntegrationRuntimeRegenerateKeyParameters = {
    keyName: "authKey2"
  };
  const credential = new DefaultAzureCredential();
  const client = new DataFactoryManagementClient(credential, subscriptionId);
  const result = await client.integrationRuntimes.regenerateAuthKey(
    resourceGroupName,
    factoryName,
    integrationRuntimeName,
    regenerateKeyParameters
  );
  console.log(result);
}

integrationRuntimesRegenerateAuthKey().catch(console.error);
