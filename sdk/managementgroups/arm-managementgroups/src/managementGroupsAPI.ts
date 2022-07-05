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
  ManagementGroupsImpl,
  ManagementGroupSubscriptionsImpl,
  HierarchySettingsOperationsImpl,
  OperationsImpl,
  EntitiesImpl
} from "./operations";
import {
  ManagementGroups,
  ManagementGroupSubscriptions,
  HierarchySettingsOperations,
  Operations,
  Entities
} from "./operationsInterfaces";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  ManagementGroupsAPIOptionalParams,
  CheckNameAvailabilityRequest,
  CheckNameAvailabilityOptionalParams,
  CheckNameAvailabilityResponse,
  StartTenantBackfillOptionalParams,
  StartTenantBackfillResponse,
  TenantBackfillStatusOptionalParams,
  TenantBackfillStatusResponse
} from "./models";

export class ManagementGroupsAPI extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the ManagementGroupsAPI class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    options?: ManagementGroupsAPIOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: ManagementGroupsAPIOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-managementgroups/3.0.0`;
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

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2021-04-01";
    this.managementGroups = new ManagementGroupsImpl(this);
    this.managementGroupSubscriptions = new ManagementGroupSubscriptionsImpl(
      this
    );
    this.hierarchySettingsOperations = new HierarchySettingsOperationsImpl(
      this
    );
    this.operations = new OperationsImpl(this);
    this.entities = new EntitiesImpl(this);
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
   * Checks if the specified management group name is valid and unique
   * @param checkNameAvailabilityRequest Management group name availability check parameters.
   * @param options The options parameters.
   */
  checkNameAvailability(
    checkNameAvailabilityRequest: CheckNameAvailabilityRequest,
    options?: CheckNameAvailabilityOptionalParams
  ): Promise<CheckNameAvailabilityResponse> {
    return this.sendOperationRequest(
      { checkNameAvailabilityRequest, options },
      checkNameAvailabilityOperationSpec
    );
  }

  /**
   * Starts backfilling subscriptions for the Tenant.
   * @param options The options parameters.
   */
  startTenantBackfill(
    options?: StartTenantBackfillOptionalParams
  ): Promise<StartTenantBackfillResponse> {
    return this.sendOperationRequest(
      { options },
      startTenantBackfillOperationSpec
    );
  }

  /**
   * Gets tenant backfill status
   * @param options The options parameters.
   */
  tenantBackfillStatus(
    options?: TenantBackfillStatusOptionalParams
  ): Promise<TenantBackfillStatusResponse> {
    return this.sendOperationRequest(
      { options },
      tenantBackfillStatusOperationSpec
    );
  }

  managementGroups: ManagementGroups;
  managementGroupSubscriptions: ManagementGroupSubscriptions;
  hierarchySettingsOperations: HierarchySettingsOperations;
  operations: Operations;
  entities: Entities;
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.checkNameAvailabilityRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const startTenantBackfillOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/startTenantBackfill",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TenantBackfillStatusResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const tenantBackfillStatusOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Management/tenantBackfillStatus",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TenantBackfillStatusResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
