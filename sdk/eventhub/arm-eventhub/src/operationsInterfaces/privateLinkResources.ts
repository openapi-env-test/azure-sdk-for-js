/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  PrivateLinkResourcesGetOptionalParams,
  PrivateLinkResourcesGetResponse,
  PrivateLinkResourcesListOptionalParams,
  PrivateLinkResourcesListResponse
} from "../models";

/** Interface representing a PrivateLinkResources. */
export interface PrivateLinkResources {
  /**
   * Gets a description for the specified Private Endpoint Connection name.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param privateLinkResourceName The PrivateLinkResource name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    namespaceName: string,
    privateLinkResourceName: string,
    options?: PrivateLinkResourcesGetOptionalParams
  ): Promise<PrivateLinkResourcesGetResponse>;
  /**
   * Gets lists of resources that supports Privatelinks.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    namespaceName: string,
    options?: PrivateLinkResourcesListOptionalParams
  ): Promise<PrivateLinkResourcesListResponse>;
}
