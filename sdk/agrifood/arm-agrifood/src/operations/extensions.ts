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
import { AzureAgriFoodRPService } from "../azureAgriFoodRPService";
import {
  Extension,
  ExtensionsListByFarmBeatsNextOptionalParams,
  ExtensionsListByFarmBeatsOptionalParams,
  ExtensionsListByFarmBeatsResponse,
  ExtensionsCreateOptionalParams,
  ExtensionsCreateResponse,
  ExtensionsGetOptionalParams,
  ExtensionsGetResponse,
  ExtensionsUpdateOptionalParams,
  ExtensionsUpdateResponse,
  ExtensionsDeleteOptionalParams,
  ExtensionsListByFarmBeatsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Extensions operations. */
export class ExtensionsImpl implements Extensions {
  private readonly client: AzureAgriFoodRPService;

  /**
   * Initialize a new instance of the class Extensions class.
   * @param client Reference to the service client
   */
  constructor(client: AzureAgriFoodRPService) {
    this.client = client;
  }

  /**
   * Get installed extensions details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param options The options parameters.
   */
  public listByFarmBeats(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    options?: ExtensionsListByFarmBeatsOptionalParams
  ): PagedAsyncIterableIterator<Extension> {
    const iter = this.listByFarmBeatsPagingAll(
      resourceGroupName,
      farmBeatsResourceName,
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
        return this.listByFarmBeatsPagingPage(
          resourceGroupName,
          farmBeatsResourceName,
          options,
          settings
        );
      }
    };
  }

  private async *listByFarmBeatsPagingPage(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    options?: ExtensionsListByFarmBeatsOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Extension[]> {
    let result: ExtensionsListByFarmBeatsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByFarmBeats(
        resourceGroupName,
        farmBeatsResourceName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByFarmBeatsNext(
        resourceGroupName,
        farmBeatsResourceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByFarmBeatsPagingAll(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    options?: ExtensionsListByFarmBeatsOptionalParams
  ): AsyncIterableIterator<Extension> {
    for await (const page of this.listByFarmBeatsPagingPage(
      resourceGroupName,
      farmBeatsResourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Install extension.
   * @param extensionId Id of extension resource.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  create(
    extensionId: string,
    farmBeatsResourceName: string,
    resourceGroupName: string,
    options?: ExtensionsCreateOptionalParams
  ): Promise<ExtensionsCreateResponse> {
    return this.client.sendOperationRequest(
      { extensionId, farmBeatsResourceName, resourceGroupName, options },
      createOperationSpec
    );
  }

  /**
   * Get installed extension details by extension id.
   * @param extensionId Id of extension resource.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  get(
    extensionId: string,
    farmBeatsResourceName: string,
    resourceGroupName: string,
    options?: ExtensionsGetOptionalParams
  ): Promise<ExtensionsGetResponse> {
    return this.client.sendOperationRequest(
      { extensionId, farmBeatsResourceName, resourceGroupName, options },
      getOperationSpec
    );
  }

  /**
   * Upgrade to latest extension.
   * @param extensionId Id of extension resource.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  update(
    extensionId: string,
    farmBeatsResourceName: string,
    resourceGroupName: string,
    options?: ExtensionsUpdateOptionalParams
  ): Promise<ExtensionsUpdateResponse> {
    return this.client.sendOperationRequest(
      { extensionId, farmBeatsResourceName, resourceGroupName, options },
      updateOperationSpec
    );
  }

  /**
   * Uninstall extension.
   * @param extensionId Id of extension resource.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  delete(
    extensionId: string,
    farmBeatsResourceName: string,
    resourceGroupName: string,
    options?: ExtensionsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { extensionId, farmBeatsResourceName, resourceGroupName, options },
      deleteOperationSpec
    );
  }

  /**
   * Get installed extensions details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param options The options parameters.
   */
  private _listByFarmBeats(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    options?: ExtensionsListByFarmBeatsOptionalParams
  ): Promise<ExtensionsListByFarmBeatsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, farmBeatsResourceName, options },
      listByFarmBeatsOperationSpec
    );
  }

  /**
   * ListByFarmBeatsNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param nextLink The nextLink from the previous successful call to the ListByFarmBeats method.
   * @param options The options parameters.
   */
  private _listByFarmBeatsNext(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    nextLink: string,
    options?: ExtensionsListByFarmBeatsNextOptionalParams
  ): Promise<ExtensionsListByFarmBeatsNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, farmBeatsResourceName, nextLink, options },
      listByFarmBeatsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AgFoodPlatform/farmBeats/{farmBeatsResourceName}/extensions/{extensionId}",
  httpMethod: "PUT",
  responses: {
    201: {
      bodyMapper: Mappers.Extension
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.extensionId,
    Parameters.farmBeatsResourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AgFoodPlatform/farmBeats/{farmBeatsResourceName}/extensions/{extensionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Extension
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.extensionId,
    Parameters.farmBeatsResourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AgFoodPlatform/farmBeats/{farmBeatsResourceName}/extensions/{extensionId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Extension
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.extensionId,
    Parameters.farmBeatsResourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AgFoodPlatform/farmBeats/{farmBeatsResourceName}/extensions/{extensionId}",
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
    Parameters.extensionId,
    Parameters.farmBeatsResourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByFarmBeatsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AgFoodPlatform/farmBeats/{farmBeatsResourceName}/extensions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExtensionListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.extensionIds,
    Parameters.extensionCategories,
    Parameters.maxPageSize,
    Parameters.skipToken
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.farmBeatsResourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByFarmBeatsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExtensionListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.farmBeatsResourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
