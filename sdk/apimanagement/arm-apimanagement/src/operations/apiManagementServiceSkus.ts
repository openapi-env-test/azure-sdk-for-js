/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ApiManagementServiceSkus } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  ResourceSkuResult,
  ApiManagementServiceSkusListAvailableServiceSkusNextOptionalParams,
  ApiManagementServiceSkusListAvailableServiceSkusOptionalParams,
  ApiManagementServiceSkusListAvailableServiceSkusResponse,
  ApiManagementServiceSkusListAvailableServiceSkusNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ApiManagementServiceSkus operations. */
export class ApiManagementServiceSkusImpl implements ApiManagementServiceSkus {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class ApiManagementServiceSkus class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Gets all available SKU for a given API Management service
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  public listAvailableServiceSkus(
    resourceGroupName: string,
    serviceName: string,
    options?: ApiManagementServiceSkusListAvailableServiceSkusOptionalParams
  ): PagedAsyncIterableIterator<ResourceSkuResult> {
    const iter = this.listAvailableServiceSkusPagingAll(
      resourceGroupName,
      serviceName,
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
        return this.listAvailableServiceSkusPagingPage(
          resourceGroupName,
          serviceName,
          options,
          settings
        );
      }
    };
  }

  private async *listAvailableServiceSkusPagingPage(
    resourceGroupName: string,
    serviceName: string,
    options?: ApiManagementServiceSkusListAvailableServiceSkusOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ResourceSkuResult[]> {
    let result: ApiManagementServiceSkusListAvailableServiceSkusResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listAvailableServiceSkus(
        resourceGroupName,
        serviceName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listAvailableServiceSkusNext(
        resourceGroupName,
        serviceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listAvailableServiceSkusPagingAll(
    resourceGroupName: string,
    serviceName: string,
    options?: ApiManagementServiceSkusListAvailableServiceSkusOptionalParams
  ): AsyncIterableIterator<ResourceSkuResult> {
    for await (const page of this.listAvailableServiceSkusPagingPage(
      resourceGroupName,
      serviceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all available SKU for a given API Management service
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  private _listAvailableServiceSkus(
    resourceGroupName: string,
    serviceName: string,
    options?: ApiManagementServiceSkusListAvailableServiceSkusOptionalParams
  ): Promise<ApiManagementServiceSkusListAvailableServiceSkusResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options },
      listAvailableServiceSkusOperationSpec
    );
  }

  /**
   * ListAvailableServiceSkusNext
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param nextLink The nextLink from the previous successful call to the ListAvailableServiceSkus
   *                 method.
   * @param options The options parameters.
   */
  private _listAvailableServiceSkusNext(
    resourceGroupName: string,
    serviceName: string,
    nextLink: string,
    options?: ApiManagementServiceSkusListAvailableServiceSkusNextOptionalParams
  ): Promise<ApiManagementServiceSkusListAvailableServiceSkusNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, nextLink, options },
      listAvailableServiceSkusNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listAvailableServiceSkusOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/skus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceSkuResults
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAvailableServiceSkusNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceSkuResults
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
