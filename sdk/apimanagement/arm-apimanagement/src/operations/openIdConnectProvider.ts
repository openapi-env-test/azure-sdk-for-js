/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { OpenIdConnectProvider } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  OpenidConnectProviderContract,
  OpenIdConnectProviderListByServiceNextOptionalParams,
  OpenIdConnectProviderListByServiceOptionalParams,
  OpenIdConnectProviderListByServiceResponse,
  OpenIdConnectProviderGetEntityTagOptionalParams,
  OpenIdConnectProviderGetEntityTagResponse,
  OpenIdConnectProviderGetOptionalParams,
  OpenIdConnectProviderGetResponse,
  OpenIdConnectProviderCreateOrUpdateOptionalParams,
  OpenIdConnectProviderCreateOrUpdateResponse,
  OpenidConnectProviderUpdateContract,
  OpenIdConnectProviderUpdateOptionalParams,
  OpenIdConnectProviderUpdateResponse,
  OpenIdConnectProviderDeleteOptionalParams,
  OpenIdConnectProviderListSecretsOptionalParams,
  OpenIdConnectProviderListSecretsResponse,
  OpenIdConnectProviderListByServiceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing OpenIdConnectProvider operations. */
export class OpenIdConnectProviderImpl implements OpenIdConnectProvider {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class OpenIdConnectProvider class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists of all the OpenId Connect Providers.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  public listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: OpenIdConnectProviderListByServiceOptionalParams
  ): PagedAsyncIterableIterator<OpenidConnectProviderContract> {
    const iter = this.listByServicePagingAll(
      resourceGroupName,
      serviceName,
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
          options,
          settings
        );
      }
    };
  }

  private async *listByServicePagingPage(
    resourceGroupName: string,
    serviceName: string,
    options?: OpenIdConnectProviderListByServiceOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<OpenidConnectProviderContract[]> {
    let result: OpenIdConnectProviderListByServiceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByService(
        resourceGroupName,
        serviceName,
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
    options?: OpenIdConnectProviderListByServiceOptionalParams
  ): AsyncIterableIterator<OpenidConnectProviderContract> {
    for await (const page of this.listByServicePagingPage(
      resourceGroupName,
      serviceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists of all the OpenId Connect Providers.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  private _listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: OpenIdConnectProviderListByServiceOptionalParams
  ): Promise<OpenIdConnectProviderListByServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options },
      listByServiceOperationSpec
    );
  }

  /**
   * Gets the entity state (Etag) version of the openIdConnectProvider specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param opid Identifier of the OpenID Connect Provider.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    opid: string,
    options?: OpenIdConnectProviderGetEntityTagOptionalParams
  ): Promise<OpenIdConnectProviderGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, opid, options },
      getEntityTagOperationSpec
    );
  }

  /**
   * Gets specific OpenID Connect Provider without secrets.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param opid Identifier of the OpenID Connect Provider.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    opid: string,
    options?: OpenIdConnectProviderGetOptionalParams
  ): Promise<OpenIdConnectProviderGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, opid, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates the OpenID Connect Provider.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param opid Identifier of the OpenID Connect Provider.
   * @param parameters Create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    opid: string,
    parameters: OpenidConnectProviderContract,
    options?: OpenIdConnectProviderCreateOrUpdateOptionalParams
  ): Promise<OpenIdConnectProviderCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, opid, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Updates the specific OpenID Connect Provider.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param opid Identifier of the OpenID Connect Provider.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Update parameters.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    opid: string,
    ifMatch: string,
    parameters: OpenidConnectProviderUpdateContract,
    options?: OpenIdConnectProviderUpdateOptionalParams
  ): Promise<OpenIdConnectProviderUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, opid, ifMatch, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * Deletes specific OpenID Connect Provider of the API Management service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param opid Identifier of the OpenID Connect Provider.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    opid: string,
    ifMatch: string,
    options?: OpenIdConnectProviderDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, opid, ifMatch, options },
      deleteOperationSpec
    );
  }

  /**
   * Gets the client secret details of the OpenID Connect Provider.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param opid Identifier of the OpenID Connect Provider.
   * @param options The options parameters.
   */
  listSecrets(
    resourceGroupName: string,
    serviceName: string,
    opid: string,
    options?: OpenIdConnectProviderListSecretsOptionalParams
  ): Promise<OpenIdConnectProviderListSecretsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, opid, options },
      listSecretsOperationSpec
    );
  }

  /**
   * ListByServiceNext
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param nextLink The nextLink from the previous successful call to the ListByService method.
   * @param options The options parameters.
   */
  private _listByServiceNext(
    resourceGroupName: string,
    serviceName: string,
    nextLink: string,
    options?: OpenIdConnectProviderListByServiceNextOptionalParams
  ): Promise<OpenIdConnectProviderListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, nextLink, options },
      listByServiceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServiceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/openidConnectProviders",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OpenIdConnectProviderCollection
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
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getEntityTagOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/openidConnectProviders/{opid}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.OpenIdConnectProviderGetEntityTagHeaders
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
    Parameters.opid
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/openidConnectProviders/{opid}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OpenidConnectProviderContract,
      headersMapper: Mappers.OpenIdConnectProviderGetHeaders
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
    Parameters.opid
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/openidConnectProviders/{opid}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.OpenidConnectProviderContract,
      headersMapper: Mappers.OpenIdConnectProviderCreateOrUpdateHeaders
    },
    201: {
      bodyMapper: Mappers.OpenidConnectProviderContract,
      headersMapper: Mappers.OpenIdConnectProviderCreateOrUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters44,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.opid
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/openidConnectProviders/{opid}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.OpenidConnectProviderContract,
      headersMapper: Mappers.OpenIdConnectProviderUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters45,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.opid
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch1
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/openidConnectProviders/{opid}",
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
    Parameters.opid
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer
};
const listSecretsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/openidConnectProviders/{opid}/listSecrets",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ClientSecretContract,
      headersMapper: Mappers.OpenIdConnectProviderListSecretsHeaders
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
    Parameters.opid
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByServiceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OpenIdConnectProviderCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
