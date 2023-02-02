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
  DryrunResource,
  ConnectorListDryrunOptionalParams,
  LinkerResource,
  ConnectorListOptionalParams,
  ConnectorGetDryrunOptionalParams,
  ConnectorGetDryrunResponse,
  ConnectorCreateDryrunOptionalParams,
  ConnectorCreateDryrunResponse,
  DryrunPatch,
  ConnectorUpdateDryrunOptionalParams,
  ConnectorUpdateDryrunResponse,
  ConnectorDeleteDryrunOptionalParams,
  ConnectorGetOptionalParams,
  ConnectorGetResponse,
  ConnectorCreateOrUpdateOptionalParams,
  ConnectorCreateOrUpdateResponse,
  ConnectorDeleteOptionalParams,
  LinkerPatch,
  ConnectorUpdateOptionalParams,
  ConnectorUpdateResponse,
  ConnectorValidateOptionalParams,
  ConnectorValidateResponse,
  ConnectorGenerateConfigurationsOptionalParams,
  ConnectorGenerateConfigurationsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Connector. */
export interface Connector {
  /**
   * list dryrun jobs
   * @param subscriptionId The ID of the target subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param location The name of Azure region.
   * @param options The options parameters.
   */
  listDryrun(
    subscriptionId: string,
    resourceGroupName: string,
    location: string,
    options?: ConnectorListDryrunOptionalParams
  ): PagedAsyncIterableIterator<DryrunResource>;
  /**
   * Returns list of connector which connects to the resource, which supports to config the target
   * service during the resource provision.
   * @param subscriptionId The ID of the target subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param location The name of Azure region.
   * @param options The options parameters.
   */
  list(
    subscriptionId: string,
    resourceGroupName: string,
    location: string,
    options?: ConnectorListOptionalParams
  ): PagedAsyncIterableIterator<LinkerResource>;
  /**
   * get a dryrun job
   * @param subscriptionId The ID of the target subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param location The name of Azure region.
   * @param dryrunName The name of dryrun.
   * @param options The options parameters.
   */
  getDryrun(
    subscriptionId: string,
    resourceGroupName: string,
    location: string,
    dryrunName: string,
    options?: ConnectorGetDryrunOptionalParams
  ): Promise<ConnectorGetDryrunResponse>;
  /**
   * create a dryrun job to do necessary check before actual creation
   * @param subscriptionId The ID of the target subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param location The name of Azure region.
   * @param dryrunName The name of dryrun.
   * @param parameters dryrun resource.
   * @param options The options parameters.
   */
  beginCreateDryrun(
    subscriptionId: string,
    resourceGroupName: string,
    location: string,
    dryrunName: string,
    parameters: DryrunResource,
    options?: ConnectorCreateDryrunOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ConnectorCreateDryrunResponse>,
      ConnectorCreateDryrunResponse
    >
  >;
  /**
   * create a dryrun job to do necessary check before actual creation
   * @param subscriptionId The ID of the target subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param location The name of Azure region.
   * @param dryrunName The name of dryrun.
   * @param parameters dryrun resource.
   * @param options The options parameters.
   */
  beginCreateDryrunAndWait(
    subscriptionId: string,
    resourceGroupName: string,
    location: string,
    dryrunName: string,
    parameters: DryrunResource,
    options?: ConnectorCreateDryrunOptionalParams
  ): Promise<ConnectorCreateDryrunResponse>;
  /**
   * update a dryrun job to do necessary check before actual creation
   * @param subscriptionId The ID of the target subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param location The name of Azure region.
   * @param dryrunName The name of dryrun.
   * @param parameters dryrun resource.
   * @param options The options parameters.
   */
  beginUpdateDryrun(
    subscriptionId: string,
    resourceGroupName: string,
    location: string,
    dryrunName: string,
    parameters: DryrunPatch,
    options?: ConnectorUpdateDryrunOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ConnectorUpdateDryrunResponse>,
      ConnectorUpdateDryrunResponse
    >
  >;
  /**
   * update a dryrun job to do necessary check before actual creation
   * @param subscriptionId The ID of the target subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param location The name of Azure region.
   * @param dryrunName The name of dryrun.
   * @param parameters dryrun resource.
   * @param options The options parameters.
   */
  beginUpdateDryrunAndWait(
    subscriptionId: string,
    resourceGroupName: string,
    location: string,
    dryrunName: string,
    parameters: DryrunPatch,
    options?: ConnectorUpdateDryrunOptionalParams
  ): Promise<ConnectorUpdateDryrunResponse>;
  /**
   * delete a dryrun job
   * @param subscriptionId The ID of the target subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param location The name of Azure region.
   * @param dryrunName The name of dryrun.
   * @param options The options parameters.
   */
  deleteDryrun(
    subscriptionId: string,
    resourceGroupName: string,
    location: string,
    dryrunName: string,
    options?: ConnectorDeleteDryrunOptionalParams
  ): Promise<void>;
  /**
   * Returns Connector resource for a given name.
   * @param subscriptionId The ID of the target subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param location The name of Azure region.
   * @param connectorName The name of resource.
   * @param options The options parameters.
   */
  get(
    subscriptionId: string,
    resourceGroupName: string,
    location: string,
    connectorName: string,
    options?: ConnectorGetOptionalParams
  ): Promise<ConnectorGetResponse>;
  /**
   * Create or update Connector resource.
   * @param subscriptionId The ID of the target subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param location The name of Azure region.
   * @param connectorName The name of resource.
   * @param parameters Connector details.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    subscriptionId: string,
    resourceGroupName: string,
    location: string,
    connectorName: string,
    parameters: LinkerResource,
    options?: ConnectorCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ConnectorCreateOrUpdateResponse>,
      ConnectorCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update Connector resource.
   * @param subscriptionId The ID of the target subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param location The name of Azure region.
   * @param connectorName The name of resource.
   * @param parameters Connector details.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    subscriptionId: string,
    resourceGroupName: string,
    location: string,
    connectorName: string,
    parameters: LinkerResource,
    options?: ConnectorCreateOrUpdateOptionalParams
  ): Promise<ConnectorCreateOrUpdateResponse>;
  /**
   * Delete a Connector.
   * @param subscriptionId The ID of the target subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param location The name of Azure region.
   * @param connectorName The name of resource.
   * @param options The options parameters.
   */
  beginDelete(
    subscriptionId: string,
    resourceGroupName: string,
    location: string,
    connectorName: string,
    options?: ConnectorDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete a Connector.
   * @param subscriptionId The ID of the target subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param location The name of Azure region.
   * @param connectorName The name of resource.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    subscriptionId: string,
    resourceGroupName: string,
    location: string,
    connectorName: string,
    options?: ConnectorDeleteOptionalParams
  ): Promise<void>;
  /**
   * Operation to update an existing Connector.
   * @param subscriptionId The ID of the target subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param location The name of Azure region.
   * @param connectorName The name of resource.
   * @param parameters Connector details.
   * @param options The options parameters.
   */
  beginUpdate(
    subscriptionId: string,
    resourceGroupName: string,
    location: string,
    connectorName: string,
    parameters: LinkerPatch,
    options?: ConnectorUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ConnectorUpdateResponse>,
      ConnectorUpdateResponse
    >
  >;
  /**
   * Operation to update an existing Connector.
   * @param subscriptionId The ID of the target subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param location The name of Azure region.
   * @param connectorName The name of resource.
   * @param parameters Connector details.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    subscriptionId: string,
    resourceGroupName: string,
    location: string,
    connectorName: string,
    parameters: LinkerPatch,
    options?: ConnectorUpdateOptionalParams
  ): Promise<ConnectorUpdateResponse>;
  /**
   * Validate a Connector.
   * @param subscriptionId The ID of the target subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param location The name of Azure region.
   * @param connectorName The name of resource.
   * @param options The options parameters.
   */
  beginValidate(
    subscriptionId: string,
    resourceGroupName: string,
    location: string,
    connectorName: string,
    options?: ConnectorValidateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ConnectorValidateResponse>,
      ConnectorValidateResponse
    >
  >;
  /**
   * Validate a Connector.
   * @param subscriptionId The ID of the target subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param location The name of Azure region.
   * @param connectorName The name of resource.
   * @param options The options parameters.
   */
  beginValidateAndWait(
    subscriptionId: string,
    resourceGroupName: string,
    location: string,
    connectorName: string,
    options?: ConnectorValidateOptionalParams
  ): Promise<ConnectorValidateResponse>;
  /**
   * Generate configurations for a Connector.
   * @param subscriptionId The ID of the target subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param location The name of Azure region.
   * @param connectorName The name of resource.
   * @param options The options parameters.
   */
  generateConfigurations(
    subscriptionId: string,
    resourceGroupName: string,
    location: string,
    connectorName: string,
    options?: ConnectorGenerateConfigurationsOptionalParams
  ): Promise<ConnectorGenerateConfigurationsResponse>;
}
