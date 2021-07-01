import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Operation, OperationsListOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Operations. */
export interface Operations {
  /**
   * Lists all of the available REST API operations of the Microsoft.SignalRService provider.
   * @param options The options parameters.
   */
  list(
    options?: OperationsListOptionalParams
  ): PagedAsyncIterableIterator<Operation>;
}
