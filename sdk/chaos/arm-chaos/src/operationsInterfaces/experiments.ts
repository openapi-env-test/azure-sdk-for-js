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
  Experiment,
  ExperimentsListAllOptionalParams,
  ExperimentsListOptionalParams,
  ExperimentStatus,
  ExperimentsListAllStatusesOptionalParams,
  ExperimentExecutionDetails,
  ExperimentsListExecutionDetailsOptionalParams,
  ExperimentsDeleteOptionalParams,
  ExperimentsGetOptionalParams,
  ExperimentsGetResponse,
  ExperimentsCreateOrUpdateOptionalParams,
  ExperimentsCreateOrUpdateResponse,
  ExperimentsCancelOptionalParams,
  ExperimentsCancelResponse,
  ExperimentsStartOptionalParams,
  ExperimentsStartResponse,
  ExperimentsGetStatusOptionalParams,
  ExperimentsGetStatusResponse,
  ExperimentsGetExecutionDetailsOptionalParams,
  ExperimentsGetExecutionDetailsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Experiments. */
export interface Experiments {
  /**
   * Get a list of Experiment resources in a subscription.
   * @param options The options parameters.
   */
  listAll(
    options?: ExperimentsListAllOptionalParams
  ): PagedAsyncIterableIterator<Experiment>;
  /**
   * Get a list of Experiment resources in a resource group.
   * @param resourceGroupName String that represents an Azure resource group.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: ExperimentsListOptionalParams
  ): PagedAsyncIterableIterator<Experiment>;
  /**
   * Get a list of statuses of a Experiment resource.
   * @param resourceGroupName String that represents an Azure resource group.
   * @param experimentName String that represents a Experiment resource name.
   * @param options The options parameters.
   */
  listAllStatuses(
    resourceGroupName: string,
    experimentName: string,
    options?: ExperimentsListAllStatusesOptionalParams
  ): PagedAsyncIterableIterator<ExperimentStatus>;
  /**
   * Get a list of execution details of a Experiment resource.
   * @param resourceGroupName String that represents an Azure resource group.
   * @param experimentName String that represents a Experiment resource name.
   * @param options The options parameters.
   */
  listExecutionDetails(
    resourceGroupName: string,
    experimentName: string,
    options?: ExperimentsListExecutionDetailsOptionalParams
  ): PagedAsyncIterableIterator<ExperimentExecutionDetails>;
  /**
   * Delete a Experiment resource.
   * @param resourceGroupName String that represents an Azure resource group.
   * @param experimentName String that represents a Experiment resource name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    experimentName: string,
    options?: ExperimentsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Get a Experiment resource.
   * @param resourceGroupName String that represents an Azure resource group.
   * @param experimentName String that represents a Experiment resource name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    experimentName: string,
    options?: ExperimentsGetOptionalParams
  ): Promise<ExperimentsGetResponse>;
  /**
   * Create or update a Experiment resource.
   * @param resourceGroupName String that represents an Azure resource group.
   * @param experimentName String that represents a Experiment resource name.
   * @param experiment Experiment resource to be created or updated.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    experimentName: string,
    experiment: Experiment,
    options?: ExperimentsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ExperimentsCreateOrUpdateResponse>,
      ExperimentsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a Experiment resource.
   * @param resourceGroupName String that represents an Azure resource group.
   * @param experimentName String that represents a Experiment resource name.
   * @param experiment Experiment resource to be created or updated.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    experimentName: string,
    experiment: Experiment,
    options?: ExperimentsCreateOrUpdateOptionalParams
  ): Promise<ExperimentsCreateOrUpdateResponse>;
  /**
   * Cancel a running Experiment resource.
   * @param resourceGroupName String that represents an Azure resource group.
   * @param experimentName String that represents a Experiment resource name.
   * @param options The options parameters.
   */
  beginCancel(
    resourceGroupName: string,
    experimentName: string,
    options?: ExperimentsCancelOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ExperimentsCancelResponse>,
      ExperimentsCancelResponse
    >
  >;
  /**
   * Cancel a running Experiment resource.
   * @param resourceGroupName String that represents an Azure resource group.
   * @param experimentName String that represents a Experiment resource name.
   * @param options The options parameters.
   */
  beginCancelAndWait(
    resourceGroupName: string,
    experimentName: string,
    options?: ExperimentsCancelOptionalParams
  ): Promise<ExperimentsCancelResponse>;
  /**
   * Start a Experiment resource.
   * @param resourceGroupName String that represents an Azure resource group.
   * @param experimentName String that represents a Experiment resource name.
   * @param options The options parameters.
   */
  start(
    resourceGroupName: string,
    experimentName: string,
    options?: ExperimentsStartOptionalParams
  ): Promise<ExperimentsStartResponse>;
  /**
   * Get a status of a Experiment resource.
   * @param resourceGroupName String that represents an Azure resource group.
   * @param experimentName String that represents a Experiment resource name.
   * @param statusId GUID that represents a Experiment status.
   * @param options The options parameters.
   */
  getStatus(
    resourceGroupName: string,
    experimentName: string,
    statusId: string,
    options?: ExperimentsGetStatusOptionalParams
  ): Promise<ExperimentsGetStatusResponse>;
  /**
   * Get an execution detail of a Experiment resource.
   * @param resourceGroupName String that represents an Azure resource group.
   * @param experimentName String that represents a Experiment resource name.
   * @param executionDetailsId GUID that represents a Experiment execution detail.
   * @param options The options parameters.
   */
  getExecutionDetails(
    resourceGroupName: string,
    experimentName: string,
    executionDetailsId: string,
    options?: ExperimentsGetExecutionDetailsOptionalParams
  ): Promise<ExperimentsGetExecutionDetailsResponse>;
}
