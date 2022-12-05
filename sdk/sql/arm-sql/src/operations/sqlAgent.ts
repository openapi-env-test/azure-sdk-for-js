/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SqlAgent } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  SqlAgentGetOptionalParams,
  SqlAgentGetResponse,
  SqlAgentConfiguration,
  SqlAgentCreateOrUpdateOptionalParams,
  SqlAgentCreateOrUpdateResponse
} from "../models";

/** Class containing SqlAgent operations. */
export class SqlAgentImpl implements SqlAgent {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class SqlAgent class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets current instance sql agent configuration.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: SqlAgentGetOptionalParams
  ): Promise<SqlAgentGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, options },
      getOperationSpec
    );
  }

  /**
   * Puts new sql agent configuration to instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param parameters A recoverable managed database resource.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    parameters: SqlAgentConfiguration,
    options?: SqlAgentCreateOrUpdateOptionalParams
  ): Promise<SqlAgentCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, parameters, options },
      createOrUpdateOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/sqlAgent/current",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlAgentConfiguration
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/sqlAgent/current",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SqlAgentConfiguration
    },
    default: {}
  },
  requestBody: Parameters.parameters56,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
