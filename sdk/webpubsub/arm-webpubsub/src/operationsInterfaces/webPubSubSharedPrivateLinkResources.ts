import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  SharedPrivateLinkResource,
  WebPubSubSharedPrivateLinkResourcesListOptionalParams,
  WebPubSubSharedPrivateLinkResourcesGetOptionalParams,
  WebPubSubSharedPrivateLinkResourcesGetResponse,
  WebPubSubSharedPrivateLinkResourcesCreateOrUpdateOptionalParams,
  WebPubSubSharedPrivateLinkResourcesCreateOrUpdateResponse,
  WebPubSubSharedPrivateLinkResourcesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a WebPubSubSharedPrivateLinkResources. */
export interface WebPubSubSharedPrivateLinkResources {
  /**
   * List shared private link resources
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubSharedPrivateLinkResourcesListOptionalParams
  ): PagedAsyncIterableIterator<SharedPrivateLinkResource>;
  /**
   * Get the specified shared private link resource
   * @param sharedPrivateLinkResourceName The name of the shared private link resource
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  get(
    sharedPrivateLinkResourceName: string,
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubSharedPrivateLinkResourcesGetOptionalParams
  ): Promise<WebPubSubSharedPrivateLinkResourcesGetResponse>;
  /**
   * Create or update a shared private link resource
   * @param sharedPrivateLinkResourceName The name of the shared private link resource
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param parameters The shared private link resource
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    sharedPrivateLinkResourceName: string,
    resourceGroupName: string,
    resourceName: string,
    parameters: SharedPrivateLinkResource,
    options?: WebPubSubSharedPrivateLinkResourcesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        WebPubSubSharedPrivateLinkResourcesCreateOrUpdateResponse
      >,
      WebPubSubSharedPrivateLinkResourcesCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a shared private link resource
   * @param sharedPrivateLinkResourceName The name of the shared private link resource
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param parameters The shared private link resource
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    sharedPrivateLinkResourceName: string,
    resourceGroupName: string,
    resourceName: string,
    parameters: SharedPrivateLinkResource,
    options?: WebPubSubSharedPrivateLinkResourcesCreateOrUpdateOptionalParams
  ): Promise<WebPubSubSharedPrivateLinkResourcesCreateOrUpdateResponse>;
  /**
   * Delete the specified shared private link resource
   * @param sharedPrivateLinkResourceName The name of the shared private link resource
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  beginDelete(
    sharedPrivateLinkResourceName: string,
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubSharedPrivateLinkResourcesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete the specified shared private link resource
   * @param sharedPrivateLinkResourceName The name of the shared private link resource
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    sharedPrivateLinkResourceName: string,
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubSharedPrivateLinkResourcesDeleteOptionalParams
  ): Promise<void>;
}
