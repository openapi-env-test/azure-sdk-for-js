/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ExtendedDatabaseBlobAuditingPolicies } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  ExtendedDatabaseBlobAuditingPolicy,
  ExtendedDatabaseBlobAuditingPoliciesListByDatabaseNextOptionalParams,
  ExtendedDatabaseBlobAuditingPoliciesListByDatabaseOptionalParams,
  ExtendedDatabaseBlobAuditingPoliciesListByDatabaseResponse,
  ExtendedDatabaseBlobAuditingPoliciesGetOptionalParams,
  ExtendedDatabaseBlobAuditingPoliciesGetResponse,
  ExtendedDatabaseBlobAuditingPoliciesCreateOrUpdateOptionalParams,
  ExtendedDatabaseBlobAuditingPoliciesCreateOrUpdateResponse,
  ExtendedDatabaseBlobAuditingPoliciesListByDatabaseNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ExtendedDatabaseBlobAuditingPolicies operations. */
export class ExtendedDatabaseBlobAuditingPoliciesImpl
  implements ExtendedDatabaseBlobAuditingPolicies {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class ExtendedDatabaseBlobAuditingPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Lists extended auditing settings of a database.
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
    options?: ExtendedDatabaseBlobAuditingPoliciesListByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<ExtendedDatabaseBlobAuditingPolicy> {
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
    options?: ExtendedDatabaseBlobAuditingPoliciesListByDatabaseOptionalParams
  ): AsyncIterableIterator<ExtendedDatabaseBlobAuditingPolicy[]> {
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
    options?: ExtendedDatabaseBlobAuditingPoliciesListByDatabaseOptionalParams
  ): AsyncIterableIterator<ExtendedDatabaseBlobAuditingPolicy> {
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
   * Lists extended auditing settings of a database.
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
    options?: ExtendedDatabaseBlobAuditingPoliciesListByDatabaseOptionalParams
  ): Promise<ExtendedDatabaseBlobAuditingPoliciesListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, databaseName, options },
      listByDatabaseOperationSpec
    );
  }

  /**
   * Gets an extended database's blob auditing policy.
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
    options?: ExtendedDatabaseBlobAuditingPoliciesGetOptionalParams
  ): Promise<ExtendedDatabaseBlobAuditingPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, databaseName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates an extended database's blob auditing policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters The extended database blob auditing policy.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    parameters: ExtendedDatabaseBlobAuditingPolicy,
    options?: ExtendedDatabaseBlobAuditingPoliciesCreateOrUpdateOptionalParams
  ): Promise<ExtendedDatabaseBlobAuditingPoliciesCreateOrUpdateResponse> {
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
    options?: ExtendedDatabaseBlobAuditingPoliciesListByDatabaseNextOptionalParams
  ): Promise<ExtendedDatabaseBlobAuditingPoliciesListByDatabaseNextResponse> {
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/extendedAuditingSettings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExtendedDatabaseBlobAuditingPolicyListResult
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/extendedAuditingSettings/{blobAuditingPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExtendedDatabaseBlobAuditingPolicy
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/extendedAuditingSettings/{blobAuditingPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ExtendedDatabaseBlobAuditingPolicy
    },
    201: {
      bodyMapper: Mappers.ExtendedDatabaseBlobAuditingPolicy
    },
    default: {}
  },
  requestBody: Parameters.parameters89,
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
      bodyMapper: Mappers.ExtendedDatabaseBlobAuditingPolicyListResult
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
