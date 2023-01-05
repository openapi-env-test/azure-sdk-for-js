/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { PrivateLinkResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { TimeSeriesInsightsClient } from "../timeSeriesInsightsClient";
import {
  PrivateLinkResource,
  PrivateLinkResourcesListSupportedOptionalParams,
  PrivateLinkResourcesListSupportedResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateLinkResources operations. */
export class PrivateLinkResourcesImpl implements PrivateLinkResources {
  private readonly client: TimeSeriesInsightsClient;

  /**
   * Initialize a new instance of the class PrivateLinkResources class.
   * @param client Reference to the service client
   */
  constructor(client: TimeSeriesInsightsClient) {
    this.client = client;
  }

  /**
   * Gets a list of all supported private link resource types for the given environment.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   *                        specified resource group.
   * @param options The options parameters.
   */
  public listSupported(
    resourceGroupName: string,
    environmentName: string,
    options?: PrivateLinkResourcesListSupportedOptionalParams
  ): PagedAsyncIterableIterator<PrivateLinkResource> {
    const iter = this.listSupportedPagingAll(
      resourceGroupName,
      environmentName,
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
        return this.listSupportedPagingPage(
          resourceGroupName,
          environmentName,
          options,
          settings
        );
      }
    };
  }

  private async *listSupportedPagingPage(
    resourceGroupName: string,
    environmentName: string,
    options?: PrivateLinkResourcesListSupportedOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<PrivateLinkResource[]> {
    let result: PrivateLinkResourcesListSupportedResponse;
    result = await this._listSupported(
      resourceGroupName,
      environmentName,
      options
    );
    yield result.value || [];
  }

  private async *listSupportedPagingAll(
    resourceGroupName: string,
    environmentName: string,
    options?: PrivateLinkResourcesListSupportedOptionalParams
  ): AsyncIterableIterator<PrivateLinkResource> {
    for await (const page of this.listSupportedPagingPage(
      resourceGroupName,
      environmentName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of all supported private link resource types for the given environment.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   *                        specified resource group.
   * @param options The options parameters.
   */
  private _listSupported(
    resourceGroupName: string,
    environmentName: string,
    options?: PrivateLinkResourcesListSupportedOptionalParams
  ): Promise<PrivateLinkResourcesListSupportedResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, options },
      listSupportedOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listSupportedOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/privateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceListResult
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
    Parameters.environmentName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
