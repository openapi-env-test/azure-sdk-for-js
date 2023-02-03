/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  KeyValuesGetOptionalParams,
  KeyValuesGetResponse,
  KeyValuesCreateOrUpdateOptionalParams,
  KeyValuesCreateOrUpdateResponse,
  KeyValuesDeleteOptionalParams
} from "../models";

/** Interface representing a KeyValues. */
export interface KeyValues {
  /**
   * Gets the properties of the specified key-value.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param keyValueName Identifier of key and label combination. Key and label are joined by $
   *                     character. Label is optional.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    configStoreName: string,
    keyValueName: string,
    options?: KeyValuesGetOptionalParams
  ): Promise<KeyValuesGetResponse>;
  /**
   * Creates a key-value.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param keyValueName Identifier of key and label combination. Key and label are joined by $
   *                     character. Label is optional.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    configStoreName: string,
    keyValueName: string,
    options?: KeyValuesCreateOrUpdateOptionalParams
  ): Promise<KeyValuesCreateOrUpdateResponse>;
  /**
   * Deletes a key-value.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param keyValueName Identifier of key and label combination. Key and label are joined by $
   *                     character. Label is optional.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    configStoreName: string,
    keyValueName: string,
    options?: KeyValuesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a key-value.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param keyValueName Identifier of key and label combination. Key and label are joined by $
   *                     character. Label is optional.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    configStoreName: string,
    keyValueName: string,
    options?: KeyValuesDeleteOptionalParams
  ): Promise<void>;
}
