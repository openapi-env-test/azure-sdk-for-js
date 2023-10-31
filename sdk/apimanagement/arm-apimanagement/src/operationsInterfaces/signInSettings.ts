/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  SignInSettingsGetEntityTagOptionalParams,
  SignInSettingsGetEntityTagResponse,
  SignInSettingsGetOptionalParams,
  SignInSettingsGetResponse,
  PortalSigninSettings,
  SignInSettingsUpdateOptionalParams,
  SignInSettingsCreateOrUpdateOptionalParams,
  SignInSettingsCreateOrUpdateResponse
} from "../models";

/** Interface representing a SignInSettings. */
export interface SignInSettings {
  /**
   * Gets the entity state (Etag) version of the SignInSettings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    options?: SignInSettingsGetEntityTagOptionalParams
  ): Promise<SignInSettingsGetEntityTagResponse>;
  /**
   * Get Sign In Settings for the Portal
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    options?: SignInSettingsGetOptionalParams
  ): Promise<SignInSettingsGetResponse>;
  /**
   * Update Sign-In settings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Update Sign-In settings.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    ifMatch: string,
    parameters: PortalSigninSettings,
    options?: SignInSettingsUpdateOptionalParams
  ): Promise<void>;
  /**
   * Create or Update Sign-In settings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param parameters Create or update parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    parameters: PortalSigninSettings,
    options?: SignInSettingsCreateOrUpdateOptionalParams
  ): Promise<SignInSettingsCreateOrUpdateResponse>;
}
