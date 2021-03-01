/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { IoTSpacesClientContext } from "./ioTSpacesClientContext";


class IoTSpacesClient extends IoTSpacesClientContext {
  // Operation groups
  ioTSpaces: operations.IoTSpaces;
  operations: operations.Operations;

  /**
   * Initializes a new instance of the IoTSpacesClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The subscription identifier.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.IoTSpacesClientOptions) {
    super(credentials, subscriptionId, options);
    this.ioTSpaces = new operations.IoTSpaces(this);
    this.operations = new operations.Operations(this);
  }
}

// Operation Specifications

export {
  IoTSpacesClient,
  IoTSpacesClientContext,
  Models as IoTSpacesModels,
  Mappers as IoTSpacesMappers
};
export * from "./operations";
