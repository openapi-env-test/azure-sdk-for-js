/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ApiManagementSkus } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  ApiManagementSku,
  ApiManagementSkusListNextOptionalParams,
  ApiManagementSkusListOptionalParams,
  ApiManagementSkusListResponse,
  ApiManagementSkusListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ApiManagementSkus operations. */
export class ApiManagementSkusImpl implements ApiManagementSkus {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class ApiManagementSkus class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Gets the list of Microsoft.ApiManagement SKUs available for your Subscription.
   * @param options The options parameters.
   */
  public list(
    options?: ApiManagementSkusListOptionalParams
  ): PagedAsyncIterableIterator<ApiManagementSku> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: ApiManagementSkusListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ApiManagementSku[]> {
    let result: ApiManagementSkusListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: ApiManagementSkusListOptionalParams
  ): AsyncIterableIterator<ApiManagementSku> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets the list of Microsoft.ApiManagement SKUs available for your Subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: ApiManagementSkusListOptionalParams
  ): Promise<ApiManagementSkusListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ApiManagementSkusListNextOptionalParams
  ): Promise<ApiManagementSkusListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.ApiManagement/skus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiManagementSkusResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiManagementSkusResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
