/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DistributedAvailabilityGroups } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  DistributedAvailabilityGroup,
  DistributedAvailabilityGroupsListByInstanceNextOptionalParams,
  DistributedAvailabilityGroupsListByInstanceOptionalParams,
  DistributedAvailabilityGroupsListByInstanceResponse,
  DistributedAvailabilityGroupsGetOptionalParams,
  DistributedAvailabilityGroupsGetResponse,
  DistributedAvailabilityGroupsCreateOrUpdateOptionalParams,
  DistributedAvailabilityGroupsCreateOrUpdateResponse,
  DistributedAvailabilityGroupsDeleteOptionalParams,
  DistributedAvailabilityGroupsUpdateOptionalParams,
  DistributedAvailabilityGroupsUpdateResponse,
  DistributedAvailabilityGroupsListByInstanceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DistributedAvailabilityGroups operations. */
export class DistributedAvailabilityGroupsImpl
  implements DistributedAvailabilityGroups {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class DistributedAvailabilityGroups class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of a distributed availability groups in instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  public listByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: DistributedAvailabilityGroupsListByInstanceOptionalParams
  ): PagedAsyncIterableIterator<DistributedAvailabilityGroup> {
    const iter = this.listByInstancePagingAll(
      resourceGroupName,
      managedInstanceName,
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
        return this.listByInstancePagingPage(
          resourceGroupName,
          managedInstanceName,
          options
        );
      }
    };
  }

  private async *listByInstancePagingPage(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: DistributedAvailabilityGroupsListByInstanceOptionalParams
  ): AsyncIterableIterator<DistributedAvailabilityGroup[]> {
    let result = await this._listByInstance(
      resourceGroupName,
      managedInstanceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByInstanceNext(
        resourceGroupName,
        managedInstanceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByInstancePagingAll(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: DistributedAvailabilityGroupsListByInstanceOptionalParams
  ): AsyncIterableIterator<DistributedAvailabilityGroup> {
    for await (const page of this.listByInstancePagingPage(
      resourceGroupName,
      managedInstanceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of a distributed availability groups in instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  private _listByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: DistributedAvailabilityGroupsListByInstanceOptionalParams
  ): Promise<DistributedAvailabilityGroupsListByInstanceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, options },
      listByInstanceOperationSpec
    );
  }

  /**
   * Gets a distributed availability group info.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param distributedAvailabilityGroupName The distributed availability group name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    distributedAvailabilityGroupName: string,
    options?: DistributedAvailabilityGroupsGetOptionalParams
  ): Promise<DistributedAvailabilityGroupsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        distributedAvailabilityGroupName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Creates a distributed availability group between Sql On-Prem and Sql Managed Instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param distributedAvailabilityGroupName The distributed availability group name.
   * @param parameters The distributed availability group info.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    distributedAvailabilityGroupName: string,
    parameters: DistributedAvailabilityGroup,
    options?: DistributedAvailabilityGroupsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DistributedAvailabilityGroupsCreateOrUpdateResponse>,
      DistributedAvailabilityGroupsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DistributedAvailabilityGroupsCreateOrUpdateResponse> => {
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
        managedInstanceName,
        distributedAvailabilityGroupName,
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
   * Creates a distributed availability group between Sql On-Prem and Sql Managed Instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param distributedAvailabilityGroupName The distributed availability group name.
   * @param parameters The distributed availability group info.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    distributedAvailabilityGroupName: string,
    parameters: DistributedAvailabilityGroup,
    options?: DistributedAvailabilityGroupsCreateOrUpdateOptionalParams
  ): Promise<DistributedAvailabilityGroupsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      managedInstanceName,
      distributedAvailabilityGroupName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Drops a distributed availability group between Sql On-Prem and Sql Managed Instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param distributedAvailabilityGroupName The distributed availability group name.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    managedInstanceName: string,
    distributedAvailabilityGroupName: string,
    options?: DistributedAvailabilityGroupsDeleteOptionalParams
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
        managedInstanceName,
        distributedAvailabilityGroupName,
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
   * Drops a distributed availability group between Sql On-Prem and Sql Managed Instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param distributedAvailabilityGroupName The distributed availability group name.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    distributedAvailabilityGroupName: string,
    options?: DistributedAvailabilityGroupsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      managedInstanceName,
      distributedAvailabilityGroupName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates a distributed availability group replication mode.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param distributedAvailabilityGroupName The distributed availability group name.
   * @param parameters The distributed availability group info.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    distributedAvailabilityGroupName: string,
    parameters: DistributedAvailabilityGroup,
    options?: DistributedAvailabilityGroupsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DistributedAvailabilityGroupsUpdateResponse>,
      DistributedAvailabilityGroupsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DistributedAvailabilityGroupsUpdateResponse> => {
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
        managedInstanceName,
        distributedAvailabilityGroupName,
        parameters,
        options
      },
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
   * Updates a distributed availability group replication mode.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param distributedAvailabilityGroupName The distributed availability group name.
   * @param parameters The distributed availability group info.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    distributedAvailabilityGroupName: string,
    parameters: DistributedAvailabilityGroup,
    options?: DistributedAvailabilityGroupsUpdateOptionalParams
  ): Promise<DistributedAvailabilityGroupsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      managedInstanceName,
      distributedAvailabilityGroupName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByInstanceNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param nextLink The nextLink from the previous successful call to the ListByInstance method.
   * @param options The options parameters.
   */
  private _listByInstanceNext(
    resourceGroupName: string,
    managedInstanceName: string,
    nextLink: string,
    options?: DistributedAvailabilityGroupsListByInstanceNextOptionalParams
  ): Promise<DistributedAvailabilityGroupsListByInstanceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, nextLink, options },
      listByInstanceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByInstanceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/distributedAvailabilityGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DistributedAvailabilityGroupsListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/distributedAvailabilityGroups/{distributedAvailabilityGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DistributedAvailabilityGroup
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.distributedAvailabilityGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/distributedAvailabilityGroups/{distributedAvailabilityGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DistributedAvailabilityGroup
    },
    201: {
      bodyMapper: Mappers.DistributedAvailabilityGroup
    },
    202: {
      bodyMapper: Mappers.DistributedAvailabilityGroup
    },
    204: {
      bodyMapper: Mappers.DistributedAvailabilityGroup
    },
    default: {}
  },
  requestBody: Parameters.parameters75,
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.distributedAvailabilityGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/distributedAvailabilityGroups/{distributedAvailabilityGroupName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.distributedAvailabilityGroupName
  ],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/distributedAvailabilityGroups/{distributedAvailabilityGroupName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DistributedAvailabilityGroup
    },
    201: {
      bodyMapper: Mappers.DistributedAvailabilityGroup
    },
    202: {
      bodyMapper: Mappers.DistributedAvailabilityGroup
    },
    204: {
      bodyMapper: Mappers.DistributedAvailabilityGroup
    },
    default: {}
  },
  requestBody: Parameters.parameters75,
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.distributedAvailabilityGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByInstanceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DistributedAvailabilityGroupsListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
