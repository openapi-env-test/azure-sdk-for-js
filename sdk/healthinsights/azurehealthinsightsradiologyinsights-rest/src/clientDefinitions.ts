// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { GetJobParameters } from "./parameters";
import { GetJob200Response } from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetJob {
  /** Gets the status and details of the Radiology Insights job. */
  get(options?: GetJobParameters): StreamableMethod<GetJob200Response>;
}

export interface Routes {
  /** Resource for '/radiology-insights/jobs/\{id\}' has methods for the following verbs: get */
  (path: "/radiology-insights/jobs/{id}", id: string): GetJob;
}

export type AzureHealthInsightsClient = Client & {
  path: Routes;
};
