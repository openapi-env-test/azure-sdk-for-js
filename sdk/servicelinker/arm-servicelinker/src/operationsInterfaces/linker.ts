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
  LinkerResource,
  LinkerListOptionalParams,
  LinkerValidateOptionalParams,
  LinkerValidateResponse,
  LinkerListConfigurationsOptionalParams,
  LinkerListConfigurationsResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Linker. */
export interface Linker {
  /**
   * Returns list of Linkers which connects to the resource.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param options The options parameters.
   */
  list(
    resourceUri: string,
    options?: LinkerListOptionalParams,
  ): PagedAsyncIterableIterator<LinkerResource>;
  /**
   * Validate a link.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param linkerName The name Linker resource.
   * @param options The options parameters.
   */
  beginValidate(
    resourceUri: string,
    linkerName: string,
    options?: LinkerValidateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<LinkerValidateResponse>,
      LinkerValidateResponse
    >
  >;
  /**
   * Validate a link.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param linkerName The name Linker resource.
   * @param options The options parameters.
   */
  beginValidateAndWait(
    resourceUri: string,
    linkerName: string,
    options?: LinkerValidateOptionalParams,
  ): Promise<LinkerValidateResponse>;
  /**
   * list source configurations for a linker.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource to be
   *                    connected.
   * @param linkerName The name Linker resource.
   * @param options The options parameters.
   */
  listConfigurations(
    resourceUri: string,
    linkerName: string,
    options?: LinkerListConfigurationsOptionalParams,
  ): Promise<LinkerListConfigurationsResponse>;
}
