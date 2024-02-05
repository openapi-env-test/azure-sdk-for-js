/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { TableResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClient } from "../cosmosDBManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  TableGetResults,
  TableResourcesListTablesOptionalParams,
  TableResourcesListTablesResponse,
  TableResourcesGetTableOptionalParams,
  TableResourcesGetTableResponse,
  TableCreateUpdateParameters,
  TableResourcesCreateUpdateTableOptionalParams,
  TableResourcesCreateUpdateTableResponse,
  TableResourcesDeleteTableOptionalParams,
  TableResourcesDeleteTableResponse,
  TableResourcesGetTableThroughputOptionalParams,
  TableResourcesGetTableThroughputResponse,
  ThroughputSettingsUpdateParameters,
  TableResourcesUpdateTableThroughputOptionalParams,
  TableResourcesUpdateTableThroughputResponse,
  TableResourcesMigrateTableToAutoscaleOptionalParams,
  TableResourcesMigrateTableToAutoscaleResponse,
  TableResourcesMigrateTableToManualThroughputOptionalParams,
  TableResourcesMigrateTableToManualThroughputResponse,
  ContinuousBackupRestoreLocation,
  TableResourcesRetrieveContinuousBackupInformationOptionalParams,
  TableResourcesRetrieveContinuousBackupInformationResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing TableResources operations. */
export class TableResourcesImpl implements TableResources {
  private readonly client: CosmosDBManagementClient;

  /**
   * Initialize a new instance of the class TableResources class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClient) {
    this.client = client;
  }

  /**
   * Lists the Tables under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  public listTables(
    resourceGroupName: string,
    accountName: string,
    options?: TableResourcesListTablesOptionalParams,
  ): PagedAsyncIterableIterator<TableGetResults> {
    const iter = this.listTablesPagingAll(
      resourceGroupName,
      accountName,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listTablesPagingPage(
          resourceGroupName,
          accountName,
          options,
          settings,
        );
      },
    };
  }

  private async *listTablesPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: TableResourcesListTablesOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<TableGetResults[]> {
    let result: TableResourcesListTablesResponse;
    result = await this._listTables(resourceGroupName, accountName, options);
    yield result.value || [];
  }

  private async *listTablesPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: TableResourcesListTablesOptionalParams,
  ): AsyncIterableIterator<TableGetResults> {
    for await (const page of this.listTablesPagingPage(
      resourceGroupName,
      accountName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists the Tables under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  private _listTables(
    resourceGroupName: string,
    accountName: string,
    options?: TableResourcesListTablesOptionalParams,
  ): Promise<TableResourcesListTablesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listTablesOperationSpec,
    );
  }

  /**
   * Gets the Tables under an existing Azure Cosmos DB database account with the provided name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  getTable(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    options?: TableResourcesGetTableOptionalParams,
  ): Promise<TableResourcesGetTableResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, tableName, options },
      getTableOperationSpec,
    );
  }

  /**
   * Create or update an Azure Cosmos DB Table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param createUpdateTableParameters The parameters to provide for the current Table.
   * @param options The options parameters.
   */
  async beginCreateUpdateTable(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    createUpdateTableParameters: TableCreateUpdateParameters,
    options?: TableResourcesCreateUpdateTableOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<TableResourcesCreateUpdateTableResponse>,
      TableResourcesCreateUpdateTableResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<TableResourcesCreateUpdateTableResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        accountName,
        tableName,
        createUpdateTableParameters,
        options,
      },
      spec: createUpdateTableOperationSpec,
    });
    const poller = await createHttpPoller<
      TableResourcesCreateUpdateTableResponse,
      OperationState<TableResourcesCreateUpdateTableResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update an Azure Cosmos DB Table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param createUpdateTableParameters The parameters to provide for the current Table.
   * @param options The options parameters.
   */
  async beginCreateUpdateTableAndWait(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    createUpdateTableParameters: TableCreateUpdateParameters,
    options?: TableResourcesCreateUpdateTableOptionalParams,
  ): Promise<TableResourcesCreateUpdateTableResponse> {
    const poller = await this.beginCreateUpdateTable(
      resourceGroupName,
      accountName,
      tableName,
      createUpdateTableParameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an existing Azure Cosmos DB Table.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  async beginDeleteTable(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    options?: TableResourcesDeleteTableOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<TableResourcesDeleteTableResponse>,
      TableResourcesDeleteTableResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<TableResourcesDeleteTableResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, accountName, tableName, options },
      spec: deleteTableOperationSpec,
    });
    const poller = await createHttpPoller<
      TableResourcesDeleteTableResponse,
      OperationState<TableResourcesDeleteTableResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes an existing Azure Cosmos DB Table.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  async beginDeleteTableAndWait(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    options?: TableResourcesDeleteTableOptionalParams,
  ): Promise<TableResourcesDeleteTableResponse> {
    const poller = await this.beginDeleteTable(
      resourceGroupName,
      accountName,
      tableName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the RUs per second of the Table under an existing Azure Cosmos DB database account with the
   * provided name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  getTableThroughput(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    options?: TableResourcesGetTableThroughputOptionalParams,
  ): Promise<TableResourcesGetTableThroughputResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, tableName, options },
      getTableThroughputOperationSpec,
    );
  }

  /**
   * Update RUs per second of an Azure Cosmos DB Table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param updateThroughputParameters The parameters to provide for the RUs per second of the current
   *                                   Table.
   * @param options The options parameters.
   */
  async beginUpdateTableThroughput(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    updateThroughputParameters: ThroughputSettingsUpdateParameters,
    options?: TableResourcesUpdateTableThroughputOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<TableResourcesUpdateTableThroughputResponse>,
      TableResourcesUpdateTableThroughputResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<TableResourcesUpdateTableThroughputResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        accountName,
        tableName,
        updateThroughputParameters,
        options,
      },
      spec: updateTableThroughputOperationSpec,
    });
    const poller = await createHttpPoller<
      TableResourcesUpdateTableThroughputResponse,
      OperationState<TableResourcesUpdateTableThroughputResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update RUs per second of an Azure Cosmos DB Table
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param updateThroughputParameters The parameters to provide for the RUs per second of the current
   *                                   Table.
   * @param options The options parameters.
   */
  async beginUpdateTableThroughputAndWait(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    updateThroughputParameters: ThroughputSettingsUpdateParameters,
    options?: TableResourcesUpdateTableThroughputOptionalParams,
  ): Promise<TableResourcesUpdateTableThroughputResponse> {
    const poller = await this.beginUpdateTableThroughput(
      resourceGroupName,
      accountName,
      tableName,
      updateThroughputParameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Migrate an Azure Cosmos DB Table from manual throughput to autoscale
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  async beginMigrateTableToAutoscale(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    options?: TableResourcesMigrateTableToAutoscaleOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<TableResourcesMigrateTableToAutoscaleResponse>,
      TableResourcesMigrateTableToAutoscaleResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<TableResourcesMigrateTableToAutoscaleResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, accountName, tableName, options },
      spec: migrateTableToAutoscaleOperationSpec,
    });
    const poller = await createHttpPoller<
      TableResourcesMigrateTableToAutoscaleResponse,
      OperationState<TableResourcesMigrateTableToAutoscaleResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Migrate an Azure Cosmos DB Table from manual throughput to autoscale
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  async beginMigrateTableToAutoscaleAndWait(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    options?: TableResourcesMigrateTableToAutoscaleOptionalParams,
  ): Promise<TableResourcesMigrateTableToAutoscaleResponse> {
    const poller = await this.beginMigrateTableToAutoscale(
      resourceGroupName,
      accountName,
      tableName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Migrate an Azure Cosmos DB Table from autoscale to manual throughput
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  async beginMigrateTableToManualThroughput(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    options?: TableResourcesMigrateTableToManualThroughputOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<TableResourcesMigrateTableToManualThroughputResponse>,
      TableResourcesMigrateTableToManualThroughputResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<TableResourcesMigrateTableToManualThroughputResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, accountName, tableName, options },
      spec: migrateTableToManualThroughputOperationSpec,
    });
    const poller = await createHttpPoller<
      TableResourcesMigrateTableToManualThroughputResponse,
      OperationState<TableResourcesMigrateTableToManualThroughputResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Migrate an Azure Cosmos DB Table from autoscale to manual throughput
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param options The options parameters.
   */
  async beginMigrateTableToManualThroughputAndWait(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    options?: TableResourcesMigrateTableToManualThroughputOptionalParams,
  ): Promise<TableResourcesMigrateTableToManualThroughputResponse> {
    const poller = await this.beginMigrateTableToManualThroughput(
      resourceGroupName,
      accountName,
      tableName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Retrieves continuous backup information for a table.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param location The name of the continuous backup restore location.
   * @param options The options parameters.
   */
  async beginRetrieveContinuousBackupInformation(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    location: ContinuousBackupRestoreLocation,
    options?: TableResourcesRetrieveContinuousBackupInformationOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<TableResourcesRetrieveContinuousBackupInformationResponse>,
      TableResourcesRetrieveContinuousBackupInformationResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<TableResourcesRetrieveContinuousBackupInformationResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, accountName, tableName, location, options },
      spec: retrieveContinuousBackupInformationOperationSpec,
    });
    const poller = await createHttpPoller<
      TableResourcesRetrieveContinuousBackupInformationResponse,
      OperationState<TableResourcesRetrieveContinuousBackupInformationResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Retrieves continuous backup information for a table.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param tableName Cosmos DB table name.
   * @param location The name of the continuous backup restore location.
   * @param options The options parameters.
   */
  async beginRetrieveContinuousBackupInformationAndWait(
    resourceGroupName: string,
    accountName: string,
    tableName: string,
    location: ContinuousBackupRestoreLocation,
    options?: TableResourcesRetrieveContinuousBackupInformationOptionalParams,
  ): Promise<TableResourcesRetrieveContinuousBackupInformationResponse> {
    const poller = await this.beginRetrieveContinuousBackupInformation(
      resourceGroupName,
      accountName,
      tableName,
      location,
      options,
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listTablesOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TableListResult,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getTableOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TableGetResults,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createUpdateTableOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.TableGetResults,
    },
    201: {
      bodyMapper: Mappers.TableGetResults,
    },
    202: {
      bodyMapper: Mappers.TableGetResults,
    },
    204: {
      bodyMapper: Mappers.TableGetResults,
    },
  },
  requestBody: Parameters.createUpdateTableParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteTableOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.TableResourcesDeleteTableHeaders,
    },
    201: {
      headersMapper: Mappers.TableResourcesDeleteTableHeaders,
    },
    202: {
      headersMapper: Mappers.TableResourcesDeleteTableHeaders,
    },
    204: {
      headersMapper: Mappers.TableResourcesDeleteTableHeaders,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName,
  ],
  serializer,
};
const getTableThroughputOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}/throughputSettings/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ThroughputSettingsGetResults,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateTableThroughputOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}/throughputSettings/default",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ThroughputSettingsGetResults,
    },
    201: {
      bodyMapper: Mappers.ThroughputSettingsGetResults,
    },
    202: {
      bodyMapper: Mappers.ThroughputSettingsGetResults,
    },
    204: {
      bodyMapper: Mappers.ThroughputSettingsGetResults,
    },
  },
  requestBody: Parameters.updateThroughputParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const migrateTableToAutoscaleOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}/throughputSettings/default/migrateToAutoscale",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ThroughputSettingsGetResults,
    },
    201: {
      bodyMapper: Mappers.ThroughputSettingsGetResults,
    },
    202: {
      bodyMapper: Mappers.ThroughputSettingsGetResults,
    },
    204: {
      bodyMapper: Mappers.ThroughputSettingsGetResults,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const migrateTableToManualThroughputOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}/throughputSettings/default/migrateToManualThroughput",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ThroughputSettingsGetResults,
    },
    201: {
      bodyMapper: Mappers.ThroughputSettingsGetResults,
    },
    202: {
      bodyMapper: Mappers.ThroughputSettingsGetResults,
    },
    204: {
      bodyMapper: Mappers.ThroughputSettingsGetResults,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.tableName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const retrieveContinuousBackupInformationOperationSpec: coreClient.OperationSpec =
  {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/tables/{tableName}/retrieveContinuousBackupInformation",
    httpMethod: "POST",
    responses: {
      200: {
        bodyMapper: Mappers.BackupInformation,
      },
      201: {
        bodyMapper: Mappers.BackupInformation,
      },
      202: {
        bodyMapper: Mappers.BackupInformation,
      },
      204: {
        bodyMapper: Mappers.BackupInformation,
      },
      default: {
        bodyMapper: Mappers.CloudError,
      },
    },
    requestBody: Parameters.location,
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
      Parameters.$host,
      Parameters.subscriptionId,
      Parameters.resourceGroupName,
      Parameters.accountName,
      Parameters.tableName,
    ],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer,
  };
