/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ApiIssueComment } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  IssueCommentContract,
  ApiIssueCommentListByServiceNextOptionalParams,
  ApiIssueCommentListByServiceOptionalParams,
  ApiIssueCommentListByServiceResponse,
  ApiIssueCommentGetEntityTagOptionalParams,
  ApiIssueCommentGetEntityTagResponse,
  ApiIssueCommentGetOptionalParams,
  ApiIssueCommentGetResponse,
  ApiIssueCommentCreateOrUpdateOptionalParams,
  ApiIssueCommentCreateOrUpdateResponse,
  ApiIssueCommentDeleteOptionalParams,
  ApiIssueCommentListByServiceNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ApiIssueComment operations. */
export class ApiIssueCommentImpl implements ApiIssueComment {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class ApiIssueComment class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists all comments for the Issue associated with the specified API.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  public listByService(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    issueId: string,
    options?: ApiIssueCommentListByServiceOptionalParams,
  ): PagedAsyncIterableIterator<IssueCommentContract> {
    const iter = this.listByServicePagingAll(
      resourceGroupName,
      serviceName,
      apiId,
      issueId,
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
        return this.listByServicePagingPage(
          resourceGroupName,
          serviceName,
          apiId,
          issueId,
          options,
          settings,
        );
      },
    };
  }

  private async *listByServicePagingPage(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    issueId: string,
    options?: ApiIssueCommentListByServiceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<IssueCommentContract[]> {
    let result: ApiIssueCommentListByServiceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByService(
        resourceGroupName,
        serviceName,
        apiId,
        issueId,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByServiceNext(
        resourceGroupName,
        serviceName,
        apiId,
        issueId,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByServicePagingAll(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    issueId: string,
    options?: ApiIssueCommentListByServiceOptionalParams,
  ): AsyncIterableIterator<IssueCommentContract> {
    for await (const page of this.listByServicePagingPage(
      resourceGroupName,
      serviceName,
      apiId,
      issueId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists all comments for the Issue associated with the specified API.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  private _listByService(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    issueId: string,
    options?: ApiIssueCommentListByServiceOptionalParams,
  ): Promise<ApiIssueCommentListByServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, issueId, options },
      listByServiceOperationSpec,
    );
  }

  /**
   * Gets the entity state (Etag) version of the issue Comment for an API specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param commentId Comment identifier within an Issue. Must be unique in the current Issue.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    issueId: string,
    commentId: string,
    options?: ApiIssueCommentGetEntityTagOptionalParams,
  ): Promise<ApiIssueCommentGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, issueId, commentId, options },
      getEntityTagOperationSpec,
    );
  }

  /**
   * Gets the details of the issue Comment for an API specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param commentId Comment identifier within an Issue. Must be unique in the current Issue.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    issueId: string,
    commentId: string,
    options?: ApiIssueCommentGetOptionalParams,
  ): Promise<ApiIssueCommentGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, issueId, commentId, options },
      getOperationSpec,
    );
  }

  /**
   * Creates a new Comment for the Issue in an API or updates an existing one.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param commentId Comment identifier within an Issue. Must be unique in the current Issue.
   * @param parameters Create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    issueId: string,
    commentId: string,
    parameters: IssueCommentContract,
    options?: ApiIssueCommentCreateOrUpdateOptionalParams,
  ): Promise<ApiIssueCommentCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        issueId,
        commentId,
        parameters,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes the specified comment from an Issue.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param commentId Comment identifier within an Issue. Must be unique in the current Issue.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    issueId: string,
    commentId: string,
    ifMatch: string,
    options?: ApiIssueCommentDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        issueId,
        commentId,
        ifMatch,
        options,
      },
      deleteOperationSpec,
    );
  }

  /**
   * ListByServiceNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param nextLink The nextLink from the previous successful call to the ListByService method.
   * @param options The options parameters.
   */
  private _listByServiceNext(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    issueId: string,
    nextLink: string,
    options?: ApiIssueCommentListByServiceNextOptionalParams,
  ): Promise<ApiIssueCommentListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, issueId, nextLink, options },
      listByServiceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServiceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/comments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IssueCommentCollection,
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
    Parameters.apiId1,
    Parameters.issueId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getEntityTagOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/comments/{commentId}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.ApiIssueCommentGetEntityTagHeaders,
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
    Parameters.apiId1,
    Parameters.issueId,
    Parameters.commentId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/comments/{commentId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IssueCommentContract,
      headersMapper: Mappers.ApiIssueCommentGetHeaders,
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
    Parameters.apiId1,
    Parameters.issueId,
    Parameters.commentId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/comments/{commentId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.IssueCommentContract,
      headersMapper: Mappers.ApiIssueCommentCreateOrUpdateHeaders,
    },
    201: {
      bodyMapper: Mappers.IssueCommentContract,
      headersMapper: Mappers.ApiIssueCommentCreateOrUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters13,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId1,
    Parameters.issueId,
    Parameters.commentId,
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch,
  ],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/comments/{commentId}",
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
    Parameters.apiId1,
    Parameters.issueId,
    Parameters.commentId,
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer,
};
const listByServiceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IssueCommentCollection,
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
    Parameters.apiId1,
    Parameters.issueId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
