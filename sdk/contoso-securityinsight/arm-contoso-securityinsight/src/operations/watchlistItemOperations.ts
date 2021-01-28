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
import * as Mappers from "../models/watchlistItemOperationsMappers";
import * as Parameters from "../models/parameters";
import { SecurityInsightsContext } from "../securityInsightsContext";

/** Class representing a WatchlistItemOperations. */
export class WatchlistItemOperations {
  private readonly client: SecurityInsightsContext;

  /**
   * Create a WatchlistItemOperations.
   * @param {SecurityInsightsContext} client Reference to the service client.
   */
  constructor(client: SecurityInsightsContext) {
    this.client = client;
  }

  /**
   * Delete a watchlist item.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param watchlistAlias Watchlist Alias
   * @param watchlistItemId Watchlist Item Id (GUID)
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, watchlistAlias: string, watchlistItemId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param watchlistAlias Watchlist Alias
   * @param watchlistItemId Watchlist Item Id (GUID)
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, watchlistAlias: string, watchlistItemId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param watchlistAlias Watchlist Alias
   * @param watchlistItemId Watchlist Item Id (GUID)
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, watchlistAlias: string, watchlistItemId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, watchlistAlias: string, watchlistItemId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        operationalInsightsResourceProvider,
        workspaceName,
        watchlistAlias,
        watchlistItemId,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Creates or updates a watchlist item.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param watchlistAlias Watchlist Alias
   * @param watchlistItemId Watchlist Item Id (GUID)
   * @param watchlistItem The watchlist item
   * @param [options] The optional parameters
   * @returns Promise<Models.WatchlistItemCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, watchlistAlias: string, watchlistItemId: string, watchlistItem: Models.WatchlistItem, options?: msRest.RequestOptionsBase): Promise<Models.WatchlistItemCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param watchlistAlias Watchlist Alias
   * @param watchlistItemId Watchlist Item Id (GUID)
   * @param watchlistItem The watchlist item
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, watchlistAlias: string, watchlistItemId: string, watchlistItem: Models.WatchlistItem, callback: msRest.ServiceCallback<Models.WatchlistItem>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param operationalInsightsResourceProvider The namespace of workspaces resource provider-
   * Microsoft.OperationalInsights.
   * @param workspaceName The name of the workspace.
   * @param watchlistAlias Watchlist Alias
   * @param watchlistItemId Watchlist Item Id (GUID)
   * @param watchlistItem The watchlist item
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, watchlistAlias: string, watchlistItemId: string, watchlistItem: Models.WatchlistItem, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WatchlistItem>): void;
  createOrUpdate(resourceGroupName: string, operationalInsightsResourceProvider: string, workspaceName: string, watchlistAlias: string, watchlistItemId: string, watchlistItem: Models.WatchlistItem, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WatchlistItem>, callback?: msRest.ServiceCallback<Models.WatchlistItem>): Promise<Models.WatchlistItemCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        operationalInsightsResourceProvider,
        workspaceName,
        watchlistAlias,
        watchlistItemId,
        watchlistItem,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.WatchlistItemCreateOrUpdateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{operationalInsightsResourceProvider}/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/watchlists/{watchlistAlias}/watchlistItems/{watchlistItemId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.operationalInsightsResourceProvider,
    Parameters.workspaceName,
    Parameters.watchlistAlias,
    Parameters.watchlistItemId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{operationalInsightsResourceProvider}/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/watchlists/{watchlistAlias}/watchlistItems/{watchlistItemId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.operationalInsightsResourceProvider,
    Parameters.workspaceName,
    Parameters.watchlistAlias,
    Parameters.watchlistItemId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "watchlistItem",
    mapper: {
      ...Mappers.WatchlistItem,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.WatchlistItem
    },
    201: {
      bodyMapper: Mappers.WatchlistItem
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
