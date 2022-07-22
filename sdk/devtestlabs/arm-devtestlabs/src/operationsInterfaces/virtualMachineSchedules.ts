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
  Schedule,
  VirtualMachineSchedulesListOptionalParams,
  VirtualMachineSchedulesGetOptionalParams,
  VirtualMachineSchedulesGetResponse,
  VirtualMachineSchedulesCreateOrUpdateOptionalParams,
  VirtualMachineSchedulesCreateOrUpdateResponse,
  VirtualMachineSchedulesDeleteOptionalParams,
  ScheduleFragment,
  VirtualMachineSchedulesUpdateOptionalParams,
  VirtualMachineSchedulesUpdateResponse,
  VirtualMachineSchedulesExecuteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VirtualMachineSchedules. */
export interface VirtualMachineSchedules {
  /**
   * List schedules in a given virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param virtualMachineName The name of the virtual machine.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    labName: string,
    virtualMachineName: string,
    options?: VirtualMachineSchedulesListOptionalParams
  ): PagedAsyncIterableIterator<Schedule>;
  /**
   * Get schedule.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param virtualMachineName The name of the virtual machine.
   * @param name The name of the schedule.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    labName: string,
    virtualMachineName: string,
    name: string,
    options?: VirtualMachineSchedulesGetOptionalParams
  ): Promise<VirtualMachineSchedulesGetResponse>;
  /**
   * Create or replace an existing schedule.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param virtualMachineName The name of the virtual machine.
   * @param name The name of the schedule.
   * @param schedule A schedule.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    labName: string,
    virtualMachineName: string,
    name: string,
    schedule: Schedule,
    options?: VirtualMachineSchedulesCreateOrUpdateOptionalParams
  ): Promise<VirtualMachineSchedulesCreateOrUpdateResponse>;
  /**
   * Delete schedule.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param virtualMachineName The name of the virtual machine.
   * @param name The name of the schedule.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    labName: string,
    virtualMachineName: string,
    name: string,
    options?: VirtualMachineSchedulesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Allows modifying tags of schedules. All other properties will be ignored.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param virtualMachineName The name of the virtual machine.
   * @param name The name of the schedule.
   * @param schedule Allows modifying tags of schedules. All other properties will be ignored.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    labName: string,
    virtualMachineName: string,
    name: string,
    schedule: ScheduleFragment,
    options?: VirtualMachineSchedulesUpdateOptionalParams
  ): Promise<VirtualMachineSchedulesUpdateResponse>;
  /**
   * Execute a schedule. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param virtualMachineName The name of the virtual machine.
   * @param name The name of the schedule.
   * @param options The options parameters.
   */
  beginExecute(
    resourceGroupName: string,
    labName: string,
    virtualMachineName: string,
    name: string,
    options?: VirtualMachineSchedulesExecuteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Execute a schedule. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param virtualMachineName The name of the virtual machine.
   * @param name The name of the schedule.
   * @param options The options parameters.
   */
  beginExecuteAndWait(
    resourceGroupName: string,
    labName: string,
    virtualMachineName: string,
    name: string,
    options?: VirtualMachineSchedulesExecuteOptionalParams
  ): Promise<void>;
}
