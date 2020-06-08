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
import * as Mappers from "../models/syncAgentsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a SyncAgents. */
export class SyncAgents {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a SyncAgents.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a sync agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param [options] The optional parameters
   * @returns Promise<Models.SyncAgentsGetResponse>
   */
  get(resourceGroupName: string, serverName: string, syncAgentName: string, options?: msRest.RequestOptionsBase): Promise<Models.SyncAgentsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, syncAgentName: string, callback: msRest.ServiceCallback<Models.SyncAgent>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, syncAgentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SyncAgent>): void;
  get(resourceGroupName: string, serverName: string, syncAgentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SyncAgent>, callback?: msRest.ServiceCallback<Models.SyncAgent>): Promise<Models.SyncAgentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        syncAgentName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SyncAgentsGetResponse>;
  }

  /**
   * Creates or updates a sync agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param parameters The requested sync agent resource state.
   * @param [options] The optional parameters
   * @returns Promise<Models.SyncAgentsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serverName: string, syncAgentName: string, parameters: Models.SyncAgent, options?: msRest.RequestOptionsBase): Promise<Models.SyncAgentsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,serverName,syncAgentName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.SyncAgentsCreateOrUpdateResponse>;
  }

  /**
   * Deletes a sync agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serverName: string, syncAgentName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,serverName,syncAgentName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Lists sync agents in a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param [options] The optional parameters
   * @returns Promise<Models.SyncAgentsListByServerResponse>
   */
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<Models.SyncAgentsListByServerResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<Models.SyncAgentListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SyncAgentListResult>): void;
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SyncAgentListResult>, callback?: msRest.ServiceCallback<Models.SyncAgentListResult>): Promise<Models.SyncAgentsListByServerResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      listByServerOperationSpec,
      callback) as Promise<Models.SyncAgentsListByServerResponse>;
  }

  /**
   * Generates a sync agent key.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param [options] The optional parameters
   * @returns Promise<Models.SyncAgentsGenerateKeyResponse>
   */
  generateKey(resourceGroupName: string, serverName: string, syncAgentName: string, options?: msRest.RequestOptionsBase): Promise<Models.SyncAgentsGenerateKeyResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param callback The callback
   */
  generateKey(resourceGroupName: string, serverName: string, syncAgentName: string, callback: msRest.ServiceCallback<Models.SyncAgentKeyProperties>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param options The optional parameters
   * @param callback The callback
   */
  generateKey(resourceGroupName: string, serverName: string, syncAgentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SyncAgentKeyProperties>): void;
  generateKey(resourceGroupName: string, serverName: string, syncAgentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SyncAgentKeyProperties>, callback?: msRest.ServiceCallback<Models.SyncAgentKeyProperties>): Promise<Models.SyncAgentsGenerateKeyResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        syncAgentName,
        options
      },
      generateKeyOperationSpec,
      callback) as Promise<Models.SyncAgentsGenerateKeyResponse>;
  }

  /**
   * Lists databases linked to a sync agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param [options] The optional parameters
   * @returns Promise<Models.SyncAgentsListLinkedDatabasesResponse>
   */
  listLinkedDatabases(resourceGroupName: string, serverName: string, syncAgentName: string, options?: msRest.RequestOptionsBase): Promise<Models.SyncAgentsListLinkedDatabasesResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param callback The callback
   */
  listLinkedDatabases(resourceGroupName: string, serverName: string, syncAgentName: string, callback: msRest.ServiceCallback<Models.SyncAgentLinkedDatabaseListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param options The optional parameters
   * @param callback The callback
   */
  listLinkedDatabases(resourceGroupName: string, serverName: string, syncAgentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SyncAgentLinkedDatabaseListResult>): void;
  listLinkedDatabases(resourceGroupName: string, serverName: string, syncAgentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SyncAgentLinkedDatabaseListResult>, callback?: msRest.ServiceCallback<Models.SyncAgentLinkedDatabaseListResult>): Promise<Models.SyncAgentsListLinkedDatabasesResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        syncAgentName,
        options
      },
      listLinkedDatabasesOperationSpec,
      callback) as Promise<Models.SyncAgentsListLinkedDatabasesResponse>;
  }

  /**
   * Creates or updates a sync agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param parameters The requested sync agent resource state.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, serverName: string, syncAgentName: string, parameters: Models.SyncAgent, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        syncAgentName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes a sync agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server on which the sync agent is hosted.
   * @param syncAgentName The name of the sync agent.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, serverName: string, syncAgentName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        syncAgentName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Lists sync agents in a server.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SyncAgentsListByServerNextResponse>
   */
  listByServerNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SyncAgentsListByServerNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByServerNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SyncAgentListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServerNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SyncAgentListResult>): void;
  listByServerNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SyncAgentListResult>, callback?: msRest.ServiceCallback<Models.SyncAgentListResult>): Promise<Models.SyncAgentsListByServerNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByServerNextOperationSpec,
      callback) as Promise<Models.SyncAgentsListByServerNextResponse>;
  }

  /**
   * Lists databases linked to a sync agent.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SyncAgentsListLinkedDatabasesNextResponse>
   */
  listLinkedDatabasesNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SyncAgentsListLinkedDatabasesNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listLinkedDatabasesNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SyncAgentLinkedDatabaseListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listLinkedDatabasesNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SyncAgentLinkedDatabaseListResult>): void;
  listLinkedDatabasesNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SyncAgentLinkedDatabaseListResult>, callback?: msRest.ServiceCallback<Models.SyncAgentLinkedDatabaseListResult>): Promise<Models.SyncAgentsListLinkedDatabasesNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listLinkedDatabasesNextOperationSpec,
      callback) as Promise<Models.SyncAgentsListLinkedDatabasesNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/syncAgents/{syncAgentName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.syncAgentName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SyncAgent
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByServerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/syncAgents",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SyncAgentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const generateKeyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/syncAgents/{syncAgentName}/generateKey",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.syncAgentName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SyncAgentKeyProperties
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listLinkedDatabasesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/syncAgents/{syncAgentName}/linkedDatabases",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.syncAgentName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SyncAgentLinkedDatabaseListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/syncAgents/{syncAgentName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.syncAgentName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.SyncAgent,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SyncAgent
    },
    201: {
      bodyMapper: Mappers.SyncAgent
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/syncAgents/{syncAgentName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.syncAgentName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
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
      bodyMapper: Mappers.SyncAgentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listLinkedDatabasesNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.SyncAgentLinkedDatabaseListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
