/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  VirtualCluster,
  VirtualClustersListOptionalParams,
  VirtualClustersListByResourceGroupOptionalParams,
  VirtualClustersGetOptionalParams,
  VirtualClustersGetResponse,
  VirtualClustersDeleteOptionalParams,
  VirtualClusterUpdate,
  VirtualClustersUpdateOptionalParams,
  VirtualClustersUpdateResponse,
  VirtualClustersUpdateDnsServersOptionalParams,
  VirtualClustersUpdateDnsServersResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VirtualClusters. */
export interface VirtualClusters {
  /**
   * Gets a list of all virtualClusters in the subscription.
   * @param options The options parameters.
   */
  list(
    options?: VirtualClustersListOptionalParams
  ): PagedAsyncIterableIterator<VirtualCluster>;
  /**
   * Gets a list of virtual clusters in a resource group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: VirtualClustersListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<VirtualCluster>;
  /**
   * Gets a virtual cluster.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param virtualClusterName The name of the virtual cluster.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    virtualClusterName: string,
    options?: VirtualClustersGetOptionalParams
  ): Promise<VirtualClustersGetResponse>;
  /**
   * Deletes a virtual cluster.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param virtualClusterName The name of the virtual cluster.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    virtualClusterName: string,
    options?: VirtualClustersDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a virtual cluster.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param virtualClusterName The name of the virtual cluster.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    virtualClusterName: string,
    options?: VirtualClustersDeleteOptionalParams
  ): Promise<void>;
  /**
   * Updates an existing virtual cluster.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param virtualClusterName The name of the virtual cluster.
   * @param parameters The requested virtual cluster resource state.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    virtualClusterName: string,
    parameters: VirtualClusterUpdate,
    options?: VirtualClustersUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualClustersUpdateResponse>,
      VirtualClustersUpdateResponse
    >
  >;
  /**
   * Updates an existing virtual cluster.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param virtualClusterName The name of the virtual cluster.
   * @param parameters The requested virtual cluster resource state.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    virtualClusterName: string,
    parameters: VirtualClusterUpdate,
    options?: VirtualClustersUpdateOptionalParams
  ): Promise<VirtualClustersUpdateResponse>;
  /**
   * Synchronizes the DNS server settings used by the managed instances inside the given virtual cluster.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param virtualClusterName The name of the virtual cluster.
   * @param options The options parameters.
   */
  beginUpdateDnsServers(
    resourceGroupName: string,
    virtualClusterName: string,
    options?: VirtualClustersUpdateDnsServersOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualClustersUpdateDnsServersResponse>,
      VirtualClustersUpdateDnsServersResponse
    >
  >;
  /**
   * Synchronizes the DNS server settings used by the managed instances inside the given virtual cluster.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param virtualClusterName The name of the virtual cluster.
   * @param options The options parameters.
   */
  beginUpdateDnsServersAndWait(
    resourceGroupName: string,
    virtualClusterName: string,
    options?: VirtualClustersUpdateDnsServersOptionalParams
  ): Promise<VirtualClustersUpdateDnsServersResponse>;
}
