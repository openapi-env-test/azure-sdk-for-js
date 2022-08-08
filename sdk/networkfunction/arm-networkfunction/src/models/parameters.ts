/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  AzureTrafficCollector as AzureTrafficCollectorMapper,
  TagsObject as TagsObjectMapper,
  CollectorPolicy as CollectorPolicyMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-08-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const azureTrafficCollectorName: OperationURLParameter = {
  parameterPath: "azureTrafficCollectorName",
  mapper: {
    serializedName: "azureTrafficCollectorName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const location: OperationParameter = {
  parameterPath: ["options", "location"],
  mapper: AzureTrafficCollectorMapper
};

export const tags: OperationParameter = {
  parameterPath: ["options", "tags"],
  mapper: AzureTrafficCollectorMapper
};

export const collectorPolicies: OperationParameter = {
  parameterPath: ["options", "collectorPolicies"],
  mapper: AzureTrafficCollectorMapper
};

export const virtualHub: OperationParameter = {
  parameterPath: ["options", "virtualHub"],
  mapper: AzureTrafficCollectorMapper
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: TagsObjectMapper
};

export const collectorPolicyName: OperationURLParameter = {
  parameterPath: "collectorPolicyName",
  mapper: {
    serializedName: "collectorPolicyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const location1: OperationParameter = {
  parameterPath: ["options", "location"],
  mapper: CollectorPolicyMapper
};

export const tags1: OperationParameter = {
  parameterPath: ["options", "tags"],
  mapper: CollectorPolicyMapper
};

export const ingestionPolicy: OperationParameter = {
  parameterPath: ["options", "ingestionPolicy"],
  mapper: CollectorPolicyMapper
};

export const emissionPolicies: OperationParameter = {
  parameterPath: ["options", "emissionPolicies"],
  mapper: CollectorPolicyMapper
};
