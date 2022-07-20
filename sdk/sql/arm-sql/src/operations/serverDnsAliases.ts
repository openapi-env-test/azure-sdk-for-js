/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ServerDnsAliases } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ServerDnsAlias,
  ServerDnsAliasesListByServerNextOptionalParams,
  ServerDnsAliasesListByServerOptionalParams,
  ServerDnsAliasesGetOptionalParams,
  ServerDnsAliasesGetResponse,
  ServerDnsAliasesCreateOrUpdateOptionalParams,
  ServerDnsAliasesCreateOrUpdateResponse,
  ServerDnsAliasesDeleteOptionalParams,
  ServerDnsAliasesListByServerResponse,
  ServerDnsAliasAcquisition,
  ServerDnsAliasesAcquireOptionalParams,
  ServerDnsAliasesAcquireResponse,
  ServerDnsAliasesListByServerNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ServerDnsAliases operations. */
export class ServerDnsAliasesImpl implements ServerDnsAliases {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class ServerDnsAliases class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of server DNS aliases for a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server that the alias is pointing to.
   * @param options The options parameters.
   */
  public listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerDnsAliasesListByServerOptionalParams
  ): PagedAsyncIterableIterator<ServerDnsAlias> {
    const iter = this.listByServerPagingAll(
      resourceGroupName,
      serverName,
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
        return this.listByServerPagingPage(
          resourceGroupName,
          serverName,
          options
        );
      }
    };
  }

  private async *listByServerPagingPage(
    resourceGroupName: string,
    serverName: string,
    options?: ServerDnsAliasesListByServerOptionalParams
  ): AsyncIterableIterator<ServerDnsAlias[]> {
    let result = await this._listByServer(
      resourceGroupName,
      serverName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByServerNext(
        resourceGroupName,
        serverName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByServerPagingAll(
    resourceGroupName: string,
    serverName: string,
    options?: ServerDnsAliasesListByServerOptionalParams
  ): AsyncIterableIterator<ServerDnsAlias> {
    for await (const page of this.listByServerPagingPage(
      resourceGroupName,
      serverName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a server DNS alias.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server that the alias is pointing to.
   * @param dnsAliasName The name of the server dns alias.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    dnsAliasName: string,
    options?: ServerDnsAliasesGetOptionalParams
  ): Promise<ServerDnsAliasesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, dnsAliasName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a server DNS alias.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server that the alias is pointing to.
   * @param dnsAliasName The name of the server dns alias.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    dnsAliasName: string,
    options?: ServerDnsAliasesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ServerDnsAliasesCreateOrUpdateResponse>,
      ServerDnsAliasesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ServerDnsAliasesCreateOrUpdateResponse> => {
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
      { resourceGroupName, serverName, dnsAliasName, options },
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
   * Creates a server DNS alias.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server that the alias is pointing to.
   * @param dnsAliasName The name of the server dns alias.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    dnsAliasName: string,
    options?: ServerDnsAliasesCreateOrUpdateOptionalParams
  ): Promise<ServerDnsAliasesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serverName,
      dnsAliasName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the server DNS alias with the given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server that the alias is pointing to.
   * @param dnsAliasName The name of the server dns alias.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    serverName: string,
    dnsAliasName: string,
    options?: ServerDnsAliasesDeleteOptionalParams
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
      { resourceGroupName, serverName, dnsAliasName, options },
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
   * Deletes the server DNS alias with the given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server that the alias is pointing to.
   * @param dnsAliasName The name of the server dns alias.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    serverName: string,
    dnsAliasName: string,
    options?: ServerDnsAliasesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      serverName,
      dnsAliasName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a list of server DNS aliases for a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server that the alias is pointing to.
   * @param options The options parameters.
   */
  private _listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerDnsAliasesListByServerOptionalParams
  ): Promise<ServerDnsAliasesListByServerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, options },
      listByServerOperationSpec
    );
  }

  /**
   * Acquires server DNS alias from another server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server that the alias is pointing to.
   * @param dnsAliasName The name of the server dns alias.
   * @param parameters A server dns alias acquisition request.
   * @param options The options parameters.
   */
  async beginAcquire(
    resourceGroupName: string,
    serverName: string,
    dnsAliasName: string,
    parameters: ServerDnsAliasAcquisition,
    options?: ServerDnsAliasesAcquireOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ServerDnsAliasesAcquireResponse>,
      ServerDnsAliasesAcquireResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ServerDnsAliasesAcquireResponse> => {
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
      { resourceGroupName, serverName, dnsAliasName, parameters, options },
      acquireOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Acquires server DNS alias from another server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server that the alias is pointing to.
   * @param dnsAliasName The name of the server dns alias.
   * @param parameters A server dns alias acquisition request.
   * @param options The options parameters.
   */
  async beginAcquireAndWait(
    resourceGroupName: string,
    serverName: string,
    dnsAliasName: string,
    parameters: ServerDnsAliasAcquisition,
    options?: ServerDnsAliasesAcquireOptionalParams
  ): Promise<ServerDnsAliasesAcquireResponse> {
    const poller = await this.beginAcquire(
      resourceGroupName,
      serverName,
      dnsAliasName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByServerNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server that the alias is pointing to.
   * @param nextLink The nextLink from the previous successful call to the ListByServer method.
   * @param options The options parameters.
   */
  private _listByServerNext(
    resourceGroupName: string,
    serverName: string,
    nextLink: string,
    options?: ServerDnsAliasesListByServerNextOptionalParams
  ): Promise<ServerDnsAliasesListByServerNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, nextLink, options },
      listByServerNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/dnsAliases/{dnsAliasName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerDnsAlias
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.dnsAliasName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/dnsAliases/{dnsAliasName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ServerDnsAlias
    },
    201: {
      bodyMapper: Mappers.ServerDnsAlias
    },
    202: {
      bodyMapper: Mappers.ServerDnsAlias
    },
    204: {
      bodyMapper: Mappers.ServerDnsAlias
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.dnsAliasName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/dnsAliases/{dnsAliasName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.dnsAliasName
  ],
  serializer
};
const listByServerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/dnsAliases",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerDnsAliasListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const acquireOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/dnsAliases/{dnsAliasName}/acquire",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ServerDnsAlias
    },
    201: {
      bodyMapper: Mappers.ServerDnsAlias
    },
    202: {
      bodyMapper: Mappers.ServerDnsAlias
    },
    204: {
      bodyMapper: Mappers.ServerDnsAlias
    },
    default: {}
  },
  requestBody: Parameters.parameters54,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.dnsAliasName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByServerNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerDnsAliasListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
