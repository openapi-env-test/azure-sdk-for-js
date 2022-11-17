/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Variable,
  VariablesListOptionalParams,
  VariablesListForManagementGroupOptionalParams,
  VariablesDeleteOptionalParams,
  VariablesCreateOrUpdateOptionalParams,
  VariablesCreateOrUpdateResponse,
  VariablesGetOptionalParams,
  VariablesGetResponse,
  VariablesDeleteAtManagementGroupOptionalParams,
  VariablesCreateOrUpdateAtManagementGroupOptionalParams,
  VariablesCreateOrUpdateAtManagementGroupResponse,
  VariablesGetAtManagementGroupOptionalParams,
  VariablesGetAtManagementGroupResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Variables. */
export interface Variables {
  /**
   * This operation retrieves the list of all variables associated with the given subscription.
   * @param options The options parameters.
   */
  list(
    options?: VariablesListOptionalParams
  ): PagedAsyncIterableIterator<Variable>;
  /**
   * This operation retrieves the list of all variables applicable to the management group.
   * @param managementGroupId The ID of the management group.
   * @param options The options parameters.
   */
  listForManagementGroup(
    managementGroupId: string,
    options?: VariablesListForManagementGroupOptionalParams
  ): PagedAsyncIterableIterator<Variable>;
  /**
   * This operation deletes a variable, given its name and the subscription it was created in. The scope
   * of a variable is the part of its ID preceding
   * '/providers/Microsoft.Authorization/variables/{variableName}'.
   * @param variableName The name of the variable to operate on.
   * @param options The options parameters.
   */
  delete(
    variableName: string,
    options?: VariablesDeleteOptionalParams
  ): Promise<void>;
  /**
   *  This operation creates or updates a variable with the given subscription and name. Policy variables
   * can only be used by a policy definition at the scope they are created or below.
   * @param variableName The name of the variable to operate on.
   * @param parameters Parameters for the variable.
   * @param options The options parameters.
   */
  createOrUpdate(
    variableName: string,
    parameters: Variable,
    options?: VariablesCreateOrUpdateOptionalParams
  ): Promise<VariablesCreateOrUpdateResponse>;
  /**
   * This operation retrieves a single variable, given its name and the subscription it was created at.
   * @param variableName The name of the variable to operate on.
   * @param options The options parameters.
   */
  get(
    variableName: string,
    options?: VariablesGetOptionalParams
  ): Promise<VariablesGetResponse>;
  /**
   * This operation deletes a variable, given its name and the management group it was created in. The
   * scope of a variable is the part of its ID preceding
   * '/providers/Microsoft.Authorization/variables/{variableName}'.
   * @param managementGroupId The ID of the management group.
   * @param variableName The name of the variable to operate on.
   * @param options The options parameters.
   */
  deleteAtManagementGroup(
    managementGroupId: string,
    variableName: string,
    options?: VariablesDeleteAtManagementGroupOptionalParams
  ): Promise<void>;
  /**
   *  This operation creates or updates a variable with the given  management group and name. Policy
   * variables can only be used by a policy definition at the scope they are created or below.
   * @param managementGroupId The ID of the management group.
   * @param variableName The name of the variable to operate on.
   * @param parameters Parameters for the variable.
   * @param options The options parameters.
   */
  createOrUpdateAtManagementGroup(
    managementGroupId: string,
    variableName: string,
    parameters: Variable,
    options?: VariablesCreateOrUpdateAtManagementGroupOptionalParams
  ): Promise<VariablesCreateOrUpdateAtManagementGroupResponse>;
  /**
   * This operation retrieves a single variable, given its name and the  management group it was created
   * at.
   * @param managementGroupId The ID of the management group.
   * @param variableName The name of the variable to operate on.
   * @param options The options parameters.
   */
  getAtManagementGroup(
    managementGroupId: string,
    variableName: string,
    options?: VariablesGetAtManagementGroupOptionalParams
  ): Promise<VariablesGetAtManagementGroupResponse>;
}
