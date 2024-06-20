/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ApiContract,
  ApiListByServiceOptionalParams,
  TagResourceContract,
  ApiListByTagsOptionalParams,
  ApiGetEntityTagOptionalParams,
  ApiGetEntityTagResponse,
  ApiGetOptionalParams,
  ApiGetResponse,
  ApiCreateOrUpdateParameter,
  ApiCreateOrUpdateOptionalParams,
  ApiCreateOrUpdateResponse,
  ApiUpdateContract,
  ApiUpdateOptionalParams,
  ApiUpdateResponse,
  ApiDeleteOptionalParams,
  ApiDeleteResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Api. */
export interface Api {
  /**
   * Lists all APIs of the API Management service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: ApiListByServiceOptionalParams,
  ): PagedAsyncIterableIterator<ApiContract>;
  /**
   * Lists a collection of apis associated with tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  listByTags(
    resourceGroupName: string,
    serviceName: string,
    options?: ApiListByTagsOptionalParams,
  ): PagedAsyncIterableIterator<TagResourceContract>;
  /**
   * Gets the entity state (Etag) version of the API specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiGetEntityTagOptionalParams,
  ): Promise<ApiGetEntityTagResponse>;
  /**
   * Gets the details of the API specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: ApiGetOptionalParams,
  ): Promise<ApiGetResponse>;
  /**
   * Creates new or updates existing specified API of the API Management service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param parameters Create or update parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    parameters: ApiCreateOrUpdateParameter,
    options?: ApiCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ApiCreateOrUpdateResponse>,
      ApiCreateOrUpdateResponse
    >
  >;
  /**
   * Creates new or updates existing specified API of the API Management service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param parameters Create or update parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    parameters: ApiCreateOrUpdateParameter,
    options?: ApiCreateOrUpdateOptionalParams,
  ): Promise<ApiCreateOrUpdateResponse>;
  /**
   * Updates the specified API of the API Management service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters API Update Contract parameters.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    ifMatch: string,
    parameters: ApiUpdateContract,
    options?: ApiUpdateOptionalParams,
  ): Promise<ApiUpdateResponse>;
  /**
   * Deletes the specified API of the API Management service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    ifMatch: string,
    options?: ApiDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<OperationState<ApiDeleteResponse>, ApiDeleteResponse>
  >;
  /**
   * Deletes the specified API of the API Management service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    ifMatch: string,
    options?: ApiDeleteOptionalParams,
  ): Promise<ApiDeleteResponse>;
}
