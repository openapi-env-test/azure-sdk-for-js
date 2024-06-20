/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Extensions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AgriFoodMgmtClient } from "../agriFoodMgmtClient";
import {
  Extension,
  ExtensionsListByDataManagerForAgricultureNextOptionalParams,
  ExtensionsListByDataManagerForAgricultureOptionalParams,
  ExtensionsListByDataManagerForAgricultureResponse,
  ExtensionsCreateOrUpdateOptionalParams,
  ExtensionsCreateOrUpdateResponse,
  ExtensionsGetOptionalParams,
  ExtensionsGetResponse,
  ExtensionsDeleteOptionalParams,
  ExtensionsListByDataManagerForAgricultureNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Extensions operations. */
export class ExtensionsImpl implements Extensions {
  private readonly client: AgriFoodMgmtClient;

  /**
   * Initialize a new instance of the class Extensions class.
   * @param client Reference to the service client
   */
  constructor(client: AgriFoodMgmtClient) {
    this.client = client;
  }

  /**
   * Get installed extensions details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataManagerForAgricultureResourceName DataManagerForAgriculture resource name.
   * @param options The options parameters.
   */
  public listByDataManagerForAgriculture(
    resourceGroupName: string,
    dataManagerForAgricultureResourceName: string,
    options?: ExtensionsListByDataManagerForAgricultureOptionalParams,
  ): PagedAsyncIterableIterator<Extension> {
    const iter = this.listByDataManagerForAgriculturePagingAll(
      resourceGroupName,
      dataManagerForAgricultureResourceName,
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
        return this.listByDataManagerForAgriculturePagingPage(
          resourceGroupName,
          dataManagerForAgricultureResourceName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByDataManagerForAgriculturePagingPage(
    resourceGroupName: string,
    dataManagerForAgricultureResourceName: string,
    options?: ExtensionsListByDataManagerForAgricultureOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Extension[]> {
    let result: ExtensionsListByDataManagerForAgricultureResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByDataManagerForAgriculture(
        resourceGroupName,
        dataManagerForAgricultureResourceName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByDataManagerForAgricultureNext(
        resourceGroupName,
        dataManagerForAgricultureResourceName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByDataManagerForAgriculturePagingAll(
    resourceGroupName: string,
    dataManagerForAgricultureResourceName: string,
    options?: ExtensionsListByDataManagerForAgricultureOptionalParams,
  ): AsyncIterableIterator<Extension> {
    for await (const page of this.listByDataManagerForAgriculturePagingPage(
      resourceGroupName,
      dataManagerForAgricultureResourceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Install or Update extension. Additional Api Properties are merged patch and if the extension is
   * updated to a new version then the obsolete entries will be auto deleted from Additional Api
   * Properties.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataManagerForAgricultureResourceName DataManagerForAgriculture resource name.
   * @param extensionId Id of extension resource.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    dataManagerForAgricultureResourceName: string,
    extensionId: string,
    options?: ExtensionsCreateOrUpdateOptionalParams,
  ): Promise<ExtensionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        dataManagerForAgricultureResourceName,
        extensionId,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Get installed extension details by extension id.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataManagerForAgricultureResourceName DataManagerForAgriculture resource name.
   * @param extensionId Id of extension resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    dataManagerForAgricultureResourceName: string,
    extensionId: string,
    options?: ExtensionsGetOptionalParams,
  ): Promise<ExtensionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        dataManagerForAgricultureResourceName,
        extensionId,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Uninstall extension.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataManagerForAgricultureResourceName DataManagerForAgriculture resource name.
   * @param extensionId Id of extension resource.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    dataManagerForAgricultureResourceName: string,
    extensionId: string,
    options?: ExtensionsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        dataManagerForAgricultureResourceName,
        extensionId,
        options,
      },
      deleteOperationSpec,
    );
  }

  /**
   * Get installed extensions details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataManagerForAgricultureResourceName DataManagerForAgriculture resource name.
   * @param options The options parameters.
   */
  private _listByDataManagerForAgriculture(
    resourceGroupName: string,
    dataManagerForAgricultureResourceName: string,
    options?: ExtensionsListByDataManagerForAgricultureOptionalParams,
  ): Promise<ExtensionsListByDataManagerForAgricultureResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dataManagerForAgricultureResourceName, options },
      listByDataManagerForAgricultureOperationSpec,
    );
  }

  /**
   * ListByDataManagerForAgricultureNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataManagerForAgricultureResourceName DataManagerForAgriculture resource name.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListByDataManagerForAgriculture method.
   * @param options The options parameters.
   */
  private _listByDataManagerForAgricultureNext(
    resourceGroupName: string,
    dataManagerForAgricultureResourceName: string,
    nextLink: string,
    options?: ExtensionsListByDataManagerForAgricultureNextOptionalParams,
  ): Promise<ExtensionsListByDataManagerForAgricultureNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        dataManagerForAgricultureResourceName,
        nextLink,
        options,
      },
      listByDataManagerForAgricultureNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AgFoodPlatform/farmBeats/{dataManagerForAgricultureResourceName}/extensions/{extensionId}",
  httpMethod: "PUT",
  responses: {
    201: {
      bodyMapper: Mappers.Extension,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.requestBody,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dataManagerForAgricultureResourceName,
    Parameters.extensionId,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AgFoodPlatform/farmBeats/{dataManagerForAgricultureResourceName}/extensions/{extensionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Extension,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dataManagerForAgricultureResourceName,
    Parameters.extensionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AgFoodPlatform/farmBeats/{dataManagerForAgricultureResourceName}/extensions/{extensionId}",
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
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dataManagerForAgricultureResourceName,
    Parameters.extensionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByDataManagerForAgricultureOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AgFoodPlatform/farmBeats/{dataManagerForAgricultureResourceName}/extensions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExtensionListResponse,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.maxPageSize,
    Parameters.skipToken,
    Parameters.extensionCategories,
    Parameters.extensionIds,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dataManagerForAgricultureResourceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByDataManagerForAgricultureNextOperationSpec: coreClient.OperationSpec =
  {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
      200: {
        bodyMapper: Mappers.ExtensionListResponse,
      },
      default: {
        bodyMapper: Mappers.ErrorResponse,
      },
    },
    urlParameters: [
      Parameters.$host,
      Parameters.subscriptionId,
      Parameters.resourceGroupName,
      Parameters.dataManagerForAgricultureResourceName,
      Parameters.nextLink,
    ],
    headerParameters: [Parameters.accept],
    serializer,
  };
