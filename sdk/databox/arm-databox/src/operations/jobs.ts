/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Jobs } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataBoxManagementClient } from "../dataBoxManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  JobResource,
  JobsListNextOptionalParams,
  JobsListOptionalParams,
  JobsListResponse,
  JobsListByResourceGroupNextOptionalParams,
  JobsListByResourceGroupOptionalParams,
  JobsListByResourceGroupResponse,
  UnencryptedCredentials,
  JobsListCredentialsOptionalParams,
  JobsListCredentialsResponse,
  MarkDevicesShippedRequest,
  JobsMarkDevicesShippedOptionalParams,
  JobsGetOptionalParams,
  JobsGetResponse,
  JobsCreateOptionalParams,
  JobsCreateResponse,
  JobsDeleteOptionalParams,
  JobResourceUpdateParameter,
  JobsUpdateOptionalParams,
  JobsUpdateResponse,
  ShipmentPickUpRequest,
  JobsBookShipmentPickUpOptionalParams,
  JobsBookShipmentPickUpResponse,
  CancellationReason,
  JobsCancelOptionalParams,
  JobsListNextResponse,
  JobsListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Jobs operations. */
export class JobsImpl implements Jobs {
  private readonly client: DataBoxManagementClient;

  /**
   * Initialize a new instance of the class Jobs class.
   * @param client Reference to the service client
   */
  constructor(client: DataBoxManagementClient) {
    this.client = client;
  }

  /**
   * Lists all the jobs available under the subscription.
   * @param options The options parameters.
   */
  public list(
    options?: JobsListOptionalParams
  ): PagedAsyncIterableIterator<JobResource> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: JobsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<JobResource[]> {
    let result: JobsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: JobsListOptionalParams
  ): AsyncIterableIterator<JobResource> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all the jobs available under the given resource group.
   * @param resourceGroupName The Resource Group Name
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: JobsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<JobResource> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: JobsListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<JobResource[]> {
    let result: JobsListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: JobsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<JobResource> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * This method gets the unencrypted secrets related to the job.
   * @param resourceGroupName The Resource Group Name
   * @param jobName The name of the job Resource within the specified resource group. job names must be
   *                between 3 and 24 characters in length and use any alphanumeric and underscore only
   * @param options The options parameters.
   */
  public listCredentials(
    resourceGroupName: string,
    jobName: string,
    options?: JobsListCredentialsOptionalParams
  ): PagedAsyncIterableIterator<UnencryptedCredentials> {
    const iter = this.listCredentialsPagingAll(
      resourceGroupName,
      jobName,
      options
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
        return this.listCredentialsPagingPage(
          resourceGroupName,
          jobName,
          options,
          settings
        );
      }
    };
  }

  private async *listCredentialsPagingPage(
    resourceGroupName: string,
    jobName: string,
    options?: JobsListCredentialsOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<UnencryptedCredentials[]> {
    let result: JobsListCredentialsResponse;
    result = await this._listCredentials(resourceGroupName, jobName, options);
    yield result.value || [];
  }

  private async *listCredentialsPagingAll(
    resourceGroupName: string,
    jobName: string,
    options?: JobsListCredentialsOptionalParams
  ): AsyncIterableIterator<UnencryptedCredentials> {
    for await (const page of this.listCredentialsPagingPage(
      resourceGroupName,
      jobName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the jobs available under the subscription.
   * @param options The options parameters.
   */
  private _list(options?: JobsListOptionalParams): Promise<JobsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Request to mark devices for a given job as shipped
   * @param jobName The name of the job Resource within the specified resource group. job names must be
   *                between 3 and 24 characters in length and use any alphanumeric and underscore only
   * @param resourceGroupName The Resource Group Name
   * @param markDevicesShippedRequest Mark Devices Shipped Request
   * @param options The options parameters.
   */
  markDevicesShipped(
    jobName: string,
    resourceGroupName: string,
    markDevicesShippedRequest: MarkDevicesShippedRequest,
    options?: JobsMarkDevicesShippedOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { jobName, resourceGroupName, markDevicesShippedRequest, options },
      markDevicesShippedOperationSpec
    );
  }

  /**
   * Lists all the jobs available under the given resource group.
   * @param resourceGroupName The Resource Group Name
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: JobsListByResourceGroupOptionalParams
  ): Promise<JobsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Gets information about the specified job.
   * @param resourceGroupName The Resource Group Name
   * @param jobName The name of the job Resource within the specified resource group. job names must be
   *                between 3 and 24 characters in length and use any alphanumeric and underscore only
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    jobName: string,
    options?: JobsGetOptionalParams
  ): Promise<JobsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, jobName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a new job with the specified parameters. Existing job cannot be updated with this API and
   * should instead be updated with the Update job API.
   * @param resourceGroupName The Resource Group Name
   * @param jobName The name of the job Resource within the specified resource group. job names must be
   *                between 3 and 24 characters in length and use any alphanumeric and underscore only
   * @param jobResource Job details from request body.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    jobName: string,
    jobResource: JobResource,
    options?: JobsCreateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<JobsCreateResponse>, JobsCreateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<JobsCreateResponse> => {
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
      { resourceGroupName, jobName, jobResource, options },
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
   * Creates a new job with the specified parameters. Existing job cannot be updated with this API and
   * should instead be updated with the Update job API.
   * @param resourceGroupName The Resource Group Name
   * @param jobName The name of the job Resource within the specified resource group. job names must be
   *                between 3 and 24 characters in length and use any alphanumeric and underscore only
   * @param jobResource Job details from request body.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    jobName: string,
    jobResource: JobResource,
    options?: JobsCreateOptionalParams
  ): Promise<JobsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      jobName,
      jobResource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a job.
   * @param resourceGroupName The Resource Group Name
   * @param jobName The name of the job Resource within the specified resource group. job names must be
   *                between 3 and 24 characters in length and use any alphanumeric and underscore only
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    jobName: string,
    options?: JobsDeleteOptionalParams
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
      { resourceGroupName, jobName, options },
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
   * Deletes a job.
   * @param resourceGroupName The Resource Group Name
   * @param jobName The name of the job Resource within the specified resource group. job names must be
   *                between 3 and 24 characters in length and use any alphanumeric and underscore only
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    jobName: string,
    options?: JobsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(resourceGroupName, jobName, options);
    return poller.pollUntilDone();
  }

  /**
   * Updates the properties of an existing job.
   * @param resourceGroupName The Resource Group Name
   * @param jobName The name of the job Resource within the specified resource group. job names must be
   *                between 3 and 24 characters in length and use any alphanumeric and underscore only
   * @param jobResourceUpdateParameter Job update parameters from request body.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    jobName: string,
    jobResourceUpdateParameter: JobResourceUpdateParameter,
    options?: JobsUpdateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<JobsUpdateResponse>, JobsUpdateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<JobsUpdateResponse> => {
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
      { resourceGroupName, jobName, jobResourceUpdateParameter, options },
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
   * Updates the properties of an existing job.
   * @param resourceGroupName The Resource Group Name
   * @param jobName The name of the job Resource within the specified resource group. job names must be
   *                between 3 and 24 characters in length and use any alphanumeric and underscore only
   * @param jobResourceUpdateParameter Job update parameters from request body.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    jobName: string,
    jobResourceUpdateParameter: JobResourceUpdateParameter,
    options?: JobsUpdateOptionalParams
  ): Promise<JobsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      jobName,
      jobResourceUpdateParameter,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Book shipment pick up.
   * @param resourceGroupName The Resource Group Name
   * @param jobName The name of the job Resource within the specified resource group. job names must be
   *                between 3 and 24 characters in length and use any alphanumeric and underscore only
   * @param shipmentPickUpRequest Details of shipment pick up request.
   * @param options The options parameters.
   */
  bookShipmentPickUp(
    resourceGroupName: string,
    jobName: string,
    shipmentPickUpRequest: ShipmentPickUpRequest,
    options?: JobsBookShipmentPickUpOptionalParams
  ): Promise<JobsBookShipmentPickUpResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, jobName, shipmentPickUpRequest, options },
      bookShipmentPickUpOperationSpec
    );
  }

  /**
   * CancelJob.
   * @param resourceGroupName The Resource Group Name
   * @param jobName The name of the job Resource within the specified resource group. job names must be
   *                between 3 and 24 characters in length and use any alphanumeric and underscore only
   * @param cancellationReason Reason for cancellation.
   * @param options The options parameters.
   */
  cancel(
    resourceGroupName: string,
    jobName: string,
    cancellationReason: CancellationReason,
    options?: JobsCancelOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, jobName, cancellationReason, options },
      cancelOperationSpec
    );
  }

  /**
   * This method gets the unencrypted secrets related to the job.
   * @param resourceGroupName The Resource Group Name
   * @param jobName The name of the job Resource within the specified resource group. job names must be
   *                between 3 and 24 characters in length and use any alphanumeric and underscore only
   * @param options The options parameters.
   */
  private _listCredentials(
    resourceGroupName: string,
    jobName: string,
    options?: JobsListCredentialsOptionalParams
  ): Promise<JobsListCredentialsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, jobName, options },
      listCredentialsOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: JobsListNextOptionalParams
  ): Promise<JobsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The Resource Group Name
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: JobsListByResourceGroupNextOptionalParams
  ): Promise<JobsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataBox/jobs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobResourceList
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skipToken],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const markDevicesShippedOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}/markDevicesShipped",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  requestBody: Parameters.markDevicesShippedRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.jobName,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobResourceList
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skipToken],
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobResource
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.jobName,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.JobResource
    },
    201: {
      bodyMapper: Mappers.JobResource
    },
    202: {
      bodyMapper: Mappers.JobResource
    },
    204: {
      bodyMapper: Mappers.JobResource
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  requestBody: Parameters.jobResource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.jobName,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.jobName,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.JobResource
    },
    201: {
      bodyMapper: Mappers.JobResource
    },
    202: {
      bodyMapper: Mappers.JobResource
    },
    204: {
      bodyMapper: Mappers.JobResource
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  requestBody: Parameters.jobResourceUpdateParameter,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.jobName,
    Parameters.resourceGroupName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const bookShipmentPickUpOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}/bookShipmentPickUp",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ShipmentPickUpResponse
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  requestBody: Parameters.shipmentPickUpRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.jobName,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const cancelOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}/cancel",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  requestBody: Parameters.cancellationReason,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.jobName,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listCredentialsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBox/jobs/{jobName}/listCredentials",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.UnencryptedCredentialsList
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.jobName,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobResourceList
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
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
      bodyMapper: Mappers.JobResourceList
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
