/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  IssueContract,
  IssueListByServiceOptionalParams,
  IssueGetOptionalParams,
  IssueGetResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Issue. */
export interface Issue {
  /**
   * Lists a collection of issues in the specified service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: IssueListByServiceOptionalParams,
  ): PagedAsyncIterableIterator<IssueContract>;
  /**
   * Gets API Management issue details
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param issueId Issue identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    issueId: string,
    options?: IssueGetOptionalParams,
  ): Promise<IssueGetResponse>;
}
