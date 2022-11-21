/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { EnvironmentTypes } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DevCenterClient } from "../devCenterClient";
import {
  EnvironmentType,
  EnvironmentTypesListByDevCenterNextOptionalParams,
  EnvironmentTypesListByDevCenterOptionalParams,
  EnvironmentTypesListByDevCenterResponse,
  EnvironmentTypesGetOptionalParams,
  EnvironmentTypesGetResponse,
  EnvironmentTypesCreateOrUpdateOptionalParams,
  EnvironmentTypesCreateOrUpdateResponse,
  EnvironmentTypeUpdate,
  EnvironmentTypesUpdateOptionalParams,
  EnvironmentTypesUpdateResponse,
  EnvironmentTypesDeleteOptionalParams,
  EnvironmentTypesListByDevCenterNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing EnvironmentTypes operations. */
export class EnvironmentTypesImpl implements EnvironmentTypes {
  private readonly client: DevCenterClient;

  /**
   * Initialize a new instance of the class EnvironmentTypes class.
   * @param client Reference to the service client
   */
  constructor(client: DevCenterClient) {
    this.client = client;
  }

  /**
   * Lists environment types for the devcenter.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param options The options parameters.
   */
  public listByDevCenter(
    resourceGroupName: string,
    devCenterName: string,
    options?: EnvironmentTypesListByDevCenterOptionalParams
  ): PagedAsyncIterableIterator<EnvironmentType> {
    const iter = this.listByDevCenterPagingAll(
      resourceGroupName,
      devCenterName,
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
        return this.listByDevCenterPagingPage(
          resourceGroupName,
          devCenterName,
          options
        );
      }
    };
  }

  private async *listByDevCenterPagingPage(
    resourceGroupName: string,
    devCenterName: string,
    options?: EnvironmentTypesListByDevCenterOptionalParams
  ): AsyncIterableIterator<EnvironmentType[]> {
    let result = await this._listByDevCenter(
      resourceGroupName,
      devCenterName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByDevCenterNext(
        resourceGroupName,
        devCenterName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByDevCenterPagingAll(
    resourceGroupName: string,
    devCenterName: string,
    options?: EnvironmentTypesListByDevCenterOptionalParams
  ): AsyncIterableIterator<EnvironmentType> {
    for await (const page of this.listByDevCenterPagingPage(
      resourceGroupName,
      devCenterName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists environment types for the devcenter.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param options The options parameters.
   */
  private _listByDevCenter(
    resourceGroupName: string,
    devCenterName: string,
    options?: EnvironmentTypesListByDevCenterOptionalParams
  ): Promise<EnvironmentTypesListByDevCenterResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, devCenterName, options },
      listByDevCenterOperationSpec
    );
  }

  /**
   * Gets an environment type.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param environmentTypeName The name of the environment type.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    devCenterName: string,
    environmentTypeName: string,
    options?: EnvironmentTypesGetOptionalParams
  ): Promise<EnvironmentTypesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, devCenterName, environmentTypeName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates an environment type.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param environmentTypeName The name of the environment type.
   * @param body Represents an Environment Type.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    devCenterName: string,
    environmentTypeName: string,
    body: EnvironmentType,
    options?: EnvironmentTypesCreateOrUpdateOptionalParams
  ): Promise<EnvironmentTypesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, devCenterName, environmentTypeName, body, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Partially updates an environment type.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param environmentTypeName The name of the environment type.
   * @param body Updatable environment type properties.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    devCenterName: string,
    environmentTypeName: string,
    body: EnvironmentTypeUpdate,
    options?: EnvironmentTypesUpdateOptionalParams
  ): Promise<EnvironmentTypesUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, devCenterName, environmentTypeName, body, options },
      updateOperationSpec
    );
  }

  /**
   * Deletes an environment type.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param environmentTypeName The name of the environment type.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    devCenterName: string,
    environmentTypeName: string,
    options?: EnvironmentTypesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, devCenterName, environmentTypeName, options },
      deleteOperationSpec
    );
  }

  /**
   * ListByDevCenterNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param nextLink The nextLink from the previous successful call to the ListByDevCenter method.
   * @param options The options parameters.
   */
  private _listByDevCenterNext(
    resourceGroupName: string,
    devCenterName: string,
    nextLink: string,
    options?: EnvironmentTypesListByDevCenterNextOptionalParams
  ): Promise<EnvironmentTypesListByDevCenterNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, devCenterName, nextLink, options },
      listByDevCenterNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDevCenterOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/environmentTypes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnvironmentTypeListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/environmentTypes/{environmentTypeName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnvironmentType
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.environmentTypeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/environmentTypes/{environmentTypeName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.EnvironmentType
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.body8,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.environmentTypeName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/environmentTypes/{environmentTypeName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.EnvironmentType
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.body9,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.environmentTypeName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/devcenters/{devCenterName}/environmentTypes/{environmentTypeName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.environmentTypeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByDevCenterNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnvironmentTypeListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.devCenterName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
