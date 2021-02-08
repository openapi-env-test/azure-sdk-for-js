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
import * as Mappers from "../models/localNetworkGatewaysMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a LocalNetworkGateways. */
export class LocalNetworkGateways {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a LocalNetworkGateways.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates or updates a local network gateway in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param localNetworkGatewayName The name of the local network gateway.
   * @param parameters Parameters supplied to the create or update local network gateway operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.LocalNetworkGatewaysCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, localNetworkGatewayName: string, parameters: Models.LocalNetworkGateway, options?: msRest.RequestOptionsBase): Promise<Models.LocalNetworkGatewaysCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,localNetworkGatewayName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LocalNetworkGatewaysCreateOrUpdateResponse>;
  }

  /**
   * Gets the specified local network gateway in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param localNetworkGatewayName The name of the local network gateway.
   * @param [options] The optional parameters
   * @returns Promise<Models.LocalNetworkGatewaysGetResponse>
   */
  get(resourceGroupName: string, localNetworkGatewayName: string, options?: msRest.RequestOptionsBase): Promise<Models.LocalNetworkGatewaysGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param localNetworkGatewayName The name of the local network gateway.
   * @param callback The callback
   */
  get(resourceGroupName: string, localNetworkGatewayName: string, callback: msRest.ServiceCallback<Models.LocalNetworkGateway>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param localNetworkGatewayName The name of the local network gateway.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, localNetworkGatewayName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LocalNetworkGateway>): void;
  get(resourceGroupName: string, localNetworkGatewayName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.LocalNetworkGateway>, callback?: msRest.ServiceCallback<Models.LocalNetworkGateway>): Promise<Models.LocalNetworkGatewaysGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        localNetworkGatewayName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.LocalNetworkGatewaysGetResponse>;
  }

  /**
   * Deletes the specified local network gateway.
   * @param resourceGroupName The name of the resource group.
   * @param localNetworkGatewayName The name of the local network gateway.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, localNetworkGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,localNetworkGatewayName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Updates a local network gateway tags.
   * @param resourceGroupName The name of the resource group.
   * @param localNetworkGatewayName The name of the local network gateway.
   * @param parameters Parameters supplied to update local network gateway tags.
   * @param [options] The optional parameters
   * @returns Promise<Models.LocalNetworkGatewaysUpdateTagsResponse>
   */
  updateTags(resourceGroupName: string, localNetworkGatewayName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<Models.LocalNetworkGatewaysUpdateTagsResponse> {
    return this.beginUpdateTags(resourceGroupName,localNetworkGatewayName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LocalNetworkGatewaysUpdateTagsResponse>;
  }

  /**
   * Gets all the local network gateways in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.LocalNetworkGatewaysListResponse>
   */
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.LocalNetworkGatewaysListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.LocalNetworkGatewayListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LocalNetworkGatewayListResult>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.LocalNetworkGatewayListResult>, callback?: msRest.ServiceCallback<Models.LocalNetworkGatewayListResult>): Promise<Models.LocalNetworkGatewaysListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.LocalNetworkGatewaysListResponse>;
  }

  /**
   * Creates or updates a local network gateway in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param localNetworkGatewayName The name of the local network gateway.
   * @param parameters Parameters supplied to the create or update local network gateway operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, localNetworkGatewayName: string, parameters: Models.LocalNetworkGateway, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        localNetworkGatewayName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the specified local network gateway.
   * @param resourceGroupName The name of the resource group.
   * @param localNetworkGatewayName The name of the local network gateway.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, localNetworkGatewayName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        localNetworkGatewayName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Updates a local network gateway tags.
   * @param resourceGroupName The name of the resource group.
   * @param localNetworkGatewayName The name of the local network gateway.
   * @param parameters Parameters supplied to update local network gateway tags.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdateTags(resourceGroupName: string, localNetworkGatewayName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        localNetworkGatewayName,
        parameters,
        options
      },
      beginUpdateTagsOperationSpec,
      options);
  }

  /**
   * Gets all the local network gateways in a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.LocalNetworkGatewaysListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.LocalNetworkGatewaysListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.LocalNetworkGatewayListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LocalNetworkGatewayListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.LocalNetworkGatewayListResult>, callback?: msRest.ServiceCallback<Models.LocalNetworkGatewayListResult>): Promise<Models.LocalNetworkGatewaysListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.LocalNetworkGatewaysListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/localNetworkGateways/{localNetworkGatewayName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.localNetworkGatewayName,
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
      bodyMapper: Mappers.LocalNetworkGateway
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/localNetworkGateways",
  urlParameters: [
    Parameters.resourceGroupName,
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
      bodyMapper: Mappers.LocalNetworkGatewayListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/localNetworkGateways/{localNetworkGatewayName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.localNetworkGatewayName,
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
      ...Mappers.LocalNetworkGateway,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.LocalNetworkGateway
    },
    201: {
      bodyMapper: Mappers.LocalNetworkGateway
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/localNetworkGateways/{localNetworkGatewayName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.localNetworkGatewayName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
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

const beginUpdateTagsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/localNetworkGateways/{localNetworkGatewayName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.localNetworkGatewayName,
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
      ...Mappers.TagsObject,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.LocalNetworkGateway
    },
    default: {
      bodyMapper: Mappers.CloudError
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
      bodyMapper: Mappers.LocalNetworkGatewayListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
