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
  CustomImage,
  CustomImagesListOptionalParams,
  CustomImagesGetOptionalParams,
  CustomImagesGetResponse,
  CustomImagesCreateOrUpdateOptionalParams,
  CustomImagesCreateOrUpdateResponse,
  CustomImagesDeleteOptionalParams,
  CustomImageFragment,
  CustomImagesUpdateOptionalParams,
  CustomImagesUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a CustomImages. */
export interface CustomImages {
  /**
   * List custom images in a given lab.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    labName: string,
    options?: CustomImagesListOptionalParams
  ): PagedAsyncIterableIterator<CustomImage>;
  /**
   * Get custom image.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the custom image.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: CustomImagesGetOptionalParams
  ): Promise<CustomImagesGetResponse>;
  /**
   * Create or replace an existing custom image. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the custom image.
   * @param customImage A custom image.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    labName: string,
    name: string,
    customImage: CustomImage,
    options?: CustomImagesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CustomImagesCreateOrUpdateResponse>,
      CustomImagesCreateOrUpdateResponse
    >
  >;
  /**
   * Create or replace an existing custom image. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the custom image.
   * @param customImage A custom image.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    labName: string,
    name: string,
    customImage: CustomImage,
    options?: CustomImagesCreateOrUpdateOptionalParams
  ): Promise<CustomImagesCreateOrUpdateResponse>;
  /**
   * Delete custom image. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the custom image.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: CustomImagesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete custom image. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the custom image.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: CustomImagesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Allows modifying tags of custom images. All other properties will be ignored.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the custom image.
   * @param customImage Allows modifying tags of custom images. All other properties will be ignored.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    labName: string,
    name: string,
    customImage: CustomImageFragment,
    options?: CustomImagesUpdateOptionalParams
  ): Promise<CustomImagesUpdateResponse>;
}
