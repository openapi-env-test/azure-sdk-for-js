/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/databaseThreatDetectionPoliciesMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a DatabaseThreatDetectionPolicies. */
export class DatabaseThreatDetectionPolicies {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a DatabaseThreatDetectionPolicies.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a database's threat detection policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database for which database Threat Detection policy is
   * defined.
   * @param [options] The optional parameters
   * @returns Promise<Models.DatabaseThreatDetectionPoliciesGetResponse>
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<Models.DatabaseThreatDetectionPoliciesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database for which database Threat Detection policy is
   * defined.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, callback: msRest.ServiceCallback<Models.DatabaseSecurityAlertPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database for which database Threat Detection policy is
   * defined.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DatabaseSecurityAlertPolicy>): void;
  get(resourceGroupName: string, serverName: string, databaseName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DatabaseSecurityAlertPolicy>, callback?: msRest.ServiceCallback<Models.DatabaseSecurityAlertPolicy>): Promise<Models.DatabaseThreatDetectionPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DatabaseThreatDetectionPoliciesGetResponse>;
  }

  /**
   * Creates or updates a database's threat detection policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database for which database Threat Detection policy is
   * defined.
   * @param parameters The database Threat Detection policy.
   * @param [options] The optional parameters
   * @returns Promise<Models.DatabaseThreatDetectionPoliciesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: Models.DatabaseSecurityAlertPolicy, options?: msRest.RequestOptionsBase): Promise<Models.DatabaseThreatDetectionPoliciesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database for which database Threat Detection policy is
   * defined.
   * @param parameters The database Threat Detection policy.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: Models.DatabaseSecurityAlertPolicy, callback: msRest.ServiceCallback<Models.DatabaseSecurityAlertPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database for which database Threat Detection policy is
   * defined.
   * @param parameters The database Threat Detection policy.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: Models.DatabaseSecurityAlertPolicy, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DatabaseSecurityAlertPolicy>): void;
  createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, parameters: Models.DatabaseSecurityAlertPolicy, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DatabaseSecurityAlertPolicy>, callback?: msRest.ServiceCallback<Models.DatabaseSecurityAlertPolicy>): Promise<Models.DatabaseThreatDetectionPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.DatabaseThreatDetectionPoliciesCreateOrUpdateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/securityAlertPolicies/{securityAlertPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.securityAlertPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseSecurityAlertPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/securityAlertPolicies/{securityAlertPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.securityAlertPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.DatabaseSecurityAlertPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseSecurityAlertPolicy
    },
    201: {
      bodyMapper: Mappers.DatabaseSecurityAlertPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
