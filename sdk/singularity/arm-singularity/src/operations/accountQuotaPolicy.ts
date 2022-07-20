/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AccountQuotaPolicy } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SingularityManagementClient } from "../singularityManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  AccountQuotaPolicyResourceDescription,
  AccountQuotaPolicyListByAccountNextOptionalParams,
  AccountQuotaPolicyListByAccountOptionalParams,
  AccountQuotaPolicyCreateOrUpdateOptionalParams,
  AccountQuotaPolicyCreateOrUpdateResponse,
  AccountQuotaPolicyResourcePatchDescription,
  AccountQuotaPolicyUpdateOptionalParams,
  AccountQuotaPolicyUpdateResponse,
  AccountQuotaPolicyGetOptionalParams,
  AccountQuotaPolicyGetResponse,
  AccountQuotaPolicyListByAccountResponse,
  AccountQuotaPolicyListByAccountNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AccountQuotaPolicy operations. */
export class AccountQuotaPolicyImpl implements AccountQuotaPolicy {
  private readonly client: SingularityManagementClient;

  /**
   * Initialize a new instance of the class AccountQuotaPolicy class.
   * @param client Reference to the service client
   */
  constructor(client: SingularityManagementClient) {
    this.client = client;
  }

  /**
   * Gets the information about all account quota policy resources in a given account. The information
   * include the description and other properties of the account quota policy.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param accountName The name of the Singularity account.
   * @param options The options parameters.
   */
  public listByAccount(
    resourceGroupName: string,
    accountName: string,
    options?: AccountQuotaPolicyListByAccountOptionalParams
  ): PagedAsyncIterableIterator<AccountQuotaPolicyResourceDescription> {
    const iter = this.listByAccountPagingAll(
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
        return this.listByAccountPagingPage(
          resourceGroupName,
          accountName,
          options
        );
      }
    };
  }

  private async *listByAccountPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: AccountQuotaPolicyListByAccountOptionalParams
  ): AsyncIterableIterator<AccountQuotaPolicyResourceDescription[]> {
    let result = await this._listByAccount(
      resourceGroupName,
      accountName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByAccountNext(
        resourceGroupName,
        accountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByAccountPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: AccountQuotaPolicyListByAccountOptionalParams
  ): AsyncIterableIterator<AccountQuotaPolicyResourceDescription> {
    for await (const page of this.listByAccountPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Creates an account resource with the specified name, description and properties. If an account
   * resource with the same name exists, then it is updated with the specified description and
   * properties. Currently the only supported policy name is 'AccountQuotaPolicy'
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param accountName The name of the Singularity account.
   * @param policyName The name of the Singularity account quota policy. Should only be Default.
   * @param body Singularity AccountQuotaPolicy information.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    accountName: string,
    policyName: string,
    body: AccountQuotaPolicyResourceDescription,
    options?: AccountQuotaPolicyCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AccountQuotaPolicyCreateOrUpdateResponse>,
      AccountQuotaPolicyCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AccountQuotaPolicyCreateOrUpdateResponse> => {
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
      { resourceGroupName, accountName, policyName, body, options },
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
   * Creates an account resource with the specified name, description and properties. If an account
   * resource with the same name exists, then it is updated with the specified description and
   * properties. Currently the only supported policy name is 'AccountQuotaPolicy'
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param accountName The name of the Singularity account.
   * @param policyName The name of the Singularity account quota policy. Should only be Default.
   * @param body Singularity AccountQuotaPolicy information.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    policyName: string,
    body: AccountQuotaPolicyResourceDescription,
    options?: AccountQuotaPolicyCreateOrUpdateOptionalParams
  ): Promise<AccountQuotaPolicyCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      accountName,
      policyName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * If an account resource with the same name exists, then it is updated with the specified description
   * and properties. Currently the only supported policy name is 'AccountQuotaPolicy'
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param accountName The name of the Singularity account.
   * @param policyName The name of the Singularity account quota policy. Should only be Default.
   * @param body Singularity AccountQuotaPolicy information.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    accountName: string,
    policyName: string,
    body: AccountQuotaPolicyResourcePatchDescription,
    options?: AccountQuotaPolicyUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AccountQuotaPolicyUpdateResponse>,
      AccountQuotaPolicyUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AccountQuotaPolicyUpdateResponse> => {
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
      { resourceGroupName, accountName, policyName, body, options },
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
   * If an account resource with the same name exists, then it is updated with the specified description
   * and properties. Currently the only supported policy name is 'AccountQuotaPolicy'
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param accountName The name of the Singularity account.
   * @param policyName The name of the Singularity account quota policy. Should only be Default.
   * @param body Singularity AccountQuotaPolicy information.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    policyName: string,
    body: AccountQuotaPolicyResourcePatchDescription,
    options?: AccountQuotaPolicyUpdateOptionalParams
  ): Promise<AccountQuotaPolicyUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      accountName,
      policyName,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the information about the account quota policy resource with the given name. The information
   * include the description and other properties of the account quota policy.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param accountName The name of the Singularity account.
   * @param policyName The name of the Singularity account quota policy. Should only be Default.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    policyName: string,
    options?: AccountQuotaPolicyGetOptionalParams
  ): Promise<AccountQuotaPolicyGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, policyName, options },
      getOperationSpec
    );
  }

  /**
   * Gets the information about all account quota policy resources in a given account. The information
   * include the description and other properties of the account quota policy.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param accountName The name of the Singularity account.
   * @param options The options parameters.
   */
  private _listByAccount(
    resourceGroupName: string,
    accountName: string,
    options?: AccountQuotaPolicyListByAccountOptionalParams
  ): Promise<AccountQuotaPolicyListByAccountResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listByAccountOperationSpec
    );
  }

  /**
   * ListByAccountNext
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param accountName The name of the Singularity account.
   * @param nextLink The nextLink from the previous successful call to the ListByAccount method.
   * @param options The options parameters.
   */
  private _listByAccountNext(
    resourceGroupName: string,
    accountName: string,
    nextLink: string,
    options?: AccountQuotaPolicyListByAccountNextOptionalParams
  ): Promise<AccountQuotaPolicyListByAccountNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, nextLink, options },
      listByAccountNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Singularity/accounts/{accountName}/accountQuotaPolicies/{policyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AccountQuotaPolicyResourceDescription
    },
    201: {
      bodyMapper: Mappers.AccountQuotaPolicyResourceDescription
    },
    202: {
      bodyMapper: Mappers.AccountQuotaPolicyResourceDescription
    },
    204: {
      bodyMapper: Mappers.AccountQuotaPolicyResourceDescription
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.policyName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Singularity/accounts/{accountName}/accountQuotaPolicies/{policyName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AccountQuotaPolicyResourceDescription
    },
    201: {
      bodyMapper: Mappers.AccountQuotaPolicyResourceDescription
    },
    202: {
      bodyMapper: Mappers.AccountQuotaPolicyResourceDescription
    },
    204: {
      bodyMapper: Mappers.AccountQuotaPolicyResourceDescription
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.body1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.policyName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Singularity/accounts/{accountName}/accountQuotaPolicies/{policyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccountQuotaPolicyResourceDescription
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.policyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByAccountOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Singularity/accounts/{accountName}/accountQuotaPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccountQuotaPolicyResourceDescriptionList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.continuationToken],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByAccountNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccountQuotaPolicyResourceDescriptionList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.continuationToken],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
