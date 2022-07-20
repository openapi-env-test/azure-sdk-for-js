/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Sample result definition */
export interface Result {
  /** Sample property of type string */
  sampleProperty?: string;
}

/** Error response. */
export interface ErrorResponse {
  /** The error details. */
  error?: ErrorDefinition;
}

/** Error definition. */
export interface ErrorDefinition {
  /**
   * Service specific error code which serves as the substatus for the HTTP error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * Description of the error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * Internal error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorDefinition[];
}

/** Optional parameters. */
export interface OperationGroupGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type OperationGroupGetResponse = Result;

/** Optional parameters. */
export interface SingularityOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
