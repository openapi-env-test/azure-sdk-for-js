/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ManagedInstances } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ManagedInstance,
  ManagedInstancesListByInstancePoolNextOptionalParams,
  ManagedInstancesListByInstancePoolOptionalParams,
  ManagedInstancesListByInstancePoolResponse,
  ManagedInstancesListNextOptionalParams,
  ManagedInstancesListOptionalParams,
  ManagedInstancesListResponse,
  ManagedInstancesListByResourceGroupNextOptionalParams,
  ManagedInstancesListByResourceGroupOptionalParams,
  ManagedInstancesListByResourceGroupResponse,
  TopQueries,
  ManagedInstancesListByManagedInstanceNextOptionalParams,
  ManagedInstancesListByManagedInstanceOptionalParams,
  ManagedInstancesListByManagedInstanceResponse,
  ManagedInstancesGetOptionalParams,
  ManagedInstancesGetResponse,
  ManagedInstancesCreateOrUpdateOptionalParams,
  ManagedInstancesCreateOrUpdateResponse,
  ManagedInstancesDeleteOptionalParams,
  ManagedInstanceUpdate,
  ManagedInstancesUpdateOptionalParams,
  ManagedInstancesUpdateResponse,
  ManagedInstancesFailoverOptionalParams,
  ManagedInstancesListByInstancePoolNextResponse,
  ManagedInstancesListNextResponse,
  ManagedInstancesListByResourceGroupNextResponse,
  ManagedInstancesListByManagedInstanceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ManagedInstances operations. */
export class ManagedInstancesImpl implements ManagedInstances {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class ManagedInstances class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of all managed instances in an instance pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The instance pool name.
   * @param options The options parameters.
   */
  public listByInstancePool(
    resourceGroupName: string,
    instancePoolName: string,
    options?: ManagedInstancesListByInstancePoolOptionalParams
  ): PagedAsyncIterableIterator<ManagedInstance> {
    const iter = this.listByInstancePoolPagingAll(
      resourceGroupName,
      instancePoolName,
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
        return this.listByInstancePoolPagingPage(
          resourceGroupName,
          instancePoolName,
          options,
          settings
        );
      }
    };
  }

  private async *listByInstancePoolPagingPage(
    resourceGroupName: string,
    instancePoolName: string,
    options?: ManagedInstancesListByInstancePoolOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ManagedInstance[]> {
    let result: ManagedInstancesListByInstancePoolResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByInstancePool(
        resourceGroupName,
        instancePoolName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByInstancePoolNext(
        resourceGroupName,
        instancePoolName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByInstancePoolPagingAll(
    resourceGroupName: string,
    instancePoolName: string,
    options?: ManagedInstancesListByInstancePoolOptionalParams
  ): AsyncIterableIterator<ManagedInstance> {
    for await (const page of this.listByInstancePoolPagingPage(
      resourceGroupName,
      instancePoolName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of all managed instances in the subscription.
   * @param options The options parameters.
   */
  public list(
    options?: ManagedInstancesListOptionalParams
  ): PagedAsyncIterableIterator<ManagedInstance> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: ManagedInstancesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ManagedInstance[]> {
    let result: ManagedInstancesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: ManagedInstancesListOptionalParams
  ): AsyncIterableIterator<ManagedInstance> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of managed instances in a resource group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ManagedInstancesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ManagedInstance> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ManagedInstancesListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ManagedInstance[]> {
    let result: ManagedInstancesListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ManagedInstancesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ManagedInstance> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get top resource consuming queries of a managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  public listByManagedInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstancesListByManagedInstanceOptionalParams
  ): PagedAsyncIterableIterator<TopQueries> {
    const iter = this.listByManagedInstancePagingAll(
      resourceGroupName,
      managedInstanceName,
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
        return this.listByManagedInstancePagingPage(
          resourceGroupName,
          managedInstanceName,
          options,
          settings
        );
      }
    };
  }

  private async *listByManagedInstancePagingPage(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstancesListByManagedInstanceOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<TopQueries[]> {
    let result: ManagedInstancesListByManagedInstanceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByManagedInstance(
        resourceGroupName,
        managedInstanceName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByManagedInstanceNext(
        resourceGroupName,
        managedInstanceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByManagedInstancePagingAll(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstancesListByManagedInstanceOptionalParams
  ): AsyncIterableIterator<TopQueries> {
    for await (const page of this.listByManagedInstancePagingPage(
      resourceGroupName,
      managedInstanceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of all managed instances in an instance pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The instance pool name.
   * @param options The options parameters.
   */
  private _listByInstancePool(
    resourceGroupName: string,
    instancePoolName: string,
    options?: ManagedInstancesListByInstancePoolOptionalParams
  ): Promise<ManagedInstancesListByInstancePoolResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, instancePoolName, options },
      listByInstancePoolOperationSpec
    );
  }

  /**
   * Gets a list of all managed instances in the subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: ManagedInstancesListOptionalParams
  ): Promise<ManagedInstancesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Gets a list of managed instances in a resource group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ManagedInstancesListByResourceGroupOptionalParams
  ): Promise<ManagedInstancesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Gets a managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstancesGetOptionalParams
  ): Promise<ManagedInstancesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param parameters The requested managed instance resource state.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    parameters: ManagedInstance,
    options?: ManagedInstancesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ManagedInstancesCreateOrUpdateResponse>,
      ManagedInstancesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ManagedInstancesCreateOrUpdateResponse> => {
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
      { resourceGroupName, managedInstanceName, parameters, options },
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
   * Creates or updates a managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param parameters The requested managed instance resource state.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    parameters: ManagedInstance,
    options?: ManagedInstancesCreateOrUpdateOptionalParams
  ): Promise<ManagedInstancesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      managedInstanceName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstancesDeleteOptionalParams
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
      { resourceGroupName, managedInstanceName, options },
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
   * Deletes a managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstancesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      managedInstanceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates a managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param parameters The requested managed instance resource state.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    parameters: ManagedInstanceUpdate,
    options?: ManagedInstancesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ManagedInstancesUpdateResponse>,
      ManagedInstancesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ManagedInstancesUpdateResponse> => {
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
      { resourceGroupName, managedInstanceName, parameters, options },
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
   * Updates a managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param parameters The requested managed instance resource state.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    parameters: ManagedInstanceUpdate,
    options?: ManagedInstancesUpdateOptionalParams
  ): Promise<ManagedInstancesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      managedInstanceName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get top resource consuming queries of a managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  private _listByManagedInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstancesListByManagedInstanceOptionalParams
  ): Promise<ManagedInstancesListByManagedInstanceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, options },
      listByManagedInstanceOperationSpec
    );
  }

  /**
   * Failovers a managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance to failover.
   * @param options The options parameters.
   */
  async beginFailover(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstancesFailoverOptionalParams
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
      { resourceGroupName, managedInstanceName, options },
      failoverOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Failovers a managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance to failover.
   * @param options The options parameters.
   */
  async beginFailoverAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstancesFailoverOptionalParams
  ): Promise<void> {
    const poller = await this.beginFailover(
      resourceGroupName,
      managedInstanceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByInstancePoolNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The instance pool name.
   * @param nextLink The nextLink from the previous successful call to the ListByInstancePool method.
   * @param options The options parameters.
   */
  private _listByInstancePoolNext(
    resourceGroupName: string,
    instancePoolName: string,
    nextLink: string,
    options?: ManagedInstancesListByInstancePoolNextOptionalParams
  ): Promise<ManagedInstancesListByInstancePoolNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, instancePoolName, nextLink, options },
      listByInstancePoolNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ManagedInstancesListNextOptionalParams
  ): Promise<ManagedInstancesListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ManagedInstancesListByResourceGroupNextOptionalParams
  ): Promise<ManagedInstancesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListByManagedInstanceNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param nextLink The nextLink from the previous successful call to the ListByManagedInstance method.
   * @param options The options parameters.
   */
  private _listByManagedInstanceNext(
    resourceGroupName: string,
    managedInstanceName: string,
    nextLink: string,
    options?: ManagedInstancesListByManagedInstanceNextOptionalParams
  ): Promise<ManagedInstancesListByManagedInstanceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, nextLink, options },
      listByManagedInstanceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByInstancePoolOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools/{instancePoolName}/managedInstances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceListResult
    },
    default: {}
  },
  queryParameters: [Parameters.expand, Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.instancePoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Sql/managedInstances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceListResult
    },
    default: {}
  },
  queryParameters: [Parameters.expand, Parameters.apiVersion6],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceListResult
    },
    default: {}
  },
  queryParameters: [Parameters.expand, Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstance
    },
    default: {}
  },
  queryParameters: [Parameters.expand, Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstance
    },
    201: {
      bodyMapper: Mappers.ManagedInstance
    },
    202: {
      bodyMapper: Mappers.ManagedInstance
    },
    204: {
      bodyMapper: Mappers.ManagedInstance
    },
    default: {}
  },
  requestBody: Parameters.parameters73,
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName
  ],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstance
    },
    201: {
      bodyMapper: Mappers.ManagedInstance
    },
    202: {
      bodyMapper: Mappers.ManagedInstance
    },
    204: {
      bodyMapper: Mappers.ManagedInstance
    },
    default: {}
  },
  requestBody: Parameters.parameters74,
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByManagedInstanceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/topqueries",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TopQueriesListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.startTime,
    Parameters.endTime,
    Parameters.interval,
    Parameters.apiVersion6,
    Parameters.numberOfQueries,
    Parameters.databases,
    Parameters.aggregationFunction,
    Parameters.observationMetric
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const failoverOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/failover",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.replicaType, Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName
  ],
  serializer
};
const listByInstancePoolNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.instancePoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByManagedInstanceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TopQueriesListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
