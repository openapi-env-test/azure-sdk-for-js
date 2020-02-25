/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

export {
  discriminators,
  AadAuthenticationParameters,
  AddressSpace,
  ApplicationGateway,
  ApplicationGatewayAuthenticationCertificate,
  ApplicationGatewayAutoscaleConfiguration,
  ApplicationGatewayAvailableSslOptions,
  ApplicationGatewayBackendAddress,
  ApplicationGatewayBackendAddressPool,
  ApplicationGatewayBackendHttpSettings,
  ApplicationGatewayConnectionDraining,
  ApplicationGatewayCustomError,
  ApplicationGatewayFirewallDisabledRuleGroup,
  ApplicationGatewayFirewallExclusion,
  ApplicationGatewayFirewallRule,
  ApplicationGatewayFirewallRuleGroup,
  ApplicationGatewayFirewallRuleSet,
  ApplicationGatewayFrontendIPConfiguration,
  ApplicationGatewayFrontendPort,
  ApplicationGatewayHeaderConfiguration,
  ApplicationGatewayHttpListener,
  ApplicationGatewayIPConfiguration,
  ApplicationGatewayPathRule,
  ApplicationGatewayProbe,
  ApplicationGatewayProbeHealthResponseMatch,
  ApplicationGatewayRedirectConfiguration,
  ApplicationGatewayRequestRoutingRule,
  ApplicationGatewayRewriteRule,
  ApplicationGatewayRewriteRuleActionSet,
  ApplicationGatewayRewriteRuleCondition,
  ApplicationGatewayRewriteRuleSet,
  ApplicationGatewaySku,
  ApplicationGatewaySslCertificate,
  ApplicationGatewaySslPolicy,
  ApplicationGatewaySslPredefinedPolicy,
  ApplicationGatewayTrustedRootCertificate,
  ApplicationGatewayUrlConfiguration,
  ApplicationGatewayUrlPathMap,
  ApplicationGatewayWebApplicationFirewallConfiguration,
  ApplicationRuleCondition,
  ApplicationSecurityGroup,
  AvailableProvidersList,
  AvailableProvidersListCity,
  AvailableProvidersListCountry,
  AvailableProvidersListParameters,
  AvailableProvidersListState,
  AzureFirewall,
  AzureFirewallApplicationRule,
  AzureFirewallApplicationRuleCollection,
  AzureFirewallApplicationRuleProtocol,
  AzureFirewallFqdnTag,
  AzureFirewallIPConfiguration,
  AzureFirewallIpGroups,
  AzureFirewallNatRCAction,
  AzureFirewallNatRule,
  AzureFirewallNatRuleCollection,
  AzureFirewallNetworkRule,
  AzureFirewallNetworkRuleCollection,
  AzureFirewallPublicIPAddress,
  AzureFirewallRCAction,
  AzureFirewallSku,
  AzureReachabilityReport,
  AzureReachabilityReportItem,
  AzureReachabilityReportLatencyInfo,
  AzureReachabilityReportLocation,
  AzureReachabilityReportParameters,
  BackendAddressPool,
  BaseResource,
  BastionHost,
  BastionHostIPConfiguration,
  BGPCommunity,
  BgpServiceCommunity,
  BgpSettings,
  ConnectionMonitorDestination,
  ConnectionMonitorEndpoint,
  ConnectionMonitorEndpointFilter,
  ConnectionMonitorEndpointFilterItem,
  ConnectionMonitorHttpConfiguration,
  ConnectionMonitorIcmpConfiguration,
  ConnectionMonitorOutput,
  ConnectionMonitorResult,
  ConnectionMonitorSource,
  ConnectionMonitorSuccessThreshold,
  ConnectionMonitorTcpConfiguration,
  ConnectionMonitorTestConfiguration,
  ConnectionMonitorTestGroup,
  ConnectionMonitorWorkspaceSettings,
  ConnectionSharedKey,
  ConnectivityDestination,
  ConnectivityHop,
  ConnectivityInformation,
  ConnectivityIssue,
  ConnectivityParameters,
  ConnectivitySource,
  Container,
  ContainerNetworkInterface,
  ContainerNetworkInterfaceConfiguration,
  ContainerNetworkInterfaceIpConfiguration,
  DdosCustomPolicy,
  DdosProtectionPlan,
  DdosSettings,
  Delegation,
  DeviceProperties,
  DhcpOptions,
  EffectiveNetworkSecurityRule,
  EndpointServiceResult,
  ErrorDetails,
  ErrorResponse,
  EvaluatedNetworkSecurityGroup,
  ExpressRouteCircuit,
  ExpressRouteCircuitAuthorization,
  ExpressRouteCircuitConnection,
  ExpressRouteCircuitPeering,
  ExpressRouteCircuitPeeringConfig,
  ExpressRouteCircuitPeeringId,
  ExpressRouteCircuitReference,
  ExpressRouteCircuitServiceProviderProperties,
  ExpressRouteCircuitSku,
  ExpressRouteCircuitStats,
  ExpressRouteConnection,
  ExpressRouteConnectionId,
  ExpressRouteCrossConnection,
  ExpressRouteCrossConnectionPeering,
  ExpressRouteGateway,
  ExpressRouteGatewayPropertiesAutoScaleConfiguration,
  ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds,
  ExpressRouteLink,
  ExpressRouteLinkMacSecConfig,
  ExpressRoutePort,
  ExpressRoutePortsLocation,
  ExpressRoutePortsLocationBandwidths,
  ExpressRouteServiceProvider,
  ExpressRouteServiceProviderBandwidthsOffered,
  FirewallPolicy,
  FirewallPolicyFilterRule,
  FirewallPolicyFilterRuleAction,
  FirewallPolicyNatRule,
  FirewallPolicyNatRuleAction,
  FirewallPolicyRule,
  FirewallPolicyRuleCondition,
  FirewallPolicyRuleConditionApplicationProtocol,
  FirewallPolicyRuleGroup,
  FlowLog,
  FlowLogFormatParameters,
  FlowLogInformation,
  FlowLogStatusParameters,
  FrontendIPConfiguration,
  HTTPConfiguration,
  HTTPHeader,
  HubIPAddresses,
  HubVirtualNetworkConnection,
  InboundNatPool,
  InboundNatRule,
  IPConfiguration,
  IPConfigurationProfile,
  IpGroup,
  IpsecPolicy,
  IpTag,
  Ipv6ExpressRouteCircuitPeeringConfig,
  LoadBalancer,
  LoadBalancerSku,
  LoadBalancingRule,
  LocalNetworkGateway,
  ManagedRuleGroupOverride,
  ManagedRuleOverride,
  ManagedRulesDefinition,
  ManagedRuleSet,
  ManagedServiceIdentity,
  ManagedServiceIdentityUserAssignedIdentitiesValue,
  MatchCondition,
  MatchedRule,
  MatchVariable,
  NatGateway,
  NatGatewaySku,
  NetworkConfigurationDiagnosticParameters,
  NetworkConfigurationDiagnosticProfile,
  NetworkConfigurationDiagnosticResponse,
  NetworkConfigurationDiagnosticResult,
  NetworkIntentPolicy,
  NetworkInterface,
  NetworkInterfaceAssociation,
  NetworkInterfaceDnsSettings,
  NetworkInterfaceIPConfiguration,
  NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties,
  NetworkInterfaceTapConfiguration,
  NetworkProfile,
  NetworkRuleCondition,
  NetworkSecurityGroup,
  NetworkSecurityGroupResult,
  NetworkSecurityRulesEvaluationResult,
  NetworkWatcher,
  NetworkWatcherListResult,
  NextHopParameters,
  NextHopResult,
  OutboundRule,
  OwaspCrsExclusionEntry,
  P2SConnectionConfiguration,
  P2SVpnGateway,
  PatchRouteFilter,
  PatchRouteFilterRule,
  PeerExpressRouteCircuitConnection,
  PolicySettings,
  PrivateEndpoint,
  PrivateEndpointConnection,
  PrivateLinkService,
  PrivateLinkServiceConnection,
  PrivateLinkServiceConnectionState,
  PrivateLinkServiceIpConfiguration,
  PrivateLinkServicePropertiesAutoApproval,
  PrivateLinkServicePropertiesVisibility,
  Probe,
  ProtocolConfiguration,
  ProtocolCustomSettingsFormat,
  PublicIPAddress,
  PublicIPAddressDnsSettings,
  PublicIPAddressSku,
  PublicIPPrefix,
  PublicIPPrefixSku,
  QueryTroubleshootingParameters,
  ReferencedPublicIpAddress,
  Resource,
  ResourceNavigationLink,
  ResourceSet,
  RetentionPolicyParameters,
  Route,
  RouteFilter,
  RouteFilterRule,
  RouteTable,
  SecurityGroupNetworkInterface,
  SecurityGroupViewParameters,
  SecurityGroupViewResult,
  SecurityRule,
  SecurityRuleAssociations,
  ServiceAssociationLink,
  ServiceEndpointPolicy,
  ServiceEndpointPolicyDefinition,
  ServiceEndpointPropertiesFormat,
  Subnet,
  SubnetAssociation,
  SubResource,
  TagsObject,
  Topology,
  TopologyAssociation,
  TopologyParameters,
  TopologyResource,
  TrafficAnalyticsConfigurationProperties,
  TrafficAnalyticsProperties,
  TrafficSelectorPolicy,
  TroubleshootingDetails,
  TroubleshootingParameters,
  TroubleshootingRecommendedActions,
  TroubleshootingResult,
  TunnelConnectionHealth,
  VerificationIPFlowParameters,
  VerificationIPFlowResult,
  VirtualHub,
  VirtualHubId,
  VirtualHubRoute,
  VirtualHubRouteTable,
  VirtualHubRouteTableV2,
  VirtualHubRouteV2,
  VirtualNetwork,
  VirtualNetworkBgpCommunities,
  VirtualNetworkConnectionGatewayReference,
  VirtualNetworkGateway,
  VirtualNetworkGatewayConnection,
  VirtualNetworkGatewayConnectionListEntity,
  VirtualNetworkGatewayIPConfiguration,
  VirtualNetworkGatewaySku,
  VirtualNetworkPeering,
  VirtualNetworkTap,
  VirtualRouter,
  VirtualRouterPeering,
  VirtualWAN,
  VM,
  VpnClientConfiguration,
  VpnClientConnectionHealth,
  VpnClientRevokedCertificate,
  VpnClientRootCertificate,
  VpnConnection,
  VpnGateway,
  VpnLinkBgpSettings,
  VpnLinkProviderProperties,
  VpnServerConfigRadiusClientRootCertificate,
  VpnServerConfigRadiusServerRootCertificate,
  VpnServerConfiguration,
  VpnServerConfigVpnClientRevokedCertificate,
  VpnServerConfigVpnClientRootCertificate,
  VpnSite,
  VpnSiteLink,
  VpnSiteLinkConnection,
  WebApplicationFirewallCustomRule,
  WebApplicationFirewallPolicy
} from "../models/mappers";
