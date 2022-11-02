/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  AccessConnectorssGetOptionalParams,
  AccessConnectorssGetResponse
} from "../models";

/** Interface representing a AccessConnectorss. */
export interface AccessConnectorss {
  /**
   * Gets an azure databricks accessConnector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectorName The name of the azure databricks accessConnector.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    connectorName: string,
    options?: AccessConnectorssGetOptionalParams
  ): Promise<AccessConnectorssGetResponse>;
}
