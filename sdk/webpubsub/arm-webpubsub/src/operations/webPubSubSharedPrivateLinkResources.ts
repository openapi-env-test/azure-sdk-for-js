import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { WebPubSubSharedPrivateLinkResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WebPubSubManagementClientContext } from "../webPubSubManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  SharedPrivateLinkResource,
  WebPubSubSharedPrivateLinkResourcesListNextOptionalParams,
  WebPubSubSharedPrivateLinkResourcesListOptionalParams,
  WebPubSubSharedPrivateLinkResourcesListResponse,
  WebPubSubSharedPrivateLinkResourcesGetOptionalParams,
  WebPubSubSharedPrivateLinkResourcesGetResponse,
  WebPubSubSharedPrivateLinkResourcesCreateOrUpdateOptionalParams,
  WebPubSubSharedPrivateLinkResourcesCreateOrUpdateResponse,
  WebPubSubSharedPrivateLinkResourcesDeleteOptionalParams,
  WebPubSubSharedPrivateLinkResourcesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a WebPubSubSharedPrivateLinkResources. */
export class WebPubSubSharedPrivateLinkResourcesImpl
  implements WebPubSubSharedPrivateLinkResources {
  private readonly client: WebPubSubManagementClientContext;

  /**
   * Initialize a new instance of the class WebPubSubSharedPrivateLinkResources class.
   * @param client Reference to the service client
   */
  constructor(client: WebPubSubManagementClientContext) {
    this.client = client;
  }

  /**
   * List shared private link resources
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubSharedPrivateLinkResourcesListOptionalParams
  ): PagedAsyncIterableIterator<SharedPrivateLinkResource> {
    const iter = this.listPagingAll(resourceGroupName, resourceName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, resourceName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubSharedPrivateLinkResourcesListOptionalParams
  ): AsyncIterableIterator<SharedPrivateLinkResource[]> {
    let result = await this._list(resourceGroupName, resourceName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        resourceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubSharedPrivateLinkResourcesListOptionalParams
  ): AsyncIterableIterator<SharedPrivateLinkResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      resourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List shared private link resources
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubSharedPrivateLinkResourcesListOptionalParams
  ): Promise<WebPubSubSharedPrivateLinkResourcesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      listOperationSpec
    );
  }

  /**
   * Get the specified shared private link resource
   * @param sharedPrivateLinkResourceName The name of the shared private link resource
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  get(
    sharedPrivateLinkResourceName: string,
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubSharedPrivateLinkResourcesGetOptionalParams
  ): Promise<WebPubSubSharedPrivateLinkResourcesGetResponse> {
    return this.client.sendOperationRequest(
      {
        sharedPrivateLinkResourceName,
        resourceGroupName,
        resourceName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Create or update a shared private link resource
   * @param sharedPrivateLinkResourceName The name of the shared private link resource
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param parameters The shared private link resource
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    sharedPrivateLinkResourceName: string,
    resourceGroupName: string,
    resourceName: string,
    parameters: SharedPrivateLinkResource,
    options?: WebPubSubSharedPrivateLinkResourcesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        WebPubSubSharedPrivateLinkResourcesCreateOrUpdateResponse
      >,
      WebPubSubSharedPrivateLinkResourcesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<WebPubSubSharedPrivateLinkResourcesCreateOrUpdateResponse> => {
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
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      {
        sharedPrivateLinkResourceName,
        resourceGroupName,
        resourceName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      sendOperation
    );
  }

  /**
   * Create or update a shared private link resource
   * @param sharedPrivateLinkResourceName The name of the shared private link resource
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param parameters The shared private link resource
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    sharedPrivateLinkResourceName: string,
    resourceGroupName: string,
    resourceName: string,
    parameters: SharedPrivateLinkResource,
    options?: WebPubSubSharedPrivateLinkResourcesCreateOrUpdateOptionalParams
  ): Promise<WebPubSubSharedPrivateLinkResourcesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      sharedPrivateLinkResourceName,
      resourceGroupName,
      resourceName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete the specified shared private link resource
   * @param sharedPrivateLinkResourceName The name of the shared private link resource
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  async beginDelete(
    sharedPrivateLinkResourceName: string,
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubSharedPrivateLinkResourcesDeleteOptionalParams
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
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      {
        sharedPrivateLinkResourceName,
        resourceGroupName,
        resourceName,
        options
      },
      deleteOperationSpec,
      sendOperation
    );
  }

  /**
   * Delete the specified shared private link resource
   * @param sharedPrivateLinkResourceName The name of the shared private link resource
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    sharedPrivateLinkResourceName: string,
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubSharedPrivateLinkResourcesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      sharedPrivateLinkResourceName,
      resourceGroupName,
      resourceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    resourceName: string,
    nextLink: string,
    options?: WebPubSubSharedPrivateLinkResourcesListNextOptionalParams
  ): Promise<WebPubSubSharedPrivateLinkResourcesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/sharedPrivateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SharedPrivateLinkResourceList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SharedPrivateLinkResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.sharedPrivateLinkResourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SharedPrivateLinkResource
    },
    201: {
      bodyMapper: Mappers.SharedPrivateLinkResource
    },
    202: {
      bodyMapper: Mappers.SharedPrivateLinkResource
    },
    204: {
      bodyMapper: Mappers.SharedPrivateLinkResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.sharedPrivateLinkResourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/sharedPrivateLinkResources/{sharedPrivateLinkResourceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName,
    Parameters.sharedPrivateLinkResourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SharedPrivateLinkResourceList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
