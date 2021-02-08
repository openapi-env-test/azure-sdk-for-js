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
export const administratorName: msRest.OperationURLParameter = {
  parameterPath: "administratorName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "administratorName",
    defaultValue: 'activeDirectory',
    type: {
      name: "String"
    }
  }
};
export const advisorName: msRest.OperationURLParameter = {
  parameterPath: "advisorName",
  mapper: {
    required: true,
    serializedName: "advisorName",
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
export const communicationLinkName: msRest.OperationURLParameter = {
  parameterPath: "communicationLinkName",
  mapper: {
    required: true,
    serializedName: "communicationLinkName",
    type: {
      name: "String"
    }
  }
};
export const connectionPolicyName: msRest.OperationURLParameter = {
  parameterPath: "connectionPolicyName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "connectionPolicyName",
    defaultValue: 'default',
    type: {
      name: "String"
    }
  }
};
export const databaseName: msRest.OperationURLParameter = {
  parameterPath: "databaseName",
  mapper: {
    required: true,
    serializedName: "databaseName",
    type: {
      name: "String"
    }
  }
};
export const dataMaskingPolicyName: msRest.OperationURLParameter = {
  parameterPath: "dataMaskingPolicyName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "dataMaskingPolicyName",
    defaultValue: 'Default',
    type: {
      name: "String"
    }
  }
};
export const dataMaskingRuleName: msRest.OperationURLParameter = {
  parameterPath: "dataMaskingRuleName",
  mapper: {
    required: true,
    serializedName: "dataMaskingRuleName",
    type: {
      name: "String"
    }
  }
};
export const disasterRecoveryConfigurationName: msRest.OperationURLParameter = {
  parameterPath: "disasterRecoveryConfigurationName",
  mapper: {
    required: true,
    serializedName: "disasterRecoveryConfigurationName",
    type: {
      name: "String"
    }
  }
};
export const elasticPoolName: msRest.OperationURLParameter = {
  parameterPath: "elasticPoolName",
  mapper: {
    required: true,
    serializedName: "elasticPoolName",
    type: {
      name: "String"
    }
  }
};
export const expand: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "expand"
  ],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};
export const extensionName: msRest.OperationURLParameter = {
  parameterPath: "extensionName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "extensionName",
    defaultValue: 'import',
    type: {
      name: "String"
    }
  }
};
export const filter0: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "filter"
  ],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};
export const filter1: msRest.OperationQueryParameter = {
  parameterPath: "filter",
  mapper: {
    required: true,
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};
export const firewallRuleName: msRest.OperationURLParameter = {
  parameterPath: "firewallRuleName",
  mapper: {
    required: true,
    serializedName: "firewallRuleName",
    type: {
      name: "String"
    }
  }
};
export const geoBackupPolicyName: msRest.OperationURLParameter = {
  parameterPath: "geoBackupPolicyName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "geoBackupPolicyName",
    defaultValue: 'Default',
    type: {
      name: "String"
    }
  }
};
export const linkId: msRest.OperationURLParameter = {
  parameterPath: "linkId",
  mapper: {
    required: true,
    serializedName: "linkId",
    type: {
      name: "String"
    }
  }
};
export const locationId: msRest.OperationURLParameter = {
  parameterPath: "locationId",
  mapper: {
    required: true,
    serializedName: "locationId",
    type: {
      name: "String"
    }
  }
};
export const queryId: msRest.OperationURLParameter = {
  parameterPath: "queryId",
  mapper: {
    required: true,
    serializedName: "queryId",
    type: {
      name: "String"
    }
  }
};
export const recommendedElasticPoolName: msRest.OperationURLParameter = {
  parameterPath: "recommendedElasticPoolName",
  mapper: {
    required: true,
    serializedName: "recommendedElasticPoolName",
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
export const restorableDroppededDatabaseId: msRest.OperationURLParameter = {
  parameterPath: "restorableDroppededDatabaseId",
  mapper: {
    required: true,
    serializedName: "restorableDroppededDatabaseId",
    type: {
      name: "String"
    }
  }
};
export const securityAlertPolicyName: msRest.OperationURLParameter = {
  parameterPath: "securityAlertPolicyName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "securityAlertPolicyName",
    defaultValue: 'default',
    type: {
      name: "String"
    }
  }
};
export const serverName: msRest.OperationURLParameter = {
  parameterPath: "serverName",
  mapper: {
    required: true,
    serializedName: "serverName",
    type: {
      name: "String"
    }
  }
};
export const serviceObjectiveName: msRest.OperationURLParameter = {
  parameterPath: "serviceObjectiveName",
  mapper: {
    required: true,
    serializedName: "serviceObjectiveName",
    type: {
      name: "String"
    }
  }
};
export const serviceTierAdvisorName: msRest.OperationURLParameter = {
  parameterPath: "serviceTierAdvisorName",
  mapper: {
    required: true,
    serializedName: "serviceTierAdvisorName",
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
export const tableAuditingPolicyName: msRest.OperationURLParameter = {
  parameterPath: "tableAuditingPolicyName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "tableAuditingPolicyName",
    defaultValue: 'default',
    type: {
      name: "String"
    }
  }
};
export const transparentDataEncryptionName: msRest.OperationURLParameter = {
  parameterPath: "transparentDataEncryptionName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "transparentDataEncryptionName",
    defaultValue: 'current',
    type: {
      name: "String"
    }
  }
};
