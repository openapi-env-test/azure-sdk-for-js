/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  TroubleshootersCreateOptionalParams,
  TroubleshootersCreateResponse,
  TroubleshootersGetOptionalParams,
  TroubleshootersGetResponse,
  TroubleshootersContinueOptionalParams,
  TroubleshootersContinueResponse,
  TroubleshootersEndOptionalParams,
  TroubleshootersEndResponse,
  TroubleshootersRestartOptionalParams,
  TroubleshootersRestartResponse
} from "../models";

/** Interface representing a Troubleshooters. */
export interface Troubleshooters {
  /**
   * Creates the specific troubleshooter action under a resource or subscription using the ‘solutionId’
   * and  ‘properties.parameters’ as the trigger. <br/> Troubleshooters are step-by-step interactive
   * guidance that scope the problem by collecting additional inputs from you in each stage while
   * troubleshooting an Azure issue. You will be guided down decision tree style workflow and the best
   * possible solution will be presented at the end of the workflow. <br/> Create API creates the
   * Troubleshooter API using ‘parameters’ and ‘solutionId’ <br/> After creating the Troubleshooter
   * instance, the following APIs can be used:<br/> CONTINUE API: to move to the next step in the flow
   * <br/>GET API: to identify the next step after executing the CONTINUE API.   <br/><br/> <b>Note:</b>
   * ‘requiredParameters’ from solutions response must be passed via ‘properties. parameters’ in the
   * request body of Troubleshooters API.
   * @param scope This is an extension resource provider and only resource level extension is supported
   *              at the moment.
   * @param troubleshooterName Troubleshooter resource Name.
   * @param options The options parameters.
   */
  create(
    scope: string,
    troubleshooterName: string,
    options?: TroubleshootersCreateOptionalParams
  ): Promise<TroubleshootersCreateResponse>;
  /**
   * Gets troubleshooter instance result which includes the step status/result of the troubleshooter
   * resource name that is being executed.<br/> Get API is used to retrieve the result of a
   * Troubleshooter instance, which includes the status and result of each step in the Troubleshooter
   * workflow. This API requires the Troubleshooter resource name that was created using the Create API.
   * @param scope This is an extension resource provider and only resource level extension is supported
   *              at the moment.
   * @param troubleshooterName Troubleshooter resource Name.
   * @param options The options parameters.
   */
  get(
    scope: string,
    troubleshooterName: string,
    options?: TroubleshootersGetOptionalParams
  ): Promise<TroubleshootersGetResponse>;
  /**
   * Uses ‘stepId’ and ‘responses’ as the trigger to continue the troubleshooting steps for the
   * respective troubleshooter resource name. <br/>Continue API is used to provide inputs that are
   * required for the specific troubleshooter to progress into the next step in the process. This API is
   * used after the Troubleshooter has been created using the Create API.
   * @param scope This is an extension resource provider and only resource level extension is supported
   *              at the moment.
   * @param troubleshooterName Troubleshooter resource Name.
   * @param options The options parameters.
   */
  continue(
    scope: string,
    troubleshooterName: string,
    options?: TroubleshootersContinueOptionalParams
  ): Promise<TroubleshootersContinueResponse>;
  /**
   * Ends the troubleshooter action
   * @param scope This is an extension resource provider and only resource level extension is supported
   *              at the moment.
   * @param troubleshooterName Troubleshooter resource Name.
   * @param options The options parameters.
   */
  end(
    scope: string,
    troubleshooterName: string,
    options?: TroubleshootersEndOptionalParams
  ): Promise<TroubleshootersEndResponse>;
  /**
   * Restarts the troubleshooter API using applicable troubleshooter resource name as the input.<br/> It
   * returns new resource name which should be used in subsequent request. The old resource name is
   * obsolete after this API is invoked.
   * @param scope This is an extension resource provider and only resource level extension is supported
   *              at the moment.
   * @param troubleshooterName Troubleshooter resource Name.
   * @param options The options parameters.
   */
  restart(
    scope: string,
    troubleshooterName: string,
    options?: TroubleshootersRestartOptionalParams
  ): Promise<TroubleshootersRestartResponse>;
}
