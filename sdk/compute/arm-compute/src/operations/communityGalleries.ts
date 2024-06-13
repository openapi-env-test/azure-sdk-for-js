/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CommunityGalleries } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClient } from "../computeManagementClient";
import {
  CommunityGalleriesGetOptionalParams,
  CommunityGalleriesGetResponse,
} from "../models";

/** Class containing CommunityGalleries operations. */
export class CommunityGalleriesImpl implements CommunityGalleries {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class CommunityGalleries class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * Get a community gallery by gallery public name.
   * @param location Resource location.
   * @param publicGalleryName The public name of the community gallery.
   * @param options The options parameters.
   */
  get(
    location: string,
    publicGalleryName: string,
    options?: CommunityGalleriesGetOptionalParams,
  ): Promise<CommunityGalleriesGetResponse> {
    return this.client.sendOperationRequest(
      { location, publicGalleryName, options },
      getOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/communityGalleries/{publicGalleryName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CommunityGallery,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location1,
    Parameters.publicGalleryName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
