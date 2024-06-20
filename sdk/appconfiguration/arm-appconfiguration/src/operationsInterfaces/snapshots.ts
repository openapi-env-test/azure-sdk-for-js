/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  SnapshotsGetOptionalParams,
  SnapshotsGetResponse,
  Snapshot,
  SnapshotsCreateOptionalParams,
  SnapshotsCreateResponse,
} from "../models";

/** Interface representing a Snapshots. */
export interface Snapshots {
  /**
   * Gets the properties of the specified snapshot. NOTE: This operation is intended for use in ARM
   * Template deployments. For all other scenarios involving App Configuration snapshots the data plane
   * API should be used instead.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param configStoreName The name of the configuration store.
   * @param snapshotName The name of the snapshot.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    configStoreName: string,
    snapshotName: string,
    options?: SnapshotsGetOptionalParams,
  ): Promise<SnapshotsGetResponse>;
  /**
   * Creates a snapshot. NOTE: This operation is intended for use in ARM Template deployments. For all
   * other scenarios involving App Configuration snapshots the data plane API should be used instead.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param configStoreName The name of the configuration store.
   * @param snapshotName The name of the snapshot.
   * @param body The parameters for creating a snapshot.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    configStoreName: string,
    snapshotName: string,
    body: Snapshot,
    options?: SnapshotsCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SnapshotsCreateResponse>,
      SnapshotsCreateResponse
    >
  >;
  /**
   * Creates a snapshot. NOTE: This operation is intended for use in ARM Template deployments. For all
   * other scenarios involving App Configuration snapshots the data plane API should be used instead.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param configStoreName The name of the configuration store.
   * @param snapshotName The name of the snapshot.
   * @param body The parameters for creating a snapshot.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    configStoreName: string,
    snapshotName: string,
    body: Snapshot,
    options?: SnapshotsCreateOptionalParams,
  ): Promise<SnapshotsCreateResponse>;
}
