/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DataPools } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AdpManagementClient } from "../adpManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  DataPool,
  DataPoolsListNextOptionalParams,
  DataPoolsListOptionalParams,
  DataPoolsListResponse,
  DataPoolsGetOptionalParams,
  DataPoolsGetResponse,
  DataPoolsUpdateOptionalParams,
  DataPoolsUpdateResponse,
  DataPoolsCreateOrUpdateOptionalParams,
  DataPoolsCreateOrUpdateResponse,
  DataPoolsDeleteOptionalParams,
  DataPoolsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DataPools operations. */
export class DataPoolsImpl implements DataPools {
  private readonly client: AdpManagementClient;

  /**
   * Initialize a new instance of the class DataPools class.
   * @param client Reference to the service client
   */
  constructor(client: AdpManagementClient) {
    this.client = client;
  }

  /**
   * Lists the data pools under the ADP account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the ADP account
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    accountName: string,
    options?: DataPoolsListOptionalParams
  ): PagedAsyncIterableIterator<DataPool> {
    const iter = this.listPagingAll(resourceGroupName, accountName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, accountName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: DataPoolsListOptionalParams
  ): AsyncIterableIterator<DataPool[]> {
    let result = await this._list(resourceGroupName, accountName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        accountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: DataPoolsListOptionalParams
  ): AsyncIterableIterator<DataPool> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the data pools under the ADP account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the ADP account
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    accountName: string,
    options?: DataPoolsListOptionalParams
  ): Promise<DataPoolsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listOperationSpec
    );
  }

  /**
   * Gets the properties of a Data Pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the ADP account
   * @param dataPoolName The name of the Data Pool
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    dataPoolName: string,
    options?: DataPoolsGetOptionalParams
  ): Promise<DataPoolsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, dataPoolName, options },
      getOperationSpec
    );
  }

  /**
   * Updates the properties of an existing Data Pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the ADP account
   * @param dataPoolName The name of the Data Pool
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    accountName: string,
    dataPoolName: string,
    options?: DataPoolsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DataPoolsUpdateResponse>,
      DataPoolsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DataPoolsUpdateResponse> => {
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
      { resourceGroupName, accountName, dataPoolName, options },
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
   * Updates the properties of an existing Data Pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the ADP account
   * @param dataPoolName The name of the Data Pool
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    dataPoolName: string,
    options?: DataPoolsUpdateOptionalParams
  ): Promise<DataPoolsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      accountName,
      dataPoolName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Creates or updates a Data Pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the ADP account
   * @param dataPoolName The name of the Data Pool
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    accountName: string,
    dataPoolName: string,
    options?: DataPoolsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DataPoolsCreateOrUpdateResponse>,
      DataPoolsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DataPoolsCreateOrUpdateResponse> => {
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
      { resourceGroupName, accountName, dataPoolName, options },
      createOrUpdateOperationSpec
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
   * Creates or updates a Data Pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the ADP account
   * @param dataPoolName The name of the Data Pool
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    dataPoolName: string,
    options?: DataPoolsCreateOrUpdateOptionalParams
  ): Promise<DataPoolsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      accountName,
      dataPoolName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a Data Pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the ADP account
   * @param dataPoolName The name of the Data Pool
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    accountName: string,
    dataPoolName: string,
    options?: DataPoolsDeleteOptionalParams
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
      { resourceGroupName, accountName, dataPoolName, options },
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
   * Deletes a Data Pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the ADP account
   * @param dataPoolName The name of the Data Pool
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    dataPoolName: string,
    options?: DataPoolsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      accountName,
      dataPoolName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of the ADP account
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    accountName: string,
    nextLink: string,
    options?: DataPoolsListNextOptionalParams
  ): Promise<DataPoolsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AutonomousDevelopmentPlatform/accounts/{accountName}/dataPools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataPoolList
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
    Parameters.accountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AutonomousDevelopmentPlatform/accounts/{accountName}/dataPools/{dataPoolName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataPool
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
    Parameters.accountName,
    Parameters.dataPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AutonomousDevelopmentPlatform/accounts/{accountName}/dataPools/{dataPoolName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DataPool
    },
    201: {
      bodyMapper: Mappers.DataPool
    },
    202: {
      bodyMapper: Mappers.DataPool
    },
    204: {
      bodyMapper: Mappers.DataPool
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.dataPoolName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AutonomousDevelopmentPlatform/accounts/{accountName}/dataPools/{dataPoolName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DataPool
    },
    201: {
      bodyMapper: Mappers.DataPool
    },
    202: {
      bodyMapper: Mappers.DataPool
    },
    204: {
      bodyMapper: Mappers.DataPool
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
    Parameters.accountName,
    Parameters.dataPoolName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AutonomousDevelopmentPlatform/accounts/{accountName}/dataPools/{dataPoolName}",
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
    Parameters.accountName,
    Parameters.dataPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataPoolList
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
    Parameters.accountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
