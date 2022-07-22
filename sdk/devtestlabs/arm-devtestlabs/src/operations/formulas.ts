/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Formulas } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DevTestLabsClient } from "../devTestLabsClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Formula,
  FormulasListNextOptionalParams,
  FormulasListOptionalParams,
  FormulasListResponse,
  FormulasGetOptionalParams,
  FormulasGetResponse,
  FormulasCreateOrUpdateOptionalParams,
  FormulasCreateOrUpdateResponse,
  FormulasDeleteOptionalParams,
  FormulaFragment,
  FormulasUpdateOptionalParams,
  FormulasUpdateResponse,
  FormulasListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Formulas operations. */
export class FormulasImpl implements Formulas {
  private readonly client: DevTestLabsClient;

  /**
   * Initialize a new instance of the class Formulas class.
   * @param client Reference to the service client
   */
  constructor(client: DevTestLabsClient) {
    this.client = client;
  }

  /**
   * List formulas in a given lab.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    labName: string,
    options?: FormulasListOptionalParams
  ): PagedAsyncIterableIterator<Formula> {
    const iter = this.listPagingAll(resourceGroupName, labName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, labName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    labName: string,
    options?: FormulasListOptionalParams
  ): AsyncIterableIterator<Formula[]> {
    let result = await this._list(resourceGroupName, labName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        labName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    labName: string,
    options?: FormulasListOptionalParams
  ): AsyncIterableIterator<Formula> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      labName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List formulas in a given lab.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    labName: string,
    options?: FormulasListOptionalParams
  ): Promise<FormulasListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, options },
      listOperationSpec
    );
  }

  /**
   * Get formula.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the formula.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: FormulasGetOptionalParams
  ): Promise<FormulasGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, name, options },
      getOperationSpec
    );
  }

  /**
   * Create or replace an existing Formula. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the formula.
   * @param formula A formula for creating a VM, specifying an image base and other parameters
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    labName: string,
    name: string,
    formula: Formula,
    options?: FormulasCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<FormulasCreateOrUpdateResponse>,
      FormulasCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<FormulasCreateOrUpdateResponse> => {
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
      { resourceGroupName, labName, name, formula, options },
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
   * Create or replace an existing Formula. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the formula.
   * @param formula A formula for creating a VM, specifying an image base and other parameters
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    labName: string,
    name: string,
    formula: Formula,
    options?: FormulasCreateOrUpdateOptionalParams
  ): Promise<FormulasCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      labName,
      name,
      formula,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete formula.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the formula.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: FormulasDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, name, options },
      deleteOperationSpec
    );
  }

  /**
   * Allows modifying tags of formulas. All other properties will be ignored.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the formula.
   * @param formula Allows modifying tags of formulas. All other properties will be ignored.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    labName: string,
    name: string,
    formula: FormulaFragment,
    options?: FormulasUpdateOptionalParams
  ): Promise<FormulasUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, name, formula, options },
      updateOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    labName: string,
    nextLink: string,
    options?: FormulasListNextOptionalParams
  ): Promise<FormulasListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/formulas",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FormulaList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/formulas/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Formula
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/formulas/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Formula
    },
    201: {
      bodyMapper: Mappers.Formula
    },
    202: {
      bodyMapper: Mappers.Formula
    },
    204: {
      bodyMapper: Mappers.Formula
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.formula,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/formulas/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/formulas/{name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Formula
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.formula1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName
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
      bodyMapper: Mappers.FormulaList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
