/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AgentPools } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerRegistryManagementClient } from "../containerRegistryManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  AgentPool,
  AgentPoolsListNextOptionalParams,
  AgentPoolsListOptionalParams,
  AgentPoolsGetOptionalParams,
  AgentPoolsGetResponse,
  AgentPoolsCreateOptionalParams,
  AgentPoolsCreateResponse,
  AgentPoolsDeleteOptionalParams,
  AgentPoolUpdateParameters,
  AgentPoolsUpdateOptionalParams,
  AgentPoolsUpdateResponse,
  AgentPoolsListResponse,
  AgentPoolsGetQueueStatusOptionalParams,
  AgentPoolsGetQueueStatusResponse,
  AgentPoolsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AgentPools operations. */
export class AgentPoolsImpl implements AgentPools {
  private readonly client: ContainerRegistryManagementClient;

  /**
   * Initialize a new instance of the class AgentPools class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerRegistryManagementClient) {
    this.client = client;
  }

  /**
   * Lists all the agent pools for a specified container registry.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    registryName: string,
    options?: AgentPoolsListOptionalParams
  ): PagedAsyncIterableIterator<AgentPool> {
    const iter = this.listPagingAll(resourceGroupName, registryName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, registryName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    registryName: string,
    options?: AgentPoolsListOptionalParams
  ): AsyncIterableIterator<AgentPool[]> {
    let result = await this._list(resourceGroupName, registryName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        registryName,
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
    options?: AgentPoolsListOptionalParams
  ): AsyncIterableIterator<AgentPool> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      registryName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the detailed information for a given agent pool.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param agentPoolName The name of the agent pool.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    registryName: string,
    agentPoolName: string,
    options?: AgentPoolsGetOptionalParams
  ): Promise<AgentPoolsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, agentPoolName, options },
      getOperationSpec
    );
  }

  /**
   * Creates an agent pool for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param agentPoolName The name of the agent pool.
   * @param agentPool The parameters of an agent pool that needs to scheduled.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    registryName: string,
    agentPoolName: string,
    agentPool: AgentPool,
    options?: AgentPoolsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AgentPoolsCreateResponse>,
      AgentPoolsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AgentPoolsCreateResponse> => {
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
      { resourceGroupName, registryName, agentPoolName, agentPool, options },
      createOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates an agent pool for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param agentPoolName The name of the agent pool.
   * @param agentPool The parameters of an agent pool that needs to scheduled.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    registryName: string,
    agentPoolName: string,
    agentPool: AgentPool,
    options?: AgentPoolsCreateOptionalParams
  ): Promise<AgentPoolsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      registryName,
      agentPoolName,
      agentPool,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a specified agent pool resource.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param agentPoolName The name of the agent pool.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    registryName: string,
    agentPoolName: string,
    options?: AgentPoolsDeleteOptionalParams
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
      { resourceGroupName, registryName, agentPoolName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a specified agent pool resource.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param agentPoolName The name of the agent pool.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    registryName: string,
    agentPoolName: string,
    options?: AgentPoolsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      registryName,
      agentPoolName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an agent pool with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param agentPoolName The name of the agent pool.
   * @param updateParameters The parameters for updating an agent pool.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    registryName: string,
    agentPoolName: string,
    updateParameters: AgentPoolUpdateParameters,
    options?: AgentPoolsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AgentPoolsUpdateResponse>,
      AgentPoolsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AgentPoolsUpdateResponse> => {
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
        agentPoolName,
        updateParameters,
        options
      },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates an agent pool with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param agentPoolName The name of the agent pool.
   * @param updateParameters The parameters for updating an agent pool.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    registryName: string,
    agentPoolName: string,
    updateParameters: AgentPoolUpdateParameters,
    options?: AgentPoolsUpdateOptionalParams
  ): Promise<AgentPoolsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      registryName,
      agentPoolName,
      updateParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists all the agent pools for a specified container registry.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    registryName: string,
    options?: AgentPoolsListOptionalParams
  ): Promise<AgentPoolsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, options },
      listOperationSpec
    );
  }

  /**
   * Gets the count of queued runs for a given agent pool.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param agentPoolName The name of the agent pool.
   * @param options The options parameters.
   */
  getQueueStatus(
    resourceGroupName: string,
    registryName: string,
    agentPoolName: string,
    options?: AgentPoolsGetQueueStatusOptionalParams
  ): Promise<AgentPoolsGetQueueStatusResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, agentPoolName, options },
      getQueueStatusOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    registryName: string,
    nextLink: string,
    options?: AgentPoolsListNextOptionalParams
  ): Promise<AgentPoolsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/agentPools/{agentPoolName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AgentPool
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.registryName,
    Parameters.resourceGroupName1,
    Parameters.agentPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/agentPools/{agentPoolName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AgentPool
    },
    201: {
      bodyMapper: Mappers.AgentPool
    },
    202: {
      bodyMapper: Mappers.AgentPool
    },
    204: {
      bodyMapper: Mappers.AgentPool
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.agentPool,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.registryName,
    Parameters.resourceGroupName1,
    Parameters.agentPoolName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/agentPools/{agentPoolName}",
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
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.registryName,
    Parameters.resourceGroupName1,
    Parameters.agentPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/agentPools/{agentPoolName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AgentPool
    },
    201: {
      bodyMapper: Mappers.AgentPool
    },
    202: {
      bodyMapper: Mappers.AgentPool
    },
    204: {
      bodyMapper: Mappers.AgentPool
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.updateParameters,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.registryName,
    Parameters.resourceGroupName1,
    Parameters.agentPoolName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/agentPools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AgentPoolListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.registryName,
    Parameters.resourceGroupName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getQueueStatusOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/agentPools/{agentPoolName}/listQueueStatus",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AgentPoolQueueStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.registryName,
    Parameters.resourceGroupName1,
    Parameters.agentPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AgentPoolListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.registryName,
    Parameters.resourceGroupName1,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
