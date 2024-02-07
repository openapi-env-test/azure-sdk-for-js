/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { PolicyRestriction } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  PolicyRestrictionContract,
  PolicyRestrictionListByServiceNextOptionalParams,
  PolicyRestrictionListByServiceOptionalParams,
  PolicyRestrictionListByServiceResponse,
  PolicyRestrictionGetEntityTagOptionalParams,
  PolicyRestrictionGetEntityTagResponse,
  PolicyRestrictionGetOptionalParams,
  PolicyRestrictionGetResponse,
  PolicyRestrictionCreateOrUpdateOptionalParams,
  PolicyRestrictionCreateOrUpdateResponse,
  PolicyRestrictionUpdateContract,
  PolicyRestrictionUpdateOptionalParams,
  PolicyRestrictionUpdateResponse,
  PolicyRestrictionDeleteOptionalParams,
  PolicyRestrictionListByServiceNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PolicyRestriction operations. */
export class PolicyRestrictionImpl implements PolicyRestriction {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class PolicyRestriction class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Gets all policy restrictions of API Management services.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  public listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: PolicyRestrictionListByServiceOptionalParams,
  ): PagedAsyncIterableIterator<PolicyRestrictionContract> {
    const iter = this.listByServicePagingAll(
      resourceGroupName,
      serviceName,
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
        return this.listByServicePagingPage(
          resourceGroupName,
          serviceName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByServicePagingPage(
    resourceGroupName: string,
    serviceName: string,
    options?: PolicyRestrictionListByServiceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<PolicyRestrictionContract[]> {
    let result: PolicyRestrictionListByServiceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByService(
        resourceGroupName,
        serviceName,
        options,
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
        options,
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
    options?: PolicyRestrictionListByServiceOptionalParams,
  ): AsyncIterableIterator<PolicyRestrictionContract> {
    for await (const page of this.listByServicePagingPage(
      resourceGroupName,
      serviceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets all policy restrictions of API Management services.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  private _listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: PolicyRestrictionListByServiceOptionalParams,
  ): Promise<PolicyRestrictionListByServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options },
      listByServiceOperationSpec,
    );
  }

  /**
   * Gets the entity state (Etag) version of the policy restriction in the Api Management service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param policyRestrictionId Policy restrictions after an entity level
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    policyRestrictionId: string,
    options?: PolicyRestrictionGetEntityTagOptionalParams,
  ): Promise<PolicyRestrictionGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, policyRestrictionId, options },
      getEntityTagOperationSpec,
    );
  }

  /**
   * Get the policy restriction of the Api Management service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param policyRestrictionId Policy restrictions after an entity level
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    policyRestrictionId: string,
    options?: PolicyRestrictionGetOptionalParams,
  ): Promise<PolicyRestrictionGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, policyRestrictionId, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates the policy restriction configuration of the Api Management service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param policyRestrictionId Policy restrictions after an entity level
   * @param parameters The policy restriction to apply.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    policyRestrictionId: string,
    parameters: PolicyRestrictionContract,
    options?: PolicyRestrictionCreateOrUpdateOptionalParams,
  ): Promise<PolicyRestrictionCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        policyRestrictionId,
        parameters,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Updates the policy restriction configuration of the Api Management service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param policyRestrictionId Policy restrictions after an entity level
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters The policy restriction to apply.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    policyRestrictionId: string,
    ifMatch: string,
    parameters: PolicyRestrictionUpdateContract,
    options?: PolicyRestrictionUpdateOptionalParams,
  ): Promise<PolicyRestrictionUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        policyRestrictionId,
        ifMatch,
        parameters,
        options,
      },
      updateOperationSpec,
    );
  }

  /**
   * Deletes the policy restriction configuration of the Api Management Service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param policyRestrictionId Policy restrictions after an entity level
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    policyRestrictionId: string,
    options?: PolicyRestrictionDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, policyRestrictionId, options },
      deleteOperationSpec,
    );
  }

  /**
   * ListByServiceNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param nextLink The nextLink from the previous successful call to the ListByService method.
   * @param options The options parameters.
   */
  private _listByServiceNext(
    resourceGroupName: string,
    serviceName: string,
    nextLink: string,
    options?: PolicyRestrictionListByServiceNextOptionalParams,
  ): Promise<PolicyRestrictionListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, nextLink, options },
      listByServiceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServiceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/policyRestrictions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyRestrictionCollection,
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
const getEntityTagOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/policyRestrictions/{policyRestrictionId}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.PolicyRestrictionGetEntityTagHeaders,
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
    Parameters.policyRestrictionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/policyRestrictions/{policyRestrictionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyRestrictionContract,
      headersMapper: Mappers.PolicyRestrictionGetHeaders,
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
    Parameters.policyRestrictionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/policyRestrictions/{policyRestrictionId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyRestrictionContract,
      headersMapper: Mappers.PolicyRestrictionCreateOrUpdateHeaders,
    },
    201: {
      bodyMapper: Mappers.PolicyRestrictionContract,
      headersMapper: Mappers.PolicyRestrictionCreateOrUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters63,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.policyRestrictionId,
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch,
  ],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/policyRestrictions/{policyRestrictionId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyRestrictionContract,
      headersMapper: Mappers.PolicyRestrictionUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters64,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.policyRestrictionId,
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch1,
  ],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/policyRestrictions/{policyRestrictionId}",
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
    Parameters.policyRestrictionId,
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch],
  serializer,
};
const listByServiceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyRestrictionCollection,
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
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
