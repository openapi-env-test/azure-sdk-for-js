/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ModelVersions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMachineLearningWorkspaces } from "../azureMachineLearningWorkspaces";
import {
  ModelVersion,
  ModelVersionsListNextOptionalParams,
  ModelVersionsListOptionalParams,
  ModelVersionsListResponse,
  ModelVersionsDeleteOptionalParams,
  ModelVersionsGetOptionalParams,
  ModelVersionsGetResponse,
  ModelVersionsCreateOrUpdateOptionalParams,
  ModelVersionsCreateOrUpdateResponse,
  ModelVersionsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ModelVersions operations. */
export class ModelVersionsImpl implements ModelVersions {
  private readonly client: AzureMachineLearningWorkspaces;

  /**
   * Initialize a new instance of the class ModelVersions class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMachineLearningWorkspaces) {
    this.client = client;
  }

  /**
   * List model versions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Model name. This is case-sensitive.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: ModelVersionsListOptionalParams
  ): PagedAsyncIterableIterator<ModelVersion> {
    const iter = this.listPagingAll(
      resourceGroupName,
      workspaceName,
      name,
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
          name,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: ModelVersionsListOptionalParams
  ): AsyncIterableIterator<ModelVersion[]> {
    let result = await this._list(
      resourceGroupName,
      workspaceName,
      name,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        workspaceName,
        name,
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
    name: string,
    options?: ModelVersionsListOptionalParams
  ): AsyncIterableIterator<ModelVersion> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      name,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List model versions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Model name. This is case-sensitive.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: ModelVersionsListOptionalParams
  ): Promise<ModelVersionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, name, options },
      listOperationSpec
    );
  }

  /**
   * Delete version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name. This is case-sensitive.
   * @param version Version identifier. This is case-sensitive.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    options?: ModelVersionsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, name, version, options },
      deleteOperationSpec
    );
  }

  /**
   * Get version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name. This is case-sensitive.
   * @param version Version identifier. This is case-sensitive.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    options?: ModelVersionsGetOptionalParams
  ): Promise<ModelVersionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, name, version, options },
      getOperationSpec
    );
  }

  /**
   * Create or update version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name. This is case-sensitive.
   * @param version Version identifier. This is case-sensitive.
   * @param body Version entity to create or update.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    body: ModelVersion,
    options?: ModelVersionsCreateOrUpdateOptionalParams
  ): Promise<ModelVersionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, name, version, body, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Model name. This is case-sensitive.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    nextLink: string,
    options?: ModelVersionsListNextOptionalParams
  ): Promise<ModelVersionsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, name, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/models/{name}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ModelVersionResourceArmPaginatedResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skip,
    Parameters.orderBy,
    Parameters.top,
    Parameters.listViewType,
    Parameters.version1,
    Parameters.description,
    Parameters.offset,
    Parameters.tags1,
    Parameters.properties1,
    Parameters.feed
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/models/{name}/versions/{version}",
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
    Parameters.name,
    Parameters.version
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/models/{name}/versions/{version}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ModelVersion
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
    Parameters.name,
    Parameters.version
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/models/{name}/versions/{version}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ModelVersion
    },
    201: {
      bodyMapper: Mappers.ModelVersion
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body17,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.name1,
    Parameters.version
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
      bodyMapper: Mappers.ModelVersionResourceArmPaginatedResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skip,
    Parameters.orderBy,
    Parameters.top,
    Parameters.listViewType,
    Parameters.version1,
    Parameters.description,
    Parameters.offset,
    Parameters.tags1,
    Parameters.properties1,
    Parameters.feed
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
