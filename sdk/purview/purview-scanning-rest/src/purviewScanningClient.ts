// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { PurviewScanningClientLike } from "./clientDefinitions";

export default function PurviewScanningClient(
  Endpoint: string,
  credentials: TokenCredential,
  options: ClientOptions = {}
): PurviewScanningClientLike {
  const baseUrl = options.baseUrl ?? `${Endpoint}`;
  options.apiVersion = options.apiVersion ?? "2018-12-01-preview";
  options = {
    ...options,
    credentials: {
      scopes: ["https://purview.azure.net/.default"]
    }
  };

  const userAgentInfo = `azsdk-js-purview-scanning-rest/1.0.0-beta.1`;
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
  ) as PurviewScanningClientLike;

  return client;
}
