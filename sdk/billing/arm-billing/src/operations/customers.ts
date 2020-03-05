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
import * as Mappers from "../models/customersMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a Customers. */
export class Customers {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a Customers.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists customers by billing profile which the current user can work with on-behalf of a partner.
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.CustomersListByBillingProfileResponse>
   */
  listByBillingProfile(billingAccountName: string, billingProfileName: string, options?: Models.CustomersListByBillingProfileOptionalParams): Promise<Models.CustomersListByBillingProfileResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param callback The callback
   */
  listByBillingProfile(billingAccountName: string, billingProfileName: string, callback: msRest.ServiceCallback<Models.CustomerListResult>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingProfile(billingAccountName: string, billingProfileName: string, options: Models.CustomersListByBillingProfileOptionalParams, callback: msRest.ServiceCallback<Models.CustomerListResult>): void;
  listByBillingProfile(billingAccountName: string, billingProfileName: string, options?: Models.CustomersListByBillingProfileOptionalParams | msRest.ServiceCallback<Models.CustomerListResult>, callback?: msRest.ServiceCallback<Models.CustomerListResult>): Promise<Models.CustomersListByBillingProfileResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        options
      },
      listByBillingProfileOperationSpec,
      callback) as Promise<Models.CustomersListByBillingProfileResponse>;
  }

  /**
   * Lists customers which the current user can work with on-behalf of a partner.
   * @param billingAccountName billing Account Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.CustomersListByBillingAccountResponse>
   */
  listByBillingAccount(billingAccountName: string, options?: Models.CustomersListByBillingAccountOptionalParams): Promise<Models.CustomersListByBillingAccountResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param callback The callback
   */
  listByBillingAccount(billingAccountName: string, callback: msRest.ServiceCallback<Models.CustomerListResult>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingAccount(billingAccountName: string, options: Models.CustomersListByBillingAccountOptionalParams, callback: msRest.ServiceCallback<Models.CustomerListResult>): void;
  listByBillingAccount(billingAccountName: string, options?: Models.CustomersListByBillingAccountOptionalParams | msRest.ServiceCallback<Models.CustomerListResult>, callback?: msRest.ServiceCallback<Models.CustomerListResult>): Promise<Models.CustomersListByBillingAccountResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        options
      },
      listByBillingAccountOperationSpec,
      callback) as Promise<Models.CustomersListByBillingAccountResponse>;
  }

  /**
   * Gets a customer by its id.
   * @param billingAccountName billing Account Id.
   * @param customerName Customer name.
   * @param [options] The optional parameters
   * @returns Promise<Models.CustomersGetResponse>
   */
  get(billingAccountName: string, customerName: string, options?: Models.CustomersGetOptionalParams): Promise<Models.CustomersGetResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param customerName Customer name.
   * @param callback The callback
   */
  get(billingAccountName: string, customerName: string, callback: msRest.ServiceCallback<Models.Customer>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param customerName Customer name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(billingAccountName: string, customerName: string, options: Models.CustomersGetOptionalParams, callback: msRest.ServiceCallback<Models.Customer>): void;
  get(billingAccountName: string, customerName: string, options?: Models.CustomersGetOptionalParams | msRest.ServiceCallback<Models.Customer>, callback?: msRest.ServiceCallback<Models.Customer>): Promise<Models.CustomersGetResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        customerName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.CustomersGetResponse>;
  }

  /**
   * Lists customers by billing profile which the current user can work with on-behalf of a partner.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CustomersListByBillingProfileNextResponse>
   */
  listByBillingProfileNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.CustomersListByBillingProfileNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByBillingProfileNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CustomerListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingProfileNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CustomerListResult>): void;
  listByBillingProfileNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CustomerListResult>, callback?: msRest.ServiceCallback<Models.CustomerListResult>): Promise<Models.CustomersListByBillingProfileNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByBillingProfileNextOperationSpec,
      callback) as Promise<Models.CustomersListByBillingProfileNextResponse>;
  }

  /**
   * Lists customers which the current user can work with on-behalf of a partner.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CustomersListByBillingAccountNextResponse>
   */
  listByBillingAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.CustomersListByBillingAccountNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByBillingAccountNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CustomerListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingAccountNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CustomerListResult>): void;
  listByBillingAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CustomerListResult>, callback?: msRest.ServiceCallback<Models.CustomerListResult>): Promise<Models.CustomersListByBillingAccountNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByBillingAccountNextOperationSpec,
      callback) as Promise<Models.CustomersListByBillingAccountNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByBillingProfileOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.skiptoken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CustomerListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers",
  urlParameters: [
    Parameters.billingAccountName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.skiptoken
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CustomerListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.customerName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Customer
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingProfileNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.CustomerListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingAccountNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.CustomerListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
