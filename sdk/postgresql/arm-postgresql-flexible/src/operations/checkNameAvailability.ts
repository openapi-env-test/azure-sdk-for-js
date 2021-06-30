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
import * as Mappers from "../models/checkNameAvailabilityMappers";
import * as Parameters from "../models/parameters";
import { PostgreSQLFlexibleManagementClientContext } from "../postgreSQLFlexibleManagementClientContext";

/** Class representing a CheckNameAvailability. */
export class CheckNameAvailability {
  private readonly client: PostgreSQLFlexibleManagementClientContext;

  /**
   * Create a CheckNameAvailability.
   * @param {PostgreSQLFlexibleManagementClientContext} client Reference to the service client.
   */
  constructor(client: PostgreSQLFlexibleManagementClientContext) {
    this.client = client;
  }

  /**
   * Check the availability of name for resource
   * @param nameAvailabilityRequest The required parameters for checking if resource name is
   * available.
   * @param [options] The optional parameters
   * @returns Promise<Models.CheckNameAvailabilityExecuteResponse>
   */
  execute(nameAvailabilityRequest: Models.NameAvailabilityRequest, options?: msRest.RequestOptionsBase): Promise<Models.CheckNameAvailabilityExecuteResponse>;
  /**
   * @param nameAvailabilityRequest The required parameters for checking if resource name is
   * available.
   * @param callback The callback
   */
  execute(nameAvailabilityRequest: Models.NameAvailabilityRequest, callback: msRest.ServiceCallback<Models.NameAvailability>): void;
  /**
   * @param nameAvailabilityRequest The required parameters for checking if resource name is
   * available.
   * @param options The optional parameters
   * @param callback The callback
   */
  execute(nameAvailabilityRequest: Models.NameAvailabilityRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.NameAvailability>): void;
  execute(nameAvailabilityRequest: Models.NameAvailabilityRequest, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.NameAvailability>, callback?: msRest.ServiceCallback<Models.NameAvailability>): Promise<Models.CheckNameAvailabilityExecuteResponse> {
    return this.client.sendOperationRequest(
      {
        nameAvailabilityRequest,
        options
      },
      executeOperationSpec,
      callback) as Promise<Models.CheckNameAvailabilityExecuteResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const executeOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.DBForPostgreSql/checkNameAvailability",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "nameAvailabilityRequest",
    mapper: {
      ...Mappers.NameAvailabilityRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.NameAvailability
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
