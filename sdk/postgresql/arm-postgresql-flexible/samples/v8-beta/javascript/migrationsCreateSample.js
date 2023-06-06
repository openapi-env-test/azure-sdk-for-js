/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { PostgreSQLManagementFlexibleServerClient } = require("@azure/arm-postgresql-flexible");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates a new migration.
 *
 * @summary Creates a new migration.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/preview/2023-03-01-preview/examples/Migrations_Create_With_Other_Users.json
 */
async function migrationsCreateByPassingUserNames() {
  const subscriptionId =
    process.env["POSTGRESQL_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["POSTGRESQL_RESOURCE_GROUP"] || "testrg";
  const targetDbServerName = "testtarget";
  const migrationName = "testmigration";
  const parameters = {
    dbsToMigrate: ["db1", "db2", "db3", "db4"],
    location: "westus",
    migrationMode: "Offline",
    secretParameters: {
      adminCredentials: {
        sourceServerPassword: "xxxxxxxx",
        targetServerPassword: "xxxxxxxx",
      },
      sourceServerUsername: "newadmin@testsource",
      targetServerUsername: "targetadmin",
    },
    sourceDbServerResourceId:
      "/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/testrg/providers/Microsoft.DBForPostgreSql/servers/testsource",
  };
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementFlexibleServerClient(credential, subscriptionId);
  const result = await client.migrations.create(
    subscriptionId,
    resourceGroupName,
    targetDbServerName,
    migrationName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates a new migration.
 *
 * @summary Creates a new migration.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/preview/2023-03-01-preview/examples/Migrations_Create.json
 */
async function migrationsCreate() {
  const subscriptionId =
    process.env["POSTGRESQL_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["POSTGRESQL_RESOURCE_GROUP"] || "testrg";
  const targetDbServerName = "testtarget";
  const migrationName = "testmigration";
  const parameters = {
    dbsToMigrate: ["db1", "db2", "db3", "db4"],
    location: "westus",
    migrationMode: "Offline",
    overwriteDbsInTarget: "True",
    secretParameters: {
      adminCredentials: {
        sourceServerPassword: "xxxxxxxx",
        targetServerPassword: "xxxxxxxx",
      },
    },
    sourceDbServerResourceId:
      "/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/testrg/providers/Microsoft.DBForPostgreSql/servers/testsource",
  };
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementFlexibleServerClient(credential, subscriptionId);
  const result = await client.migrations.create(
    subscriptionId,
    resourceGroupName,
    targetDbServerName,
    migrationName,
    parameters
  );
  console.log(result);
}

async function main() {
  migrationsCreateByPassingUserNames();
  migrationsCreate();
}

main().catch(console.error);
