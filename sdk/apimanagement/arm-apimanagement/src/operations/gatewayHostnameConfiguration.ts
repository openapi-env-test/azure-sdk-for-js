/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { GatewayHostnameConfiguration } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  GatewayHostnameConfigurationContract,
  GatewayHostnameConfigurationListByServiceNextOptionalParams,
  GatewayHostnameConfigurationListByServiceOptionalParams,
  GatewayHostnameConfigurationListByServiceResponse,
  GatewayHostnameConfigurationGetEntityTagOptionalParams,
  GatewayHostnameConfigurationGetEntityTagResponse,
  GatewayHostnameConfigurationGetOptionalParams,
  GatewayHostnameConfigurationGetResponse,
  GatewayHostnameConfigurationCreateOrUpdateOptionalParams,
  GatewayHostnameConfigurationCreateOrUpdateResponse,
  GatewayHostnameConfigurationDeleteOptionalParams,
  GatewayHostnameConfigurationListByServiceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing GatewayHostnameConfiguration operations. */
export class GatewayHostnameConfigurationImpl
  implements GatewayHostnameConfiguration {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class GatewayHostnameConfiguration class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists the collection of hostname configurations for the specified gateway.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param options The options parameters.
   */
  public listByService(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    options?: GatewayHostnameConfigurationListByServiceOptionalParams
  ): PagedAsyncIterableIterator<GatewayHostnameConfigurationContract> {
    const iter = this.listByServicePagingAll(
      resourceGroupName,
      serviceName,
      gatewayId,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByServicePagingPage(
          resourceGroupName,
          serviceName,
          gatewayId,
          options,
          settings
        );
      }
    };
  }

  private async *listByServicePagingPage(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    options?: GatewayHostnameConfigurationListByServiceOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<GatewayHostnameConfigurationContract[]> {
    let result: GatewayHostnameConfigurationListByServiceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByService(
        resourceGroupName,
        serviceName,
        gatewayId,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByServiceNext(
        resourceGroupName,
        serviceName,
        gatewayId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByServicePagingAll(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    options?: GatewayHostnameConfigurationListByServiceOptionalParams
  ): AsyncIterableIterator<GatewayHostnameConfigurationContract> {
    for await (const page of this.listByServicePagingPage(
      resourceGroupName,
      serviceName,
      gatewayId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the collection of hostname configurations for the specified gateway.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param options The options parameters.
   */
  private _listByService(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    options?: GatewayHostnameConfigurationListByServiceOptionalParams
  ): Promise<GatewayHostnameConfigurationListByServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, gatewayId, options },
      listByServiceOperationSpec
    );
  }

  /**
   * Checks that hostname configuration entity specified by identifier exists for specified Gateway
   * entity.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param hcId Gateway hostname configuration identifier. Must be unique in the scope of parent Gateway
   *             entity.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    hcId: string,
    options?: GatewayHostnameConfigurationGetEntityTagOptionalParams
  ): Promise<GatewayHostnameConfigurationGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, gatewayId, hcId, options },
      getEntityTagOperationSpec
    );
  }

  /**
   * Get details of a hostname configuration
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param hcId Gateway hostname configuration identifier. Must be unique in the scope of parent Gateway
   *             entity.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    hcId: string,
    options?: GatewayHostnameConfigurationGetOptionalParams
  ): Promise<GatewayHostnameConfigurationGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, gatewayId, hcId, options },
      getOperationSpec
    );
  }

  /**
   * Creates of updates hostname configuration for a Gateway.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param hcId Gateway hostname configuration identifier. Must be unique in the scope of parent Gateway
   *             entity.
   * @param parameters Gateway hostname configuration details.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    hcId: string,
    parameters: GatewayHostnameConfigurationContract,
    options?: GatewayHostnameConfigurationCreateOrUpdateOptionalParams
  ): Promise<GatewayHostnameConfigurationCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, gatewayId, hcId, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes the specified hostname configuration from the specified Gateway.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param hcId Gateway hostname configuration identifier. Must be unique in the scope of parent Gateway
   *             entity.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    hcId: string,
    ifMatch: string,
    options?: GatewayHostnameConfigurationDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, gatewayId, hcId, ifMatch, options },
      deleteOperationSpec
    );
  }

  /**
   * ListByServiceNext
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param nextLink The nextLink from the previous successful call to the ListByService method.
   * @param options The options parameters.
   */
  private _listByServiceNext(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    nextLink: string,
    options?: GatewayHostnameConfigurationListByServiceNextOptionalParams
  ): Promise<GatewayHostnameConfigurationListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, gatewayId, nextLink, options },
      listByServiceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServiceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/gateways/{gatewayId}/hostnameConfigurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GatewayHostnameConfigurationCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.gatewayId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getEntityTagOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/gateways/{gatewayId}/hostnameConfigurations/{hcId}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.GatewayHostnameConfigurationGetEntityTagHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.gatewayId,
    Parameters.hcId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/gateways/{gatewayId}/hostnameConfigurations/{hcId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GatewayHostnameConfigurationContract,
      headersMapper: Mappers.GatewayHostnameConfigurationGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.gatewayId,
    Parameters.hcId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/gateways/{gatewayId}/hostnameConfigurations/{hcId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.GatewayHostnameConfigurationContract,
      headersMapper: Mappers.GatewayHostnameConfigurationCreateOrUpdateHeaders
    },
    201: {
      bodyMapper: Mappers.GatewayHostnameConfigurationContract,
      headersMapper: Mappers.GatewayHostnameConfigurationCreateOrUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters33,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.gatewayId,
    Parameters.hcId
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/gateways/{gatewayId}/hostnameConfigurations/{hcId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.gatewayId,
    Parameters.hcId
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer
};
const listByServiceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GatewayHostnameConfigurationCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.gatewayId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
