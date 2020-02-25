/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/quotaMappers";
import * as Parameters from "../models/parameters";
import { AzureReservationAPIContext } from "../azureReservationAPIContext";

/** Class representing a Quota. */
export class Quota {
  private readonly client: AzureReservationAPIContext;

  /**
   * Create a Quota.
   * @param {AzureReservationAPIContext} client Reference to the service client.
   */
  constructor(client: AzureReservationAPIContext) {
    this.client = client;
  }

  /**
   * This API gets the current quota limit and usages for the specific resource for resource provider
   * for the specified location. This response can be used to submit quotaRequests.
   * @summary Gets the current quota limit and usages for the resource provider for the specified
   * location for the specific resource in the parameter.
   * @param subscriptionId Azure subscription id.
   * @param providerId Azure resource Provider id.
   * @param location Azure region.
   * @param resourceName The Resource name for the specific resource provider, such as SKU name for
   * Microsoft.Compute, pool for Microsoft.Batch.
   * @param [options] The optional parameters
   * @returns Promise<Models.QuotaListStatusResponse>
   */
  listStatus(subscriptionId: string, providerId: string, location: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.QuotaListStatusResponse>;
  /**
   * @param subscriptionId Azure subscription id.
   * @param providerId Azure resource Provider id.
   * @param location Azure region.
   * @param resourceName The Resource name for the specific resource provider, such as SKU name for
   * Microsoft.Compute, pool for Microsoft.Batch.
   * @param callback The callback
   */
  listStatus(subscriptionId: string, providerId: string, location: string, resourceName: string, callback: msRest.ServiceCallback<Models.CurrentQuotaLimitBase>): void;
  /**
   * @param subscriptionId Azure subscription id.
   * @param providerId Azure resource Provider id.
   * @param location Azure region.
   * @param resourceName The Resource name for the specific resource provider, such as SKU name for
   * Microsoft.Compute, pool for Microsoft.Batch.
   * @param options The optional parameters
   * @param callback The callback
   */
  listStatus(subscriptionId: string, providerId: string, location: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CurrentQuotaLimitBase>): void;
  listStatus(subscriptionId: string, providerId: string, location: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CurrentQuotaLimitBase>, callback?: msRest.ServiceCallback<Models.CurrentQuotaLimitBase>): Promise<Models.QuotaListStatusResponse> {
    return this.client.sendOperationRequest(
      {
        subscriptionId,
        providerId,
        location,
        resourceName,
        options
      },
      listStatusOperationSpec,
      callback) as Promise<Models.QuotaListStatusResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listStatusOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Capacity/resourceProviders/{providerId}/locations/{location}/serviceLimits/{resourceName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.providerId,
    Parameters.location0,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CurrentQuotaLimitBase,
      headersMapper: Mappers.QuotaListStatusHeaders
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  serializer
};
