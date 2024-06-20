/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ProductSubscriptions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  SubscriptionContract,
  ProductSubscriptionsListNextOptionalParams,
  ProductSubscriptionsListOptionalParams,
  ProductSubscriptionsListResponse,
  ProductSubscriptionsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ProductSubscriptions operations. */
export class ProductSubscriptionsImpl implements ProductSubscriptions {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class ProductSubscriptions class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists the collection of subscriptions to the specified product.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    options?: ProductSubscriptionsListOptionalParams,
  ): PagedAsyncIterableIterator<SubscriptionContract> {
    const iter = this.listPagingAll(
      resourceGroupName,
      serviceName,
      productId,
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
        return this.listPagingPage(
          resourceGroupName,
          serviceName,
          productId,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    options?: ProductSubscriptionsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<SubscriptionContract[]> {
    let result: ProductSubscriptionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        serviceName,
        productId,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        serviceName,
        productId,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    options?: ProductSubscriptionsListOptionalParams,
  ): AsyncIterableIterator<SubscriptionContract> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      serviceName,
      productId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists the collection of subscriptions to the specified product.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    options?: ProductSubscriptionsListOptionalParams,
  ): Promise<ProductSubscriptionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, productId, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    nextLink: string,
    options?: ProductSubscriptionsListNextOptionalParams,
  ): Promise<ProductSubscriptionsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, productId, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/subscriptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionCollection,
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
    Parameters.productId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionCollection,
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
    Parameters.productId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
