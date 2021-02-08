/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/cloudServicesMappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";

/** Class representing a CloudServices. */
export class CloudServices {
  private readonly client: ComputeManagementClientContext;

  /**
   * Create a CloudServices.
   * @param {ComputeManagementClientContext} client Reference to the service client.
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Create or update a cloud service. Please note some properties can be set only during cloud
   * service creation.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param [options] The optional parameters
   * @returns Promise<Models.CloudServicesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, cloudServiceName: string, options?: Models.CloudServicesCreateOrUpdateOptionalParams): Promise<Models.CloudServicesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,cloudServiceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.CloudServicesCreateOrUpdateResponse>;
  }

  /**
   * Update a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param [options] The optional parameters
   * @returns Promise<Models.CloudServicesUpdateResponse>
   */
  update(resourceGroupName: string, cloudServiceName: string, options?: Models.CloudServicesUpdateOptionalParams): Promise<Models.CloudServicesUpdateResponse> {
    return this.beginUpdate(resourceGroupName,cloudServiceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.CloudServicesUpdateResponse>;
  }

  /**
   * Deletes a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, cloudServiceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,cloudServiceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Display information about a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param [options] The optional parameters
   * @returns Promise<Models.CloudServicesGetResponse>
   */
  get(resourceGroupName: string, cloudServiceName: string, options?: msRest.RequestOptionsBase): Promise<Models.CloudServicesGetResponse>;
  /**
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param callback The callback
   */
  get(resourceGroupName: string, cloudServiceName: string, callback: msRest.ServiceCallback<Models.CloudService>): void;
  /**
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, cloudServiceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CloudService>): void;
  get(resourceGroupName: string, cloudServiceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CloudService>, callback?: msRest.ServiceCallback<Models.CloudService>): Promise<Models.CloudServicesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        cloudServiceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.CloudServicesGetResponse>;
  }

  /**
   * Gets the status of a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param [options] The optional parameters
   * @returns Promise<Models.CloudServicesGetInstanceViewResponse>
   */
  getInstanceView(resourceGroupName: string, cloudServiceName: string, options?: msRest.RequestOptionsBase): Promise<Models.CloudServicesGetInstanceViewResponse>;
  /**
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param callback The callback
   */
  getInstanceView(resourceGroupName: string, cloudServiceName: string, callback: msRest.ServiceCallback<Models.CloudServiceInstanceView>): void;
  /**
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param options The optional parameters
   * @param callback The callback
   */
  getInstanceView(resourceGroupName: string, cloudServiceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CloudServiceInstanceView>): void;
  getInstanceView(resourceGroupName: string, cloudServiceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CloudServiceInstanceView>, callback?: msRest.ServiceCallback<Models.CloudServiceInstanceView>): Promise<Models.CloudServicesGetInstanceViewResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        cloudServiceName,
        options
      },
      getInstanceViewOperationSpec,
      callback) as Promise<Models.CloudServicesGetInstanceViewResponse>;
  }

  /**
   * Gets a list of all cloud services in the subscription, regardless of the associated resource
   * group. Use nextLink property in the response to get the next page of Cloud Services. Do this
   * till nextLink is null to fetch all the Cloud Services.
   * @param [options] The optional parameters
   * @returns Promise<Models.CloudServicesListAllResponse>
   */
  listAll(options?: msRest.RequestOptionsBase): Promise<Models.CloudServicesListAllResponse>;
  /**
   * @param callback The callback
   */
  listAll(callback: msRest.ServiceCallback<Models.CloudServiceListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CloudServiceListResult>): void;
  listAll(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CloudServiceListResult>, callback?: msRest.ServiceCallback<Models.CloudServiceListResult>): Promise<Models.CloudServicesListAllResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listAllOperationSpec,
      callback) as Promise<Models.CloudServicesListAllResponse>;
  }

  /**
   * Gets a list of all cloud services under a resource group. Use nextLink property in the response
   * to get the next page of Cloud Services. Do this till nextLink is null to fetch all the Cloud
   * Services.
   * @param resourceGroupName Name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.CloudServicesListResponse>
   */
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.CloudServicesListResponse>;
  /**
   * @param resourceGroupName Name of the resource group.
   * @param callback The callback
   */
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.CloudServiceListResult>): void;
  /**
   * @param resourceGroupName Name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CloudServiceListResult>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CloudServiceListResult>, callback?: msRest.ServiceCallback<Models.CloudServiceListResult>): Promise<Models.CloudServicesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.CloudServicesListResponse>;
  }

  /**
   * Starts the cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  start(resourceGroupName: string, cloudServiceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginStart(resourceGroupName,cloudServiceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Power off the cloud service. Note that resources are still attached and you are getting charged
   * for the resources.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  powerOff(resourceGroupName: string, cloudServiceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginPowerOff(resourceGroupName,cloudServiceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Restarts one or more role instances in a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  restart(resourceGroupName: string, cloudServiceName: string, options?: Models.CloudServicesRestartOptionalParams): Promise<msRest.RestResponse> {
    return this.beginRestart(resourceGroupName,cloudServiceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Reimage asynchronous operation reinstalls the operating system on instances of web roles or
   * worker roles.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  reimage(resourceGroupName: string, cloudServiceName: string, options?: Models.CloudServicesReimageOptionalParams): Promise<msRest.RestResponse> {
    return this.beginReimage(resourceGroupName,cloudServiceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Rebuild Role Instances reinstalls the operating system on instances of web roles or worker roles
   * and initializes the storage resources that are used by them. If you do not want to initialize
   * storage resources, you can use Reimage Role Instances.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  rebuild(resourceGroupName: string, cloudServiceName: string, options?: Models.CloudServicesRebuildOptionalParams): Promise<msRest.RestResponse> {
    return this.beginRebuild(resourceGroupName,cloudServiceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Deletes role instances in a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteInstances(resourceGroupName: string, cloudServiceName: string, options?: Models.CloudServicesDeleteInstancesOptionalParams): Promise<msRest.RestResponse> {
    return this.beginDeleteInstances(resourceGroupName,cloudServiceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Create or update a cloud service. Please note some properties can be set only during cloud
   * service creation.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, cloudServiceName: string, options?: Models.CloudServicesBeginCreateOrUpdateOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        cloudServiceName,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Update a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, cloudServiceName: string, options?: Models.CloudServicesBeginUpdateOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        cloudServiceName,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Deletes a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, cloudServiceName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        cloudServiceName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Starts the cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginStart(resourceGroupName: string, cloudServiceName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        cloudServiceName,
        options
      },
      beginStartOperationSpec,
      options);
  }

  /**
   * Power off the cloud service. Note that resources are still attached and you are getting charged
   * for the resources.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginPowerOff(resourceGroupName: string, cloudServiceName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        cloudServiceName,
        options
      },
      beginPowerOffOperationSpec,
      options);
  }

  /**
   * Restarts one or more role instances in a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginRestart(resourceGroupName: string, cloudServiceName: string, options?: Models.CloudServicesBeginRestartOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        cloudServiceName,
        options
      },
      beginRestartOperationSpec,
      options);
  }

  /**
   * Reimage asynchronous operation reinstalls the operating system on instances of web roles or
   * worker roles.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginReimage(resourceGroupName: string, cloudServiceName: string, options?: Models.CloudServicesBeginReimageOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        cloudServiceName,
        options
      },
      beginReimageOperationSpec,
      options);
  }

  /**
   * Rebuild Role Instances reinstalls the operating system on instances of web roles or worker roles
   * and initializes the storage resources that are used by them. If you do not want to initialize
   * storage resources, you can use Reimage Role Instances.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginRebuild(resourceGroupName: string, cloudServiceName: string, options?: Models.CloudServicesBeginRebuildOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        cloudServiceName,
        options
      },
      beginRebuildOperationSpec,
      options);
  }

  /**
   * Deletes role instances in a cloud service.
   * @param resourceGroupName Name of the resource group.
   * @param cloudServiceName Name of the cloud service.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteInstances(resourceGroupName: string, cloudServiceName: string, options?: Models.CloudServicesBeginDeleteInstancesOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        cloudServiceName,
        options
      },
      beginDeleteInstancesOperationSpec,
      options);
  }

  /**
   * Gets a list of all cloud services in the subscription, regardless of the associated resource
   * group. Use nextLink property in the response to get the next page of Cloud Services. Do this
   * till nextLink is null to fetch all the Cloud Services.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CloudServicesListAllNextResponse>
   */
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.CloudServicesListAllNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listAllNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CloudServiceListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAllNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CloudServiceListResult>): void;
  listAllNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CloudServiceListResult>, callback?: msRest.ServiceCallback<Models.CloudServiceListResult>): Promise<Models.CloudServicesListAllNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAllNextOperationSpec,
      callback) as Promise<Models.CloudServicesListAllNextResponse>;
  }

  /**
   * Gets a list of all cloud services under a resource group. Use nextLink property in the response
   * to get the next page of Cloud Services. Do this till nextLink is null to fetch all the Cloud
   * Services.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CloudServicesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.CloudServicesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CloudServiceListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CloudServiceListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CloudServiceListResult>, callback?: msRest.ServiceCallback<Models.CloudServiceListResult>): Promise<Models.CloudServicesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.CloudServicesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.cloudServiceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CloudService
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getInstanceViewOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/instanceView",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.cloudServiceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CloudServiceInstanceView
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Compute/cloudServices",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CloudServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CloudServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.cloudServiceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "parameters"
    ],
    mapper: Mappers.CloudService
  },
  responses: {
    200: {
      bodyMapper: Mappers.CloudService
    },
    201: {
      bodyMapper: Mappers.CloudService
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.cloudServiceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "parameters"
    ],
    mapper: Mappers.CloudServiceUpdate
  },
  responses: {
    200: {
      bodyMapper: Mappers.CloudService
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.cloudServiceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginStartOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/start",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.cloudServiceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginPowerOffOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/poweroff",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.cloudServiceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginRestartOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/restart",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.cloudServiceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "parameters"
    ],
    mapper: Mappers.RoleInstances
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginReimageOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/reimage",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.cloudServiceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "parameters"
    ],
    mapper: Mappers.RoleInstances
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginRebuildOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/rebuild",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.cloudServiceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "parameters"
    ],
    mapper: Mappers.RoleInstances
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteInstancesOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/delete",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.cloudServiceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "parameters"
    ],
    mapper: Mappers.RoleInstances
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAllNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CloudServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CloudServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
