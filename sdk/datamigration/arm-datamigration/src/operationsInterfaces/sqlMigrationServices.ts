/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  SqlMigrationService,
  SqlMigrationServicesListByResourceGroupOptionalParams,
  DatabaseMigration,
  SqlMigrationServicesListMigrationsOptionalParams,
  SqlMigrationServicesListBySubscriptionOptionalParams,
  SqlMigrationServicesGetOptionalParams,
  SqlMigrationServicesGetResponse,
  SqlMigrationServicesCreateOrUpdateOptionalParams,
  SqlMigrationServicesCreateOrUpdateResponse,
  SqlMigrationServicesDeleteOptionalParams,
  SqlMigrationServiceUpdate,
  SqlMigrationServicesUpdateOptionalParams,
  SqlMigrationServicesUpdateResponse,
  SqlMigrationServicesListAuthKeysOptionalParams,
  SqlMigrationServicesListAuthKeysResponse,
  RegenAuthKeys,
  SqlMigrationServicesRegenerateAuthKeysOptionalParams,
  SqlMigrationServicesRegenerateAuthKeysResponse,
  DeleteNode,
  SqlMigrationServicesDeleteNodeOptionalParams,
  SqlMigrationServicesDeleteNodeResponse,
  SqlMigrationServicesListMonitoringDataOptionalParams,
  SqlMigrationServicesListMonitoringDataResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SqlMigrationServices. */
export interface SqlMigrationServices {
  /**
   * Retrieve all SQL migration services in the resource group.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: SqlMigrationServicesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<SqlMigrationService>;
  /**
   * Retrieve the List of database migrations attached to the service.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param options The options parameters.
   */
  listMigrations(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    options?: SqlMigrationServicesListMigrationsOptionalParams
  ): PagedAsyncIterableIterator<DatabaseMigration>;
  /**
   * Retrieve all SQL migration services in the subscriptions.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: SqlMigrationServicesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<SqlMigrationService>;
  /**
   * Retrieve the Database Migration Service
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    options?: SqlMigrationServicesGetOptionalParams
  ): Promise<SqlMigrationServicesGetResponse>;
  /**
   * Create or Update Database Migration Service.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param parameters Details of SqlMigrationService resource.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    parameters: SqlMigrationService,
    options?: SqlMigrationServicesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SqlMigrationServicesCreateOrUpdateResponse>,
      SqlMigrationServicesCreateOrUpdateResponse
    >
  >;
  /**
   * Create or Update Database Migration Service.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param parameters Details of SqlMigrationService resource.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    parameters: SqlMigrationService,
    options?: SqlMigrationServicesCreateOrUpdateOptionalParams
  ): Promise<SqlMigrationServicesCreateOrUpdateResponse>;
  /**
   * Delete Database Migration Service.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    options?: SqlMigrationServicesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete Database Migration Service.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    options?: SqlMigrationServicesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Update Database Migration Service.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param parameters Details of SqlMigrationService resource.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    parameters: SqlMigrationServiceUpdate,
    options?: SqlMigrationServicesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SqlMigrationServicesUpdateResponse>,
      SqlMigrationServicesUpdateResponse
    >
  >;
  /**
   * Update Database Migration Service.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param parameters Details of SqlMigrationService resource.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    parameters: SqlMigrationServiceUpdate,
    options?: SqlMigrationServicesUpdateOptionalParams
  ): Promise<SqlMigrationServicesUpdateResponse>;
  /**
   * Retrieve the List of Authentication Keys for Self Hosted Integration Runtime.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param options The options parameters.
   */
  listAuthKeys(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    options?: SqlMigrationServicesListAuthKeysOptionalParams
  ): Promise<SqlMigrationServicesListAuthKeysResponse>;
  /**
   * Regenerate a new set of Authentication Keys for Self Hosted Integration Runtime.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param parameters Details of SqlMigrationService resource.
   * @param options The options parameters.
   */
  regenerateAuthKeys(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    parameters: RegenAuthKeys,
    options?: SqlMigrationServicesRegenerateAuthKeysOptionalParams
  ): Promise<SqlMigrationServicesRegenerateAuthKeysResponse>;
  /**
   * Delete the integration runtime node.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param parameters Details of SqlMigrationService resource.
   * @param options The options parameters.
   */
  deleteNode(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    parameters: DeleteNode,
    options?: SqlMigrationServicesDeleteNodeOptionalParams
  ): Promise<SqlMigrationServicesDeleteNodeResponse>;
  /**
   * Retrieve the registered Integration Runtime nodes and their monitoring data for a given Database
   * Migration Service.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlMigrationServiceName Name of the SQL Migration Service.
   * @param options The options parameters.
   */
  listMonitoringData(
    resourceGroupName: string,
    sqlMigrationServiceName: string,
    options?: SqlMigrationServicesListMonitoringDataOptionalParams
  ): Promise<SqlMigrationServicesListMonitoringDataResponse>;
}
