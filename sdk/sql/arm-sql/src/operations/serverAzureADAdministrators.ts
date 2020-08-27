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
import * as Mappers from "../models/serverAzureADAdministratorsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a ServerAzureADAdministrators. */
export class ServerAzureADAdministrators {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a ServerAzureADAdministrators.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a Azure Active Directory administrator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServerAzureADAdministratorsGetResponse>
   */
  get(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServerAzureADAdministratorsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<Models.ServerAzureADAdministrator>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServerAzureADAdministrator>): void;
  get(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServerAzureADAdministrator>, callback?: msRest.ServiceCallback<Models.ServerAzureADAdministrator>): Promise<Models.ServerAzureADAdministratorsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ServerAzureADAdministratorsGetResponse>;
  }

  /**
   * Creates or updates an existing Azure Active Directory administrator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters The requested Azure Active Directory administrator Resource state.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServerAzureADAdministratorsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serverName: string, parameters: Models.ServerAzureADAdministrator, options?: msRest.RequestOptionsBase): Promise<Models.ServerAzureADAdministratorsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,serverName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ServerAzureADAdministratorsCreateOrUpdateResponse>;
  }

  /**
   * Deletes the Azure Active Directory administrator with the given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,serverName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets a list of Azure Active Directory administrators in a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServerAzureADAdministratorsListByServerResponse>
   */
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServerAzureADAdministratorsListByServerResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<Models.AdministratorListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AdministratorListResult>): void;
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AdministratorListResult>, callback?: msRest.ServiceCallback<Models.AdministratorListResult>): Promise<Models.ServerAzureADAdministratorsListByServerResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      listByServerOperationSpec,
      callback) as Promise<Models.ServerAzureADAdministratorsListByServerResponse>;
  }

  /**
   * Creates or updates an existing Azure Active Directory administrator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters The requested Azure Active Directory administrator Resource state.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, serverName: string, parameters: Models.ServerAzureADAdministrator, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the Azure Active Directory administrator with the given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Gets a list of Azure Active Directory administrators in a server.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServerAzureADAdministratorsListByServerNextResponse>
   */
  listByServerNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ServerAzureADAdministratorsListByServerNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServerNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AdministratorListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServerNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AdministratorListResult>): void;
  listByServerNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AdministratorListResult>, callback?: msRest.ServiceCallback<Models.AdministratorListResult>): Promise<Models.ServerAzureADAdministratorsListByServerNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServerNextOperationSpec,
      callback) as Promise<Models.ServerAzureADAdministratorsListByServerNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/administrators/{administratorName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.administratorName
  ],
  queryParameters: [
    Parameters.apiVersion5
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServerAzureADAdministrator
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByServerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/administrators",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.serverName
  ],
  queryParameters: [
    Parameters.apiVersion5
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AdministratorListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/administrators/{administratorName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.administratorName
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
      ...Mappers.ServerAzureADAdministrator,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ServerAzureADAdministrator
    },
    201: {
      bodyMapper: Mappers.ServerAzureADAdministrator
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/administrators/{administratorName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.administratorName
  ],
  queryParameters: [
    Parameters.apiVersion5
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByServerNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AdministratorListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
