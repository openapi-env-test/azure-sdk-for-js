/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/autoQuotaIncreaseMappers";
import * as Parameters from "../models/parameters";
import { AzureReservationAPIContext } from "../azureReservationAPIContext";

/** Class representing a AutoQuotaIncrease. */
export class AutoQuotaIncrease {
  private readonly client: AzureReservationAPIContext;

  /**
   * Create a AutoQuotaIncrease.
   * @param {AzureReservationAPIContext} client Reference to the service client.
   */
  constructor(client: AzureReservationAPIContext) {
    this.client = client;
  }

  /**
   * Gets the Auto Quota Increase enrollment details for the specified subscription.
   * @param subscriptionId Azure subscription id.
   * @param [options] The optional parameters
   * @returns Promise<Models.AutoQuotaIncreaseGetPropertiesResponse>
   */
  getProperties(subscriptionId: string, options?: msRest.RequestOptionsBase): Promise<Models.AutoQuotaIncreaseGetPropertiesResponse>;
  /**
   * @param subscriptionId Azure subscription id.
   * @param callback The callback
   */
  getProperties(subscriptionId: string, callback: msRest.ServiceCallback<Models.AutoQuotaIncreaseDetail>): void;
  /**
   * @param subscriptionId Azure subscription id.
   * @param options The optional parameters
   * @param callback The callback
   */
  getProperties(subscriptionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AutoQuotaIncreaseDetail>): void;
  getProperties(subscriptionId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AutoQuotaIncreaseDetail>, callback?: msRest.ServiceCallback<Models.AutoQuotaIncreaseDetail>): Promise<Models.AutoQuotaIncreaseGetPropertiesResponse> {
    return this.client.sendOperationRequest(
      {
        subscriptionId,
        options
      },
      getPropertiesOperationSpec,
      callback) as Promise<Models.AutoQuotaIncreaseGetPropertiesResponse>;
  }

  /**
   * Sets the Auto Quota Increase enrollment properties for the specified subscription.
   * @param subscriptionId Azure subscription id.
   * @param autoQuotaIncreaseRequest Auto Quota increase request payload.
   * @param [options] The optional parameters
   * @returns Promise<Models.AutoQuotaIncreaseCreateResponse>
   */
  create(subscriptionId: string, autoQuotaIncreaseRequest: Models.AutoQuotaIncreaseDetail, options?: msRest.RequestOptionsBase): Promise<Models.AutoQuotaIncreaseCreateResponse>;
  /**
   * @param subscriptionId Azure subscription id.
   * @param autoQuotaIncreaseRequest Auto Quota increase request payload.
   * @param callback The callback
   */
  create(subscriptionId: string, autoQuotaIncreaseRequest: Models.AutoQuotaIncreaseDetail, callback: msRest.ServiceCallback<Models.AutoQuotaIncreaseDetail>): void;
  /**
   * @param subscriptionId Azure subscription id.
   * @param autoQuotaIncreaseRequest Auto Quota increase request payload.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(subscriptionId: string, autoQuotaIncreaseRequest: Models.AutoQuotaIncreaseDetail, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AutoQuotaIncreaseDetail>): void;
  create(subscriptionId: string, autoQuotaIncreaseRequest: Models.AutoQuotaIncreaseDetail, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AutoQuotaIncreaseDetail>, callback?: msRest.ServiceCallback<Models.AutoQuotaIncreaseDetail>): Promise<Models.AutoQuotaIncreaseCreateResponse> {
    return this.client.sendOperationRequest(
      {
        subscriptionId,
        autoQuotaIncreaseRequest,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.AutoQuotaIncreaseCreateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getPropertiesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Capacity/autoQuotaIncrease",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AutoQuotaIncreaseDetail
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Capacity/autoQuotaIncrease",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "autoQuotaIncreaseRequest",
    mapper: {
      ...Mappers.AutoQuotaIncreaseDetail,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AutoQuotaIncreaseDetail
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  serializer
};
