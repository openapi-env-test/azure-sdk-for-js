// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { PurviewCatalogClientRestClient } from "./clientDefinitions";

export default function PurviewCatalogClient(
  Endpoint: string,
  credentials: TokenCredential,
  options: ClientOptions = {}
): PurviewCatalogClientRestClient {
  const baseUrl = options.baseUrl ?? `${Endpoint}/catalog/api`;
  options.apiVersion = options.apiVersion ?? "2021-05-01-preview";
  options = {
    ...options,
    credentials: {
      scopes: ["https://purview.azure.net/.default"]
    }
  };

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as PurviewCatalogClientRestClient;

  return client;
}
