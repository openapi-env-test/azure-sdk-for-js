/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { RestorableGremlinResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClient } from "../cosmosDBManagementClient";
import {
  RestorableGremlinResourcesGetResult,
  RestorableGremlinResourcesListOptionalParams,
  RestorableGremlinResourcesListResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing RestorableGremlinResources operations. */
export class RestorableGremlinResourcesImpl
  implements RestorableGremlinResources {
  private readonly client: CosmosDBManagementClient;

  /**
   * Initialize a new instance of the class RestorableGremlinResources class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClient) {
    this.client = client;
  }

  /**
   * Return a list of gremlin database and graphs combo that exist on the account at the given timestamp
   * and location. This helps in scenarios to validate what resources exist at given timestamp and
   * location. This API requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read'
   * permission.
   * @param location Cosmos DB region, with spaces between words and each word capitalized.
   * @param instanceId The instanceId GUID of a restorable database account.
   * @param options The options parameters.
   */
  public list(
    location: string,
    instanceId: string,
    options?: RestorableGremlinResourcesListOptionalParams
  ): PagedAsyncIterableIterator<RestorableGremlinResourcesGetResult> {
    const iter = this.listPagingAll(location, instanceId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(location, instanceId, options);
      }
    };
  }

  private async *listPagingPage(
    location: string,
    instanceId: string,
    options?: RestorableGremlinResourcesListOptionalParams
  ): AsyncIterableIterator<RestorableGremlinResourcesGetResult[]> {
    let result = await this._list(location, instanceId, options);
    yield result.value || [];
  }

  private async *listPagingAll(
    location: string,
    instanceId: string,
    options?: RestorableGremlinResourcesListOptionalParams
  ): AsyncIterableIterator<RestorableGremlinResourcesGetResult> {
    for await (const page of this.listPagingPage(
      location,
      instanceId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Return a list of gremlin database and graphs combo that exist on the account at the given timestamp
   * and location. This helps in scenarios to validate what resources exist at given timestamp and
   * location. This API requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read'
   * permission.
   * @param location Cosmos DB region, with spaces between words and each word capitalized.
   * @param instanceId The instanceId GUID of a restorable database account.
   * @param options The options parameters.
   */
  private _list(
    location: string,
    instanceId: string,
    options?: RestorableGremlinResourcesListOptionalParams
  ): Promise<RestorableGremlinResourcesListResponse> {
    return this.client.sendOperationRequest(
      { location, instanceId, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{instanceId}/restorableGremlinResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RestorableGremlinResourcesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.restoreLocation,
    Parameters.restoreTimestampInUtc
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location1,
    Parameters.instanceId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
