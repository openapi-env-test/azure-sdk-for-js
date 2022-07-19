/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ReservationTransactions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ConsumptionManagementClient } from "../consumptionManagementClient";
import {
  ReservationTransaction,
  ReservationTransactionsListNextOptionalParams,
  ReservationTransactionsListOptionalParams,
  ModernReservationTransaction,
  ReservationTransactionsListByBillingProfileNextOptionalParams,
  ReservationTransactionsListByBillingProfileOptionalParams,
  ReservationTransactionsListResponse,
  ReservationTransactionsListByBillingProfileResponse,
  ReservationTransactionsListNextResponse,
  ReservationTransactionsListByBillingProfileNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ReservationTransactions operations. */
export class ReservationTransactionsImpl implements ReservationTransactions {
  private readonly client: ConsumptionManagementClient;

  /**
   * Initialize a new instance of the class ReservationTransactions class.
   * @param client Reference to the service client
   */
  constructor(client: ConsumptionManagementClient) {
    this.client = client;
  }

  /**
   * List of transactions for reserved instances on billing account scope. Note: The refund transactions
   * are posted along with its purchase transaction (i.e. in the purchase billing month). For example,
   * The refund is requested in May 2021. This refund transaction will have event date as May 2021 but
   * the billing month as April 2020 when the reservation purchase was made.
   * @param billingAccountId BillingAccount ID
   * @param options The options parameters.
   */
  public list(
    billingAccountId: string,
    options?: ReservationTransactionsListOptionalParams
  ): PagedAsyncIterableIterator<ReservationTransaction> {
    const iter = this.listPagingAll(billingAccountId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(billingAccountId, options);
      }
    };
  }

  private async *listPagingPage(
    billingAccountId: string,
    options?: ReservationTransactionsListOptionalParams
  ): AsyncIterableIterator<ReservationTransaction[]> {
    let result = await this._list(billingAccountId, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        billingAccountId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    billingAccountId: string,
    options?: ReservationTransactionsListOptionalParams
  ): AsyncIterableIterator<ReservationTransaction> {
    for await (const page of this.listPagingPage(billingAccountId, options)) {
      yield* page;
    }
  }

  /**
   * List of transactions for reserved instances on billing profile scope. The refund transactions are
   * posted along with its purchase transaction (i.e. in the purchase billing month). For example, The
   * refund is requested in May 2021. This refund transaction will have event date as May 2021 but the
   * billing month as April 2020 when the reservation purchase was made.
   * @param billingAccountId BillingAccount ID
   * @param billingProfileId Azure Billing Profile ID.
   * @param options The options parameters.
   */
  public listByBillingProfile(
    billingAccountId: string,
    billingProfileId: string,
    options?: ReservationTransactionsListByBillingProfileOptionalParams
  ): PagedAsyncIterableIterator<ModernReservationTransaction> {
    const iter = this.listByBillingProfilePagingAll(
      billingAccountId,
      billingProfileId,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByBillingProfilePagingPage(
          billingAccountId,
          billingProfileId,
          options
        );
      }
    };
  }

  private async *listByBillingProfilePagingPage(
    billingAccountId: string,
    billingProfileId: string,
    options?: ReservationTransactionsListByBillingProfileOptionalParams
  ): AsyncIterableIterator<ModernReservationTransaction[]> {
    let result = await this._listByBillingProfile(
      billingAccountId,
      billingProfileId,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByBillingProfileNext(
        billingAccountId,
        billingProfileId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByBillingProfilePagingAll(
    billingAccountId: string,
    billingProfileId: string,
    options?: ReservationTransactionsListByBillingProfileOptionalParams
  ): AsyncIterableIterator<ModernReservationTransaction> {
    for await (const page of this.listByBillingProfilePagingPage(
      billingAccountId,
      billingProfileId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List of transactions for reserved instances on billing account scope. Note: The refund transactions
   * are posted along with its purchase transaction (i.e. in the purchase billing month). For example,
   * The refund is requested in May 2021. This refund transaction will have event date as May 2021 but
   * the billing month as April 2020 when the reservation purchase was made.
   * @param billingAccountId BillingAccount ID
   * @param options The options parameters.
   */
  private _list(
    billingAccountId: string,
    options?: ReservationTransactionsListOptionalParams
  ): Promise<ReservationTransactionsListResponse> {
    return this.client.sendOperationRequest(
      { billingAccountId, options },
      listOperationSpec
    );
  }

  /**
   * List of transactions for reserved instances on billing profile scope. The refund transactions are
   * posted along with its purchase transaction (i.e. in the purchase billing month). For example, The
   * refund is requested in May 2021. This refund transaction will have event date as May 2021 but the
   * billing month as April 2020 when the reservation purchase was made.
   * @param billingAccountId BillingAccount ID
   * @param billingProfileId Azure Billing Profile ID.
   * @param options The options parameters.
   */
  private _listByBillingProfile(
    billingAccountId: string,
    billingProfileId: string,
    options?: ReservationTransactionsListByBillingProfileOptionalParams
  ): Promise<ReservationTransactionsListByBillingProfileResponse> {
    return this.client.sendOperationRequest(
      { billingAccountId, billingProfileId, options },
      listByBillingProfileOperationSpec
    );
  }

  /**
   * ListNext
   * @param billingAccountId BillingAccount ID
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    billingAccountId: string,
    nextLink: string,
    options?: ReservationTransactionsListNextOptionalParams
  ): Promise<ReservationTransactionsListNextResponse> {
    return this.client.sendOperationRequest(
      { billingAccountId, nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByBillingProfileNext
   * @param billingAccountId BillingAccount ID
   * @param billingProfileId Azure Billing Profile ID.
   * @param nextLink The nextLink from the previous successful call to the ListByBillingProfile method.
   * @param options The options parameters.
   */
  private _listByBillingProfileNext(
    billingAccountId: string,
    billingProfileId: string,
    nextLink: string,
    options?: ReservationTransactionsListByBillingProfileNextOptionalParams
  ): Promise<ReservationTransactionsListByBillingProfileNextResponse> {
    return this.client.sendOperationRequest(
      { billingAccountId, billingProfileId, nextLink, options },
      listByBillingProfileNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.Consumption/reservationTransactions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReservationTransactionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.billingAccountId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByBillingProfileOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/providers/Microsoft.Consumption/reservationTransactions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ModernReservationTransactionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountId,
    Parameters.billingProfileId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReservationTransactionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.billingAccountId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByBillingProfileNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ModernReservationTransactionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.billingAccountId,
    Parameters.billingProfileId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
