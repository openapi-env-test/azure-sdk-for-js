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
  Project,
  ProjectsListOptionalParams,
  ProjectsGetOptionalParams,
  ProjectsGetResponse,
  ProjectsCreateOrUpdateOptionalParams,
  ProjectsCreateOrUpdateResponse,
  ProjectUpdateParameters,
  ProjectsUpdateOptionalParams,
  ProjectsUpdateResponse,
  ProjectsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Projects. */
export interface Projects {
  /**
   * Lists all projects in a Storage Mover.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageMoverName The name of the Storage Mover resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    storageMoverName: string,
    options?: ProjectsListOptionalParams
  ): PagedAsyncIterableIterator<Project>;
  /**
   * Gets a project resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageMoverName The name of the Storage Mover resource.
   * @param projectName The name of the project resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    storageMoverName: string,
    projectName: string,
    options?: ProjectsGetOptionalParams
  ): Promise<ProjectsGetResponse>;
  /**
   * Creates or updates a project resource, which is a logical grouping of related jobs.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageMoverName The name of the Storage Mover resource.
   * @param projectName The name of the project resource.
   * @param project The project resource.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    storageMoverName: string,
    projectName: string,
    project: Project,
    options?: ProjectsCreateOrUpdateOptionalParams
  ): Promise<ProjectsCreateOrUpdateResponse>;
  /**
   * Updates properties for a project resource. Properties not specified in the request body will be
   * unchanged.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageMoverName The name of the Storage Mover resource.
   * @param projectName The name of the project resource.
   * @param project The project resource.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    storageMoverName: string,
    projectName: string,
    project: ProjectUpdateParameters,
    options?: ProjectsUpdateOptionalParams
  ): Promise<ProjectsUpdateResponse>;
  /**
   * Deletes a project resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageMoverName The name of the Storage Mover resource.
   * @param projectName The name of the project resource.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    storageMoverName: string,
    projectName: string,
    options?: ProjectsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a project resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageMoverName The name of the Storage Mover resource.
   * @param projectName The name of the project resource.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    storageMoverName: string,
    projectName: string,
    options?: ProjectsDeleteOptionalParams
  ): Promise<void>;
}
