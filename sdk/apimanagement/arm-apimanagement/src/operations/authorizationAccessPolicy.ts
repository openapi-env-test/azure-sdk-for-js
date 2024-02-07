/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { AuthorizationAccessPolicy } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  AuthorizationAccessPolicyContract,
  AuthorizationAccessPolicyListByAuthorizationNextOptionalParams,
  AuthorizationAccessPolicyListByAuthorizationOptionalParams,
  AuthorizationAccessPolicyListByAuthorizationResponse,
  AuthorizationAccessPolicyGetOptionalParams,
  AuthorizationAccessPolicyGetResponse,
  AuthorizationAccessPolicyCreateOrUpdateOptionalParams,
  AuthorizationAccessPolicyCreateOrUpdateResponse,
  AuthorizationAccessPolicyDeleteOptionalParams,
  AuthorizationAccessPolicyListByAuthorizationNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AuthorizationAccessPolicy operations. */
export class AuthorizationAccessPolicyImpl
  implements AuthorizationAccessPolicy
{
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class AuthorizationAccessPolicy class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists a collection of authorization access policy defined within a authorization.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param authorizationProviderId Identifier of the authorization provider.
   * @param authorizationId Identifier of the authorization.
   * @param options The options parameters.
   */
  public listByAuthorization(
    resourceGroupName: string,
    serviceName: string,
    authorizationProviderId: string,
    authorizationId: string,
    options?: AuthorizationAccessPolicyListByAuthorizationOptionalParams,
  ): PagedAsyncIterableIterator<AuthorizationAccessPolicyContract> {
    const iter = this.listByAuthorizationPagingAll(
      resourceGroupName,
      serviceName,
      authorizationProviderId,
      authorizationId,
      options,
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
        return this.listByAuthorizationPagingPage(
          resourceGroupName,
          serviceName,
          authorizationProviderId,
          authorizationId,
          options,
          settings,
        );
      },
    };
  }

  private async *listByAuthorizationPagingPage(
    resourceGroupName: string,
    serviceName: string,
    authorizationProviderId: string,
    authorizationId: string,
    options?: AuthorizationAccessPolicyListByAuthorizationOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<AuthorizationAccessPolicyContract[]> {
    let result: AuthorizationAccessPolicyListByAuthorizationResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByAuthorization(
        resourceGroupName,
        serviceName,
        authorizationProviderId,
        authorizationId,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByAuthorizationNext(
        resourceGroupName,
        serviceName,
        authorizationProviderId,
        authorizationId,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByAuthorizationPagingAll(
    resourceGroupName: string,
    serviceName: string,
    authorizationProviderId: string,
    authorizationId: string,
    options?: AuthorizationAccessPolicyListByAuthorizationOptionalParams,
  ): AsyncIterableIterator<AuthorizationAccessPolicyContract> {
    for await (const page of this.listByAuthorizationPagingPage(
      resourceGroupName,
      serviceName,
      authorizationProviderId,
      authorizationId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists a collection of authorization access policy defined within a authorization.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param authorizationProviderId Identifier of the authorization provider.
   * @param authorizationId Identifier of the authorization.
   * @param options The options parameters.
   */
  private _listByAuthorization(
    resourceGroupName: string,
    serviceName: string,
    authorizationProviderId: string,
    authorizationId: string,
    options?: AuthorizationAccessPolicyListByAuthorizationOptionalParams,
  ): Promise<AuthorizationAccessPolicyListByAuthorizationResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        authorizationProviderId,
        authorizationId,
        options,
      },
      listByAuthorizationOperationSpec,
    );
  }

  /**
   * Gets the details of the authorization access policy specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param authorizationProviderId Identifier of the authorization provider.
   * @param authorizationId Identifier of the authorization.
   * @param authorizationAccessPolicyId Identifier of the authorization access policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    authorizationProviderId: string,
    authorizationId: string,
    authorizationAccessPolicyId: string,
    options?: AuthorizationAccessPolicyGetOptionalParams,
  ): Promise<AuthorizationAccessPolicyGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        authorizationProviderId,
        authorizationId,
        authorizationAccessPolicyId,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates Authorization Access Policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param authorizationProviderId Identifier of the authorization provider.
   * @param authorizationId Identifier of the authorization.
   * @param authorizationAccessPolicyId Identifier of the authorization access policy.
   * @param parameters Create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    authorizationProviderId: string,
    authorizationId: string,
    authorizationAccessPolicyId: string,
    parameters: AuthorizationAccessPolicyContract,
    options?: AuthorizationAccessPolicyCreateOrUpdateOptionalParams,
  ): Promise<AuthorizationAccessPolicyCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        authorizationProviderId,
        authorizationId,
        authorizationAccessPolicyId,
        parameters,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes specific access policy from the Authorization.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param authorizationProviderId Identifier of the authorization provider.
   * @param authorizationId Identifier of the authorization.
   * @param authorizationAccessPolicyId Identifier of the authorization access policy.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    authorizationProviderId: string,
    authorizationId: string,
    authorizationAccessPolicyId: string,
    ifMatch: string,
    options?: AuthorizationAccessPolicyDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        authorizationProviderId,
        authorizationId,
        authorizationAccessPolicyId,
        ifMatch,
        options,
      },
      deleteOperationSpec,
    );
  }

  /**
   * ListByAuthorizationNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param authorizationProviderId Identifier of the authorization provider.
   * @param authorizationId Identifier of the authorization.
   * @param nextLink The nextLink from the previous successful call to the ListByAuthorization method.
   * @param options The options parameters.
   */
  private _listByAuthorizationNext(
    resourceGroupName: string,
    serviceName: string,
    authorizationProviderId: string,
    authorizationId: string,
    nextLink: string,
    options?: AuthorizationAccessPolicyListByAuthorizationNextOptionalParams,
  ): Promise<AuthorizationAccessPolicyListByAuthorizationNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        authorizationProviderId,
        authorizationId,
        nextLink,
        options,
      },
      listByAuthorizationNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByAuthorizationOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/authorizationProviders/{authorizationProviderId}/authorizations/{authorizationId}/accessPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationAccessPolicyCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.authorizationProviderId,
    Parameters.authorizationId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/authorizationProviders/{authorizationProviderId}/authorizations/{authorizationId}/accessPolicies/{authorizationAccessPolicyId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationAccessPolicyContract,
      headersMapper: Mappers.AuthorizationAccessPolicyGetHeaders,
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
    Parameters.authorizationProviderId,
    Parameters.authorizationId,
    Parameters.authorizationAccessPolicyId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/authorizationProviders/{authorizationProviderId}/authorizations/{authorizationId}/accessPolicies/{authorizationAccessPolicyId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationAccessPolicyContract,
      headersMapper: Mappers.AuthorizationAccessPolicyCreateOrUpdateHeaders,
    },
    201: {
      bodyMapper: Mappers.AuthorizationAccessPolicyContract,
      headersMapper: Mappers.AuthorizationAccessPolicyCreateOrUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters24,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.authorizationProviderId,
    Parameters.authorizationId,
    Parameters.authorizationAccessPolicyId,
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch,
  ],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/authorizationProviders/{authorizationProviderId}/authorizations/{authorizationId}/accessPolicies/{authorizationAccessPolicyId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
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
    Parameters.authorizationProviderId,
    Parameters.authorizationId,
    Parameters.authorizationAccessPolicyId,
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer,
};
const listByAuthorizationNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationAccessPolicyCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.authorizationProviderId,
    Parameters.authorizationId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
