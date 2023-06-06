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
  Configuration,
  ConfigurationsListByServerOptionalParams,
  ConfigurationsCreateOrUpdateOptionalParams,
  ConfigurationsCreateOrUpdateResponse,
  ConfigurationsUpdateOptionalParams,
  ConfigurationsUpdateResponse,
  ConfigurationsGetOptionalParams,
  ConfigurationsGetResponse,
  ConfigurationListForBatchUpdate,
  ConfigurationsBatchUpdateOptionalParams,
  ConfigurationsBatchUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Configurations. */
export interface Configurations {
  /**
   * List all the configurations in a given server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ConfigurationsListByServerOptionalParams
  ): PagedAsyncIterableIterator<Configuration>;
  /**
   * Updates a configuration of a server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param configurationName The name of the server configuration.
   * @param parameters The required parameters for updating a server configuration.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    configurationName: string,
    parameters: Configuration,
    options?: ConfigurationsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ConfigurationsCreateOrUpdateResponse>,
      ConfigurationsCreateOrUpdateResponse
    >
  >;
  /**
   * Updates a configuration of a server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param configurationName The name of the server configuration.
   * @param parameters The required parameters for updating a server configuration.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    configurationName: string,
    parameters: Configuration,
    options?: ConfigurationsCreateOrUpdateOptionalParams
  ): Promise<ConfigurationsCreateOrUpdateResponse>;
  /**
   * Updates a configuration of a server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param configurationName The name of the server configuration.
   * @param parameters The required parameters for updating a server configuration.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    serverName: string,
    configurationName: string,
    parameters: Configuration,
    options?: ConfigurationsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ConfigurationsUpdateResponse>,
      ConfigurationsUpdateResponse
    >
  >;
  /**
   * Updates a configuration of a server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param configurationName The name of the server configuration.
   * @param parameters The required parameters for updating a server configuration.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    configurationName: string,
    parameters: Configuration,
    options?: ConfigurationsUpdateOptionalParams
  ): Promise<ConfigurationsUpdateResponse>;
  /**
   * Gets information about a configuration of server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param configurationName The name of the server configuration.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    configurationName: string,
    options?: ConfigurationsGetOptionalParams
  ): Promise<ConfigurationsGetResponse>;
  /**
   * Update a list of configurations in a given server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param parameters The parameters for updating a list of server configuration.
   * @param options The options parameters.
   */
  beginBatchUpdate(
    resourceGroupName: string,
    serverName: string,
    parameters: ConfigurationListForBatchUpdate,
    options?: ConfigurationsBatchUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ConfigurationsBatchUpdateResponse>,
      ConfigurationsBatchUpdateResponse
    >
  >;
  /**
   * Update a list of configurations in a given server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param parameters The parameters for updating a list of server configuration.
   * @param options The options parameters.
   */
  beginBatchUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    parameters: ConfigurationListForBatchUpdate,
    options?: ConfigurationsBatchUpdateOptionalParams
  ): Promise<ConfigurationsBatchUpdateResponse>;
}
