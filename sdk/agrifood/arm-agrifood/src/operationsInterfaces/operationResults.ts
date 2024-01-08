/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationResultsGetOptionalParams,
  OperationResultsGetResponse
} from "../models";

/** Interface representing a OperationResults. */
export interface OperationResults {
  /**
   * Get operationResults for a Data Manager For Agriculture resource.
   * @param locations Location.
   * @param operationResultsId operationResultsId for a specific location.
   * @param options The options parameters.
   */
  get(
    locations: string,
    operationResultsId: string,
    options?: OperationResultsGetOptionalParams
  ): Promise<OperationResultsGetResponse>;
}
