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
import * as Mappers from "../models/resourceGroupsMappers";
import * as Parameters from "../models/parameters";
import { ResourceManagementClientContext } from "../resourceManagementClientContext";

/** Class representing a ResourceGroups. */
export class ResourceGroups {
  private readonly client: ResourceManagementClientContext;

  /**
   * Create a ResourceGroups.
   * @param {ResourceManagementClientContext} client Reference to the service client.
   */
  constructor(client: ResourceManagementClientContext) {
    this.client = client;
  }

  /**
   * Checks whether a resource group exists.
   * @param resourceGroupName The name of the resource group to check. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.ResourceGroupsCheckExistenceResponse>
   */
  checkExistence(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ResourceGroupsCheckExistenceResponse>;
  /**
   * @param resourceGroupName The name of the resource group to check. The name is case insensitive.
   * @param callback The callback
   */
  checkExistence(resourceGroupName: string, callback: msRest.ServiceCallback<boolean>): void;
  /**
   * @param resourceGroupName The name of the resource group to check. The name is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  checkExistence(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<boolean>): void;
  checkExistence(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<boolean>, callback?: msRest.ServiceCallback<boolean>): Promise<Models.ResourceGroupsCheckExistenceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      checkExistenceOperationSpec,
      callback) as Promise<Models.ResourceGroupsCheckExistenceResponse>;
  }

  /**
   * Creates or updates a resource group.
   * @param resourceGroupName The name of the resource group to create or update. Can include
   * alphanumeric, underscore, parentheses, hyphen, period (except at end), and Unicode characters
   * that match the allowed characters.
   * @param parameters Parameters supplied to the create or update a resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.ResourceGroupsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, parameters: Models.ResourceGroup, options?: msRest.RequestOptionsBase): Promise<Models.ResourceGroupsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group to create or update. Can include
   * alphanumeric, underscore, parentheses, hyphen, period (except at end), and Unicode characters
   * that match the allowed characters.
   * @param parameters Parameters supplied to the create or update a resource group.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, parameters: Models.ResourceGroup, callback: msRest.ServiceCallback<Models.ResourceGroup>): void;
  /**
   * @param resourceGroupName The name of the resource group to create or update. Can include
   * alphanumeric, underscore, parentheses, hyphen, period (except at end), and Unicode characters
   * that match the allowed characters.
   * @param parameters Parameters supplied to the create or update a resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, parameters: Models.ResourceGroup, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceGroup>): void;
  createOrUpdate(resourceGroupName: string, parameters: Models.ResourceGroup, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ResourceGroup>, callback?: msRest.ServiceCallback<Models.ResourceGroup>): Promise<Models.ResourceGroupsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ResourceGroupsCreateOrUpdateResponse>;
  }

  /**
   * When you delete a resource group, all of its resources are also deleted. Deleting a resource
   * group deletes all of its template deployments and currently stored operations.
   * @summary Deletes a resource group.
   * @param resourceGroupName The name of the resource group to delete. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, options?: Models.ResourceGroupsDeleteMethodOptionalParams): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets a resource group.
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.ResourceGroupsGetResponse>
   */
  get(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ResourceGroupsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param callback The callback
   */
  get(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ResourceGroup>): void;
  /**
   * @param resourceGroupName The name of the resource group to get. The name is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceGroup>): void;
  get(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ResourceGroup>, callback?: msRest.ServiceCallback<Models.ResourceGroup>): Promise<Models.ResourceGroupsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ResourceGroupsGetResponse>;
  }

  /**
   * Resource groups can be updated through a simple PATCH operation to a group address. The format
   * of the request is the same as that for creating a resource group. If a field is unspecified, the
   * current value is retained.
   * @summary Updates a resource group.
   * @param resourceGroupName The name of the resource group to update. The name is case insensitive.
   * @param parameters Parameters supplied to update a resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.ResourceGroupsUpdateResponse>
   */
  update(resourceGroupName: string, parameters: Models.ResourceGroupPatchable, options?: msRest.RequestOptionsBase): Promise<Models.ResourceGroupsUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group to update. The name is case insensitive.
   * @param parameters Parameters supplied to update a resource group.
   * @param callback The callback
   */
  update(resourceGroupName: string, parameters: Models.ResourceGroupPatchable, callback: msRest.ServiceCallback<Models.ResourceGroup>): void;
  /**
   * @param resourceGroupName The name of the resource group to update. The name is case insensitive.
   * @param parameters Parameters supplied to update a resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, parameters: Models.ResourceGroupPatchable, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceGroup>): void;
  update(resourceGroupName: string, parameters: Models.ResourceGroupPatchable, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ResourceGroup>, callback?: msRest.ServiceCallback<Models.ResourceGroup>): Promise<Models.ResourceGroupsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.ResourceGroupsUpdateResponse>;
  }

  /**
   * Captures the specified resource group as a template.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters Parameters for exporting the template.
   * @param [options] The optional parameters
   * @returns Promise<Models.ResourceGroupsExportTemplateResponse>
   */
  exportTemplate(resourceGroupName: string, parameters: Models.ExportTemplateRequest, options?: msRest.RequestOptionsBase): Promise<Models.ResourceGroupsExportTemplateResponse> {
    return this.beginExportTemplate(resourceGroupName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ResourceGroupsExportTemplateResponse>;
  }

  /**
   * Gets all the resource groups for a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.ResourceGroupsListResponse>
   */
  list(options?: Models.ResourceGroupsListOptionalParams): Promise<Models.ResourceGroupsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ResourceGroupListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.ResourceGroupsListOptionalParams, callback: msRest.ServiceCallback<Models.ResourceGroupListResult>): void;
  list(options?: Models.ResourceGroupsListOptionalParams | msRest.ServiceCallback<Models.ResourceGroupListResult>, callback?: msRest.ServiceCallback<Models.ResourceGroupListResult>): Promise<Models.ResourceGroupsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ResourceGroupsListResponse>;
  }

  /**
   * When you delete a resource group, all of its resources are also deleted. Deleting a resource
   * group deletes all of its template deployments and currently stored operations.
   * @summary Deletes a resource group.
   * @param resourceGroupName The name of the resource group to delete. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, options?: Models.ResourceGroupsBeginDeleteMethodOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Captures the specified resource group as a template.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters Parameters for exporting the template.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginExportTemplate(resourceGroupName: string, parameters: Models.ExportTemplateRequest, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        parameters,
        options
      },
      beginExportTemplateOperationSpec,
      options);
  }

  /**
   * Gets all the resource groups for a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ResourceGroupsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ResourceGroupsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ResourceGroupListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceGroupListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ResourceGroupListResult>, callback?: msRest.ServiceCallback<Models.ResourceGroupListResult>): Promise<Models.ResourceGroupsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ResourceGroupsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const checkExistenceOperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}",
  urlParameters: [
    Parameters.resourceGroupName0,
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
      ...Mappers.ResourceGroup,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ResourceGroup
    },
    201: {
      bodyMapper: Mappers.ResourceGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}",
  urlParameters: [
    Parameters.resourceGroupName0,
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
      bodyMapper: Mappers.ResourceGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}",
  urlParameters: [
    Parameters.resourceGroupName0,
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
      ...Mappers.ResourceGroupPatchable,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ResourceGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResourceGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.forceDeletionTypes,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginExportTemplateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/exportTemplate",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName1
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
      ...Mappers.ExportTemplateRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ResourceGroupExportResult
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
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResourceGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
