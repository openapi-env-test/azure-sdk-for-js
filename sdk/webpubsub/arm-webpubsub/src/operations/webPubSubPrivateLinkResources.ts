import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { WebPubSubPrivateLinkResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { WebPubSubManagementClientContext } from "../webPubSubManagementClientContext";
import {
  PrivateLinkResource,
  WebPubSubPrivateLinkResourcesListNextOptionalParams,
  WebPubSubPrivateLinkResourcesListOptionalParams,
  WebPubSubPrivateLinkResourcesListResponse,
  WebPubSubPrivateLinkResourcesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a WebPubSubPrivateLinkResources. */
export class WebPubSubPrivateLinkResourcesImpl
  implements WebPubSubPrivateLinkResources {
  private readonly client: WebPubSubManagementClientContext;

  /**
   * Initialize a new instance of the class WebPubSubPrivateLinkResources class.
   * @param client Reference to the service client
   */
  constructor(client: WebPubSubManagementClientContext) {
    this.client = client;
  }

  /**
   * Get the private link resources that need to be created for a resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubPrivateLinkResourcesListOptionalParams
  ): PagedAsyncIterableIterator<PrivateLinkResource> {
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
    options?: WebPubSubPrivateLinkResourcesListOptionalParams
  ): AsyncIterableIterator<PrivateLinkResource[]> {
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
    options?: WebPubSubPrivateLinkResourcesListOptionalParams
  ): AsyncIterableIterator<PrivateLinkResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      resourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get the private link resources that need to be created for a resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    resourceName: string,
    options?: WebPubSubPrivateLinkResourcesListOptionalParams
  ): Promise<WebPubSubPrivateLinkResourcesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      listOperationSpec
    );
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
    options?: WebPubSubPrivateLinkResourcesListNextOptionalParams
  ): Promise<WebPubSubPrivateLinkResourcesListNextResponse> {
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SignalRService/webPubSub/{resourceName}/privateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceList
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
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceList
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
