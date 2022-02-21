// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { PurviewMetadataPoliciesClientRestClient } from "./clientDefinitions";

export function PurviewMetadataPoliciesClient(
  Endpoint: string,
  credentials: TokenCredential,
  options: ClientOptions = {}
): PurviewMetadataPoliciesClientRestClient {
  const baseUrl = options.baseUrl ?? `${Endpoint}/policyStore`;
  options.apiVersion = options.apiVersion ?? "2021-07-01-preview";
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
  ) as PurviewMetadataPoliciesClientRestClient;

  return client;
}
