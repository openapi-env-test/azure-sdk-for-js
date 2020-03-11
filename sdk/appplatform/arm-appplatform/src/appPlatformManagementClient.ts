/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AppPlatformManagementClientContext } from "./appPlatformManagementClientContext";


class AppPlatformManagementClient extends AppPlatformManagementClientContext {
  // Operation groups
  services: operations.Services;
  apps: operations.Apps;
  bindings: operations.Bindings;
  certificates: operations.Certificates;
  customDomains: operations.CustomDomains;
  deployments: operations.Deployments;
  health: operations.Health;
  operations: operations.Operations;
  runtimeVersions: operations.RuntimeVersions;
  sku: operations.SkuOperations;

  /**
   * Initializes a new instance of the AppPlatformManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Gets subscription ID which uniquely identify the Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.AppPlatformManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.services = new operations.Services(this);
    this.apps = new operations.Apps(this);
    this.bindings = new operations.Bindings(this);
    this.certificates = new operations.Certificates(this);
    this.customDomains = new operations.CustomDomains(this);
    this.deployments = new operations.Deployments(this);
    this.health = new operations.Health(this);
    this.operations = new operations.Operations(this);
    this.runtimeVersions = new operations.RuntimeVersions(this);
    this.sku = new operations.SkuOperations(this);
  }
}

// Operation Specifications

export {
  AppPlatformManagementClient,
  AppPlatformManagementClientContext,
  Models as AppPlatformManagementModels,
  Mappers as AppPlatformManagementMappers
};
export * from "./operations";
