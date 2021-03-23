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
import * as Mappers from "../models/authorizationPoliciesMappers";
import * as Parameters from "../models/parameters";
import { CustomerInsightsManagementClientContext } from "../customerInsightsManagementClientContext";

/** Class representing a AuthorizationPolicies. */
export class AuthorizationPolicies {
  private readonly client: CustomerInsightsManagementClientContext;

  /**
   * Create a AuthorizationPolicies.
   * @param {CustomerInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: CustomerInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates an authorization policy or updates an existing authorization policy.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param authorizationPolicyName The name of the policy.
   * @param parameters Parameters supplied to the CreateOrUpdate authorization policy operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AuthorizationPoliciesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, hubName: string, authorizationPolicyName: string, parameters: Models.AuthorizationPolicyResourceFormat, options?: msRest.RequestOptionsBase): Promise<Models.AuthorizationPoliciesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param authorizationPolicyName The name of the policy.
   * @param parameters Parameters supplied to the CreateOrUpdate authorization policy operation.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, hubName: string, authorizationPolicyName: string, parameters: Models.AuthorizationPolicyResourceFormat, callback: msRest.ServiceCallback<Models.AuthorizationPolicyResourceFormat>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param authorizationPolicyName The name of the policy.
   * @param parameters Parameters supplied to the CreateOrUpdate authorization policy operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, hubName: string, authorizationPolicyName: string, parameters: Models.AuthorizationPolicyResourceFormat, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AuthorizationPolicyResourceFormat>): void;
  createOrUpdate(resourceGroupName: string, hubName: string, authorizationPolicyName: string, parameters: Models.AuthorizationPolicyResourceFormat, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AuthorizationPolicyResourceFormat>, callback?: msRest.ServiceCallback<Models.AuthorizationPolicyResourceFormat>): Promise<Models.AuthorizationPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hubName,
        authorizationPolicyName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.AuthorizationPoliciesCreateOrUpdateResponse>;
  }

  /**
   * Gets an authorization policy in the hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param authorizationPolicyName The name of the policy.
   * @param [options] The optional parameters
   * @returns Promise<Models.AuthorizationPoliciesGetResponse>
   */
  get(resourceGroupName: string, hubName: string, authorizationPolicyName: string, options?: msRest.RequestOptionsBase): Promise<Models.AuthorizationPoliciesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param authorizationPolicyName The name of the policy.
   * @param callback The callback
   */
  get(resourceGroupName: string, hubName: string, authorizationPolicyName: string, callback: msRest.ServiceCallback<Models.AuthorizationPolicyResourceFormat>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param authorizationPolicyName The name of the policy.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, hubName: string, authorizationPolicyName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AuthorizationPolicyResourceFormat>): void;
  get(resourceGroupName: string, hubName: string, authorizationPolicyName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AuthorizationPolicyResourceFormat>, callback?: msRest.ServiceCallback<Models.AuthorizationPolicyResourceFormat>): Promise<Models.AuthorizationPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hubName,
        authorizationPolicyName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AuthorizationPoliciesGetResponse>;
  }

  /**
   * Gets all the authorization policies in a specified hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param [options] The optional parameters
   * @returns Promise<Models.AuthorizationPoliciesListByHubResponse>
   */
  listByHub(resourceGroupName: string, hubName: string, options?: msRest.RequestOptionsBase): Promise<Models.AuthorizationPoliciesListByHubResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param callback The callback
   */
  listByHub(resourceGroupName: string, hubName: string, callback: msRest.ServiceCallback<Models.AuthorizationPolicyListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByHub(resourceGroupName: string, hubName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AuthorizationPolicyListResult>): void;
  listByHub(resourceGroupName: string, hubName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AuthorizationPolicyListResult>, callback?: msRest.ServiceCallback<Models.AuthorizationPolicyListResult>): Promise<Models.AuthorizationPoliciesListByHubResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hubName,
        options
      },
      listByHubOperationSpec,
      callback) as Promise<Models.AuthorizationPoliciesListByHubResponse>;
  }

  /**
   * Regenerates the primary policy key of the specified authorization policy.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param authorizationPolicyName The name of the policy.
   * @param [options] The optional parameters
   * @returns Promise<Models.AuthorizationPoliciesRegeneratePrimaryKeyResponse>
   */
  regeneratePrimaryKey(resourceGroupName: string, hubName: string, authorizationPolicyName: string, options?: msRest.RequestOptionsBase): Promise<Models.AuthorizationPoliciesRegeneratePrimaryKeyResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param authorizationPolicyName The name of the policy.
   * @param callback The callback
   */
  regeneratePrimaryKey(resourceGroupName: string, hubName: string, authorizationPolicyName: string, callback: msRest.ServiceCallback<Models.AuthorizationPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param authorizationPolicyName The name of the policy.
   * @param options The optional parameters
   * @param callback The callback
   */
  regeneratePrimaryKey(resourceGroupName: string, hubName: string, authorizationPolicyName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AuthorizationPolicy>): void;
  regeneratePrimaryKey(resourceGroupName: string, hubName: string, authorizationPolicyName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AuthorizationPolicy>, callback?: msRest.ServiceCallback<Models.AuthorizationPolicy>): Promise<Models.AuthorizationPoliciesRegeneratePrimaryKeyResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hubName,
        authorizationPolicyName,
        options
      },
      regeneratePrimaryKeyOperationSpec,
      callback) as Promise<Models.AuthorizationPoliciesRegeneratePrimaryKeyResponse>;
  }

  /**
   * Regenerates the secondary policy key of the specified authorization policy.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param authorizationPolicyName The name of the policy.
   * @param [options] The optional parameters
   * @returns Promise<Models.AuthorizationPoliciesRegenerateSecondaryKeyResponse>
   */
  regenerateSecondaryKey(resourceGroupName: string, hubName: string, authorizationPolicyName: string, options?: msRest.RequestOptionsBase): Promise<Models.AuthorizationPoliciesRegenerateSecondaryKeyResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param authorizationPolicyName The name of the policy.
   * @param callback The callback
   */
  regenerateSecondaryKey(resourceGroupName: string, hubName: string, authorizationPolicyName: string, callback: msRest.ServiceCallback<Models.AuthorizationPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param authorizationPolicyName The name of the policy.
   * @param options The optional parameters
   * @param callback The callback
   */
  regenerateSecondaryKey(resourceGroupName: string, hubName: string, authorizationPolicyName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AuthorizationPolicy>): void;
  regenerateSecondaryKey(resourceGroupName: string, hubName: string, authorizationPolicyName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AuthorizationPolicy>, callback?: msRest.ServiceCallback<Models.AuthorizationPolicy>): Promise<Models.AuthorizationPoliciesRegenerateSecondaryKeyResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        hubName,
        authorizationPolicyName,
        options
      },
      regenerateSecondaryKeyOperationSpec,
      callback) as Promise<Models.AuthorizationPoliciesRegenerateSecondaryKeyResponse>;
  }

  /**
   * Gets all the authorization policies in a specified hub.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AuthorizationPoliciesListByHubNextResponse>
   */
  listByHubNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AuthorizationPoliciesListByHubNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByHubNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AuthorizationPolicyListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByHubNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AuthorizationPolicyListResult>): void;
  listByHubNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AuthorizationPolicyListResult>, callback?: msRest.ServiceCallback<Models.AuthorizationPolicyListResult>): Promise<Models.AuthorizationPoliciesListByHubNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByHubNextOperationSpec,
      callback) as Promise<Models.AuthorizationPoliciesListByHubNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/authorizationPolicies/{authorizationPolicyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.authorizationPolicyName0,
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
      ...Mappers.AuthorizationPolicyResourceFormat,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationPolicyResourceFormat
    },
    201: {
      bodyMapper: Mappers.AuthorizationPolicyResourceFormat
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/authorizationPolicies/{authorizationPolicyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.authorizationPolicyName1,
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
      bodyMapper: Mappers.AuthorizationPolicyResourceFormat
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByHubOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/authorizationPolicies",
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
      bodyMapper: Mappers.AuthorizationPolicyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const regeneratePrimaryKeyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/authorizationPolicies/{authorizationPolicyName}/regeneratePrimaryKey",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.authorizationPolicyName1,
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
      bodyMapper: Mappers.AuthorizationPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const regenerateSecondaryKeyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomerInsights/hubs/{hubName}/authorizationPolicies/{authorizationPolicyName}/regenerateSecondaryKey",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.hubName1,
    Parameters.authorizationPolicyName1,
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
      bodyMapper: Mappers.AuthorizationPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByHubNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.AuthorizationPolicyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
