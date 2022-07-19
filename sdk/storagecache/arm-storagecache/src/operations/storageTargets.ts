/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { StorageTargets } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageCacheManagementClient } from "../storageCacheManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  StorageTarget,
  StorageTargetsListByCacheNextOptionalParams,
  StorageTargetsListByCacheOptionalParams,
  StorageTargetsDnsRefreshOptionalParams,
  StorageTargetsListByCacheResponse,
  StorageTargetsDeleteOptionalParams,
  StorageTargetsGetOptionalParams,
  StorageTargetsGetResponse,
  StorageTargetsCreateOrUpdateOptionalParams,
  StorageTargetsCreateOrUpdateResponse,
  StorageTargetsListByCacheNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing StorageTargets operations. */
export class StorageTargetsImpl implements StorageTargets {
  private readonly client: StorageCacheManagementClient;

  /**
   * Initialize a new instance of the class StorageTargets class.
   * @param client Reference to the service client
   */
  constructor(client: StorageCacheManagementClient) {
    this.client = client;
  }

  /**
   * Returns a list of Storage Targets for the specified Cache.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param options The options parameters.
   */
  public listByCache(
    resourceGroupName: string,
    cacheName: string,
    options?: StorageTargetsListByCacheOptionalParams
  ): PagedAsyncIterableIterator<StorageTarget> {
    const iter = this.listByCachePagingAll(
      resourceGroupName,
      cacheName,
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
        return this.listByCachePagingPage(
          resourceGroupName,
          cacheName,
          options
        );
      }
    };
  }

  private async *listByCachePagingPage(
    resourceGroupName: string,
    cacheName: string,
    options?: StorageTargetsListByCacheOptionalParams
  ): AsyncIterableIterator<StorageTarget[]> {
    let result = await this._listByCache(resourceGroupName, cacheName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByCacheNext(
        resourceGroupName,
        cacheName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByCachePagingAll(
    resourceGroupName: string,
    cacheName: string,
    options?: StorageTargetsListByCacheOptionalParams
  ): AsyncIterableIterator<StorageTarget> {
    for await (const page of this.listByCachePagingPage(
      resourceGroupName,
      cacheName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Tells a storage target to refresh its DNS information.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param options The options parameters.
   */
  async beginDnsRefresh(
    resourceGroupName: string,
    cacheName: string,
    storageTargetName: string,
    options?: StorageTargetsDnsRefreshOptionalParams
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
      { resourceGroupName, cacheName, storageTargetName, options },
      dnsRefreshOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Tells a storage target to refresh its DNS information.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param options The options parameters.
   */
  async beginDnsRefreshAndWait(
    resourceGroupName: string,
    cacheName: string,
    storageTargetName: string,
    options?: StorageTargetsDnsRefreshOptionalParams
  ): Promise<void> {
    const poller = await this.beginDnsRefresh(
      resourceGroupName,
      cacheName,
      storageTargetName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Returns a list of Storage Targets for the specified Cache.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param options The options parameters.
   */
  private _listByCache(
    resourceGroupName: string,
    cacheName: string,
    options?: StorageTargetsListByCacheOptionalParams
  ): Promise<StorageTargetsListByCacheResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, cacheName, options },
      listByCacheOperationSpec
    );
  }

  /**
   * Removes a Storage Target from a Cache. This operation is allowed at any time, but if the Cache is
   * down or unhealthy, the actual removal of the Storage Target may be delayed until the Cache is
   * healthy again. Note that if the Cache has data to flush to the Storage Target, the data will be
   * flushed before the Storage Target will be deleted.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    cacheName: string,
    storageTargetName: string,
    options?: StorageTargetsDeleteOptionalParams
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
      { resourceGroupName, cacheName, storageTargetName, options },
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
   * Removes a Storage Target from a Cache. This operation is allowed at any time, but if the Cache is
   * down or unhealthy, the actual removal of the Storage Target may be delayed until the Cache is
   * healthy again. Note that if the Cache has data to flush to the Storage Target, the data will be
   * flushed before the Storage Target will be deleted.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    cacheName: string,
    storageTargetName: string,
    options?: StorageTargetsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      cacheName,
      storageTargetName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Returns a Storage Target from a Cache.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    cacheName: string,
    storageTargetName: string,
    options?: StorageTargetsGetOptionalParams
  ): Promise<StorageTargetsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, cacheName, storageTargetName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update a Storage Target. This operation is allowed at any time, but if the Cache is down
   * or unhealthy, the actual creation/modification of the Storage Target may be delayed until the Cache
   * is healthy again.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    cacheName: string,
    storageTargetName: string,
    options?: StorageTargetsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<StorageTargetsCreateOrUpdateResponse>,
      StorageTargetsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<StorageTargetsCreateOrUpdateResponse> => {
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
      { resourceGroupName, cacheName, storageTargetName, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update a Storage Target. This operation is allowed at any time, but if the Cache is down
   * or unhealthy, the actual creation/modification of the Storage Target may be delayed until the Cache
   * is healthy again.
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param storageTargetName Name of Storage Target.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    cacheName: string,
    storageTargetName: string,
    options?: StorageTargetsCreateOrUpdateOptionalParams
  ): Promise<StorageTargetsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      cacheName,
      storageTargetName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByCacheNext
   * @param resourceGroupName Target resource group.
   * @param cacheName Name of Cache. Length of name must not be greater than 80 and chars must be from
   *                  the [-0-9a-zA-Z_] char class.
   * @param nextLink The nextLink from the previous successful call to the ListByCache method.
   * @param options The options parameters.
   */
  private _listByCacheNext(
    resourceGroupName: string,
    cacheName: string,
    nextLink: string,
    options?: StorageTargetsListByCacheNextOptionalParams
  ): Promise<StorageTargetsListByCacheNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, cacheName, nextLink, options },
      listByCacheNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const dnsRefreshOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName}/dnsRefresh",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
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
    Parameters.cacheName,
    Parameters.storageTargetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByCacheOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageTargetsResult
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
    Parameters.cacheName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.force],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cacheName,
    Parameters.storageTargetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageTarget
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
    Parameters.cacheName,
    Parameters.storageTargetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.StorageTarget
    },
    201: {
      bodyMapper: Mappers.StorageTarget
    },
    202: {
      bodyMapper: Mappers.StorageTarget
    },
    204: {
      bodyMapper: Mappers.StorageTarget
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.storagetarget,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cacheName,
    Parameters.storageTargetName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByCacheNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageTargetsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cacheName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
