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
import * as Models from "../models";
import * as Mappers from "../models/machinesMappers";
import * as Parameters from "../models/parameters";
import { AzureMigrateV2Context } from "../azureMigrateV2Context";

/** Class representing a Machines. */
export class Machines {
  private readonly client: AzureMigrateV2Context;

  /**
   * Create a Machines.
   * @param {AzureMigrateV2Context} client Reference to the service client.
   */
  constructor(client: AzureMigrateV2Context) {
    this.client = client;
  }

  /**
   * Get data of all the machines available in the project. Returns a json array of objects of type
   * 'machine' defined in Models section.
   * @summary Get all machines in the project
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param [options] The optional parameters
   * @returns Promise<Models.MachinesListByProjectResponse>
   */
  listByProject(resourceGroupName: string, projectName: string, options?: msRest.RequestOptionsBase): Promise<Models.MachinesListByProjectResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param callback The callback
   */
  listByProject(resourceGroupName: string, projectName: string, callback: msRest.ServiceCallback<Models.MachineResultList>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByProject(resourceGroupName: string, projectName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MachineResultList>): void;
  listByProject(resourceGroupName: string, projectName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MachineResultList>, callback?: msRest.ServiceCallback<Models.MachineResultList>): Promise<Models.MachinesListByProjectResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        options
      },
      listByProjectOperationSpec,
      callback) as Promise<Models.MachinesListByProjectResponse>;
  }

  /**
   * Get the machine with the specified name. Returns a json object of type 'machine' defined in
   * Models section.
   * @summary Get a specific machine.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param machineName Unique name of a machine in private datacenter.
   * @param [options] The optional parameters
   * @returns Promise<Models.MachinesGetResponse>
   */
  get(resourceGroupName: string, projectName: string, machineName: string, options?: msRest.RequestOptionsBase): Promise<Models.MachinesGetResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param machineName Unique name of a machine in private datacenter.
   * @param callback The callback
   */
  get(resourceGroupName: string, projectName: string, machineName: string, callback: msRest.ServiceCallback<Models.Machine>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param machineName Unique name of a machine in private datacenter.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, projectName: string, machineName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Machine>): void;
  get(resourceGroupName: string, projectName: string, machineName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Machine>, callback?: msRest.ServiceCallback<Models.Machine>): Promise<Models.MachinesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        machineName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.MachinesGetResponse>;
  }

  /**
   * Get data of all the machines available in the project. Returns a json array of objects of type
   * 'machine' defined in Models section.
   * @summary Get all machines in the project
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.MachinesListByProjectResponse>
   */
  listByProjectNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.MachinesListByProjectResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByProjectNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.MachineResultList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByProjectNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MachineResultList>): void;
  listByProjectNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MachineResultList>, callback?: msRest.ServiceCallback<Models.MachineResultList>): Promise<Models.MachinesListByProjectResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByProjectNextOperationSpec,
      callback) as Promise<Models.MachinesListByProjectResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByProjectOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/machines",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MachineResultList,
      headersMapper: Mappers.MachinesListByProjectHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.MachinesListByProjectHeaders
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/machines/{machineName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.machineName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Machine,
      headersMapper: Mappers.MachinesGetHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.MachinesGetHeaders
    }
  },
  serializer
};

const listByProjectNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MachineResultList,
      headersMapper: Mappers.MachinesListByProjectHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.MachinesListByProjectHeaders
    }
  },
  serializer
};
