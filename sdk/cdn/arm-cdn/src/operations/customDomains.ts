/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { CustomDomains } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CdnManagementClient } from "../cdnManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  CustomDomain,
  CustomDomainsListByEndpointNextOptionalParams,
  CustomDomainsListByEndpointOptionalParams,
  CustomDomainsListByEndpointResponse,
  CustomDomainsGetOptionalParams,
  CustomDomainsGetResponse,
  CustomDomainParameters,
  CustomDomainsCreateOptionalParams,
  CustomDomainsCreateResponse,
  CustomDomainsDeleteOptionalParams,
  CustomDomainsDisableCustomHttpsOptionalParams,
  CustomDomainsDisableCustomHttpsResponse,
  CustomDomainsEnableCustomHttpsOptionalParams,
  CustomDomainsEnableCustomHttpsResponse,
  CustomDomainsListByEndpointNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing CustomDomains operations. */
export class CustomDomainsImpl implements CustomDomains {
  private readonly client: CdnManagementClient;

  /**
   * Initialize a new instance of the class CustomDomains class.
   * @param client Reference to the service client
   */
  constructor(client: CdnManagementClient) {
    this.client = client;
  }

  /**
   * Lists all of the existing custom domains within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param options The options parameters.
   */
  public listByEndpoint(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: CustomDomainsListByEndpointOptionalParams
  ): PagedAsyncIterableIterator<CustomDomain> {
    const iter = this.listByEndpointPagingAll(
      resourceGroupName,
      profileName,
      endpointName,
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
        return this.listByEndpointPagingPage(
          resourceGroupName,
          profileName,
          endpointName,
          options
        );
      }
    };
  }

  private async *listByEndpointPagingPage(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: CustomDomainsListByEndpointOptionalParams
  ): AsyncIterableIterator<CustomDomain[]> {
    let result = await this._listByEndpoint(
      resourceGroupName,
      profileName,
      endpointName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByEndpointNext(
        resourceGroupName,
        profileName,
        endpointName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByEndpointPagingAll(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: CustomDomainsListByEndpointOptionalParams
  ): AsyncIterableIterator<CustomDomain> {
    for await (const page of this.listByEndpointPagingPage(
      resourceGroupName,
      profileName,
      endpointName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all of the existing custom domains within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param options The options parameters.
   */
  private _listByEndpoint(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    options?: CustomDomainsListByEndpointOptionalParams
  ): Promise<CustomDomainsListByEndpointResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, endpointName, options },
      listByEndpointOperationSpec
    );
  }

  /**
   * Gets an existing custom domain within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    customDomainName: string,
    options?: CustomDomainsGetOptionalParams
  ): Promise<CustomDomainsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        endpointName,
        customDomainName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Creates a new custom domain within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param customDomainProperties Properties required to create a new custom domain.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    customDomainName: string,
    customDomainProperties: CustomDomainParameters,
    options?: CustomDomainsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CustomDomainsCreateResponse>,
      CustomDomainsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CustomDomainsCreateResponse> => {
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
        profileName,
        endpointName,
        customDomainName,
        customDomainProperties,
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
   * Creates a new custom domain within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param customDomainProperties Properties required to create a new custom domain.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    customDomainName: string,
    customDomainProperties: CustomDomainParameters,
    options?: CustomDomainsCreateOptionalParams
  ): Promise<CustomDomainsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      profileName,
      endpointName,
      customDomainName,
      customDomainProperties,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an existing custom domain within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    customDomainName: string,
    options?: CustomDomainsDeleteOptionalParams
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
        profileName,
        endpointName,
        customDomainName,
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
   * Deletes an existing custom domain within an endpoint.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    customDomainName: string,
    options?: CustomDomainsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      profileName,
      endpointName,
      customDomainName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Disable https delivery of the custom domain.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param options The options parameters.
   */
  async beginDisableCustomHttps(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    customDomainName: string,
    options?: CustomDomainsDisableCustomHttpsOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CustomDomainsDisableCustomHttpsResponse>,
      CustomDomainsDisableCustomHttpsResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CustomDomainsDisableCustomHttpsResponse> => {
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
        profileName,
        endpointName,
        customDomainName,
        options
      },
      disableCustomHttpsOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Disable https delivery of the custom domain.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param options The options parameters.
   */
  async beginDisableCustomHttpsAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    customDomainName: string,
    options?: CustomDomainsDisableCustomHttpsOptionalParams
  ): Promise<CustomDomainsDisableCustomHttpsResponse> {
    const poller = await this.beginDisableCustomHttps(
      resourceGroupName,
      profileName,
      endpointName,
      customDomainName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Enable https delivery of the custom domain.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param options The options parameters.
   */
  async beginEnableCustomHttps(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    customDomainName: string,
    options?: CustomDomainsEnableCustomHttpsOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<CustomDomainsEnableCustomHttpsResponse>,
      CustomDomainsEnableCustomHttpsResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<CustomDomainsEnableCustomHttpsResponse> => {
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
        profileName,
        endpointName,
        customDomainName,
        options
      },
      enableCustomHttpsOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Enable https delivery of the custom domain.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param customDomainName Name of the custom domain within an endpoint.
   * @param options The options parameters.
   */
  async beginEnableCustomHttpsAndWait(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    customDomainName: string,
    options?: CustomDomainsEnableCustomHttpsOptionalParams
  ): Promise<CustomDomainsEnableCustomHttpsResponse> {
    const poller = await this.beginEnableCustomHttps(
      resourceGroupName,
      profileName,
      endpointName,
      customDomainName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByEndpointNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the CDN profile which is unique within the resource group.
   * @param endpointName Name of the endpoint under the profile which is unique globally.
   * @param nextLink The nextLink from the previous successful call to the ListByEndpoint method.
   * @param options The options parameters.
   */
  private _listByEndpointNext(
    resourceGroupName: string,
    profileName: string,
    endpointName: string,
    nextLink: string,
    options?: CustomDomainsListByEndpointNextOptionalParams
  ): Promise<CustomDomainsListByEndpointNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, endpointName, nextLink, options },
      listByEndpointNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByEndpointOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/customDomains",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CustomDomainListResult
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
    Parameters.profileName,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/customDomains/{customDomainName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CustomDomain
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
    Parameters.profileName,
    Parameters.customDomainName,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/customDomains/{customDomainName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CustomDomain
    },
    201: {
      bodyMapper: Mappers.CustomDomain
    },
    202: {
      bodyMapper: Mappers.CustomDomain
    },
    204: {
      bodyMapper: Mappers.CustomDomain
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.customDomainProperties1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.customDomainName,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/customDomains/{customDomainName}",
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
    Parameters.profileName,
    Parameters.customDomainName,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const disableCustomHttpsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/customDomains/{customDomainName}/disableCustomHttps",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CustomDomain
    },
    201: {
      bodyMapper: Mappers.CustomDomain
    },
    202: {
      bodyMapper: Mappers.CustomDomain
    },
    204: {
      bodyMapper: Mappers.CustomDomain
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
    Parameters.profileName,
    Parameters.customDomainName,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const enableCustomHttpsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/endpoints/{endpointName}/customDomains/{customDomainName}/enableCustomHttps",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CustomDomain
    },
    201: {
      bodyMapper: Mappers.CustomDomain
    },
    202: {
      bodyMapper: Mappers.CustomDomain
    },
    204: {
      bodyMapper: Mappers.CustomDomain
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.customDomainHttpsParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName,
    Parameters.customDomainName,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listByEndpointNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CustomDomainListResult
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
    Parameters.profileName,
    Parameters.nextLink,
    Parameters.endpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
