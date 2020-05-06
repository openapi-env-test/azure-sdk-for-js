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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/endpointsMappers";
import * as Parameters from "../models/parameters";
import { FrontDoorManagementClientContext } from "../frontDoorManagementClientContext";

/** Class representing a Endpoints. */
export class Endpoints {
  private readonly client: FrontDoorManagementClientContext;

  /**
   * Create a Endpoints.
   * @param {FrontDoorManagementClientContext} client Reference to the service client.
   */
  constructor(client: FrontDoorManagementClientContext) {
    this.client = client;
  }

  /**
   * Removes a content from Front Door.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param contentFilePaths The path to the content to be purged. Path can be a full URL, e.g.
   * '/pictures/city.png' which removes a single file, or a directory with a wildcard, e.g.
   * '/pictures/*' which removes all folders and files in the directory.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  purgeContent(resourceGroupName: string, frontDoorName: string, contentFilePaths: Models.PurgeParameters, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginPurgeContent(resourceGroupName,frontDoorName,contentFilePaths,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Removes a content from Front Door.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param contentFilePaths The path to the content to be purged. Path can be a full URL, e.g.
   * '/pictures/city.png' which removes a single file, or a directory with a wildcard, e.g.
   * '/pictures/*' which removes all folders and files in the directory.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginPurgeContent(resourceGroupName: string, frontDoorName: string, contentFilePaths: Models.PurgeParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        frontDoorName,
        contentFilePaths,
        options
      },
      beginPurgeContentOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const beginPurgeContentOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/purge",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.frontDoorName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "contentFilePaths",
    mapper: {
      ...Mappers.PurgeParameters,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
