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
import * as Mappers from "../models/nodeReportsMappers";
import * as Parameters from "../models/parameters";
import { AutomationClientContext } from "../automationClientContext";

/** Class representing a NodeReports. */
export class NodeReports {
  private readonly client: AutomationClientContext;

  /**
   * Create a NodeReports.
   * @param {AutomationClientContext} client Reference to the service client.
   */
  constructor(client: AutomationClientContext) {
    this.client = client;
  }

  /**
   * Retrieve the Dsc node report list by node id.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param nodeId The parameters supplied to the list operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.NodeReportsListByNodeResponse>
   */
  listByNode(resourceGroupName: string, automationAccountName: string, nodeId: string, options?: Models.NodeReportsListByNodeOptionalParams): Promise<Models.NodeReportsListByNodeResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param nodeId The parameters supplied to the list operation.
   * @param callback The callback
   */
  listByNode(resourceGroupName: string, automationAccountName: string, nodeId: string, callback: msRest.ServiceCallback<Models.DscNodeReportListResult>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param nodeId The parameters supplied to the list operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByNode(resourceGroupName: string, automationAccountName: string, nodeId: string, options: Models.NodeReportsListByNodeOptionalParams, callback: msRest.ServiceCallback<Models.DscNodeReportListResult>): void;
  listByNode(resourceGroupName: string, automationAccountName: string, nodeId: string, options?: Models.NodeReportsListByNodeOptionalParams | msRest.ServiceCallback<Models.DscNodeReportListResult>, callback?: msRest.ServiceCallback<Models.DscNodeReportListResult>): Promise<Models.NodeReportsListByNodeResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        nodeId,
        options
      },
      listByNodeOperationSpec,
      callback) as Promise<Models.NodeReportsListByNodeResponse>;
  }

  /**
   * Retrieve the Dsc node report data by node id and report id.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param nodeId The Dsc node id.
   * @param reportId The report id.
   * @param [options] The optional parameters
   * @returns Promise<Models.NodeReportsGetResponse>
   */
  get(resourceGroupName: string, automationAccountName: string, nodeId: string, reportId: string, options?: msRest.RequestOptionsBase): Promise<Models.NodeReportsGetResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param nodeId The Dsc node id.
   * @param reportId The report id.
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, nodeId: string, reportId: string, callback: msRest.ServiceCallback<Models.DscNodeReport>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param nodeId The Dsc node id.
   * @param reportId The report id.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, nodeId: string, reportId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DscNodeReport>): void;
  get(resourceGroupName: string, automationAccountName: string, nodeId: string, reportId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DscNodeReport>, callback?: msRest.ServiceCallback<Models.DscNodeReport>): Promise<Models.NodeReportsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        nodeId,
        reportId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.NodeReportsGetResponse>;
  }

  /**
   * Retrieve the Dsc node reports by node id and report id.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param nodeId The Dsc node id.
   * @param reportId The report id.
   * @param [options] The optional parameters
   * @returns Promise<Models.NodeReportsGetContentResponse>
   */
  getContent(resourceGroupName: string, automationAccountName: string, nodeId: string, reportId: string, options?: msRest.RequestOptionsBase): Promise<Models.NodeReportsGetContentResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param nodeId The Dsc node id.
   * @param reportId The report id.
   * @param callback The callback
   */
  getContent(resourceGroupName: string, automationAccountName: string, nodeId: string, reportId: string, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param nodeId The Dsc node id.
   * @param reportId The report id.
   * @param options The optional parameters
   * @param callback The callback
   */
  getContent(resourceGroupName: string, automationAccountName: string, nodeId: string, reportId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  getContent(resourceGroupName: string, automationAccountName: string, nodeId: string, reportId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.NodeReportsGetContentResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        nodeId,
        reportId,
        options
      },
      getContentOperationSpec,
      callback) as Promise<Models.NodeReportsGetContentResponse>;
  }

  /**
   * Retrieve the Dsc node report list by node id.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.NodeReportsListByNodeNextResponse>
   */
  listByNodeNext(nextPageLink: string, options?: Models.NodeReportsListByNodeNextOptionalParams): Promise<Models.NodeReportsListByNodeNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByNodeNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.DscNodeReportListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByNodeNext(nextPageLink: string, options: Models.NodeReportsListByNodeNextOptionalParams, callback: msRest.ServiceCallback<Models.DscNodeReportListResult>): void;
  listByNodeNext(nextPageLink: string, options?: Models.NodeReportsListByNodeNextOptionalParams | msRest.ServiceCallback<Models.DscNodeReportListResult>, callback?: msRest.ServiceCallback<Models.DscNodeReportListResult>): Promise<Models.NodeReportsListByNodeNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByNodeNextOperationSpec,
      callback) as Promise<Models.NodeReportsListByNodeNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByNodeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodes/{nodeId}/reports",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.nodeId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DscNodeReportListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodes/{nodeId}/reports/{reportId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.nodeId,
    Parameters.reportId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DscNodeReport
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getContentOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/nodes/{nodeId}/reports/{reportId}/content",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.nodeId,
    Parameters.reportId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByNodeNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DscNodeReportListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
