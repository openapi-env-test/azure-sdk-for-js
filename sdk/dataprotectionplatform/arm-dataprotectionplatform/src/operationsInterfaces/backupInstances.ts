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
  BackupInstanceResource,
  BackupInstancesListOptionalParams,
  BackupInstancesGetOptionalParams,
  BackupInstancesGetResponse,
  BackupInstancesCreateOrUpdateOptionalParams,
  BackupInstancesCreateOrUpdateResponse,
  BackupInstancesDeleteOptionalParams,
  TriggerBackupRequest,
  BackupInstancesAdhocBackupOptionalParams,
  BackupInstancesAdhocBackupResponse,
  ValidateForBackupRequest,
  BackupInstancesValidateForBackupOptionalParams,
  BackupInstancesValidateForBackupResponse,
  BackupInstancesGetBackupInstanceOperationResultOptionalParams,
  BackupInstancesGetBackupInstanceOperationResultResponse,
  AzureBackupRehydrationRequest,
  BackupInstancesTriggerRehydrateOptionalParams,
  BackupInstancesTriggerRehydrateResponse,
  AzureBackupRestoreRequestUnion,
  BackupInstancesTriggerRestoreOptionalParams,
  BackupInstancesTriggerRestoreResponse,
  BackupInstancesResumeBackupsOptionalParams,
  BackupInstancesResumeProtectionOptionalParams,
  BackupInstancesStopProtectionOptionalParams,
  BackupInstancesSuspendBackupsOptionalParams,
  SyncBackupInstanceRequest,
  BackupInstancesSyncBackupInstanceOptionalParams,
  ValidateRestoreRequestObject,
  BackupInstancesValidateForRestoreOptionalParams,
  BackupInstancesValidateForRestoreResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a BackupInstances. */
export interface BackupInstances {
  /**
   * Gets a backup instances belonging to a backup vault
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    vaultName: string,
    options?: BackupInstancesListOptionalParams
  ): PagedAsyncIterableIterator<BackupInstanceResource>;
  /**
   * Gets a backup instance with name in a backup vault
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName The name of the backup instance
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    options?: BackupInstancesGetOptionalParams
  ): Promise<BackupInstancesGetResponse>;
  /**
   * Create or update a backup instance in a backup vault
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName The name of the backup instance
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    parameters: BackupInstanceResource,
    options?: BackupInstancesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<BackupInstancesCreateOrUpdateResponse>,
      BackupInstancesCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a backup instance in a backup vault
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName The name of the backup instance
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    parameters: BackupInstanceResource,
    options?: BackupInstancesCreateOrUpdateOptionalParams
  ): Promise<BackupInstancesCreateOrUpdateResponse>;
  /**
   * Delete a backup instance in a backup vault
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName The name of the backup instance
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    options?: BackupInstancesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete a backup instance in a backup vault
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName The name of the backup instance
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    options?: BackupInstancesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Trigger adhoc backup
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName The name of the backup instance
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  beginAdhocBackup(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    parameters: TriggerBackupRequest,
    options?: BackupInstancesAdhocBackupOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<BackupInstancesAdhocBackupResponse>,
      BackupInstancesAdhocBackupResponse
    >
  >;
  /**
   * Trigger adhoc backup
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName The name of the backup instance
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  beginAdhocBackupAndWait(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    parameters: TriggerBackupRequest,
    options?: BackupInstancesAdhocBackupOptionalParams
  ): Promise<BackupInstancesAdhocBackupResponse>;
  /**
   * Validate whether adhoc backup will be successful or not
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  beginValidateForBackup(
    resourceGroupName: string,
    vaultName: string,
    parameters: ValidateForBackupRequest,
    options?: BackupInstancesValidateForBackupOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<BackupInstancesValidateForBackupResponse>,
      BackupInstancesValidateForBackupResponse
    >
  >;
  /**
   * Validate whether adhoc backup will be successful or not
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  beginValidateForBackupAndWait(
    resourceGroupName: string,
    vaultName: string,
    parameters: ValidateForBackupRequest,
    options?: BackupInstancesValidateForBackupOptionalParams
  ): Promise<BackupInstancesValidateForBackupResponse>;
  /**
   * Get result of backup instance creation operation
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName
   * @param operationId
   * @param options The options parameters.
   */
  getBackupInstanceOperationResult(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    operationId: string,
    options?: BackupInstancesGetBackupInstanceOperationResultOptionalParams
  ): Promise<BackupInstancesGetBackupInstanceOperationResultResponse>;
  /**
   * rehydrate recovery point for restore for a BackupInstance
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  beginTriggerRehydrate(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    parameters: AzureBackupRehydrationRequest,
    options?: BackupInstancesTriggerRehydrateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<BackupInstancesTriggerRehydrateResponse>,
      BackupInstancesTriggerRehydrateResponse
    >
  >;
  /**
   * rehydrate recovery point for restore for a BackupInstance
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  beginTriggerRehydrateAndWait(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    parameters: AzureBackupRehydrationRequest,
    options?: BackupInstancesTriggerRehydrateOptionalParams
  ): Promise<BackupInstancesTriggerRehydrateResponse>;
  /**
   * Triggers restore for a BackupInstance
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName The name of the backup instance
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  beginTriggerRestore(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    parameters: AzureBackupRestoreRequestUnion,
    options?: BackupInstancesTriggerRestoreOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<BackupInstancesTriggerRestoreResponse>,
      BackupInstancesTriggerRestoreResponse
    >
  >;
  /**
   * Triggers restore for a BackupInstance
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName The name of the backup instance
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  beginTriggerRestoreAndWait(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    parameters: AzureBackupRestoreRequestUnion,
    options?: BackupInstancesTriggerRestoreOptionalParams
  ): Promise<BackupInstancesTriggerRestoreResponse>;
  /**
   * This operation will resume backups for backup instance
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName
   * @param options The options parameters.
   */
  beginResumeBackups(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    options?: BackupInstancesResumeBackupsOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * This operation will resume backups for backup instance
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName
   * @param options The options parameters.
   */
  beginResumeBackupsAndWait(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    options?: BackupInstancesResumeBackupsOptionalParams
  ): Promise<void>;
  /**
   * This operation will resume protection for a stopped backup instance
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName
   * @param options The options parameters.
   */
  beginResumeProtection(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    options?: BackupInstancesResumeProtectionOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * This operation will resume protection for a stopped backup instance
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName
   * @param options The options parameters.
   */
  beginResumeProtectionAndWait(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    options?: BackupInstancesResumeProtectionOptionalParams
  ): Promise<void>;
  /**
   * This operation will stop protection of a backup instance and data will be held forever
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName
   * @param options The options parameters.
   */
  beginStopProtection(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    options?: BackupInstancesStopProtectionOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * This operation will stop protection of a backup instance and data will be held forever
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName
   * @param options The options parameters.
   */
  beginStopProtectionAndWait(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    options?: BackupInstancesStopProtectionOptionalParams
  ): Promise<void>;
  /**
   * This operation will stop backups for backup instance
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName
   * @param options The options parameters.
   */
  beginSuspendBackups(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    options?: BackupInstancesSuspendBackupsOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * This operation will stop backups for backup instance
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName
   * @param options The options parameters.
   */
  beginSuspendBackupsAndWait(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    options?: BackupInstancesSuspendBackupsOptionalParams
  ): Promise<void>;
  /**
   * Sync backup instance again in case of failure
   * This action will retry last failed operation and will bring backup instance to valid state
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  beginSyncBackupInstance(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    parameters: SyncBackupInstanceRequest,
    options?: BackupInstancesSyncBackupInstanceOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Sync backup instance again in case of failure
   * This action will retry last failed operation and will bring backup instance to valid state
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  beginSyncBackupInstanceAndWait(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    parameters: SyncBackupInstanceRequest,
    options?: BackupInstancesSyncBackupInstanceOptionalParams
  ): Promise<void>;
  /**
   * Validates if Restore can be triggered for a DataSource
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName The name of the backup instance
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  beginValidateForRestore(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    parameters: ValidateRestoreRequestObject,
    options?: BackupInstancesValidateForRestoreOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<BackupInstancesValidateForRestoreResponse>,
      BackupInstancesValidateForRestoreResponse
    >
  >;
  /**
   * Validates if Restore can be triggered for a DataSource
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName The name of the backup instance
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  beginValidateForRestoreAndWait(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    parameters: ValidateRestoreRequestObject,
    options?: BackupInstancesValidateForRestoreOptionalParams
  ): Promise<BackupInstancesValidateForRestoreResponse>;
}
