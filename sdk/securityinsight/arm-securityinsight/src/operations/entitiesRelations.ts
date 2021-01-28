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
import * as Mappers from "../models/entitiesRelationsMappers";
import * as Parameters from "../models/parameters";
import { SecurityInsightsContext } from "../securityInsightsContext";

/** Class representing a EntitiesRelations. */
export class EntitiesRelations {
  private readonly client: SecurityInsightsContext;

  /**
   * Create a EntitiesRelations.
   * @param {SecurityInsightsContext} client Reference to the service client.
   */
  constructor(client: SecurityInsightsContext) {
    this.client = client;
  }

  /**
   * Gets all relations of an entity.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param entityId entity ID
   * @param [options] The optional parameters
   * @returns Promise<Models.EntitiesRelationsListResponse>
   */
  list(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, entityId: string, options?: Models.EntitiesRelationsListOptionalParams): Promise<Models.EntitiesRelationsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param entityId entity ID
   * @param callback The callback
   */
  list(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, entityId: string, callback: msRest.ServiceCallback<Models.RelationList>): void;
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
  list(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, entityId: string, options: Models.EntitiesRelationsListOptionalParams, callback: msRest.ServiceCallback<Models.RelationList>): void;
  list(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, entityId: string, options?: Models.EntitiesRelationsListOptionalParams | msRest.ServiceCallback<Models.RelationList>, callback?: msRest.ServiceCallback<Models.RelationList>): Promise<Models.EntitiesRelationsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        operationalInsightsResourceProvider,
        workspaceName,
        entityId,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.EntitiesRelationsListResponse>;
  }

  /**
   * Gets all relations of an entity.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.EntitiesRelationsListNextResponse>
   */
  listNext(nextPageLink: string, options?: Models.EntitiesRelationsListNextOptionalParams): Promise<Models.EntitiesRelationsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RelationList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.EntitiesRelationsListNextOptionalParams, callback: msRest.ServiceCallback<Models.RelationList>): void;
  listNext(nextPageLink: string, options?: Models.EntitiesRelationsListNextOptionalParams | msRest.ServiceCallback<Models.RelationList>, callback?: msRest.ServiceCallback<Models.RelationList>): Promise<Models.EntitiesRelationsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.EntitiesRelationsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{operationalInsightsResourceProvider}/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/entities/{entityId}/relations",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.operationalInsightsResourceProvider,
    Parameters.workspaceName,
    Parameters.entityId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.orderby,
    Parameters.top,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RelationList
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
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.orderby,
    Parameters.top,
    Parameters.skipToken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RelationList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
