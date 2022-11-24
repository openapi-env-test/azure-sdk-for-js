/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest
} from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  BackupVaultsImpl,
  OperationResultImpl,
  OperationStatusImpl,
  OperationStatusBackupVaultContextImpl,
  OperationStatusResourceGroupContextImpl,
  BackupVaultOperationResultsImpl,
  DataProtectionImpl,
  DataProtectionOperationsImpl,
  BackupPoliciesImpl,
  BackupInstancesImpl,
  BackupInstancesExtensionRoutingImpl,
  RecoveryPointsImpl,
  JobsImpl,
  RestorableTimeRangesImpl,
  ExportJobsImpl,
  ExportJobsOperationResultImpl,
  DeletedBackupInstancesImpl,
  ResourceGuardsImpl,
  DppResourceGuardProxyImpl
} from "./operations";
import {
  BackupVaults,
  OperationResult,
  OperationStatus,
  OperationStatusBackupVaultContext,
  OperationStatusResourceGroupContext,
  BackupVaultOperationResults,
  DataProtection,
  DataProtectionOperations,
  BackupPolicies,
  BackupInstances,
  BackupInstancesExtensionRouting,
  RecoveryPoints,
  Jobs,
  RestorableTimeRanges,
  ExportJobs,
  ExportJobsOperationResult,
  DeletedBackupInstances,
  ResourceGuards,
  DppResourceGuardProxy
} from "./operationsInterfaces";
import { DataProtectionClientOptionalParams } from "./models";

export class DataProtectionClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the DataProtectionClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The subscription Id.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: DataProtectionClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: DataProtectionClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-dataprotectionplatform/1.0.0-beta.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes: `${optionsWithDefaults.credentialScopes}`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge
          }
        })
      );
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2022-11-01-preview";
    this.backupVaults = new BackupVaultsImpl(this);
    this.operationResult = new OperationResultImpl(this);
    this.operationStatus = new OperationStatusImpl(this);
    this.operationStatusBackupVaultContext = new OperationStatusBackupVaultContextImpl(
      this
    );
    this.operationStatusResourceGroupContext = new OperationStatusResourceGroupContextImpl(
      this
    );
    this.backupVaultOperationResults = new BackupVaultOperationResultsImpl(
      this
    );
    this.dataProtection = new DataProtectionImpl(this);
    this.dataProtectionOperations = new DataProtectionOperationsImpl(this);
    this.backupPolicies = new BackupPoliciesImpl(this);
    this.backupInstances = new BackupInstancesImpl(this);
    this.backupInstancesExtensionRouting = new BackupInstancesExtensionRoutingImpl(
      this
    );
    this.recoveryPoints = new RecoveryPointsImpl(this);
    this.jobs = new JobsImpl(this);
    this.restorableTimeRanges = new RestorableTimeRangesImpl(this);
    this.exportJobs = new ExportJobsImpl(this);
    this.exportJobsOperationResult = new ExportJobsOperationResultImpl(this);
    this.deletedBackupInstances = new DeletedBackupInstancesImpl(this);
    this.resourceGuards = new ResourceGuardsImpl(this);
    this.dppResourceGuardProxy = new DppResourceGuardProxyImpl(this);
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      }
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  backupVaults: BackupVaults;
  operationResult: OperationResult;
  operationStatus: OperationStatus;
  operationStatusBackupVaultContext: OperationStatusBackupVaultContext;
  operationStatusResourceGroupContext: OperationStatusResourceGroupContext;
  backupVaultOperationResults: BackupVaultOperationResults;
  dataProtection: DataProtection;
  dataProtectionOperations: DataProtectionOperations;
  backupPolicies: BackupPolicies;
  backupInstances: BackupInstances;
  backupInstancesExtensionRouting: BackupInstancesExtensionRouting;
  recoveryPoints: RecoveryPoints;
  jobs: Jobs;
  restorableTimeRanges: RestorableTimeRanges;
  exportJobs: ExportJobs;
  exportJobsOperationResult: ExportJobsOperationResult;
  deletedBackupInstances: DeletedBackupInstances;
  resourceGuards: ResourceGuards;
  dppResourceGuardProxy: DppResourceGuardProxy;
}
