/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { NetworkStatus } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  NetworkStatusListByServiceOptionalParams,
  NetworkStatusListByServiceResponse,
  NetworkStatusListByLocationOptionalParams,
  NetworkStatusListByLocationResponse,
} from "../models";

/** Class containing NetworkStatus operations. */
export class NetworkStatusImpl implements NetworkStatus {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class NetworkStatus class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Gets the Connectivity Status to the external resources on which the Api Management service depends
   * from inside the Cloud Service. This also returns the DNS Servers as visible to the CloudService.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: NetworkStatusListByServiceOptionalParams,
  ): Promise<NetworkStatusListByServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options },
      listByServiceOperationSpec,
    );
  }

  /**
   * Gets the Connectivity Status to the external resources on which the Api Management service depends
   * from inside the Cloud Service. This also returns the DNS Servers as visible to the CloudService.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param locationName Location in which the API Management service is deployed. This is one of the
   *                     Azure Regions like West US, East US, South Central US.
   * @param options The options parameters.
   */
  listByLocation(
    resourceGroupName: string,
    serviceName: string,
    locationName: string,
    options?: NetworkStatusListByLocationOptionalParams,
  ): Promise<NetworkStatusListByLocationResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, locationName, options },
      listByLocationOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServiceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/networkstatus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NetworkStatusContractByLocation",
            },
          },
        },
      },
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
const listByLocationOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/locations/{locationName}/networkstatus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkStatusContract,
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
    Parameters.locationName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
