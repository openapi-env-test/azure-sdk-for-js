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
  StorageResource,
  StoragesListOptionalParams,
  StoragesGetOptionalParams,
  StoragesGetResponse,
  StoragesCreateOrUpdateOptionalParams,
  StoragesCreateOrUpdateResponse,
  StoragesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Storages. */
export interface Storages {
  /**
   * List all the storages of one Azure Spring Apps resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    serviceName: string,
    options?: StoragesListOptionalParams
  ): PagedAsyncIterableIterator<StorageResource>;
  /**
   * Get the storage resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param storageName The name of the storage resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    storageName: string,
    options?: StoragesGetOptionalParams
  ): Promise<StoragesGetResponse>;
  /**
   * Create or update storage resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param storageName The name of the storage resource.
   * @param storageResource Parameters for the create or update operation
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    storageName: string,
    storageResource: StorageResource,
    options?: StoragesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<StoragesCreateOrUpdateResponse>,
      StoragesCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update storage resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param storageName The name of the storage resource.
   * @param storageResource Parameters for the create or update operation
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    storageName: string,
    storageResource: StorageResource,
    options?: StoragesCreateOrUpdateOptionalParams
  ): Promise<StoragesCreateOrUpdateResponse>;
  /**
   * Delete the storage resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param storageName The name of the storage resource.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serviceName: string,
    storageName: string,
    options?: StoragesDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete the storage resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param storageName The name of the storage resource.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serviceName: string,
    storageName: string,
    options?: StoragesDeleteOptionalParams
  ): Promise<void>;
}
