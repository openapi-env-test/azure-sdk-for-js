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
import * as Mappers from "../models/environmentsMappers";
import * as Parameters from "../models/parameters";
import { TimeSeriesInsightsClientContext } from "../timeSeriesInsightsClientContext";

/** Class representing a Environments. */
export class Environments {
  private readonly client: TimeSeriesInsightsClientContext;

  /**
   * Create a Environments.
   * @param {TimeSeriesInsightsClientContext} client Reference to the service client.
   */
  constructor(client: TimeSeriesInsightsClientContext) {
    this.client = client;
  }

  /**
   * Create or update an environment in the specified subscription and resource group.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName Name of the environment
   * @param parameters Parameters for creating an environment resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnvironmentsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, environmentName: string, parameters: Models.EnvironmentCreateOrUpdateParametersUnion, options?: msRest.RequestOptionsBase): Promise<Models.EnvironmentsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,environmentName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.EnvironmentsCreateOrUpdateResponse>;
  }

  /**
   * Gets the environment with the specified name in the specified subscription and resource group.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   * specified resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnvironmentsGetResponse>
   */
  get(resourceGroupName: string, environmentName: string, options?: Models.EnvironmentsGetOptionalParams): Promise<Models.EnvironmentsGetResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   * specified resource group.
   * @param callback The callback
   */
  get(resourceGroupName: string, environmentName: string, callback: msRest.ServiceCallback<Models.EnvironmentResourceUnion>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   * specified resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, environmentName: string, options: Models.EnvironmentsGetOptionalParams, callback: msRest.ServiceCallback<Models.EnvironmentResourceUnion>): void;
  get(resourceGroupName: string, environmentName: string, options?: Models.EnvironmentsGetOptionalParams | msRest.ServiceCallback<Models.EnvironmentResourceUnion>, callback?: msRest.ServiceCallback<Models.EnvironmentResourceUnion>): Promise<Models.EnvironmentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        environmentName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.EnvironmentsGetResponse>;
  }

  /**
   * Updates the environment with the specified name in the specified subscription and resource
   * group.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   * specified resource group.
   * @param environmentUpdateParameters Request object that contains the updated information for the
   * environment.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnvironmentsUpdateResponse>
   */
  update(resourceGroupName: string, environmentName: string, environmentUpdateParameters: Models.EnvironmentUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.EnvironmentsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,environmentName,environmentUpdateParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.EnvironmentsUpdateResponse>;
  }

  /**
   * Deletes the environment with the specified name in the specified subscription and resource
   * group.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   * specified resource group.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, environmentName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   * specified resource group.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, environmentName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   * specified resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, environmentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, environmentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        environmentName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Lists all the available environments associated with the subscription and within the specified
   * resource group.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnvironmentsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.EnvironmentsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.EnvironmentListResponse>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EnvironmentListResponse>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EnvironmentListResponse>, callback?: msRest.ServiceCallback<Models.EnvironmentListResponse>): Promise<Models.EnvironmentsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.EnvironmentsListByResourceGroupResponse>;
  }

  /**
   * Lists all the available environments within a subscription, irrespective of the resource groups.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnvironmentsListBySubscriptionResponse>
   */
  listBySubscription(options?: msRest.RequestOptionsBase): Promise<Models.EnvironmentsListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.EnvironmentListResponse>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EnvironmentListResponse>): void;
  listBySubscription(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EnvironmentListResponse>, callback?: msRest.ServiceCallback<Models.EnvironmentListResponse>): Promise<Models.EnvironmentsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.EnvironmentsListBySubscriptionResponse>;
  }

  /**
   * Create or update an environment in the specified subscription and resource group.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName Name of the environment
   * @param parameters Parameters for creating an environment resource.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, environmentName: string, parameters: Models.EnvironmentCreateOrUpdateParametersUnion, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        environmentName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Updates the environment with the specified name in the specified subscription and resource
   * group.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   * specified resource group.
   * @param environmentUpdateParameters Request object that contains the updated information for the
   * environment.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, environmentName: string, environmentUpdateParameters: Models.EnvironmentUpdateParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        environmentName,
        environmentUpdateParameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName1
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.EnvironmentResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName1
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

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.EnvironmentListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.TimeSeriesInsights/environments",
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
      bodyMapper: Mappers.EnvironmentListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName0
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
      ...Mappers.EnvironmentCreateOrUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.EnvironmentResource
    },
    201: {
      bodyMapper: Mappers.EnvironmentResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName1
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "environmentUpdateParameters",
    mapper: {
      ...Mappers.EnvironmentUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.EnvironmentResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
