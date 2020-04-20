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
import * as Mappers from "../models/galleryApplicationsMappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

/** Class representing a GalleryApplications. */
export class GalleryApplications {
  private readonly client: ComputeManagementClientContext;

  /**
   * Create a GalleryApplications.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Create or update a gallery Application Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application
   * Definition is to be created.
   * @param galleryApplicationName The name of the gallery Application Definition to be created or
   * updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed
   * in the middle. The maximum length is 80 characters.
   * @param galleryApplication Parameters supplied to the create or update gallery Application
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleryApplicationsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplication: Models.GalleryApplication, options?: msRest.RequestOptionsBase): Promise<Models.GalleryApplicationsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,galleryName,galleryApplicationName,galleryApplication,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.GalleryApplicationsCreateOrUpdateResponse>;
  }

  /**
   * Update a gallery Application Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application
   * Definition is to be updated.
   * @param galleryApplicationName The name of the gallery Application Definition to be updated. The
   * allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the
   * middle. The maximum length is 80 characters.
   * @param galleryApplication Parameters supplied to the update gallery Application operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleryApplicationsUpdateResponse>
   */
  update(resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplication: Models.GalleryApplicationUpdate, options?: msRest.RequestOptionsBase): Promise<Models.GalleryApplicationsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,galleryName,galleryApplicationName,galleryApplication,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.GalleryApplicationsUpdateResponse>;
  }

  /**
   * Retrieves information about a gallery Application Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery from which the Application
   * Definitions are to be retrieved.
   * @param galleryApplicationName The name of the gallery Application Definition to be retrieved.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleryApplicationsGetResponse>
   */
  get(resourceGroupName: string, galleryName: string, galleryApplicationName: string, options?: msRest.RequestOptionsBase): Promise<Models.GalleryApplicationsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery from which the Application
   * Definitions are to be retrieved.
   * @param galleryApplicationName The name of the gallery Application Definition to be retrieved.
   * @param callback The callback
   */
  get(resourceGroupName: string, galleryName: string, galleryApplicationName: string, callback: msRest.ServiceCallback<Models.GalleryApplication>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery from which the Application
   * Definitions are to be retrieved.
   * @param galleryApplicationName The name of the gallery Application Definition to be retrieved.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, galleryName: string, galleryApplicationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GalleryApplication>): void;
  get(resourceGroupName: string, galleryName: string, galleryApplicationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GalleryApplication>, callback?: msRest.ServiceCallback<Models.GalleryApplication>): Promise<Models.GalleryApplicationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.GalleryApplicationsGetResponse>;
  }

  /**
   * Delete a gallery Application.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application
   * Definition is to be deleted.
   * @param galleryApplicationName The name of the gallery Application Definition to be deleted.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, galleryName: string, galleryApplicationName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,galleryName,galleryApplicationName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * List gallery Application Definitions in a gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery from which Application Definitions
   * are to be listed.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleryApplicationsListByGalleryResponse>
   */
  listByGallery(resourceGroupName: string, galleryName: string, options?: msRest.RequestOptionsBase): Promise<Models.GalleryApplicationsListByGalleryResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery from which Application Definitions
   * are to be listed.
   * @param callback The callback
   */
  listByGallery(resourceGroupName: string, galleryName: string, callback: msRest.ServiceCallback<Models.GalleryApplicationList>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery from which Application Definitions
   * are to be listed.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByGallery(resourceGroupName: string, galleryName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GalleryApplicationList>): void;
  listByGallery(resourceGroupName: string, galleryName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GalleryApplicationList>, callback?: msRest.ServiceCallback<Models.GalleryApplicationList>): Promise<Models.GalleryApplicationsListByGalleryResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        galleryName,
        options
      },
      listByGalleryOperationSpec,
      callback) as Promise<Models.GalleryApplicationsListByGalleryResponse>;
  }

  /**
   * Create or update a gallery Application Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application
   * Definition is to be created.
   * @param galleryApplicationName The name of the gallery Application Definition to be created or
   * updated. The allowed characters are alphabets and numbers with dots, dashes, and periods allowed
   * in the middle. The maximum length is 80 characters.
   * @param galleryApplication Parameters supplied to the create or update gallery Application
   * operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplication: Models.GalleryApplication, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        galleryApplication,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Update a gallery Application Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application
   * Definition is to be updated.
   * @param galleryApplicationName The name of the gallery Application Definition to be updated. The
   * allowed characters are alphabets and numbers with dots, dashes, and periods allowed in the
   * middle. The maximum length is 80 characters.
   * @param galleryApplication Parameters supplied to the update gallery Application operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, galleryName: string, galleryApplicationName: string, galleryApplication: Models.GalleryApplicationUpdate, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        galleryApplication,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Delete a gallery Application.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application
   * Definition is to be deleted.
   * @param galleryApplicationName The name of the gallery Application Definition to be deleted.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, galleryName: string, galleryApplicationName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * List gallery Application Definitions in a gallery.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleryApplicationsListByGalleryNextResponse>
   */
  listByGalleryNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.GalleryApplicationsListByGalleryNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByGalleryNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.GalleryApplicationList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByGalleryNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GalleryApplicationList>): void;
  listByGalleryNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GalleryApplicationList>, callback?: msRest.ServiceCallback<Models.GalleryApplicationList>): Promise<Models.GalleryApplicationsListByGalleryNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByGalleryNextOperationSpec,
      callback) as Promise<Models.GalleryApplicationsListByGalleryNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.galleryApplicationName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GalleryApplication
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByGalleryOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GalleryApplicationList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.galleryApplicationName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "galleryApplication",
    mapper: {
      ...Mappers.GalleryApplication,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.GalleryApplication
    },
    201: {
      bodyMapper: Mappers.GalleryApplication
    },
    202: {
      bodyMapper: Mappers.GalleryApplication
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.galleryApplicationName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "galleryApplication",
    mapper: {
      ...Mappers.GalleryApplicationUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.GalleryApplication
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.galleryApplicationName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByGalleryNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.GalleryApplicationList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
