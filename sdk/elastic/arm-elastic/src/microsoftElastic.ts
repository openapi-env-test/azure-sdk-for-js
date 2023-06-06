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
  OperationsImpl,
  MonitorsImpl,
  ElasticVersionsImpl,
  MonitoredResourcesImpl,
  DeploymentInfoImpl,
  ExternalUserImpl,
  TagRulesImpl,
  VMHostImpl,
  VMIngestionImpl,
  VMCollectionImpl,
  UpgradableVersionsImpl,
  MonitorImpl,
  AllTrafficFiltersImpl,
  ListAssociatedTrafficFiltersImpl,
  CreateAndAssociateIPFilterImpl,
  CreateAndAssociatePLFilterImpl,
  AssociateTrafficFilterImpl,
  DetachAndDeleteTrafficFilterImpl,
  DetachTrafficFilterImpl,
  TrafficFiltersImpl,
  OrganizationsImpl
} from "./operations";
import {
  Operations,
  Monitors,
  ElasticVersions,
  MonitoredResources,
  DeploymentInfo,
  ExternalUser,
  TagRules,
  VMHost,
  VMIngestion,
  VMCollection,
  UpgradableVersions,
  Monitor,
  AllTrafficFilters,
  ListAssociatedTrafficFilters,
  CreateAndAssociateIPFilter,
  CreateAndAssociatePLFilter,
  AssociateTrafficFilter,
  DetachAndDeleteTrafficFilter,
  DetachTrafficFilter,
  TrafficFilters,
  Organizations
} from "./operationsInterfaces";
import { MicrosoftElasticOptionalParams } from "./models";

export class MicrosoftElastic extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the MicrosoftElastic class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g.
   *                       00000000-0000-0000-0000-000000000000)
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: MicrosoftElasticOptionalParams
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
    const defaults: MicrosoftElasticOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-elastic/1.0.0-beta.3`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      endpoint:
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
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
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
    this.apiVersion = options.apiVersion || "2023-02-01-preview";
    this.operations = new OperationsImpl(this);
    this.monitors = new MonitorsImpl(this);
    this.elasticVersions = new ElasticVersionsImpl(this);
    this.monitoredResources = new MonitoredResourcesImpl(this);
    this.deploymentInfo = new DeploymentInfoImpl(this);
    this.externalUser = new ExternalUserImpl(this);
    this.tagRules = new TagRulesImpl(this);
    this.vMHost = new VMHostImpl(this);
    this.vMIngestion = new VMIngestionImpl(this);
    this.vMCollection = new VMCollectionImpl(this);
    this.upgradableVersions = new UpgradableVersionsImpl(this);
    this.monitor = new MonitorImpl(this);
    this.allTrafficFilters = new AllTrafficFiltersImpl(this);
    this.listAssociatedTrafficFilters = new ListAssociatedTrafficFiltersImpl(
      this
    );
    this.createAndAssociateIPFilter = new CreateAndAssociateIPFilterImpl(this);
    this.createAndAssociatePLFilter = new CreateAndAssociatePLFilterImpl(this);
    this.associateTrafficFilter = new AssociateTrafficFilterImpl(this);
    this.detachAndDeleteTrafficFilter = new DetachAndDeleteTrafficFilterImpl(
      this
    );
    this.detachTrafficFilter = new DetachTrafficFilterImpl(this);
    this.trafficFilters = new TrafficFiltersImpl(this);
    this.organizations = new OrganizationsImpl(this);
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

  operations: Operations;
  monitors: Monitors;
  elasticVersions: ElasticVersions;
  monitoredResources: MonitoredResources;
  deploymentInfo: DeploymentInfo;
  externalUser: ExternalUser;
  tagRules: TagRules;
  vMHost: VMHost;
  vMIngestion: VMIngestion;
  vMCollection: VMCollection;
  upgradableVersions: UpgradableVersions;
  monitor: Monitor;
  allTrafficFilters: AllTrafficFilters;
  listAssociatedTrafficFilters: ListAssociatedTrafficFilters;
  createAndAssociateIPFilter: CreateAndAssociateIPFilter;
  createAndAssociatePLFilter: CreateAndAssociatePLFilter;
  associateTrafficFilter: AssociateTrafficFilter;
  detachAndDeleteTrafficFilter: DetachAndDeleteTrafficFilter;
  detachTrafficFilter: DetachTrafficFilter;
  trafficFilters: TrafficFilters;
  organizations: Organizations;
}
