/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { GalleryApplicationVersions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClient } from "../computeManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  GalleryApplicationVersion,
  GalleryApplicationVersionsListByGalleryApplicationNextOptionalParams,
  GalleryApplicationVersionsListByGalleryApplicationOptionalParams,
  GalleryApplicationVersionsCreateOrUpdateOptionalParams,
  GalleryApplicationVersionsCreateOrUpdateResponse,
  GalleryApplicationVersionUpdate,
  GalleryApplicationVersionsUpdateOptionalParams,
  GalleryApplicationVersionsUpdateResponse,
  GalleryApplicationVersionsGetOptionalParams,
  GalleryApplicationVersionsGetResponse,
  GalleryApplicationVersionsDeleteOptionalParams,
  GalleryApplicationVersionsListByGalleryApplicationResponse,
  GalleryApplicationVersionsListByGalleryApplicationNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing GalleryApplicationVersions operations. */
export class GalleryApplicationVersionsImpl
  implements GalleryApplicationVersions {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class GalleryApplicationVersions class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * List gallery Application Versions in a gallery Application Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the Shared Application Gallery Application Definition from
   *                               which the Application Versions are to be listed.
   * @param options The options parameters.
   */
  public listByGalleryApplication(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    options?: GalleryApplicationVersionsListByGalleryApplicationOptionalParams
  ): PagedAsyncIterableIterator<GalleryApplicationVersion> {
    const iter = this.listByGalleryApplicationPagingAll(
      resourceGroupName,
      galleryName,
      galleryApplicationName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByGalleryApplicationPagingPage(
          resourceGroupName,
          galleryName,
          galleryApplicationName,
          options
        );
      }
    };
  }

  private async *listByGalleryApplicationPagingPage(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    options?: GalleryApplicationVersionsListByGalleryApplicationOptionalParams
  ): AsyncIterableIterator<GalleryApplicationVersion[]> {
    let result = await this._listByGalleryApplication(
      resourceGroupName,
      galleryName,
      galleryApplicationName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByGalleryApplicationNext(
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByGalleryApplicationPagingAll(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    options?: GalleryApplicationVersionsListByGalleryApplicationOptionalParams
  ): AsyncIterableIterator<GalleryApplicationVersion> {
    for await (const page of this.listByGalleryApplicationPagingPage(
      resourceGroupName,
      galleryName,
      galleryApplicationName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Create or update a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   *                               Application Version is to be created.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be created.
   *                                      Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits
   *                                      must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryApplicationVersion Parameters supplied to the create or update gallery Application
   *                                  Version operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    galleryApplicationVersion: GalleryApplicationVersion,
    options?: GalleryApplicationVersionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GalleryApplicationVersionsCreateOrUpdateResponse>,
      GalleryApplicationVersionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<GalleryApplicationVersionsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        galleryApplicationVersionName,
        galleryApplicationVersion,
        options
      },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   *                               Application Version is to be created.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be created.
   *                                      Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits
   *                                      must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryApplicationVersion Parameters supplied to the create or update gallery Application
   *                                  Version operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    galleryApplicationVersion: GalleryApplicationVersion,
    options?: GalleryApplicationVersionsCreateOrUpdateOptionalParams
  ): Promise<GalleryApplicationVersionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      galleryName,
      galleryApplicationName,
      galleryApplicationVersionName,
      galleryApplicationVersion,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   *                               Application Version is to be updated.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be updated.
   *                                      Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits
   *                                      must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryApplicationVersion Parameters supplied to the update gallery Application Version
   *                                  operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    galleryApplicationVersion: GalleryApplicationVersionUpdate,
    options?: GalleryApplicationVersionsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<GalleryApplicationVersionsUpdateResponse>,
      GalleryApplicationVersionsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<GalleryApplicationVersionsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        galleryApplicationVersionName,
        galleryApplicationVersion,
        options
      },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   *                               Application Version is to be updated.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be updated.
   *                                      Needs to follow semantic version name pattern: The allowed characters are digit and period. Digits
   *                                      must be within the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryApplicationVersion Parameters supplied to the update gallery Application Version
   *                                  operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    galleryApplicationVersion: GalleryApplicationVersionUpdate,
    options?: GalleryApplicationVersionsUpdateOptionalParams
  ): Promise<GalleryApplicationVersionsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      galleryName,
      galleryApplicationName,
      galleryApplicationVersionName,
      galleryApplicationVersion,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Retrieves information about a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   *                               Application Version resides.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    options?: GalleryApplicationVersionsGetOptionalParams
  ): Promise<GalleryApplicationVersionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        galleryApplicationVersionName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Delete a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   *                               Application Version resides.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be deleted.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    options?: GalleryApplicationVersionsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        galleryApplicationVersionName,
        options
      },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a gallery Application Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the gallery Application Definition in which the
   *                               Application Version resides.
   * @param galleryApplicationVersionName The name of the gallery Application Version to be deleted.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    galleryApplicationVersionName: string,
    options?: GalleryApplicationVersionsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      galleryName,
      galleryApplicationName,
      galleryApplicationVersionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List gallery Application Versions in a gallery Application Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the Shared Application Gallery Application Definition from
   *                               which the Application Versions are to be listed.
   * @param options The options parameters.
   */
  private _listByGalleryApplication(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    options?: GalleryApplicationVersionsListByGalleryApplicationOptionalParams
  ): Promise<GalleryApplicationVersionsListByGalleryApplicationResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, galleryName, galleryApplicationName, options },
      listByGalleryApplicationOperationSpec
    );
  }

  /**
   * ListByGalleryApplicationNext
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Application Gallery in which the Application Definition
   *                    resides.
   * @param galleryApplicationName The name of the Shared Application Gallery Application Definition from
   *                               which the Application Versions are to be listed.
   * @param nextLink The nextLink from the previous successful call to the ListByGalleryApplication
   *                 method.
   * @param options The options parameters.
   */
  private _listByGalleryApplicationNext(
    resourceGroupName: string,
    galleryName: string,
    galleryApplicationName: string,
    nextLink: string,
    options?: GalleryApplicationVersionsListByGalleryApplicationNextOptionalParams
  ): Promise<GalleryApplicationVersionsListByGalleryApplicationNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        galleryName,
        galleryApplicationName,
        nextLink,
        options
      },
      listByGalleryApplicationNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}/versions/{galleryApplicationVersionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryApplicationVersion
    },
    201: {
      bodyMapper: Mappers.GalleryApplicationVersion
    },
    202: {
      bodyMapper: Mappers.GalleryApplicationVersion
    },
    204: {
      bodyMapper: Mappers.GalleryApplicationVersion
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.galleryApplicationVersion,
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.galleryApplicationName,
    Parameters.galleryApplicationVersionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}/versions/{galleryApplicationVersionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryApplicationVersion
    },
    201: {
      bodyMapper: Mappers.GalleryApplicationVersion
    },
    202: {
      bodyMapper: Mappers.GalleryApplicationVersion
    },
    204: {
      bodyMapper: Mappers.GalleryApplicationVersion
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.galleryApplicationVersion1,
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.galleryApplicationName,
    Parameters.galleryApplicationVersionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}/versions/{galleryApplicationVersionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryApplicationVersion
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4, Parameters.expand9],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.galleryApplicationName,
    Parameters.galleryApplicationVersionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}/versions/{galleryApplicationVersionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.galleryApplicationName,
    Parameters.galleryApplicationVersionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByGalleryApplicationOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/applications/{galleryApplicationName}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryApplicationVersionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.galleryApplicationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByGalleryApplicationNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryApplicationVersionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceGroupName,
    Parameters.galleryName,
    Parameters.galleryApplicationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
