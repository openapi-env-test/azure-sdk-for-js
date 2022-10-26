/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { HDInsightManagementClient } = require("@azure/arm-hdinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Lists all the persisted script actions for the specified cluster.
 *
 * @summary Lists all the persisted script actions for the specified cluster.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/stable/2021-06-01/examples/GetLinuxHadoopScriptAction.json
 */
async function listAllPersistedScriptActionsForTheGivenCluster() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const clusterName = "cluster1";
  const credential = new DefaultAzureCredential();
  const client = new HDInsightManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.scriptActions.listByCluster(resourceGroupName, clusterName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAllPersistedScriptActionsForTheGivenCluster().catch(console.error);
