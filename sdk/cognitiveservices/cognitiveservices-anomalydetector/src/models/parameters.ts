/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const endpoint: msRest.OperationURLParameter = {
  parameterPath: "endpoint",
  mapper: {
    required: true,
    serializedName: "Endpoint",
    defaultValue: '',
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
