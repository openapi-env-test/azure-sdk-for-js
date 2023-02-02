/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Files } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataMigrationManagementClient } from "../dataMigrationManagementClient";
import {
  ProjectFile,
  FilesListNextOptionalParams,
  FilesListOptionalParams,
  FilesListResponse,
  FilesGetOptionalParams,
  FilesGetResponse,
  FilesCreateOrUpdateOptionalParams,
  FilesCreateOrUpdateResponse,
  FilesDeleteOptionalParams,
  FilesUpdateOptionalParams,
  FilesUpdateResponse,
  FilesReadOptionalParams,
  FilesReadResponse,
  FilesReadWriteOptionalParams,
  FilesReadWriteResponse,
  FilesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Files operations. */
export class FilesImpl implements Files {
  private readonly client: DataMigrationManagementClient;

  /**
   * Initialize a new instance of the class Files class.
   * @param client Reference to the service client
   */
  constructor(client: DataMigrationManagementClient) {
    this.client = client;
  }

  /**
   * The project resource is a nested resource representing a stored migration project. This method
   * returns a list of files owned by a project resource.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param options The options parameters.
   */
  public list(
    groupName: string,
    serviceName: string,
    projectName: string,
    options?: FilesListOptionalParams
  ): PagedAsyncIterableIterator<ProjectFile> {
    const iter = this.listPagingAll(
      groupName,
      serviceName,
      projectName,
      options
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
        return this.listPagingPage(
          groupName,
          serviceName,
          projectName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    groupName: string,
    serviceName: string,
    projectName: string,
    options?: FilesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ProjectFile[]> {
    let result: FilesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(groupName, serviceName, projectName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        groupName,
        serviceName,
        projectName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    groupName: string,
    serviceName: string,
    projectName: string,
    options?: FilesListOptionalParams
  ): AsyncIterableIterator<ProjectFile> {
    for await (const page of this.listPagingPage(
      groupName,
      serviceName,
      projectName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * The project resource is a nested resource representing a stored migration project. This method
   * returns a list of files owned by a project resource.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param options The options parameters.
   */
  private _list(
    groupName: string,
    serviceName: string,
    projectName: string,
    options?: FilesListOptionalParams
  ): Promise<FilesListResponse> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, projectName, options },
      listOperationSpec
    );
  }

  /**
   * The files resource is a nested, proxy-only resource representing a file stored under the project
   * resource. This method retrieves information about a file.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param options The options parameters.
   */
  get(
    groupName: string,
    serviceName: string,
    projectName: string,
    fileName: string,
    options?: FilesGetOptionalParams
  ): Promise<FilesGetResponse> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, projectName, fileName, options },
      getOperationSpec
    );
  }

  /**
   * The PUT method creates a new file or updates an existing one.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param parameters Information about the file
   * @param options The options parameters.
   */
  createOrUpdate(
    groupName: string,
    serviceName: string,
    projectName: string,
    fileName: string,
    parameters: ProjectFile,
    options?: FilesCreateOrUpdateOptionalParams
  ): Promise<FilesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, projectName, fileName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * This method deletes a file.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param options The options parameters.
   */
  delete(
    groupName: string,
    serviceName: string,
    projectName: string,
    fileName: string,
    options?: FilesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, projectName, fileName, options },
      deleteOperationSpec
    );
  }

  /**
   * This method updates an existing file.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param parameters Information about the file
   * @param options The options parameters.
   */
  update(
    groupName: string,
    serviceName: string,
    projectName: string,
    fileName: string,
    parameters: ProjectFile,
    options?: FilesUpdateOptionalParams
  ): Promise<FilesUpdateResponse> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, projectName, fileName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * This method is used for requesting storage information using which contents of the file can be
   * downloaded.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param options The options parameters.
   */
  read(
    groupName: string,
    serviceName: string,
    projectName: string,
    fileName: string,
    options?: FilesReadOptionalParams
  ): Promise<FilesReadResponse> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, projectName, fileName, options },
      readOperationSpec
    );
  }

  /**
   * This method is used for requesting information for reading and writing the file content.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param fileName Name of the File
   * @param options The options parameters.
   */
  readWrite(
    groupName: string,
    serviceName: string,
    projectName: string,
    fileName: string,
    options?: FilesReadWriteOptionalParams
  ): Promise<FilesReadWriteResponse> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, projectName, fileName, options },
      readWriteOperationSpec
    );
  }

  /**
   * ListNext
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    groupName: string,
    serviceName: string,
    projectName: string,
    nextLink: string,
    options?: FilesListNextOptionalParams
  ): Promise<FilesListNextResponse> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, projectName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/files",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FileList
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/files/{fileName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProjectFile
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName,
    Parameters.fileName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/files/{fileName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ProjectFile
    },
    201: {
      bodyMapper: Mappers.ProjectFile
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  requestBody: Parameters.parameters13,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName,
    Parameters.fileName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/files/{fileName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName,
    Parameters.fileName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/files/{fileName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ProjectFile
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  requestBody: Parameters.parameters13,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName,
    Parameters.fileName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const readOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/files/{fileName}/read",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.FileStorageInfo
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName,
    Parameters.fileName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const readWriteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/files/{fileName}/readwrite",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.FileStorageInfo
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName,
    Parameters.fileName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FileList
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
