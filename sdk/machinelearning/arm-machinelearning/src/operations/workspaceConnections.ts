/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { WorkspaceConnections } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMachineLearningWorkspaces } from "../azureMachineLearningWorkspaces";
import {
  WorkspaceConnectionPropertiesV2BasicResource,
  WorkspaceConnectionsListNextOptionalParams,
  WorkspaceConnectionsListOptionalParams,
  WorkspaceConnectionsCreateOptionalParams,
  WorkspaceConnectionsCreateResponse,
  WorkspaceConnectionsGetOptionalParams,
  WorkspaceConnectionsGetResponse,
  WorkspaceConnectionsDeleteOptionalParams,
  WorkspaceConnectionsListResponse,
  WorkspaceConnectionsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing WorkspaceConnections operations. */
export class WorkspaceConnectionsImpl implements WorkspaceConnections {
  private readonly client: AzureMachineLearningWorkspaces;

  /**
   * Initialize a new instance of the class WorkspaceConnections class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMachineLearningWorkspaces) {
    this.client = client;
  }

  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceConnectionsListOptionalParams
  ): PagedAsyncIterableIterator<WorkspaceConnectionPropertiesV2BasicResource> {
    const iter = this.listPagingAll(resourceGroupName, workspaceName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, workspaceName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceConnectionsListOptionalParams
  ): AsyncIterableIterator<WorkspaceConnectionPropertiesV2BasicResource[]> {
    let result = await this._list(resourceGroupName, workspaceName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        workspaceName,
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
    options?: WorkspaceConnectionsListOptionalParams
  ): AsyncIterableIterator<WorkspaceConnectionPropertiesV2BasicResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param connectionName Friendly name of the workspace connection
   * @param parameters The object for creating or updating a new workspace connection
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    workspaceName: string,
    connectionName: string,
    parameters: WorkspaceConnectionPropertiesV2BasicResource,
    options?: WorkspaceConnectionsCreateOptionalParams
  ): Promise<WorkspaceConnectionsCreateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, connectionName, parameters, options },
      createOperationSpec
    );
  }

  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param connectionName Friendly name of the workspace connection
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    connectionName: string,
    options?: WorkspaceConnectionsGetOptionalParams
  ): Promise<WorkspaceConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, connectionName, options },
      getOperationSpec
    );
  }

  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param connectionName Friendly name of the workspace connection
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    connectionName: string,
    options?: WorkspaceConnectionsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, connectionName, options },
      deleteOperationSpec
    );
  }

  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceConnectionsListOptionalParams
  ): Promise<WorkspaceConnectionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    workspaceName: string,
    nextLink: string,
    options?: WorkspaceConnectionsListNextOptionalParams
  ): Promise<WorkspaceConnectionsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/connections/{connectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceConnectionPropertiesV2BasicResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.connectionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/connections/{connectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceConnectionPropertiesV2BasicResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.connectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/connections/{connectionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.connectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/connections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.WorkspaceConnectionPropertiesV2BasicResourceArmPaginatedResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.target,
    Parameters.category
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.WorkspaceConnectionPropertiesV2BasicResourceArmPaginatedResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.target,
    Parameters.category
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
