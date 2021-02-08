/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { SqlManagementClientContext } from "./sqlManagementClientContext";


class SqlManagementClient extends SqlManagementClientContext {
  // Operation groups
  databaseOperations: operations.DatabaseOperations;
  elasticPoolOperations: operations.ElasticPoolOperations;
  databaseVulnerabilityAssessmentScans: operations.DatabaseVulnerabilityAssessmentScans;
  managedDatabaseVulnerabilityAssessmentRuleBaselines: operations.ManagedDatabaseVulnerabilityAssessmentRuleBaselines;
  managedDatabaseVulnerabilityAssessmentScans: operations.ManagedDatabaseVulnerabilityAssessmentScans;
  managedDatabaseVulnerabilityAssessments: operations.ManagedDatabaseVulnerabilityAssessments;
  capabilities: operations.Capabilities;
  databases: operations.Databases;
  elasticPools: operations.ElasticPools;
  instanceFailoverGroups: operations.InstanceFailoverGroups;
  backupShortTermRetentionPolicies: operations.BackupShortTermRetentionPolicies;
  tdeCertificates: operations.TdeCertificates;
  managedInstanceTdeCertificates: operations.ManagedInstanceTdeCertificates;
  managedInstanceKeys: operations.ManagedInstanceKeys;
  managedInstanceEncryptionProtectors: operations.ManagedInstanceEncryptionProtectors;
  recoverableManagedDatabases: operations.RecoverableManagedDatabases;

  /**
   * Initializes a new instance of the SqlManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The subscription ID that identifies an Azure subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.SqlManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.databaseOperations = new operations.DatabaseOperations(this);
    this.elasticPoolOperations = new operations.ElasticPoolOperations(this);
    this.databaseVulnerabilityAssessmentScans = new operations.DatabaseVulnerabilityAssessmentScans(this);
    this.managedDatabaseVulnerabilityAssessmentRuleBaselines = new operations.ManagedDatabaseVulnerabilityAssessmentRuleBaselines(this);
    this.managedDatabaseVulnerabilityAssessmentScans = new operations.ManagedDatabaseVulnerabilityAssessmentScans(this);
    this.managedDatabaseVulnerabilityAssessments = new operations.ManagedDatabaseVulnerabilityAssessments(this);
    this.capabilities = new operations.Capabilities(this);
    this.databases = new operations.Databases(this);
    this.elasticPools = new operations.ElasticPools(this);
    this.instanceFailoverGroups = new operations.InstanceFailoverGroups(this);
    this.backupShortTermRetentionPolicies = new operations.BackupShortTermRetentionPolicies(this);
    this.tdeCertificates = new operations.TdeCertificates(this);
    this.managedInstanceTdeCertificates = new operations.ManagedInstanceTdeCertificates(this);
    this.managedInstanceKeys = new operations.ManagedInstanceKeys(this);
    this.managedInstanceEncryptionProtectors = new operations.ManagedInstanceEncryptionProtectors(this);
    this.recoverableManagedDatabases = new operations.RecoverableManagedDatabases(this);
  }
}

// Operation Specifications

export {
  SqlManagementClient,
  SqlManagementClientContext,
  Models as SqlManagementModels,
  Mappers as SqlManagementMappers
};
export * from "./operations";
