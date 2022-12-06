/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { OriginGroups } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CdnManagementClient } from "../cdnManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  OriginGroup,
  OriginGroupsListByEndpointNextOptionalParams,
  OriginGroupsListByEndpointOptionalParams,
  OriginGroupsListByEndpointResponse,
  OriginGroupsGetOptionalParams,
  OriginGroupsGetResponse,
  OriginGroupsCreateOptionalParams,
  OriginGroupsCreateResponse,
  OriginGroupUpdateParameters,
  OriginGroupsUpdateOptionalParams,
  OriginGroupsUpdateResponse,
  OriginGroupsDeleteOptionalParams,
  OriginGroupsListByEndpointNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing OriginGroups operations. */
export class OriginGroupsImpl implements OriginGroups {
  private readonly client: CdnManagementClient;

  /**
   * Initialize a new instance of the class OriginGroups class.
   * @param client Reference to the service client
   */
  constructor(client: CdnManagementClient) {
    this.client = client;
  }

  /**
   * Lists all of the existing origin groups within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param options The options parameters.
   */
  public listByEndpoint(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: OriginGroupsListByEndpointOptionalParams
  ): PagedAsyncIterableIterator<OriginGroup> {
    const iter = this.listByEndpointPagingAll(
      resourceGroupName,
      profileName,
      endpointName,
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
        return this.listByEndpointPagingPage(
          resourceGroupName,
          profileName,
          endpointName,
          options
        );
      }
    };
  }

  private async *listByEndpointPagingPage(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: OriginGroupsListByEndpointOptionalParams
  ): AsyncIterableIterator<OriginGroup[]> {
    let result = await this._listByEndpoint(
      resourceGroupName,
      profileName,
      endpointName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByEndpointNext(
        resourceGroupName,
        profileName,
        endpointName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByEndpointPagingAll(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: OriginGroupsListByEndpointOptionalParams
  ): AsyncIterableIterator<OriginGroup> {
    for await (const page of this.listByEndpointPagingPage(
      resourceGroupName,
      profileName,
      endpointName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all of the existing origin groups within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param options The options parameters.
   */
  private _listByEndpoint(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: OriginGroupsListByEndpointOptionalParams
  ): Promise<OriginGroupsListByEndpointResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, endpointName, options },
      listByEndpointOperationSpec
    );
  }

  /**
   * Gets an existing origin group within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param originGroupName Name of the origin group which is unique within the endpoint.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    originGroupName: string,
    options?: OriginGroupsGetOptionalParams
  ): Promise<OriginGroupsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        endpointName,
        originGroupName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Creates a new origin group within the specified endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param originGroupName Name of the origin group which is unique within the endpoint.
   * @param originGroup Origin group properties
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    originGroupName: string,
    originGroup: OriginGroup,
    options?: OriginGroupsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<OriginGroupsCreateResponse>,
      OriginGroupsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<OriginGroupsCreateResponse> => {
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
        profileName,
        endpointName,
        originGroupName,
        originGroup,
        options
      },
      createOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a new origin group within the specified endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param originGroupName Name of the origin group which is unique within the endpoint.
   * @param originGroup Origin group properties
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    originGroupName: string,
    originGroup: OriginGroup,
    options?: OriginGroupsCreateOptionalParams
  ): Promise<OriginGroupsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      profileName,
      endpointName,
      originGroupName,
      originGroup,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an existing origin group within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param originGroupName Name of the origin group which is unique within the endpoint.
   * @param originGroupUpdateProperties Origin group properties
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    originGroupName: string,
    originGroupUpdateProperties: OriginGroupUpdateParameters,
    options?: OriginGroupsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<OriginGroupsUpdateResponse>,
      OriginGroupsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<OriginGroupsUpdateResponse> => {
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
        profileName,
        endpointName,
        originGroupName,
        originGroupUpdateProperties,
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
   * Updates an existing origin group within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param originGroupName Name of the origin group which is unique within the endpoint.
   * @param originGroupUpdateProperties Origin group properties
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    originGroupName: string,
    originGroupUpdateProperties: OriginGroupUpdateParameters,
    options?: OriginGroupsUpdateOptionalParams
  ): Promise<OriginGroupsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      profileName,
      endpointName,
      originGroupName,
      originGroupUpdateProperties,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an existing origin group within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param originGroupName Name of the origin group which is unique within the endpoint.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    originGroupName: string,
    options?: OriginGroupsDeleteOptionalParams
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
        profileName,
        endpointName,
        originGroupName,
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
   * Deletes an existing origin group within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param originGroupName Name of the origin group which is unique within the endpoint.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    originGroupName: string,
    options?: OriginGroupsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      profileName,
      endpointName,
      originGroupName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByEndpointNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param nextLink The nextLink from the previous successful call to the ListByEndpoint method.
   * @param options The options parameters.
   */
  private _listByEndpointNext(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    nextLink: string,
    options?: OriginGroupsListByEndpointNextOptionalParams
  ): Promise<OriginGroupsListByEndpointNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, endpointName, nextLink, options },
      listByEndpointNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByEndpointOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/originGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OriginGroupListResult
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
    Parameters.profileName1,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/originGroups/{originGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OriginGroup
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
    Parameters.profileName1,
    Parameters.endpointName,
    Parameters.originGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/originGroups/{originGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.OriginGroup
    },
    201: {
      bodyMapper: Mappers.OriginGroup
    },
    202: {
      bodyMapper: Mappers.OriginGroup
    },
    204: {
      bodyMapper: Mappers.OriginGroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.originGroup1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName1,
    Parameters.endpointName,
    Parameters.originGroupName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/originGroups/{originGroupName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.OriginGroup
    },
    201: {
      bodyMapper: Mappers.OriginGroup
    },
    202: {
      bodyMapper: Mappers.OriginGroup
    },
    204: {
      bodyMapper: Mappers.OriginGroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.originGroupUpdateProperties1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName1,
    Parameters.endpointName,
    Parameters.originGroupName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/originGroups/{originGroupName}",
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
    Parameters.profileName1,
    Parameters.endpointName,
    Parameters.originGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByEndpointNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OriginGroupListResult
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
    Parameters.profileName1,
    Parameters.nextLink,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
