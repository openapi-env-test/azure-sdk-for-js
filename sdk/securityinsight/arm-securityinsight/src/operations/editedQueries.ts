/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { EditedQueries } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityInsights } from "../securityInsights";
import {
  EditedQuery,
  EditedQueriesListNextOptionalParams,
  EditedQueriesListOptionalParams,
  EditedQueriesListResponse,
  EditedQueriesGetOptionalParams,
  EditedQueriesGetResponse,
  EditedQueriesDeleteOptionalParams,
  EditedQueriesCreateOrUpdateOptionalParams,
  EditedQueriesCreateOrUpdateResponse,
  EditedQueriesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing EditedQueries operations. */
export class EditedQueriesImpl implements EditedQueries {
  private readonly client: SecurityInsights;

  /**
   * Initialize a new instance of the class EditedQueries class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityInsights) {
    this.client = client;
  }

  /**
   * Gets all edited queries.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param queryId Query Id
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    queryId: string,
    options?: EditedQueriesListOptionalParams
  ): PagedAsyncIterableIterator<EditedQuery> {
    const iter = this.listPagingAll(
      resourceGroupName,
      workspaceName,
      queryId,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(
          resourceGroupName,
          workspaceName,
          queryId,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    queryId: string,
    options?: EditedQueriesListOptionalParams
  ): AsyncIterableIterator<EditedQuery[]> {
    let result = await this._list(
      resourceGroupName,
      workspaceName,
      queryId,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        workspaceName,
        queryId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    queryId: string,
    options?: EditedQueriesListOptionalParams
  ): AsyncIterableIterator<EditedQuery> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      queryId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all edited queries.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param queryId Query Id
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    queryId: string,
    options?: EditedQueriesListOptionalParams
  ): Promise<EditedQueriesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, queryId, options },
      listOperationSpec
    );
  }

  /**
   * Gets an edited query
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param queryId Query Id
   * @param editedQueryId Edited Query Id (GUID)
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    queryId: string,
    editedQueryId: string,
    options?: EditedQueriesGetOptionalParams
  ): Promise<EditedQueriesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, queryId, editedQueryId, options },
      getOperationSpec
    );
  }

  /**
   * Delete an edited queries.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param queryId Query Id
   * @param editedQueryId Edited Query Id (GUID)
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    queryId: string,
    editedQueryId: string,
    options?: EditedQueriesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, queryId, editedQueryId, options },
      deleteOperationSpec
    );
  }

  /**
   * Creates or updates an edited query.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param queryId Query Id
   * @param editedQueryId Edited Query Id (GUID)
   * @param editedQuery The edited query
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    queryId: string,
    editedQueryId: string,
    editedQuery: EditedQuery,
    options?: EditedQueriesCreateOrUpdateOptionalParams
  ): Promise<EditedQueriesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        queryId,
        editedQueryId,
        editedQuery,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param queryId Query Id
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    workspaceName: string,
    queryId: string,
    nextLink: string,
    options?: EditedQueriesListNextOptionalParams
  ): Promise<EditedQueriesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, queryId, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/assistedQueries/{queryId}/editedQueries",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EditedQueryList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.queryId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/assistedQueries/{queryId}/editedQueries/{editedQueryId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EditedQuery
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.queryId,
    Parameters.editedQueryId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/assistedQueries/{queryId}/editedQueries/{editedQueryId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.queryId,
    Parameters.editedQueryId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/assistedQueries/{queryId}/editedQueries/{editedQueryId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.EditedQuery
    },
    201: {
      bodyMapper: Mappers.EditedQuery
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.editedQuery,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.queryId,
    Parameters.editedQueryId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EditedQueryList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink,
    Parameters.queryId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
