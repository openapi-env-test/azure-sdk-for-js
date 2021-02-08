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
import * as Mappers from "../models/expressRouteCrossConnectionsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a ExpressRouteCrossConnections. */
export class ExpressRouteCrossConnections {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a ExpressRouteCrossConnections.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves all the ExpressRouteCrossConnections in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCrossConnectionsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCrossConnectionsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExpressRouteCrossConnectionListResult>, callback?: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionListResult>): Promise<Models.ExpressRouteCrossConnectionsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ExpressRouteCrossConnectionsListResponse>;
  }

  /**
   * Retrieves all the ExpressRouteCrossConnections in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCrossConnectionsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCrossConnectionsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExpressRouteCrossConnectionListResult>, callback?: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionListResult>): Promise<Models.ExpressRouteCrossConnectionsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.ExpressRouteCrossConnectionsListByResourceGroupResponse>;
  }

  /**
   * Gets details about the specified ExpressRouteCrossConnection.
   * @param resourceGroupName The name of the resource group (peering location of the circuit).
   * @param crossConnectionName The name of the ExpressRouteCrossConnection (service key of the
   * circuit).
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCrossConnectionsGetResponse>
   */
  get(resourceGroupName: string, crossConnectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCrossConnectionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group (peering location of the circuit).
   * @param crossConnectionName The name of the ExpressRouteCrossConnection (service key of the
   * circuit).
   * @param callback The callback
   */
  get(resourceGroupName: string, crossConnectionName: string, callback: msRest.ServiceCallback<Models.ExpressRouteCrossConnection>): void;
  /**
   * @param resourceGroupName The name of the resource group (peering location of the circuit).
   * @param crossConnectionName The name of the ExpressRouteCrossConnection (service key of the
   * circuit).
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, crossConnectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCrossConnection>): void;
  get(resourceGroupName: string, crossConnectionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExpressRouteCrossConnection>, callback?: msRest.ServiceCallback<Models.ExpressRouteCrossConnection>): Promise<Models.ExpressRouteCrossConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        crossConnectionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ExpressRouteCrossConnectionsGetResponse>;
  }

  /**
   * Update the specified ExpressRouteCrossConnection.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param parameters Parameters supplied to the update express route crossConnection operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCrossConnectionsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, crossConnectionName: string, parameters: Models.ExpressRouteCrossConnection, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCrossConnectionsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,crossConnectionName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ExpressRouteCrossConnectionsCreateOrUpdateResponse>;
  }

  /**
   * Updates an express route cross connection tags.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the cross connection.
   * @param crossConnectionParameters Parameters supplied to update express route cross connection
   * tags.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCrossConnectionsUpdateTagsResponse>
   */
  updateTags(resourceGroupName: string, crossConnectionName: string, crossConnectionParameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCrossConnectionsUpdateTagsResponse> {
    return this.beginUpdateTags(resourceGroupName,crossConnectionName,crossConnectionParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ExpressRouteCrossConnectionsUpdateTagsResponse>;
  }

  /**
   * Gets the currently advertised ARP table associated with the express route cross connection in a
   * resource group.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param peeringName The name of the peering.
   * @param devicePath The path of the device
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCrossConnectionsListArpTableResponse>
   */
  listArpTable(resourceGroupName: string, crossConnectionName: string, peeringName: string, devicePath: string, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCrossConnectionsListArpTableResponse> {
    return this.beginListArpTable(resourceGroupName,crossConnectionName,peeringName,devicePath,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ExpressRouteCrossConnectionsListArpTableResponse>;
  }

  /**
   * Gets the route table summary associated with the express route cross connection in a resource
   * group.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param peeringName The name of the peering.
   * @param devicePath The path of the device.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCrossConnectionsListRoutesTableSummaryResponse>
   */
  listRoutesTableSummary(resourceGroupName: string, crossConnectionName: string, peeringName: string, devicePath: string, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCrossConnectionsListRoutesTableSummaryResponse> {
    return this.beginListRoutesTableSummary(resourceGroupName,crossConnectionName,peeringName,devicePath,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ExpressRouteCrossConnectionsListRoutesTableSummaryResponse>;
  }

  /**
   * Gets the currently advertised routes table associated with the express route cross connection in
   * a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param peeringName The name of the peering.
   * @param devicePath The path of the device.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCrossConnectionsListRoutesTableResponse>
   */
  listRoutesTable(resourceGroupName: string, crossConnectionName: string, peeringName: string, devicePath: string, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCrossConnectionsListRoutesTableResponse> {
    return this.beginListRoutesTable(resourceGroupName,crossConnectionName,peeringName,devicePath,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ExpressRouteCrossConnectionsListRoutesTableResponse>;
  }

  /**
   * Update the specified ExpressRouteCrossConnection.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param parameters Parameters supplied to the update express route crossConnection operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, crossConnectionName: string, parameters: Models.ExpressRouteCrossConnection, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        crossConnectionName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Updates an express route cross connection tags.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the cross connection.
   * @param crossConnectionParameters Parameters supplied to update express route cross connection
   * tags.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdateTags(resourceGroupName: string, crossConnectionName: string, crossConnectionParameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        crossConnectionName,
        crossConnectionParameters,
        options
      },
      beginUpdateTagsOperationSpec,
      options);
  }

  /**
   * Gets the currently advertised ARP table associated with the express route cross connection in a
   * resource group.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param peeringName The name of the peering.
   * @param devicePath The path of the device
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginListArpTable(resourceGroupName: string, crossConnectionName: string, peeringName: string, devicePath: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        crossConnectionName,
        peeringName,
        devicePath,
        options
      },
      beginListArpTableOperationSpec,
      options);
  }

  /**
   * Gets the route table summary associated with the express route cross connection in a resource
   * group.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param peeringName The name of the peering.
   * @param devicePath The path of the device.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginListRoutesTableSummary(resourceGroupName: string, crossConnectionName: string, peeringName: string, devicePath: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        crossConnectionName,
        peeringName,
        devicePath,
        options
      },
      beginListRoutesTableSummaryOperationSpec,
      options);
  }

  /**
   * Gets the currently advertised routes table associated with the express route cross connection in
   * a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param crossConnectionName The name of the ExpressRouteCrossConnection.
   * @param peeringName The name of the peering.
   * @param devicePath The path of the device.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginListRoutesTable(resourceGroupName: string, crossConnectionName: string, peeringName: string, devicePath: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        crossConnectionName,
        peeringName,
        devicePath,
        options
      },
      beginListRoutesTableOperationSpec,
      options);
  }

  /**
   * Retrieves all the ExpressRouteCrossConnections in a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCrossConnectionsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCrossConnectionsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExpressRouteCrossConnectionListResult>, callback?: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionListResult>): Promise<Models.ExpressRouteCrossConnectionsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ExpressRouteCrossConnectionsListNextResponse>;
  }

  /**
   * Retrieves all the ExpressRouteCrossConnections in a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCrossConnectionsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCrossConnectionsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExpressRouteCrossConnectionListResult>, callback?: msRest.ServiceCallback<Models.ExpressRouteCrossConnectionListResult>): Promise<Models.ExpressRouteCrossConnectionsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.ExpressRouteCrossConnectionsListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/expressRouteCrossConnections",
  urlParameters: [
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
      bodyMapper: Mappers.ExpressRouteCrossConnectionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections",
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
      bodyMapper: Mappers.ExpressRouteCrossConnectionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.crossConnectionName,
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
      bodyMapper: Mappers.ExpressRouteCrossConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.crossConnectionName,
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
      ...Mappers.ExpressRouteCrossConnection,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCrossConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateTagsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.crossConnectionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "crossConnectionParameters",
    mapper: {
      ...Mappers.TagsObject,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCrossConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginListArpTableOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings/{peeringName}/arpTables/{devicePath}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.crossConnectionName,
    Parameters.peeringName,
    Parameters.devicePath,
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
      bodyMapper: Mappers.ExpressRouteCircuitsArpTableListResult
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginListRoutesTableSummaryOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings/{peeringName}/routeTablesSummary/{devicePath}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.crossConnectionName,
    Parameters.peeringName,
    Parameters.devicePath,
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
      bodyMapper: Mappers.ExpressRouteCrossConnectionsRoutesTableSummaryListResult
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginListRoutesTableOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings/{peeringName}/routeTables/{devicePath}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.crossConnectionName,
    Parameters.peeringName,
    Parameters.devicePath,
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
      bodyMapper: Mappers.ExpressRouteCircuitsRoutesTableListResult
    },
    202: {},
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
      bodyMapper: Mappers.ExpressRouteCrossConnectionListResult
    },
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
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCrossConnectionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
