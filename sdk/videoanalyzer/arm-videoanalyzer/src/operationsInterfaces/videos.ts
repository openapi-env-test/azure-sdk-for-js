/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  VideoEntity,
  VideosListOptionalParams,
  VideosGetOptionalParams,
  VideosGetResponse,
  VideosCreateOrUpdateOptionalParams,
  VideosCreateOrUpdateResponse,
  VideosDeleteOptionalParams,
  VideosUpdateOptionalParams,
  VideosUpdateResponse,
  VideosListStreamingTokenOptionalParams,
  VideosListStreamingTokenResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Videos. */
export interface Videos {
  /**
   * List all existing video resources in the specified account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    accountName: string,
    options?: VideosListOptionalParams
  ): PagedAsyncIterableIterator<VideoEntity>;
  /**
   * Retrieves an existing video resource within an account with a given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param videoName The name of the video to retrieve.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    videoName: string,
    options?: VideosGetOptionalParams
  ): Promise<VideosGetResponse>;
  /**
   * Creates a new video resource or updates an existing one in an account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param videoName The name of the video to create or update.
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    accountName: string,
    videoName: string,
    parameters: VideoEntity,
    options?: VideosCreateOrUpdateOptionalParams
  ): Promise<VideosCreateOrUpdateResponse>;
  /**
   * Deletes an existing video resource and its underlying data. This operation is irreversible.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param videoName The name of the video to delete.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    videoName: string,
    options?: VideosDeleteOptionalParams
  ): Promise<void>;
  /**
   * Updates individual properties of an existing video resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param videoName The name of the video to update.
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    videoName: string,
    parameters: VideoEntity,
    options?: VideosUpdateOptionalParams
  ): Promise<VideosUpdateResponse>;
  /**
   * Generates a streaming token used for authenticating video playback.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The Azure Video Analyzer account name.
   * @param videoName The name of the video to generate a token for playback.
   * @param options The options parameters.
   */
  listStreamingToken(
    resourceGroupName: string,
    accountName: string,
    videoName: string,
    options?: VideosListStreamingTokenOptionalParams
  ): Promise<VideosListStreamingTokenResponse>;
}
