/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Mappers from "../models/accessReviewInstanceOperationsMappers";
import * as Parameters from "../models/parameters";
import { AuthorizationManagementClientContext } from "../authorizationManagementClientContext";

/** Class representing a AccessReviewInstanceOperations. */
export class AccessReviewInstanceOperations {
  private readonly client: AuthorizationManagementClientContext;

  /**
   * Create a AccessReviewInstanceOperations.
   * @param {AuthorizationManagementClientContext} client Reference to the service client.
   */
  constructor(client: AuthorizationManagementClientContext) {
    this.client = client;
  }

  /**
   * An action to stop an access review instance.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  stop(scheduleDefinitionId: string, id: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param callback The callback
   */
  stop(scheduleDefinitionId: string, id: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  stop(scheduleDefinitionId: string, id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  stop(scheduleDefinitionId: string, id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        scheduleDefinitionId,
        id,
        options
      },
      stopOperationSpec,
      callback);
  }

  /**
   * An action to reset all decisions for an access review instance.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  resetDecisions(scheduleDefinitionId: string, id: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param callback The callback
   */
  resetDecisions(scheduleDefinitionId: string, id: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  resetDecisions(scheduleDefinitionId: string, id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  resetDecisions(scheduleDefinitionId: string, id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        scheduleDefinitionId,
        id,
        options
      },
      resetDecisionsOperationSpec,
      callback);
  }

  /**
   * An action to apply all decisions for an access review instance.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  applyDecisions(scheduleDefinitionId: string, id: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param callback The callback
   */
  applyDecisions(scheduleDefinitionId: string, id: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  applyDecisions(scheduleDefinitionId: string, id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  applyDecisions(scheduleDefinitionId: string, id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        scheduleDefinitionId,
        id,
        options
      },
      applyDecisionsOperationSpec,
      callback);
  }

  /**
   * An action to send reminders for an access review instance.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  sendReminders(scheduleDefinitionId: string, id: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param callback The callback
   */
  sendReminders(scheduleDefinitionId: string, id: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  sendReminders(scheduleDefinitionId: string, id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  sendReminders(scheduleDefinitionId: string, id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        scheduleDefinitionId,
        id,
        options
      },
      sendRemindersOperationSpec,
      callback);
  }

  /**
   * An action to accept recommendations for decision in an access review instance.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  acceptRecommendations(scheduleDefinitionId: string, id: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param callback The callback
   */
  acceptRecommendations(scheduleDefinitionId: string, id: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  acceptRecommendations(scheduleDefinitionId: string, id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  acceptRecommendations(scheduleDefinitionId: string, id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        scheduleDefinitionId,
        id,
        options
      },
      acceptRecommendationsOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const stopOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Authorization/accessReviewScheduleDefinitions/{scheduleDefinitionId}/instances/{id}/stop",
  urlParameters: [
    Parameters.scheduleDefinitionId,
    Parameters.id,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  serializer
};

const resetDecisionsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Authorization/accessReviewScheduleDefinitions/{scheduleDefinitionId}/instances/{id}/resetDecisions",
  urlParameters: [
    Parameters.scheduleDefinitionId,
    Parameters.id,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  serializer
};

const applyDecisionsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Authorization/accessReviewScheduleDefinitions/{scheduleDefinitionId}/instances/{id}/applyDecisions",
  urlParameters: [
    Parameters.scheduleDefinitionId,
    Parameters.id,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  serializer
};

const sendRemindersOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Authorization/accessReviewScheduleDefinitions/{scheduleDefinitionId}/instances/{id}/sendReminders",
  urlParameters: [
    Parameters.scheduleDefinitionId,
    Parameters.id,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  serializer
};

const acceptRecommendationsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Authorization/accessReviewScheduleDefinitions/{scheduleDefinitionId}/instances/{id}/acceptRecommendations",
  urlParameters: [
    Parameters.scheduleDefinitionId,
    Parameters.id
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  serializer
};
