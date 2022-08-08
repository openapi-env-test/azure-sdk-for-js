/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  PermissionType,
  Scope,
  GenerateAccessTokenOptionalParams,
  GenerateAccessTokenResponse
} from "../models";

/** Interface representing a Generate. */
export interface Generate {
  /**
   * Generate an Azure Video Indexer access token.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the Azure Video Indexer account.
   * @param permissionType The requested permission
   * @param scope The requested media type
   * @param options The options parameters.
   */
  accessToken(
    resourceGroupName: string,
    accountName: string,
    permissionType: PermissionType,
    scope: Scope,
    options?: GenerateAccessTokenOptionalParams
  ): Promise<GenerateAccessTokenResponse>;
}
