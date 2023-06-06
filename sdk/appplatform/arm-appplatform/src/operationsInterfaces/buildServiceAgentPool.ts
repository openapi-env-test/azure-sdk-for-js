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
  BuildServiceAgentPoolResource,
  BuildServiceAgentPoolListOptionalParams,
  BuildServiceAgentPoolGetOptionalParams,
  BuildServiceAgentPoolGetResponse,
  BuildServiceAgentPoolUpdatePutOptionalParams,
  BuildServiceAgentPoolUpdatePutResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a BuildServiceAgentPool. */
export interface BuildServiceAgentPool {
  /**
   * List build service agent pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param buildServiceName The name of the build service resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    serviceName: string,
    buildServiceName: string,
    options?: BuildServiceAgentPoolListOptionalParams
  ): PagedAsyncIterableIterator<BuildServiceAgentPoolResource>;
  /**
   * Get build service agent pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param buildServiceName The name of the build service resource.
   * @param agentPoolName The name of the build service agent pool resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    buildServiceName: string,
    agentPoolName: string,
    options?: BuildServiceAgentPoolGetOptionalParams
  ): Promise<BuildServiceAgentPoolGetResponse>;
  /**
   * Create or update build service agent pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param buildServiceName The name of the build service resource.
   * @param agentPoolName The name of the build service agent pool resource.
   * @param agentPoolResource Parameters for the update operation
   * @param options The options parameters.
   */
  beginUpdatePut(
    resourceGroupName: string,
    serviceName: string,
    buildServiceName: string,
    agentPoolName: string,
    agentPoolResource: BuildServiceAgentPoolResource,
    options?: BuildServiceAgentPoolUpdatePutOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<BuildServiceAgentPoolUpdatePutResponse>,
      BuildServiceAgentPoolUpdatePutResponse
    >
  >;
  /**
   * Create or update build service agent pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param buildServiceName The name of the build service resource.
   * @param agentPoolName The name of the build service agent pool resource.
   * @param agentPoolResource Parameters for the update operation
   * @param options The options parameters.
   */
  beginUpdatePutAndWait(
    resourceGroupName: string,
    serviceName: string,
    buildServiceName: string,
    agentPoolName: string,
    agentPoolResource: BuildServiceAgentPoolResource,
    options?: BuildServiceAgentPoolUpdatePutOptionalParams
  ): Promise<BuildServiceAgentPoolUpdatePutResponse>;
}
