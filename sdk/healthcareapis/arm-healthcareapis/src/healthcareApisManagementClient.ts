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
  ServicesImpl,
  PrivateEndpointConnectionsImpl,
  PrivateLinkResourcesImpl,
  WorkspacesImpl,
  DicomServicesImpl,
  IotConnectorsImpl,
  FhirDestinationsImpl,
  IotConnectorFhirDestinationImpl,
  FhirServicesImpl,
  WorkspacePrivateEndpointConnectionsImpl,
  WorkspacePrivateLinkResourcesImpl,
  OperationsImpl,
  OperationResultsImpl
} from "./operations";
import {
  Services,
  PrivateEndpointConnections,
  PrivateLinkResources,
  Workspaces,
  DicomServices,
  IotConnectors,
  FhirDestinations,
  IotConnectorFhirDestination,
  FhirServices,
  WorkspacePrivateEndpointConnections,
  WorkspacePrivateLinkResources,
  Operations,
  OperationResults
} from "./operationsInterfaces";
import { HealthcareApisManagementClientOptionalParams } from "./models";

export class HealthcareApisManagementClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the HealthcareApisManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The subscription identifier.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: HealthcareApisManagementClientOptionalParams
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
    const defaults: HealthcareApisManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-healthcareapis/2.2.0`;
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
    this.apiVersion = options.apiVersion || "2022-06-01";
    this.services = new ServicesImpl(this);
    this.privateEndpointConnections = new PrivateEndpointConnectionsImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
    this.workspaces = new WorkspacesImpl(this);
    this.dicomServices = new DicomServicesImpl(this);
    this.iotConnectors = new IotConnectorsImpl(this);
    this.fhirDestinations = new FhirDestinationsImpl(this);
    this.iotConnectorFhirDestination = new IotConnectorFhirDestinationImpl(
      this
    );
    this.fhirServices = new FhirServicesImpl(this);
    this.workspacePrivateEndpointConnections = new WorkspacePrivateEndpointConnectionsImpl(
      this
    );
    this.workspacePrivateLinkResources = new WorkspacePrivateLinkResourcesImpl(
      this
    );
    this.operations = new OperationsImpl(this);
    this.operationResults = new OperationResultsImpl(this);
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

  services: Services;
  privateEndpointConnections: PrivateEndpointConnections;
  privateLinkResources: PrivateLinkResources;
  workspaces: Workspaces;
  dicomServices: DicomServices;
  iotConnectors: IotConnectors;
  fhirDestinations: FhirDestinations;
  iotConnectorFhirDestination: IotConnectorFhirDestination;
  fhirServices: FhirServices;
  workspacePrivateEndpointConnections: WorkspacePrivateEndpointConnections;
  workspacePrivateLinkResources: WorkspacePrivateLinkResources;
  operations: Operations;
  operationResults: OperationResults;
}
