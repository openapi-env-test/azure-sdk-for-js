/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ConnectedEnvironments } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerAppsAPIClient } from "../containerAppsAPIClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ConnectedEnvironment,
  ConnectedEnvironmentsListBySubscriptionNextOptionalParams,
  ConnectedEnvironmentsListBySubscriptionOptionalParams,
  ConnectedEnvironmentsListByResourceGroupNextOptionalParams,
  ConnectedEnvironmentsListByResourceGroupOptionalParams,
  ConnectedEnvironmentsListBySubscriptionResponse,
  ConnectedEnvironmentsListByResourceGroupResponse,
  ConnectedEnvironmentsGetOptionalParams,
  ConnectedEnvironmentsGetResponse,
  ConnectedEnvironmentsCreateOrUpdateOptionalParams,
  ConnectedEnvironmentsCreateOrUpdateResponse,
  ConnectedEnvironmentsDeleteOptionalParams,
  ConnectedEnvironmentsUpdateOptionalParams,
  ConnectedEnvironmentsUpdateResponse,
  CheckNameAvailabilityRequest,
  ConnectedEnvironmentsCheckNameAvailabilityOptionalParams,
  ConnectedEnvironmentsCheckNameAvailabilityResponse,
  ConnectedEnvironmentsListBySubscriptionNextResponse,
  ConnectedEnvironmentsListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ConnectedEnvironments operations. */
export class ConnectedEnvironmentsImpl implements ConnectedEnvironments {
  private readonly client: ContainerAppsAPIClient;

  /**
   * Initialize a new instance of the class ConnectedEnvironments class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerAppsAPIClient) {
    this.client = client;
  }

  /**
   * Get all connectedEnvironments for a subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: ConnectedEnvironmentsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<ConnectedEnvironment> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: ConnectedEnvironmentsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<ConnectedEnvironment[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: ConnectedEnvironmentsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<ConnectedEnvironment> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get all connectedEnvironments in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ConnectedEnvironmentsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ConnectedEnvironment> {
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
    options?: ConnectedEnvironmentsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ConnectedEnvironment[]> {
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
    options?: ConnectedEnvironmentsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ConnectedEnvironment> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get all connectedEnvironments for a subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: ConnectedEnvironmentsListBySubscriptionOptionalParams
  ): Promise<ConnectedEnvironmentsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Get all connectedEnvironments in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ConnectedEnvironmentsListByResourceGroupOptionalParams
  ): Promise<ConnectedEnvironmentsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Get the properties of an connectedEnvironment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the connectedEnvironment.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    options?: ConnectedEnvironmentsGetOptionalParams
  ): Promise<ConnectedEnvironmentsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, connectedEnvironmentName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates an connectedEnvironment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the connectedEnvironment.
   * @param environmentEnvelope Configuration details of the connectedEnvironment.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    environmentEnvelope: ConnectedEnvironment,
    options?: ConnectedEnvironmentsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ConnectedEnvironmentsCreateOrUpdateResponse>,
      ConnectedEnvironmentsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ConnectedEnvironmentsCreateOrUpdateResponse> => {
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
        connectedEnvironmentName,
        environmentEnvelope,
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
   * Creates or updates an connectedEnvironment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the connectedEnvironment.
   * @param environmentEnvelope Configuration details of the connectedEnvironment.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    environmentEnvelope: ConnectedEnvironment,
    options?: ConnectedEnvironmentsCreateOrUpdateOptionalParams
  ): Promise<ConnectedEnvironmentsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      connectedEnvironmentName,
      environmentEnvelope,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete an connectedEnvironment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the connectedEnvironment.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    options?: ConnectedEnvironmentsDeleteOptionalParams
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
      { resourceGroupName, connectedEnvironmentName, options },
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
   * Delete an connectedEnvironment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the connectedEnvironment.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    options?: ConnectedEnvironmentsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      connectedEnvironmentName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Patches a Managed Environment. Only patching of tags is supported currently
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the connectedEnvironment.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    options?: ConnectedEnvironmentsUpdateOptionalParams
  ): Promise<ConnectedEnvironmentsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, connectedEnvironmentName, options },
      updateOperationSpec
    );
  }

  /**
   * Checks if resource connectedEnvironmentName is available.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectedEnvironmentName Name of the Managed Environment.
   * @param checkNameAvailabilityRequest The check connectedEnvironmentName availability request.
   * @param options The options parameters.
   */
  checkNameAvailability(
    resourceGroupName: string,
    connectedEnvironmentName: string,
    checkNameAvailabilityRequest: CheckNameAvailabilityRequest,
    options?: ConnectedEnvironmentsCheckNameAvailabilityOptionalParams
  ): Promise<ConnectedEnvironmentsCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        connectedEnvironmentName,
        checkNameAvailabilityRequest,
        options
      },
      checkNameAvailabilityOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: ConnectedEnvironmentsListBySubscriptionNextOptionalParams
  ): Promise<ConnectedEnvironmentsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ConnectedEnvironmentsListByResourceGroupNextOptionalParams
  ): Promise<ConnectedEnvironmentsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.App/connectedEnvironments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConnectedEnvironmentCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConnectedEnvironmentCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConnectedEnvironment
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.connectedEnvironmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ConnectedEnvironment
    },
    201: {
      bodyMapper: Mappers.ConnectedEnvironment
    },
    202: {
      bodyMapper: Mappers.ConnectedEnvironment
    },
    204: {
      bodyMapper: Mappers.ConnectedEnvironment
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.environmentEnvelope1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.connectedEnvironmentName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.connectedEnvironmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ConnectedEnvironment
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.connectedEnvironmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/connectedEnvironments/{connectedEnvironmentName}/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityResponse
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.checkNameAvailabilityRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.connectedEnvironmentName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConnectedEnvironmentCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
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
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConnectedEnvironmentCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
