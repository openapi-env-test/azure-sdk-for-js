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
  RedisImpl,
  FirewallRulesImpl,
  PatchSchedulesImpl,
  LinkedServerImpl,
  PrivateEndpointConnectionsImpl,
  PrivateLinkResourcesImpl,
  AsyncOperationStatusImpl
} from "./operations";
import {
  Operations,
  Redis,
  FirewallRules,
  PatchSchedules,
  LinkedServer,
  PrivateEndpointConnections,
  PrivateLinkResources,
  AsyncOperationStatus
} from "./operationsInterfaces";
import { RedisManagementClientOptionalParams } from "./models";

export class RedisManagementClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the RedisManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Gets subscription credentials which uniquely identify the Microsoft Azure
   *                       subscription. The subscription ID forms part of the URI for every service call.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: RedisManagementClientOptionalParams
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
    const defaults: RedisManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-rediscache/6.2.0`;
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

    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      const bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
      if (!bearerTokenAuthenticationPolicyFound) {
        this.pipeline.removePolicy({
          name: coreRestPipeline.bearerTokenAuthenticationPolicyName
        });
        this.pipeline.addPolicy(
          coreRestPipeline.bearerTokenAuthenticationPolicy({
            scopes: `${optionsWithDefaults.baseUri}/.default`,
            challengeCallbacks: {
              authorizeRequestOnChallenge:
                coreClient.authorizeRequestOnClaimChallenge
            }
          })
        );
      }
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2022-05-01";
    this.operations = new OperationsImpl(this);
    this.redis = new RedisImpl(this);
    this.firewallRules = new FirewallRulesImpl(this);
    this.patchSchedules = new PatchSchedulesImpl(this);
    this.linkedServer = new LinkedServerImpl(this);
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
    this.asyncOperationStatus = new AsyncOperationStatusImpl(this);
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
              return item.replace(/(?<==).*$/, apiVersion);
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
  redis: Redis;
  firewallRules: FirewallRules;
  patchSchedules: PatchSchedules;
  linkedServer: LinkedServer;
  privateEndpointConnections: PrivateEndpointConnections;
  privateLinkResources: PrivateLinkResources;
  asyncOperationStatus: AsyncOperationStatus;
}
