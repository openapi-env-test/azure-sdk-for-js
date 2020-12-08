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
import * as Mappers from "../models/instanceFailoverGroupsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a InstanceFailoverGroups. */
export class InstanceFailoverGroups {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a InstanceFailoverGroups.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a failover group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param failoverGroupName The name of the failover group.
   * @param [options] The optional parameters
   * @returns Promise<Models.InstanceFailoverGroupsGetResponse>
   */
  get(resourceGroupName: string, locationName: string, failoverGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.InstanceFailoverGroupsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param failoverGroupName The name of the failover group.
   * @param callback The callback
   */
  get(resourceGroupName: string, locationName: string, failoverGroupName: string, callback: msRest.ServiceCallback<Models.InstanceFailoverGroup>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param failoverGroupName The name of the failover group.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, locationName: string, failoverGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InstanceFailoverGroup>): void;
  get(resourceGroupName: string, locationName: string, failoverGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.InstanceFailoverGroup>, callback?: msRest.ServiceCallback<Models.InstanceFailoverGroup>): Promise<Models.InstanceFailoverGroupsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        locationName,
        failoverGroupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.InstanceFailoverGroupsGetResponse>;
  }

  /**
   * Creates or updates a failover group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param failoverGroupName The name of the failover group.
   * @param parameters The failover group parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.InstanceFailoverGroupsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, locationName: string, failoverGroupName: string, parameters: Models.InstanceFailoverGroup, options?: msRest.RequestOptionsBase): Promise<Models.InstanceFailoverGroupsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,locationName,failoverGroupName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.InstanceFailoverGroupsCreateOrUpdateResponse>;
  }

  /**
   * Deletes a failover group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param failoverGroupName The name of the failover group.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, locationName: string, failoverGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,locationName,failoverGroupName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Lists the failover groups in a location.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param [options] The optional parameters
   * @returns Promise<Models.InstanceFailoverGroupsListByLocationResponse>
   */
  listByLocation(resourceGroupName: string, locationName: string, options?: msRest.RequestOptionsBase): Promise<Models.InstanceFailoverGroupsListByLocationResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param callback The callback
   */
  listByLocation(resourceGroupName: string, locationName: string, callback: msRest.ServiceCallback<Models.InstanceFailoverGroupListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByLocation(resourceGroupName: string, locationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InstanceFailoverGroupListResult>): void;
  listByLocation(resourceGroupName: string, locationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.InstanceFailoverGroupListResult>, callback?: msRest.ServiceCallback<Models.InstanceFailoverGroupListResult>): Promise<Models.InstanceFailoverGroupsListByLocationResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        locationName,
        options
      },
      listByLocationOperationSpec,
      callback) as Promise<Models.InstanceFailoverGroupsListByLocationResponse>;
  }

  /**
   * Fails over from the current primary managed instance to this managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param failoverGroupName The name of the failover group.
   * @param [options] The optional parameters
   * @returns Promise<Models.InstanceFailoverGroupsFailoverResponse>
   */
  failover(resourceGroupName: string, locationName: string, failoverGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.InstanceFailoverGroupsFailoverResponse> {
    return this.beginFailover(resourceGroupName,locationName,failoverGroupName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.InstanceFailoverGroupsFailoverResponse>;
  }

  /**
   * Fails over from the current primary managed instance to this managed instance. This operation
   * might result in data loss.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param failoverGroupName The name of the failover group.
   * @param [options] The optional parameters
   * @returns Promise<Models.InstanceFailoverGroupsForceFailoverAllowDataLossResponse>
   */
  forceFailoverAllowDataLoss(resourceGroupName: string, locationName: string, failoverGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.InstanceFailoverGroupsForceFailoverAllowDataLossResponse> {
    return this.beginForceFailoverAllowDataLoss(resourceGroupName,locationName,failoverGroupName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.InstanceFailoverGroupsForceFailoverAllowDataLossResponse>;
  }

  /**
   * Creates or updates a failover group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param failoverGroupName The name of the failover group.
   * @param parameters The failover group parameters.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, locationName: string, failoverGroupName: string, parameters: Models.InstanceFailoverGroup, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        locationName,
        failoverGroupName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes a failover group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param failoverGroupName The name of the failover group.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, locationName: string, failoverGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        locationName,
        failoverGroupName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Fails over from the current primary managed instance to this managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param failoverGroupName The name of the failover group.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginFailover(resourceGroupName: string, locationName: string, failoverGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        locationName,
        failoverGroupName,
        options
      },
      beginFailoverOperationSpec,
      options);
  }

  /**
   * Fails over from the current primary managed instance to this managed instance. This operation
   * might result in data loss.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param locationName The name of the region where the resource is located.
   * @param failoverGroupName The name of the failover group.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginForceFailoverAllowDataLoss(resourceGroupName: string, locationName: string, failoverGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        locationName,
        failoverGroupName,
        options
      },
      beginForceFailoverAllowDataLossOperationSpec,
      options);
  }

  /**
   * Lists the failover groups in a location.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.InstanceFailoverGroupsListByLocationNextResponse>
   */
  listByLocationNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.InstanceFailoverGroupsListByLocationNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByLocationNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.InstanceFailoverGroupListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByLocationNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InstanceFailoverGroupListResult>): void;
  listByLocationNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.InstanceFailoverGroupListResult>, callback?: msRest.ServiceCallback<Models.InstanceFailoverGroupListResult>): Promise<Models.InstanceFailoverGroupsListByLocationNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByLocationNextOperationSpec,
      callback) as Promise<Models.InstanceFailoverGroupsListByLocationNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/instanceFailoverGroups/{failoverGroupName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.locationName,
    Parameters.failoverGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InstanceFailoverGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByLocationOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/instanceFailoverGroups",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.locationName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InstanceFailoverGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/instanceFailoverGroups/{failoverGroupName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.locationName,
    Parameters.failoverGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.InstanceFailoverGroup,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.InstanceFailoverGroup
    },
    201: {
      bodyMapper: Mappers.InstanceFailoverGroup
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/instanceFailoverGroups/{failoverGroupName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.locationName,
    Parameters.failoverGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
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

const beginFailoverOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/instanceFailoverGroups/{failoverGroupName}/failover",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.locationName,
    Parameters.failoverGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InstanceFailoverGroup
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginForceFailoverAllowDataLossOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/instanceFailoverGroups/{failoverGroupName}/forceFailoverAllowDataLoss",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.locationName,
    Parameters.failoverGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InstanceFailoverGroup
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByLocationNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InstanceFailoverGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
