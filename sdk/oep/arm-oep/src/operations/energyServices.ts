/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { EnergyServices } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { OpenEnergyPlatformManagementServiceAPIs } from "../openEnergyPlatformManagementServiceAPIs";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  EnergyService,
  EnergyServicesListByResourceGroupNextOptionalParams,
  EnergyServicesListByResourceGroupOptionalParams,
  EnergyServicesListBySubscriptionNextOptionalParams,
  EnergyServicesListBySubscriptionOptionalParams,
  EnergyServicesListByResourceGroupResponse,
  EnergyServicesListBySubscriptionResponse,
  EnergyServicesGetOptionalParams,
  EnergyServicesGetResponse,
  EnergyServicesCreateOptionalParams,
  EnergyServicesCreateResponse,
  EnergyServicesUpdateOptionalParams,
  EnergyServicesUpdateResponse,
  EnergyServicesDeleteOptionalParams,
  EnergyServicesAddPartitionOptionalParams,
  EnergyServicesAddPartitionResponse,
  EnergyServicesRemovePartitionOptionalParams,
  EnergyServicesRemovePartitionResponse,
  EnergyServicesListPartitionsOptionalParams,
  EnergyServicesListPartitionsResponse,
  EnergyServicesListByResourceGroupNextResponse,
  EnergyServicesListBySubscriptionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing EnergyServices operations. */
export class EnergyServicesImpl implements EnergyServices {
  private readonly client: OpenEnergyPlatformManagementServiceAPIs;

  /**
   * Initialize a new instance of the class EnergyServices class.
   * @param client Reference to the service client
   */
  constructor(client: OpenEnergyPlatformManagementServiceAPIs) {
    this.client = client;
  }

  /**
   * Returns list of oep resources..
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: EnergyServicesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<EnergyService> {
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
    options?: EnergyServicesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<EnergyService[]> {
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
    options?: EnergyServicesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<EnergyService> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists a collection of oep resources under the given Azure Subscription ID.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: EnergyServicesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<EnergyService> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: EnergyServicesListBySubscriptionOptionalParams
  ): AsyncIterableIterator<EnergyService[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: EnergyServicesListBySubscriptionOptionalParams
  ): AsyncIterableIterator<EnergyService> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Returns list of oep resources..
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: EnergyServicesListByResourceGroupOptionalParams
  ): Promise<EnergyServicesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Lists a collection of oep resources under the given Azure Subscription ID.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: EnergyServicesListBySubscriptionOptionalParams
  ): Promise<EnergyServicesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Returns oep resource for a given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The resource name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    options?: EnergyServicesGetOptionalParams
  ): Promise<EnergyServicesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      getOperationSpec
    );
  }

  /**
   * Method that gets called if subscribed for ResourceCreationBegin trigger.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The resource name.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    resourceName: string,
    options?: EnergyServicesCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<EnergyServicesCreateResponse>,
      EnergyServicesCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<EnergyServicesCreateResponse> => {
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
      { resourceGroupName, resourceName, options },
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
   * Method that gets called if subscribed for ResourceCreationBegin trigger.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The resource name.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    resourceName: string,
    options?: EnergyServicesCreateOptionalParams
  ): Promise<EnergyServicesCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      resourceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The resource name.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    resourceName: string,
    options?: EnergyServicesUpdateOptionalParams
  ): Promise<EnergyServicesUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      updateOperationSpec
    );
  }

  /**
   * Deletes oep resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The resource name.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    resourceName: string,
    options?: EnergyServicesDeleteOptionalParams
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
      { resourceGroupName, resourceName, options },
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
   * Deletes oep resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The resource name.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    resourceName: string,
    options?: EnergyServicesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      resourceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Method that gets called if new partition is to be added in a resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The resource name.
   * @param options The options parameters.
   */
  async beginAddPartition(
    resourceGroupName: string,
    resourceName: string,
    options?: EnergyServicesAddPartitionOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<EnergyServicesAddPartitionResponse>,
      EnergyServicesAddPartitionResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<EnergyServicesAddPartitionResponse> => {
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
      { resourceGroupName, resourceName, options },
      addPartitionOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Method that gets called if new partition is to be added in a resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The resource name.
   * @param options The options parameters.
   */
  async beginAddPartitionAndWait(
    resourceGroupName: string,
    resourceName: string,
    options?: EnergyServicesAddPartitionOptionalParams
  ): Promise<EnergyServicesAddPartitionResponse> {
    const poller = await this.beginAddPartition(
      resourceGroupName,
      resourceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Method that gets called if new partition is to be removed from a resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The resource name.
   * @param options The options parameters.
   */
  async beginRemovePartition(
    resourceGroupName: string,
    resourceName: string,
    options?: EnergyServicesRemovePartitionOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<EnergyServicesRemovePartitionResponse>,
      EnergyServicesRemovePartitionResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<EnergyServicesRemovePartitionResponse> => {
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
      { resourceGroupName, resourceName, options },
      removePartitionOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Method that gets called if new partition is to be removed from a resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The resource name.
   * @param options The options parameters.
   */
  async beginRemovePartitionAndWait(
    resourceGroupName: string,
    resourceName: string,
    options?: EnergyServicesRemovePartitionOptionalParams
  ): Promise<EnergyServicesRemovePartitionResponse> {
    const poller = await this.beginRemovePartition(
      resourceGroupName,
      resourceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Method that gets called when list of partitions is requested.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The resource name.
   * @param options The options parameters.
   */
  listPartitions(
    resourceGroupName: string,
    resourceName: string,
    options?: EnergyServicesListPartitionsOptionalParams
  ): Promise<EnergyServicesListPartitionsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourceName, options },
      listPartitionsOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: EnergyServicesListByResourceGroupNextOptionalParams
  ): Promise<EnergyServicesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: EnergyServicesListBySubscriptionNextOptionalParams
  ): Promise<EnergyServicesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OpenEnergyPlatform/energyServices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnergyServiceList
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
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.OpenEnergyPlatform/energyServices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnergyServiceList
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
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OpenEnergyPlatform/energyServices/{resourceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnergyService
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
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OpenEnergyPlatform/energyServices/{resourceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.EnergyService
    },
    201: {
      bodyMapper: Mappers.EnergyService
    },
    202: {
      bodyMapper: Mappers.EnergyService
    },
    204: {
      bodyMapper: Mappers.EnergyService
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body1,
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OpenEnergyPlatform/energyServices/{resourceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.EnergyService
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OpenEnergyPlatform/energyServices/{resourceName}",
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
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const addPartitionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OpenEnergyPlatform/energyServices/{resourceName}/addPartition",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DataPartitionAddOrRemoveRequest
    },
    201: {
      bodyMapper: Mappers.DataPartitionAddOrRemoveRequest
    },
    202: {
      bodyMapper: Mappers.DataPartitionAddOrRemoveRequest
    },
    204: {
      bodyMapper: Mappers.DataPartitionAddOrRemoveRequest
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const removePartitionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OpenEnergyPlatform/energyServices/{resourceName}/removePartition",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DataPartitionAddOrRemoveRequest
    },
    201: {
      bodyMapper: Mappers.DataPartitionAddOrRemoveRequest
    },
    202: {
      bodyMapper: Mappers.DataPartitionAddOrRemoveRequest
    },
    204: {
      bodyMapper: Mappers.DataPartitionAddOrRemoveRequest
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listPartitionsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OpenEnergyPlatform/energyServices/{resourceName}/listPartitions",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DataPartitionsListResult
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
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnergyServiceList
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
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EnergyServiceList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
