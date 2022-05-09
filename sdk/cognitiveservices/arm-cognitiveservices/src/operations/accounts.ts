/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Accounts } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CognitiveServicesManagementClient } from "../cognitiveServicesManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Account,
  AccountsListByResourceGroupNextOptionalParams,
  AccountsListByResourceGroupOptionalParams,
  AccountsListNextOptionalParams,
  AccountsListOptionalParams,
  AccountModel,
  AccountsListModelsNextOptionalParams,
  AccountsListModelsOptionalParams,
  AccountsCreateOptionalParams,
  AccountsCreateResponse,
  AccountsUpdateOptionalParams,
  AccountsUpdateResponse,
  AccountsDeleteOptionalParams,
  AccountsGetOptionalParams,
  AccountsGetResponse,
  AccountsListByResourceGroupResponse,
  AccountsListResponse,
  AccountsListKeysOptionalParams,
  AccountsListKeysResponse,
  KeyName,
  AccountsRegenerateKeyOptionalParams,
  AccountsRegenerateKeyResponse,
  AccountsListSkusOptionalParams,
  AccountsListSkusResponse,
  AccountsListUsagesOptionalParams,
  AccountsListUsagesResponse,
  AccountsListModelsResponse,
  AccountsListByResourceGroupNextResponse,
  AccountsListNextResponse,
  AccountsListModelsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Accounts operations. */
export class AccountsImpl implements Accounts {
  private readonly client: CognitiveServicesManagementClient;

  /**
   * Initialize a new instance of the class Accounts class.
   * @param client Reference to the service client
   */
  constructor(client: CognitiveServicesManagementClient) {
    this.client = client;
  }

  /**
   * Returns all the resources of a particular type belonging to a resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: AccountsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Account> {
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
    options?: AccountsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Account[]> {
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
    options?: AccountsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Account> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns all the resources of a particular type belonging to a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: AccountsListOptionalParams
  ): PagedAsyncIterableIterator<Account> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: AccountsListOptionalParams
  ): AsyncIterableIterator<Account[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: AccountsListOptionalParams
  ): AsyncIterableIterator<Account> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List available Models for the requested Cognitive Services account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param options The options parameters.
   */
  public listModels(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsListModelsOptionalParams
  ): PagedAsyncIterableIterator<AccountModel> {
    const iter = this.listModelsPagingAll(
      resourceGroupName,
      accountName,
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
        return this.listModelsPagingPage(
          resourceGroupName,
          accountName,
          options
        );
      }
    };
  }

  private async *listModelsPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsListModelsOptionalParams
  ): AsyncIterableIterator<AccountModel[]> {
    let result = await this._listModels(
      resourceGroupName,
      accountName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listModelsNext(
        resourceGroupName,
        accountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listModelsPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsListModelsOptionalParams
  ): AsyncIterableIterator<AccountModel> {
    for await (const page of this.listModelsPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param account The parameters to provide for the created account.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    accountName: string,
    account: Account,
    options?: AccountsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AccountsCreateResponse>,
      AccountsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AccountsCreateResponse> => {
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
      { resourceGroupName, accountName, account, options },
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
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param account The parameters to provide for the created account.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    accountName: string,
    account: Account,
    options?: AccountsCreateOptionalParams
  ): Promise<AccountsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      accountName,
      account,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates a Cognitive Services account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param account The parameters to provide for the created account.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    accountName: string,
    account: Account,
    options?: AccountsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AccountsUpdateResponse>,
      AccountsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AccountsUpdateResponse> => {
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
      { resourceGroupName, accountName, account, options },
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
   * Updates a Cognitive Services account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param account The parameters to provide for the created account.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    account: Account,
    options?: AccountsUpdateOptionalParams
  ): Promise<AccountsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      accountName,
      account,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a Cognitive Services account from the resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsDeleteOptionalParams
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
      { resourceGroupName, accountName, options },
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
   * Deletes a Cognitive Services account from the resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      accountName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Returns a Cognitive Services account specified by the parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsGetOptionalParams
  ): Promise<AccountsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      getOperationSpec
    );
  }

  /**
   * Returns all the resources of a particular type belonging to a resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: AccountsListByResourceGroupOptionalParams
  ): Promise<AccountsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Returns all the resources of a particular type belonging to a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: AccountsListOptionalParams
  ): Promise<AccountsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Lists the account keys for the specified Cognitive Services account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsListKeysOptionalParams
  ): Promise<AccountsListKeysResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listKeysOperationSpec
    );
  }

  /**
   * Regenerates the specified account key for the specified Cognitive Services account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param keyName key name to generate (Key1|Key2)
   * @param options The options parameters.
   */
  regenerateKey(
    resourceGroupName: string,
    accountName: string,
    keyName: KeyName,
    options?: AccountsRegenerateKeyOptionalParams
  ): Promise<AccountsRegenerateKeyResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, keyName, options },
      regenerateKeyOperationSpec
    );
  }

  /**
   * List available SKUs for the requested Cognitive Services account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param options The options parameters.
   */
  listSkus(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsListSkusOptionalParams
  ): Promise<AccountsListSkusResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listSkusOperationSpec
    );
  }

  /**
   * Get usages for the requested Cognitive Services account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param options The options parameters.
   */
  listUsages(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsListUsagesOptionalParams
  ): Promise<AccountsListUsagesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listUsagesOperationSpec
    );
  }

  /**
   * List available Models for the requested Cognitive Services account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param options The options parameters.
   */
  private _listModels(
    resourceGroupName: string,
    accountName: string,
    options?: AccountsListModelsOptionalParams
  ): Promise<AccountsListModelsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listModelsOperationSpec
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
    options?: AccountsListByResourceGroupNextOptionalParams
  ): Promise<AccountsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: AccountsListNextOptionalParams
  ): Promise<AccountsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListModelsNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param nextLink The nextLink from the previous successful call to the ListModels method.
   * @param options The options parameters.
   */
  private _listModelsNext(
    resourceGroupName: string,
    accountName: string,
    nextLink: string,
    options?: AccountsListModelsNextOptionalParams
  ): Promise<AccountsListModelsNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, nextLink, options },
      listModelsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Account
    },
    201: {
      bodyMapper: Mappers.Account
    },
    202: {
      bodyMapper: Mappers.Account
    },
    204: {
      bodyMapper: Mappers.Account
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.account,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Account
    },
    201: {
      bodyMapper: Mappers.Account
    },
    202: {
      bodyMapper: Mappers.Account
    },
    204: {
      bodyMapper: Mappers.Account
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.account,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}",
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
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Account
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccountListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.CognitiveServices/accounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccountListResult
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
const listKeysOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/listKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ApiKeys
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const regenerateKeyOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/regenerateKey",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ApiKeys
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: {
    parameterPath: { keyName: ["keyName"] },
    mapper: { ...Mappers.RegenerateKeyParameters, required: true }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listSkusOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/skus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccountSkuListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listUsagesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/usages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UsageListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listModelsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CognitiveServices/accounts/{accountName}/models",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccountModelListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
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
      bodyMapper: Mappers.AccountListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccountListResult
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
const listModelsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccountModelListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
