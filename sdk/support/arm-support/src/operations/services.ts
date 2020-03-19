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
import * as Mappers from "../models/servicesMappers";
import * as Parameters from "../models/parameters";
import { MicrosoftSupportContext } from "../microsoftSupportContext";

/** Class representing a Services. */
export class Services {
  private readonly client: MicrosoftSupportContext;

  /**
   * Create a Services.
   * @param {MicrosoftSupportContext} client Reference to the service client.
   */
  constructor(client: MicrosoftSupportContext) {
    this.client = client;
  }

  /**
   * Lists all the Azure services available for support ticket creation. For **Technical** issues,
   * select the Service Id that maps to the Azure service/product as displayed in the **Services**
   * drop-down list on the Azure portal's [New support
   * request](https://portal.azure.com/#blade/Microsoft_Azure_Support/HelpAndSupportBlade/overview)
   * page. Always use the service and it's corresponding problem classification(s) obtained
   * programmatically for support ticket creation. This practice ensures that you always have the
   * most recent set of service and problem classification Ids.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServicesListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.ServicesListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ServicesListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServicesListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServicesListResult>, callback?: msRest.ServiceCallback<Models.ServicesListResult>): Promise<Models.ServicesListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ServicesListResponse>;
  }

  /**
   * Gets a specific Azure service for support ticket creation.
   * @param serviceName Name of Azure service
   * @param [options] The optional parameters
   * @returns Promise<Models.ServicesGetResponse>
   */
  get(serviceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServicesGetResponse>;
  /**
   * @param serviceName Name of Azure service
   * @param callback The callback
   */
  get(serviceName: string, callback: msRest.ServiceCallback<Models.Service>): void;
  /**
   * @param serviceName Name of Azure service
   * @param options The optional parameters
   * @param callback The callback
   */
  get(serviceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Service>): void;
  get(serviceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Service>, callback?: msRest.ServiceCallback<Models.Service>): Promise<Models.ServicesGetResponse> {
    return this.client.sendOperationRequest(
      {
        serviceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ServicesGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Support/services",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServicesListResult
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Support/services/{serviceName}",
  urlParameters: [
    Parameters.serviceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Service
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  serializer
};
