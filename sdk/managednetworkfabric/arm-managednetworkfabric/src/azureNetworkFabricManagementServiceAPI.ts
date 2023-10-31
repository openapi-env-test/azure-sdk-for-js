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
  AccessControlListsImpl,
  InternetGatewaysImpl,
  InternetGatewayRulesImpl,
  IpCommunitiesImpl,
  IpExtendedCommunitiesImpl,
  IpPrefixesImpl,
  L2IsolationDomainsImpl,
  L3IsolationDomainsImpl,
  InternalNetworksImpl,
  ExternalNetworksImpl,
  NeighborGroupsImpl,
  NetworkDeviceSkusImpl,
  NetworkDevicesImpl,
  NetworkInterfacesImpl,
  NetworkFabricControllersImpl,
  NetworkFabricSkusImpl,
  NetworkFabricsImpl,
  NetworkToNetworkInterconnectsImpl,
  NetworkPacketBrokersImpl,
  NetworkRacksImpl,
  NetworkTapRulesImpl,
  NetworkTapsImpl,
  OperationsImpl,
  RoutePoliciesImpl
} from "./operations";
import {
  AccessControlLists,
  InternetGateways,
  InternetGatewayRules,
  IpCommunities,
  IpExtendedCommunities,
  IpPrefixes,
  L2IsolationDomains,
  L3IsolationDomains,
  InternalNetworks,
  ExternalNetworks,
  NeighborGroups,
  NetworkDeviceSkus,
  NetworkDevices,
  NetworkInterfaces,
  NetworkFabricControllers,
  NetworkFabricSkus,
  NetworkFabrics,
  NetworkToNetworkInterconnects,
  NetworkPacketBrokers,
  NetworkRacks,
  NetworkTapRules,
  NetworkTaps,
  Operations,
  RoutePolicies
} from "./operationsInterfaces";
import { AzureNetworkFabricManagementServiceAPIOptionalParams } from "./models";

export class AzureNetworkFabricManagementServiceAPI extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the AzureNetworkFabricManagementServiceAPI class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription. The value must be an UUID.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: AzureNetworkFabricManagementServiceAPIOptionalParams
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
    const defaults: AzureNetworkFabricManagementServiceAPIOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-managednetworkfabric/1.0.1`;
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
    this.apiVersion = options.apiVersion || "2023-06-15";
    this.accessControlLists = new AccessControlListsImpl(this);
    this.internetGateways = new InternetGatewaysImpl(this);
    this.internetGatewayRules = new InternetGatewayRulesImpl(this);
    this.ipCommunities = new IpCommunitiesImpl(this);
    this.ipExtendedCommunities = new IpExtendedCommunitiesImpl(this);
    this.ipPrefixes = new IpPrefixesImpl(this);
    this.l2IsolationDomains = new L2IsolationDomainsImpl(this);
    this.l3IsolationDomains = new L3IsolationDomainsImpl(this);
    this.internalNetworks = new InternalNetworksImpl(this);
    this.externalNetworks = new ExternalNetworksImpl(this);
    this.neighborGroups = new NeighborGroupsImpl(this);
    this.networkDeviceSkus = new NetworkDeviceSkusImpl(this);
    this.networkDevices = new NetworkDevicesImpl(this);
    this.networkInterfaces = new NetworkInterfacesImpl(this);
    this.networkFabricControllers = new NetworkFabricControllersImpl(this);
    this.networkFabricSkus = new NetworkFabricSkusImpl(this);
    this.networkFabrics = new NetworkFabricsImpl(this);
    this.networkToNetworkInterconnects = new NetworkToNetworkInterconnectsImpl(
      this
    );
    this.networkPacketBrokers = new NetworkPacketBrokersImpl(this);
    this.networkRacks = new NetworkRacksImpl(this);
    this.networkTapRules = new NetworkTapRulesImpl(this);
    this.networkTaps = new NetworkTapsImpl(this);
    this.operations = new OperationsImpl(this);
    this.routePolicies = new RoutePoliciesImpl(this);
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

  accessControlLists: AccessControlLists;
  internetGateways: InternetGateways;
  internetGatewayRules: InternetGatewayRules;
  ipCommunities: IpCommunities;
  ipExtendedCommunities: IpExtendedCommunities;
  ipPrefixes: IpPrefixes;
  l2IsolationDomains: L2IsolationDomains;
  l3IsolationDomains: L3IsolationDomains;
  internalNetworks: InternalNetworks;
  externalNetworks: ExternalNetworks;
  neighborGroups: NeighborGroups;
  networkDeviceSkus: NetworkDeviceSkus;
  networkDevices: NetworkDevices;
  networkInterfaces: NetworkInterfaces;
  networkFabricControllers: NetworkFabricControllers;
  networkFabricSkus: NetworkFabricSkus;
  networkFabrics: NetworkFabrics;
  networkToNetworkInterconnects: NetworkToNetworkInterconnects;
  networkPacketBrokers: NetworkPacketBrokers;
  networkRacks: NetworkRacks;
  networkTapRules: NetworkTapRules;
  networkTaps: NetworkTaps;
  operations: Operations;
  routePolicies: RoutePolicies;
}
