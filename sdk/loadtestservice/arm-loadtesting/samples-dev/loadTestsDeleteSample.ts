/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { LoadTestClient } from "@azure/arm-loadtesting";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Delete a LoadTest resource.
 *
 * @summary Delete a LoadTest resource.
 * x-ms-original-file: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/stable/2022-12-01/examples/LoadTests_Delete.json
 */
async function loadTestsDelete() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "dummyrg";
  const loadTestName = "myLoadTest";
  const credential = new DefaultAzureCredential();
  const client = new LoadTestClient(credential, subscriptionId);
  const result = await client.loadTests.beginDeleteAndWait(
    resourceGroupName,
    loadTestName
  );
  console.log(result);
}

loadTestsDelete().catch(console.error);
