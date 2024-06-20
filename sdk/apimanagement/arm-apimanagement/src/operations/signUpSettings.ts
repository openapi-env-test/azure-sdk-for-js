/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SignUpSettings } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  SignUpSettingsGetEntityTagOptionalParams,
  SignUpSettingsGetEntityTagResponse,
  SignUpSettingsGetOptionalParams,
  SignUpSettingsGetResponse,
  PortalSignupSettings,
  SignUpSettingsUpdateOptionalParams,
  SignUpSettingsCreateOrUpdateOptionalParams,
  SignUpSettingsCreateOrUpdateResponse,
} from "../models";

/** Class containing SignUpSettings operations. */
export class SignUpSettingsImpl implements SignUpSettings {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class SignUpSettings class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Gets the entity state (Etag) version of the SignUpSettings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    options?: SignUpSettingsGetEntityTagOptionalParams,
  ): Promise<SignUpSettingsGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options },
      getEntityTagOperationSpec,
    );
  }

  /**
   * Get Sign Up Settings for the Portal
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    options?: SignUpSettingsGetOptionalParams,
  ): Promise<SignUpSettingsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options },
      getOperationSpec,
    );
  }

  /**
   * Update Sign-Up settings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Update Sign-Up settings.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    ifMatch: string,
    parameters: PortalSignupSettings,
    options?: SignUpSettingsUpdateOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, ifMatch, parameters, options },
      updateOperationSpec,
    );
  }

  /**
   * Create or Update Sign-Up settings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param parameters Create or update parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    parameters: PortalSignupSettings,
    options?: SignUpSettingsCreateOrUpdateOptionalParams,
  ): Promise<SignUpSettingsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, parameters, options },
      createOrUpdateOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getEntityTagOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/portalsettings/signup",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.SignUpSettingsGetEntityTagHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/portalsettings/signup",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PortalSignupSettings,
      headersMapper: Mappers.SignUpSettingsGetHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/portalsettings/signup",
  httpMethod: "PATCH",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters68,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch1,
  ],
  mediaType: "json",
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/portalsettings/signup",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PortalSignupSettings,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters68,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch,
  ],
  mediaType: "json",
  serializer,
};
