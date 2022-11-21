/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SavingsPlanOrder } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BillingBenefitsRP } from "../billingBenefitsRP";
import {
  SavingsPlanOrderModel,
  SavingsPlanOrderListNextOptionalParams,
  SavingsPlanOrderListOptionalParams,
  SavingsPlanOrderGetOptionalParams,
  SavingsPlanOrderGetResponse,
  SavingsPlanOrderElevateOptionalParams,
  SavingsPlanOrderElevateResponse,
  SavingsPlanOrderListResponse,
  SavingsPlanOrderListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SavingsPlanOrder operations. */
export class SavingsPlanOrderImpl implements SavingsPlanOrder {
  private readonly client: BillingBenefitsRP;

  /**
   * Initialize a new instance of the class SavingsPlanOrder class.
   * @param client Reference to the service client
   */
  constructor(client: BillingBenefitsRP) {
    this.client = client;
  }

  /**
   * List all Savings plan orders.
   * @param options The options parameters.
   */
  public list(
    options?: SavingsPlanOrderListOptionalParams
  ): PagedAsyncIterableIterator<SavingsPlanOrderModel> {
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
    options?: SavingsPlanOrderListOptionalParams
  ): AsyncIterableIterator<SavingsPlanOrderModel[]> {
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
    options?: SavingsPlanOrderListOptionalParams
  ): AsyncIterableIterator<SavingsPlanOrderModel> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get a savings plan order.
   * @param savingsPlanOrderId Order ID of the savings plan
   * @param options The options parameters.
   */
  get(
    savingsPlanOrderId: string,
    options?: SavingsPlanOrderGetOptionalParams
  ): Promise<SavingsPlanOrderGetResponse> {
    return this.client.sendOperationRequest(
      { savingsPlanOrderId, options },
      getOperationSpec
    );
  }

  /**
   * Elevate as owner on savings plan order based on billing permissions.
   * @param savingsPlanOrderId Order ID of the savings plan
   * @param options The options parameters.
   */
  elevate(
    savingsPlanOrderId: string,
    options?: SavingsPlanOrderElevateOptionalParams
  ): Promise<SavingsPlanOrderElevateResponse> {
    return this.client.sendOperationRequest(
      { savingsPlanOrderId, options },
      elevateOperationSpec
    );
  }

  /**
   * List all Savings plan orders.
   * @param options The options parameters.
   */
  private _list(
    options?: SavingsPlanOrderListOptionalParams
  ): Promise<SavingsPlanOrderListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: SavingsPlanOrderListNextOptionalParams
  ): Promise<SavingsPlanOrderListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.BillingBenefits/savingsPlanOrders/{savingsPlanOrderId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SavingsPlanOrderModel
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [Parameters.$host, Parameters.savingsPlanOrderId],
  headerParameters: [Parameters.accept],
  serializer
};
const elevateOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.BillingBenefits/savingsPlanOrders/{savingsPlanOrderId}/elevate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.RoleAssignmentEntity
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.savingsPlanOrderId],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.BillingBenefits/savingsPlanOrders",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SavingsPlanOrderModelList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SavingsPlanOrderModelList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
