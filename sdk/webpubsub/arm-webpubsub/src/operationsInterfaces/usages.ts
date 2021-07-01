import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SignalRServiceUsage, UsagesListOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Usages. */
export interface Usages {
  /**
   * List resource usage quotas by location.
   * @param location the location like "eastus"
   * @param options The options parameters.
   */
  list(
    location: string,
    options?: UsagesListOptionalParams
  ): PagedAsyncIterableIterator<SignalRServiceUsage>;
}
