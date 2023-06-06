/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  L3Network,
  L3NetworksListBySubscriptionOptionalParams,
  L3NetworksListByResourceGroupOptionalParams,
  L3NetworksGetOptionalParams,
  L3NetworksGetResponse,
  L3NetworksCreateOrUpdateOptionalParams,
  L3NetworksCreateOrUpdateResponse,
  L3NetworksDeleteOptionalParams,
  L3NetworksUpdateOptionalParams,
  L3NetworksUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a L3Networks. */
export interface L3Networks {
  /**
   * Get a list of layer 3 (L3) networks in the provided subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: L3NetworksListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<L3Network>;
  /**
   * Get a list of layer 3 (L3) networks in the provided resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: L3NetworksListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<L3Network>;
  /**
   * Get properties of the provided layer 3 (L3) network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3NetworkName The name of the L3 network.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    l3NetworkName: string,
    options?: L3NetworksGetOptionalParams
  ): Promise<L3NetworksGetResponse>;
  /**
   * Create a new layer 3 (L3) network or update the properties of the existing network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3NetworkName The name of the L3 network.
   * @param l3NetworkParameters The request body.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    l3NetworkName: string,
    l3NetworkParameters: L3Network,
    options?: L3NetworksCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<L3NetworksCreateOrUpdateResponse>,
      L3NetworksCreateOrUpdateResponse
    >
  >;
  /**
   * Create a new layer 3 (L3) network or update the properties of the existing network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3NetworkName The name of the L3 network.
   * @param l3NetworkParameters The request body.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    l3NetworkName: string,
    l3NetworkParameters: L3Network,
    options?: L3NetworksCreateOrUpdateOptionalParams
  ): Promise<L3NetworksCreateOrUpdateResponse>;
  /**
   * Delete the provided layer 3 (L3) network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3NetworkName The name of the L3 network.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    l3NetworkName: string,
    options?: L3NetworksDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete the provided layer 3 (L3) network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3NetworkName The name of the L3 network.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    l3NetworkName: string,
    options?: L3NetworksDeleteOptionalParams
  ): Promise<void>;
  /**
   * Update tags associated with the provided layer 3 (L3) network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param l3NetworkName The name of the L3 network.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    l3NetworkName: string,
    options?: L3NetworksUpdateOptionalParams
  ): Promise<L3NetworksUpdateResponse>;
}
