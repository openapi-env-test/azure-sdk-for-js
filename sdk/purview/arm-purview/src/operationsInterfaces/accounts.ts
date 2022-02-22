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
  Account,
  AccountsListByResourceGroupOptionalParams,
  AccountsListBySubscriptionOptionalParams,
  AccountsCreateOrUpdateOptionalParams,
  AccountsCreateOrUpdateResponse,
  AccountsDeleteOptionalParams,
  AccountUpdateParameters,
  AccountsUpdateOptionalParams,
  AccountsUpdateResponse,
  AccountsListKeysOptionalParams,
  AccountsListKeysResponse,
  CollectionAdminUpdate,
  AccountsAddRootCollectionAdminOptionalParams,
  CheckNameAvailabilityRequest,
  AccountsCheckNameAvailabilityOptionalParams,
  AccountsCheckNameAvailabilityResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Accounts. */
export interface Accounts {
  /**
   * List accounts in ResourceGroup
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: AccountsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Account>;
  /**
   * List accounts in Subscription
   * @param options The options parameters.
   */
  listBySubscription(
    options?: AccountsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<Account>;
  /**
   * Creates or updates an account
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the account.
   * @param account The account.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    accountName: string,
    account: Account,
    options?: AccountsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AccountsCreateOrUpdateResponse>,
      AccountsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates an account
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the account.
   * @param account The account.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    account: Account,
    options?: AccountsCreateOrUpdateOptionalParams
  ): Promise<AccountsCreateOrUpdateResponse>;
  /**
   * Deletes an account resource
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the account.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes an account resource
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the account.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Updates an account
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the account.
   * @param accountUpdateParameters The account update parameters.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    accountName: string,
    accountUpdateParameters: AccountUpdateParameters,
    options?: AccountsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AccountsUpdateResponse>,
      AccountsUpdateResponse
    >
  >;
  /**
   * Updates an account
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the account.
   * @param accountUpdateParameters The account update parameters.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    accountUpdateParameters: AccountUpdateParameters,
    options?: AccountsUpdateOptionalParams
  ): Promise<AccountsUpdateResponse>;
  /**
   * List the authorization keys associated with this account.
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the account.
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsListKeysOptionalParams
  ): Promise<AccountsListKeysResponse>;
  /**
   * Add the administrator for root collection associated with this account.
   * @param resourceGroupName The resource group name.
   * @param accountName The name of the account.
   * @param collectionAdminUpdate The collection admin update payload.
   * @param options The options parameters.
   */
  addRootCollectionAdmin(
    resourceGroupName: string,
    accountName: string,
    collectionAdminUpdate: CollectionAdminUpdate,
    options?: AccountsAddRootCollectionAdminOptionalParams
  ): Promise<void>;
  /**
   * Checks if account name is available.
   * @param checkNameAvailabilityRequest The check name availability request.
   * @param options The options parameters.
   */
  checkNameAvailability(
    checkNameAvailabilityRequest: CheckNameAvailabilityRequest,
    options?: AccountsCheckNameAvailabilityOptionalParams
  ): Promise<AccountsCheckNameAvailabilityResponse>;
}
