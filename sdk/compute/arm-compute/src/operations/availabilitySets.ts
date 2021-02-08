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
import * as Mappers from "../models/availabilitySetsMappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

/** Class representing a AvailabilitySets. */
export class AvailabilitySets {
  private readonly client: ComputeManagementClientContext;

  /**
   * Create a AvailabilitySets.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Create or update an availability set.
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param parameters Parameters supplied to the Create Availability Set operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AvailabilitySetsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, availabilitySetName: string, parameters: Models.AvailabilitySet, options?: msRest.RequestOptionsBase): Promise<Models.AvailabilitySetsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param parameters Parameters supplied to the Create Availability Set operation.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, availabilitySetName: string, parameters: Models.AvailabilitySet, callback: msRest.ServiceCallback<Models.AvailabilitySet>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param parameters Parameters supplied to the Create Availability Set operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, availabilitySetName: string, parameters: Models.AvailabilitySet, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AvailabilitySet>): void;
  createOrUpdate(resourceGroupName: string, availabilitySetName: string, parameters: Models.AvailabilitySet, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AvailabilitySet>, callback?: msRest.ServiceCallback<Models.AvailabilitySet>): Promise<Models.AvailabilitySetsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        availabilitySetName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.AvailabilitySetsCreateOrUpdateResponse>;
  }

  /**
   * Update an availability set.
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param parameters Parameters supplied to the Update Availability Set operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AvailabilitySetsUpdateResponse>
   */
  update(resourceGroupName: string, availabilitySetName: string, parameters: Models.AvailabilitySetUpdate, options?: msRest.RequestOptionsBase): Promise<Models.AvailabilitySetsUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param parameters Parameters supplied to the Update Availability Set operation.
   * @param callback The callback
   */
  update(resourceGroupName: string, availabilitySetName: string, parameters: Models.AvailabilitySetUpdate, callback: msRest.ServiceCallback<Models.AvailabilitySet>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param parameters Parameters supplied to the Update Availability Set operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, availabilitySetName: string, parameters: Models.AvailabilitySetUpdate, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AvailabilitySet>): void;
  update(resourceGroupName: string, availabilitySetName: string, parameters: Models.AvailabilitySetUpdate, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AvailabilitySet>, callback?: msRest.ServiceCallback<Models.AvailabilitySet>): Promise<Models.AvailabilitySetsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        availabilitySetName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.AvailabilitySetsUpdateResponse>;
  }

  /**
   * Delete an availability set.
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, availabilitySetName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, availabilitySetName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, availabilitySetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, availabilitySetName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        availabilitySetName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Retrieves information about an availability set.
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param [options] The optional parameters
   * @returns Promise<Models.AvailabilitySetsGetResponse>
   */
  get(resourceGroupName: string, availabilitySetName: string, options?: msRest.RequestOptionsBase): Promise<Models.AvailabilitySetsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param callback The callback
   */
  get(resourceGroupName: string, availabilitySetName: string, callback: msRest.ServiceCallback<Models.AvailabilitySet>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, availabilitySetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AvailabilitySet>): void;
  get(resourceGroupName: string, availabilitySetName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AvailabilitySet>, callback?: msRest.ServiceCallback<Models.AvailabilitySet>): Promise<Models.AvailabilitySetsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        availabilitySetName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AvailabilitySetsGetResponse>;
  }

  /**
   * Lists all availability sets in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.AvailabilitySetsListBySubscriptionResponse>
   */
  listBySubscription(options?: Models.AvailabilitySetsListBySubscriptionOptionalParams): Promise<Models.AvailabilitySetsListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.AvailabilitySetListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: Models.AvailabilitySetsListBySubscriptionOptionalParams, callback: msRest.ServiceCallback<Models.AvailabilitySetListResult>): void;
  listBySubscription(options?: Models.AvailabilitySetsListBySubscriptionOptionalParams | msRest.ServiceCallback<Models.AvailabilitySetListResult>, callback?: msRest.ServiceCallback<Models.AvailabilitySetListResult>): Promise<Models.AvailabilitySetsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.AvailabilitySetsListBySubscriptionResponse>;
  }

  /**
   * Lists all availability sets in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.AvailabilitySetsListResponse>
   */
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AvailabilitySetsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.AvailabilitySetListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AvailabilitySetListResult>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AvailabilitySetListResult>, callback?: msRest.ServiceCallback<Models.AvailabilitySetListResult>): Promise<Models.AvailabilitySetsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AvailabilitySetsListResponse>;
  }

  /**
   * Lists all available virtual machine sizes that can be used to create a new virtual machine in an
   * existing availability set.
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param [options] The optional parameters
   * @returns Promise<Models.AvailabilitySetsListAvailableSizesResponse>
   */
  listAvailableSizes(resourceGroupName: string, availabilitySetName: string, options?: msRest.RequestOptionsBase): Promise<Models.AvailabilitySetsListAvailableSizesResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param callback The callback
   */
  listAvailableSizes(resourceGroupName: string, availabilitySetName: string, callback: msRest.ServiceCallback<Models.VirtualMachineSizeListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param availabilitySetName The name of the availability set.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAvailableSizes(resourceGroupName: string, availabilitySetName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualMachineSizeListResult>): void;
  listAvailableSizes(resourceGroupName: string, availabilitySetName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualMachineSizeListResult>, callback?: msRest.ServiceCallback<Models.VirtualMachineSizeListResult>): Promise<Models.AvailabilitySetsListAvailableSizesResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        availabilitySetName,
        options
      },
      listAvailableSizesOperationSpec,
      callback) as Promise<Models.AvailabilitySetsListAvailableSizesResponse>;
  }

  /**
   * Lists all availability sets in a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AvailabilitySetsListBySubscriptionNextResponse>
   */
  listBySubscriptionNext(nextPageLink: string, options?: Models.AvailabilitySetsListBySubscriptionNextOptionalParams): Promise<Models.AvailabilitySetsListBySubscriptionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AvailabilitySetListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, options: Models.AvailabilitySetsListBySubscriptionNextOptionalParams, callback: msRest.ServiceCallback<Models.AvailabilitySetListResult>): void;
  listBySubscriptionNext(nextPageLink: string, options?: Models.AvailabilitySetsListBySubscriptionNextOptionalParams | msRest.ServiceCallback<Models.AvailabilitySetListResult>, callback?: msRest.ServiceCallback<Models.AvailabilitySetListResult>): Promise<Models.AvailabilitySetsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySubscriptionNextOperationSpec,
      callback) as Promise<Models.AvailabilitySetsListBySubscriptionNextResponse>;
  }

  /**
   * Lists all availability sets in a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AvailabilitySetsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AvailabilitySetsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AvailabilitySetListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AvailabilitySetListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AvailabilitySetListResult>, callback?: msRest.ServiceCallback<Models.AvailabilitySetListResult>): Promise<Models.AvailabilitySetsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.AvailabilitySetsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.availabilitySetName,
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
      ...Mappers.AvailabilitySet,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilitySet
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.availabilitySetName,
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
      ...Mappers.AvailabilitySetUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilitySet
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.availabilitySetName,
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
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.availabilitySetName,
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
      bodyMapper: Mappers.AvailabilitySet
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Compute/availabilitySets",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilitySetListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets",
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
      bodyMapper: Mappers.AvailabilitySetListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAvailableSizesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}/vmSizes",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.availabilitySetName,
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
      bodyMapper: Mappers.VirtualMachineSizeListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySubscriptionNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AvailabilitySetListResult
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
      bodyMapper: Mappers.AvailabilitySetListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
