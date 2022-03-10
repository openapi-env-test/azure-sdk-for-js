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
  StorageAccountCheckNameAvailabilityParameters as StorageAccountCheckNameAvailabilityParametersMapper,
  StorageAccountCreateParameters as StorageAccountCreateParametersMapper,
  StorageAccountUpdateParameters as StorageAccountUpdateParametersMapper,
  StorageAccountRegenerateKeyParameters as StorageAccountRegenerateKeyParametersMapper,
  AccountSasParameters as AccountSasParametersMapper,
  ServiceSasParameters as ServiceSasParametersMapper,
  BlobRestoreParameters as BlobRestoreParametersMapper,
  ManagementPolicy as ManagementPolicyMapper,
  BlobInventoryPolicy as BlobInventoryPolicyMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
  ObjectReplicationPolicy as ObjectReplicationPolicyMapper,
  EncryptionScope as EncryptionScopeMapper
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
    defaultValue: "2019-06-01",
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
    constraints: {
      MinLength: 1
    },
    serializedName: "subscriptionId",
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

export const accountName: OperationParameter = {
  parameterPath: "accountName",
  mapper: StorageAccountCheckNameAvailabilityParametersMapper
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: StorageAccountCreateParametersMapper
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const accountName1: OperationURLParameter = {
  parameterPath: "accountName",
  mapper: {
    constraints: {
      MaxLength: 24,
      MinLength: 3
    },
    serializedName: "accountName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const expand: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "Enum",
      allowedValues: ["geoReplicationStats", "blobRestoreStatus"]
    }
  }
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: StorageAccountUpdateParametersMapper
};

export const expand1: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    defaultValue: "kerb",
    isConstant: true,
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const regenerateKey: OperationParameter = {
  parameterPath: "regenerateKey",
  mapper: StorageAccountRegenerateKeyParametersMapper
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: AccountSasParametersMapper
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: ServiceSasParametersMapper
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: BlobRestoreParametersMapper
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

export const location: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    serializedName: "location",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const managementPolicyName: OperationURLParameter = {
  parameterPath: "managementPolicyName",
  mapper: {
    serializedName: "managementPolicyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const properties: OperationParameter = {
  parameterPath: "properties",
  mapper: ManagementPolicyMapper
};

export const blobInventoryPolicyName: OperationURLParameter = {
  parameterPath: "blobInventoryPolicyName",
  mapper: {
    serializedName: "blobInventoryPolicyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const properties1: OperationParameter = {
  parameterPath: "properties",
  mapper: BlobInventoryPolicyMapper
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const properties2: OperationParameter = {
  parameterPath: "properties",
  mapper: PrivateEndpointConnectionMapper
};

export const objectReplicationPolicyId: OperationURLParameter = {
  parameterPath: "objectReplicationPolicyId",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "objectReplicationPolicyId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const properties3: OperationParameter = {
  parameterPath: "properties",
  mapper: ObjectReplicationPolicyMapper
};

export const encryptionScope: OperationParameter = {
  parameterPath: "encryptionScope",
  mapper: EncryptionScopeMapper
};

export const encryptionScopeName: OperationURLParameter = {
  parameterPath: "encryptionScopeName",
  mapper: {
    constraints: {
      MaxLength: 63,
      MinLength: 3
    },
    serializedName: "encryptionScopeName",
    required: true,
    type: {
      name: "String"
    }
  }
};
