/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Recommendation } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AdvisorManagementClient } from "../advisorManagementClient";
import {
  RecommendationGetOptionalParams,
  RecommendationGetResponse
} from "../models";

/** Class containing Recommendation operations. */
export class RecommendationImpl implements Recommendation {
  private readonly client: AdvisorManagementClient;

  /**
   * Initialize a new instance of the class Recommendation class.
   * @param client Reference to the service client
   */
  constructor(client: AdvisorManagementClient) {
    this.client = client;
  }

  /**
   * Gets the metadata entity.
   * @param name Name of metadata entity.
   * @param options The options parameters.
   */
  get(
    name: string,
    options?: RecommendationGetOptionalParams
  ): Promise<RecommendationGetResponse> {
    return this.client.sendOperationRequest(
      { name, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Advisor/metadata/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetadataEntity
    },
    404: {
      bodyMapper: Mappers.ARMErrorResponseBody,
      isError: true
    },
    default: {
      bodyMapper: Mappers.ArmErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.name],
  headerParameters: [Parameters.accept],
  serializer
};
