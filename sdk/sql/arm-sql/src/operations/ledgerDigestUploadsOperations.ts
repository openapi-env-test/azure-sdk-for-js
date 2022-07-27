/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { LedgerDigestUploadsOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  LedgerDigestUploads,
  LedgerDigestUploadsListByDatabaseNextOptionalParams,
  LedgerDigestUploadsListByDatabaseOptionalParams,
  LedgerDigestUploadsName,
  LedgerDigestUploadsGetOptionalParams,
  LedgerDigestUploadsGetResponse,
  LedgerDigestUploadsCreateOrUpdateOptionalParams,
  LedgerDigestUploadsCreateOrUpdateResponse,
  LedgerDigestUploadsListByDatabaseResponse,
  LedgerDigestUploadsDisableOptionalParams,
  LedgerDigestUploadsDisableResponse,
  LedgerDigestUploadsListByDatabaseNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing LedgerDigestUploadsOperations operations. */
export class LedgerDigestUploadsOperationsImpl
  implements LedgerDigestUploadsOperations {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class LedgerDigestUploadsOperations class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets all ledger digest upload settings on a database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  public listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: LedgerDigestUploadsListByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<LedgerDigestUploads> {
    const iter = this.listByDatabasePagingAll(
      resourceGroupName,
      serverName,
      databaseName,
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
        return this.listByDatabasePagingPage(
          resourceGroupName,
          serverName,
          databaseName,
          options
        );
      }
    };
  }

  private async *listByDatabasePagingPage(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: LedgerDigestUploadsListByDatabaseOptionalParams
  ): AsyncIterableIterator<LedgerDigestUploads[]> {
    let result = await this._listByDatabase(
      resourceGroupName,
      serverName,
      databaseName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByDatabaseNext(
        resourceGroupName,
        serverName,
        databaseName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByDatabasePagingAll(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: LedgerDigestUploadsListByDatabaseOptionalParams
  ): AsyncIterableIterator<LedgerDigestUploads> {
    for await (const page of this.listByDatabasePagingPage(
      resourceGroupName,
      serverName,
      databaseName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the current ledger digest upload configuration for a database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param ledgerDigestUploads
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    ledgerDigestUploads: LedgerDigestUploadsName,
    options?: LedgerDigestUploadsGetOptionalParams
  ): Promise<LedgerDigestUploadsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        ledgerDigestUploads,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Enables upload ledger digests to an Azure Storage account or an Azure Confidential Ledger instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param ledgerDigestUploads
   * @param parameters Azure SQL Database ledger digest upload settings.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    ledgerDigestUploads: LedgerDigestUploadsName,
    parameters: LedgerDigestUploads,
    options?: LedgerDigestUploadsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LedgerDigestUploadsCreateOrUpdateResponse>,
      LedgerDigestUploadsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<LedgerDigestUploadsCreateOrUpdateResponse> => {
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
        serverName,
        databaseName,
        ledgerDigestUploads,
        parameters,
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
   * Enables upload ledger digests to an Azure Storage account or an Azure Confidential Ledger instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param ledgerDigestUploads
   * @param parameters Azure SQL Database ledger digest upload settings.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    ledgerDigestUploads: LedgerDigestUploadsName,
    parameters: LedgerDigestUploads,
    options?: LedgerDigestUploadsCreateOrUpdateOptionalParams
  ): Promise<LedgerDigestUploadsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serverName,
      databaseName,
      ledgerDigestUploads,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets all ledger digest upload settings on a database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  private _listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: LedgerDigestUploadsListByDatabaseOptionalParams
  ): Promise<LedgerDigestUploadsListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, databaseName, options },
      listByDatabaseOperationSpec
    );
  }

  /**
   * Disables uploading ledger digests to an Azure Storage account or an Azure Confidential Ledger
   * instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param ledgerDigestUploads
   * @param options The options parameters.
   */
  async beginDisable(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    ledgerDigestUploads: LedgerDigestUploadsName,
    options?: LedgerDigestUploadsDisableOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<LedgerDigestUploadsDisableResponse>,
      LedgerDigestUploadsDisableResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<LedgerDigestUploadsDisableResponse> => {
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
        serverName,
        databaseName,
        ledgerDigestUploads,
        options
      },
      disableOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Disables uploading ledger digests to an Azure Storage account or an Azure Confidential Ledger
   * instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param ledgerDigestUploads
   * @param options The options parameters.
   */
  async beginDisableAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    ledgerDigestUploads: LedgerDigestUploadsName,
    options?: LedgerDigestUploadsDisableOptionalParams
  ): Promise<LedgerDigestUploadsDisableResponse> {
    const poller = await this.beginDisable(
      resourceGroupName,
      serverName,
      databaseName,
      ledgerDigestUploads,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByDatabaseNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param nextLink The nextLink from the previous successful call to the ListByDatabase method.
   * @param options The options parameters.
   */
  private _listByDatabaseNext(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    nextLink: string,
    options?: LedgerDigestUploadsListByDatabaseNextOptionalParams
  ): Promise<LedgerDigestUploadsListByDatabaseNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, databaseName, nextLink, options },
      listByDatabaseNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/ledgerDigestUploads/{ledgerDigestUploads}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LedgerDigestUploads
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.ledgerDigestUploads
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/ledgerDigestUploads/{ledgerDigestUploads}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.LedgerDigestUploads
    },
    201: {
      bodyMapper: Mappers.LedgerDigestUploads
    },
    202: {
      bodyMapper: Mappers.LedgerDigestUploads
    },
    204: {
      bodyMapper: Mappers.LedgerDigestUploads
    },
    default: {}
  },
  requestBody: Parameters.parameters70,
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.ledgerDigestUploads
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByDatabaseOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/ledgerDigestUploads",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LedgerDigestUploadsListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const disableOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/ledgerDigestUploads/{ledgerDigestUploads}/disable",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.LedgerDigestUploads
    },
    201: {
      bodyMapper: Mappers.LedgerDigestUploads
    },
    202: {
      bodyMapper: Mappers.LedgerDigestUploads
    },
    204: {
      bodyMapper: Mappers.LedgerDigestUploads
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.ledgerDigestUploads
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByDatabaseNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LedgerDigestUploadsListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
