/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { OperationResults } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AgriFoodMgmtClient } from "../agriFoodMgmtClient";
import {
  OperationResultsGetOptionalParams,
  OperationResultsGetResponse
} from "../models";

/** Class containing OperationResults operations. */
export class OperationResultsImpl implements OperationResults {
  private readonly client: AgriFoodMgmtClient;

  /**
   * Initialize a new instance of the class OperationResults class.
   * @param client Reference to the service client
   */
  constructor(client: AgriFoodMgmtClient) {
    this.client = client;
  }

  /**
   * Get operationResults for a Data Manager For Agriculture resource.
   * @param locations Location.
   * @param operationResultsId operationResultsId for a specific location.
   * @param options The options parameters.
   */
  get(
    locations: string,
    operationResultsId: string,
    options?: OperationResultsGetOptionalParams
  ): Promise<OperationResultsGetResponse> {
    return this.client.sendOperationRequest(
      { locations, operationResultsId, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.AgFoodPlatform/locations/{locations}/operationResults/{operationResultsId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ArmAsyncOperation
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locations,
    Parameters.operationResultsId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
