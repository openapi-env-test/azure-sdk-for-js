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
  CheckNameAvailabilityRequest as CheckNameAvailabilityRequestMapper,
  DataConnector as DataConnectorMapper,
  DataManagerForAgriculture as DataManagerForAgricultureMapper,
  DataManagerForAgricultureUpdateRequestModel as DataManagerForAgricultureUpdateRequestModelMapper,
  ExtensionInstallationRequest as ExtensionInstallationRequestMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
  Solution as SolutionMapper
} from "../models/mappers";

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

export const nameAvailabilityRequest: OperationParameter = {
  parameterPath: "nameAvailabilityRequest",
  mapper: CheckNameAvailabilityRequestMapper
};

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

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "Uuid"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2023-06-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
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

export const dataManagerForAgricultureResourceName: OperationURLParameter = {
  parameterPath: "dataManagerForAgricultureResourceName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9]+(-[A-Za-z0-9]+)*$"),
      MaxLength: 63,
      MinLength: 1
    },
    serializedName: "dataManagerForAgricultureResourceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const dataConnectorName: OperationURLParameter = {
  parameterPath: "dataConnectorName",
  mapper: {
    constraints: {
      MaxLength: 63,
      MinLength: 1
    },
    serializedName: "dataConnectorName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: DataConnectorMapper
};

export const maxPageSize: OperationQueryParameter = {
  parameterPath: ["options", "maxPageSize"],
  mapper: {
    defaultValue: 50,
    constraints: {
      InclusiveMaximum: 1000,
      InclusiveMinimum: 10
    },
    serializedName: "$maxPageSize",
    type: {
      name: "Number"
    }
  }
};

export const skipToken: OperationQueryParameter = {
  parameterPath: ["options", "skipToken"],
  mapper: {
    serializedName: "$skipToken",
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

export const farmBeatsExtensionIds: OperationQueryParameter = {
  parameterPath: ["options", "farmBeatsExtensionIds"],
  mapper: {
    serializedName: "farmBeatsExtensionIds",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const farmBeatsExtensionNames: OperationQueryParameter = {
  parameterPath: ["options", "farmBeatsExtensionNames"],
  mapper: {
    serializedName: "farmBeatsExtensionNames",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const extensionCategories: OperationQueryParameter = {
  parameterPath: ["options", "extensionCategories"],
  mapper: {
    serializedName: "extensionCategories",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const publisherIds: OperationQueryParameter = {
  parameterPath: ["options", "publisherIds"],
  mapper: {
    serializedName: "publisherIds",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const dataManagerForAgricultureExtensionId: OperationURLParameter = {
  parameterPath: "dataManagerForAgricultureExtensionId",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z]{3,50}[.][a-zA-Z]{3,100}$")
    },
    serializedName: "dataManagerForAgricultureExtensionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const request: OperationParameter = {
  parameterPath: "request",
  mapper: DataManagerForAgricultureMapper
};

export const request1: OperationParameter = {
  parameterPath: "request",
  mapper: DataManagerForAgricultureUpdateRequestModelMapper
};

export const locations: OperationURLParameter = {
  parameterPath: "locations",
  mapper: {
    serializedName: "locations",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const operationResultsId: OperationURLParameter = {
  parameterPath: "operationResultsId",
  mapper: {
    serializedName: "operationResultsId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const requestBody: OperationParameter = {
  parameterPath: ["options", "requestBody"],
  mapper: ExtensionInstallationRequestMapper
};

export const extensionId: OperationURLParameter = {
  parameterPath: "extensionId",
  mapper: {
    serializedName: "extensionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const extensionIds: OperationQueryParameter = {
  parameterPath: ["options", "extensionIds"],
  mapper: {
    serializedName: "extensionIds",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const request2: OperationParameter = {
  parameterPath: "request",
  mapper: PrivateEndpointConnectionMapper
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

export const subResourceName: OperationURLParameter = {
  parameterPath: "subResourceName",
  mapper: {
    serializedName: "subResourceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const requestBody1: OperationParameter = {
  parameterPath: ["options", "requestBody"],
  mapper: SolutionMapper
};

export const solutionId: OperationURLParameter = {
  parameterPath: "solutionId",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z]{3,50}[.][a-zA-Z]{3,100}$")
    },
    serializedName: "solutionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const solutionIds: OperationQueryParameter = {
  parameterPath: ["options", "solutionIds"],
  mapper: {
    serializedName: "solutionIds",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const ids: OperationQueryParameter = {
  parameterPath: ["options", "ids"],
  mapper: {
    serializedName: "ids",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const names: OperationQueryParameter = {
  parameterPath: ["options", "names"],
  mapper: {
    serializedName: "names",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const propertyFilters: OperationQueryParameter = {
  parameterPath: ["options", "propertyFilters"],
  mapper: {
    serializedName: "propertyFilters",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const statuses: OperationQueryParameter = {
  parameterPath: ["options", "statuses"],
  mapper: {
    serializedName: "statuses",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const minCreatedDateTime: OperationQueryParameter = {
  parameterPath: ["options", "minCreatedDateTime"],
  mapper: {
    serializedName: "minCreatedDateTime",
    type: {
      name: "DateTime"
    }
  }
};

export const maxCreatedDateTime: OperationQueryParameter = {
  parameterPath: ["options", "maxCreatedDateTime"],
  mapper: {
    serializedName: "maxCreatedDateTime",
    type: {
      name: "DateTime"
    }
  }
};

export const minLastModifiedDateTime: OperationQueryParameter = {
  parameterPath: ["options", "minLastModifiedDateTime"],
  mapper: {
    serializedName: "minLastModifiedDateTime",
    type: {
      name: "DateTime"
    }
  }
};

export const maxLastModifiedDateTime: OperationQueryParameter = {
  parameterPath: ["options", "maxLastModifiedDateTime"],
  mapper: {
    serializedName: "maxLastModifiedDateTime",
    type: {
      name: "DateTime"
    }
  }
};

export const farmBeatsSolutionIds: OperationQueryParameter = {
  parameterPath: ["options", "farmBeatsSolutionIds"],
  mapper: {
    serializedName: "farmBeatsSolutionIds",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const farmBeatsSolutionNames: OperationQueryParameter = {
  parameterPath: ["options", "farmBeatsSolutionNames"],
  mapper: {
    serializedName: "farmBeatsSolutionNames",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const dataManagerForAgricultureSolutionId: OperationURLParameter = {
  parameterPath: "dataManagerForAgricultureSolutionId",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z]{3,50}[.][a-zA-Z]{3,100}$")
    },
    serializedName: "dataManagerForAgricultureSolutionId",
    required: true,
    type: {
      name: "String"
    }
  }
};
