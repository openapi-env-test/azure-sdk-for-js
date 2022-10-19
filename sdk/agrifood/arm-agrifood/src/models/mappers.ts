/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail"
        }
      }
    }
  }
};

export const ErrorDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo"
            }
          }
        }
      }
    }
  }
};

export const ErrorAdditionalInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ExtensionListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExtensionListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Extension"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FarmBeatsExtensionListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FarmBeatsExtensionListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FarmBeatsExtension"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DetailedInformation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DetailedInformation",
    modelProperties: {
      apiName: {
        serializedName: "apiName",
        type: {
          name: "String"
        }
      },
      customParameters: {
        serializedName: "customParameters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      platformParameters: {
        serializedName: "platformParameters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      unitsSupported: {
        serializedName: "unitsSupported",
        type: {
          name: "Composite",
          className: "UnitSystemsInfo"
        }
      },
      apiInputParameters: {
        serializedName: "apiInputParameters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const UnitSystemsInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UnitSystemsInfo",
    modelProperties: {
      key: {
        constraints: {
          MaxLength: 100,
          MinLength: 2
        },
        serializedName: "key",
        required: true,
        type: {
          name: "String"
        }
      },
      values: {
        serializedName: "values",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const FarmBeatsUpdateRequestModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FarmBeatsUpdateRequestModel",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const FarmBeatsListResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FarmBeatsListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FarmBeats"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameAvailabilityRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityRequest",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameAvailabilityResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CheckNameAvailabilityResponse",
    modelProperties: {
      nameAvailable: {
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      actionType: {
        serializedName: "actionType",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProxyResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties
    }
  }
};

export const TrackedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Extension: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Extension",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      eTag: {
        serializedName: "eTag",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      extensionId: {
        constraints: {
          Pattern: new RegExp("^[a-zA-Z]{3,50}[.][a-zA-Z]{3,100}$")
        },
        serializedName: "properties.extensionId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      extensionCategory: {
        serializedName: "properties.extensionCategory",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      installedExtensionVersion: {
        constraints: {
          Pattern: new RegExp("^([1-9]|10).\\d$")
        },
        serializedName: "properties.installedExtensionVersion",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      extensionAuthLink: {
        serializedName: "properties.extensionAuthLink",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      extensionApiDocsLink: {
        serializedName: "properties.extensionApiDocsLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FarmBeatsExtension: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FarmBeatsExtension",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      targetResourceType: {
        serializedName: "properties.targetResourceType",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      farmBeatsExtensionId: {
        constraints: {
          Pattern: new RegExp("^[a-zA-Z]{3,50}[.][a-zA-Z]{3,100}$"),
          MaxLength: 100,
          MinLength: 2
        },
        serializedName: "properties.farmBeatsExtensionId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      farmBeatsExtensionName: {
        constraints: {
          MaxLength: 100,
          MinLength: 2
        },
        serializedName: "properties.farmBeatsExtensionName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      farmBeatsExtensionVersion: {
        constraints: {
          Pattern: new RegExp("^([1-9]|10).\\d$"),
          MaxLength: 100,
          MinLength: 2
        },
        serializedName: "properties.farmBeatsExtensionVersion",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      publisherId: {
        constraints: {
          MaxLength: 100,
          MinLength: 2
        },
        serializedName: "properties.publisherId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      description: {
        constraints: {
          MaxLength: 500,
          MinLength: 2
        },
        serializedName: "properties.description",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      extensionCategory: {
        constraints: {
          MaxLength: 100,
          MinLength: 2
        },
        serializedName: "properties.extensionCategory",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      extensionAuthLink: {
        serializedName: "properties.extensionAuthLink",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      extensionApiDocsLink: {
        serializedName: "properties.extensionApiDocsLink",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      detailedInformation: {
        serializedName: "properties.detailedInformation",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DetailedInformation"
            }
          }
        }
      }
    }
  }
};

export const FarmBeats: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FarmBeats",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      instanceUri: {
        serializedName: "properties.instanceUri",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      provisioningStateSz: {
        serializedName: "properties.provisioningStateSz",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};
