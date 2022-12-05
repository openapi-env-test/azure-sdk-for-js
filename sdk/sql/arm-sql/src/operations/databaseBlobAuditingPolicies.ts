/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DatabaseBlobAuditingPolicies } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  DatabaseBlobAuditingPolicy,
  DatabaseBlobAuditingPoliciesListByDatabaseNextOptionalParams,
  DatabaseBlobAuditingPoliciesListByDatabaseOptionalParams,
  DatabaseBlobAuditingPoliciesListByDatabaseResponse,
  DatabaseBlobAuditingPoliciesGetOptionalParams,
  DatabaseBlobAuditingPoliciesGetResponse,
  DatabaseBlobAuditingPoliciesCreateOrUpdateOptionalParams,
  DatabaseBlobAuditingPoliciesCreateOrUpdateResponse,
  DatabaseBlobAuditingPoliciesListByDatabaseNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DatabaseBlobAuditingPolicies operations. */
export class DatabaseBlobAuditingPoliciesImpl
  implements DatabaseBlobAuditingPolicies {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class DatabaseBlobAuditingPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Lists auditing settings of a database.
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
    options?: DatabaseBlobAuditingPoliciesListByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<DatabaseBlobAuditingPolicy> {
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
      byPage: () => {
        return this.listByDatabasePagingPage(
          resourceGroupName,
          serverName,
          databaseName,
          options
        );
      }
    };
  }

  private async *listByDatabasePagingPage(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabaseBlobAuditingPoliciesListByDatabaseOptionalParams
  ): AsyncIterableIterator<DatabaseBlobAuditingPolicy[]> {
    let result = await this._listByDatabase(
      resourceGroupName,
      serverName,
      databaseName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByDatabaseNext(
        resourceGroupName,
        serverName,
        databaseName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByDatabasePagingAll(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabaseBlobAuditingPoliciesListByDatabaseOptionalParams
  ): AsyncIterableIterator<DatabaseBlobAuditingPolicy> {
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
   * Lists auditing settings of a database.
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
    options?: DatabaseBlobAuditingPoliciesListByDatabaseOptionalParams
  ): Promise<DatabaseBlobAuditingPoliciesListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, databaseName, options },
      listByDatabaseOperationSpec
    );
  }

  /**
   * Gets a database's blob auditing policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DatabaseBlobAuditingPoliciesGetOptionalParams
  ): Promise<DatabaseBlobAuditingPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, databaseName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a database's blob auditing policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters The database blob auditing policy.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    parameters: DatabaseBlobAuditingPolicy,
    options?: DatabaseBlobAuditingPoliciesCreateOrUpdateOptionalParams
  ): Promise<DatabaseBlobAuditingPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, databaseName, parameters, options },
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
    options?: DatabaseBlobAuditingPoliciesListByDatabaseNextOptionalParams
  ): Promise<DatabaseBlobAuditingPoliciesListByDatabaseNextResponse> {
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/auditingSettings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseBlobAuditingPolicyListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion6],
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/auditingSettings/{blobAuditingPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseBlobAuditingPolicy
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.blobAuditingPolicyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/auditingSettings/{blobAuditingPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseBlobAuditingPolicy
    },
    201: {
      bodyMapper: Mappers.DatabaseBlobAuditingPolicy
    },
    default: {}
  },
  requestBody: Parameters.parameters82,
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.blobAuditingPolicyName
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
      bodyMapper: Mappers.DatabaseBlobAuditingPolicyListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion6],
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
