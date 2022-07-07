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
  Capability as CapabilityMapper,
  Experiment as ExperimentMapper,
  Target as TargetMapper
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
    defaultValue: "2021-09-15-preview",
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
      Pattern: new RegExp(
        "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"
      )
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9_\\-\\.\\(\\)]*[a-zA-Z0-9_\\-\\(\\)]$")
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parentProviderNamespace: OperationURLParameter = {
  parameterPath: "parentProviderNamespace",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9]+\\.[a-zA-Z0-9]+$")
    },
    serializedName: "parentProviderNamespace",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parentResourceType: OperationURLParameter = {
  parameterPath: "parentResourceType",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9_\\-\\.]+$")
    },
    serializedName: "parentResourceType",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parentResourceName: OperationURLParameter = {
  parameterPath: "parentResourceName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9_\\-\\.]+$")
    },
    serializedName: "parentResourceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const targetName: OperationURLParameter = {
  parameterPath: "targetName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9_\\-\\.]+$")
    },
    serializedName: "targetName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const continuationToken: OperationQueryParameter = {
  parameterPath: ["options", "continuationToken"],
  mapper: {
    serializedName: "continuationToken",
    type: {
      name: "String"
    }
  }
};

export const capabilityName: OperationURLParameter = {
  parameterPath: "capabilityName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9\\-\\.]+-\\d\\.\\d$")
    },
    serializedName: "capabilityName",
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

export const capability: OperationParameter = {
  parameterPath: "capability",
  mapper: CapabilityMapper
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

export const running: OperationQueryParameter = {
  parameterPath: ["options", "running"],
  mapper: {
    serializedName: "running",
    type: {
      name: "Boolean"
    }
  }
};

export const experimentName: OperationURLParameter = {
  parameterPath: "experimentName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[^<>%&:?#/\\\\]+$"),
      MinLength: 1
    },
    serializedName: "experimentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const experiment: OperationParameter = {
  parameterPath: "experiment",
  mapper: ExperimentMapper
};

export const statusId: OperationURLParameter = {
  parameterPath: "statusId",
  mapper: {
    constraints: {
      Pattern: new RegExp(
        "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"
      )
    },
    serializedName: "statusId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const executionDetailsId: OperationURLParameter = {
  parameterPath: "executionDetailsId",
  mapper: {
    constraints: {
      Pattern: new RegExp(
        "^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$"
      )
    },
    serializedName: "executionDetailsId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const target: OperationParameter = {
  parameterPath: "target",
  mapper: TargetMapper
};

export const locationName: OperationURLParameter = {
  parameterPath: "locationName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9_\\-\\.]+$")
    },
    serializedName: "locationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const targetTypeName: OperationURLParameter = {
  parameterPath: "targetTypeName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9_\\-\\.]+$")
    },
    serializedName: "targetTypeName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const capabilityTypeName: OperationURLParameter = {
  parameterPath: "capabilityTypeName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9\\-\\.]+-\\d\\.\\d$")
    },
    serializedName: "capabilityTypeName",
    required: true,
    type: {
      name: "String"
    }
  }
};
