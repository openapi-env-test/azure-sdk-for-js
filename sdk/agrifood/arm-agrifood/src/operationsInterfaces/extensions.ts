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
  ExtensionsCreateOptionalParams,
  ExtensionsCreateResponse,
  ExtensionsGetOptionalParams,
  ExtensionsGetResponse,
  ExtensionsUpdateOptionalParams,
  ExtensionsUpdateResponse,
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
   * Install extension.
   * @param extensionId Id of extension resource.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  create(
    extensionId: string,
    farmBeatsResourceName: string,
    resourceGroupName: string,
    options?: ExtensionsCreateOptionalParams
  ): Promise<ExtensionsCreateResponse>;
  /**
   * Get installed extension details by extension id.
   * @param extensionId Id of extension resource.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  get(
    extensionId: string,
    farmBeatsResourceName: string,
    resourceGroupName: string,
    options?: ExtensionsGetOptionalParams
  ): Promise<ExtensionsGetResponse>;
  /**
   * Upgrade to latest extension.
   * @param extensionId Id of extension resource.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  update(
    extensionId: string,
    farmBeatsResourceName: string,
    resourceGroupName: string,
    options?: ExtensionsUpdateOptionalParams
  ): Promise<ExtensionsUpdateResponse>;
  /**
   * Uninstall extension.
   * @param extensionId Id of extension resource.
   * @param farmBeatsResourceName FarmBeats resource name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  delete(
    extensionId: string,
    farmBeatsResourceName: string,
    resourceGroupName: string,
    options?: ExtensionsDeleteOptionalParams
  ): Promise<void>;
}
