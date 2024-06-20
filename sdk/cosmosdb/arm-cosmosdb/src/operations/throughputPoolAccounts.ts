/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ThroughputPoolAccounts } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClient } from "../cosmosDBManagementClient";
import {
  ThroughputPoolAccountResource,
  ThroughputPoolAccountsListNextOptionalParams,
  ThroughputPoolAccountsListOptionalParams,
  ThroughputPoolAccountsListResponse,
  ThroughputPoolAccountsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ThroughputPoolAccounts operations. */
export class ThroughputPoolAccountsImpl implements ThroughputPoolAccounts {
  private readonly client: CosmosDBManagementClient;

  /**
   * Initialize a new instance of the class ThroughputPoolAccounts class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClient) {
    this.client = client;
  }

  /**
   * Lists all the Azure Cosmos DB accounts available under the subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param throughputPoolName Cosmos DB Throughput Pool name.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    throughputPoolName: string,
    options?: ThroughputPoolAccountsListOptionalParams,
  ): PagedAsyncIterableIterator<ThroughputPoolAccountResource> {
    const iter = this.listPagingAll(
      resourceGroupName,
      throughputPoolName,
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
          throughputPoolName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    throughputPoolName: string,
    options?: ThroughputPoolAccountsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ThroughputPoolAccountResource[]> {
    let result: ThroughputPoolAccountsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, throughputPoolName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        throughputPoolName,
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
    throughputPoolName: string,
    options?: ThroughputPoolAccountsListOptionalParams,
  ): AsyncIterableIterator<ThroughputPoolAccountResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      throughputPoolName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the Azure Cosmos DB accounts available under the subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param throughputPoolName Cosmos DB Throughput Pool name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    throughputPoolName: string,
    options?: ThroughputPoolAccountsListOptionalParams,
  ): Promise<ThroughputPoolAccountsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, throughputPoolName, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param throughputPoolName Cosmos DB Throughput Pool name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    throughputPoolName: string,
    nextLink: string,
    options?: ThroughputPoolAccountsListNextOptionalParams,
  ): Promise<ThroughputPoolAccountsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, throughputPoolName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/throughputPools/{throughputPoolName}/throughputPoolAccounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ThroughputPoolAccountsListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.throughputPoolName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ThroughputPoolAccountsListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.throughputPoolName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
