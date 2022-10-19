/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  FarmBeats,
  FarmBeatsModelsListBySubscriptionOptionalParams,
  FarmBeatsModelsListByResourceGroupOptionalParams,
  FarmBeatsModelsGetOptionalParams,
  FarmBeatsModelsGetResponse,
  FarmBeatsModelsCreateOrUpdateOptionalParams,
  FarmBeatsModelsCreateOrUpdateResponse,
  FarmBeatsUpdateRequestModel,
  FarmBeatsModelsUpdateOptionalParams,
  FarmBeatsModelsUpdateResponse,
  FarmBeatsModelsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a FarmBeatsModels. */
export interface FarmBeatsModels {
  /**
   * Lists the FarmBeats instances for a subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: FarmBeatsModelsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<FarmBeats>;
  /**
   * Lists the FarmBeats instance for a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: FarmBeatsModelsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<FarmBeats>;
  /**
   * Get FarmBeats resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    options?: FarmBeatsModelsGetOptionalParams
  ): Promise<FarmBeatsModelsGetResponse>;
  /**
   * Create or update FarmBeats resource.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param body FarmBeats resource create or update request object.
   * @param options The options parameters.
   */
  createOrUpdate(
    farmBeatsResourceName: string,
    resourceGroupName: string,
    body: FarmBeats,
    options?: FarmBeatsModelsCreateOrUpdateOptionalParams
  ): Promise<FarmBeatsModelsCreateOrUpdateResponse>;
  /**
   * Update a FarmBeats resource.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param body Request object.
   * @param options The options parameters.
   */
  update(
    farmBeatsResourceName: string,
    resourceGroupName: string,
    body: FarmBeatsUpdateRequestModel,
    options?: FarmBeatsModelsUpdateOptionalParams
  ): Promise<FarmBeatsModelsUpdateResponse>;
  /**
   * Delete a FarmBeats resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    options?: FarmBeatsModelsDeleteOptionalParams
  ): Promise<void>;
}
