/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/flowLogsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a FlowLogs. */
export class FlowLogs {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a FlowLogs.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Create or update a flow log for the specified network security group.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param flowLogName The name of the flow log.
   * @param parameters Parameters that define the create or update flow log resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.FlowLogsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, networkWatcherName: string, flowLogName: string, parameters: Models.FlowLog, options?: msRest.RequestOptionsBase): Promise<Models.FlowLogsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,networkWatcherName,flowLogName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.FlowLogsCreateOrUpdateResponse>;
  }

  /**
   * Gets a flow log resource by name.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param flowLogName The name of the flow log resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.FlowLogsGetResponse>
   */
  get(resourceGroupName: string, networkWatcherName: string, flowLogName: string, options?: msRest.RequestOptionsBase): Promise<Models.FlowLogsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param flowLogName The name of the flow log resource.
   * @param callback The callback
   */
  get(resourceGroupName: string, networkWatcherName: string, flowLogName: string, callback: msRest.ServiceCallback<Models.FlowLog>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param flowLogName The name of the flow log resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, networkWatcherName: string, flowLogName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FlowLog>): void;
  get(resourceGroupName: string, networkWatcherName: string, flowLogName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FlowLog>, callback?: msRest.ServiceCallback<Models.FlowLog>): Promise<Models.FlowLogsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkWatcherName,
        flowLogName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.FlowLogsGetResponse>;
  }

  /**
   * Deletes the specified flow log resource.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param flowLogName The name of the flow log resource.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, networkWatcherName: string, flowLogName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,networkWatcherName,flowLogName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Lists all flow log resources for the specified Network Watcher.
   * @param resourceGroupName The name of the resource group containing Network Watcher.
   * @param networkWatcherName The name of the Network Watcher resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.FlowLogsListResponse>
   */
  list(resourceGroupName: string, networkWatcherName: string, options?: msRest.RequestOptionsBase): Promise<Models.FlowLogsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group containing Network Watcher.
   * @param networkWatcherName The name of the Network Watcher resource.
   * @param callback The callback
   */
  list(resourceGroupName: string, networkWatcherName: string, callback: msRest.ServiceCallback<Models.FlowLogListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group containing Network Watcher.
   * @param networkWatcherName The name of the Network Watcher resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, networkWatcherName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FlowLogListResult>): void;
  list(resourceGroupName: string, networkWatcherName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FlowLogListResult>, callback?: msRest.ServiceCallback<Models.FlowLogListResult>): Promise<Models.FlowLogsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkWatcherName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.FlowLogsListResponse>;
  }

  /**
   * Create or update a flow log for the specified network security group.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param flowLogName The name of the flow log.
   * @param parameters Parameters that define the create or update flow log resource.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, networkWatcherName: string, flowLogName: string, parameters: Models.FlowLog, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        networkWatcherName,
        flowLogName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the specified flow log resource.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param flowLogName The name of the flow log resource.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, networkWatcherName: string, flowLogName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        networkWatcherName,
        flowLogName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Lists all flow log resources for the specified Network Watcher.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.FlowLogsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.FlowLogsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.FlowLogListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FlowLogListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FlowLogListResult>, callback?: msRest.ServiceCallback<Models.FlowLogListResult>): Promise<Models.FlowLogsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.FlowLogsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/flowLogs/{flowLogName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkWatcherName,
    Parameters.flowLogName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FlowLog
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/flowLogs",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkWatcherName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FlowLogListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/flowLogs/{flowLogName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkWatcherName,
    Parameters.flowLogName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.FlowLog,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.FlowLog
    },
    201: {
      bodyMapper: Mappers.FlowLog
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/flowLogs/{flowLogName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.networkWatcherName,
    Parameters.flowLogName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FlowLogListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
