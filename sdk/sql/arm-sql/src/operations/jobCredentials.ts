/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { JobCredentials } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  JobCredential,
  JobCredentialsListByAgentNextOptionalParams,
  JobCredentialsListByAgentOptionalParams,
  JobCredentialsListByAgentResponse,
  JobCredentialsGetOptionalParams,
  JobCredentialsGetResponse,
  JobCredentialsCreateOrUpdateOptionalParams,
  JobCredentialsCreateOrUpdateResponse,
  JobCredentialsDeleteOptionalParams,
  JobCredentialsListByAgentNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing JobCredentials operations. */
export class JobCredentialsImpl implements JobCredentials {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class JobCredentials class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of jobs credentials.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param options The options parameters.
   */
  public listByAgent(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    options?: JobCredentialsListByAgentOptionalParams
  ): PagedAsyncIterableIterator<JobCredential> {
    const iter = this.listByAgentPagingAll(
      resourceGroupName,
      serverName,
      jobAgentName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByAgentPagingPage(
          resourceGroupName,
          serverName,
          jobAgentName,
          options,
          settings
        );
      }
    };
  }

  private async *listByAgentPagingPage(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    options?: JobCredentialsListByAgentOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<JobCredential[]> {
    let result: JobCredentialsListByAgentResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByAgent(
        resourceGroupName,
        serverName,
        jobAgentName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByAgentNext(
        resourceGroupName,
        serverName,
        jobAgentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByAgentPagingAll(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    options?: JobCredentialsListByAgentOptionalParams
  ): AsyncIterableIterator<JobCredential> {
    for await (const page of this.listByAgentPagingPage(
      resourceGroupName,
      serverName,
      jobAgentName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of jobs credentials.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param options The options parameters.
   */
  private _listByAgent(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    options?: JobCredentialsListByAgentOptionalParams
  ): Promise<JobCredentialsListByAgentResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, jobAgentName, options },
      listByAgentOperationSpec
    );
  }

  /**
   * Gets a jobs credential.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param credentialName The name of the credential.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    credentialName: string,
    options?: JobCredentialsGetOptionalParams
  ): Promise<JobCredentialsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, jobAgentName, credentialName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates a job credential.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param credentialName The name of the credential.
   * @param parameters The requested job credential state.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    credentialName: string,
    parameters: JobCredential,
    options?: JobCredentialsCreateOrUpdateOptionalParams
  ): Promise<JobCredentialsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        credentialName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes a job credential.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param credentialName The name of the credential.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    credentialName: string,
    options?: JobCredentialsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, jobAgentName, credentialName, options },
      deleteOperationSpec
    );
  }

  /**
   * ListByAgentNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param nextLink The nextLink from the previous successful call to the ListByAgent method.
   * @param options The options parameters.
   */
  private _listByAgentNext(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    nextLink: string,
    options?: JobCredentialsListByAgentNextOptionalParams
  ): Promise<JobCredentialsListByAgentNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, jobAgentName, nextLink, options },
      listByAgentNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByAgentOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/credentials",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobCredentialListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/credentials/{credentialName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobCredential
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.credentialName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/credentials/{credentialName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.JobCredential
    },
    201: {
      bodyMapper: Mappers.JobCredential
    },
    default: {}
  },
  requestBody: Parameters.parameters26,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.credentialName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/credentials/{credentialName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.credentialName
  ],
  serializer
};
const listByAgentNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobCredentialListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink,
    Parameters.jobAgentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
