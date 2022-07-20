/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { EmailTemplate } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  EmailTemplateContract,
  EmailTemplateListByServiceNextOptionalParams,
  EmailTemplateListByServiceOptionalParams,
  EmailTemplateListByServiceResponse,
  TemplateName,
  EmailTemplateGetEntityTagOptionalParams,
  EmailTemplateGetEntityTagResponse,
  EmailTemplateGetOptionalParams,
  EmailTemplateGetResponse,
  EmailTemplateUpdateParameters,
  EmailTemplateCreateOrUpdateOptionalParams,
  EmailTemplateCreateOrUpdateResponse,
  EmailTemplateUpdateOptionalParams,
  EmailTemplateUpdateResponse,
  EmailTemplateDeleteOptionalParams,
  EmailTemplateListByServiceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing EmailTemplate operations. */
export class EmailTemplateImpl implements EmailTemplate {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class EmailTemplate class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Gets all email templates
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  public listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: EmailTemplateListByServiceOptionalParams
  ): PagedAsyncIterableIterator<EmailTemplateContract> {
    const iter = this.listByServicePagingAll(
      resourceGroupName,
      serviceName,
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
        return this.listByServicePagingPage(
          resourceGroupName,
          serviceName,
          options
        );
      }
    };
  }

  private async *listByServicePagingPage(
    resourceGroupName: string,
    serviceName: string,
    options?: EmailTemplateListByServiceOptionalParams
  ): AsyncIterableIterator<EmailTemplateContract[]> {
    let result = await this._listByService(
      resourceGroupName,
      serviceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByServiceNext(
        resourceGroupName,
        serviceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByServicePagingAll(
    resourceGroupName: string,
    serviceName: string,
    options?: EmailTemplateListByServiceOptionalParams
  ): AsyncIterableIterator<EmailTemplateContract> {
    for await (const page of this.listByServicePagingPage(
      resourceGroupName,
      serviceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all email templates
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  private _listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: EmailTemplateListByServiceOptionalParams
  ): Promise<EmailTemplateListByServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options },
      listByServiceOperationSpec
    );
  }

  /**
   * Gets the entity state (Etag) version of the email template specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    templateName: TemplateName,
    options?: EmailTemplateGetEntityTagOptionalParams
  ): Promise<EmailTemplateGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, templateName, options },
      getEntityTagOperationSpec
    );
  }

  /**
   * Gets the details of the email template specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    templateName: TemplateName,
    options?: EmailTemplateGetOptionalParams
  ): Promise<EmailTemplateGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, templateName, options },
      getOperationSpec
    );
  }

  /**
   * Updates an Email Template.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier.
   * @param parameters Email Template update parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    templateName: TemplateName,
    parameters: EmailTemplateUpdateParameters,
    options?: EmailTemplateCreateOrUpdateOptionalParams
  ): Promise<EmailTemplateCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, templateName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Updates API Management email template
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Update parameters.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    templateName: TemplateName,
    ifMatch: string,
    parameters: EmailTemplateUpdateParameters,
    options?: EmailTemplateUpdateOptionalParams
  ): Promise<EmailTemplateUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        templateName,
        ifMatch,
        parameters,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Reset the Email Template to default template provided by the API Management service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param templateName Email Template Name Identifier.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    templateName: TemplateName,
    ifMatch: string,
    options?: EmailTemplateDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, templateName, ifMatch, options },
      deleteOperationSpec
    );
  }

  /**
   * ListByServiceNext
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param nextLink The nextLink from the previous successful call to the ListByService method.
   * @param options The options parameters.
   */
  private _listByServiceNext(
    resourceGroupName: string,
    serviceName: string,
    nextLink: string,
    options?: EmailTemplateListByServiceNextOptionalParams
  ): Promise<EmailTemplateListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, nextLink, options },
      listByServiceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServiceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/templates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EmailTemplateCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getEntityTagOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/templates/{templateName}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.EmailTemplateGetEntityTagHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.templateName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/templates/{templateName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EmailTemplateContract,
      headersMapper: Mappers.EmailTemplateGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.templateName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/templates/{templateName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.EmailTemplateContract
    },
    201: {
      bodyMapper: Mappers.EmailTemplateContract
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters34,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.templateName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/templates/{templateName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.EmailTemplateContract,
      headersMapper: Mappers.EmailTemplateUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters34,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.templateName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch1
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/templates/{templateName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.templateName
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer
};
const listByServiceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EmailTemplateCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
