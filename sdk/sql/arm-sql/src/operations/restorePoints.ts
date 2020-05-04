/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/restorePointsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a RestorePoints. */
export class RestorePoints {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a RestorePoints.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of database restore points.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param [options] The optional parameters
   * @returns Promise<Models.RestorePointsListByDatabaseResponse>
   */
  listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<Models.RestorePointsListByDatabaseResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param callback The callback
   */
  listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, callback: msRest.ServiceCallback<Models.RestorePointListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RestorePointListResult>): void;
  listByDatabase(resourceGroupName: string, serverName: string, databaseName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RestorePointListResult>, callback?: msRest.ServiceCallback<Models.RestorePointListResult>): Promise<Models.RestorePointsListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        options
      },
      listByDatabaseOperationSpec,
      callback) as Promise<Models.RestorePointsListByDatabaseResponse>;
  }

  /**
   * Creates a restore point for a data warehouse.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters The definition for creating the restore point of this database.
   * @param [options] The optional parameters
   * @returns Promise<Models.RestorePointsCreateResponse>
   */
  create(resourceGroupName: string, serverName: string, databaseName: string, parameters: Models.CreateDatabaseRestorePointDefinition, options?: msRest.RequestOptionsBase): Promise<Models.RestorePointsCreateResponse> {
    return this.beginCreate(resourceGroupName,serverName,databaseName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.RestorePointsCreateResponse>;
  }

  /**
   * Gets a restore point.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param restorePointName The name of the restore point.
   * @param [options] The optional parameters
   * @returns Promise<Models.RestorePointsGetResponse>
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, restorePointName: string, options?: msRest.RequestOptionsBase): Promise<Models.RestorePointsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param restorePointName The name of the restore point.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, restorePointName: string, callback: msRest.ServiceCallback<Models.RestorePoint>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param restorePointName The name of the restore point.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, restorePointName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RestorePoint>): void;
  get(resourceGroupName: string, serverName: string, databaseName: string, restorePointName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RestorePoint>, callback?: msRest.ServiceCallback<Models.RestorePoint>): Promise<Models.RestorePointsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        restorePointName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RestorePointsGetResponse>;
  }

  /**
   * Deletes a restore point.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param restorePointName The name of the restore point.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serverName: string, databaseName: string, restorePointName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param restorePointName The name of the restore point.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serverName: string, databaseName: string, restorePointName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param restorePointName The name of the restore point.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serverName: string, databaseName: string, restorePointName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, serverName: string, databaseName: string, restorePointName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        restorePointName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Creates a restore point for a data warehouse.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters The definition for creating the restore point of this database.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, serverName: string, databaseName: string, parameters: Models.CreateDatabaseRestorePointDefinition, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        parameters,
        options
      },
      beginCreateOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByDatabaseOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/restorePoints",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion5
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RestorePointListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/restorePoints/{restorePointName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.restorePointName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion5
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RestorePoint
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/restorePoints/{restorePointName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.restorePointName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion5
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/restorePoints",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion5
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.CreateDatabaseRestorePointDefinition,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RestorePoint
    },
    201: {
      bodyMapper: Mappers.RestorePoint
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
