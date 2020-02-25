/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/encryptionScopesMappers";
import * as Parameters from "../models/parameters";
import { StorageManagementClientContext } from "../storageManagementClientContext";

/** Class representing a EncryptionScopes. */
export class EncryptionScopes {
  private readonly client: StorageManagementClientContext;

  /**
   * Create a EncryptionScopes.
   * @param {StorageManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorageManagementClientContext) {
    this.client = client;
  }

  /**
   * Synchronously creates or updates an encryption scope under the specified storage account. If an
   * encryption scope is already created and a subsequent request is issued with different
   * properties, the encryption scope properties will be updated per the specified request.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param encryptionScopeName The name of the encryption scope within the specified storage
   * account. Encryption scope names must be between 3 and 63 characters in length and use numbers,
   * lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and
   * followed by a letter or number.
   * @param encryptionScope Encryption scope properties to be used for the create or update.
   * @param [options] The optional parameters
   * @returns Promise<Models.EncryptionScopesPutResponse>
   */
  put(resourceGroupName: string, accountName: string, encryptionScopeName: string, encryptionScope: Models.EncryptionScope, options?: msRest.RequestOptionsBase): Promise<Models.EncryptionScopesPutResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param encryptionScopeName The name of the encryption scope within the specified storage
   * account. Encryption scope names must be between 3 and 63 characters in length and use numbers,
   * lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and
   * followed by a letter or number.
   * @param encryptionScope Encryption scope properties to be used for the create or update.
   * @param callback The callback
   */
  put(resourceGroupName: string, accountName: string, encryptionScopeName: string, encryptionScope: Models.EncryptionScope, callback: msRest.ServiceCallback<Models.EncryptionScope>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param encryptionScopeName The name of the encryption scope within the specified storage
   * account. Encryption scope names must be between 3 and 63 characters in length and use numbers,
   * lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and
   * followed by a letter or number.
   * @param encryptionScope Encryption scope properties to be used for the create or update.
   * @param options The optional parameters
   * @param callback The callback
   */
  put(resourceGroupName: string, accountName: string, encryptionScopeName: string, encryptionScope: Models.EncryptionScope, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EncryptionScope>): void;
  put(resourceGroupName: string, accountName: string, encryptionScopeName: string, encryptionScope: Models.EncryptionScope, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EncryptionScope>, callback?: msRest.ServiceCallback<Models.EncryptionScope>): Promise<Models.EncryptionScopesPutResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        encryptionScopeName,
        encryptionScope,
        options
      },
      putOperationSpec,
      callback) as Promise<Models.EncryptionScopesPutResponse>;
  }

  /**
   * Update encryption scope properties as specified in the request body. Update fails if the
   * specified encryption scope does not already exist.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param encryptionScopeName The name of the encryption scope within the specified storage
   * account. Encryption scope names must be between 3 and 63 characters in length and use numbers,
   * lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and
   * followed by a letter or number.
   * @param encryptionScope Encryption scope properties to be used for the update.
   * @param [options] The optional parameters
   * @returns Promise<Models.EncryptionScopesPatchResponse>
   */
  patch(resourceGroupName: string, accountName: string, encryptionScopeName: string, encryptionScope: Models.EncryptionScope, options?: msRest.RequestOptionsBase): Promise<Models.EncryptionScopesPatchResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param encryptionScopeName The name of the encryption scope within the specified storage
   * account. Encryption scope names must be between 3 and 63 characters in length and use numbers,
   * lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and
   * followed by a letter or number.
   * @param encryptionScope Encryption scope properties to be used for the update.
   * @param callback The callback
   */
  patch(resourceGroupName: string, accountName: string, encryptionScopeName: string, encryptionScope: Models.EncryptionScope, callback: msRest.ServiceCallback<Models.EncryptionScope>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param encryptionScopeName The name of the encryption scope within the specified storage
   * account. Encryption scope names must be between 3 and 63 characters in length and use numbers,
   * lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and
   * followed by a letter or number.
   * @param encryptionScope Encryption scope properties to be used for the update.
   * @param options The optional parameters
   * @param callback The callback
   */
  patch(resourceGroupName: string, accountName: string, encryptionScopeName: string, encryptionScope: Models.EncryptionScope, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EncryptionScope>): void;
  patch(resourceGroupName: string, accountName: string, encryptionScopeName: string, encryptionScope: Models.EncryptionScope, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EncryptionScope>, callback?: msRest.ServiceCallback<Models.EncryptionScope>): Promise<Models.EncryptionScopesPatchResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        encryptionScopeName,
        encryptionScope,
        options
      },
      patchOperationSpec,
      callback) as Promise<Models.EncryptionScopesPatchResponse>;
  }

  /**
   * Returns the properties for the specified encryption scope.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param encryptionScopeName The name of the encryption scope within the specified storage
   * account. Encryption scope names must be between 3 and 63 characters in length and use numbers,
   * lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and
   * followed by a letter or number.
   * @param [options] The optional parameters
   * @returns Promise<Models.EncryptionScopesGetResponse>
   */
  get(resourceGroupName: string, accountName: string, encryptionScopeName: string, options?: msRest.RequestOptionsBase): Promise<Models.EncryptionScopesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param encryptionScopeName The name of the encryption scope within the specified storage
   * account. Encryption scope names must be between 3 and 63 characters in length and use numbers,
   * lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and
   * followed by a letter or number.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, encryptionScopeName: string, callback: msRest.ServiceCallback<Models.EncryptionScope>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param encryptionScopeName The name of the encryption scope within the specified storage
   * account. Encryption scope names must be between 3 and 63 characters in length and use numbers,
   * lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and
   * followed by a letter or number.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, encryptionScopeName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EncryptionScope>): void;
  get(resourceGroupName: string, accountName: string, encryptionScopeName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EncryptionScope>, callback?: msRest.ServiceCallback<Models.EncryptionScope>): Promise<Models.EncryptionScopesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        encryptionScopeName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.EncryptionScopesGetResponse>;
  }

  /**
   * Lists all the encryption scopes available under the specified storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param [options] The optional parameters
   * @returns Promise<Models.EncryptionScopesListResponse>
   */
  list(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.EncryptionScopesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.EncryptionScopeListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EncryptionScopeListResult>): void;
  list(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EncryptionScopeListResult>, callback?: msRest.ServiceCallback<Models.EncryptionScopeListResult>): Promise<Models.EncryptionScopesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.EncryptionScopesListResponse>;
  }

  /**
   * Lists all the encryption scopes available under the specified storage account.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.EncryptionScopesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.EncryptionScopesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.EncryptionScopeListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EncryptionScopeListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EncryptionScopeListResult>, callback?: msRest.ServiceCallback<Models.EncryptionScopeListResult>): Promise<Models.EncryptionScopesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.EncryptionScopesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const putOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/encryptionScopes/{encryptionScopeName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.encryptionScopeName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "encryptionScope",
    mapper: {
      ...Mappers.EncryptionScope,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionScope
    },
    201: {
      bodyMapper: Mappers.EncryptionScope
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const patchOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/encryptionScopes/{encryptionScopeName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.encryptionScopeName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "encryptionScope",
    mapper: {
      ...Mappers.EncryptionScope,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionScope
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/encryptionScopes/{encryptionScopeName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.encryptionScopeName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionScope
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/encryptionScopes",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionScopeListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionScopeListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
