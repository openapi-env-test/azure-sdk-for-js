/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DatabaseAdvancedThreatProtectionSettings } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  DatabaseAdvancedThreatProtection,
  DatabaseAdvancedThreatProtectionSettingsListByDatabaseNextOptionalParams,
  DatabaseAdvancedThreatProtectionSettingsListByDatabaseOptionalParams,
  DatabaseAdvancedThreatProtectionSettingsListByDatabaseResponse,
  AdvancedThreatProtectionName,
  DatabaseAdvancedThreatProtectionSettingsGetOptionalParams,
  DatabaseAdvancedThreatProtectionSettingsGetResponse,
  DatabaseAdvancedThreatProtectionSettingsCreateOrUpdateOptionalParams,
  DatabaseAdvancedThreatProtectionSettingsCreateOrUpdateResponse,
  DatabaseAdvancedThreatProtectionSettingsListByDatabaseNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DatabaseAdvancedThreatProtectionSettings operations. */
export class DatabaseAdvancedThreatProtectionSettingsImpl
  implements DatabaseAdvancedThreatProtectionSettings {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class DatabaseAdvancedThreatProtectionSettings class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of database's Advanced Threat Protection states.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  public listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabaseAdvancedThreatProtectionSettingsListByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<DatabaseAdvancedThreatProtection> {
    const iter = this.listByDatabasePagingAll(
      resourceGroupName,
      serverName,
      databaseName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByDatabasePagingPage(
          resourceGroupName,
          serverName,
          databaseName,
          options,
          settings
        );
      }
    };
  }

  private async *listByDatabasePagingPage(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabaseAdvancedThreatProtectionSettingsListByDatabaseOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DatabaseAdvancedThreatProtection[]> {
    let result: DatabaseAdvancedThreatProtectionSettingsListByDatabaseResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByDatabase(
        resourceGroupName,
        serverName,
        databaseName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByDatabaseNext(
        resourceGroupName,
        serverName,
        databaseName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByDatabasePagingAll(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabaseAdvancedThreatProtectionSettingsListByDatabaseOptionalParams
  ): AsyncIterableIterator<DatabaseAdvancedThreatProtection> {
    for await (const page of this.listByDatabasePagingPage(
      resourceGroupName,
      serverName,
      databaseName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of database's Advanced Threat Protection states.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  private _listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabaseAdvancedThreatProtectionSettingsListByDatabaseOptionalParams
  ): Promise<DatabaseAdvancedThreatProtectionSettingsListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, databaseName, options },
      listByDatabaseOperationSpec
    );
  }

  /**
   * Gets a database's Advanced Threat Protection state.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param advancedThreatProtectionName The name of the Advanced Threat Protection state.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    advancedThreatProtectionName: AdvancedThreatProtectionName,
    options?: DatabaseAdvancedThreatProtectionSettingsGetOptionalParams
  ): Promise<DatabaseAdvancedThreatProtectionSettingsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        advancedThreatProtectionName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a database's Advanced Threat Protection state.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param advancedThreatProtectionName The name of the Advanced Threat Protection state.
   * @param parameters The database Advanced Threat Protection state.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    advancedThreatProtectionName: AdvancedThreatProtectionName,
    parameters: DatabaseAdvancedThreatProtection,
    options?: DatabaseAdvancedThreatProtectionSettingsCreateOrUpdateOptionalParams
  ): Promise<DatabaseAdvancedThreatProtectionSettingsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        advancedThreatProtectionName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * ListByDatabaseNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param nextLink The nextLink from the previous successful call to the ListByDatabase method.
   * @param options The options parameters.
   */
  private _listByDatabaseNext(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    nextLink: string,
    options?: DatabaseAdvancedThreatProtectionSettingsListByDatabaseNextOptionalParams
  ): Promise<
    DatabaseAdvancedThreatProtectionSettingsListByDatabaseNextResponse
  > {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, databaseName, nextLink, options },
      listByDatabaseNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDatabaseOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/advancedThreatProtectionSettings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseAdvancedThreatProtectionListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion7],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/advancedThreatProtectionSettings/{advancedThreatProtectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseAdvancedThreatProtection
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion7],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.advancedThreatProtectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/advancedThreatProtectionSettings/{advancedThreatProtectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseAdvancedThreatProtection
    },
    201: {
      bodyMapper: Mappers.DatabaseAdvancedThreatProtection
    },
    default: {}
  },
  requestBody: Parameters.parameters86,
  queryParameters: [Parameters.apiVersion7],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.advancedThreatProtectionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByDatabaseNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseAdvancedThreatProtectionListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
