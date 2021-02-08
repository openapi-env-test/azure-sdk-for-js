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
import * as Mappers from "../models/webApplicationFirewallPoliciesMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a WebApplicationFirewallPolicies. */
export class WebApplicationFirewallPolicies {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a WebApplicationFirewallPolicies.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all of the protection policies within a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.WebApplicationFirewallPoliciesListResponse>
   */
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.WebApplicationFirewallPoliciesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.WebApplicationFirewallPolicyListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WebApplicationFirewallPolicyListResult>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WebApplicationFirewallPolicyListResult>, callback?: msRest.ServiceCallback<Models.WebApplicationFirewallPolicyListResult>): Promise<Models.WebApplicationFirewallPoliciesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.WebApplicationFirewallPoliciesListResponse>;
  }

  /**
   * Gets all the WAF policies in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.WebApplicationFirewallPoliciesListAllResponse>
   */
  listAll(options?: msRest.RequestOptionsBase): Promise<Models.WebApplicationFirewallPoliciesListAllResponse>;
  /**
   * @param callback The callback
   */
  listAll(callback: msRest.ServiceCallback<Models.WebApplicationFirewallPolicyListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WebApplicationFirewallPolicyListResult>): void;
  listAll(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WebApplicationFirewallPolicyListResult>, callback?: msRest.ServiceCallback<Models.WebApplicationFirewallPolicyListResult>): Promise<Models.WebApplicationFirewallPoliciesListAllResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listAllOperationSpec,
      callback) as Promise<Models.WebApplicationFirewallPoliciesListAllResponse>;
  }

  /**
   * Retrieve protection policy with specified name within a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param policyName The name of the policy
   * @param [options] The optional parameters
   * @returns Promise<Models.WebApplicationFirewallPoliciesGetResponse>
   */
  get(resourceGroupName: string, policyName: string, options?: msRest.RequestOptionsBase): Promise<Models.WebApplicationFirewallPoliciesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param policyName The name of the policy
   * @param callback The callback
   */
  get(resourceGroupName: string, policyName: string, callback: msRest.ServiceCallback<Models.WebApplicationFirewallPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param policyName The name of the policy
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, policyName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WebApplicationFirewallPolicy>): void;
  get(resourceGroupName: string, policyName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WebApplicationFirewallPolicy>, callback?: msRest.ServiceCallback<Models.WebApplicationFirewallPolicy>): Promise<Models.WebApplicationFirewallPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        policyName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.WebApplicationFirewallPoliciesGetResponse>;
  }

  /**
   * Creates or update policy with specified rule set name within a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param policyName The name of the policy.
   * @param parameters Policy to be created.
   * @param [options] The optional parameters
   * @returns Promise<Models.WebApplicationFirewallPoliciesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, policyName: string, parameters: Models.WebApplicationFirewallPolicy, options?: msRest.RequestOptionsBase): Promise<Models.WebApplicationFirewallPoliciesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param policyName The name of the policy.
   * @param parameters Policy to be created.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, policyName: string, parameters: Models.WebApplicationFirewallPolicy, callback: msRest.ServiceCallback<Models.WebApplicationFirewallPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param policyName The name of the policy.
   * @param parameters Policy to be created.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, policyName: string, parameters: Models.WebApplicationFirewallPolicy, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WebApplicationFirewallPolicy>): void;
  createOrUpdate(resourceGroupName: string, policyName: string, parameters: Models.WebApplicationFirewallPolicy, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WebApplicationFirewallPolicy>, callback?: msRest.ServiceCallback<Models.WebApplicationFirewallPolicy>): Promise<Models.WebApplicationFirewallPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        policyName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.WebApplicationFirewallPoliciesCreateOrUpdateResponse>;
  }

  /**
   * Deletes Policy
   * @param resourceGroupName The name of the resource group.
   * @param policyName The name of the policy.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, policyName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,policyName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Deletes Policy
   * @param resourceGroupName The name of the resource group.
   * @param policyName The name of the policy.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, policyName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        policyName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Lists all of the protection policies within a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.WebApplicationFirewallPoliciesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.WebApplicationFirewallPoliciesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.WebApplicationFirewallPolicyListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WebApplicationFirewallPolicyListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WebApplicationFirewallPolicyListResult>, callback?: msRest.ServiceCallback<Models.WebApplicationFirewallPolicyListResult>): Promise<Models.WebApplicationFirewallPoliciesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.WebApplicationFirewallPoliciesListNextResponse>;
  }

  /**
   * Gets all the WAF policies in a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.WebApplicationFirewallPoliciesListAllNextResponse>
   */
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.WebApplicationFirewallPoliciesListAllNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.WebApplicationFirewallPolicyListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WebApplicationFirewallPolicyListResult>): void;
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WebApplicationFirewallPolicyListResult>, callback?: msRest.ServiceCallback<Models.WebApplicationFirewallPolicyListResult>): Promise<Models.WebApplicationFirewallPoliciesListAllNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAllNextOperationSpec,
      callback) as Promise<Models.WebApplicationFirewallPoliciesListAllNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies",
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
      bodyMapper: Mappers.WebApplicationFirewallPolicyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies",
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
      bodyMapper: Mappers.WebApplicationFirewallPolicyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies/{policyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.policyName,
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
      bodyMapper: Mappers.WebApplicationFirewallPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies/{policyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.policyName,
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
      ...Mappers.WebApplicationFirewallPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.WebApplicationFirewallPolicy
    },
    201: {
      bodyMapper: Mappers.WebApplicationFirewallPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies/{policyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.policyName,
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
      bodyMapper: Mappers.WebApplicationFirewallPolicyListResult
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
      bodyMapper: Mappers.WebApplicationFirewallPolicyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
