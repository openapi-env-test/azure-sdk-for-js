/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ApiSchema } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  SchemaContract,
  ApiSchemaListByApiNextOptionalParams,
  ApiSchemaListByApiOptionalParams,
  ApiSchemaListByApiResponse,
  ApiSchemaGetEntityTagOptionalParams,
  ApiSchemaGetEntityTagResponse,
  ApiSchemaGetOptionalParams,
  ApiSchemaGetResponse,
  ApiSchemaCreateOrUpdateOptionalParams,
  ApiSchemaCreateOrUpdateResponse,
  ApiSchemaDeleteOptionalParams,
  ApiSchemaListByApiNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ApiSchema operations. */
export class ApiSchemaImpl implements ApiSchema {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class ApiSchema class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Get the schema configuration at the API level.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  public listByApi(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiSchemaListByApiOptionalParams
  ): PagedAsyncIterableIterator<SchemaContract> {
    const iter = this.listByApiPagingAll(
      resourceGroupName,
      serviceName,
      apiId,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByApiPagingPage(
          resourceGroupName,
          serviceName,
          apiId,
          options
        );
      }
    };
  }

  private async *listByApiPagingPage(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiSchemaListByApiOptionalParams
  ): AsyncIterableIterator<SchemaContract[]> {
    let result = await this._listByApi(
      resourceGroupName,
      serviceName,
      apiId,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByApiNext(
        resourceGroupName,
        serviceName,
        apiId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByApiPagingAll(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiSchemaListByApiOptionalParams
  ): AsyncIterableIterator<SchemaContract> {
    for await (const page of this.listByApiPagingPage(
      resourceGroupName,
      serviceName,
      apiId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get the schema configuration at the API level.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  private _listByApi(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiSchemaListByApiOptionalParams
  ): Promise<ApiSchemaListByApiResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, options },
      listByApiOperationSpec
    );
  }

  /**
   * Gets the entity state (Etag) version of the schema specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param schemaId Schema id identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    schemaId: string,
    options?: ApiSchemaGetEntityTagOptionalParams
  ): Promise<ApiSchemaGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, schemaId, options },
      getEntityTagOperationSpec
    );
  }

  /**
   * Get the schema configuration at the API level.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param schemaId Schema id identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    schemaId: string,
    options?: ApiSchemaGetOptionalParams
  ): Promise<ApiSchemaGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, schemaId, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates schema configuration for the API.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param schemaId Schema id identifier. Must be unique in the current API Management service instance.
   * @param parameters The schema contents to apply.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    schemaId: string,
    parameters: SchemaContract,
    options?: ApiSchemaCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ApiSchemaCreateOrUpdateResponse>,
      ApiSchemaCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ApiSchemaCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, serviceName, apiId, schemaId, parameters, options },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
  }

  /**
   * Creates or updates schema configuration for the API.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param schemaId Schema id identifier. Must be unique in the current API Management service instance.
   * @param parameters The schema contents to apply.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    schemaId: string,
    parameters: SchemaContract,
    options?: ApiSchemaCreateOrUpdateOptionalParams
  ): Promise<ApiSchemaCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serviceName,
      apiId,
      schemaId,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the schema configuration at the Api.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param schemaId Schema id identifier. Must be unique in the current API Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    schemaId: string,
    ifMatch: string,
    options?: ApiSchemaDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, schemaId, ifMatch, options },
      deleteOperationSpec
    );
  }

  /**
   * ListByApiNext
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param nextLink The nextLink from the previous successful call to the ListByApi method.
   * @param options The options parameters.
   */
  private _listByApiNext(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    nextLink: string,
    options?: ApiSchemaListByApiNextOptionalParams
  ): Promise<ApiSchemaListByApiNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, nextLink, options },
      listByApiNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByApiOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/schemas",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SchemaCollection
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
    Parameters.apiId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getEntityTagOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/schemas/{schemaId}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.ApiSchemaGetEntityTagHeaders
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
    Parameters.apiId,
    Parameters.schemaId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/schemas/{schemaId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SchemaContract,
      headersMapper: Mappers.ApiSchemaGetHeaders
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
    Parameters.apiId,
    Parameters.schemaId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/schemas/{schemaId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SchemaContract,
      headersMapper: Mappers.ApiSchemaCreateOrUpdateHeaders
    },
    201: {
      bodyMapper: Mappers.SchemaContract,
      headersMapper: Mappers.ApiSchemaCreateOrUpdateHeaders
    },
    202: {
      bodyMapper: Mappers.SchemaContract,
      headersMapper: Mappers.ApiSchemaCreateOrUpdateHeaders
    },
    204: {
      bodyMapper: Mappers.SchemaContract,
      headersMapper: Mappers.ApiSchemaCreateOrUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters7,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId,
    Parameters.schemaId
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/schemas/{schemaId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.force],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId,
    Parameters.schemaId
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer
};
const listByApiNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SchemaCollection
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
    Parameters.apiId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
