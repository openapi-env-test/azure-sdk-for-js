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
import { ResourceManagementClientContext } from "./resourceManagementClientContext";


class ResourceManagementClient extends ResourceManagementClientContext {
  // Operation groups
  operations: operations.Operations;
  deployments: operations.Deployments;
  providers: operations.Providers;
  providerResourceTypes: operations.ProviderResourceTypes;
  resources: operations.Resources;
  resourceGroups: operations.ResourceGroups;
  tags: operations.TagsOperations;
  deploymentOperations: operations.DeploymentOperations;

  /**
   * Initializes a new instance of the ResourceManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The Microsoft Azure subscription ID.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.ResourceManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.deployments = new operations.Deployments(this);
    this.providers = new operations.Providers(this);
    this.providerResourceTypes = new operations.ProviderResourceTypes(this);
    this.resources = new operations.Resources(this);
    this.resourceGroups = new operations.ResourceGroups(this);
    this.tags = new operations.TagsOperations(this);
    this.deploymentOperations = new operations.DeploymentOperations(this);
  }
}

// Operation Specifications

export {
  ResourceManagementClient,
  ResourceManagementClientContext,
  Models as ResourceManagementModels,
  Mappers as ResourceManagementMappers
};
export * from "./operations";
