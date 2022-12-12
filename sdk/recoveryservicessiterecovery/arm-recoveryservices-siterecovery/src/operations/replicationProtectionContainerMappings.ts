/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ReplicationProtectionContainerMappings } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SiteRecoveryManagementClient } from "../siteRecoveryManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ProtectionContainerMapping,
  ReplicationProtectionContainerMappingsListByReplicationProtectionContainersNextOptionalParams,
  ReplicationProtectionContainerMappingsListByReplicationProtectionContainersOptionalParams,
  ReplicationProtectionContainerMappingsListNextOptionalParams,
  ReplicationProtectionContainerMappingsListOptionalParams,
  ReplicationProtectionContainerMappingsListByReplicationProtectionContainersResponse,
  ReplicationProtectionContainerMappingsGetOptionalParams,
  ReplicationProtectionContainerMappingsGetResponse,
  CreateProtectionContainerMappingInput,
  ReplicationProtectionContainerMappingsCreateOptionalParams,
  ReplicationProtectionContainerMappingsCreateResponse,
  ReplicationProtectionContainerMappingsPurgeOptionalParams,
  UpdateProtectionContainerMappingInput,
  ReplicationProtectionContainerMappingsUpdateOptionalParams,
  ReplicationProtectionContainerMappingsUpdateResponse,
  RemoveProtectionContainerMappingInput,
  ReplicationProtectionContainerMappingsDeleteOptionalParams,
  ReplicationProtectionContainerMappingsListResponse,
  ReplicationProtectionContainerMappingsListByReplicationProtectionContainersNextResponse,
  ReplicationProtectionContainerMappingsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ReplicationProtectionContainerMappings operations. */
export class ReplicationProtectionContainerMappingsImpl
  implements ReplicationProtectionContainerMappings {
  private readonly client: SiteRecoveryManagementClient;

  /**
   * Initialize a new instance of the class ReplicationProtectionContainerMappings class.
   * @param client Reference to the service client
   */
  constructor(client: SiteRecoveryManagementClient) {
    this.client = client;
  }

  /**
   * Lists the protection container mappings for a protection container.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param options The options parameters.
   */
  public listByReplicationProtectionContainers(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    options?: ReplicationProtectionContainerMappingsListByReplicationProtectionContainersOptionalParams
  ): PagedAsyncIterableIterator<ProtectionContainerMapping> {
    const iter = this.listByReplicationProtectionContainersPagingAll(
      resourceName,
      resourceGroupName,
      fabricName,
      protectionContainerName,
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
        return this.listByReplicationProtectionContainersPagingPage(
          resourceName,
          resourceGroupName,
          fabricName,
          protectionContainerName,
          options
        );
      }
    };
  }

  private async *listByReplicationProtectionContainersPagingPage(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    options?: ReplicationProtectionContainerMappingsListByReplicationProtectionContainersOptionalParams
  ): AsyncIterableIterator<ProtectionContainerMapping[]> {
    let result = await this._listByReplicationProtectionContainers(
      resourceName,
      resourceGroupName,
      fabricName,
      protectionContainerName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByReplicationProtectionContainersNext(
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByReplicationProtectionContainersPagingAll(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    options?: ReplicationProtectionContainerMappingsListByReplicationProtectionContainersOptionalParams
  ): AsyncIterableIterator<ProtectionContainerMapping> {
    for await (const page of this.listByReplicationProtectionContainersPagingPage(
      resourceName,
      resourceGroupName,
      fabricName,
      protectionContainerName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the protection container mappings in the vault.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  public list(
    resourceName: string,
    resourceGroupName: string,
    options?: ReplicationProtectionContainerMappingsListOptionalParams
  ): PagedAsyncIterableIterator<ProtectionContainerMapping> {
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
    options?: ReplicationProtectionContainerMappingsListOptionalParams
  ): AsyncIterableIterator<ProtectionContainerMapping[]> {
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
    options?: ReplicationProtectionContainerMappingsListOptionalParams
  ): AsyncIterableIterator<ProtectionContainerMapping> {
    for await (const page of this.listPagingPage(
      resourceName,
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the protection container mappings for a protection container.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param options The options parameters.
   */
  private _listByReplicationProtectionContainers(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    options?: ReplicationProtectionContainerMappingsListByReplicationProtectionContainersOptionalParams
  ): Promise<
    ReplicationProtectionContainerMappingsListByReplicationProtectionContainersResponse
  > {
    return this.client.sendOperationRequest(
      {
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        options
      },
      listByReplicationProtectionContainersOperationSpec
    );
  }

  /**
   * Gets the details of a protection container mapping.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param mappingName Protection Container mapping name.
   * @param options The options parameters.
   */
  get(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    mappingName: string,
    options?: ReplicationProtectionContainerMappingsGetOptionalParams
  ): Promise<ReplicationProtectionContainerMappingsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        mappingName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * The operation to create a protection container mapping.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param mappingName Protection container mapping name.
   * @param creationInput Mapping creation input.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    mappingName: string,
    creationInput: CreateProtectionContainerMappingInput,
    options?: ReplicationProtectionContainerMappingsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ReplicationProtectionContainerMappingsCreateResponse>,
      ReplicationProtectionContainerMappingsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ReplicationProtectionContainerMappingsCreateResponse> => {
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
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        mappingName,
        creationInput,
        options
      },
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
   * The operation to create a protection container mapping.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param mappingName Protection container mapping name.
   * @param creationInput Mapping creation input.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    mappingName: string,
    creationInput: CreateProtectionContainerMappingInput,
    options?: ReplicationProtectionContainerMappingsCreateOptionalParams
  ): Promise<ReplicationProtectionContainerMappingsCreateResponse> {
    const poller = await this.beginCreate(
      resourceName,
      resourceGroupName,
      fabricName,
      protectionContainerName,
      mappingName,
      creationInput,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to purge(force delete) a protection container mapping.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param mappingName Protection container mapping name.
   * @param options The options parameters.
   */
  async beginPurge(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    mappingName: string,
    options?: ReplicationProtectionContainerMappingsPurgeOptionalParams
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
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        mappingName,
        options
      },
      purgeOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to purge(force delete) a protection container mapping.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param mappingName Protection container mapping name.
   * @param options The options parameters.
   */
  async beginPurgeAndWait(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    mappingName: string,
    options?: ReplicationProtectionContainerMappingsPurgeOptionalParams
  ): Promise<void> {
    const poller = await this.beginPurge(
      resourceName,
      resourceGroupName,
      fabricName,
      protectionContainerName,
      mappingName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to update protection container mapping.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param mappingName Protection container mapping name.
   * @param updateInput Mapping update input.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    mappingName: string,
    updateInput: UpdateProtectionContainerMappingInput,
    options?: ReplicationProtectionContainerMappingsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ReplicationProtectionContainerMappingsUpdateResponse>,
      ReplicationProtectionContainerMappingsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ReplicationProtectionContainerMappingsUpdateResponse> => {
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
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        mappingName,
        updateInput,
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
   * The operation to update protection container mapping.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param mappingName Protection container mapping name.
   * @param updateInput Mapping update input.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    mappingName: string,
    updateInput: UpdateProtectionContainerMappingInput,
    options?: ReplicationProtectionContainerMappingsUpdateOptionalParams
  ): Promise<ReplicationProtectionContainerMappingsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceName,
      resourceGroupName,
      fabricName,
      protectionContainerName,
      mappingName,
      updateInput,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to delete or remove a protection container mapping.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param mappingName Protection container mapping name.
   * @param removalInput Removal input.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    mappingName: string,
    removalInput: RemoveProtectionContainerMappingInput,
    options?: ReplicationProtectionContainerMappingsDeleteOptionalParams
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
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        mappingName,
        removalInput,
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
   * The operation to delete or remove a protection container mapping.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param mappingName Protection container mapping name.
   * @param removalInput Removal input.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    mappingName: string,
    removalInput: RemoveProtectionContainerMappingInput,
    options?: ReplicationProtectionContainerMappingsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceName,
      resourceGroupName,
      fabricName,
      protectionContainerName,
      mappingName,
      removalInput,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists the protection container mappings in the vault.
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  private _list(
    resourceName: string,
    resourceGroupName: string,
    options?: ReplicationProtectionContainerMappingsListOptionalParams
  ): Promise<ReplicationProtectionContainerMappingsListResponse> {
    return this.client.sendOperationRequest(
      { resourceName, resourceGroupName, options },
      listOperationSpec
    );
  }

  /**
   * ListByReplicationProtectionContainersNext
   * @param resourceName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name.
   * @param protectionContainerName Protection container name.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListByReplicationProtectionContainers method.
   * @param options The options parameters.
   */
  private _listByReplicationProtectionContainersNext(
    resourceName: string,
    resourceGroupName: string,
    fabricName: string,
    protectionContainerName: string,
    nextLink: string,
    options?: ReplicationProtectionContainerMappingsListByReplicationProtectionContainersNextOptionalParams
  ): Promise<
    ReplicationProtectionContainerMappingsListByReplicationProtectionContainersNextResponse
  > {
    return this.client.sendOperationRequest(
      {
        resourceName,
        resourceGroupName,
        fabricName,
        protectionContainerName,
        nextLink,
        options
      },
      listByReplicationProtectionContainersNextOperationSpec
    );
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
    options?: ReplicationProtectionContainerMappingsListNextOptionalParams
  ): Promise<ReplicationProtectionContainerMappingsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceName, resourceGroupName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByReplicationProtectionContainersOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionContainerMappings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionContainerMappingCollection
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.protectionContainerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionContainerMappings/{mappingName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionContainerMapping
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.protectionContainerName,
    Parameters.mappingName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionContainerMappings/{mappingName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionContainerMapping
    },
    201: {
      bodyMapper: Mappers.ProtectionContainerMapping
    },
    202: {
      bodyMapper: Mappers.ProtectionContainerMapping
    },
    204: {
      bodyMapper: Mappers.ProtectionContainerMapping
    }
  },
  requestBody: Parameters.creationInput1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.protectionContainerName,
    Parameters.mappingName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const purgeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionContainerMappings/{mappingName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.protectionContainerName,
    Parameters.mappingName
  ],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionContainerMappings/{mappingName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionContainerMapping
    },
    201: {
      bodyMapper: Mappers.ProtectionContainerMapping
    },
    202: {
      bodyMapper: Mappers.ProtectionContainerMapping
    },
    204: {
      bodyMapper: Mappers.ProtectionContainerMapping
    }
  },
  requestBody: Parameters.updateInput,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.protectionContainerName,
    Parameters.mappingName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationProtectionContainerMappings/{mappingName}/remove",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  requestBody: Parameters.removalInput,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.protectionContainerName,
    Parameters.mappingName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationProtectionContainerMappings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionContainerMappingCollection
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByReplicationProtectionContainersNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionContainerMappingCollection
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceName,
    Parameters.fabricName,
    Parameters.protectionContainerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionContainerMappingCollection
    }
  },
  queryParameters: [Parameters.apiVersion],
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
