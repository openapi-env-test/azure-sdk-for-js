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
import * as Mappers from "../models/workloadClassifiersMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a WorkloadClassifiers. */
export class WorkloadClassifiers {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a WorkloadClassifiers.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a workload classifier
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group from which to receive the classifier
   * from.
   * @param workloadClassifierName The name of the workload classifier.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkloadClassifiersGetResponse>
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, workloadClassifierName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkloadClassifiersGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group from which to receive the classifier
   * from.
   * @param workloadClassifierName The name of the workload classifier.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, workloadClassifierName: string, callback: msRest.ServiceCallback<Models.WorkloadClassifier>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group from which to receive the classifier
   * from.
   * @param workloadClassifierName The name of the workload classifier.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, workloadClassifierName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkloadClassifier>): void;
  get(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, workloadClassifierName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkloadClassifier>, callback?: msRest.ServiceCallback<Models.WorkloadClassifier>): Promise<Models.WorkloadClassifiersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        workloadGroupName,
        workloadClassifierName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.WorkloadClassifiersGetResponse>;
  }

  /**
   * Creates or updates a workload classifier.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group from which to receive the classifier
   * from.
   * @param workloadClassifierName The name of the workload classifier to create/update.
   * @param parameters The properties of the workload classifier.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkloadClassifiersCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, workloadClassifierName: string, parameters: Models.WorkloadClassifier, options?: msRest.RequestOptionsBase): Promise<Models.WorkloadClassifiersCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,serverName,databaseName,workloadGroupName,workloadClassifierName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.WorkloadClassifiersCreateOrUpdateResponse>;
  }

  /**
   * Deletes a workload classifier.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group from which to receive the classifier
   * from.
   * @param workloadClassifierName The name of the workload classifier to delete.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, workloadClassifierName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,serverName,databaseName,workloadGroupName,workloadClassifierName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the list of workload classifiers for a workload group
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group from which to receive the classifiers
   * from.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkloadClassifiersListByWorkloadGroupResponse>
   */
  listByWorkloadGroup(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkloadClassifiersListByWorkloadGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group from which to receive the classifiers
   * from.
   * @param callback The callback
   */
  listByWorkloadGroup(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, callback: msRest.ServiceCallback<Models.WorkloadClassifierListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group from which to receive the classifiers
   * from.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkloadGroup(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkloadClassifierListResult>): void;
  listByWorkloadGroup(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkloadClassifierListResult>, callback?: msRest.ServiceCallback<Models.WorkloadClassifierListResult>): Promise<Models.WorkloadClassifiersListByWorkloadGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        workloadGroupName,
        options
      },
      listByWorkloadGroupOperationSpec,
      callback) as Promise<Models.WorkloadClassifiersListByWorkloadGroupResponse>;
  }

  /**
   * Creates or updates a workload classifier.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group from which to receive the classifier
   * from.
   * @param workloadClassifierName The name of the workload classifier to create/update.
   * @param parameters The properties of the workload classifier.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, workloadClassifierName: string, parameters: Models.WorkloadClassifier, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        workloadGroupName,
        workloadClassifierName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes a workload classifier.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group from which to receive the classifier
   * from.
   * @param workloadClassifierName The name of the workload classifier to delete.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, workloadClassifierName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        workloadGroupName,
        workloadClassifierName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Gets the list of workload classifiers for a workload group
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkloadClassifiersListByWorkloadGroupNextResponse>
   */
  listByWorkloadGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkloadClassifiersListByWorkloadGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByWorkloadGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.WorkloadClassifierListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkloadGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkloadClassifierListResult>): void;
  listByWorkloadGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkloadClassifierListResult>, callback?: msRest.ServiceCallback<Models.WorkloadClassifierListResult>): Promise<Models.WorkloadClassifiersListByWorkloadGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByWorkloadGroupNextOperationSpec,
      callback) as Promise<Models.WorkloadClassifiersListByWorkloadGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/workloadGroups/{workloadGroupName}/workloadClassifiers/{workloadClassifierName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.workloadGroupName,
    Parameters.workloadClassifierName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadClassifier
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByWorkloadGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/workloadGroups/{workloadGroupName}/workloadClassifiers",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.workloadGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadClassifierListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/workloadGroups/{workloadGroupName}/workloadClassifiers/{workloadClassifierName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.workloadGroupName,
    Parameters.workloadClassifierName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.WorkloadClassifier,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadClassifier
    },
    201: {
      bodyMapper: Mappers.WorkloadClassifier
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/workloadGroups/{workloadGroupName}/workloadClassifiers/{workloadClassifierName}",
  urlParameters: [
    Parameters.resourceGroupName0,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.workloadGroupName,
    Parameters.workloadClassifierName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion7
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

const listByWorkloadGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadClassifierListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
