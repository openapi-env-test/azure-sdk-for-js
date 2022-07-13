/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ContainerApp,
  ContainerAppsListBySubscriptionOptionalParams,
  ContainerAppsListByResourceGroupOptionalParams,
  ContainerAppsGetOptionalParams,
  ContainerAppsGetResponse,
  ContainerAppsCreateOrUpdateOptionalParams,
  ContainerAppsCreateOrUpdateResponse,
  ContainerAppsDeleteOptionalParams,
  ContainerAppPatch,
  ContainerAppsUpdateOptionalParams,
  ContainerAppsUpdateResponse,
  ContainerAppsListCustomHostNameAnalysisOptionalParams,
  ContainerAppsListCustomHostNameAnalysisResponse,
  ContainerAppsListSecretsOptionalParams,
  ContainerAppsListSecretsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ContainerApps. */
export interface ContainerApps {
  /**
   * Get the Container Apps in a given subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: ContainerAppsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<ContainerApp>;
  /**
   * Get the Container Apps in a given resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ContainerAppsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ContainerApp>;
  /**
   * Get the properties of a Container App.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of the Container App.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    name: string,
    options?: ContainerAppsGetOptionalParams
  ): Promise<ContainerAppsGetResponse>;
  /**
   * Create or update a Container App.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of the Container App.
   * @param containerAppEnvelope Properties used to create a container app
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    name: string,
    containerAppEnvelope: ContainerApp,
    options?: ContainerAppsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ContainerAppsCreateOrUpdateResponse>,
      ContainerAppsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a Container App.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of the Container App.
   * @param containerAppEnvelope Properties used to create a container app
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    name: string,
    containerAppEnvelope: ContainerApp,
    options?: ContainerAppsCreateOrUpdateOptionalParams
  ): Promise<ContainerAppsCreateOrUpdateResponse>;
  /**
   * Delete a Container App.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of the Container App.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    name: string,
    options?: ContainerAppsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete a Container App.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of the Container App.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    name: string,
    options?: ContainerAppsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Patches a Container App. Currently only patching of tags is supported
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of the Container App.
   * @param containerAppEnvelope Properties of a container app that need to be updated
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    name: string,
    containerAppEnvelope: ContainerAppPatch,
    options?: ContainerAppsUpdateOptionalParams
  ): Promise<ContainerAppsUpdateResponse>;
  /**
   * Analyzes a custom hostname for a Container App
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param containerAppName Name of the Container App.
   * @param options The options parameters.
   */
  listCustomHostNameAnalysis(
    resourceGroupName: string,
    containerAppName: string,
    options?: ContainerAppsListCustomHostNameAnalysisOptionalParams
  ): Promise<ContainerAppsListCustomHostNameAnalysisResponse>;
  /**
   * List secrets for a container app
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param name Name of the Container App.
   * @param options The options parameters.
   */
  listSecrets(
    resourceGroupName: string,
    name: string,
    options?: ContainerAppsListSecretsOptionalParams
  ): Promise<ContainerAppsListSecretsResponse>;
}
