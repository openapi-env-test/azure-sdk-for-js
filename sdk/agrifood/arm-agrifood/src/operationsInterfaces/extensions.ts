/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Extension,
  ExtensionsListByFarmBeatsOptionalParams,
  ExtensionsCreateOrUpdateOptionalParams,
  ExtensionsCreateOrUpdateResponse,
  ExtensionsGetOptionalParams,
  ExtensionsGetResponse,
  ExtensionsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Extensions. */
export interface Extensions {
  /**
   * Get installed extensions details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param options The options parameters.
   */
  listByFarmBeats(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    options?: ExtensionsListByFarmBeatsOptionalParams
  ): PagedAsyncIterableIterator<Extension>;
  /**
   * Install or Update extension. AdditionalApiProperties are merged patch and if the extension is
   * updated to a new version then the obsolete entries will be auto deleted from
   * AdditionalApiProperties.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param extensionId Id of extension resource.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    extensionId: string,
    options?: ExtensionsCreateOrUpdateOptionalParams
  ): Promise<ExtensionsCreateOrUpdateResponse>;
  /**
   * Get installed extension details by extension id.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param extensionId Id of extension resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    extensionId: string,
    options?: ExtensionsGetOptionalParams
  ): Promise<ExtensionsGetResponse>;
  /**
   * Uninstall extension.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param extensionId Id of extension resource.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    farmBeatsResourceName: string,
    extensionId: string,
    options?: ExtensionsDeleteOptionalParams
  ): Promise<void>;
}
