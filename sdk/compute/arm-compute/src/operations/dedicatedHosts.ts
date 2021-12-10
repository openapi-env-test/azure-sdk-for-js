/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DedicatedHosts } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClient } from "../computeManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  DedicatedHost,
  DedicatedHostsListByHostGroupNextOptionalParams,
  DedicatedHostsListByHostGroupOptionalParams,
  DedicatedHostsCreateOrUpdateOptionalParams,
  DedicatedHostsCreateOrUpdateResponse,
  DedicatedHostUpdate,
  DedicatedHostsUpdateOptionalParams,
  DedicatedHostsUpdateResponse,
  DedicatedHostsDeleteOptionalParams,
  DedicatedHostsGetOptionalParams,
  DedicatedHostsGetResponse,
  DedicatedHostsListByHostGroupResponse,
  DedicatedHostsListByHostGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DedicatedHosts operations. */
export class DedicatedHostsImpl implements DedicatedHosts {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class DedicatedHosts class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * Lists all of the dedicated hosts in the specified dedicated host group. Use the nextLink property in
   * the response to get the next page of dedicated hosts.
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param options The options parameters.
   */
  public listByHostGroup(
    resourceGroupName: string,
    hostGroupName: string,
    options?: DedicatedHostsListByHostGroupOptionalParams
  ): PagedAsyncIterableIterator<DedicatedHost> {
    const iter = this.listByHostGroupPagingAll(
      resourceGroupName,
      hostGroupName,
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
        return this.listByHostGroupPagingPage(
          resourceGroupName,
          hostGroupName,
          options
        );
      }
    };
  }

  private async *listByHostGroupPagingPage(
    resourceGroupName: string,
    hostGroupName: string,
    options?: DedicatedHostsListByHostGroupOptionalParams
  ): AsyncIterableIterator<DedicatedHost[]> {
    let result = await this._listByHostGroup(
      resourceGroupName,
      hostGroupName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByHostGroupNext(
        resourceGroupName,
        hostGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByHostGroupPagingAll(
    resourceGroupName: string,
    hostGroupName: string,
    options?: DedicatedHostsListByHostGroupOptionalParams
  ): AsyncIterableIterator<DedicatedHost> {
    for await (const page of this.listByHostGroupPagingPage(
      resourceGroupName,
      hostGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Create or update a dedicated host .
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param hostName The name of the dedicated host .
   * @param parameters Parameters supplied to the Create Dedicated Host.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    hostGroupName: string,
    hostName: string,
    parameters: DedicatedHost,
    options?: DedicatedHostsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DedicatedHostsCreateOrUpdateResponse>,
      DedicatedHostsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DedicatedHostsCreateOrUpdateResponse> => {
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
      { resourceGroupName, hostGroupName, hostName, parameters, options },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Create or update a dedicated host .
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param hostName The name of the dedicated host .
   * @param parameters Parameters supplied to the Create Dedicated Host.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    hostGroupName: string,
    hostName: string,
    parameters: DedicatedHost,
    options?: DedicatedHostsCreateOrUpdateOptionalParams
  ): Promise<DedicatedHostsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      hostGroupName,
      hostName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Update an dedicated host .
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param hostName The name of the dedicated host .
   * @param parameters Parameters supplied to the Update Dedicated Host operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    hostGroupName: string,
    hostName: string,
    parameters: DedicatedHostUpdate,
    options?: DedicatedHostsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DedicatedHostsUpdateResponse>,
      DedicatedHostsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DedicatedHostsUpdateResponse> => {
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
      { resourceGroupName, hostGroupName, hostName, parameters, options },
      updateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Update an dedicated host .
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param hostName The name of the dedicated host .
   * @param parameters Parameters supplied to the Update Dedicated Host operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    hostGroupName: string,
    hostName: string,
    parameters: DedicatedHostUpdate,
    options?: DedicatedHostsUpdateOptionalParams
  ): Promise<DedicatedHostsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      hostGroupName,
      hostName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a dedicated host.
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param hostName The name of the dedicated host.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    hostGroupName: string,
    hostName: string,
    options?: DedicatedHostsDeleteOptionalParams
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
      { resourceGroupName, hostGroupName, hostName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Delete a dedicated host.
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param hostName The name of the dedicated host.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    hostGroupName: string,
    hostName: string,
    options?: DedicatedHostsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      hostGroupName,
      hostName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Retrieves information about a dedicated host.
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param hostName The name of the dedicated host.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    hostGroupName: string,
    hostName: string,
    options?: DedicatedHostsGetOptionalParams
  ): Promise<DedicatedHostsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostGroupName, hostName, options },
      getOperationSpec
    );
  }

  /**
   * Lists all of the dedicated hosts in the specified dedicated host group. Use the nextLink property in
   * the response to get the next page of dedicated hosts.
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param options The options parameters.
   */
  private _listByHostGroup(
    resourceGroupName: string,
    hostGroupName: string,
    options?: DedicatedHostsListByHostGroupOptionalParams
  ): Promise<DedicatedHostsListByHostGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostGroupName, options },
      listByHostGroupOperationSpec
    );
  }

  /**
   * ListByHostGroupNext
   * @param resourceGroupName The name of the resource group.
   * @param hostGroupName The name of the dedicated host group.
   * @param nextLink The nextLink from the previous successful call to the ListByHostGroup method.
   * @param options The options parameters.
   */
  private _listByHostGroupNext(
    resourceGroupName: string,
    hostGroupName: string,
    nextLink: string,
    options?: DedicatedHostsListByHostGroupNextOptionalParams
  ): Promise<DedicatedHostsListByHostGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostGroupName, nextLink, options },
      listByHostGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}/hosts/{hostName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHost
    },
    201: {
      bodyMapper: Mappers.DedicatedHost
    },
    202: {
      bodyMapper: Mappers.DedicatedHost
    },
    204: {
      bodyMapper: Mappers.DedicatedHost
    }
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hostGroupName,
    Parameters.hostName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}/hosts/{hostName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHost
    },
    201: {
      bodyMapper: Mappers.DedicatedHost
    },
    202: {
      bodyMapper: Mappers.DedicatedHost
    },
    204: {
      bodyMapper: Mappers.DedicatedHost
    }
  },
  requestBody: Parameters.parameters6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hostGroupName,
    Parameters.hostName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}/hosts/{hostName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hostGroupName,
    Parameters.hostName
  ],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}/hosts/{hostName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHost
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hostGroupName,
    Parameters.hostName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByHostGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/hostGroups/{hostGroupName}/hosts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHostListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.hostGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByHostGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedHostListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.hostGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
