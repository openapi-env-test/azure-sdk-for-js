/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/recoverableDatabasesMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a RecoverableDatabases. */
export class RecoverableDatabases {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a RecoverableDatabases.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a recoverable database, which is a resource representing a database's geo backup
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database
   * @param [options] The optional parameters
   * @returns Promise<Models.RecoverableDatabasesGetResponse>
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<Models.RecoverableDatabasesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, callback: msRest.ServiceCallback<Models.RecoverableDatabase>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecoverableDatabase>): void;
  get(resourceGroupName: string, serverName: string, databaseName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RecoverableDatabase>, callback?: msRest.ServiceCallback<Models.RecoverableDatabase>): Promise<Models.RecoverableDatabasesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RecoverableDatabasesGetResponse>;
  }

  /**
   * Gets a list of recoverable databases
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param [options] The optional parameters
   * @returns Promise<Models.RecoverableDatabasesListByServerResponse>
   */
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<Models.RecoverableDatabasesListByServerResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<Models.RecoverableDatabaseListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RecoverableDatabaseListResult>): void;
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RecoverableDatabaseListResult>, callback?: msRest.ServiceCallback<Models.RecoverableDatabaseListResult>): Promise<Models.RecoverableDatabasesListByServerResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      listByServerOperationSpec,
      callback) as Promise<Models.RecoverableDatabasesListByServerResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/recoverableDatabases/{databaseName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.databaseName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecoverableDatabase
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByServerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/recoverableDatabases",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.serverName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RecoverableDatabaseListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
