/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { WorkspaceTagOperationLink } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  TagOperationLinkContract,
  WorkspaceTagOperationLinkListByProductNextOptionalParams,
  WorkspaceTagOperationLinkListByProductOptionalParams,
  WorkspaceTagOperationLinkListByProductResponse,
  WorkspaceTagOperationLinkGetOptionalParams,
  WorkspaceTagOperationLinkGetResponse,
  WorkspaceTagOperationLinkCreateOrUpdateOptionalParams,
  WorkspaceTagOperationLinkCreateOrUpdateResponse,
  WorkspaceTagOperationLinkDeleteOptionalParams,
  WorkspaceTagOperationLinkListByProductNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing WorkspaceTagOperationLink operations. */
export class WorkspaceTagOperationLinkImpl
  implements WorkspaceTagOperationLink
{
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class WorkspaceTagOperationLink class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists a collection of the operation links associated with a tag.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param tagId Tag identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  public listByProduct(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    tagId: string,
    options?: WorkspaceTagOperationLinkListByProductOptionalParams,
  ): PagedAsyncIterableIterator<TagOperationLinkContract> {
    const iter = this.listByProductPagingAll(
      resourceGroupName,
      serviceName,
      workspaceId,
      tagId,
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
        return this.listByProductPagingPage(
          resourceGroupName,
          serviceName,
          workspaceId,
          tagId,
          options,
          settings,
        );
      },
    };
  }

  private async *listByProductPagingPage(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    tagId: string,
    options?: WorkspaceTagOperationLinkListByProductOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<TagOperationLinkContract[]> {
    let result: WorkspaceTagOperationLinkListByProductResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByProduct(
        resourceGroupName,
        serviceName,
        workspaceId,
        tagId,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByProductNext(
        resourceGroupName,
        serviceName,
        workspaceId,
        tagId,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByProductPagingAll(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    tagId: string,
    options?: WorkspaceTagOperationLinkListByProductOptionalParams,
  ): AsyncIterableIterator<TagOperationLinkContract> {
    for await (const page of this.listByProductPagingPage(
      resourceGroupName,
      serviceName,
      workspaceId,
      tagId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists a collection of the operation links associated with a tag.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param tagId Tag identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  private _listByProduct(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    tagId: string,
    options?: WorkspaceTagOperationLinkListByProductOptionalParams,
  ): Promise<WorkspaceTagOperationLinkListByProductResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, tagId, options },
      listByProductOperationSpec,
    );
  }

  /**
   * Gets the operation link for the tag.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param tagId Tag identifier. Must be unique in the current API Management service instance.
   * @param operationLinkId Tag-operation link identifier. Must be unique in the current API Management
   *                        service instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    tagId: string,
    operationLinkId: string,
    options?: WorkspaceTagOperationLinkGetOptionalParams,
  ): Promise<WorkspaceTagOperationLinkGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        tagId,
        operationLinkId,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Adds an operation to the specified tag via link.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param tagId Tag identifier. Must be unique in the current API Management service instance.
   * @param operationLinkId Tag-operation link identifier. Must be unique in the current API Management
   *                        service instance.
   * @param parameters Create or update parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    tagId: string,
    operationLinkId: string,
    parameters: TagOperationLinkContract,
    options?: WorkspaceTagOperationLinkCreateOrUpdateOptionalParams,
  ): Promise<WorkspaceTagOperationLinkCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        tagId,
        operationLinkId,
        parameters,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes the specified operation from the specified tag.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param tagId Tag identifier. Must be unique in the current API Management service instance.
   * @param operationLinkId Tag-operation link identifier. Must be unique in the current API Management
   *                        service instance.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    tagId: string,
    operationLinkId: string,
    options?: WorkspaceTagOperationLinkDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        tagId,
        operationLinkId,
        options,
      },
      deleteOperationSpec,
    );
  }

  /**
   * ListByProductNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param tagId Tag identifier. Must be unique in the current API Management service instance.
   * @param nextLink The nextLink from the previous successful call to the ListByProduct method.
   * @param options The options parameters.
   */
  private _listByProductNext(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    tagId: string,
    nextLink: string,
    options?: WorkspaceTagOperationLinkListByProductNextOptionalParams,
  ): Promise<WorkspaceTagOperationLinkListByProductNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, tagId, nextLink, options },
      listByProductNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByProductOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/tags/{tagId}/operationLinks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TagOperationLinkCollection,
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
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.tagId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/tags/{tagId}/operationLinks/{operationLinkId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TagOperationLinkContract,
      headersMapper: Mappers.WorkspaceTagOperationLinkGetHeaders,
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
    Parameters.tagId,
    Parameters.operationLinkId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/tags/{tagId}/operationLinks/{operationLinkId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.TagOperationLinkContract,
    },
    201: {
      bodyMapper: Mappers.TagOperationLinkContract,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters79,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.tagId,
    Parameters.operationLinkId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/tags/{tagId}/operationLinks/{operationLinkId}",
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
    Parameters.tagId,
    Parameters.operationLinkId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByProductNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TagOperationLinkCollection,
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
    Parameters.tagId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
