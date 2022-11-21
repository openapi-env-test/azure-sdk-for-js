/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { VariableValues } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { PolicyClient } from "../policyClient";
import {
  VariableValue,
  VariableValuesListNextOptionalParams,
  VariableValuesListOptionalParams,
  VariableValuesListForManagementGroupNextOptionalParams,
  VariableValuesListForManagementGroupOptionalParams,
  VariableValuesDeleteOptionalParams,
  VariableValuesCreateOrUpdateOptionalParams,
  VariableValuesCreateOrUpdateResponse,
  VariableValuesGetOptionalParams,
  VariableValuesGetResponse,
  VariableValuesListResponse,
  VariableValuesListForManagementGroupResponse,
  VariableValuesDeleteAtManagementGroupOptionalParams,
  VariableValuesCreateOrUpdateAtManagementGroupOptionalParams,
  VariableValuesCreateOrUpdateAtManagementGroupResponse,
  VariableValuesGetAtManagementGroupOptionalParams,
  VariableValuesGetAtManagementGroupResponse,
  VariableValuesListNextResponse,
  VariableValuesListForManagementGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing VariableValues operations. */
export class VariableValuesImpl implements VariableValues {
  private readonly client: PolicyClient;

  /**
   * Initialize a new instance of the class VariableValues class.
   * @param client Reference to the service client
   */
  constructor(client: PolicyClient) {
    this.client = client;
  }

  /**
   * This operation retrieves the list of all variable values associated with the given variable that is
   * at a subscription level.
   * @param variableName The name of the variable to operate on.
   * @param options The options parameters.
   */
  public list(
    variableName: string,
    options?: VariableValuesListOptionalParams
  ): PagedAsyncIterableIterator<VariableValue> {
    const iter = this.listPagingAll(variableName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(variableName, options);
      }
    };
  }

  private async *listPagingPage(
    variableName: string,
    options?: VariableValuesListOptionalParams
  ): AsyncIterableIterator<VariableValue[]> {
    let result = await this._list(variableName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(variableName, continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    variableName: string,
    options?: VariableValuesListOptionalParams
  ): AsyncIterableIterator<VariableValue> {
    for await (const page of this.listPagingPage(variableName, options)) {
      yield* page;
    }
  }

  /**
   * This operation retrieves the list of all variable values applicable the variable indicated at the
   * management group scope.
   * @param managementGroupId The ID of the management group.
   * @param variableName The name of the variable to operate on.
   * @param options The options parameters.
   */
  public listForManagementGroup(
    managementGroupId: string,
    variableName: string,
    options?: VariableValuesListForManagementGroupOptionalParams
  ): PagedAsyncIterableIterator<VariableValue> {
    const iter = this.listForManagementGroupPagingAll(
      managementGroupId,
      variableName,
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
        return this.listForManagementGroupPagingPage(
          managementGroupId,
          variableName,
          options
        );
      }
    };
  }

  private async *listForManagementGroupPagingPage(
    managementGroupId: string,
    variableName: string,
    options?: VariableValuesListForManagementGroupOptionalParams
  ): AsyncIterableIterator<VariableValue[]> {
    let result = await this._listForManagementGroup(
      managementGroupId,
      variableName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listForManagementGroupNext(
        managementGroupId,
        variableName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listForManagementGroupPagingAll(
    managementGroupId: string,
    variableName: string,
    options?: VariableValuesListForManagementGroupOptionalParams
  ): AsyncIterableIterator<VariableValue> {
    for await (const page of this.listForManagementGroupPagingPage(
      managementGroupId,
      variableName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * This operation deletes a variable value, given its name, the subscription it was created in, and the
   * variable it belongs to. The scope of a variable value is the part of its ID preceding
   * '/providers/Microsoft.Authorization/variables/{variableName}'.
   * @param variableName The name of the variable to operate on.
   * @param variableValueName The name of the variable value to operate on.
   * @param options The options parameters.
   */
  delete(
    variableName: string,
    variableValueName: string,
    options?: VariableValuesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { variableName, variableValueName, options },
      deleteOperationSpec
    );
  }

  /**
   *  This operation creates or updates a variable value with the given subscription and name for a given
   * variable. Variable values are scoped to the variable for which they are created for.
   * @param variableName The name of the variable to operate on.
   * @param variableValueName The name of the variable value to operate on.
   * @param parameters Parameters for the variable value.
   * @param options The options parameters.
   */
  createOrUpdate(
    variableName: string,
    variableValueName: string,
    parameters: VariableValue,
    options?: VariableValuesCreateOrUpdateOptionalParams
  ): Promise<VariableValuesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { variableName, variableValueName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * This operation retrieves a single variable value; given its name, subscription it was created at and
   * the variable it's created for.
   * @param variableName The name of the variable to operate on.
   * @param variableValueName The name of the variable value to operate on.
   * @param options The options parameters.
   */
  get(
    variableName: string,
    variableValueName: string,
    options?: VariableValuesGetOptionalParams
  ): Promise<VariableValuesGetResponse> {
    return this.client.sendOperationRequest(
      { variableName, variableValueName, options },
      getOperationSpec
    );
  }

  /**
   * This operation retrieves the list of all variable values associated with the given variable that is
   * at a subscription level.
   * @param variableName The name of the variable to operate on.
   * @param options The options parameters.
   */
  private _list(
    variableName: string,
    options?: VariableValuesListOptionalParams
  ): Promise<VariableValuesListResponse> {
    return this.client.sendOperationRequest(
      { variableName, options },
      listOperationSpec
    );
  }

  /**
   * This operation retrieves the list of all variable values applicable the variable indicated at the
   * management group scope.
   * @param managementGroupId The ID of the management group.
   * @param variableName The name of the variable to operate on.
   * @param options The options parameters.
   */
  private _listForManagementGroup(
    managementGroupId: string,
    variableName: string,
    options?: VariableValuesListForManagementGroupOptionalParams
  ): Promise<VariableValuesListForManagementGroupResponse> {
    return this.client.sendOperationRequest(
      { managementGroupId, variableName, options },
      listForManagementGroupOperationSpec
    );
  }

  /**
   * This operation deletes a variable value, given its name, the management group it was created in, and
   * the variable it belongs to. The scope of a variable value is the part of its ID preceding
   * '/providers/Microsoft.Authorization/variables/{variableName}'.
   * @param managementGroupId The ID of the management group.
   * @param variableName The name of the variable to operate on.
   * @param variableValueName The name of the variable value to operate on.
   * @param options The options parameters.
   */
  deleteAtManagementGroup(
    managementGroupId: string,
    variableName: string,
    variableValueName: string,
    options?: VariableValuesDeleteAtManagementGroupOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { managementGroupId, variableName, variableValueName, options },
      deleteAtManagementGroupOperationSpec
    );
  }

  /**
   *  This operation creates or updates a variable value with the given management group and name for a
   * given variable. Variable values are scoped to the variable for which they are created for.
   * @param managementGroupId The ID of the management group.
   * @param variableName The name of the variable to operate on.
   * @param variableValueName The name of the variable value to operate on.
   * @param parameters Parameters for the variable value.
   * @param options The options parameters.
   */
  createOrUpdateAtManagementGroup(
    managementGroupId: string,
    variableName: string,
    variableValueName: string,
    parameters: VariableValue,
    options?: VariableValuesCreateOrUpdateAtManagementGroupOptionalParams
  ): Promise<VariableValuesCreateOrUpdateAtManagementGroupResponse> {
    return this.client.sendOperationRequest(
      {
        managementGroupId,
        variableName,
        variableValueName,
        parameters,
        options
      },
      createOrUpdateAtManagementGroupOperationSpec
    );
  }

  /**
   * This operation retrieves a single variable value; given its name,  management group it was created
   * at and the variable it's created for.
   * @param managementGroupId The ID of the management group.
   * @param variableName The name of the variable to operate on.
   * @param variableValueName The name of the variable value to operate on.
   * @param options The options parameters.
   */
  getAtManagementGroup(
    managementGroupId: string,
    variableName: string,
    variableValueName: string,
    options?: VariableValuesGetAtManagementGroupOptionalParams
  ): Promise<VariableValuesGetAtManagementGroupResponse> {
    return this.client.sendOperationRequest(
      { managementGroupId, variableName, variableValueName, options },
      getAtManagementGroupOperationSpec
    );
  }

  /**
   * ListNext
   * @param variableName The name of the variable to operate on.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    variableName: string,
    nextLink: string,
    options?: VariableValuesListNextOptionalParams
  ): Promise<VariableValuesListNextResponse> {
    return this.client.sendOperationRequest(
      { variableName, nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListForManagementGroupNext
   * @param managementGroupId The ID of the management group.
   * @param variableName The name of the variable to operate on.
   * @param nextLink The nextLink from the previous successful call to the ListForManagementGroup method.
   * @param options The options parameters.
   */
  private _listForManagementGroupNext(
    managementGroupId: string,
    variableName: string,
    nextLink: string,
    options?: VariableValuesListForManagementGroupNextOptionalParams
  ): Promise<VariableValuesListForManagementGroupNextResponse> {
    return this.client.sendOperationRequest(
      { managementGroupId, variableName, nextLink, options },
      listForManagementGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/variables/{variableName}/values/{variableValueName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.variableName,
    Parameters.variableValueName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/variables/{variableName}/values/{variableValueName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VariableValue
    },
    201: {
      bodyMapper: Mappers.VariableValue
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters7,
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.variableName,
    Parameters.variableValueName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/variables/{variableName}/values/{variableValueName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VariableValue
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.variableName,
    Parameters.variableValueName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/variables/{variableName}/values",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VariableValueListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.variableName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listForManagementGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Authorization/variables/{variableName}/values",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VariableValueListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupId,
    Parameters.variableName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteAtManagementGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Authorization/variables/{variableName}/values/{variableValueName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupId,
    Parameters.variableName,
    Parameters.variableValueName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateAtManagementGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Authorization/variables/{variableName}/values/{variableValueName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VariableValue
    },
    201: {
      bodyMapper: Mappers.VariableValue
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters7,
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupId,
    Parameters.variableName,
    Parameters.variableValueName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getAtManagementGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Authorization/variables/{variableName}/values/{variableValueName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VariableValue
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupId,
    Parameters.variableName,
    Parameters.variableValueName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VariableValueListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.variableName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listForManagementGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VariableValueListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.managementGroupId,
    Parameters.variableName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
