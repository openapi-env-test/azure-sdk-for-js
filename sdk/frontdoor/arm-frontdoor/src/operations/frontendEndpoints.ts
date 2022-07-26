/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { FrontendEndpoints } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { FrontDoorManagementClient } from "../frontDoorManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  FrontendEndpoint,
  FrontendEndpointsListByFrontDoorNextOptionalParams,
  FrontendEndpointsListByFrontDoorOptionalParams,
  FrontendEndpointsListByFrontDoorResponse,
  FrontendEndpointsGetOptionalParams,
  FrontendEndpointsGetResponse,
  CustomHttpsConfiguration,
  FrontendEndpointsEnableHttpsOptionalParams,
  FrontendEndpointsDisableHttpsOptionalParams,
  FrontendEndpointsListByFrontDoorNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing FrontendEndpoints operations. */
export class FrontendEndpointsImpl implements FrontendEndpoints {
  private readonly client: FrontDoorManagementClient;

  /**
   * Initialize a new instance of the class FrontendEndpoints class.
   * @param client Reference to the service client
   */
  constructor(client: FrontDoorManagementClient) {
    this.client = client;
  }

  /**
   * Lists all of the frontend endpoints within a Front Door.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param options The options parameters.
   */
  public listByFrontDoor(
    resourceGroupName: string,
    frontDoorName: string,
    options?: FrontendEndpointsListByFrontDoorOptionalParams
  ): PagedAsyncIterableIterator<FrontendEndpoint> {
    const iter = this.listByFrontDoorPagingAll(
      resourceGroupName,
      frontDoorName,
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
        return this.listByFrontDoorPagingPage(
          resourceGroupName,
          frontDoorName,
          options
        );
      }
    };
  }

  private async *listByFrontDoorPagingPage(
    resourceGroupName: string,
    frontDoorName: string,
    options?: FrontendEndpointsListByFrontDoorOptionalParams
  ): AsyncIterableIterator<FrontendEndpoint[]> {
    let result = await this._listByFrontDoor(
      resourceGroupName,
      frontDoorName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByFrontDoorNext(
        resourceGroupName,
        frontDoorName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByFrontDoorPagingAll(
    resourceGroupName: string,
    frontDoorName: string,
    options?: FrontendEndpointsListByFrontDoorOptionalParams
  ): AsyncIterableIterator<FrontendEndpoint> {
    for await (const page of this.listByFrontDoorPagingPage(
      resourceGroupName,
      frontDoorName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all of the frontend endpoints within a Front Door.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param options The options parameters.
   */
  private _listByFrontDoor(
    resourceGroupName: string,
    frontDoorName: string,
    options?: FrontendEndpointsListByFrontDoorOptionalParams
  ): Promise<FrontendEndpointsListByFrontDoorResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, frontDoorName, options },
      listByFrontDoorOperationSpec
    );
  }

  /**
   * Gets a Frontend endpoint with the specified name within the specified Front Door.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param frontendEndpointName Name of the Frontend endpoint which is unique within the Front Door.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    frontDoorName: string,
    frontendEndpointName: string,
    options?: FrontendEndpointsGetOptionalParams
  ): Promise<FrontendEndpointsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, frontDoorName, frontendEndpointName, options },
      getOperationSpec
    );
  }

  /**
   * Enables a frontendEndpoint for HTTPS traffic
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param frontendEndpointName Name of the Frontend endpoint which is unique within the Front Door.
   * @param customHttpsConfiguration The configuration specifying how to enable HTTPS
   * @param options The options parameters.
   */
  async beginEnableHttps(
    resourceGroupName: string,
    frontDoorName: string,
    frontendEndpointName: string,
    customHttpsConfiguration: CustomHttpsConfiguration,
    options?: FrontendEndpointsEnableHttpsOptionalParams
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
        frontDoorName,
        frontendEndpointName,
        customHttpsConfiguration,
        options
      },
      enableHttpsOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Enables a frontendEndpoint for HTTPS traffic
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param frontendEndpointName Name of the Frontend endpoint which is unique within the Front Door.
   * @param customHttpsConfiguration The configuration specifying how to enable HTTPS
   * @param options The options parameters.
   */
  async beginEnableHttpsAndWait(
    resourceGroupName: string,
    frontDoorName: string,
    frontendEndpointName: string,
    customHttpsConfiguration: CustomHttpsConfiguration,
    options?: FrontendEndpointsEnableHttpsOptionalParams
  ): Promise<void> {
    const poller = await this.beginEnableHttps(
      resourceGroupName,
      frontDoorName,
      frontendEndpointName,
      customHttpsConfiguration,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Disables a frontendEndpoint for HTTPS traffic
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param frontendEndpointName Name of the Frontend endpoint which is unique within the Front Door.
   * @param options The options parameters.
   */
  async beginDisableHttps(
    resourceGroupName: string,
    frontDoorName: string,
    frontendEndpointName: string,
    options?: FrontendEndpointsDisableHttpsOptionalParams
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
      { resourceGroupName, frontDoorName, frontendEndpointName, options },
      disableHttpsOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Disables a frontendEndpoint for HTTPS traffic
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param frontendEndpointName Name of the Frontend endpoint which is unique within the Front Door.
   * @param options The options parameters.
   */
  async beginDisableHttpsAndWait(
    resourceGroupName: string,
    frontDoorName: string,
    frontendEndpointName: string,
    options?: FrontendEndpointsDisableHttpsOptionalParams
  ): Promise<void> {
    const poller = await this.beginDisableHttps(
      resourceGroupName,
      frontDoorName,
      frontendEndpointName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByFrontDoorNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param frontDoorName Name of the Front Door which is globally unique.
   * @param nextLink The nextLink from the previous successful call to the ListByFrontDoor method.
   * @param options The options parameters.
   */
  private _listByFrontDoorNext(
    resourceGroupName: string,
    frontDoorName: string,
    nextLink: string,
    options?: FrontendEndpointsListByFrontDoorNextOptionalParams
  ): Promise<FrontendEndpointsListByFrontDoorNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, frontDoorName, nextLink, options },
      listByFrontDoorNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByFrontDoorOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/frontendEndpoints",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FrontendEndpointsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.frontDoorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/frontendEndpoints/{frontendEndpointName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FrontendEndpoint
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.frontDoorName,
    Parameters.frontendEndpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const enableHttpsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/frontendEndpoints/{frontendEndpointName}/enableHttps",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.customHttpsConfiguration,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.frontDoorName,
    Parameters.frontendEndpointName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const disableHttpsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/frontDoors/{frontDoorName}/frontendEndpoints/{frontendEndpointName}/disableHttps",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.frontDoorName,
    Parameters.frontendEndpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByFrontDoorNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FrontendEndpointsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.frontDoorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
