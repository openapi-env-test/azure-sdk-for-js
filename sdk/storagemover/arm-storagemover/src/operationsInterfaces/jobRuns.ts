/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  JobRun,
  JobRunsListOptionalParams,
  JobRunsGetOptionalParams,
  JobRunsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a JobRuns. */
export interface JobRuns {
  /**
   * Lists all job runs in a job definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageMoverName The name of the Storage Mover resource.
   * @param projectName The name of the project resource.
   * @param jobDefinitionName The name of the job definition resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    storageMoverName: string,
    projectName: string,
    jobDefinitionName: string,
    options?: JobRunsListOptionalParams
  ): PagedAsyncIterableIterator<JobRun>;
  /**
   * Gets a job run resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageMoverName The name of the Storage Mover resource.
   * @param projectName The name of the project resource.
   * @param jobDefinitionName The name of the job definition resource.
   * @param jobRunName The name of the job run.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    storageMoverName: string,
    projectName: string,
    jobDefinitionName: string,
    jobRunName: string,
    options?: JobRunsGetOptionalParams
  ): Promise<JobRunsGetResponse>;
}
