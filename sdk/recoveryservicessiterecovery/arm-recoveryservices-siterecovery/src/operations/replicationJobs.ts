/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ReplicationJobs } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SiteRecoveryManagementClient } from "../siteRecoveryManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Job,
  ReplicationJobsListNextOptionalParams,
  ReplicationJobsListOptionalParams,
  ReplicationJobsListResponse,
  ReplicationJobsGetOptionalParams,
  ReplicationJobsGetResponse,
  ReplicationJobsCancelOptionalParams,
  ReplicationJobsCancelResponse,
  ReplicationJobsRestartOptionalParams,
  ReplicationJobsRestartResponse,
  ResumeJobParams,
  ReplicationJobsResumeOptionalParams,
  ReplicationJobsResumeResponse,
  JobQueryParameter,
  ReplicationJobsExportOptionalParams,
  ReplicationJobsExportResponse,
  ReplicationJobsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ReplicationJobs operations. */
export class ReplicationJobsImpl implements ReplicationJobs {
  private readonly client: SiteRecoveryManagementClient;

  /**
   * Initialize a new instance of the class ReplicationJobs class.
   * @param client Reference to the service client
   */
  constructor(client: SiteRecoveryManagementClient) {
    this.client = client;
  }

  /**
   * Gets the list of Azure Site Recovery Jobs for the vault.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  public list(
    resourceName: string,
    resourceGroupName: string,
    options?: ReplicationJobsListOptionalParams
  ): PagedAsyncIterableIterator<Job> {
    const iter = this.listPagingAll(resourceName, resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceName, resourceGroupName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceName: string,
    resourceGroupName: string,
    options?: ReplicationJobsListOptionalParams
  ): AsyncIterableIterator<Job[]> {
    let result = await this._list(resourceName, resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceName,
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceName: string,
    resourceGroupName: string,
    options?: ReplicationJobsListOptionalParams
  ): AsyncIterableIterator<Job> {
    for await (const page of this.listPagingPage(
      resourceName,
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the list of Azure Site Recovery Jobs for the vault.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  private _list(
    resourceName: string,
    resourceGroupName: string,
    options?: ReplicationJobsListOptionalParams
  ): Promise<ReplicationJobsListResponse> {
    return this.client.sendOperationRequest(
      { resourceName, resourceGroupName, options },
      listOperationSpec
    );
  }

  /**
   * Get the details of an Azure Site Recovery job.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param jobName Job identifier.
   * @param options The options parameters.
   */
  get(
    resourceName: string,
    resourceGroupName: string,
    jobName: string,
    options?: ReplicationJobsGetOptionalParams
  ): Promise<ReplicationJobsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceName, resourceGroupName, jobName, options },
      getOperationSpec
    );
  }

  /**
   * The operation to cancel an Azure Site Recovery job.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param jobName Job identifier.
   * @param options The options parameters.
   */
  async beginCancel(
    resourceName: string,
    resourceGroupName: string,
    jobName: string,
    options?: ReplicationJobsCancelOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ReplicationJobsCancelResponse>,
      ReplicationJobsCancelResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ReplicationJobsCancelResponse> => {
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
      { resourceName, resourceGroupName, jobName, options },
      cancelOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to cancel an Azure Site Recovery job.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param jobName Job identifier.
   * @param options The options parameters.
   */
  async beginCancelAndWait(
    resourceName: string,
    resourceGroupName: string,
    jobName: string,
    options?: ReplicationJobsCancelOptionalParams
  ): Promise<ReplicationJobsCancelResponse> {
    const poller = await this.beginCancel(
      resourceName,
      resourceGroupName,
      jobName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to restart an Azure Site Recovery job.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param jobName Job identifier.
   * @param options The options parameters.
   */
  async beginRestart(
    resourceName: string,
    resourceGroupName: string,
    jobName: string,
    options?: ReplicationJobsRestartOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ReplicationJobsRestartResponse>,
      ReplicationJobsRestartResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ReplicationJobsRestartResponse> => {
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
      { resourceName, resourceGroupName, jobName, options },
      restartOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to restart an Azure Site Recovery job.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param jobName Job identifier.
   * @param options The options parameters.
   */
  async beginRestartAndWait(
    resourceName: string,
    resourceGroupName: string,
    jobName: string,
    options?: ReplicationJobsRestartOptionalParams
  ): Promise<ReplicationJobsRestartResponse> {
    const poller = await this.beginRestart(
      resourceName,
      resourceGroupName,
      jobName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to resume an Azure Site Recovery job.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param jobName Job identifier.
   * @param resumeJobParams Resume rob comments.
   * @param options The options parameters.
   */
  async beginResume(
    resourceName: string,
    resourceGroupName: string,
    jobName: string,
    resumeJobParams: ResumeJobParams,
    options?: ReplicationJobsResumeOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ReplicationJobsResumeResponse>,
      ReplicationJobsResumeResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ReplicationJobsResumeResponse> => {
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
      { resourceName, resourceGroupName, jobName, resumeJobParams, options },
      resumeOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to resume an Azure Site Recovery job.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param jobName Job identifier.
   * @param resumeJobParams Resume rob comments.
   * @param options The options parameters.
   */
  async beginResumeAndWait(
    resourceName: string,
    resourceGroupName: string,
    jobName: string,
    resumeJobParams: ResumeJobParams,
    options?: ReplicationJobsResumeOptionalParams
  ): Promise<ReplicationJobsResumeResponse> {
    const poller = await this.beginResume(
      resourceName,
      resourceGroupName,
      jobName,
      resumeJobParams,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to export the details of the Azure Site Recovery jobs of the vault.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param jobQueryParameter job query filter.
   * @param options The options parameters.
   */
  async beginExport(
    resourceName: string,
    resourceGroupName: string,
    jobQueryParameter: JobQueryParameter,
    options?: ReplicationJobsExportOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ReplicationJobsExportResponse>,
      ReplicationJobsExportResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ReplicationJobsExportResponse> => {
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
      { resourceName, resourceGroupName, jobQueryParameter, options },
      exportOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to export the details of the Azure Site Recovery jobs of the vault.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param jobQueryParameter job query filter.
   * @param options The options parameters.
   */
  async beginExportAndWait(
    resourceName: string,
    resourceGroupName: string,
    jobQueryParameter: JobQueryParameter,
    options?: ReplicationJobsExportOptionalParams
  ): Promise<ReplicationJobsExportResponse> {
    const poller = await this.beginExport(
      resourceName,
      resourceGroupName,
      jobQueryParameter,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceName: string,
    resourceGroupName: string,
    nextLink: string,
    options?: ReplicationJobsListNextOptionalParams
  ): Promise<ReplicationJobsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceName, resourceGroupName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationJobs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobCollection
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationJobs/{jobName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Job
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const cancelOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationJobs/{jobName}/cancel",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Job
    },
    201: {
      bodyMapper: Mappers.Job
    },
    202: {
      bodyMapper: Mappers.Job
    },
    204: {
      bodyMapper: Mappers.Job
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const restartOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationJobs/{jobName}/restart",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Job
    },
    201: {
      bodyMapper: Mappers.Job
    },
    202: {
      bodyMapper: Mappers.Job
    },
    204: {
      bodyMapper: Mappers.Job
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const resumeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationJobs/{jobName}/resume",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Job
    },
    201: {
      bodyMapper: Mappers.Job
    },
    202: {
      bodyMapper: Mappers.Job
    },
    204: {
      bodyMapper: Mappers.Job
    }
  },
  requestBody: Parameters.resumeJobParams,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const exportOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationJobs/export",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Job
    },
    201: {
      bodyMapper: Mappers.Job
    },
    202: {
      bodyMapper: Mappers.Job
    },
    204: {
      bodyMapper: Mappers.Job
    }
  },
  requestBody: Parameters.jobQueryParameter,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
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
      bodyMapper: Mappers.JobCollection
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
