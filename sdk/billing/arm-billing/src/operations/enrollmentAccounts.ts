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
import * as Mappers from "../models/enrollmentAccountsMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a EnrollmentAccounts. */
export class EnrollmentAccounts {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a EnrollmentAccounts.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all Enrollment Accounts for a user which he has access to.
   * @param billingAccountName billing Account Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnrollmentAccountsListByBillingAccountNameResponse>
   */
  listByBillingAccountName(billingAccountName: string, options?: Models.EnrollmentAccountsListByBillingAccountNameOptionalParams): Promise<Models.EnrollmentAccountsListByBillingAccountNameResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param callback The callback
   */
  listByBillingAccountName(billingAccountName: string, callback: msRest.ServiceCallback<Models.EnrollmentAccountListResult>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingAccountName(billingAccountName: string, options: Models.EnrollmentAccountsListByBillingAccountNameOptionalParams, callback: msRest.ServiceCallback<Models.EnrollmentAccountListResult>): void;
  listByBillingAccountName(billingAccountName: string, options?: Models.EnrollmentAccountsListByBillingAccountNameOptionalParams | msRest.ServiceCallback<Models.EnrollmentAccountListResult>, callback?: msRest.ServiceCallback<Models.EnrollmentAccountListResult>): Promise<Models.EnrollmentAccountsListByBillingAccountNameResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        options
      },
      listByBillingAccountNameOperationSpec,
      callback) as Promise<Models.EnrollmentAccountsListByBillingAccountNameResponse>;
  }

  /**
   * Get the enrollment account by id.
   * @param billingAccountName billing Account Id.
   * @param enrollmentAccountName Enrollment Account Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnrollmentAccountsGetByEnrollmentAccountIdResponse>
   */
  getByEnrollmentAccountId(billingAccountName: string, enrollmentAccountName: string, options?: Models.EnrollmentAccountsGetByEnrollmentAccountIdOptionalParams): Promise<Models.EnrollmentAccountsGetByEnrollmentAccountIdResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param enrollmentAccountName Enrollment Account Id.
   * @param callback The callback
   */
  getByEnrollmentAccountId(billingAccountName: string, enrollmentAccountName: string, callback: msRest.ServiceCallback<Models.EnrollmentAccount>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param enrollmentAccountName Enrollment Account Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  getByEnrollmentAccountId(billingAccountName: string, enrollmentAccountName: string, options: Models.EnrollmentAccountsGetByEnrollmentAccountIdOptionalParams, callback: msRest.ServiceCallback<Models.EnrollmentAccount>): void;
  getByEnrollmentAccountId(billingAccountName: string, enrollmentAccountName: string, options?: Models.EnrollmentAccountsGetByEnrollmentAccountIdOptionalParams | msRest.ServiceCallback<Models.EnrollmentAccount>, callback?: msRest.ServiceCallback<Models.EnrollmentAccount>): Promise<Models.EnrollmentAccountsGetByEnrollmentAccountIdResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        enrollmentAccountName,
        options
      },
      getByEnrollmentAccountIdOperationSpec,
      callback) as Promise<Models.EnrollmentAccountsGetByEnrollmentAccountIdResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByBillingAccountNameOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/enrollmentAccounts",
  urlParameters: [
    Parameters.billingAccountName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.EnrollmentAccountListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getByEnrollmentAccountIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/enrollmentAccounts/{enrollmentAccountName}",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.enrollmentAccountName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.EnrollmentAccount
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
