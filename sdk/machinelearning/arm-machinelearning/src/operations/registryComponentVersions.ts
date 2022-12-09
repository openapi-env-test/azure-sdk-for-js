/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { RegistryComponentVersions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMachineLearningServices } from "../azureMachineLearningServices";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ComponentVersion,
  RegistryComponentVersionsListNextOptionalParams,
  RegistryComponentVersionsListOptionalParams,
  RegistryComponentVersionsListResponse,
  RegistryComponentVersionsDeleteOptionalParams,
  RegistryComponentVersionsGetOptionalParams,
  RegistryComponentVersionsGetResponse,
  RegistryComponentVersionsCreateOrUpdateOptionalParams,
  RegistryComponentVersionsCreateOrUpdateResponse,
  RegistryComponentVersionsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing RegistryComponentVersions operations. */
export class RegistryComponentVersionsImpl
  implements RegistryComponentVersions {
  private readonly client: AzureMachineLearningServices;

  /**
   * Initialize a new instance of the class RegistryComponentVersions class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMachineLearningServices) {
    this.client = client;
  }

  /**
   * List versions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry.
   * @param componentName Container name.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    registryName: string,
    componentName: string,
    options?: RegistryComponentVersionsListOptionalParams
  ): PagedAsyncIterableIterator<ComponentVersion> {
    const iter = this.listPagingAll(
      resourceGroupName,
      registryName,
      componentName,
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
        return this.listPagingPage(
          resourceGroupName,
          registryName,
          componentName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    registryName: string,
    componentName: string,
    options?: RegistryComponentVersionsListOptionalParams
  ): AsyncIterableIterator<ComponentVersion[]> {
    let result = await this._list(
      resourceGroupName,
      registryName,
      componentName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        registryName,
        componentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    registryName: string,
    componentName: string,
    options?: RegistryComponentVersionsListOptionalParams
  ): AsyncIterableIterator<ComponentVersion> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      registryName,
      componentName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List versions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry.
   * @param componentName Container name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    registryName: string,
    componentName: string,
    options?: RegistryComponentVersionsListOptionalParams
  ): Promise<RegistryComponentVersionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, componentName, options },
      listOperationSpec
    );
  }

  /**
   * Delete version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry.
   * @param componentName Container name.
   * @param version Version identifier.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    registryName: string,
    componentName: string,
    version: string,
    options?: RegistryComponentVersionsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
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
      { resourceGroupName, registryName, componentName, version, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry.
   * @param componentName Container name.
   * @param version Version identifier.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    registryName: string,
    componentName: string,
    version: string,
    options?: RegistryComponentVersionsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      registryName,
      componentName,
      version,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry.
   * @param componentName Container name.
   * @param version Version identifier.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    registryName: string,
    componentName: string,
    version: string,
    options?: RegistryComponentVersionsGetOptionalParams
  ): Promise<RegistryComponentVersionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, componentName, version, options },
      getOperationSpec
    );
  }

  /**
   * Create or update version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry.
   * @param componentName Container name.
   * @param version Version identifier.
   * @param body Version entity to create or update.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    registryName: string,
    componentName: string,
    version: string,
    body: ComponentVersion,
    options?: RegistryComponentVersionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<RegistryComponentVersionsCreateOrUpdateResponse>,
      RegistryComponentVersionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<RegistryComponentVersionsCreateOrUpdateResponse> => {
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
      {
        resourceGroupName,
        registryName,
        componentName,
        version,
        body,
        options
      },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "original-uri"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry.
   * @param componentName Container name.
   * @param version Version identifier.
   * @param body Version entity to create or update.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    registryName: string,
    componentName: string,
    version: string,
    body: ComponentVersion,
    options?: RegistryComponentVersionsCreateOrUpdateOptionalParams
  ): Promise<RegistryComponentVersionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      registryName,
      componentName,
      version,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry.
   * @param componentName Container name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    registryName: string,
    componentName: string,
    nextLink: string,
    options?: RegistryComponentVersionsListNextOptionalParams
  ): Promise<RegistryComponentVersionsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, componentName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/components/{componentName}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ComponentVersionResourceArmPaginatedResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skip,
    Parameters.orderBy,
    Parameters.top
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.componentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/components/{componentName}/versions/{version}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.version,
    Parameters.componentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/components/{componentName}/versions/{version}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ComponentVersion
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.version,
    Parameters.componentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/components/{componentName}/versions/{version}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ComponentVersion
    },
    201: {
      bodyMapper: Mappers.ComponentVersion
    },
    202: {
      bodyMapper: Mappers.ComponentVersion
    },
    204: {
      bodyMapper: Mappers.ComponentVersion
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.version,
    Parameters.componentName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ComponentVersionResourceArmPaginatedResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skip,
    Parameters.orderBy,
    Parameters.top
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.registryName,
    Parameters.componentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
