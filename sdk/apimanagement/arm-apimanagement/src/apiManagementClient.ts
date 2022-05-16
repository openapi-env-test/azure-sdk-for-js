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
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "./lroImpl";
import {
  ApiImpl,
  ApiRevisionImpl,
  ApiReleaseImpl,
  ApiOperationImpl,
  ApiOperationPolicyImpl,
  TagImpl,
  ApiProductImpl,
  ApiPolicyImpl,
  ApiSchemaImpl,
  ApiDiagnosticImpl,
  ApiIssueImpl,
  ApiIssueCommentImpl,
  ApiIssueAttachmentImpl,
  ApiTagDescriptionImpl,
  OperationOperationsImpl,
  ApiExportImpl,
  ApiVersionSetImpl,
  AuthorizationServerImpl,
  BackendImpl,
  CacheImpl,
  CertificateImpl,
  ContentTypeImpl,
  ContentItemImpl,
  DeletedServicesImpl,
  ApiManagementOperationsImpl,
  ApiManagementServiceSkusImpl,
  ApiManagementServiceImpl,
  DiagnosticImpl,
  EmailTemplateImpl,
  GatewayImpl,
  GatewayHostnameConfigurationImpl,
  GatewayApiImpl,
  GatewayCertificateAuthorityImpl,
  GroupImpl,
  GroupUserImpl,
  IdentityProviderImpl,
  IssueImpl,
  LoggerImpl,
  NamedValueImpl,
  NetworkStatusImpl,
  NotificationImpl,
  NotificationRecipientUserImpl,
  NotificationRecipientEmailImpl,
  OpenIdConnectProviderImpl,
  OutboundNetworkDependenciesEndpointsImpl,
  PolicyImpl,
  PolicyDescriptionImpl,
  PortalRevisionImpl,
  PortalSettingsImpl,
  SignInSettingsImpl,
  SignUpSettingsImpl,
  DelegationSettingsImpl,
  PrivateEndpointConnectionOperationsImpl,
  ProductImpl,
  ProductApiImpl,
  ProductGroupImpl,
  ProductSubscriptionsImpl,
  ProductPolicyImpl,
  QuotaByCounterKeysImpl,
  QuotaByPeriodKeysImpl,
  RegionImpl,
  ReportsImpl,
  GlobalSchemaImpl,
  TenantSettingsImpl,
  ApiManagementSkusImpl,
  SubscriptionImpl,
  TagResourceImpl,
  TenantAccessImpl,
  TenantAccessGitImpl,
  TenantConfigurationImpl,
  UserImpl,
  UserGroupImpl,
  UserSubscriptionImpl,
  UserIdentitiesImpl,
  UserConfirmationPasswordImpl
} from "./operations";
import {
  Api,
  ApiRevision,
  ApiRelease,
  ApiOperation,
  ApiOperationPolicy,
  Tag,
  ApiProduct,
  ApiPolicy,
  ApiSchema,
  ApiDiagnostic,
  ApiIssue,
  ApiIssueComment,
  ApiIssueAttachment,
  ApiTagDescription,
  OperationOperations,
  ApiExport,
  ApiVersionSet,
  AuthorizationServer,
  Backend,
  Cache,
  Certificate,
  ContentType,
  ContentItem,
  DeletedServices,
  ApiManagementOperations,
  ApiManagementServiceSkus,
  ApiManagementService,
  Diagnostic,
  EmailTemplate,
  Gateway,
  GatewayHostnameConfiguration,
  GatewayApi,
  GatewayCertificateAuthority,
  Group,
  GroupUser,
  IdentityProvider,
  Issue,
  Logger,
  NamedValue,
  NetworkStatus,
  Notification,
  NotificationRecipientUser,
  NotificationRecipientEmail,
  OpenIdConnectProvider,
  OutboundNetworkDependenciesEndpoints,
  Policy,
  PolicyDescription,
  PortalRevision,
  PortalSettings,
  SignInSettings,
  SignUpSettings,
  DelegationSettings,
  PrivateEndpointConnectionOperations,
  Product,
  ProductApi,
  ProductGroup,
  ProductSubscriptions,
  ProductPolicy,
  QuotaByCounterKeys,
  QuotaByPeriodKeys,
  Region,
  Reports,
  GlobalSchema,
  TenantSettings,
  ApiManagementSkus,
  Subscription,
  TagResource,
  TenantAccess,
  TenantAccessGit,
  TenantConfiguration,
  User,
  UserGroup,
  UserSubscription,
  UserIdentities,
  UserConfirmationPassword
} from "./operationsInterfaces";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  ApiManagementClientOptionalParams,
  ConnectivityCheckRequest,
  PerformConnectivityCheckAsyncOptionalParams,
  PerformConnectivityCheckAsyncResponse
} from "./models";

export class ApiManagementClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the ApiManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.
   *                       The subscription ID forms part of the URI for every service call.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: ApiManagementClientOptionalParams
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
    const defaults: ApiManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-apimanagement/9.0.0`;
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
    this.apiVersion = options.apiVersion || "2021-08-01";
    this.api = new ApiImpl(this);
    this.apiRevision = new ApiRevisionImpl(this);
    this.apiRelease = new ApiReleaseImpl(this);
    this.apiOperation = new ApiOperationImpl(this);
    this.apiOperationPolicy = new ApiOperationPolicyImpl(this);
    this.tag = new TagImpl(this);
    this.apiProduct = new ApiProductImpl(this);
    this.apiPolicy = new ApiPolicyImpl(this);
    this.apiSchema = new ApiSchemaImpl(this);
    this.apiDiagnostic = new ApiDiagnosticImpl(this);
    this.apiIssue = new ApiIssueImpl(this);
    this.apiIssueComment = new ApiIssueCommentImpl(this);
    this.apiIssueAttachment = new ApiIssueAttachmentImpl(this);
    this.apiTagDescription = new ApiTagDescriptionImpl(this);
    this.operationOperations = new OperationOperationsImpl(this);
    this.apiExport = new ApiExportImpl(this);
    this.apiVersionSet = new ApiVersionSetImpl(this);
    this.authorizationServer = new AuthorizationServerImpl(this);
    this.backend = new BackendImpl(this);
    this.cache = new CacheImpl(this);
    this.certificate = new CertificateImpl(this);
    this.contentType = new ContentTypeImpl(this);
    this.contentItem = new ContentItemImpl(this);
    this.deletedServices = new DeletedServicesImpl(this);
    this.apiManagementOperations = new ApiManagementOperationsImpl(this);
    this.apiManagementServiceSkus = new ApiManagementServiceSkusImpl(this);
    this.apiManagementService = new ApiManagementServiceImpl(this);
    this.diagnostic = new DiagnosticImpl(this);
    this.emailTemplate = new EmailTemplateImpl(this);
    this.gateway = new GatewayImpl(this);
    this.gatewayHostnameConfiguration = new GatewayHostnameConfigurationImpl(
      this
    );
    this.gatewayApi = new GatewayApiImpl(this);
    this.gatewayCertificateAuthority = new GatewayCertificateAuthorityImpl(
      this
    );
    this.group = new GroupImpl(this);
    this.groupUser = new GroupUserImpl(this);
    this.identityProvider = new IdentityProviderImpl(this);
    this.issue = new IssueImpl(this);
    this.logger = new LoggerImpl(this);
    this.namedValue = new NamedValueImpl(this);
    this.networkStatus = new NetworkStatusImpl(this);
    this.notification = new NotificationImpl(this);
    this.notificationRecipientUser = new NotificationRecipientUserImpl(this);
    this.notificationRecipientEmail = new NotificationRecipientEmailImpl(this);
    this.openIdConnectProvider = new OpenIdConnectProviderImpl(this);
    this.outboundNetworkDependenciesEndpoints = new OutboundNetworkDependenciesEndpointsImpl(
      this
    );
    this.policy = new PolicyImpl(this);
    this.policyDescription = new PolicyDescriptionImpl(this);
    this.portalRevision = new PortalRevisionImpl(this);
    this.portalSettings = new PortalSettingsImpl(this);
    this.signInSettings = new SignInSettingsImpl(this);
    this.signUpSettings = new SignUpSettingsImpl(this);
    this.delegationSettings = new DelegationSettingsImpl(this);
    this.privateEndpointConnectionOperations = new PrivateEndpointConnectionOperationsImpl(
      this
    );
    this.product = new ProductImpl(this);
    this.productApi = new ProductApiImpl(this);
    this.productGroup = new ProductGroupImpl(this);
    this.productSubscriptions = new ProductSubscriptionsImpl(this);
    this.productPolicy = new ProductPolicyImpl(this);
    this.quotaByCounterKeys = new QuotaByCounterKeysImpl(this);
    this.quotaByPeriodKeys = new QuotaByPeriodKeysImpl(this);
    this.region = new RegionImpl(this);
    this.reports = new ReportsImpl(this);
    this.globalSchema = new GlobalSchemaImpl(this);
    this.tenantSettings = new TenantSettingsImpl(this);
    this.apiManagementSkus = new ApiManagementSkusImpl(this);
    this.subscription = new SubscriptionImpl(this);
    this.tagResource = new TagResourceImpl(this);
    this.tenantAccess = new TenantAccessImpl(this);
    this.tenantAccessGit = new TenantAccessGitImpl(this);
    this.tenantConfiguration = new TenantConfigurationImpl(this);
    this.user = new UserImpl(this);
    this.userGroup = new UserGroupImpl(this);
    this.userSubscription = new UserSubscriptionImpl(this);
    this.userIdentities = new UserIdentitiesImpl(this);
    this.userConfirmationPassword = new UserConfirmationPasswordImpl(this);
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

  /**
   * Performs a connectivity check between the API Management service and a given destination, and
   * returns metrics for the connection, as well as errors encountered while trying to establish it.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param connectivityCheckRequestParams Connectivity Check request parameters.
   * @param options The options parameters.
   */
  async beginPerformConnectivityCheckAsync(
    resourceGroupName: string,
    serviceName: string,
    connectivityCheckRequestParams: ConnectivityCheckRequest,
    options?: PerformConnectivityCheckAsyncOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PerformConnectivityCheckAsyncResponse>,
      PerformConnectivityCheckAsyncResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PerformConnectivityCheckAsyncResponse> => {
      return this.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        serviceName,
        connectivityCheckRequestParams,
        options
      },
      performConnectivityCheckAsyncOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Performs a connectivity check between the API Management service and a given destination, and
   * returns metrics for the connection, as well as errors encountered while trying to establish it.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param connectivityCheckRequestParams Connectivity Check request parameters.
   * @param options The options parameters.
   */
  async beginPerformConnectivityCheckAsyncAndWait(
    resourceGroupName: string,
    serviceName: string,
    connectivityCheckRequestParams: ConnectivityCheckRequest,
    options?: PerformConnectivityCheckAsyncOptionalParams
  ): Promise<PerformConnectivityCheckAsyncResponse> {
    const poller = await this.beginPerformConnectivityCheckAsync(
      resourceGroupName,
      serviceName,
      connectivityCheckRequestParams,
      options
    );
    return poller.pollUntilDone();
  }

  api: Api;
  apiRevision: ApiRevision;
  apiRelease: ApiRelease;
  apiOperation: ApiOperation;
  apiOperationPolicy: ApiOperationPolicy;
  tag: Tag;
  apiProduct: ApiProduct;
  apiPolicy: ApiPolicy;
  apiSchema: ApiSchema;
  apiDiagnostic: ApiDiagnostic;
  apiIssue: ApiIssue;
  apiIssueComment: ApiIssueComment;
  apiIssueAttachment: ApiIssueAttachment;
  apiTagDescription: ApiTagDescription;
  operationOperations: OperationOperations;
  apiExport: ApiExport;
  apiVersionSet: ApiVersionSet;
  authorizationServer: AuthorizationServer;
  backend: Backend;
  cache: Cache;
  certificate: Certificate;
  contentType: ContentType;
  contentItem: ContentItem;
  deletedServices: DeletedServices;
  apiManagementOperations: ApiManagementOperations;
  apiManagementServiceSkus: ApiManagementServiceSkus;
  apiManagementService: ApiManagementService;
  diagnostic: Diagnostic;
  emailTemplate: EmailTemplate;
  gateway: Gateway;
  gatewayHostnameConfiguration: GatewayHostnameConfiguration;
  gatewayApi: GatewayApi;
  gatewayCertificateAuthority: GatewayCertificateAuthority;
  group: Group;
  groupUser: GroupUser;
  identityProvider: IdentityProvider;
  issue: Issue;
  logger: Logger;
  namedValue: NamedValue;
  networkStatus: NetworkStatus;
  notification: Notification;
  notificationRecipientUser: NotificationRecipientUser;
  notificationRecipientEmail: NotificationRecipientEmail;
  openIdConnectProvider: OpenIdConnectProvider;
  outboundNetworkDependenciesEndpoints: OutboundNetworkDependenciesEndpoints;
  policy: Policy;
  policyDescription: PolicyDescription;
  portalRevision: PortalRevision;
  portalSettings: PortalSettings;
  signInSettings: SignInSettings;
  signUpSettings: SignUpSettings;
  delegationSettings: DelegationSettings;
  privateEndpointConnectionOperations: PrivateEndpointConnectionOperations;
  product: Product;
  productApi: ProductApi;
  productGroup: ProductGroup;
  productSubscriptions: ProductSubscriptions;
  productPolicy: ProductPolicy;
  quotaByCounterKeys: QuotaByCounterKeys;
  quotaByPeriodKeys: QuotaByPeriodKeys;
  region: Region;
  reports: Reports;
  globalSchema: GlobalSchema;
  tenantSettings: TenantSettings;
  apiManagementSkus: ApiManagementSkus;
  subscription: Subscription;
  tagResource: TagResource;
  tenantAccess: TenantAccess;
  tenantAccessGit: TenantAccessGit;
  tenantConfiguration: TenantConfiguration;
  user: User;
  userGroup: UserGroup;
  userSubscription: UserSubscription;
  userIdentities: UserIdentities;
  userConfirmationPassword: UserConfirmationPassword;
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const performConnectivityCheckAsyncOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/connectivityCheck",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ConnectivityCheckResponse
    },
    201: {
      bodyMapper: Mappers.ConnectivityCheckResponse
    },
    202: {
      bodyMapper: Mappers.ConnectivityCheckResponse
    },
    204: {
      bodyMapper: Mappers.ConnectivityCheckResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.connectivityCheckRequestParams,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
