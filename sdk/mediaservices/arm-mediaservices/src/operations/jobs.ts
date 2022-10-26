/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Jobs } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMediaServices } from "../azureMediaServices";
import {
  Job,
  JobsListNextOptionalParams,
  JobsListOptionalParams,
  JobsListResponse,
  JobsGetOptionalParams,
  JobsGetResponse,
  JobsCreateOptionalParams,
  JobsCreateResponse,
  JobsDeleteOptionalParams,
  JobsUpdateOptionalParams,
  JobsUpdateResponse,
  JobsCancelJobOptionalParams,
  JobsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Jobs operations. */
export class JobsImpl implements Jobs {
  private readonly client: AzureMediaServices;

  /**
   * Initialize a new instance of the class Jobs class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMediaServices) {
    this.client = client;
  }

  /**
   * Lists all of the Jobs for the Transform.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param transformName The Transform name.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    accountName: string,
    transformName: string,
    options?: JobsListOptionalParams
  ): PagedAsyncIterableIterator<Job> {
    const iter = this.listPagingAll(
      resourceGroupName,
      accountName,
      transformName,
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
        return this.listPagingPage(
          resourceGroupName,
          accountName,
          transformName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    accountName: string,
    transformName: string,
    options?: JobsListOptionalParams
  ): AsyncIterableIterator<Job[]> {
    let result = await this._list(
      resourceGroupName,
      accountName,
      transformName,
      options
    );
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        accountName,
        transformName,
        continuationToken,
        options
      );
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    accountName: string,
    transformName: string,
    options?: JobsListOptionalParams
  ): AsyncIterableIterator<Job> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      accountName,
      transformName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all of the Jobs for the Transform.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param transformName The Transform name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    accountName: string,
    transformName: string,
    options?: JobsListOptionalParams
  ): Promise<JobsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, transformName, options },
      listOperationSpec
    );
  }

  /**
   * Gets a Job.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param transformName The Transform name.
   * @param jobName The Job name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    transformName: string,
    jobName: string,
    options?: JobsGetOptionalParams
  ): Promise<JobsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, transformName, jobName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a Job.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param transformName The Transform name.
   * @param jobName The Job name.
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    accountName: string,
    transformName: string,
    jobName: string,
    parameters: Job,
    options?: JobsCreateOptionalParams
  ): Promise<JobsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        transformName,
        jobName,
        parameters,
        options
      },
      createOperationSpec
    );
  }

  /**
   * Deletes a Job.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param transformName The Transform name.
   * @param jobName The Job name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    transformName: string,
    jobName: string,
    options?: JobsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, transformName, jobName, options },
      deleteOperationSpec
    );
  }

  /**
   * Update is only supported for description and priority. Updating Priority will take effect when the
   * Job state is Queued or Scheduled and depending on the timing the priority update may be ignored.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param transformName The Transform name.
   * @param jobName The Job name.
   * @param parameters The request parameters
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    transformName: string,
    jobName: string,
    parameters: Job,
    options?: JobsUpdateOptionalParams
  ): Promise<JobsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        transformName,
        jobName,
        parameters,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Cancel a Job.
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param transformName The Transform name.
   * @param jobName The Job name.
   * @param options The options parameters.
   */
  cancelJob(
    resourceGroupName: string,
    accountName: string,
    transformName: string,
    jobName: string,
    options?: JobsCancelJobOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, transformName, jobName, options },
      cancelJobOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group within the Azure subscription.
   * @param accountName The Media Services account name.
   * @param transformName The Transform name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    accountName: string,
    transformName: string,
    nextLink: string,
    options?: JobsListNextOptionalParams
  ): Promise<JobsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, transformName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/transforms/{transformName}/jobs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion1,
    Parameters.filter,
    Parameters.orderby
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.transformName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/transforms/{transformName}/jobs/{jobName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Job
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.transformName,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/transforms/{transformName}/jobs/{jobName}",
  httpMethod: "PUT",
  responses: {
    201: {
      bodyMapper: Mappers.Job
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters13,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.transformName,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/transforms/{transformName}/jobs/{jobName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.transformName,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/transforms/{transformName}/jobs/{jobName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Job
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters13,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.transformName,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const cancelJobOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/transforms/{transformName}/jobs/{jobName}/cancelJob",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.transformName,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion1,
    Parameters.filter,
    Parameters.orderby
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.nextLink,
    Parameters.transformName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
