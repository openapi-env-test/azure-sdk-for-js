/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AccessReviewScheduleDefinitionsAssignedForMyApproval } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AuthorizationManagementClient } from "../authorizationManagementClient";
import {
  AccessReviewScheduleDefinition,
  AccessReviewScheduleDefinitionsAssignedForMyApprovalListNextOptionalParams,
  AccessReviewScheduleDefinitionsAssignedForMyApprovalListOptionalParams,
  AccessReviewScheduleDefinitionsAssignedForMyApprovalListResponse,
  AccessReviewScheduleDefinitionsAssignedForMyApprovalListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AccessReviewScheduleDefinitionsAssignedForMyApproval operations. */
export class AccessReviewScheduleDefinitionsAssignedForMyApprovalImpl
  implements AccessReviewScheduleDefinitionsAssignedForMyApproval {
  private readonly client: AuthorizationManagementClient;

  /**
   * Initialize a new instance of the class AccessReviewScheduleDefinitionsAssignedForMyApproval class.
   * @param client Reference to the service client
   */
  constructor(client: AuthorizationManagementClient) {
    this.client = client;
  }

  /**
   * Get access review instances assigned for my approval.
   * @param options The options parameters.
   */
  public list(
    options?: AccessReviewScheduleDefinitionsAssignedForMyApprovalListOptionalParams
  ): PagedAsyncIterableIterator<AccessReviewScheduleDefinition> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: AccessReviewScheduleDefinitionsAssignedForMyApprovalListOptionalParams
  ): AsyncIterableIterator<AccessReviewScheduleDefinition[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: AccessReviewScheduleDefinitionsAssignedForMyApprovalListOptionalParams
  ): AsyncIterableIterator<AccessReviewScheduleDefinition> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get access review instances assigned for my approval.
   * @param options The options parameters.
   */
  private _list(
    options?: AccessReviewScheduleDefinitionsAssignedForMyApprovalListOptionalParams
  ): Promise<AccessReviewScheduleDefinitionsAssignedForMyApprovalListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: AccessReviewScheduleDefinitionsAssignedForMyApprovalListNextOptionalParams
  ): Promise<
    AccessReviewScheduleDefinitionsAssignedForMyApprovalListNextResponse
  > {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Authorization/accessReviewScheduleDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessReviewScheduleDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessReviewScheduleDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
