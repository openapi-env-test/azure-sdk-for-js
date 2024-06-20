/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { WorkspaceApiOperationPolicy } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  PolicyContract,
  WorkspaceApiOperationPolicyListByOperationNextOptionalParams,
  WorkspaceApiOperationPolicyListByOperationOptionalParams,
  WorkspaceApiOperationPolicyListByOperationResponse,
  PolicyIdName,
  WorkspaceApiOperationPolicyGetEntityTagOptionalParams,
  WorkspaceApiOperationPolicyGetEntityTagResponse,
  WorkspaceApiOperationPolicyGetOptionalParams,
  WorkspaceApiOperationPolicyGetResponse,
  WorkspaceApiOperationPolicyCreateOrUpdateOptionalParams,
  WorkspaceApiOperationPolicyCreateOrUpdateResponse,
  WorkspaceApiOperationPolicyDeleteOptionalParams,
  WorkspaceApiOperationPolicyListByOperationNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing WorkspaceApiOperationPolicy operations. */
export class WorkspaceApiOperationPolicyImpl
  implements WorkspaceApiOperationPolicy
{
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class WorkspaceApiOperationPolicy class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Get the list of policy configuration at the API Operation level.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API Management
   *                    service instance.
   * @param options The options parameters.
   */
  public listByOperation(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    apiId: string,
    operationId: string,
    options?: WorkspaceApiOperationPolicyListByOperationOptionalParams,
  ): PagedAsyncIterableIterator<PolicyContract> {
    const iter = this.listByOperationPagingAll(
      resourceGroupName,
      serviceName,
      workspaceId,
      apiId,
      operationId,
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
        return this.listByOperationPagingPage(
          resourceGroupName,
          serviceName,
          workspaceId,
          apiId,
          operationId,
          options,
          settings,
        );
      },
    };
  }

  private async *listByOperationPagingPage(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    apiId: string,
    operationId: string,
    options?: WorkspaceApiOperationPolicyListByOperationOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<PolicyContract[]> {
    let result: WorkspaceApiOperationPolicyListByOperationResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByOperation(
        resourceGroupName,
        serviceName,
        workspaceId,
        apiId,
        operationId,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByOperationNext(
        resourceGroupName,
        serviceName,
        workspaceId,
        apiId,
        operationId,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByOperationPagingAll(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    apiId: string,
    operationId: string,
    options?: WorkspaceApiOperationPolicyListByOperationOptionalParams,
  ): AsyncIterableIterator<PolicyContract> {
    for await (const page of this.listByOperationPagingPage(
      resourceGroupName,
      serviceName,
      workspaceId,
      apiId,
      operationId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Get the list of policy configuration at the API Operation level.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API Management
   *                    service instance.
   * @param options The options parameters.
   */
  private _listByOperation(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    apiId: string,
    operationId: string,
    options?: WorkspaceApiOperationPolicyListByOperationOptionalParams,
  ): Promise<WorkspaceApiOperationPolicyListByOperationResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        apiId,
        operationId,
        options,
      },
      listByOperationOperationSpec,
    );
  }

  /**
   * Gets the entity state (Etag) version of the API operation policy specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API Management
   *                    service instance.
   * @param policyId The identifier of the Policy.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    apiId: string,
    operationId: string,
    policyId: PolicyIdName,
    options?: WorkspaceApiOperationPolicyGetEntityTagOptionalParams,
  ): Promise<WorkspaceApiOperationPolicyGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        apiId,
        operationId,
        policyId,
        options,
      },
      getEntityTagOperationSpec,
    );
  }

  /**
   * Get the policy configuration at the API Operation level.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API Management
   *                    service instance.
   * @param policyId The identifier of the Policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    apiId: string,
    operationId: string,
    policyId: PolicyIdName,
    options?: WorkspaceApiOperationPolicyGetOptionalParams,
  ): Promise<WorkspaceApiOperationPolicyGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        apiId,
        operationId,
        policyId,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates policy configuration for the API Operation level.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API Management
   *                    service instance.
   * @param policyId The identifier of the Policy.
   * @param parameters The policy contents to apply.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    apiId: string,
    operationId: string,
    policyId: PolicyIdName,
    parameters: PolicyContract,
    options?: WorkspaceApiOperationPolicyCreateOrUpdateOptionalParams,
  ): Promise<WorkspaceApiOperationPolicyCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        apiId,
        operationId,
        policyId,
        parameters,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes the policy configuration at the Api Operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API Management
   *                    service instance.
   * @param policyId The identifier of the Policy.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    apiId: string,
    operationId: string,
    policyId: PolicyIdName,
    ifMatch: string,
    options?: WorkspaceApiOperationPolicyDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        apiId,
        operationId,
        policyId,
        ifMatch,
        options,
      },
      deleteOperationSpec,
    );
  }

  /**
   * ListByOperationNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param operationId Operation identifier within an API. Must be unique in the current API Management
   *                    service instance.
   * @param nextLink The nextLink from the previous successful call to the ListByOperation method.
   * @param options The options parameters.
   */
  private _listByOperationNext(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    apiId: string,
    operationId: string,
    nextLink: string,
    options?: WorkspaceApiOperationPolicyListByOperationNextOptionalParams,
  ): Promise<WorkspaceApiOperationPolicyListByOperationNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        apiId,
        operationId,
        nextLink,
        options,
      },
      listByOperationNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByOperationOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/apis/{apiId}/operations/{operationId}/policies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyCollection,
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
    Parameters.apiId,
    Parameters.operationId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getEntityTagOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/apis/{apiId}/operations/{operationId}/policies/{policyId}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.WorkspaceApiOperationPolicyGetEntityTagHeaders,
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
    Parameters.apiId,
    Parameters.operationId,
    Parameters.policyId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/apis/{apiId}/operations/{operationId}/policies/{policyId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyContract,
      headersMapper: Mappers.WorkspaceApiOperationPolicyGetHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.format],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId,
    Parameters.operationId,
    Parameters.policyId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/apis/{apiId}/operations/{operationId}/policies/{policyId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyContract,
      headersMapper: Mappers.WorkspaceApiOperationPolicyCreateOrUpdateHeaders,
    },
    201: {
      bodyMapper: Mappers.PolicyContract,
      headersMapper: Mappers.WorkspaceApiOperationPolicyCreateOrUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId,
    Parameters.operationId,
    Parameters.policyId,
    Parameters.workspaceId,
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
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/apis/{apiId}/operations/{operationId}/policies/{policyId}",
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
    Parameters.apiId,
    Parameters.operationId,
    Parameters.policyId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer,
};
const listByOperationNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyCollection,
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
    Parameters.apiId,
    Parameters.operationId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
