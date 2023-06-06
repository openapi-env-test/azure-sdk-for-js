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
  MigrationsListByTargetServerOptionalParams,
  PostgreSQLManagementFlexibleServerClient
} from "@azure/arm-postgresql-flexible";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List all the migrations on a given target server.
 *
 * @summary List all the migrations on a given target server.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/preview/2023-03-01-preview/examples/Migrations_ListByTargetServer.json
 */
async function migrationsListByTargetServer() {
  const subscriptionId =
    process.env["POSTGRESQL_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["POSTGRESQL_RESOURCE_GROUP"] || "testrg";
  const targetDbServerName = "testtarget";
  const migrationListFilter = "All";
  const options: MigrationsListByTargetServerOptionalParams = {
    migrationListFilter
  };
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementFlexibleServerClient(
    credential,
    subscriptionId
  );
  const resArray = new Array();
  for await (let item of client.migrations.listByTargetServer(
    subscriptionId,
    resourceGroupName,
    targetDbServerName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  migrationsListByTargetServer();
}

main().catch(console.error);
