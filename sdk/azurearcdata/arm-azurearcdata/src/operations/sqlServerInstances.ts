/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SqlServerInstances } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureArcDataManagementClient } from "../azureArcDataManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  SqlServerInstance,
  SqlServerInstancesListNextOptionalParams,
  SqlServerInstancesListOptionalParams,
  SqlServerInstancesListByResourceGroupNextOptionalParams,
  SqlServerInstancesListByResourceGroupOptionalParams,
  SqlServerInstancesListResponse,
  SqlServerInstancesListByResourceGroupResponse,
  SqlServerInstancesGetOptionalParams,
  SqlServerInstancesGetResponse,
  SqlServerInstancesCreateOptionalParams,
  SqlServerInstancesCreateResponse,
  SqlServerInstancesDeleteOptionalParams,
  SqlServerInstanceUpdate,
  SqlServerInstancesUpdateOptionalParams,
  SqlServerInstancesUpdateResponse,
  SqlServerInstancesListNextResponse,
  SqlServerInstancesListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SqlServerInstances operations. */
export class SqlServerInstancesImpl implements SqlServerInstances {
  private readonly client: AzureArcDataManagementClient;

  /**
   * Initialize a new instance of the class SqlServerInstances class.
   * @param client Reference to the service client
   */
  constructor(client: AzureArcDataManagementClient) {
    this.client = client;
  }

  /**
   * List sqlServerInstance resources in the subscription
   * @param options The options parameters.
   */
  public list(
    options?: SqlServerInstancesListOptionalParams
  ): PagedAsyncIterableIterator<SqlServerInstance> {
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
    options?: SqlServerInstancesListOptionalParams
  ): AsyncIterableIterator<SqlServerInstance[]> {
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
    options?: SqlServerInstancesListOptionalParams
  ): AsyncIterableIterator<SqlServerInstance> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets all sqlServerInstances in a resource group.
   * @param resourceGroupName The name of the Azure resource group
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: SqlServerInstancesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<SqlServerInstance> {
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
    options?: SqlServerInstancesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<SqlServerInstance[]> {
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
    options?: SqlServerInstancesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<SqlServerInstance> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List sqlServerInstance resources in the subscription
   * @param options The options parameters.
   */
  private _list(
    options?: SqlServerInstancesListOptionalParams
  ): Promise<SqlServerInstancesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Gets all sqlServerInstances in a resource group.
   * @param resourceGroupName The name of the Azure resource group
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: SqlServerInstancesListByResourceGroupOptionalParams
  ): Promise<SqlServerInstancesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Retrieves a SQL Server Instance resource
   * @param resourceGroupName The name of the Azure resource group
   * @param sqlServerInstanceName Name of SQL Server Instance
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    sqlServerInstanceName: string,
    options?: SqlServerInstancesGetOptionalParams
  ): Promise<SqlServerInstancesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, sqlServerInstanceName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or replaces a SQL Server Instance resource
   * @param resourceGroupName The name of the Azure resource group
   * @param sqlServerInstanceName Name of SQL Server Instance
   * @param sqlServerInstance The SQL Server Instance to be created or updated.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    sqlServerInstanceName: string,
    sqlServerInstance: SqlServerInstance,
    options?: SqlServerInstancesCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SqlServerInstancesCreateResponse>,
      SqlServerInstancesCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SqlServerInstancesCreateResponse> => {
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
      { resourceGroupName, sqlServerInstanceName, sqlServerInstance, options },
      createOperationSpec
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
   * Creates or replaces a SQL Server Instance resource
   * @param resourceGroupName The name of the Azure resource group
   * @param sqlServerInstanceName Name of SQL Server Instance
   * @param sqlServerInstance The SQL Server Instance to be created or updated.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    sqlServerInstanceName: string,
    sqlServerInstance: SqlServerInstance,
    options?: SqlServerInstancesCreateOptionalParams
  ): Promise<SqlServerInstancesCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      sqlServerInstanceName,
      sqlServerInstance,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a SQL Server Instance resource
   * @param resourceGroupName The name of the Azure resource group
   * @param sqlServerInstanceName Name of SQL Server Instance
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    sqlServerInstanceName: string,
    options?: SqlServerInstancesDeleteOptionalParams
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
      { resourceGroupName, sqlServerInstanceName, options },
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
   * Deletes a SQL Server Instance resource
   * @param resourceGroupName The name of the Azure resource group
   * @param sqlServerInstanceName Name of SQL Server Instance
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    sqlServerInstanceName: string,
    options?: SqlServerInstancesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      sqlServerInstanceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates a SQL Server Instance resource
   * @param resourceGroupName The name of the Azure resource group
   * @param sqlServerInstanceName Name of SQL Server Instance
   * @param parameters The SQL Server Instance.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    sqlServerInstanceName: string,
    parameters: SqlServerInstanceUpdate,
    options?: SqlServerInstancesUpdateOptionalParams
  ): Promise<SqlServerInstancesUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, sqlServerInstanceName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: SqlServerInstancesListNextOptionalParams
  ): Promise<SqlServerInstancesListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the Azure resource group
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: SqlServerInstancesListByResourceGroupNextOptionalParams
  ): Promise<SqlServerInstancesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.AzureArcData/sqlServerInstances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlServerInstanceListResult
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
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlServerInstanceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlServerInstance
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
    Parameters.sqlServerInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SqlServerInstance
    },
    201: {
      bodyMapper: Mappers.SqlServerInstance
    },
    202: {
      bodyMapper: Mappers.SqlServerInstance
    },
    204: {
      bodyMapper: Mappers.SqlServerInstance
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.sqlServerInstance,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.sqlServerInstanceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}",
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
    Parameters.sqlServerInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureArcData/sqlServerInstances/{sqlServerInstanceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SqlServerInstance
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.sqlServerInstanceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlServerInstanceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlServerInstanceListResult
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
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
