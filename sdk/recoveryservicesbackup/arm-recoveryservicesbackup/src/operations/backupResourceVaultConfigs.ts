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
import * as Mappers from "../models/backupResourceVaultConfigsMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a BackupResourceVaultConfigs. */
export class BackupResourceVaultConfigs {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a BackupResourceVaultConfigs.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Fetches resource vault config.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupResourceVaultConfigsGetResponse>
   */
  get(vaultName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.BackupResourceVaultConfigsGetResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.BackupResourceVaultConfigResource>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BackupResourceVaultConfigResource>): void;
  get(vaultName: string, resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BackupResourceVaultConfigResource>, callback?: msRest.ServiceCallback<Models.BackupResourceVaultConfigResource>): Promise<Models.BackupResourceVaultConfigsGetResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.BackupResourceVaultConfigsGetResponse>;
  }

  /**
   * Updates vault security config.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param parameters resource config request
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupResourceVaultConfigsUpdateResponse>
   */
  update(vaultName: string, resourceGroupName: string, parameters: Models.BackupResourceVaultConfigResource, options?: msRest.RequestOptionsBase): Promise<Models.BackupResourceVaultConfigsUpdateResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param parameters resource config request
   * @param callback The callback
   */
  update(vaultName: string, resourceGroupName: string, parameters: Models.BackupResourceVaultConfigResource, callback: msRest.ServiceCallback<Models.BackupResourceVaultConfigResource>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param parameters resource config request
   * @param options The optional parameters
   * @param callback The callback
   */
  update(vaultName: string, resourceGroupName: string, parameters: Models.BackupResourceVaultConfigResource, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BackupResourceVaultConfigResource>): void;
  update(vaultName: string, resourceGroupName: string, parameters: Models.BackupResourceVaultConfigResource, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BackupResourceVaultConfigResource>, callback?: msRest.ServiceCallback<Models.BackupResourceVaultConfigResource>): Promise<Models.BackupResourceVaultConfigsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.BackupResourceVaultConfigsUpdateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupconfig/vaultconfig",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
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
      bodyMapper: Mappers.BackupResourceVaultConfigResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupconfig/vaultconfig",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.BackupResourceVaultConfigResource,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.BackupResourceVaultConfigResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
