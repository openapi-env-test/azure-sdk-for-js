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
import * as Mappers from "../models/endpointsMappers";
import * as Parameters from "../models/parameters";
import { CdnManagementClientContext } from "../cdnManagementClientContext";

/** Class representing a Endpoints. */
export class Endpoints {
  private readonly client: CdnManagementClientContext;

  /**
   * Create a Endpoints.
   * @param {CdnManagementClientContext} client Reference to the service client.
   */
  constructor(client: CdnManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists existing CDN endpoints.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.EndpointsListByProfileResponse>
   */
  listByProfile(resourceGroupName: string, profileName: string, options?: msRest.RequestOptionsBase): Promise<Models.EndpointsListByProfileResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param callback The callback
   */
  listByProfile(resourceGroupName: string, profileName: string, callback: msRest.ServiceCallback<Models.EndpointListResult>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByProfile(resourceGroupName: string, profileName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EndpointListResult>): void;
  listByProfile(resourceGroupName: string, profileName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EndpointListResult>, callback?: msRest.ServiceCallback<Models.EndpointListResult>): Promise<Models.EndpointsListByProfileResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        options
      },
      listByProfileOperationSpec,
      callback) as Promise<Models.EndpointsListByProfileResponse>;
  }

  /**
   * Gets an existing CDN endpoint with the specified endpoint name under the specified subscription,
   * resource group and profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param [options] The optional parameters
   * @returns Promise<Models.EndpointsGetResponse>
   */
  get(resourceGroupName: string, profileName: string, endpointName: string, options?: msRest.RequestOptionsBase): Promise<Models.EndpointsGetResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param callback The callback
   */
  get(resourceGroupName: string, profileName: string, endpointName: string, callback: msRest.ServiceCallback<Models.Endpoint>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, profileName: string, endpointName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Endpoint>): void;
  get(resourceGroupName: string, profileName: string, endpointName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Endpoint>, callback?: msRest.ServiceCallback<Models.Endpoint>): Promise<Models.EndpointsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        endpointName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.EndpointsGetResponse>;
  }

  /**
   * Creates a new CDN endpoint with the specified endpoint name under the specified subscription,
   * resource group and profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param endpoint Endpoint properties
   * @param [options] The optional parameters
   * @returns Promise<Models.EndpointsCreateResponse>
   */
  create(resourceGroupName: string, profileName: string, endpointName: string, endpoint: Models.Endpoint, options?: msRest.RequestOptionsBase): Promise<Models.EndpointsCreateResponse> {
    return this.beginCreate(resourceGroupName,profileName,endpointName,endpoint,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.EndpointsCreateResponse>;
  }

  /**
   * Updates an existing CDN endpoint with the specified endpoint name under the specified
   * subscription, resource group and profile. Only tags can be updated after creating an endpoint.
   * To update origins, use the Update Origin operation. To update origin groups, use the Update
   * Origin group operation. To update custom domains, use the Update Custom Domain operation.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param endpointUpdateProperties Endpoint update properties
   * @param [options] The optional parameters
   * @returns Promise<Models.EndpointsUpdateResponse>
   */
  update(resourceGroupName: string, profileName: string, endpointName: string, endpointUpdateProperties: Models.EndpointUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.EndpointsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,profileName,endpointName,endpointUpdateProperties,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.EndpointsUpdateResponse>;
  }

  /**
   * Deletes an existing CDN endpoint with the specified endpoint name under the specified
   * subscription, resource group and profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, profileName: string, endpointName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,profileName,endpointName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Starts an existing CDN endpoint that is on a stopped state.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param [options] The optional parameters
   * @returns Promise<Models.EndpointsStartResponse>
   */
  start(resourceGroupName: string, profileName: string, endpointName: string, options?: msRest.RequestOptionsBase): Promise<Models.EndpointsStartResponse> {
    return this.beginStart(resourceGroupName,profileName,endpointName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.EndpointsStartResponse>;
  }

  /**
   * Stops an existing running CDN endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param [options] The optional parameters
   * @returns Promise<Models.EndpointsStopResponse>
   */
  stop(resourceGroupName: string, profileName: string, endpointName: string, options?: msRest.RequestOptionsBase): Promise<Models.EndpointsStopResponse> {
    return this.beginStop(resourceGroupName,profileName,endpointName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.EndpointsStopResponse>;
  }

  /**
   * Removes a content from CDN.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param contentPaths The path to the content to be purged. Can describe a file path or a wild
   * card directory.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  purgeContent(resourceGroupName: string, profileName: string, endpointName: string, contentPaths: string[], options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginPurgeContent(resourceGroupName,profileName,endpointName,contentPaths,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Pre-loads a content to CDN. Available for Verizon Profiles.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param contentPaths The path to the content to be loaded. Path should be a relative file URL of
   * the origin.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  loadContent(resourceGroupName: string, profileName: string, endpointName: string, contentPaths: string[], options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginLoadContent(resourceGroupName,profileName,endpointName,contentPaths,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Validates the custom domain mapping to ensure it maps to the correct CDN endpoint in DNS.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param hostName The host name of the custom domain. Must be a domain name.
   * @param [options] The optional parameters
   * @returns Promise<Models.EndpointsValidateCustomDomainResponse>
   */
  validateCustomDomain(resourceGroupName: string, profileName: string, endpointName: string, hostName: string, options?: msRest.RequestOptionsBase): Promise<Models.EndpointsValidateCustomDomainResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param hostName The host name of the custom domain. Must be a domain name.
   * @param callback The callback
   */
  validateCustomDomain(resourceGroupName: string, profileName: string, endpointName: string, hostName: string, callback: msRest.ServiceCallback<Models.ValidateCustomDomainOutput>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param hostName The host name of the custom domain. Must be a domain name.
   * @param options The optional parameters
   * @param callback The callback
   */
  validateCustomDomain(resourceGroupName: string, profileName: string, endpointName: string, hostName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ValidateCustomDomainOutput>): void;
  validateCustomDomain(resourceGroupName: string, profileName: string, endpointName: string, hostName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ValidateCustomDomainOutput>, callback?: msRest.ServiceCallback<Models.ValidateCustomDomainOutput>): Promise<Models.EndpointsValidateCustomDomainResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        endpointName,
        hostName,
        options
      },
      validateCustomDomainOperationSpec,
      callback) as Promise<Models.EndpointsValidateCustomDomainResponse>;
  }

  /**
   * Checks the quota and usage of geo filters and custom domains under the given endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param [options] The optional parameters
   * @returns Promise<Models.EndpointsListResourceUsageResponse>
   */
  listResourceUsage(resourceGroupName: string, profileName: string, endpointName: string, options?: msRest.RequestOptionsBase): Promise<Models.EndpointsListResourceUsageResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param callback The callback
   */
  listResourceUsage(resourceGroupName: string, profileName: string, endpointName: string, callback: msRest.ServiceCallback<Models.ResourceUsageListResult>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param options The optional parameters
   * @param callback The callback
   */
  listResourceUsage(resourceGroupName: string, profileName: string, endpointName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceUsageListResult>): void;
  listResourceUsage(resourceGroupName: string, profileName: string, endpointName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ResourceUsageListResult>, callback?: msRest.ServiceCallback<Models.ResourceUsageListResult>): Promise<Models.EndpointsListResourceUsageResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        endpointName,
        options
      },
      listResourceUsageOperationSpec,
      callback) as Promise<Models.EndpointsListResourceUsageResponse>;
  }

  /**
   * Creates a new CDN endpoint with the specified endpoint name under the specified subscription,
   * resource group and profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param endpoint Endpoint properties
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, profileName: string, endpointName: string, endpoint: Models.Endpoint, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        profileName,
        endpointName,
        endpoint,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Updates an existing CDN endpoint with the specified endpoint name under the specified
   * subscription, resource group and profile. Only tags can be updated after creating an endpoint.
   * To update origins, use the Update Origin operation. To update origin groups, use the Update
   * Origin group operation. To update custom domains, use the Update Custom Domain operation.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param endpointUpdateProperties Endpoint update properties
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, profileName: string, endpointName: string, endpointUpdateProperties: Models.EndpointUpdateParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        profileName,
        endpointName,
        endpointUpdateProperties,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Deletes an existing CDN endpoint with the specified endpoint name under the specified
   * subscription, resource group and profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, profileName: string, endpointName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        profileName,
        endpointName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Starts an existing CDN endpoint that is on a stopped state.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginStart(resourceGroupName: string, profileName: string, endpointName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        profileName,
        endpointName,
        options
      },
      beginStartOperationSpec,
      options);
  }

  /**
   * Stops an existing running CDN endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginStop(resourceGroupName: string, profileName: string, endpointName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        profileName,
        endpointName,
        options
      },
      beginStopOperationSpec,
      options);
  }

  /**
   * Removes a content from CDN.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param contentPaths The path to the content to be purged. Can describe a file path or a wild
   * card directory.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginPurgeContent(resourceGroupName: string, profileName: string, endpointName: string, contentPaths: string[], options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        profileName,
        endpointName,
        contentPaths,
        options
      },
      beginPurgeContentOperationSpec,
      options);
  }

  /**
   * Pre-loads a content to CDN. Available for Verizon Profiles.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param contentPaths The path to the content to be loaded. Path should be a relative file URL of
   * the origin.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginLoadContent(resourceGroupName: string, profileName: string, endpointName: string, contentPaths: string[], options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        profileName,
        endpointName,
        contentPaths,
        options
      },
      beginLoadContentOperationSpec,
      options);
  }

  /**
   * Lists existing CDN endpoints.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.EndpointsListByProfileNextResponse>
   */
  listByProfileNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.EndpointsListByProfileNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByProfileNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.EndpointListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByProfileNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EndpointListResult>): void;
  listByProfileNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EndpointListResult>, callback?: msRest.ServiceCallback<Models.EndpointListResult>): Promise<Models.EndpointsListByProfileNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByProfileNextOperationSpec,
      callback) as Promise<Models.EndpointsListByProfileNextResponse>;
  }

  /**
   * Checks the quota and usage of geo filters and custom domains under the given endpoint.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.EndpointsListResourceUsageNextResponse>
   */
  listResourceUsageNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.EndpointsListResourceUsageNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listResourceUsageNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ResourceUsageListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listResourceUsageNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceUsageListResult>): void;
  listResourceUsageNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ResourceUsageListResult>, callback?: msRest.ServiceCallback<Models.ResourceUsageListResult>): Promise<Models.EndpointsListResourceUsageNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listResourceUsageNextOperationSpec,
      callback) as Promise<Models.EndpointsListResourceUsageNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByProfileOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.profileName,
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
      bodyMapper: Mappers.EndpointListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName,
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
      bodyMapper: Mappers.Endpoint
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const validateCustomDomainOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/validateCustomDomain",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      hostName: "hostName"
    },
    mapper: {
      ...Mappers.ValidateCustomDomainInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ValidateCustomDomainOutput
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listResourceUsageOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/checkResourceUsage",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName,
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
      bodyMapper: Mappers.ResourceUsageListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "endpoint",
    mapper: {
      ...Mappers.Endpoint,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Endpoint
    },
    201: {
      bodyMapper: Mappers.Endpoint
    },
    202: {
      bodyMapper: Mappers.Endpoint
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "endpointUpdateProperties",
    mapper: {
      ...Mappers.EndpointUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Endpoint
    },
    202: {
      bodyMapper: Mappers.Endpoint
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
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

const beginStartOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/start",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName,
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
      bodyMapper: Mappers.Endpoint
    },
    202: {
      bodyMapper: Mappers.Endpoint
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginStopOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/stop",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName,
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
      bodyMapper: Mappers.Endpoint
    },
    202: {
      bodyMapper: Mappers.Endpoint
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginPurgeContentOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/purge",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      contentPaths: "contentPaths"
    },
    mapper: {
      ...Mappers.PurgeParameters,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginLoadContentOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/load",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.endpointName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      contentPaths: "contentPaths"
    },
    mapper: {
      ...Mappers.LoadParameters,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByProfileNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.EndpointListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listResourceUsageNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
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
      bodyMapper: Mappers.ResourceUsageListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
