/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AccessConnectors } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureDatabricksManagementClient } from "../azureDatabricksManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  AccessConnector,
  AccessConnectorsListByResourceGroupNextOptionalParams,
  AccessConnectorsListByResourceGroupOptionalParams,
  AccessConnectorsListBySubscriptionNextOptionalParams,
  AccessConnectorsListBySubscriptionOptionalParams,
  AccessConnectorsDeleteOptionalParams,
  AccessConnectorsCreateOrUpdateOptionalParams,
  AccessConnectorsCreateOrUpdateResponse,
  AccessConnectorUpdate,
  AccessConnectorsUpdateOptionalParams,
  AccessConnectorsUpdateResponse,
  AccessConnectorsListByResourceGroupResponse,
  AccessConnectorsListBySubscriptionResponse,
  AccessConnectorsListByResourceGroupNextResponse,
  AccessConnectorsListBySubscriptionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AccessConnectors operations. */
export class AccessConnectorsImpl implements AccessConnectors {
  private readonly client: AzureDatabricksManagementClient;

  /**
   * Initialize a new instance of the class AccessConnectors class.
   * @param client Reference to the service client
   */
  constructor(client: AzureDatabricksManagementClient) {
    this.client = client;
  }

  /**
   * Gets all the azure databricks accessConnectors within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: AccessConnectorsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<AccessConnector> {
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
    options?: AccessConnectorsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<AccessConnector[]> {
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
    options?: AccessConnectorsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<AccessConnector> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all the azure databricks accessConnectors within a subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: AccessConnectorsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<AccessConnector> {
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
    options?: AccessConnectorsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<AccessConnector[]> {
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
    options?: AccessConnectorsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<AccessConnector> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Deletes the azure databricks accessConnector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectorName The name of the azure databricks accessConnector.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    connectorName: string,
    options?: AccessConnectorsDeleteOptionalParams
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
      { resourceGroupName, connectorName, options },
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
   * Deletes the azure databricks accessConnector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectorName The name of the azure databricks accessConnector.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    connectorName: string,
    options?: AccessConnectorsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      connectorName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Creates or updates azure databricks accessConnector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectorName The name of the azure databricks accessConnector.
   * @param parameters Parameters supplied to the create or update an azure databricks accessConnector.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    connectorName: string,
    parameters: AccessConnector,
    options?: AccessConnectorsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AccessConnectorsCreateOrUpdateResponse>,
      AccessConnectorsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AccessConnectorsCreateOrUpdateResponse> => {
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
      { resourceGroupName, connectorName, parameters, options },
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
   * Creates or updates azure databricks accessConnector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectorName The name of the azure databricks accessConnector.
   * @param parameters Parameters supplied to the create or update an azure databricks accessConnector.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    connectorName: string,
    parameters: AccessConnector,
    options?: AccessConnectorsCreateOrUpdateOptionalParams
  ): Promise<AccessConnectorsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      connectorName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an azure databricks accessConnector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectorName The name of the azure databricks accessConnector.
   * @param parameters The update to the azure databricks accessConnector.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    connectorName: string,
    parameters: AccessConnectorUpdate,
    options?: AccessConnectorsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AccessConnectorsUpdateResponse>,
      AccessConnectorsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AccessConnectorsUpdateResponse> => {
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
      { resourceGroupName, connectorName, parameters, options },
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
   * Updates an azure databricks accessConnector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectorName The name of the azure databricks accessConnector.
   * @param parameters The update to the azure databricks accessConnector.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    connectorName: string,
    parameters: AccessConnectorUpdate,
    options?: AccessConnectorsUpdateOptionalParams
  ): Promise<AccessConnectorsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      connectorName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets all the azure databricks accessConnectors within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: AccessConnectorsListByResourceGroupOptionalParams
  ): Promise<AccessConnectorsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Gets all the azure databricks accessConnectors within a subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: AccessConnectorsListBySubscriptionOptionalParams
  ): Promise<AccessConnectorsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
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
    options?: AccessConnectorsListByResourceGroupNextOptionalParams
  ): Promise<AccessConnectorsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: AccessConnectorsListBySubscriptionNextOptionalParams
  ): Promise<AccessConnectorsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/accessConnectors/{connectorName}",
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
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.connectorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/accessConnectors/{connectorName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AccessConnector
    },
    201: {
      bodyMapper: Mappers.AccessConnector
    },
    202: {
      bodyMapper: Mappers.AccessConnector
    },
    204: {
      bodyMapper: Mappers.AccessConnector
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.connectorName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/accessConnectors/{connectorName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AccessConnector
    },
    201: {
      bodyMapper: Mappers.AccessConnector
    },
    202: {
      bodyMapper: Mappers.AccessConnector
    },
    204: {
      bodyMapper: Mappers.AccessConnector
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.connectorName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/accessConnectors",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessConnectorListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
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
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Databricks/accessConnectors",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessConnectorListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
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
      bodyMapper: Mappers.AccessConnectorListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
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
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessConnectorListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
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
