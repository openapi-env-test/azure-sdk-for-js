/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Images } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClient } from "../computeManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Image,
  ImagesListByResourceGroupNextOptionalParams,
  ImagesListByResourceGroupOptionalParams,
  ImagesListNextOptionalParams,
  ImagesListOptionalParams,
  ImagesCreateOrUpdateOptionalParams,
  ImagesCreateOrUpdateResponse,
  ImageUpdate,
  ImagesUpdateOptionalParams,
  ImagesUpdateResponse,
  ImagesDeleteOptionalParams,
  ImagesGetOptionalParams,
  ImagesGetResponse,
  ImagesListByResourceGroupResponse,
  ImagesListResponse,
  ImagesListByResourceGroupNextResponse,
  ImagesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Images operations. */
export class ImagesImpl implements Images {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class Images class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * Gets the list of images under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ImagesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Image> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ImagesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Image[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ImagesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Image> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the list of Images in the subscription. Use nextLink property in the response to get the next
   * page of Images. Do this till nextLink is null to fetch all the Images.
   * @param options The options parameters.
   */
  public list(
    options?: ImagesListOptionalParams
  ): PagedAsyncIterableIterator<Image> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: ImagesListOptionalParams
  ): AsyncIterableIterator<Image[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: ImagesListOptionalParams
  ): AsyncIterableIterator<Image> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Create or update an image.
   * @param resourceGroupName The name of the resource group.
   * @param imageName The name of the image.
   * @param parameters Parameters supplied to the Create Image operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    imageName: string,
    parameters: Image,
    options?: ImagesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ImagesCreateOrUpdateResponse>,
      ImagesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ImagesCreateOrUpdateResponse> => {
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
      { resourceGroupName, imageName, parameters, options },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Create or update an image.
   * @param resourceGroupName The name of the resource group.
   * @param imageName The name of the image.
   * @param parameters Parameters supplied to the Create Image operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    imageName: string,
    parameters: Image,
    options?: ImagesCreateOrUpdateOptionalParams
  ): Promise<ImagesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      imageName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update an image.
   * @param resourceGroupName The name of the resource group.
   * @param imageName The name of the image.
   * @param parameters Parameters supplied to the Update Image operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    imageName: string,
    parameters: ImageUpdate,
    options?: ImagesUpdateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<ImagesUpdateResponse>, ImagesUpdateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ImagesUpdateResponse> => {
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
      { resourceGroupName, imageName, parameters, options },
      updateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Update an image.
   * @param resourceGroupName The name of the resource group.
   * @param imageName The name of the image.
   * @param parameters Parameters supplied to the Update Image operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    imageName: string,
    parameters: ImageUpdate,
    options?: ImagesUpdateOptionalParams
  ): Promise<ImagesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      imageName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an Image.
   * @param resourceGroupName The name of the resource group.
   * @param imageName The name of the image.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    imageName: string,
    options?: ImagesDeleteOptionalParams
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
      { resourceGroupName, imageName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes an Image.
   * @param resourceGroupName The name of the resource group.
   * @param imageName The name of the image.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    imageName: string,
    options?: ImagesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      imageName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets an image.
   * @param resourceGroupName The name of the resource group.
   * @param imageName The name of the image.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    imageName: string,
    options?: ImagesGetOptionalParams
  ): Promise<ImagesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, imageName, options },
      getOperationSpec
    );
  }

  /**
   * Gets the list of images under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ImagesListByResourceGroupOptionalParams
  ): Promise<ImagesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Gets the list of Images in the subscription. Use nextLink property in the response to get the next
   * page of Images. Do this till nextLink is null to fetch all the Images.
   * @param options The options parameters.
   */
  private _list(
    options?: ImagesListOptionalParams
  ): Promise<ImagesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ImagesListByResourceGroupNextOptionalParams
  ): Promise<ImagesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ImagesListNextOptionalParams
  ): Promise<ImagesListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/images/{imageName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Image
    },
    201: {
      bodyMapper: Mappers.Image
    },
    202: {
      bodyMapper: Mappers.Image
    },
    204: {
      bodyMapper: Mappers.Image
    }
  },
  requestBody: Parameters.parameters14,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.imageName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/images/{imageName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Image
    },
    201: {
      bodyMapper: Mappers.Image
    },
    202: {
      bodyMapper: Mappers.Image
    },
    204: {
      bodyMapper: Mappers.Image
    }
  },
  requestBody: Parameters.parameters15,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.imageName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/images/{imageName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.imageName
  ],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/images/{imageName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Image
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.imageName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/images",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ImageListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/images",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ImageListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ImageListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ImageListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
