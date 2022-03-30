// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { PurviewCatalogClientLike } from "./clientDefinitions";

export default function PurviewCatalogClient(
  Endpoint: string,
  credentials: TokenCredential,
  options: ClientOptions = {}
): PurviewCatalogClientLike {
  const baseUrl = options.baseUrl ?? `${Endpoint}/catalog/api`;
  options.apiVersion = options.apiVersion ?? "2021-05-01-preview";
  options = {
    ...options,
    credentials: {
      scopes: ["https://purview.azure.net/.default"]
    }
  };

  const userAgentInfo = `azsdk-js-purview-catalog-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix
    }
  };

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as PurviewCatalogClientLike;

  return client;
}
