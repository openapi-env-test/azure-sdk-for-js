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
import * as Mappers from "../models/alertRuleTemplatesMappers";
import * as Parameters from "../models/parameters";
import { SecurityInsightsContext } from "../securityInsightsContext";

/** Class representing a AlertRuleTemplates. */
export class AlertRuleTemplates {
  private readonly client: SecurityInsightsContext;

  /**
   * Create a AlertRuleTemplates.
   * @param {SecurityInsightsContext} client Reference to the service client.
   */
  constructor(client: SecurityInsightsContext) {
    this.client = client;
  }

  /**
   * Gets all alert rule templates.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertRuleTemplatesListResponse>
   */
  list(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertRuleTemplatesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param callback The callback
   */
  list(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, callback: msRest.ServiceCallback<Models.AlertRuleTemplatesList>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertRuleTemplatesList>): void;
  list(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertRuleTemplatesList>, callback?: msRest.ServiceCallback<Models.AlertRuleTemplatesList>): Promise<Models.AlertRuleTemplatesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        operationalInsightsResourceProvider,
        workspaceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AlertRuleTemplatesListResponse>;
  }

  /**
   * Gets the alert rule template.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param alertRuleTemplateId Alert rule template ID
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertRuleTemplatesGetResponse>
   */
  get(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, alertRuleTemplateId: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertRuleTemplatesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param alertRuleTemplateId Alert rule template ID
   * @param callback The callback
   */
  get(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, alertRuleTemplateId: string, callback: msRest.ServiceCallback<Models.AlertRuleTemplateUnion>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param alertRuleTemplateId Alert rule template ID
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, alertRuleTemplateId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertRuleTemplateUnion>): void;
  get(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, alertRuleTemplateId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertRuleTemplateUnion>, callback?: msRest.ServiceCallback<Models.AlertRuleTemplateUnion>): Promise<Models.AlertRuleTemplatesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        operationalInsightsResourceProvider,
        workspaceName,
        alertRuleTemplateId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AlertRuleTemplatesGetResponse>;
  }

  /**
   * Gets all alert rule templates.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AlertRuleTemplatesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AlertRuleTemplatesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AlertRuleTemplatesList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AlertRuleTemplatesList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AlertRuleTemplatesList>, callback?: msRest.ServiceCallback<Models.AlertRuleTemplatesList>): Promise<Models.AlertRuleTemplatesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.AlertRuleTemplatesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{operationalInsightsResourceProvider}/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/alertRuleTemplates",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.operationalInsightsResourceProvider,
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
      bodyMapper: Mappers.AlertRuleTemplatesList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{operationalInsightsResourceProvider}/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/alertRuleTemplates/{alertRuleTemplateId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.operationalInsightsResourceProvider,
    Parameters.workspaceName,
    Parameters.alertRuleTemplateId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AlertRuleTemplate
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AlertRuleTemplatesList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
