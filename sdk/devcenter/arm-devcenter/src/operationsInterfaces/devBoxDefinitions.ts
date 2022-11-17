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
  DevBoxDefinition,
  DevBoxDefinitionsListByDevCenterOptionalParams,
  DevBoxDefinitionsListByProjectOptionalParams,
  DevBoxDefinitionsGetOptionalParams,
  DevBoxDefinitionsGetResponse,
  DevBoxDefinitionsCreateOrUpdateOptionalParams,
  DevBoxDefinitionsCreateOrUpdateResponse,
  DevBoxDefinitionUpdate,
  DevBoxDefinitionsUpdateOptionalParams,
  DevBoxDefinitionsUpdateResponse,
  DevBoxDefinitionsDeleteOptionalParams,
  DevBoxDefinitionsGetByProjectOptionalParams,
  DevBoxDefinitionsGetByProjectResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DevBoxDefinitions. */
export interface DevBoxDefinitions {
  /**
   * List Dev Box definitions for a devcenter.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param options The options parameters.
   */
  listByDevCenter(
    resourceGroupName: string,
    devCenterName: string,
    options?: DevBoxDefinitionsListByDevCenterOptionalParams
  ): PagedAsyncIterableIterator<DevBoxDefinition>;
  /**
   * List Dev Box definitions configured for a project.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param options The options parameters.
   */
  listByProject(
    resourceGroupName: string,
    projectName: string,
    options?: DevBoxDefinitionsListByProjectOptionalParams
  ): PagedAsyncIterableIterator<DevBoxDefinition>;
  /**
   * Gets a Dev Box definition
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param devBoxDefinitionName The name of the Dev Box definition.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    devCenterName: string,
    devBoxDefinitionName: string,
    options?: DevBoxDefinitionsGetOptionalParams
  ): Promise<DevBoxDefinitionsGetResponse>;
  /**
   * Creates or updates a Dev Box definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param devBoxDefinitionName The name of the Dev Box definition.
   * @param body Represents a Dev Box definition.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    devCenterName: string,
    devBoxDefinitionName: string,
    body: DevBoxDefinition,
    options?: DevBoxDefinitionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DevBoxDefinitionsCreateOrUpdateResponse>,
      DevBoxDefinitionsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a Dev Box definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param devBoxDefinitionName The name of the Dev Box definition.
   * @param body Represents a Dev Box definition.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    devCenterName: string,
    devBoxDefinitionName: string,
    body: DevBoxDefinition,
    options?: DevBoxDefinitionsCreateOrUpdateOptionalParams
  ): Promise<DevBoxDefinitionsCreateOrUpdateResponse>;
  /**
   * Partially updates a Dev Box definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param devBoxDefinitionName The name of the Dev Box definition.
   * @param body Represents a Dev Box definition.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    devCenterName: string,
    devBoxDefinitionName: string,
    body: DevBoxDefinitionUpdate,
    options?: DevBoxDefinitionsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DevBoxDefinitionsUpdateResponse>,
      DevBoxDefinitionsUpdateResponse
    >
  >;
  /**
   * Partially updates a Dev Box definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param devBoxDefinitionName The name of the Dev Box definition.
   * @param body Represents a Dev Box definition.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    devCenterName: string,
    devBoxDefinitionName: string,
    body: DevBoxDefinitionUpdate,
    options?: DevBoxDefinitionsUpdateOptionalParams
  ): Promise<DevBoxDefinitionsUpdateResponse>;
  /**
   * Deletes a Dev Box definition
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param devBoxDefinitionName The name of the Dev Box definition.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    devCenterName: string,
    devBoxDefinitionName: string,
    options?: DevBoxDefinitionsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a Dev Box definition
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param devBoxDefinitionName The name of the Dev Box definition.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    devCenterName: string,
    devBoxDefinitionName: string,
    options?: DevBoxDefinitionsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets a Dev Box definition configured for a project
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param devBoxDefinitionName The name of the Dev Box definition.
   * @param options The options parameters.
   */
  getByProject(
    resourceGroupName: string,
    projectName: string,
    devBoxDefinitionName: string,
    options?: DevBoxDefinitionsGetByProjectOptionalParams
  ): Promise<DevBoxDefinitionsGetByProjectResponse>;
}
