/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AccessReviewHistoryDefinitions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AuthorizationManagementClient } from "../authorizationManagementClient";
import {
  AccessReviewHistoryDefinition,
  AccessReviewHistoryDefinitionsListNextOptionalParams,
  AccessReviewHistoryDefinitionsListOptionalParams,
  AccessReviewHistoryDefinitionsListResponse,
  AccessReviewHistoryDefinitionsGetByIdOptionalParams,
  AccessReviewHistoryDefinitionsGetByIdResponse,
  AccessReviewHistoryDefinitionsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AccessReviewHistoryDefinitions operations. */
export class AccessReviewHistoryDefinitionsImpl
  implements AccessReviewHistoryDefinitions {
  private readonly client: AuthorizationManagementClient;

  /**
   * Initialize a new instance of the class AccessReviewHistoryDefinitions class.
   * @param client Reference to the service client
   */
  constructor(client: AuthorizationManagementClient) {
    this.client = client;
  }

  /**
   * Lists the accessReviewHistoryDefinitions available from this provider, definition instances are only
   * available for 30 days after creation.
   * @param subscriptionId The ID of the target subscription.
   * @param options The options parameters.
   */
  public list(
    subscriptionId: string,
    options?: AccessReviewHistoryDefinitionsListOptionalParams
  ): PagedAsyncIterableIterator<AccessReviewHistoryDefinition> {
    const iter = this.listPagingAll(subscriptionId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(subscriptionId, options);
      }
    };
  }

  private async *listPagingPage(
    subscriptionId: string,
    options?: AccessReviewHistoryDefinitionsListOptionalParams
  ): AsyncIterableIterator<AccessReviewHistoryDefinition[]> {
    let result = await this._list(subscriptionId, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(subscriptionId, continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    subscriptionId: string,
    options?: AccessReviewHistoryDefinitionsListOptionalParams
  ): AsyncIterableIterator<AccessReviewHistoryDefinition> {
    for await (const page of this.listPagingPage(subscriptionId, options)) {
      yield* page;
    }
  }

  /**
   * Lists the accessReviewHistoryDefinitions available from this provider, definition instances are only
   * available for 30 days after creation.
   * @param subscriptionId The ID of the target subscription.
   * @param options The options parameters.
   */
  private _list(
    subscriptionId: string,
    options?: AccessReviewHistoryDefinitionsListOptionalParams
  ): Promise<AccessReviewHistoryDefinitionsListResponse> {
    return this.client.sendOperationRequest(
      { subscriptionId, options },
      listOperationSpec
    );
  }

  /**
   * Get access review history definition by definition Id
   * @param subscriptionId The ID of the target subscription.
   * @param historyDefinitionId The id of the access review history definition.
   * @param options The options parameters.
   */
  getById(
    subscriptionId: string,
    historyDefinitionId: string,
    options?: AccessReviewHistoryDefinitionsGetByIdOptionalParams
  ): Promise<AccessReviewHistoryDefinitionsGetByIdResponse> {
    return this.client.sendOperationRequest(
      { subscriptionId, historyDefinitionId, options },
      getByIdOperationSpec
    );
  }

  /**
   * ListNext
   * @param subscriptionId The ID of the target subscription.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    subscriptionId: string,
    nextLink: string,
    options?: AccessReviewHistoryDefinitionsListNextOptionalParams
  ): Promise<AccessReviewHistoryDefinitionsListNextResponse> {
    return this.client.sendOperationRequest(
      { subscriptionId, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/accessReviewHistoryDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessReviewHistoryDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getByIdOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/accessReviewHistoryDefinitions/{historyDefinitionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessReviewHistoryDefinition
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
      bodyMapper: Mappers.AccessReviewHistoryDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
