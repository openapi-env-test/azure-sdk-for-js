/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  KeysListByAutomationAccountOptionalParams,
  KeysListByAutomationAccountResponse
} from "../models";

/** Interface representing a Keys. */
export interface Keys {
  /**
   * Retrieve the automation keys for an account.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: KeysListByAutomationAccountOptionalParams
  ): Promise<KeysListByAutomationAccountResponse>;
}
