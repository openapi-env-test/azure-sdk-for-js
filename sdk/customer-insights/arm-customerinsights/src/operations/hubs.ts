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
import * as Mappers from "../models/hubsMappers";
import * as Parameters from "../models/parameters";
import { CustomerInsightsManagementClientContext } from "../customerInsightsManagementClientContext";

/** Class representing a Hubs. */
export class Hubs {
  private readonly client: CustomerInsightsManagementClientContext;

  /**
   * Create a Hubs.
   * @param {CustomerInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: CustomerInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates a hub, or updates an existing hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the Hub.
   * @param parameters Parameters supplied to the CreateOrUpdate Hub operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.HubsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, hubName: string, parameters: Models.Hub, options?: msRest.RequestOptionsBase): Promise<Models.HubsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the Hub.
   * @param parameters Parameters supplied to the CreateOrUpdate Hub operation.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, hubName: string, parameters: Models.Hub, callback: msRest.ServiceCallback<Models.Hub>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the Hub.
   * @param parameters Parameters supplied to the CreateOrUpdate Hub operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, hubName: string, parameters: Models.Hub, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Hub>): void;
  createOrUpdate(resourceGroupName: string, hubName: string, parameters: Models.Hub, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Hub>, callback?: msRest.ServiceCallback<Models.Hub>): Promise<Models.HubsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hubName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.HubsCreateOrUpdateResponse>;
  }

  /**
   * Updates a Hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the Hub.
   * @param parameters Parameters supplied to the Update Hub operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.HubsUpdateResponse>
   */
  update(resourceGroupName: string, hubName: string, parameters: Models.Hub, options?: msRest.RequestOptionsBase): Promise<Models.HubsUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the Hub.
   * @param parameters Parameters supplied to the Update Hub operation.
   * @param callback The callback
   */
  update(resourceGroupName: string, hubName: string, parameters: Models.Hub, callback: msRest.ServiceCallback<Models.Hub>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the Hub.
   * @param parameters Parameters supplied to the Update Hub operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, hubName: string, parameters: Models.Hub, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Hub>): void;
  update(resourceGroupName: string, hubName: string, parameters: Models.Hub, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Hub>, callback?: msRest.ServiceCallback<Models.Hub>): Promise<Models.HubsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hubName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.HubsUpdateResponse>;
  }

  /**
   * Deletes the specified hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, hubName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,hubName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets information about the specified hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param [options] The optional parameters
   * @returns Promise<Models.HubsGetResponse>
   */
  get(resourceGroupName: string, hubName: string, options?: msRest.RequestOptionsBase): Promise<Models.HubsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param callback The callback
   */
  get(resourceGroupName: string, hubName: string, callback: msRest.ServiceCallback<Models.Hub>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, hubName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Hub>): void;
  get(resourceGroupName: string, hubName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Hub>, callback?: msRest.ServiceCallback<Models.Hub>): Promise<Models.HubsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hubName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.HubsGetResponse>;
  }

  /**
   * Gets all the hubs in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.HubsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.HubsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.HubListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.HubListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.HubListResult>, callback?: msRest.ServiceCallback<Models.HubListResult>): Promise<Models.HubsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.HubsListByResourceGroupResponse>;
  }

  /**
   * Gets all hubs in the specified subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.HubsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.HubsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.HubListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.HubListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.HubListResult>, callback?: msRest.ServiceCallback<Models.HubListResult>): Promise<Models.HubsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.HubsListResponse>;
  }

  /**
   * Deletes the specified hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, hubName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        hubName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Gets all the hubs in a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.HubsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.HubsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.HubListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.HubListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.HubListResult>, callback?: msRest.ServiceCallback<Models.HubListResult>): Promise<Models.HubsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.HubsListByResourceGroupNextResponse>;
  }

  /**
   * Gets all hubs in the specified subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.HubsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.HubsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.HubListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.HubListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.HubListResult>, callback?: msRest.ServiceCallback<Models.HubListResult>): Promise<Models.HubsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.HubsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName0,
    Parameters.subscriptionId
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
      ...Mappers.Hub,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Hub
    },
    201: {
      bodyMapper: Mappers.Hub
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.subscriptionId
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
      ...Mappers.Hub,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Hub
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Hub
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.HubListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.CustomerInsights/hubs",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.HubListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
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

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.HubListResult
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
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.HubListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
