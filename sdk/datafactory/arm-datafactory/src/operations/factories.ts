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
import * as Mappers from "../models/factoriesMappers";
import * as Parameters from "../models/parameters";
import { DataFactoryManagementClientContext } from "../dataFactoryManagementClientContext";

/** Class representing a Factories. */
export class Factories {
  private readonly client: DataFactoryManagementClientContext;

  /**
   * Create a Factories.
   * @param {DataFactoryManagementClientContext} client Reference to the service client.
   */
  constructor(client: DataFactoryManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists factories under the specified subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.FactoriesListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.FactoriesListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.FactoryListResponse>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FactoryListResponse>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FactoryListResponse>, callback?: msRest.ServiceCallback<Models.FactoryListResponse>): Promise<Models.FactoriesListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.FactoriesListResponse>;
  }

  /**
   * Updates a factory's repo information.
   * @param locationId The location identifier.
   * @param factoryRepoUpdate Update factory repo request definition.
   * @param [options] The optional parameters
   * @returns Promise<Models.FactoriesConfigureFactoryRepoForDemoResponse>
   */
  configureFactoryRepoForDemo(locationId: string, factoryRepoUpdate: Models.FactoryRepoUpdate, options?: msRest.RequestOptionsBase): Promise<Models.FactoriesConfigureFactoryRepoForDemoResponse>;
  /**
   * @param locationId The location identifier.
   * @param factoryRepoUpdate Update factory repo request definition.
   * @param callback The callback
   */
  configureFactoryRepoForDemo(locationId: string, factoryRepoUpdate: Models.FactoryRepoUpdate, callback: msRest.ServiceCallback<Models.Factory>): void;
  /**
   * @param locationId The location identifier.
   * @param factoryRepoUpdate Update factory repo request definition.
   * @param options The optional parameters
   * @param callback The callback
   */
  configureFactoryRepoForDemo(locationId: string, factoryRepoUpdate: Models.FactoryRepoUpdate, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Factory>): void;
  configureFactoryRepoForDemo(locationId: string, factoryRepoUpdate: Models.FactoryRepoUpdate, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Factory>, callback?: msRest.ServiceCallback<Models.Factory>): Promise<Models.FactoriesConfigureFactoryRepoForDemoResponse> {
    return this.client.sendOperationRequest(
      {
        locationId,
        factoryRepoUpdate,
        options
      },
      configureFactoryRepoForDemoOperationSpec,
      callback) as Promise<Models.FactoriesConfigureFactoryRepoForDemoResponse>;
  }

  /**
   * Updates a factory's repo information.
   * @param locationId The location identifier.
   * @param factoryRepoUpdate Update factory repo request definition.
   * @param [options] The optional parameters
   * @returns Promise<Models.FactoriesConfigureFactoryRepoResponse>
   */
  configureFactoryRepo(locationId: string, factoryRepoUpdate: Models.FactoryRepoUpdate, options?: msRest.RequestOptionsBase): Promise<Models.FactoriesConfigureFactoryRepoResponse>;
  /**
   * @param locationId The location identifier.
   * @param factoryRepoUpdate Update factory repo request definition.
   * @param callback The callback
   */
  configureFactoryRepo(locationId: string, factoryRepoUpdate: Models.FactoryRepoUpdate, callback: msRest.ServiceCallback<Models.Factory>): void;
  /**
   * @param locationId The location identifier.
   * @param factoryRepoUpdate Update factory repo request definition.
   * @param options The optional parameters
   * @param callback The callback
   */
  configureFactoryRepo(locationId: string, factoryRepoUpdate: Models.FactoryRepoUpdate, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Factory>): void;
  configureFactoryRepo(locationId: string, factoryRepoUpdate: Models.FactoryRepoUpdate, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Factory>, callback?: msRest.ServiceCallback<Models.Factory>): Promise<Models.FactoriesConfigureFactoryRepoResponse> {
    return this.client.sendOperationRequest(
      {
        locationId,
        factoryRepoUpdate,
        options
      },
      configureFactoryRepoOperationSpec,
      callback) as Promise<Models.FactoriesConfigureFactoryRepoResponse>;
  }

  /**
   * Lists factories.
   * @param resourceGroupName The resource group name.
   * @param [options] The optional parameters
   * @returns Promise<Models.FactoriesListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.FactoriesListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.FactoryListResponse>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FactoryListResponse>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FactoryListResponse>, callback?: msRest.ServiceCallback<Models.FactoryListResponse>): Promise<Models.FactoriesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.FactoriesListByResourceGroupResponse>;
  }

  /**
   * Creates or updates a factory.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param factory Factory resource definition.
   * @param [options] The optional parameters
   * @returns Promise<Models.FactoriesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, factoryName: string, factory: Models.Factory, options?: Models.FactoriesCreateOrUpdateOptionalParams): Promise<Models.FactoriesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param factory Factory resource definition.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, factoryName: string, factory: Models.Factory, callback: msRest.ServiceCallback<Models.Factory>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param factory Factory resource definition.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, factoryName: string, factory: Models.Factory, options: Models.FactoriesCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.Factory>): void;
  createOrUpdate(resourceGroupName: string, factoryName: string, factory: Models.Factory, options?: Models.FactoriesCreateOrUpdateOptionalParams | msRest.ServiceCallback<Models.Factory>, callback?: msRest.ServiceCallback<Models.Factory>): Promise<Models.FactoriesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        factory,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.FactoriesCreateOrUpdateResponse>;
  }

  /**
   * Updates a factory.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param factoryUpdateParameters The parameters for updating a factory.
   * @param [options] The optional parameters
   * @returns Promise<Models.FactoriesUpdateResponse>
   */
  update(resourceGroupName: string, factoryName: string, factoryUpdateParameters: Models.FactoryUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.FactoriesUpdateResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param factoryUpdateParameters The parameters for updating a factory.
   * @param callback The callback
   */
  update(resourceGroupName: string, factoryName: string, factoryUpdateParameters: Models.FactoryUpdateParameters, callback: msRest.ServiceCallback<Models.Factory>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param factoryUpdateParameters The parameters for updating a factory.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, factoryName: string, factoryUpdateParameters: Models.FactoryUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Factory>): void;
  update(resourceGroupName: string, factoryName: string, factoryUpdateParameters: Models.FactoryUpdateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Factory>, callback?: msRest.ServiceCallback<Models.Factory>): Promise<Models.FactoriesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        factoryUpdateParameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.FactoriesUpdateResponse>;
  }

  /**
   * Gets a factory.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param [options] The optional parameters
   * @returns Promise<Models.FactoriesGetResponse>
   */
  get(resourceGroupName: string, factoryName: string, options?: Models.FactoriesGetOptionalParams): Promise<Models.FactoriesGetResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param callback The callback
   */
  get(resourceGroupName: string, factoryName: string, callback: msRest.ServiceCallback<Models.Factory>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, factoryName: string, options: Models.FactoriesGetOptionalParams, callback: msRest.ServiceCallback<Models.Factory>): void;
  get(resourceGroupName: string, factoryName: string, options?: Models.FactoriesGetOptionalParams | msRest.ServiceCallback<Models.Factory>, callback?: msRest.ServiceCallback<Models.Factory>): Promise<Models.FactoriesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.FactoriesGetResponse>;
  }

  /**
   * Deletes a factory.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, factoryName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, factoryName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, factoryName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, factoryName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Get GitHub Access Token.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param gitHubAccessTokenRequest Get GitHub access token request definition.
   * @param [options] The optional parameters
   * @returns Promise<Models.FactoriesGetGitHubAccessTokenResponse>
   */
  getGitHubAccessToken(resourceGroupName: string, factoryName: string, gitHubAccessTokenRequest: Models.GitHubAccessTokenRequest, options?: msRest.RequestOptionsBase): Promise<Models.FactoriesGetGitHubAccessTokenResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param gitHubAccessTokenRequest Get GitHub access token request definition.
   * @param callback The callback
   */
  getGitHubAccessToken(resourceGroupName: string, factoryName: string, gitHubAccessTokenRequest: Models.GitHubAccessTokenRequest, callback: msRest.ServiceCallback<Models.GitHubAccessTokenResponse>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param gitHubAccessTokenRequest Get GitHub access token request definition.
   * @param options The optional parameters
   * @param callback The callback
   */
  getGitHubAccessToken(resourceGroupName: string, factoryName: string, gitHubAccessTokenRequest: Models.GitHubAccessTokenRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GitHubAccessTokenResponse>): void;
  getGitHubAccessToken(resourceGroupName: string, factoryName: string, gitHubAccessTokenRequest: Models.GitHubAccessTokenRequest, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GitHubAccessTokenResponse>, callback?: msRest.ServiceCallback<Models.GitHubAccessTokenResponse>): Promise<Models.FactoriesGetGitHubAccessTokenResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        gitHubAccessTokenRequest,
        options
      },
      getGitHubAccessTokenOperationSpec,
      callback) as Promise<Models.FactoriesGetGitHubAccessTokenResponse>;
  }

  /**
   * Get Data Plane access.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param policy Data Plane user access policy definition.
   * @param [options] The optional parameters
   * @returns Promise<Models.FactoriesGetDataPlaneAccessResponse>
   */
  getDataPlaneAccess(resourceGroupName: string, factoryName: string, policy: Models.UserAccessPolicy, options?: msRest.RequestOptionsBase): Promise<Models.FactoriesGetDataPlaneAccessResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param policy Data Plane user access policy definition.
   * @param callback The callback
   */
  getDataPlaneAccess(resourceGroupName: string, factoryName: string, policy: Models.UserAccessPolicy, callback: msRest.ServiceCallback<Models.AccessPolicyResponse>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param policy Data Plane user access policy definition.
   * @param options The optional parameters
   * @param callback The callback
   */
  getDataPlaneAccess(resourceGroupName: string, factoryName: string, policy: Models.UserAccessPolicy, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccessPolicyResponse>): void;
  getDataPlaneAccess(resourceGroupName: string, factoryName: string, policy: Models.UserAccessPolicy, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccessPolicyResponse>, callback?: msRest.ServiceCallback<Models.AccessPolicyResponse>): Promise<Models.FactoriesGetDataPlaneAccessResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        policy,
        options
      },
      getDataPlaneAccessOperationSpec,
      callback) as Promise<Models.FactoriesGetDataPlaneAccessResponse>;
  }

  /**
   * Lists factories under the specified subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.FactoriesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.FactoriesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.FactoryListResponse>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FactoryListResponse>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FactoryListResponse>, callback?: msRest.ServiceCallback<Models.FactoryListResponse>): Promise<Models.FactoriesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.FactoriesListNextResponse>;
  }

  /**
   * Lists factories.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.FactoriesListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.FactoriesListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.FactoryListResponse>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FactoryListResponse>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FactoryListResponse>, callback?: msRest.ServiceCallback<Models.FactoryListResponse>): Promise<Models.FactoriesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.FactoriesListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.DataFactory/factories",
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
      bodyMapper: Mappers.FactoryListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const configureFactoryRepoForDemoOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.DataFactory/locations/{locationId}/configureFactoryRepoForDemo",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.locationId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "factoryRepoUpdate",
    mapper: {
      ...Mappers.FactoryRepoUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Factory
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const configureFactoryRepoOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.DataFactory/locations/{locationId}/configureFactoryRepo",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.locationId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "factoryRepoUpdate",
    mapper: {
      ...Mappers.FactoryRepoUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Factory
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories",
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
      bodyMapper: Mappers.FactoryListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "factory",
    mapper: {
      ...Mappers.Factory,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Factory
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "factoryUpdateParameters",
    mapper: {
      ...Mappers.FactoryUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Factory
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifNoneMatch,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Factory
    },
    304: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
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

const getGitHubAccessTokenOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/getGitHubAccessToken",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "gitHubAccessTokenRequest",
    mapper: {
      ...Mappers.GitHubAccessTokenRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.GitHubAccessTokenResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getDataPlaneAccessOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/getDataPlaneAccess",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "policy",
    mapper: {
      ...Mappers.UserAccessPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AccessPolicyResponse
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
      bodyMapper: Mappers.FactoryListResponse
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
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FactoryListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
