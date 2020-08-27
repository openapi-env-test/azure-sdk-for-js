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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { StorageManagementClientContext } from "./storageManagementClientContext";


class StorageManagementClient extends StorageManagementClientContext {
  // Operation groups
  operations: operations.Operations;
  skus: operations.Skus;
  storageAccounts: operations.StorageAccounts;
  deletedAccounts: operations.DeletedAccounts;
  usages: operations.Usages;
  managementPolicies: operations.ManagementPolicies;
  privateEndpointConnections: operations.PrivateEndpointConnections;
  privateLinkResources: operations.PrivateLinkResources;
  objectReplicationPolicies: operations.ObjectReplicationPoliciesOperations;
  encryptionScopes: operations.EncryptionScopes;
  blobServices: operations.BlobServices;
  blobContainers: operations.BlobContainers;
  fileServices: operations.FileServices;
  fileShares: operations.FileShares;
  queueServices: operations.QueueServices;
  queue: operations.Queue;
  tableServices: operations.TableServices;
  table: operations.TableOperations;

  /**
   * Initializes a new instance of the StorageManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The ID of the target subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.StorageManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.skus = new operations.Skus(this);
    this.storageAccounts = new operations.StorageAccounts(this);
    this.deletedAccounts = new operations.DeletedAccounts(this);
    this.usages = new operations.Usages(this);
    this.managementPolicies = new operations.ManagementPolicies(this);
    this.privateEndpointConnections = new operations.PrivateEndpointConnections(this);
    this.privateLinkResources = new operations.PrivateLinkResources(this);
    this.objectReplicationPolicies = new operations.ObjectReplicationPoliciesOperations(this);
    this.encryptionScopes = new operations.EncryptionScopes(this);
    this.blobServices = new operations.BlobServices(this);
    this.blobContainers = new operations.BlobContainers(this);
    this.fileServices = new operations.FileServices(this);
    this.fileShares = new operations.FileShares(this);
    this.queueServices = new operations.QueueServices(this);
    this.queue = new operations.Queue(this);
    this.tableServices = new operations.TableServices(this);
    this.table = new operations.TableOperations(this);
  }
}

// Operation Specifications

export {
  StorageManagementClient,
  StorageManagementClientContext,
  Models as StorageManagementModels,
  Mappers as StorageManagementMappers
};
export * from "./operations";
