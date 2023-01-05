/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SecurityCenter } = require("@azure/arm-security");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Update an application control machine group
 *
 * @summary Update an application control machine group
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2020-01-01/examples/ApplicationWhitelistings/PutAdaptiveApplicationControls_example.json
 */
async function updateAnApplicationControlMachineGroupByAddingANewApplication() {
  const subscriptionId = "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const ascLocation = "centralus";
  const groupName = "ERELGROUP1";
  const body = {
    enforcementMode: "Audit",
    pathRecommendations: [
      {
        type: "PublisherSignature",
        path: "[Exe] O=MICROSOFT CORPORATION, L=REDMOND, S=WASHINGTON, C=US\\*\\*\\0.0.0.0",
        action: "Recommended",
        common: true,
        configurationStatus: "Configured",
        fileType: "Exe",
        publisherInfo: {
          binaryName: "*",
          productName: "*",
          publisherName: "O=MICROSOFT CORPORATION, L=REDMOND, S=WASHINGTON, C=US",
          version: "0.0.0.0",
        },
        userSids: ["S-1-1-0"],
        usernames: [{ recommendationAction: "Recommended", username: "Everyone" }],
      },
      {
        type: "ProductSignature",
        path: "%OSDRIVE%\\WINDOWSAZURE\\SECAGENT\\WASECAGENTPROV.EXE",
        action: "Recommended",
        common: true,
        configurationStatus: "Configured",
        fileType: "Exe",
        publisherInfo: {
          binaryName: "*",
          productName: "MICROSOFT® COREXT",
          publisherName: "CN=MICROSOFT AZURE DEPENDENCY CODE SIGN",
          version: "0.0.0.0",
        },
        userSids: ["S-1-1-0"],
        usernames: [
          {
            recommendationAction: "Recommended",
            username: "NT AUTHORITY\\SYSTEM",
          },
        ],
      },
      {
        type: "PublisherSignature",
        path: "%OSDRIVE%\\WINDOWSAZURE\\PACKAGES_201973_7415\\COLLECTGUESTLOGS.EXE",
        action: "Recommended",
        common: true,
        configurationStatus: "Configured",
        fileType: "Exe",
        publisherInfo: {
          binaryName: "*",
          productName: "*",
          publisherName: "CN=MICROSOFT AZURE DEPENDENCY CODE SIGN",
          version: "0.0.0.0",
        },
        userSids: ["S-1-1-0"],
        usernames: [
          {
            recommendationAction: "Recommended",
            username: "NT AUTHORITY\\SYSTEM",
          },
        ],
      },
      {
        type: "File",
        path: "C:\\directory\\file.exe",
        action: "Add",
        common: true,
      },
    ],
    protectionMode: { exe: "Audit", msi: "None", script: "None" },
    vmRecommendations: [
      {
        configurationStatus: "Configured",
        enforcementSupport: "Supported",
        recommendationAction: "Recommended",
        resourceId:
          "/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/resourcegroups/erelh-stable/providers/microsoft.compute/virtualmachines/erelh-16090",
      },
      {
        configurationStatus: "Configured",
        enforcementSupport: "Supported",
        recommendationAction: "Recommended",
        resourceId:
          "/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/resourcegroups/matanvs/providers/microsoft.compute/virtualmachines/matanvs19",
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.adaptiveApplicationControls.put(ascLocation, groupName, body);
  console.log(result);
}

updateAnApplicationControlMachineGroupByAddingANewApplication().catch(console.error);
