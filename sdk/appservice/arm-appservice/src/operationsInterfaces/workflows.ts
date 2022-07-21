/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  RegenerateActionParameter,
  WorkflowsRegenerateAccessKeyOptionalParams,
  Workflow,
  WorkflowsValidateOptionalParams
} from "../models";

/** Interface representing a Workflows. */
export interface Workflows {
  /**
   * Regenerates the callback URL access key for request triggers.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Site name.
   * @param workflowName The workflow name.
   * @param keyType The access key type.
   * @param options The options parameters.
   */
  regenerateAccessKey(
    resourceGroupName: string,
    name: string,
    workflowName: string,
    keyType: RegenerateActionParameter,
    options?: WorkflowsRegenerateAccessKeyOptionalParams
  ): Promise<void>;
  /**
   * Validates the workflow definition.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Site name.
   * @param workflowName The workflow name.
   * @param validate The workflow.
   * @param options The options parameters.
   */
  validate(
    resourceGroupName: string,
    name: string,
    workflowName: string,
    validate: Workflow,
    options?: WorkflowsValidateOptionalParams
  ): Promise<void>;
}
