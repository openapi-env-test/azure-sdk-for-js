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
import * as Mappers from "../models/sourceControlOperationsMappers";
import * as Parameters from "../models/parameters";
import { AutomationClientContext } from "../automationClientContext";

/** Class representing a SourceControlOperations. */
export class SourceControlOperations {
  private readonly client: AutomationClientContext;

  /**
   * Create a SourceControlOperations.
   * @param {AutomationClientContext} client Reference to the service client.
   */
  constructor(client: AutomationClientContext) {
    this.client = client;
  }

  /**
   * Create a source control.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param sourceControlName The source control name.
   * @param parameters The parameters supplied to the create or update source control operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SourceControlCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, automationAccountName: string, sourceControlName: string, parameters: Models.SourceControlCreateOrUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.SourceControlCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param sourceControlName The source control name.
   * @param parameters The parameters supplied to the create or update source control operation.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, automationAccountName: string, sourceControlName: string, parameters: Models.SourceControlCreateOrUpdateParameters, callback: msRest.ServiceCallback<Models.SourceControl>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param sourceControlName The source control name.
   * @param parameters The parameters supplied to the create or update source control operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, automationAccountName: string, sourceControlName: string, parameters: Models.SourceControlCreateOrUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SourceControl>): void;
  createOrUpdate(resourceGroupName: string, automationAccountName: string, sourceControlName: string, parameters: Models.SourceControlCreateOrUpdateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SourceControl>, callback?: msRest.ServiceCallback<Models.SourceControl>): Promise<Models.SourceControlCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        sourceControlName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.SourceControlCreateOrUpdateResponse>;
  }

  /**
   * Update a source control.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param sourceControlName The source control name.
   * @param parameters The parameters supplied to the update source control operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SourceControlUpdateResponse>
   */
  update(resourceGroupName: string, automationAccountName: string, sourceControlName: string, parameters: Models.SourceControlUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.SourceControlUpdateResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param sourceControlName The source control name.
   * @param parameters The parameters supplied to the update source control operation.
   * @param callback The callback
   */
  update(resourceGroupName: string, automationAccountName: string, sourceControlName: string, parameters: Models.SourceControlUpdateParameters, callback: msRest.ServiceCallback<Models.SourceControl>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param sourceControlName The source control name.
   * @param parameters The parameters supplied to the update source control operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, automationAccountName: string, sourceControlName: string, parameters: Models.SourceControlUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SourceControl>): void;
  update(resourceGroupName: string, automationAccountName: string, sourceControlName: string, parameters: Models.SourceControlUpdateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SourceControl>, callback?: msRest.ServiceCallback<Models.SourceControl>): Promise<Models.SourceControlUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        sourceControlName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.SourceControlUpdateResponse>;
  }

  /**
   * Delete the source control.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param sourceControlName The name of source control.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, sourceControlName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param sourceControlName The name of source control.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, sourceControlName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param sourceControlName The name of source control.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, sourceControlName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, automationAccountName: string, sourceControlName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        sourceControlName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Retrieve the source control identified by source control name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param sourceControlName The name of source control.
   * @param [options] The optional parameters
   * @returns Promise<Models.SourceControlGetResponse>
   */
  get(resourceGroupName: string, automationAccountName: string, sourceControlName: string, options?: msRest.RequestOptionsBase): Promise<Models.SourceControlGetResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param sourceControlName The name of source control.
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, sourceControlName: string, callback: msRest.ServiceCallback<Models.SourceControl>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param sourceControlName The name of source control.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, automationAccountName: string, sourceControlName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SourceControl>): void;
  get(resourceGroupName: string, automationAccountName: string, sourceControlName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SourceControl>, callback?: msRest.ServiceCallback<Models.SourceControl>): Promise<Models.SourceControlGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        sourceControlName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SourceControlGetResponse>;
  }

  /**
   * Retrieve a list of source controls.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param [options] The optional parameters
   * @returns Promise<Models.SourceControlListByAutomationAccountResponse>
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options?: Models.SourceControlListByAutomationAccountOptionalParams): Promise<Models.SourceControlListByAutomationAccountResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param callback The callback
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, callback: msRest.ServiceCallback<Models.SourceControlListResult>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options: Models.SourceControlListByAutomationAccountOptionalParams, callback: msRest.ServiceCallback<Models.SourceControlListResult>): void;
  listByAutomationAccount(resourceGroupName: string, automationAccountName: string, options?: Models.SourceControlListByAutomationAccountOptionalParams | msRest.ServiceCallback<Models.SourceControlListResult>, callback?: msRest.ServiceCallback<Models.SourceControlListResult>): Promise<Models.SourceControlListByAutomationAccountResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        options
      },
      listByAutomationAccountOperationSpec,
      callback) as Promise<Models.SourceControlListByAutomationAccountResponse>;
  }

  /**
   * Retrieve a list of source controls.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SourceControlListByAutomationAccountNextResponse>
   */
  listByAutomationAccountNext(nextPageLink: string, options?: Models.SourceControlListByAutomationAccountNextOptionalParams): Promise<Models.SourceControlListByAutomationAccountNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByAutomationAccountNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SourceControlListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAutomationAccountNext(nextPageLink: string, options: Models.SourceControlListByAutomationAccountNextOptionalParams, callback: msRest.ServiceCallback<Models.SourceControlListResult>): void;
  listByAutomationAccountNext(nextPageLink: string, options?: Models.SourceControlListByAutomationAccountNextOptionalParams | msRest.ServiceCallback<Models.SourceControlListResult>, callback?: msRest.ServiceCallback<Models.SourceControlListResult>): Promise<Models.SourceControlListByAutomationAccountNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByAutomationAccountNextOperationSpec,
      callback) as Promise<Models.SourceControlListByAutomationAccountNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.sourceControlName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.SourceControlCreateOrUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SourceControl
    },
    201: {
      bodyMapper: Mappers.SourceControl
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.sourceControlName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.SourceControlUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SourceControl
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.sourceControlName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.sourceControlName,
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
      bodyMapper: Mappers.SourceControl
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByAutomationAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
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
      bodyMapper: Mappers.SourceControlListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByAutomationAccountNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.SourceControlListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
