/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { UserClassicAccounts } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ViManagementClient } from "../viManagementClient";
import {
  ClassicAccountSlim,
  UserClassicAccountsListNextOptionalParams,
  UserClassicAccountsListOptionalParams,
  UserClassicAccountsListResponse,
  UserClassicAccountsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing UserClassicAccounts operations. */
export class UserClassicAccountsImpl implements UserClassicAccounts {
  private readonly client: ViManagementClient;

  /**
   * Initialize a new instance of the class UserClassicAccounts class.
   * @param client Reference to the service client
   */
  constructor(client: ViManagementClient) {
    this.client = client;
  }

  /**
   * Lists all Azure Video Indexer classic accounts
   * @param location The name of Azure region.
   * @param options The options parameters.
   */
  public list(
    location: string,
    options?: UserClassicAccountsListOptionalParams
  ): PagedAsyncIterableIterator<ClassicAccountSlim> {
    const iter = this.listPagingAll(location, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(location, options);
      }
    };
  }

  private async *listPagingPage(
    location: string,
    options?: UserClassicAccountsListOptionalParams
  ): AsyncIterableIterator<ClassicAccountSlim[]> {
    let result = await this._list(location, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(location, continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    location: string,
    options?: UserClassicAccountsListOptionalParams
  ): AsyncIterableIterator<ClassicAccountSlim> {
    for await (const page of this.listPagingPage(location, options)) {
      yield* page;
    }
  }

  /**
   * Lists all Azure Video Indexer classic accounts
   * @param location The name of Azure region.
   * @param options The options parameters.
   */
  private _list(
    location: string,
    options?: UserClassicAccountsListOptionalParams
  ): Promise<UserClassicAccountsListResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param location The name of Azure region.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    location: string,
    nextLink: string,
    options?: UserClassicAccountsListNextOptionalParams
  ): Promise<UserClassicAccountsListNextResponse> {
    return this.client.sendOperationRequest(
      { location, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.VideoIndexer/locations/{location}/userClassicAccounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UserClassicAccountList
    },
    500: {
      bodyMapper: Mappers.ErrorResponse,
      isError: true
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.location],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UserClassicAccountList
    },
    500: {
      bodyMapper: Mappers.ErrorResponse,
      isError: true
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.nextLink, Parameters.location],
  headerParameters: [Parameters.accept],
  serializer
};
