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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/quotaRequestMappers";
import * as Parameters from "../models/parameters";
import { AzureReservationAPIContext } from "../azureReservationAPIContext";

/** Class representing a QuotaRequest. */
export class QuotaRequest {
  private readonly client: AzureReservationAPIContext;

  /**
   * Create a QuotaRequest.
   * @param {AzureReservationAPIContext} client Reference to the service client.
   */
  constructor(client: AzureReservationAPIContext) {
    this.client = client;
  }

  /**
   * Submits Quota change request for a resource provider for the specified location for the specific
   * resource in the parameter. To use, first make a Get request to get quota information for the
   * specific resource. This information consists of information regarding that specific resources.
   * For the specific resource, if it requires an update to the quota, update the limit field in the
   * response from the Get request to the new value of quota. Then, submit this updated JSON object
   * to this quota request API. This will update the quota to the value specified. The location
   * header in the response will be used to track the status of the quota request. Please check the
   * provisioningState field in the response.
   * @summary Submits a Quota Request for a resource provider at the specified location for the
   * specific resource in the parameter.
   * @param subscriptionId Azure subscription id.
   * @param providerId Azure resource Provider id.
   * @param location Azure region.
   * @param resourceName The Resource name for the specific resource provider, such as SKU name for
   * Microsoft.Compute, pool for Microsoft.Batch.
   * @param createQuotaRequest Quota requests payload.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<Models.QuotaRequestCreateResponse>
   */
  create(subscriptionId: string, providerId: string, location: string, resourceName: string, createQuotaRequest: Models.CurrentQuotaLimitBase, ifMatch: string, options?: msRest.RequestOptionsBase): Promise<Models.QuotaRequestCreateResponse> {
    return this.beginCreate(subscriptionId,providerId,location,resourceName,createQuotaRequest,ifMatch,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.QuotaRequestCreateResponse>;
  }

  /**
   * Submits Quota change request for a resource provider for the specified location for the specific
   * resource in the parameter. To use, first make a Get request to get quota information for the
   * specific resource. This information consists of information regarding that specific resources.
   * For the specific resource, if it requires an update to the quota, update the limit field in the
   * response from the Get request to the new value of quota. Then, submit this updated JSON object
   * to this quota request API. This will update the quota to the value specified. The location
   * header in the response will be used to track the status of the quota request. Please check the
   * provisioningState field in the response.
   * @summary Submits a Quota Request for a resource provider at the specified location for the
   * specific resource in the parameter.
   * @param subscriptionId Azure subscription id.
   * @param providerId Azure resource Provider id.
   * @param location Azure region.
   * @param resourceName The Resource name for the specific resource provider, such as SKU name for
   * Microsoft.Compute, pool for Microsoft.Batch.
   * @param createQuotaRequest Quota requests payload.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<Models.QuotaRequestUpdateResponse>
   */
  update(subscriptionId: string, providerId: string, location: string, resourceName: string, createQuotaRequest: Models.CurrentQuotaLimitBase, ifMatch: string, options?: msRest.RequestOptionsBase): Promise<Models.QuotaRequestUpdateResponse> {
    return this.beginUpdate(subscriptionId,providerId,location,resourceName,createQuotaRequest,ifMatch,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.QuotaRequestUpdateResponse>;
  }

  /**
   * Submits Quota change request for a resource provider for the specified location for the specific
   * resource in the parameter. To use, first make a Get request to get quota information for the
   * specific resource. This information consists of information regarding that specific resources.
   * For the specific resource, if it requires an update to the quota, update the limit field in the
   * response from the Get request to the new value of quota. Then, submit this updated JSON object
   * to this quota request API. This will update the quota to the value specified. The location
   * header in the response will be used to track the status of the quota request. Please check the
   * provisioningState field in the response.
   * @summary Submits a Quota Request for a resource provider at the specified location for the
   * specific resource in the parameter.
   * @param subscriptionId Azure subscription id.
   * @param providerId Azure resource Provider id.
   * @param location Azure region.
   * @param resourceName The Resource name for the specific resource provider, such as SKU name for
   * Microsoft.Compute, pool for Microsoft.Batch.
   * @param createQuotaRequest Quota requests payload.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(subscriptionId: string, providerId: string, location: string, resourceName: string, createQuotaRequest: Models.CurrentQuotaLimitBase, ifMatch: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        subscriptionId,
        providerId,
        location,
        resourceName,
        createQuotaRequest,
        ifMatch,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Submits Quota change request for a resource provider for the specified location for the specific
   * resource in the parameter. To use, first make a Get request to get quota information for the
   * specific resource. This information consists of information regarding that specific resources.
   * For the specific resource, if it requires an update to the quota, update the limit field in the
   * response from the Get request to the new value of quota. Then, submit this updated JSON object
   * to this quota request API. This will update the quota to the value specified. The location
   * header in the response will be used to track the status of the quota request. Please check the
   * provisioningState field in the response.
   * @summary Submits a Quota Request for a resource provider at the specified location for the
   * specific resource in the parameter.
   * @param subscriptionId Azure subscription id.
   * @param providerId Azure resource Provider id.
   * @param location Azure region.
   * @param resourceName The Resource name for the specific resource provider, such as SKU name for
   * Microsoft.Compute, pool for Microsoft.Batch.
   * @param createQuotaRequest Quota requests payload.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(subscriptionId: string, providerId: string, location: string, resourceName: string, createQuotaRequest: Models.CurrentQuotaLimitBase, ifMatch: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        subscriptionId,
        providerId,
        location,
        resourceName,
        createQuotaRequest,
        ifMatch,
        options
      },
      beginUpdateOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
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
    Parameters.ifMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "createQuotaRequest",
    mapper: {
      ...Mappers.CurrentQuotaLimitBase,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.QuotaRequestOneResourceSubmitResponse
    },
    201: {
      bodyMapper: Mappers.QuotaRequestSubmitResponse201
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
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
    Parameters.ifMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "createQuotaRequest",
    mapper: {
      ...Mappers.CurrentQuotaLimitBase,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.QuotaRequestOneResourceSubmitResponse
    },
    201: {
      bodyMapper: Mappers.QuotaRequestSubmitResponse201
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  serializer
};
