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
import * as Mappers from "../models/transparentDataEncryptionsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a TransparentDataEncryptions. */
export class TransparentDataEncryptions {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a TransparentDataEncryptions.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates or updates a database's transparent data encryption configuration.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database for which setting the transparent data encryption
   * applies.
   * @param parameters The required parameters for creating or updating transparent data encryption.
   * @param [options] The optional parameters
   * @returns Promise<Models.TransparentDataEncryptionsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: Models.TransparentDataEncryption, options?: msRest.RequestOptionsBase): Promise<Models.TransparentDataEncryptionsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database for which setting the transparent data encryption
   * applies.
   * @param parameters The required parameters for creating or updating transparent data encryption.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: Models.TransparentDataEncryption, callback: msRest.ServiceCallback<Models.TransparentDataEncryption>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database for which setting the transparent data encryption
   * applies.
   * @param parameters The required parameters for creating or updating transparent data encryption.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: Models.TransparentDataEncryption, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TransparentDataEncryption>): void;
  createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: Models.TransparentDataEncryption, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TransparentDataEncryption>, callback?: msRest.ServiceCallback<Models.TransparentDataEncryption>): Promise<Models.TransparentDataEncryptionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.TransparentDataEncryptionsCreateOrUpdateResponse>;
  }

  /**
   * Gets a database's transparent data encryption configuration.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database for which the transparent data encryption applies.
   * @param [options] The optional parameters
   * @returns Promise<Models.TransparentDataEncryptionsGetResponse>
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<Models.TransparentDataEncryptionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database for which the transparent data encryption applies.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, callback: msRest.ServiceCallback<Models.TransparentDataEncryption>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database for which the transparent data encryption applies.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TransparentDataEncryption>): void;
  get(resourceGroupName: string, serverName: string, databaseName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TransparentDataEncryption>, callback?: msRest.ServiceCallback<Models.TransparentDataEncryption>): Promise<Models.TransparentDataEncryptionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.TransparentDataEncryptionsGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/transparentDataEncryption/{transparentDataEncryptionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.transparentDataEncryptionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.TransparentDataEncryption,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.TransparentDataEncryption
    },
    201: {
      bodyMapper: Mappers.TransparentDataEncryption
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/transparentDataEncryption/{transparentDataEncryptionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.transparentDataEncryptionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TransparentDataEncryption
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
