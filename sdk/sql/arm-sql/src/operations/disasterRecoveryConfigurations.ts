/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/disasterRecoveryConfigurationsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a DisasterRecoveryConfigurations. */
export class DisasterRecoveryConfigurations {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a DisasterRecoveryConfigurations.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists a server's disaster recovery configuration.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param [options] The optional parameters
   * @returns Promise<Models.DisasterRecoveryConfigurationsListResponse>
   */
  list(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<Models.DisasterRecoveryConfigurationsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param callback The callback
   */
  list(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<Models.DisasterRecoveryConfigurationListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, serverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DisasterRecoveryConfigurationListResult>): void;
  list(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DisasterRecoveryConfigurationListResult>, callback?: msRest.ServiceCallback<Models.DisasterRecoveryConfigurationListResult>): Promise<Models.DisasterRecoveryConfigurationsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.DisasterRecoveryConfigurationsListResponse>;
  }

  /**
   * Deletes a disaster recovery configuration.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param disasterRecoveryConfigurationName The name of the disaster recovery configuration to be
   * deleted.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serverName: string, disasterRecoveryConfigurationName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,serverName,disasterRecoveryConfigurationName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates or updates a disaster recovery configuration.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param disasterRecoveryConfigurationName The name of the disaster recovery configuration to be
   * created/updated.
   * @param [options] The optional parameters
   * @returns Promise<Models.DisasterRecoveryConfigurationsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serverName: string, disasterRecoveryConfigurationName: string, options?: msRest.RequestOptionsBase): Promise<Models.DisasterRecoveryConfigurationsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,serverName,disasterRecoveryConfigurationName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.DisasterRecoveryConfigurationsCreateOrUpdateResponse>;
  }

  /**
   * Gets a disaster recovery configuration.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param disasterRecoveryConfigurationName The name of the disaster recovery configuration.
   * @param [options] The optional parameters
   * @returns Promise<Models.DisasterRecoveryConfigurationsGetResponse>
   */
  get(resourceGroupName: string, serverName: string, disasterRecoveryConfigurationName: string, options?: msRest.RequestOptionsBase): Promise<Models.DisasterRecoveryConfigurationsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param disasterRecoveryConfigurationName The name of the disaster recovery configuration.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, disasterRecoveryConfigurationName: string, callback: msRest.ServiceCallback<Models.DisasterRecoveryConfiguration>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param disasterRecoveryConfigurationName The name of the disaster recovery configuration.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, disasterRecoveryConfigurationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DisasterRecoveryConfiguration>): void;
  get(resourceGroupName: string, serverName: string, disasterRecoveryConfigurationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DisasterRecoveryConfiguration>, callback?: msRest.ServiceCallback<Models.DisasterRecoveryConfiguration>): Promise<Models.DisasterRecoveryConfigurationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        disasterRecoveryConfigurationName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DisasterRecoveryConfigurationsGetResponse>;
  }

  /**
   * Fails over from the current primary server to this server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param disasterRecoveryConfigurationName The name of the disaster recovery configuration to
   * failover.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  failover(resourceGroupName: string, serverName: string, disasterRecoveryConfigurationName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginFailover(resourceGroupName,serverName,disasterRecoveryConfigurationName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Fails over from the current primary server to this server. This operation might result in data
   * loss.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param disasterRecoveryConfigurationName The name of the disaster recovery configuration to
   * failover forcefully.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  failoverAllowDataLoss(resourceGroupName: string, serverName: string, disasterRecoveryConfigurationName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginFailoverAllowDataLoss(resourceGroupName,serverName,disasterRecoveryConfigurationName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Deletes a disaster recovery configuration.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param disasterRecoveryConfigurationName The name of the disaster recovery configuration to be
   * deleted.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, serverName: string, disasterRecoveryConfigurationName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        disasterRecoveryConfigurationName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates a disaster recovery configuration.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param disasterRecoveryConfigurationName The name of the disaster recovery configuration to be
   * created/updated.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, serverName: string, disasterRecoveryConfigurationName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        disasterRecoveryConfigurationName,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Fails over from the current primary server to this server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param disasterRecoveryConfigurationName The name of the disaster recovery configuration to
   * failover.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginFailover(resourceGroupName: string, serverName: string, disasterRecoveryConfigurationName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        disasterRecoveryConfigurationName,
        options
      },
      beginFailoverOperationSpec,
      options);
  }

  /**
   * Fails over from the current primary server to this server. This operation might result in data
   * loss.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param disasterRecoveryConfigurationName The name of the disaster recovery configuration to
   * failover forcefully.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginFailoverAllowDataLoss(resourceGroupName: string, serverName: string, disasterRecoveryConfigurationName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        disasterRecoveryConfigurationName,
        options
      },
      beginFailoverAllowDataLossOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/disasterRecoveryConfiguration",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DisasterRecoveryConfigurationListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/disasterRecoveryConfiguration/{disasterRecoveryConfigurationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.disasterRecoveryConfigurationName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DisasterRecoveryConfiguration
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/disasterRecoveryConfiguration/{disasterRecoveryConfigurationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.disasterRecoveryConfigurationName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/disasterRecoveryConfiguration/{disasterRecoveryConfigurationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.disasterRecoveryConfigurationName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DisasterRecoveryConfiguration
    },
    201: {
      bodyMapper: Mappers.DisasterRecoveryConfiguration
    },
    202: {
      bodyMapper: Mappers.DisasterRecoveryConfiguration
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginFailoverOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/disasterRecoveryConfiguration/{disasterRecoveryConfigurationName}/failover",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.disasterRecoveryConfigurationName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginFailoverAllowDataLossOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/disasterRecoveryConfiguration/{disasterRecoveryConfigurationName}/forceFailoverAllowDataLoss",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.disasterRecoveryConfigurationName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
