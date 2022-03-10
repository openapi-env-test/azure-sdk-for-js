/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { VirtualMachineScaleSetExtensions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClient } from "../computeManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  VirtualMachineScaleSetExtension,
  VirtualMachineScaleSetExtensionsListNextOptionalParams,
  VirtualMachineScaleSetExtensionsListOptionalParams,
  VirtualMachineScaleSetExtensionsCreateOrUpdateOptionalParams,
  VirtualMachineScaleSetExtensionsCreateOrUpdateResponse,
  VirtualMachineScaleSetExtensionUpdate,
  VirtualMachineScaleSetExtensionsUpdateOptionalParams,
  VirtualMachineScaleSetExtensionsUpdateResponse,
  VirtualMachineScaleSetExtensionsDeleteOptionalParams,
  VirtualMachineScaleSetExtensionsGetOptionalParams,
  VirtualMachineScaleSetExtensionsGetResponse,
  VirtualMachineScaleSetExtensionsListResponse,
  VirtualMachineScaleSetExtensionsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing VirtualMachineScaleSetExtensions operations. */
export class VirtualMachineScaleSetExtensionsImpl
  implements VirtualMachineScaleSetExtensions {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class VirtualMachineScaleSetExtensions class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of all extensions in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set containing the extension.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetExtensionsListOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachineScaleSetExtension> {
    const iter = this.listPagingAll(resourceGroupName, vmScaleSetName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, vmScaleSetName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetExtensionsListOptionalParams
  ): AsyncIterableIterator<VirtualMachineScaleSetExtension[]> {
    let result = await this._list(resourceGroupName, vmScaleSetName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        vmScaleSetName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetExtensionsListOptionalParams
  ): AsyncIterableIterator<VirtualMachineScaleSetExtension> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      vmScaleSetName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * The operation to create or update an extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set where the extension should be create or updated.
   * @param vmssExtensionName The name of the VM scale set extension.
   * @param extensionParameters Parameters supplied to the Create VM scale set Extension operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    vmScaleSetName: string,
    vmssExtensionName: string,
    extensionParameters: VirtualMachineScaleSetExtension,
    options?: VirtualMachineScaleSetExtensionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        VirtualMachineScaleSetExtensionsCreateOrUpdateResponse
      >,
      VirtualMachineScaleSetExtensionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VirtualMachineScaleSetExtensionsCreateOrUpdateResponse> => {
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
        vmScaleSetName,
        vmssExtensionName,
        extensionParameters,
        options
      },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * The operation to create or update an extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set where the extension should be create or updated.
   * @param vmssExtensionName The name of the VM scale set extension.
   * @param extensionParameters Parameters supplied to the Create VM scale set Extension operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    vmssExtensionName: string,
    extensionParameters: VirtualMachineScaleSetExtension,
    options?: VirtualMachineScaleSetExtensionsCreateOrUpdateOptionalParams
  ): Promise<VirtualMachineScaleSetExtensionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      vmScaleSetName,
      vmssExtensionName,
      extensionParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to update an extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set where the extension should be updated.
   * @param vmssExtensionName The name of the VM scale set extension.
   * @param extensionParameters Parameters supplied to the Update VM scale set Extension operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    vmScaleSetName: string,
    vmssExtensionName: string,
    extensionParameters: VirtualMachineScaleSetExtensionUpdate,
    options?: VirtualMachineScaleSetExtensionsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachineScaleSetExtensionsUpdateResponse>,
      VirtualMachineScaleSetExtensionsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VirtualMachineScaleSetExtensionsUpdateResponse> => {
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
        vmScaleSetName,
        vmssExtensionName,
        extensionParameters,
        options
      },
      updateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * The operation to update an extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set where the extension should be updated.
   * @param vmssExtensionName The name of the VM scale set extension.
   * @param extensionParameters Parameters supplied to the Update VM scale set Extension operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    vmssExtensionName: string,
    extensionParameters: VirtualMachineScaleSetExtensionUpdate,
    options?: VirtualMachineScaleSetExtensionsUpdateOptionalParams
  ): Promise<VirtualMachineScaleSetExtensionsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      vmScaleSetName,
      vmssExtensionName,
      extensionParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to delete the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set where the extension should be deleted.
   * @param vmssExtensionName The name of the VM scale set extension.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    vmScaleSetName: string,
    vmssExtensionName: string,
    options?: VirtualMachineScaleSetExtensionsDeleteOptionalParams
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
      { resourceGroupName, vmScaleSetName, vmssExtensionName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * The operation to delete the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set where the extension should be deleted.
   * @param vmssExtensionName The name of the VM scale set extension.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    vmScaleSetName: string,
    vmssExtensionName: string,
    options?: VirtualMachineScaleSetExtensionsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      vmScaleSetName,
      vmssExtensionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to get the extension.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set containing the extension.
   * @param vmssExtensionName The name of the VM scale set extension.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vmScaleSetName: string,
    vmssExtensionName: string,
    options?: VirtualMachineScaleSetExtensionsGetOptionalParams
  ): Promise<VirtualMachineScaleSetExtensionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmScaleSetName, vmssExtensionName, options },
      getOperationSpec
    );
  }

  /**
   * Gets a list of all extensions in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set containing the extension.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetExtensionsListOptionalParams
  ): Promise<VirtualMachineScaleSetExtensionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmScaleSetName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set containing the extension.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    vmScaleSetName: string,
    nextLink: string,
    options?: VirtualMachineScaleSetExtensionsListNextOptionalParams
  ): Promise<VirtualMachineScaleSetExtensionsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vmScaleSetName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions/{vmssExtensionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetExtension
    },
    201: {
      bodyMapper: Mappers.VirtualMachineScaleSetExtension
    },
    202: {
      bodyMapper: Mappers.VirtualMachineScaleSetExtension
    },
    204: {
      bodyMapper: Mappers.VirtualMachineScaleSetExtension
    }
  },
  requestBody: Parameters.extensionParameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName,
    Parameters.vmssExtensionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions/{vmssExtensionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetExtension
    },
    201: {
      bodyMapper: Mappers.VirtualMachineScaleSetExtension
    },
    202: {
      bodyMapper: Mappers.VirtualMachineScaleSetExtension
    },
    204: {
      bodyMapper: Mappers.VirtualMachineScaleSetExtension
    }
  },
  requestBody: Parameters.extensionParameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName,
    Parameters.vmssExtensionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions/{vmssExtensionName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName,
    Parameters.vmssExtensionName
  ],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions/{vmssExtensionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetExtension
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName,
    Parameters.vmssExtensionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetExtensionListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vmScaleSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineScaleSetExtensionListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.vmScaleSetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
