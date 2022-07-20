/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { EventsOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ConsumptionManagementClient } from "../consumptionManagementClient";
import {
  EventSummary,
  EventsListByBillingProfileNextOptionalParams,
  EventsListByBillingProfileOptionalParams,
  EventsListByBillingAccountNextOptionalParams,
  EventsListByBillingAccountOptionalParams,
  EventsListByBillingProfileResponse,
  EventsListByBillingAccountResponse,
  EventsListByBillingProfileNextResponse,
  EventsListByBillingAccountNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing EventsOperations operations. */
export class EventsOperationsImpl implements EventsOperations {
  private readonly client: ConsumptionManagementClient;

  /**
   * Initialize a new instance of the class EventsOperations class.
   * @param client Reference to the service client
   */
  constructor(client: ConsumptionManagementClient) {
    this.client = client;
  }

  /**
   * Lists the events that decrements Azure credits or Microsoft Azure consumption commitment for a
   * billing account or a billing profile for a given start and end date.
   * @param billingAccountId BillingAccount ID
   * @param billingProfileId Azure Billing Profile ID.
   * @param startDate Start date
   * @param endDate End date
   * @param options The options parameters.
   */
  public listByBillingProfile(
    billingAccountId: string,
    billingProfileId: string,
    startDate: string,
    endDate: string,
    options?: EventsListByBillingProfileOptionalParams
  ): PagedAsyncIterableIterator<EventSummary> {
    const iter = this.listByBillingProfilePagingAll(
      billingAccountId,
      billingProfileId,
      startDate,
      endDate,
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
          startDate,
          endDate,
          options
        );
      }
    };
  }

  private async *listByBillingProfilePagingPage(
    billingAccountId: string,
    billingProfileId: string,
    startDate: string,
    endDate: string,
    options?: EventsListByBillingProfileOptionalParams
  ): AsyncIterableIterator<EventSummary[]> {
    let result = await this._listByBillingProfile(
      billingAccountId,
      billingProfileId,
      startDate,
      endDate,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByBillingProfileNext(
        billingAccountId,
        billingProfileId,
        startDate,
        endDate,
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
    startDate: string,
    endDate: string,
    options?: EventsListByBillingProfileOptionalParams
  ): AsyncIterableIterator<EventSummary> {
    for await (const page of this.listByBillingProfilePagingPage(
      billingAccountId,
      billingProfileId,
      startDate,
      endDate,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the events that decrements Azure credits or Microsoft Azure consumption commitment for a
   * billing account or a billing profile for a given start and end date.
   * @param billingAccountId BillingAccount ID
   * @param options The options parameters.
   */
  public listByBillingAccount(
    billingAccountId: string,
    options?: EventsListByBillingAccountOptionalParams
  ): PagedAsyncIterableIterator<EventSummary> {
    const iter = this.listByBillingAccountPagingAll(billingAccountId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByBillingAccountPagingPage(billingAccountId, options);
      }
    };
  }

  private async *listByBillingAccountPagingPage(
    billingAccountId: string,
    options?: EventsListByBillingAccountOptionalParams
  ): AsyncIterableIterator<EventSummary[]> {
    let result = await this._listByBillingAccount(billingAccountId, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByBillingAccountNext(
        billingAccountId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByBillingAccountPagingAll(
    billingAccountId: string,
    options?: EventsListByBillingAccountOptionalParams
  ): AsyncIterableIterator<EventSummary> {
    for await (const page of this.listByBillingAccountPagingPage(
      billingAccountId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the events that decrements Azure credits or Microsoft Azure consumption commitment for a
   * billing account or a billing profile for a given start and end date.
   * @param billingAccountId BillingAccount ID
   * @param billingProfileId Azure Billing Profile ID.
   * @param startDate Start date
   * @param endDate End date
   * @param options The options parameters.
   */
  private _listByBillingProfile(
    billingAccountId: string,
    billingProfileId: string,
    startDate: string,
    endDate: string,
    options?: EventsListByBillingProfileOptionalParams
  ): Promise<EventsListByBillingProfileResponse> {
    return this.client.sendOperationRequest(
      { billingAccountId, billingProfileId, startDate, endDate, options },
      listByBillingProfileOperationSpec
    );
  }

  /**
   * Lists the events that decrements Azure credits or Microsoft Azure consumption commitment for a
   * billing account or a billing profile for a given start and end date.
   * @param billingAccountId BillingAccount ID
   * @param options The options parameters.
   */
  private _listByBillingAccount(
    billingAccountId: string,
    options?: EventsListByBillingAccountOptionalParams
  ): Promise<EventsListByBillingAccountResponse> {
    return this.client.sendOperationRequest(
      { billingAccountId, options },
      listByBillingAccountOperationSpec
    );
  }

  /**
   * ListByBillingProfileNext
   * @param billingAccountId BillingAccount ID
   * @param billingProfileId Azure Billing Profile ID.
   * @param startDate Start date
   * @param endDate End date
   * @param nextLink The nextLink from the previous successful call to the ListByBillingProfile method.
   * @param options The options parameters.
   */
  private _listByBillingProfileNext(
    billingAccountId: string,
    billingProfileId: string,
    startDate: string,
    endDate: string,
    nextLink: string,
    options?: EventsListByBillingProfileNextOptionalParams
  ): Promise<EventsListByBillingProfileNextResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountId,
        billingProfileId,
        startDate,
        endDate,
        nextLink,
        options
      },
      listByBillingProfileNextOperationSpec
    );
  }

  /**
   * ListByBillingAccountNext
   * @param billingAccountId BillingAccount ID
   * @param nextLink The nextLink from the previous successful call to the ListByBillingAccount method.
   * @param options The options parameters.
   */
  private _listByBillingAccountNext(
    billingAccountId: string,
    nextLink: string,
    options?: EventsListByBillingAccountNextOptionalParams
  ): Promise<EventsListByBillingAccountNextResponse> {
    return this.client.sendOperationRequest(
      { billingAccountId, nextLink, options },
      listByBillingAccountNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByBillingProfileOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/providers/Microsoft.Consumption/events",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Events
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.startDate2,
    Parameters.endDate2
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountId,
    Parameters.billingProfileId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByBillingAccountOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/providers/Microsoft.Consumption/events",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Events
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
const listByBillingProfileNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Events
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.startDate2,
    Parameters.endDate2
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.billingAccountId,
    Parameters.billingProfileId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByBillingAccountNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Events
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
