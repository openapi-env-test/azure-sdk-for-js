/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ReplicationLogicalNetworks } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SiteRecoveryManagementClient } from "../siteRecoveryManagementClient";
import {
  LogicalNetwork,
  ReplicationLogicalNetworksListByReplicationFabricsNextOptionalParams,
  ReplicationLogicalNetworksListByReplicationFabricsOptionalParams,
  ReplicationLogicalNetworksListByReplicationFabricsResponse,
  ReplicationLogicalNetworksGetOptionalParams,
  ReplicationLogicalNetworksGetResponse,
  ReplicationLogicalNetworksListByReplicationFabricsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ReplicationLogicalNetworks operations. */
export class ReplicationLogicalNetworksImpl
  implements ReplicationLogicalNetworks {
  private readonly client: SiteRecoveryManagementClient;

  /**
   * Initialize a new instance of the class ReplicationLogicalNetworks class.
   * @param client Reference to the service client
   */
  constructor(client: SiteRecoveryManagementClient) {
    this.client = client;
  }

  /**
   * Lists all the logical networks of the Azure Site Recovery fabric.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Server Id.
   * @param options The options parameters.
   */
  public listByReplicationFabrics(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    options?: ReplicationLogicalNetworksListByReplicationFabricsOptionalParams
  ): PagedAsyncIterableIterator<LogicalNetwork> {
    const iter = this.listByReplicationFabricsPagingAll(
      resourceName,
      resourceGroupName,
      fabricName,
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
        return this.listByReplicationFabricsPagingPage(
          resourceName,
          resourceGroupName,
          fabricName,
          options
        );
      }
    };
  }

  private async *listByReplicationFabricsPagingPage(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    options?: ReplicationLogicalNetworksListByReplicationFabricsOptionalParams
  ): AsyncIterableIterator<LogicalNetwork[]> {
    let result = await this._listByReplicationFabrics(
      resourceName,
      resourceGroupName,
      fabricName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByReplicationFabricsNext(
        resourceName,
        resourceGroupName,
        fabricName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByReplicationFabricsPagingAll(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    options?: ReplicationLogicalNetworksListByReplicationFabricsOptionalParams
  ): AsyncIterableIterator<LogicalNetwork> {
    for await (const page of this.listByReplicationFabricsPagingPage(
      resourceName,
      resourceGroupName,
      fabricName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the logical networks of the Azure Site Recovery fabric.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Server Id.
   * @param options The options parameters.
   */
  private _listByReplicationFabrics(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    options?: ReplicationLogicalNetworksListByReplicationFabricsOptionalParams
  ): Promise<ReplicationLogicalNetworksListByReplicationFabricsResponse> {
    return this.client.sendOperationRequest(
      { resourceName, resourceGroupName, fabricName, options },
      listByReplicationFabricsOperationSpec
    );
  }

  /**
   * Gets the details of a logical network.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Server Id.
   * @param logicalNetworkName Logical network name.
   * @param options The options parameters.
   */
  get(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    logicalNetworkName: string,
    options?: ReplicationLogicalNetworksGetOptionalParams
  ): Promise<ReplicationLogicalNetworksGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceName,
        resourceGroupName,
        fabricName,
        logicalNetworkName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * ListByReplicationFabricsNext
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Server Id.
   * @param nextLink The nextLink from the previous successful call to the ListByReplicationFabrics
   *                 method.
   * @param options The options parameters.
   */
  private _listByReplicationFabricsNext(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    nextLink: string,
    options?: ReplicationLogicalNetworksListByReplicationFabricsNextOptionalParams
  ): Promise<ReplicationLogicalNetworksListByReplicationFabricsNextResponse> {
    return this.client.sendOperationRequest(
      { resourceName, resourceGroupName, fabricName, nextLink, options },
      listByReplicationFabricsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByReplicationFabricsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationLogicalNetworks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogicalNetworkCollection
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationLogicalNetworks/{logicalNetworkName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogicalNetwork
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.logicalNetworkName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByReplicationFabricsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogicalNetworkCollection
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceName,
    Parameters.fabricName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
