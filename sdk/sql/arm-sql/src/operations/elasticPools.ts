/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ElasticPools } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  Metric,
  ElasticPoolsListMetricsOptionalParams,
  ElasticPoolsListMetricsResponse,
  MetricDefinition,
  ElasticPoolsListMetricDefinitionsOptionalParams,
  ElasticPoolsListMetricDefinitionsResponse,
  ElasticPool,
  ElasticPoolsListByServerNextOptionalParams,
  ElasticPoolsListByServerOptionalParams,
  ElasticPoolsListByServerResponse,
  ElasticPoolsGetOptionalParams,
  ElasticPoolsGetResponse,
  ElasticPoolsCreateOrUpdateOptionalParams,
  ElasticPoolsCreateOrUpdateResponse,
  ElasticPoolsDeleteOptionalParams,
  ElasticPoolUpdate,
  ElasticPoolsUpdateOptionalParams,
  ElasticPoolsUpdateResponse,
  ElasticPoolsFailoverOptionalParams,
  ElasticPoolsListByServerNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ElasticPools operations. */
export class ElasticPoolsImpl implements ElasticPools {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class ElasticPools class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Returns elastic pool  metrics.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param filter An OData filter expression that describes a subset of metrics to return.
   * @param options The options parameters.
   */
  public listMetrics(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    filter: string,
    options?: ElasticPoolsListMetricsOptionalParams
  ): PagedAsyncIterableIterator<Metric> {
    const iter = this.listMetricsPagingAll(
      resourceGroupName,
      serverName,
      elasticPoolName,
      filter,
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
        return this.listMetricsPagingPage(
          resourceGroupName,
          serverName,
          elasticPoolName,
          filter,
          options,
          settings
        );
      }
    };
  }

  private async *listMetricsPagingPage(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    filter: string,
    options?: ElasticPoolsListMetricsOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<Metric[]> {
    let result: ElasticPoolsListMetricsResponse;
    result = await this._listMetrics(
      resourceGroupName,
      serverName,
      elasticPoolName,
      filter,
      options
    );
    yield result.value || [];
  }

  private async *listMetricsPagingAll(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    filter: string,
    options?: ElasticPoolsListMetricsOptionalParams
  ): AsyncIterableIterator<Metric> {
    for await (const page of this.listMetricsPagingPage(
      resourceGroupName,
      serverName,
      elasticPoolName,
      filter,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns elastic pool metric definitions.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param options The options parameters.
   */
  public listMetricDefinitions(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolsListMetricDefinitionsOptionalParams
  ): PagedAsyncIterableIterator<MetricDefinition> {
    const iter = this.listMetricDefinitionsPagingAll(
      resourceGroupName,
      serverName,
      elasticPoolName,
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
        return this.listMetricDefinitionsPagingPage(
          resourceGroupName,
          serverName,
          elasticPoolName,
          options,
          settings
        );
      }
    };
  }

  private async *listMetricDefinitionsPagingPage(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolsListMetricDefinitionsOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<MetricDefinition[]> {
    let result: ElasticPoolsListMetricDefinitionsResponse;
    result = await this._listMetricDefinitions(
      resourceGroupName,
      serverName,
      elasticPoolName,
      options
    );
    yield result.value || [];
  }

  private async *listMetricDefinitionsPagingAll(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolsListMetricDefinitionsOptionalParams
  ): AsyncIterableIterator<MetricDefinition> {
    for await (const page of this.listMetricDefinitionsPagingPage(
      resourceGroupName,
      serverName,
      elasticPoolName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all elastic pools in a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  public listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ElasticPoolsListByServerOptionalParams
  ): PagedAsyncIterableIterator<ElasticPool> {
    const iter = this.listByServerPagingAll(
      resourceGroupName,
      serverName,
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
        return this.listByServerPagingPage(
          resourceGroupName,
          serverName,
          options,
          settings
        );
      }
    };
  }

  private async *listByServerPagingPage(
    resourceGroupName: string,
    serverName: string,
    options?: ElasticPoolsListByServerOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ElasticPool[]> {
    let result: ElasticPoolsListByServerResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByServer(resourceGroupName, serverName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByServerNext(
        resourceGroupName,
        serverName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByServerPagingAll(
    resourceGroupName: string,
    serverName: string,
    options?: ElasticPoolsListByServerOptionalParams
  ): AsyncIterableIterator<ElasticPool> {
    for await (const page of this.listByServerPagingPage(
      resourceGroupName,
      serverName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns elastic pool  metrics.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param filter An OData filter expression that describes a subset of metrics to return.
   * @param options The options parameters.
   */
  private _listMetrics(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    filter: string,
    options?: ElasticPoolsListMetricsOptionalParams
  ): Promise<ElasticPoolsListMetricsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, elasticPoolName, filter, options },
      listMetricsOperationSpec
    );
  }

  /**
   * Returns elastic pool metric definitions.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param options The options parameters.
   */
  private _listMetricDefinitions(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolsListMetricDefinitionsOptionalParams
  ): Promise<ElasticPoolsListMetricDefinitionsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, elasticPoolName, options },
      listMetricDefinitionsOperationSpec
    );
  }

  /**
   * Gets all elastic pools in a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  private _listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ElasticPoolsListByServerOptionalParams
  ): Promise<ElasticPoolsListByServerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, options },
      listByServerOperationSpec
    );
  }

  /**
   * Gets an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolsGetOptionalParams
  ): Promise<ElasticPoolsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, elasticPoolName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param parameters The elastic pool parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    parameters: ElasticPool,
    options?: ElasticPoolsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ElasticPoolsCreateOrUpdateResponse>,
      ElasticPoolsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ElasticPoolsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        serverName,
        elasticPoolName,
        parameters,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      ElasticPoolsCreateOrUpdateResponse,
      OperationState<ElasticPoolsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param parameters The elastic pool parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    parameters: ElasticPool,
    options?: ElasticPoolsCreateOrUpdateOptionalParams
  ): Promise<ElasticPoolsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serverName,
      elasticPoolName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, serverName, elasticPoolName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      serverName,
      elasticPoolName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param parameters The elastic pool update parameters.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    parameters: ElasticPoolUpdate,
    options?: ElasticPoolsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ElasticPoolsUpdateResponse>,
      ElasticPoolsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ElasticPoolsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        serverName,
        elasticPoolName,
        parameters,
        options
      },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      ElasticPoolsUpdateResponse,
      OperationState<ElasticPoolsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param parameters The elastic pool update parameters.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    parameters: ElasticPoolUpdate,
    options?: ElasticPoolsUpdateOptionalParams
  ): Promise<ElasticPoolsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      serverName,
      elasticPoolName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Failovers an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool to failover.
   * @param options The options parameters.
   */
  async beginFailover(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolsFailoverOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, serverName, elasticPoolName, options },
      spec: failoverOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Failovers an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool to failover.
   * @param options The options parameters.
   */
  async beginFailoverAndWait(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolsFailoverOptionalParams
  ): Promise<void> {
    const poller = await this.beginFailover(
      resourceGroupName,
      serverName,
      elasticPoolName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByServerNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param nextLink The nextLink from the previous successful call to the ListByServer method.
   * @param options The options parameters.
   */
  private _listByServerNext(
    resourceGroupName: string,
    serverName: string,
    nextLink: string,
    options?: ElasticPoolsListByServerNextOptionalParams
  ): Promise<ElasticPoolsListByServerNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, nextLink, options },
      listByServerNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listMetricsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/metrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listMetricDefinitionsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/metricDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricDefinitionListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByServerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ElasticPoolListResult
    },
    default: {}
  },
  queryParameters: [Parameters.skip, Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ElasticPool
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ElasticPool
    },
    201: {
      bodyMapper: Mappers.ElasticPool
    },
    202: {
      bodyMapper: Mappers.ElasticPool
    },
    204: {
      bodyMapper: Mappers.ElasticPool
    },
    default: {}
  },
  requestBody: Parameters.parameters8,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ElasticPool
    },
    201: {
      bodyMapper: Mappers.ElasticPool
    },
    202: {
      bodyMapper: Mappers.ElasticPool
    },
    204: {
      bodyMapper: Mappers.ElasticPool
    },
    default: {}
  },
  requestBody: Parameters.parameters9,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const failoverOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/failover",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  serializer
};
const listByServerNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ElasticPoolListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
