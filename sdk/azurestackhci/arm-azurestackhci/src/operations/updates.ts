/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Updates } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureStackHCIClient } from "../azureStackHCIClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Update,
  UpdatesListNextOptionalParams,
  UpdatesListOptionalParams,
  UpdatesPostOptionalParams,
  UpdatesListResponse,
  UpdatesGetOptionalParams,
  UpdatesGetResponse,
  UpdatesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Updates operations. */
export class UpdatesImpl implements Updates {
  private readonly client: AzureStackHCIClient;

  /**
   * Initialize a new instance of the class Updates class.
   * @param client Reference to the service client
   */
  constructor(client: AzureStackHCIClient) {
    this.client = client;
  }

  /**
   * List all Updates
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    clusterName: string,
    options?: UpdatesListOptionalParams
  ): PagedAsyncIterableIterator<Update> {
    const iter = this.listPagingAll(resourceGroupName, clusterName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, clusterName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    clusterName: string,
    options?: UpdatesListOptionalParams
  ): AsyncIterableIterator<Update[]> {
    let result = await this._list(resourceGroupName, clusterName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        clusterName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    clusterName: string,
    options?: UpdatesListOptionalParams
  ): AsyncIterableIterator<Update> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      clusterName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Apply Update
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param updateName The name of the Update
   * @param options The options parameters.
   */
  async beginPost(
    resourceGroupName: string,
    clusterName: string,
    updateName: string,
    options?: UpdatesPostOptionalParams
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
      { resourceGroupName, clusterName, updateName, options },
      postOperationSpec
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
   * Apply Update
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param updateName The name of the Update
   * @param options The options parameters.
   */
  async beginPostAndWait(
    resourceGroupName: string,
    clusterName: string,
    updateName: string,
    options?: UpdatesPostOptionalParams
  ): Promise<void> {
    const poller = await this.beginPost(
      resourceGroupName,
      clusterName,
      updateName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List all Updates
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    clusterName: string,
    options?: UpdatesListOptionalParams
  ): Promise<UpdatesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, options },
      listOperationSpec
    );
  }

  /**
   * Get specified Update
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param updateName The name of the Update
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    updateName: string,
    options?: UpdatesGetOptionalParams
  ): Promise<UpdatesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, updateName, options },
      getOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    clusterName: string,
    nextLink: string,
    options?: UpdatesListNextOptionalParams
  ): Promise<UpdatesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const postOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updates/{updateName}/apply",
  httpMethod: "POST",
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
    Parameters.clusterName,
    Parameters.updateName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UpdateList
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
    Parameters.clusterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/updates/{updateName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Update
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
    Parameters.clusterName,
    Parameters.updateName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UpdateList
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
    Parameters.clusterName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
