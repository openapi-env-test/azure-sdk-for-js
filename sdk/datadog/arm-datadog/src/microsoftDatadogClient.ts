/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import {
  MarketplaceAgreementsImpl,
  MonitorsImpl,
  OperationsImpl,
  TagRulesImpl,
  SingleSignOnConfigurationsImpl
} from "./operations";
import {
  MarketplaceAgreements,
  Monitors,
  Operations,
  TagRules,
  SingleSignOnConfigurations
} from "./operationsInterfaces";
import { MicrosoftDatadogClientOptionalParams } from "./models";

export class MicrosoftDatadogClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the MicrosoftDatadogClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: MicrosoftDatadogClientOptionalParams
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
    const defaults: MicrosoftDatadogClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-datadog/1.0.0-beta.1`;
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
      baseUri: options.endpoint || "https://management.azure.com"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2021-03-01";
    this.marketplaceAgreements = new MarketplaceAgreementsImpl(this);
    this.monitors = new MonitorsImpl(this);
    this.operations = new OperationsImpl(this);
    this.tagRules = new TagRulesImpl(this);
    this.singleSignOnConfigurations = new SingleSignOnConfigurationsImpl(this);
  }

  marketplaceAgreements: MarketplaceAgreements;
  monitors: Monitors;
  operations: Operations;
  tagRules: TagRules;
  singleSignOnConfigurations: SingleSignOnConfigurations;
}
