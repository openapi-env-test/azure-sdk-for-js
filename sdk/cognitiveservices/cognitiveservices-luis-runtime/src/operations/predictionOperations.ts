/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/predictionOperationsMappers";
import * as Parameters from "../models/parameters";
import { LUISRuntimeClientContext } from "../lUISRuntimeClientContext";

/** Class representing a PredictionOperations. */
export class PredictionOperations {
  private readonly client: LUISRuntimeClientContext;

  /**
   * Create a PredictionOperations.
   * @param {LUISRuntimeClientContext} client Reference to the service client.
   */
  constructor(client: LUISRuntimeClientContext) {
    this.client = client;
  }

  /**
   * Gets the predictions for an application version.
   * @param appId The application ID.
   * @param versionId The application version ID.
   * @param predictionRequest The prediction request parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.PredictionGetVersionPredictionResponse>
   */
  getVersionPrediction(
    appId: string,
    versionId: string,
    predictionRequest: Models.PredictionRequest,
    options?: Models.PredictionGetVersionPredictionOptionalParams
  ): Promise<Models.PredictionGetVersionPredictionResponse>;
  /**
   * @param appId The application ID.
   * @param versionId The application version ID.
   * @param predictionRequest The prediction request parameters.
   * @param callback The callback
   */
  getVersionPrediction(
    appId: string,
    versionId: string,
    predictionRequest: Models.PredictionRequest,
    callback: msRest.ServiceCallback<Models.PredictionResponse>
  ): void;
  /**
   * @param appId The application ID.
   * @param versionId The application version ID.
   * @param predictionRequest The prediction request parameters.
   * @param options The optional parameters
   * @param callback The callback
   */
  getVersionPrediction(
    appId: string,
    versionId: string,
    predictionRequest: Models.PredictionRequest,
    options: Models.PredictionGetVersionPredictionOptionalParams,
    callback: msRest.ServiceCallback<Models.PredictionResponse>
  ): void;
  getVersionPrediction(
    appId: string,
    versionId: string,
    predictionRequest: Models.PredictionRequest,
    options?:
      | Models.PredictionGetVersionPredictionOptionalParams
      | msRest.ServiceCallback<Models.PredictionResponse>,
    callback?: msRest.ServiceCallback<Models.PredictionResponse>
  ): Promise<Models.PredictionGetVersionPredictionResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        versionId,
        predictionRequest,
        options
      },
      getVersionPredictionOperationSpec,
      callback
    ) as Promise<Models.PredictionGetVersionPredictionResponse>;
  }

  /**
   * Gets the predictions for an application slot.
   * @param appId The application ID.
   * @param slotName The application slot name.
   * @param predictionRequest The prediction request parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.PredictionGetSlotPredictionResponse>
   */
  getSlotPrediction(
    appId: string,
    slotName: string,
    predictionRequest: Models.PredictionRequest,
    options?: Models.PredictionGetSlotPredictionOptionalParams
  ): Promise<Models.PredictionGetSlotPredictionResponse>;
  /**
   * @param appId The application ID.
   * @param slotName The application slot name.
   * @param predictionRequest The prediction request parameters.
   * @param callback The callback
   */
  getSlotPrediction(
    appId: string,
    slotName: string,
    predictionRequest: Models.PredictionRequest,
    callback: msRest.ServiceCallback<Models.PredictionResponse>
  ): void;
  /**
   * @param appId The application ID.
   * @param slotName The application slot name.
   * @param predictionRequest The prediction request parameters.
   * @param options The optional parameters
   * @param callback The callback
   */
  getSlotPrediction(
    appId: string,
    slotName: string,
    predictionRequest: Models.PredictionRequest,
    options: Models.PredictionGetSlotPredictionOptionalParams,
    callback: msRest.ServiceCallback<Models.PredictionResponse>
  ): void;
  getSlotPrediction(
    appId: string,
    slotName: string,
    predictionRequest: Models.PredictionRequest,
    options?:
      | Models.PredictionGetSlotPredictionOptionalParams
      | msRest.ServiceCallback<Models.PredictionResponse>,
    callback?: msRest.ServiceCallback<Models.PredictionResponse>
  ): Promise<Models.PredictionGetSlotPredictionResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        slotName,
        predictionRequest,
        options
      },
      getSlotPredictionOperationSpec,
      callback
    ) as Promise<Models.PredictionGetSlotPredictionResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getVersionPredictionOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "apps/{appId}/versions/{versionId}/predict",
  urlParameters: [Parameters.endpoint, Parameters.appId, Parameters.versionId],
  queryParameters: [Parameters.verbose, Parameters.showAllIntents, Parameters.log],
  requestBody: {
    parameterPath: "predictionRequest",
    mapper: {
      ...Mappers.PredictionRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PredictionResponse
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getSlotPredictionOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "apps/{appId}/slots/{slotName}/predict",
  urlParameters: [Parameters.endpoint, Parameters.appId, Parameters.slotName],
  queryParameters: [Parameters.verbose, Parameters.showAllIntents, Parameters.log],
  requestBody: {
    parameterPath: "predictionRequest",
    mapper: {
      ...Mappers.PredictionRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PredictionResponse
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
