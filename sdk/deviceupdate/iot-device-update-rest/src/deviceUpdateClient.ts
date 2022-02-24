// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { DeviceUpdateClientRestClient } from "./clientDefinitions";

export default function DeviceUpdateClient(
  endpoint: string,
  credentials: TokenCredential,
  options: ClientOptions = {}
): DeviceUpdateClientRestClient {
  const baseUrl = options.baseUrl ?? `https://${endpoint}`;
  options.apiVersion = options.apiVersion ?? "2021-06-01-preview";
  options = {
    ...options,
    credentials: {
      scopes: ["https://api.adu.microsoft.com/.default"]
    }
  };

  const client = getClient(
    baseUrl,
    credentials,
    options
  ) as DeviceUpdateClientRestClient;

  return client;
}
