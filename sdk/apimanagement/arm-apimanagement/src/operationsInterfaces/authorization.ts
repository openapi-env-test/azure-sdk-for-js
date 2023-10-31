/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AuthorizationContract,
  AuthorizationListByAuthorizationProviderOptionalParams,
  AuthorizationGetOptionalParams,
  AuthorizationGetResponse,
  AuthorizationCreateOrUpdateOptionalParams,
  AuthorizationCreateOrUpdateResponse,
  AuthorizationDeleteOptionalParams,
  AuthorizationConfirmConsentCodeRequestContract,
  AuthorizationConfirmConsentCodeOptionalParams,
  AuthorizationConfirmConsentCodeResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Authorization. */
export interface Authorization {
  /**
   * Lists a collection of authorization providers defined within a authorization provider.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param authorizationProviderId Identifier of the authorization provider.
   * @param options The options parameters.
   */
  listByAuthorizationProvider(
    resourceGroupName: string,
    serviceName: string,
    authorizationProviderId: string,
    options?: AuthorizationListByAuthorizationProviderOptionalParams
  ): PagedAsyncIterableIterator<AuthorizationContract>;
  /**
   * Gets the details of the authorization specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param authorizationProviderId Identifier of the authorization provider.
   * @param authorizationId Identifier of the authorization.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    authorizationProviderId: string,
    authorizationId: string,
    options?: AuthorizationGetOptionalParams
  ): Promise<AuthorizationGetResponse>;
  /**
   * Creates or updates authorization.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param authorizationProviderId Identifier of the authorization provider.
   * @param authorizationId Identifier of the authorization.
   * @param parameters Create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    authorizationProviderId: string,
    authorizationId: string,
    parameters: AuthorizationContract,
    options?: AuthorizationCreateOrUpdateOptionalParams
  ): Promise<AuthorizationCreateOrUpdateResponse>;
  /**
   * Deletes specific Authorization from the Authorization provider.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param authorizationProviderId Identifier of the authorization provider.
   * @param authorizationId Identifier of the authorization.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    authorizationProviderId: string,
    authorizationId: string,
    ifMatch: string,
    options?: AuthorizationDeleteOptionalParams
  ): Promise<void>;
  /**
   * Confirm valid consent code to suppress Authorizations anti-phishing page.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param authorizationProviderId Identifier of the authorization provider.
   * @param authorizationId Identifier of the authorization.
   * @param parameters Create parameters.
   * @param options The options parameters.
   */
  confirmConsentCode(
    resourceGroupName: string,
    serviceName: string,
    authorizationProviderId: string,
    authorizationId: string,
    parameters: AuthorizationConfirmConsentCodeRequestContract,
    options?: AuthorizationConfirmConsentCodeOptionalParams
  ): Promise<AuthorizationConfirmConsentCodeResponse>;
}
