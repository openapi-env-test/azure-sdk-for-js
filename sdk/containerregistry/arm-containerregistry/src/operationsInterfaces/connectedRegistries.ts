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
  ConnectedRegistry,
  ConnectedRegistriesListOptionalParams,
  ConnectedRegistriesGetOptionalParams,
  ConnectedRegistriesGetResponse,
  ConnectedRegistriesCreateOptionalParams,
  ConnectedRegistriesCreateResponse,
  ConnectedRegistriesDeleteOptionalParams,
  ConnectedRegistryUpdateParameters,
  ConnectedRegistriesUpdateOptionalParams,
  ConnectedRegistriesUpdateResponse,
  ConnectedRegistriesDeactivateOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ConnectedRegistries. */
export interface ConnectedRegistries {
  /**
   * Lists all connected registries for the specified container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    registryName: string,
    options?: ConnectedRegistriesListOptionalParams
  ): PagedAsyncIterableIterator<ConnectedRegistry>;
  /**
   * Gets the properties of the connected registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param connectedRegistryName The name of the connected registry.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    registryName: string,
    connectedRegistryName: string,
    options?: ConnectedRegistriesGetOptionalParams
  ): Promise<ConnectedRegistriesGetResponse>;
  /**
   * Creates a connected registry for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param connectedRegistryName The name of the connected registry.
   * @param connectedRegistryCreateParameters The parameters for creating a connectedRegistry.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    registryName: string,
    connectedRegistryName: string,
    connectedRegistryCreateParameters: ConnectedRegistry,
    options?: ConnectedRegistriesCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ConnectedRegistriesCreateResponse>,
      ConnectedRegistriesCreateResponse
    >
  >;
  /**
   * Creates a connected registry for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param connectedRegistryName The name of the connected registry.
   * @param connectedRegistryCreateParameters The parameters for creating a connectedRegistry.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    registryName: string,
    connectedRegistryName: string,
    connectedRegistryCreateParameters: ConnectedRegistry,
    options?: ConnectedRegistriesCreateOptionalParams
  ): Promise<ConnectedRegistriesCreateResponse>;
  /**
   * Deletes a connected registry from a container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param connectedRegistryName The name of the connected registry.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    registryName: string,
    connectedRegistryName: string,
    options?: ConnectedRegistriesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a connected registry from a container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param connectedRegistryName The name of the connected registry.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    registryName: string,
    connectedRegistryName: string,
    options?: ConnectedRegistriesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Updates a connected registry with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param connectedRegistryName The name of the connected registry.
   * @param connectedRegistryUpdateParameters The parameters for updating a connectedRegistry.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    registryName: string,
    connectedRegistryName: string,
    connectedRegistryUpdateParameters: ConnectedRegistryUpdateParameters,
    options?: ConnectedRegistriesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ConnectedRegistriesUpdateResponse>,
      ConnectedRegistriesUpdateResponse
    >
  >;
  /**
   * Updates a connected registry with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param connectedRegistryName The name of the connected registry.
   * @param connectedRegistryUpdateParameters The parameters for updating a connectedRegistry.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    registryName: string,
    connectedRegistryName: string,
    connectedRegistryUpdateParameters: ConnectedRegistryUpdateParameters,
    options?: ConnectedRegistriesUpdateOptionalParams
  ): Promise<ConnectedRegistriesUpdateResponse>;
  /**
   * Deactivates the connected registry instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param connectedRegistryName The name of the connected registry.
   * @param options The options parameters.
   */
  beginDeactivate(
    resourceGroupName: string,
    registryName: string,
    connectedRegistryName: string,
    options?: ConnectedRegistriesDeactivateOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deactivates the connected registry instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param connectedRegistryName The name of the connected registry.
   * @param options The options parameters.
   */
  beginDeactivateAndWait(
    resourceGroupName: string,
    registryName: string,
    connectedRegistryName: string,
    options?: ConnectedRegistriesDeactivateOptionalParams
  ): Promise<void>;
}
