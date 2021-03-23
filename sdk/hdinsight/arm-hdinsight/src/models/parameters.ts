/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const apiVersion: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};
export const applicationName: msRest.OperationURLParameter = {
  parameterPath: "applicationName",
  mapper: {
    required: true,
    serializedName: "applicationName",
    type: {
      name: "String"
    }
  }
};
export const clusterName: msRest.OperationURLParameter = {
  parameterPath: "clusterName",
  mapper: {
    required: true,
    serializedName: "clusterName",
    type: {
      name: "String"
    }
  }
};
export const configurationName: msRest.OperationURLParameter = {
  parameterPath: "configurationName",
  mapper: {
    required: true,
    serializedName: "configurationName",
    type: {
      name: "String"
    }
  }
};
export const extensionName: msRest.OperationURLParameter = {
  parameterPath: "extensionName",
  mapper: {
    required: true,
    serializedName: "extensionName",
    type: {
      name: "String"
    }
  }
};
export const location: msRest.OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    required: true,
    serializedName: "location",
    type: {
      name: "String"
    }
  }
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const operationId: msRest.OperationURLParameter = {
  parameterPath: "operationId",
  mapper: {
    required: true,
    serializedName: "operationId",
    type: {
      name: "String"
    }
  }
};
export const resourceGroupName: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
    type: {
      name: "String"
    }
  }
};
export const roleName: msRest.OperationURLParameter = {
  parameterPath: "roleName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "roleName",
    defaultValue: 'workernode',
    type: {
      name: "String"
    }
  }
};
export const scriptExecutionId: msRest.OperationURLParameter = {
  parameterPath: "scriptExecutionId",
  mapper: {
    required: true,
    serializedName: "scriptExecutionId",
    type: {
      name: "String"
    }
  }
};
export const scriptName: msRest.OperationURLParameter = {
  parameterPath: "scriptName",
  mapper: {
    required: true,
    serializedName: "scriptName",
    type: {
      name: "String"
    }
  }
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};
