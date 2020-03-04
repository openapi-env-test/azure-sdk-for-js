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
import * as Mappers from "../models/pricingsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a Pricings. */
export class Pricings {
  private readonly client: SecurityCenterContext;

  /**
   * Create a Pricings.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Lists Security Center pricing configurations in the subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.PricingsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.PricingsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.PricingList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PricingList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PricingList>, callback?: msRest.ServiceCallback<Models.PricingList>): Promise<Models.PricingsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.PricingsListResponse>;
  }

  /**
   * Gets a provided Security Center pricing configuration in the subscription.
   * @param pricingName name of the pricing configuration
   * @param [options] The optional parameters
   * @returns Promise<Models.PricingsGetResponse>
   */
  get(pricingName: string, options?: msRest.RequestOptionsBase): Promise<Models.PricingsGetResponse>;
  /**
   * @param pricingName name of the pricing configuration
   * @param callback The callback
   */
  get(pricingName: string, callback: msRest.ServiceCallback<Models.Pricing>): void;
  /**
   * @param pricingName name of the pricing configuration
   * @param options The optional parameters
   * @param callback The callback
   */
  get(pricingName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Pricing>): void;
  get(pricingName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Pricing>, callback?: msRest.ServiceCallback<Models.Pricing>): Promise<Models.PricingsGetResponse> {
    return this.client.sendOperationRequest(
      {
        pricingName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PricingsGetResponse>;
  }

  /**
   * Updates a provided Security Center pricing configuration in the subscription.
   * @param pricingName name of the pricing configuration
   * @param pricing Pricing object
   * @param [options] The optional parameters
   * @returns Promise<Models.PricingsUpdateResponse>
   */
  update(pricingName: string, pricing: Models.Pricing, options?: msRest.RequestOptionsBase): Promise<Models.PricingsUpdateResponse>;
  /**
   * @param pricingName name of the pricing configuration
   * @param pricing Pricing object
   * @param callback The callback
   */
  update(pricingName: string, pricing: Models.Pricing, callback: msRest.ServiceCallback<Models.Pricing>): void;
  /**
   * @param pricingName name of the pricing configuration
   * @param pricing Pricing object
   * @param options The optional parameters
   * @param callback The callback
   */
  update(pricingName: string, pricing: Models.Pricing, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Pricing>): void;
  update(pricingName: string, pricing: Models.Pricing, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Pricing>, callback?: msRest.ServiceCallback<Models.Pricing>): Promise<Models.PricingsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        pricingName,
        pricing,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.PricingsUpdateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/pricings",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PricingList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/pricings/{pricingName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.pricingName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Pricing
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/pricings/{pricingName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.pricingName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "pricing",
    mapper: {
      ...Mappers.Pricing,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Pricing
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
