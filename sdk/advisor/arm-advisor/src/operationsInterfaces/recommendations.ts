/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ResourceRecommendationBase,
  RecommendationsListOptionalParams,
  RecommendationsGenerateOptionalParams,
  RecommendationsGenerateResponse,
  RecommendationsGetGenerateRecommendationsStatusOptionalParams,
  RecommendationsGetOptionalParams,
  RecommendationsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Recommendations. */
export interface Recommendations {
  /**
   * Obtains cached recommendations for a subscription. The recommendations are generated or computed by
   * invoking generateRecommendations.
   * @param options The options parameters.
   */
  list(
    options?: RecommendationsListOptionalParams
  ): PagedAsyncIterableIterator<ResourceRecommendationBase>;
  /**
   * Initiates the recommendation generation or computation process for a subscription. This operation is
   * asynchronous. The generated recommendations are stored in a cache in the Advisor service.
   * @param options The options parameters.
   */
  generate(
    options?: RecommendationsGenerateOptionalParams
  ): Promise<RecommendationsGenerateResponse>;
  /**
   * Retrieves the status of the recommendation computation or generation process. Invoke this API after
   * calling the generation recommendation. The URI of this API is returned in the Location field of the
   * response header.
   * @param operationId The operation ID, which can be found from the Location field in the generate
   *                    recommendation response header.
   * @param options The options parameters.
   */
  getGenerateRecommendationsStatus(
    operationId: string,
    options?: RecommendationsGetGenerateRecommendationsStatusOptionalParams
  ): Promise<void>;
  /**
   * Obtains details of a cached recommendation.
   * @param resourceUri The fully qualified Azure Resource Manager identifier of the resource to which
   *                    the recommendation applies.
   * @param recommendationId The recommendation ID.
   * @param options The options parameters.
   */
  get(
    resourceUri: string,
    recommendationId: string,
    options?: RecommendationsGetOptionalParams
  ): Promise<RecommendationsGetResponse>;
}
