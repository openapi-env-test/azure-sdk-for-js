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
import * as Mappers from "../models/entitiesMappers";
import * as Parameters from "../models/parameters";
import { SecurityInsightsContext } from "../securityInsightsContext";

/** Class representing a Entities. */
export class Entities {
  private readonly client: SecurityInsightsContext;

  /**
   * Create a Entities.
   * @param {SecurityInsightsContext} client Reference to the service client.
   */
  constructor(client: SecurityInsightsContext) {
    this.client = client;
  }

  /**
   * Gets all entities.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param [options] The optional parameters
   * @returns Promise<Models.EntitiesListResponse>
   */
  list(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.EntitiesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param callback The callback
   */
  list(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, callback: msRest.ServiceCallback<Models.EntityList>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EntityList>): void;
  list(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EntityList>, callback?: msRest.ServiceCallback<Models.EntityList>): Promise<Models.EntitiesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        operationalInsightsResourceProvider,
        workspaceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.EntitiesListResponse>;
  }

  /**
   * Gets an entity.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param entityId entity ID
   * @param [options] The optional parameters
   * @returns Promise<Models.EntitiesGetResponse>
   */
  get(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, entityId: string, options?: msRest.RequestOptionsBase): Promise<Models.EntitiesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param entityId entity ID
   * @param callback The callback
   */
  get(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, entityId: string, callback: msRest.ServiceCallback<Models.EntityUnion>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param entityId entity ID
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, entityId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EntityUnion>): void;
  get(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, entityId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EntityUnion>, callback?: msRest.ServiceCallback<Models.EntityUnion>): Promise<Models.EntitiesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        operationalInsightsResourceProvider,
        workspaceName,
        entityId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.EntitiesGetResponse>;
  }

  /**
   * Expands an entity.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param entityId entity ID
   * @param parameters The parameters required to execute an expand operation on the given entity.
   * @param [options] The optional parameters
   * @returns Promise<Models.EntitiesExpandResponse>
   */
  expand(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, entityId: string, parameters: Models.EntityExpandParameters, options?: msRest.RequestOptionsBase): Promise<Models.EntitiesExpandResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param entityId entity ID
   * @param parameters The parameters required to execute an expand operation on the given entity.
   * @param callback The callback
   */
  expand(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, entityId: string, parameters: Models.EntityExpandParameters, callback: msRest.ServiceCallback<Models.EntityExpandResponse>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param entityId entity ID
   * @param parameters The parameters required to execute an expand operation on the given entity.
   * @param options The optional parameters
   * @param callback The callback
   */
  expand(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, entityId: string, parameters: Models.EntityExpandParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EntityExpandResponse>): void;
  expand(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, entityId: string, parameters: Models.EntityExpandParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EntityExpandResponse>, callback?: msRest.ServiceCallback<Models.EntityExpandResponse>): Promise<Models.EntitiesExpandResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        operationalInsightsResourceProvider,
        workspaceName,
        entityId,
        parameters,
        options
      },
      expandOperationSpec,
      callback) as Promise<Models.EntitiesExpandResponse>;
  }

  /**
   * Get Insights and Activities for an entity.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param entityId entity ID
   * @param [options] The optional parameters
   * @returns Promise<Models.EntitiesQueriesResponse>
   */
  queries(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, entityId: string, options?: msRest.RequestOptionsBase): Promise<Models.EntitiesQueriesResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param entityId entity ID
   * @param callback The callback
   */
  queries(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, entityId: string, callback: msRest.ServiceCallback<Models.GetQueriesResponse>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param entityId entity ID
   * @param options The optional parameters
   * @param callback The callback
   */
  queries(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, entityId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GetQueriesResponse>): void;
  queries(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, entityId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GetQueriesResponse>, callback?: msRest.ServiceCallback<Models.GetQueriesResponse>): Promise<Models.EntitiesQueriesResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        operationalInsightsResourceProvider,
        workspaceName,
        entityId,
        options
      },
      queriesOperationSpec,
      callback) as Promise<Models.EntitiesQueriesResponse>;
  }

  /**
   * Execute Insights for an entity.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param entityId entity ID
   * @param parameters The parameters required to execute insights on the given entity.
   * @param [options] The optional parameters
   * @returns Promise<Models.EntitiesGetInsightsResponse>
   */
  getInsights(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, entityId: string, parameters: Models.EntityGetInsightsParameters, options?: msRest.RequestOptionsBase): Promise<Models.EntitiesGetInsightsResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param entityId entity ID
   * @param parameters The parameters required to execute insights on the given entity.
   * @param callback The callback
   */
  getInsights(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, entityId: string, parameters: Models.EntityGetInsightsParameters, callback: msRest.ServiceCallback<Models.EntityGetInsightsResponse>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param entityId entity ID
   * @param parameters The parameters required to execute insights on the given entity.
   * @param options The optional parameters
   * @param callback The callback
   */
  getInsights(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, entityId: string, parameters: Models.EntityGetInsightsParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EntityGetInsightsResponse>): void;
  getInsights(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, entityId: string, parameters: Models.EntityGetInsightsParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EntityGetInsightsResponse>, callback?: msRest.ServiceCallback<Models.EntityGetInsightsResponse>): Promise<Models.EntitiesGetInsightsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        operationalInsightsResourceProvider,
        workspaceName,
        entityId,
        parameters,
        options
      },
      getInsightsOperationSpec,
      callback) as Promise<Models.EntitiesGetInsightsResponse>;
  }

  /**
   * Gets all entities.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.EntitiesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.EntitiesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.EntityList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EntityList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EntityList>, callback?: msRest.ServiceCallback<Models.EntityList>): Promise<Models.EntitiesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.EntitiesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{operationalInsightsResourceProvider}/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/entities",
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
      bodyMapper: Mappers.EntityList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{operationalInsightsResourceProvider}/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/entities/{entityId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.operationalInsightsResourceProvider,
    Parameters.workspaceName,
    Parameters.entityId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Entity
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const expandOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{operationalInsightsResourceProvider}/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/entities/{entityId}/expand",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.operationalInsightsResourceProvider,
    Parameters.workspaceName,
    Parameters.entityId
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
      ...Mappers.EntityExpandParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.EntityExpandResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const queriesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{operationalInsightsResourceProvider}/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/entities/{entityId}/queries",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.operationalInsightsResourceProvider,
    Parameters.workspaceName,
    Parameters.entityId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.kind
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GetQueriesResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getInsightsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{operationalInsightsResourceProvider}/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/entities/{entityId}/getInsights",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.operationalInsightsResourceProvider,
    Parameters.workspaceName,
    Parameters.entityId
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
      ...Mappers.EntityGetInsightsParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.EntityGetInsightsResponse
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
      bodyMapper: Mappers.EntityList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
