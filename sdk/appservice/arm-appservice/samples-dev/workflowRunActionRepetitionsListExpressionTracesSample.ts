/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { WebSiteManagementClient } from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists a workflow run expression trace.
 *
 * @summary Lists a workflow run expression trace.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/WorkflowRunActionRepetitions_ListExpressionTraces.json
 */
async function listExpressionTracesForARepetition() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "testResourceGroup";
  const name = "test-name";
  const workflowName = "testFlow";
  const runName = "08586776228332053161046300351";
  const actionName = "testAction";
  const repetitionName = "000001";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.workflowRunActionRepetitions.listExpressionTraces(
    resourceGroupName,
    name,
    workflowName,
    runName,
    actionName,
    repetitionName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listExpressionTracesForARepetition().catch(console.error);
