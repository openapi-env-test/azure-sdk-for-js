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
  AuthorizationServerContract,
  ApiManagementClient
} from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates new authorization server or updates an existing authorization server.
 *
 * @summary Creates new authorization server or updates an existing authorization server.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementCreateAuthorizationServer.json
 */
async function apiManagementCreateAuthorizationServer() {
  const subscriptionId =
    process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const authsid = "newauthServer";
  const parameters: AuthorizationServerContract = {
    description: "test server",
    authorizationEndpoint: "https://www.contoso.com/oauth2/auth",
    authorizationMethods: ["GET"],
    bearerTokenSendingMethods: ["authorizationHeader"],
    clientId: "1",
    clientRegistrationEndpoint: "https://www.contoso.com/apps",
    clientSecret: "2",
    defaultScope: "read write",
    displayName: "test2",
    grantTypes: ["authorizationCode", "implicit"],
    resourceOwnerPassword: "pwd",
    resourceOwnerUsername: "un",
    supportState: true,
    tokenEndpoint: "https://www.contoso.com/oauth2/token",
    useInApiDocumentation: true,
    useInTestConsole: false
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.authorizationServer.createOrUpdate(
    resourceGroupName,
    serviceName,
    authsid,
    parameters
  );
  console.log(result);
}

async function main() {
  apiManagementCreateAuthorizationServer();
}

main().catch(console.error);
