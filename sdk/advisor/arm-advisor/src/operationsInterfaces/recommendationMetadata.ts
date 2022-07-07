/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  MetadataEntity,
  RecommendationMetadataListOptionalParams,
  RecommendationMetadataGetOptionalParams,
  RecommendationMetadataGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RecommendationMetadata. */
export interface RecommendationMetadata {
  /**
   * Gets the list of metadata entities.
   * @param options The options parameters.
   */
  list(
    options?: RecommendationMetadataListOptionalParams
  ): PagedAsyncIterableIterator<MetadataEntity>;
  /**
   * Gets the entity.
   * @param name Name of metadata entity.
   * @param options The options parameters.
   */
  get(
    name: string,
    options?: RecommendationMetadataGetOptionalParams
  ): Promise<RecommendationMetadataGetResponse>;
}
