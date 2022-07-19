/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AccessReviewHistoryDefinitionInstances } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AuthorizationManagementClient } from "../authorizationManagementClient";
import {
  AccessReviewHistoryInstance,
  AccessReviewHistoryDefinitionInstancesListNextOptionalParams,
  AccessReviewHistoryDefinitionInstancesListOptionalParams,
  AccessReviewHistoryDefinitionInstancesListResponse,
  AccessReviewHistoryDefinitionInstancesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AccessReviewHistoryDefinitionInstances operations. */
export class AccessReviewHistoryDefinitionInstancesImpl
  implements AccessReviewHistoryDefinitionInstances {
  private readonly client: AuthorizationManagementClient;

  /**
   * Initialize a new instance of the class AccessReviewHistoryDefinitionInstances class.
   * @param client Reference to the service client
   */
  constructor(client: AuthorizationManagementClient) {
    this.client = client;
  }

  /**
   * Get access review history definition instances by definition Id
   * @param historyDefinitionId The id of the access review history definition.
   * @param options The options parameters.
   */
  public list(
    historyDefinitionId: string,
    options?: AccessReviewHistoryDefinitionInstancesListOptionalParams
  ): PagedAsyncIterableIterator<AccessReviewHistoryInstance> {
    const iter = this.listPagingAll(historyDefinitionId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(historyDefinitionId, options);
      }
    };
  }

  private async *listPagingPage(
    historyDefinitionId: string,
    options?: AccessReviewHistoryDefinitionInstancesListOptionalParams
  ): AsyncIterableIterator<AccessReviewHistoryInstance[]> {
    let result = await this._list(historyDefinitionId, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        historyDefinitionId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    historyDefinitionId: string,
    options?: AccessReviewHistoryDefinitionInstancesListOptionalParams
  ): AsyncIterableIterator<AccessReviewHistoryInstance> {
    for await (const page of this.listPagingPage(
      historyDefinitionId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get access review history definition instances by definition Id
   * @param historyDefinitionId The id of the access review history definition.
   * @param options The options parameters.
   */
  private _list(
    historyDefinitionId: string,
    options?: AccessReviewHistoryDefinitionInstancesListOptionalParams
  ): Promise<AccessReviewHistoryDefinitionInstancesListResponse> {
    return this.client.sendOperationRequest(
      { historyDefinitionId, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param historyDefinitionId The id of the access review history definition.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    historyDefinitionId: string,
    nextLink: string,
    options?: AccessReviewHistoryDefinitionInstancesListNextOptionalParams
  ): Promise<AccessReviewHistoryDefinitionInstancesListNextResponse> {
    return this.client.sendOperationRequest(
      { historyDefinitionId, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/accessReviewHistoryDefinitions/{historyDefinitionId}/instances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessReviewHistoryDefinitionInstanceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.historyDefinitionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessReviewHistoryDefinitionInstanceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.historyDefinitionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
