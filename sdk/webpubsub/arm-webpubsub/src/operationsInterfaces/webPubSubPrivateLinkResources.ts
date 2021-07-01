import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PrivateLinkResource,
  WebPubSubPrivateLinkResourcesListOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a WebPubSubPrivateLinkResources. */
export interface WebPubSubPrivateLinkResources {
  /**
   * Get the private link resources that need to be created for a resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubPrivateLinkResourcesListOptionalParams
  ): PagedAsyncIterableIterator<PrivateLinkResource>;
}
