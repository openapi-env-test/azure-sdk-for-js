/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/sharedKeysOperationsMappers";
import * as Parameters from "../models/parameters";
import { OperationalInsightsManagementClientContext } from "../operationalInsightsManagementClientContext";

/** Class representing a SharedKeysOperations. */
export class SharedKeysOperations {
  private readonly client: OperationalInsightsManagementClientContext;

  /**
   * Create a SharedKeysOperations.
   * @param {OperationalInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: OperationalInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the shared keys for a workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.SharedKeysGetSharedKeysResponse>
   */
  getSharedKeys(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.SharedKeysGetSharedKeysResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param callback The callback
   */
  getSharedKeys(resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.SharedKeys>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  getSharedKeys(resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SharedKeys>): void;
  getSharedKeys(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SharedKeys>, callback?: msRest.ServiceCallback<Models.SharedKeys>): Promise<Models.SharedKeysGetSharedKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        options
      },
      getSharedKeysOperationSpec,
      callback) as Promise<Models.SharedKeysGetSharedKeysResponse>;
  }

  /**
   * Regenerates the shared keys for a Log Analytics Workspace. These keys are used to connect
   * Microsoft Operational Insights agents to the workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.SharedKeysRegenerateResponse>
   */
  regenerate(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.SharedKeysRegenerateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param callback The callback
   */
  regenerate(resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.SharedKeys>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  regenerate(resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SharedKeys>): void;
  regenerate(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SharedKeys>, callback?: msRest.ServiceCallback<Models.SharedKeys>): Promise<Models.SharedKeysRegenerateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        options
      },
      regenerateOperationSpec,
      callback) as Promise<Models.SharedKeysRegenerateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getSharedKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/sharedKeys",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SharedKeys
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const regenerateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/regenerateSharedKey",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SharedKeys
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
