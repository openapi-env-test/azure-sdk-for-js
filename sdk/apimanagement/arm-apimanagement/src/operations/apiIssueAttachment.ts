/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ApiIssueAttachment } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  IssueAttachmentContract,
  ApiIssueAttachmentListByServiceNextOptionalParams,
  ApiIssueAttachmentListByServiceOptionalParams,
  ApiIssueAttachmentListByServiceResponse,
  ApiIssueAttachmentGetEntityTagOptionalParams,
  ApiIssueAttachmentGetEntityTagResponse,
  ApiIssueAttachmentGetOptionalParams,
  ApiIssueAttachmentGetResponse,
  ApiIssueAttachmentCreateOrUpdateOptionalParams,
  ApiIssueAttachmentCreateOrUpdateResponse,
  ApiIssueAttachmentDeleteOptionalParams,
  ApiIssueAttachmentListByServiceNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ApiIssueAttachment operations. */
export class ApiIssueAttachmentImpl implements ApiIssueAttachment {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class ApiIssueAttachment class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists all attachments for the Issue associated with the specified API.
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
    options?: ApiIssueAttachmentListByServiceOptionalParams,
  ): PagedAsyncIterableIterator<IssueAttachmentContract> {
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
    options?: ApiIssueAttachmentListByServiceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<IssueAttachmentContract[]> {
    let result: ApiIssueAttachmentListByServiceResponse;
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
    options?: ApiIssueAttachmentListByServiceOptionalParams,
  ): AsyncIterableIterator<IssueAttachmentContract> {
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
   * Lists all attachments for the Issue associated with the specified API.
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
    options?: ApiIssueAttachmentListByServiceOptionalParams,
  ): Promise<ApiIssueAttachmentListByServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, issueId, options },
      listByServiceOperationSpec,
    );
  }

  /**
   * Gets the entity state (Etag) version of the issue Attachment for an API specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param attachmentId Attachment identifier within an Issue. Must be unique in the current Issue.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    issueId: string,
    attachmentId: string,
    options?: ApiIssueAttachmentGetEntityTagOptionalParams,
  ): Promise<ApiIssueAttachmentGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, issueId, attachmentId, options },
      getEntityTagOperationSpec,
    );
  }

  /**
   * Gets the details of the issue Attachment for an API specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param attachmentId Attachment identifier within an Issue. Must be unique in the current Issue.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    issueId: string,
    attachmentId: string,
    options?: ApiIssueAttachmentGetOptionalParams,
  ): Promise<ApiIssueAttachmentGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, issueId, attachmentId, options },
      getOperationSpec,
    );
  }

  /**
   * Creates a new Attachment for the Issue in an API or updates an existing one.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param attachmentId Attachment identifier within an Issue. Must be unique in the current Issue.
   * @param parameters Create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    issueId: string,
    attachmentId: string,
    parameters: IssueAttachmentContract,
    options?: ApiIssueAttachmentCreateOrUpdateOptionalParams,
  ): Promise<ApiIssueAttachmentCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        issueId,
        attachmentId,
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
   * @param attachmentId Attachment identifier within an Issue. Must be unique in the current Issue.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    issueId: string,
    attachmentId: string,
    ifMatch: string,
    options?: ApiIssueAttachmentDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        issueId,
        attachmentId,
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
    options?: ApiIssueAttachmentListByServiceNextOptionalParams,
  ): Promise<ApiIssueAttachmentListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, issueId, nextLink, options },
      listByServiceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServiceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/attachments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IssueAttachmentCollection,
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
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/attachments/{attachmentId}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.ApiIssueAttachmentGetEntityTagHeaders,
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
    Parameters.attachmentId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/attachments/{attachmentId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IssueAttachmentContract,
      headersMapper: Mappers.ApiIssueAttachmentGetHeaders,
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
    Parameters.attachmentId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/attachments/{attachmentId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.IssueAttachmentContract,
      headersMapper: Mappers.ApiIssueAttachmentCreateOrUpdateHeaders,
    },
    201: {
      bodyMapper: Mappers.IssueAttachmentContract,
      headersMapper: Mappers.ApiIssueAttachmentCreateOrUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters14,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId1,
    Parameters.issueId,
    Parameters.attachmentId,
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
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/issues/{issueId}/attachments/{attachmentId}",
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
    Parameters.attachmentId,
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer,
};
const listByServiceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IssueAttachmentCollection,
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
