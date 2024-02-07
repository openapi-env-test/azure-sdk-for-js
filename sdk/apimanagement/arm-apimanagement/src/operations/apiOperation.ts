/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ApiOperation } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  OperationContract,
  ApiOperationListByApiNextOptionalParams,
  ApiOperationListByApiOptionalParams,
  ApiOperationListByApiResponse,
  ApiOperationGetEntityTagOptionalParams,
  ApiOperationGetEntityTagResponse,
  ApiOperationGetOptionalParams,
  ApiOperationGetResponse,
  ApiOperationCreateOrUpdateOptionalParams,
  ApiOperationCreateOrUpdateResponse,
  OperationUpdateContract,
  ApiOperationUpdateOptionalParams,
  ApiOperationUpdateResponse,
  ApiOperationDeleteOptionalParams,
  ApiOperationListByApiNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ApiOperation operations. */
export class ApiOperationImpl implements ApiOperation {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class ApiOperation class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists a collection of the operations for the specified API.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  public listByApi(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiOperationListByApiOptionalParams,
  ): PagedAsyncIterableIterator<OperationContract> {
    const iter = this.listByApiPagingAll(
      resourceGroupName,
      serviceName,
      apiId,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByApiPagingPage(
          resourceGroupName,
          serviceName,
          apiId,
          options,
          settings,
        );
      },
    };
  }

  private async *listByApiPagingPage(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiOperationListByApiOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<OperationContract[]> {
    let result: ApiOperationListByApiResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByApi(
        resourceGroupName,
        serviceName,
        apiId,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByApiNext(
        resourceGroupName,
        serviceName,
        apiId,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByApiPagingAll(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiOperationListByApiOptionalParams,
  ): AsyncIterableIterator<OperationContract> {
    for await (const page of this.listByApiPagingPage(
      resourceGroupName,
      serviceName,
      apiId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists a collection of the operations for the specified API.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  private _listByApi(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiOperationListByApiOptionalParams,
  ): Promise<ApiOperationListByApiResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, options },
      listByApiOperationSpec,
    );
  }

  /**
   * Gets the entity state (Etag) version of the API operation specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API Management
   *                    service instance.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    operationId: string,
    options?: ApiOperationGetEntityTagOptionalParams,
  ): Promise<ApiOperationGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, operationId, options },
      getEntityTagOperationSpec,
    );
  }

  /**
   * Gets the details of the API Operation specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API Management
   *                    service instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    operationId: string,
    options?: ApiOperationGetOptionalParams,
  ): Promise<ApiOperationGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, operationId, options },
      getOperationSpec,
    );
  }

  /**
   * Creates a new operation in the API or updates an existing one.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API Management
   *                    service instance.
   * @param parameters Create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    operationId: string,
    parameters: OperationContract,
    options?: ApiOperationCreateOrUpdateOptionalParams,
  ): Promise<ApiOperationCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        operationId,
        parameters,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Updates the details of the operation in the API specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API Management
   *                    service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters API Operation Update parameters.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    operationId: string,
    ifMatch: string,
    parameters: OperationUpdateContract,
    options?: ApiOperationUpdateOptionalParams,
  ): Promise<ApiOperationUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        operationId,
        ifMatch,
        parameters,
        options,
      },
      updateOperationSpec,
    );
  }

  /**
   * Deletes the specified operation in the API.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API Management
   *                    service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    operationId: string,
    ifMatch: string,
    options?: ApiOperationDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, operationId, ifMatch, options },
      deleteOperationSpec,
    );
  }

  /**
   * ListByApiNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param nextLink The nextLink from the previous successful call to the ListByApi method.
   * @param options The options parameters.
   */
  private _listByApiNext(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    nextLink: string,
    options?: ApiOperationListByApiNextOptionalParams,
  ): Promise<ApiOperationListByApiNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, nextLink, options },
      listByApiNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByApiOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.tags,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getEntityTagOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.ApiOperationGetEntityTagHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId,
    Parameters.operationId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationContract,
      headersMapper: Mappers.ApiOperationGetHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId,
    Parameters.operationId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.OperationContract,
      headersMapper: Mappers.ApiOperationCreateOrUpdateHeaders,
    },
    201: {
      bodyMapper: Mappers.OperationContract,
      headersMapper: Mappers.ApiOperationCreateOrUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId,
    Parameters.operationId,
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch,
  ],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.OperationContract,
      headersMapper: Mappers.ApiOperationUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId,
    Parameters.operationId,
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch1,
  ],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/operations/{operationId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId,
    Parameters.operationId,
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer,
};
const listByApiNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.apiId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
