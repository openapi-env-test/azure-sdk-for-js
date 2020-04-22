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
import * as Models from "../models";
import * as Mappers from "../models/featuresMappers";
import * as Parameters from "../models/parameters";
import { FeatureClientContext } from "../featureClientContext";

/** Class representing a Features. */
export class Features {
  private readonly client: FeatureClientContext;

  /**
   * Create a Features.
   * @param {FeatureClientContext} client Reference to the service client.
   */
  constructor(client: FeatureClientContext) {
    this.client = client;
  }

  /**
   * Gets all the preview features that are available through AFEC for the subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.FeaturesListAllResponse>
   */
  listAll(options?: msRest.RequestOptionsBase): Promise<Models.FeaturesListAllResponse>;
  /**
   * @param callback The callback
   */
  listAll(callback: msRest.ServiceCallback<Models.FeatureOperationsListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FeatureOperationsListResult>): void;
  listAll(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FeatureOperationsListResult>, callback?: msRest.ServiceCallback<Models.FeatureOperationsListResult>): Promise<Models.FeaturesListAllResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listAllOperationSpec,
      callback) as Promise<Models.FeaturesListAllResponse>;
  }

  /**
   * Gets all the preview features in a provider namespace that are available through AFEC for the
   * subscription.
   * @param resourceProviderNamespace The namespace of the resource provider for getting features.
   * @param [options] The optional parameters
   * @returns Promise<Models.FeaturesListResponse>
   */
  list(resourceProviderNamespace: string, options?: msRest.RequestOptionsBase): Promise<Models.FeaturesListResponse>;
  /**
   * @param resourceProviderNamespace The namespace of the resource provider for getting features.
   * @param callback The callback
   */
  list(resourceProviderNamespace: string, callback: msRest.ServiceCallback<Models.FeatureOperationsListResult>): void;
  /**
   * @param resourceProviderNamespace The namespace of the resource provider for getting features.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceProviderNamespace: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FeatureOperationsListResult>): void;
  list(resourceProviderNamespace: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FeatureOperationsListResult>, callback?: msRest.ServiceCallback<Models.FeatureOperationsListResult>): Promise<Models.FeaturesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceProviderNamespace,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.FeaturesListResponse>;
  }

  /**
   * Gets the preview feature with the specified name.
   * @param resourceProviderNamespace The resource provider namespace for the feature.
   * @param featureName The name of the feature to get.
   * @param [options] The optional parameters
   * @returns Promise<Models.FeaturesGetResponse>
   */
  get(resourceProviderNamespace: string, featureName: string, options?: msRest.RequestOptionsBase): Promise<Models.FeaturesGetResponse>;
  /**
   * @param resourceProviderNamespace The resource provider namespace for the feature.
   * @param featureName The name of the feature to get.
   * @param callback The callback
   */
  get(resourceProviderNamespace: string, featureName: string, callback: msRest.ServiceCallback<Models.FeatureResult>): void;
  /**
   * @param resourceProviderNamespace The resource provider namespace for the feature.
   * @param featureName The name of the feature to get.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceProviderNamespace: string, featureName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FeatureResult>): void;
  get(resourceProviderNamespace: string, featureName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FeatureResult>, callback?: msRest.ServiceCallback<Models.FeatureResult>): Promise<Models.FeaturesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceProviderNamespace,
        featureName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.FeaturesGetResponse>;
  }

  /**
   * Registers the preview feature for the subscription.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param featureName The name of the feature to register.
   * @param [options] The optional parameters
   * @returns Promise<Models.FeaturesRegisterResponse>
   */
  register(resourceProviderNamespace: string, featureName: string, options?: msRest.RequestOptionsBase): Promise<Models.FeaturesRegisterResponse>;
  /**
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param featureName The name of the feature to register.
   * @param callback The callback
   */
  register(resourceProviderNamespace: string, featureName: string, callback: msRest.ServiceCallback<Models.FeatureResult>): void;
  /**
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param featureName The name of the feature to register.
   * @param options The optional parameters
   * @param callback The callback
   */
  register(resourceProviderNamespace: string, featureName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FeatureResult>): void;
  register(resourceProviderNamespace: string, featureName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FeatureResult>, callback?: msRest.ServiceCallback<Models.FeatureResult>): Promise<Models.FeaturesRegisterResponse> {
    return this.client.sendOperationRequest(
      {
        resourceProviderNamespace,
        featureName,
        options
      },
      registerOperationSpec,
      callback) as Promise<Models.FeaturesRegisterResponse>;
  }

  /**
   * Unregisters the preview feature for the subscription.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param featureName The name of the feature to unregister.
   * @param [options] The optional parameters
   * @returns Promise<Models.FeaturesUnregisterResponse>
   */
  unregister(resourceProviderNamespace: string, featureName: string, options?: msRest.RequestOptionsBase): Promise<Models.FeaturesUnregisterResponse>;
  /**
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param featureName The name of the feature to unregister.
   * @param callback The callback
   */
  unregister(resourceProviderNamespace: string, featureName: string, callback: msRest.ServiceCallback<Models.FeatureResult>): void;
  /**
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param featureName The name of the feature to unregister.
   * @param options The optional parameters
   * @param callback The callback
   */
  unregister(resourceProviderNamespace: string, featureName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FeatureResult>): void;
  unregister(resourceProviderNamespace: string, featureName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FeatureResult>, callback?: msRest.ServiceCallback<Models.FeatureResult>): Promise<Models.FeaturesUnregisterResponse> {
    return this.client.sendOperationRequest(
      {
        resourceProviderNamespace,
        featureName,
        options
      },
      unregisterOperationSpec,
      callback) as Promise<Models.FeaturesUnregisterResponse>;
  }

  /**
   * Gets all the preview features that are available through AFEC for the subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.FeaturesListAllNextResponse>
   */
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.FeaturesListAllNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.FeatureOperationsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FeatureOperationsListResult>): void;
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FeatureOperationsListResult>, callback?: msRest.ServiceCallback<Models.FeatureOperationsListResult>): Promise<Models.FeaturesListAllNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAllNextOperationSpec,
      callback) as Promise<Models.FeaturesListAllNextResponse>;
  }

  /**
   * Gets all the preview features in a provider namespace that are available through AFEC for the
   * subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.FeaturesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.FeaturesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.FeatureOperationsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FeatureOperationsListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FeatureOperationsListResult>, callback?: msRest.ServiceCallback<Models.FeatureOperationsListResult>): Promise<Models.FeaturesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.FeaturesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listAllOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Features/features",
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
      bodyMapper: Mappers.FeatureOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Features/providers/{resourceProviderNamespace}/features",
  urlParameters: [
    Parameters.resourceProviderNamespace,
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
      bodyMapper: Mappers.FeatureOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Features/providers/{resourceProviderNamespace}/features/{featureName}",
  urlParameters: [
    Parameters.resourceProviderNamespace,
    Parameters.featureName,
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
      bodyMapper: Mappers.FeatureResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const registerOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Features/providers/{resourceProviderNamespace}/features/{featureName}/register",
  urlParameters: [
    Parameters.resourceProviderNamespace,
    Parameters.featureName,
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
      bodyMapper: Mappers.FeatureResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const unregisterOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Features/providers/{resourceProviderNamespace}/features/{featureName}/unregister",
  urlParameters: [
    Parameters.resourceProviderNamespace,
    Parameters.featureName,
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
      bodyMapper: Mappers.FeatureResult
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
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FeatureOperationsListResult
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
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FeatureOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
