/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import { TokenCredential } from "@azure/core-auth";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AzureNetAppFilesManagementClientContext } from "./azureNetAppFilesManagementClientContext";


class AzureNetAppFilesManagementClient extends AzureNetAppFilesManagementClientContext {
  // Operation groups
  operations: operations.Operations;
  netAppResource: operations.NetAppResource;
  accounts: operations.Accounts;
  pools: operations.Pools;
  volumes: operations.Volumes;
  snapshots: operations.Snapshots;
  snapshotPolicies: operations.SnapshotPolicies;
  backups: operations.Backups;
  accountBackups: operations.AccountBackups;
  backupPolicies: operations.BackupPolicies;
  vaults: operations.Vaults;

  /**
   * Initializes a new instance of the AzureNetAppFilesManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials
   * implementing the TokenCredential interface from the @azure/identity package are recommended. For
   * more information about these credentials, see
   * {@link https://www.npmjs.com/package/@azure/identity}. Credentials implementing the
   * ServiceClientCredentials interface from the older packages @azure/ms-rest-nodeauth and
   * @azure/ms-rest-browserauth are also supported.
   * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, subscriptionId: string, options?: Models.AzureNetAppFilesManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.netAppResource = new operations.NetAppResource(this);
    this.accounts = new operations.Accounts(this);
    this.pools = new operations.Pools(this);
    this.volumes = new operations.Volumes(this);
    this.snapshots = new operations.Snapshots(this);
    this.snapshotPolicies = new operations.SnapshotPolicies(this);
    this.backups = new operations.Backups(this);
    this.accountBackups = new operations.AccountBackups(this);
    this.backupPolicies = new operations.BackupPolicies(this);
    this.vaults = new operations.Vaults(this);
  }
}

// Operation Specifications

export {
  AzureNetAppFilesManagementClient,
  AzureNetAppFilesManagementClientContext,
  Models as AzureNetAppFilesManagementModels,
  Mappers as AzureNetAppFilesManagementMappers
};
export * from "./operations";
