/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { WorkloadClassifiers } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  WorkloadClassifier,
  WorkloadClassifiersListByWorkloadGroupNextOptionalParams,
  WorkloadClassifiersListByWorkloadGroupOptionalParams,
  WorkloadClassifiersGetOptionalParams,
  WorkloadClassifiersGetResponse,
  WorkloadClassifiersCreateOrUpdateOptionalParams,
  WorkloadClassifiersCreateOrUpdateResponse,
  WorkloadClassifiersDeleteOptionalParams,
  WorkloadClassifiersListByWorkloadGroupResponse,
  WorkloadClassifiersListByWorkloadGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing WorkloadClassifiers operations. */
export class WorkloadClassifiersImpl implements WorkloadClassifiers {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class WorkloadClassifiers class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets the list of workload classifiers for a workload group
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group from which to receive the classifiers from.
   * @param options The options parameters.
   */
  public listByWorkloadGroup(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    workloadGroupName: string,
    options?: WorkloadClassifiersListByWorkloadGroupOptionalParams
  ): PagedAsyncIterableIterator<WorkloadClassifier> {
    const iter = this.listByWorkloadGroupPagingAll(
      resourceGroupName,
      serverName,
      databaseName,
      workloadGroupName,
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
        return this.listByWorkloadGroupPagingPage(
          resourceGroupName,
          serverName,
          databaseName,
          workloadGroupName,
          options
        );
      }
    };
  }

  private async *listByWorkloadGroupPagingPage(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    workloadGroupName: string,
    options?: WorkloadClassifiersListByWorkloadGroupOptionalParams
  ): AsyncIterableIterator<WorkloadClassifier[]> {
    let result = await this._listByWorkloadGroup(
      resourceGroupName,
      serverName,
      databaseName,
      workloadGroupName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByWorkloadGroupNext(
        resourceGroupName,
        serverName,
        databaseName,
        workloadGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByWorkloadGroupPagingAll(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    workloadGroupName: string,
    options?: WorkloadClassifiersListByWorkloadGroupOptionalParams
  ): AsyncIterableIterator<WorkloadClassifier> {
    for await (const page of this.listByWorkloadGroupPagingPage(
      resourceGroupName,
      serverName,
      databaseName,
      workloadGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a workload classifier
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group from which to receive the classifier from.
   * @param workloadClassifierName The name of the workload classifier.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    workloadGroupName: string,
    workloadClassifierName: string,
    options?: WorkloadClassifiersGetOptionalParams
  ): Promise<WorkloadClassifiersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        workloadGroupName,
        workloadClassifierName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a workload classifier.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group from which to receive the classifier from.
   * @param workloadClassifierName The name of the workload classifier to create/update.
   * @param parameters The properties of the workload classifier.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    workloadGroupName: string,
    workloadClassifierName: string,
    parameters: WorkloadClassifier,
    options?: WorkloadClassifiersCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<WorkloadClassifiersCreateOrUpdateResponse>,
      WorkloadClassifiersCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<WorkloadClassifiersCreateOrUpdateResponse> => {
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
        workloadGroupName,
        workloadClassifierName,
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
   * Creates or updates a workload classifier.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group from which to receive the classifier from.
   * @param workloadClassifierName The name of the workload classifier to create/update.
   * @param parameters The properties of the workload classifier.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    workloadGroupName: string,
    workloadClassifierName: string,
    parameters: WorkloadClassifier,
    options?: WorkloadClassifiersCreateOrUpdateOptionalParams
  ): Promise<WorkloadClassifiersCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serverName,
      databaseName,
      workloadGroupName,
      workloadClassifierName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a workload classifier.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group from which to receive the classifier from.
   * @param workloadClassifierName The name of the workload classifier to delete.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    workloadGroupName: string,
    workloadClassifierName: string,
    options?: WorkloadClassifiersDeleteOptionalParams
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
        serverName,
        databaseName,
        workloadGroupName,
        workloadClassifierName,
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
   * Deletes a workload classifier.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group from which to receive the classifier from.
   * @param workloadClassifierName The name of the workload classifier to delete.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    workloadGroupName: string,
    workloadClassifierName: string,
    options?: WorkloadClassifiersDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      serverName,
      databaseName,
      workloadGroupName,
      workloadClassifierName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the list of workload classifiers for a workload group
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group from which to receive the classifiers from.
   * @param options The options parameters.
   */
  private _listByWorkloadGroup(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    workloadGroupName: string,
    options?: WorkloadClassifiersListByWorkloadGroupOptionalParams
  ): Promise<WorkloadClassifiersListByWorkloadGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        workloadGroupName,
        options
      },
      listByWorkloadGroupOperationSpec
    );
  }

  /**
   * ListByWorkloadGroupNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param workloadGroupName The name of the workload group from which to receive the classifiers from.
   * @param nextLink The nextLink from the previous successful call to the ListByWorkloadGroup method.
   * @param options The options parameters.
   */
  private _listByWorkloadGroupNext(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    workloadGroupName: string,
    nextLink: string,
    options?: WorkloadClassifiersListByWorkloadGroupNextOptionalParams
  ): Promise<WorkloadClassifiersListByWorkloadGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        workloadGroupName,
        nextLink,
        options
      },
      listByWorkloadGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/workloadGroups/{workloadGroupName}/workloadClassifiers/{workloadClassifierName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadClassifier
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.workloadGroupName,
    Parameters.workloadClassifierName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/workloadGroups/{workloadGroupName}/workloadClassifiers/{workloadClassifierName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadClassifier
    },
    201: {
      bodyMapper: Mappers.WorkloadClassifier
    },
    202: {
      bodyMapper: Mappers.WorkloadClassifier
    },
    204: {
      bodyMapper: Mappers.WorkloadClassifier
    },
    default: {}
  },
  requestBody: Parameters.parameters64,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.workloadGroupName,
    Parameters.workloadClassifierName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/workloadGroups/{workloadGroupName}/workloadClassifiers/{workloadClassifierName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.workloadGroupName,
    Parameters.workloadClassifierName
  ],
  serializer
};
const listByWorkloadGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/workloadGroups/{workloadGroupName}/workloadClassifiers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadClassifierListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.workloadGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByWorkloadGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkloadClassifierListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.nextLink,
    Parameters.workloadGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
