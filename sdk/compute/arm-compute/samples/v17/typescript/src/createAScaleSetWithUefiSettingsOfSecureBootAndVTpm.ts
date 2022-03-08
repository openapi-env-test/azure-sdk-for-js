/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Create or update a VM scale set.
 *
 * @summary Create or update a VM scale set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-11-01/examples/compute/CreateAScaleSetWithUefiSettings.json
 */
import {
  VirtualMachineScaleSet,
  ComputeManagementClient
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";

async function createAScaleSetWithUefiSettingsOfSecureBootAndVTpm() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const vmScaleSetName = "{vmss-name}";
  const parameters: VirtualMachineScaleSet = {
    location: "westus",
    overprovision: true,
    sku: { name: "Standard_D2s_v3", capacity: 3, tier: "Standard" },
    upgradePolicy: { mode: "Manual" },
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: "{vmss-name}",
            enableIPForwarding: true,
            ipConfigurations: [
              {
                name: "{vmss-name}",
                subnet: {
                  id:
                    "/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}"
                }
              }
            ],
            primary: true
          }
        ]
      },
      osProfile: {
        adminPassword: "{your-password}",
        adminUsername: "{your-username}",
        computerNamePrefix: "{vmss-name}"
      },
      securityProfile: {
        securityType: "TrustedLaunch",
        uefiSettings: { secureBootEnabled: true, vTpmEnabled: true }
      },
      storageProfile: {
        imageReference: {
          offer: "windowsserver-gen2preview-preview",
          publisher: "MicrosoftWindowsServer",
          sku: "windows10-tvm",
          version: "18363.592.2001092016"
        },
        osDisk: {
          caching: "ReadOnly",
          createOption: "FromImage",
          managedDisk: { storageAccountType: "StandardSSD_LRS" }
        }
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSets.beginCreateOrUpdateAndWait(
    resourceGroupName,
    vmScaleSetName,
    parameters
  );
  console.log(result);
}

createAScaleSetWithUefiSettingsOfSecureBootAndVTpm().catch(console.error);
