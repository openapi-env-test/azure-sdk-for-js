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
  DefaultAccountsRemoveOptionalParams,
  PurviewManagementClient
} from "@azure/arm-purview";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Removes the default account from the scope.
 *
 * @summary Removes the default account from the scope.
 * x-ms-original-file: specification/purview/resource-manager/Microsoft.Purview/stable/2021-07-01/examples/DefaultAccounts_Remove.json
 */
async function defaultAccountsRemove() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const scopeTenantId = "11733A4E-BA84-46FF-91D1-AFF1A3215A90";
  const scopeType = "Tenant";
  const scope = "11733A4E-BA84-46FF-91D1-AFF1A3215A90";
  const options: DefaultAccountsRemoveOptionalParams = { scope };
  const credential = new DefaultAzureCredential();
  const client = new PurviewManagementClient(credential, subscriptionId);
  const result = await client.defaultAccounts.remove(
    scopeTenantId,
    scopeType,
    options
  );
  console.log(result);
}

defaultAccountsRemove().catch(console.error);
