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
import * as Mappers from "../models/expressRouteCircuitsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a ExpressRouteCircuits. */
export class ExpressRouteCircuits {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a ExpressRouteCircuits.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Deletes the specified express route circuit.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, circuitName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,circuitName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets information about the specified express route circuit.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of express route circuit.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCircuitsGetResponse>
   */
  get(resourceGroupName: string, circuitName: string, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of express route circuit.
   * @param callback The callback
   */
  get(resourceGroupName: string, circuitName: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuit>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of express route circuit.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, circuitName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuit>): void;
  get(resourceGroupName: string, circuitName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExpressRouteCircuit>, callback?: msRest.ServiceCallback<Models.ExpressRouteCircuit>): Promise<Models.ExpressRouteCircuitsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        circuitName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ExpressRouteCircuitsGetResponse>;
  }

  /**
   * Creates or updates an express route circuit.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the circuit.
   * @param parameters Parameters supplied to the create or update express route circuit operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCircuitsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, circuitName: string, parameters: Models.ExpressRouteCircuit, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,circuitName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ExpressRouteCircuitsCreateOrUpdateResponse>;
  }

  /**
   * Updates an express route circuit tags.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the circuit.
   * @param parameters Parameters supplied to update express route circuit tags.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCircuitsUpdateTagsResponse>
   */
  updateTags(resourceGroupName: string, circuitName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitsUpdateTagsResponse> {
    return this.beginUpdateTags(resourceGroupName,circuitName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ExpressRouteCircuitsUpdateTagsResponse>;
  }

  /**
   * Gets the currently advertised ARP table associated with the express route circuit in a resource
   * group.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param devicePath The path of the device.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCircuitsListArpTableResponse>
   */
  listArpTable(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitsListArpTableResponse> {
    return this.beginListArpTable(resourceGroupName,circuitName,peeringName,devicePath,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ExpressRouteCircuitsListArpTableResponse>;
  }

  /**
   * Gets the currently advertised routes table associated with the express route circuit in a
   * resource group.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param devicePath The path of the device.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCircuitsListRoutesTableResponse>
   */
  listRoutesTable(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitsListRoutesTableResponse> {
    return this.beginListRoutesTable(resourceGroupName,circuitName,peeringName,devicePath,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ExpressRouteCircuitsListRoutesTableResponse>;
  }

  /**
   * Gets the currently advertised routes table summary associated with the express route circuit in
   * a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param devicePath The path of the device.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCircuitsListRoutesTableSummaryResponse>
   */
  listRoutesTableSummary(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitsListRoutesTableSummaryResponse> {
    return this.beginListRoutesTableSummary(resourceGroupName,circuitName,peeringName,devicePath,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ExpressRouteCircuitsListRoutesTableSummaryResponse>;
  }

  /**
   * Gets all the stats from an express route circuit in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCircuitsGetStatsResponse>
   */
  getStats(resourceGroupName: string, circuitName: string, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitsGetStatsResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param callback The callback
   */
  getStats(resourceGroupName: string, circuitName: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitStats>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param options The optional parameters
   * @param callback The callback
   */
  getStats(resourceGroupName: string, circuitName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitStats>): void;
  getStats(resourceGroupName: string, circuitName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExpressRouteCircuitStats>, callback?: msRest.ServiceCallback<Models.ExpressRouteCircuitStats>): Promise<Models.ExpressRouteCircuitsGetStatsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        circuitName,
        options
      },
      getStatsOperationSpec,
      callback) as Promise<Models.ExpressRouteCircuitsGetStatsResponse>;
  }

  /**
   * Gets all stats from an express route circuit in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCircuitsGetPeeringStatsResponse>
   */
  getPeeringStats(resourceGroupName: string, circuitName: string, peeringName: string, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitsGetPeeringStatsResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param callback The callback
   */
  getPeeringStats(resourceGroupName: string, circuitName: string, peeringName: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitStats>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param options The optional parameters
   * @param callback The callback
   */
  getPeeringStats(resourceGroupName: string, circuitName: string, peeringName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitStats>): void;
  getPeeringStats(resourceGroupName: string, circuitName: string, peeringName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExpressRouteCircuitStats>, callback?: msRest.ServiceCallback<Models.ExpressRouteCircuitStats>): Promise<Models.ExpressRouteCircuitsGetPeeringStatsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        circuitName,
        peeringName,
        options
      },
      getPeeringStatsOperationSpec,
      callback) as Promise<Models.ExpressRouteCircuitsGetPeeringStatsResponse>;
  }

  /**
   * Gets all the express route circuits in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCircuitsListResponse>
   */
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitListResult>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExpressRouteCircuitListResult>, callback?: msRest.ServiceCallback<Models.ExpressRouteCircuitListResult>): Promise<Models.ExpressRouteCircuitsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ExpressRouteCircuitsListResponse>;
  }

  /**
   * Gets all the express route circuits in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCircuitsListAllResponse>
   */
  listAll(options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitsListAllResponse>;
  /**
   * @param callback The callback
   */
  listAll(callback: msRest.ServiceCallback<Models.ExpressRouteCircuitListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitListResult>): void;
  listAll(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExpressRouteCircuitListResult>, callback?: msRest.ServiceCallback<Models.ExpressRouteCircuitListResult>): Promise<Models.ExpressRouteCircuitsListAllResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listAllOperationSpec,
      callback) as Promise<Models.ExpressRouteCircuitsListAllResponse>;
  }

  /**
   * Deletes the specified express route circuit.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, circuitName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        circuitName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates an express route circuit.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the circuit.
   * @param parameters Parameters supplied to the create or update express route circuit operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, circuitName: string, parameters: Models.ExpressRouteCircuit, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        circuitName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Updates an express route circuit tags.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the circuit.
   * @param parameters Parameters supplied to update express route circuit tags.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdateTags(resourceGroupName: string, circuitName: string, parameters: Models.TagsObject, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        circuitName,
        parameters,
        options
      },
      beginUpdateTagsOperationSpec,
      options);
  }

  /**
   * Gets the currently advertised ARP table associated with the express route circuit in a resource
   * group.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param devicePath The path of the device.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginListArpTable(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        circuitName,
        peeringName,
        devicePath,
        options
      },
      beginListArpTableOperationSpec,
      options);
  }

  /**
   * Gets the currently advertised routes table associated with the express route circuit in a
   * resource group.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param devicePath The path of the device.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginListRoutesTable(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        circuitName,
        peeringName,
        devicePath,
        options
      },
      beginListRoutesTableOperationSpec,
      options);
  }

  /**
   * Gets the currently advertised routes table summary associated with the express route circuit in
   * a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param devicePath The path of the device.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginListRoutesTableSummary(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        circuitName,
        peeringName,
        devicePath,
        options
      },
      beginListRoutesTableSummaryOperationSpec,
      options);
  }

  /**
   * Gets all the express route circuits in a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCircuitsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExpressRouteCircuitListResult>, callback?: msRest.ServiceCallback<Models.ExpressRouteCircuitListResult>): Promise<Models.ExpressRouteCircuitsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ExpressRouteCircuitsListNextResponse>;
  }

  /**
   * Gets all the express route circuits in a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExpressRouteCircuitsListAllNextResponse>
   */
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ExpressRouteCircuitsListAllNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExpressRouteCircuitListResult>): void;
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExpressRouteCircuitListResult>, callback?: msRest.ServiceCallback<Models.ExpressRouteCircuitListResult>): Promise<Models.ExpressRouteCircuitsListAllNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAllNextOperationSpec,
      callback) as Promise<Models.ExpressRouteCircuitsListAllNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.circuitName,
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
      bodyMapper: Mappers.ExpressRouteCircuit
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getStatsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/stats",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.circuitName,
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
      bodyMapper: Mappers.ExpressRouteCircuitStats
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getPeeringStatsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}/stats",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.circuitName,
    Parameters.peeringName,
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
      bodyMapper: Mappers.ExpressRouteCircuitStats
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits",
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
      bodyMapper: Mappers.ExpressRouteCircuitListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/expressRouteCircuits",
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
      bodyMapper: Mappers.ExpressRouteCircuitListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.circuitName,
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

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.circuitName,
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
      ...Mappers.ExpressRouteCircuit,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRouteCircuit
    },
    201: {
      bodyMapper: Mappers.ExpressRouteCircuit
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateTagsOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.circuitName,
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
      bodyMapper: Mappers.ExpressRouteCircuit
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginListArpTableOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}/arpTables/{devicePath}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.circuitName,
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

const beginListRoutesTableOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}/routeTables/{devicePath}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.circuitName,
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

const beginListRoutesTableSummaryOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCircuits/{circuitName}/peerings/{peeringName}/routeTablesSummary/{devicePath}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.circuitName,
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
      bodyMapper: Mappers.ExpressRouteCircuitsRoutesTableSummaryListResult
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
      bodyMapper: Mappers.ExpressRouteCircuitListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ExpressRouteCircuitListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
