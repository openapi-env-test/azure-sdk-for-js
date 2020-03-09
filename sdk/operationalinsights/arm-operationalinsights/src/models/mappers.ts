/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "Operation_display",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      }
    }
  }
};

export const LinkedService: msRest.CompositeMapper = {
  serializedName: "LinkedService",
  type: {
    name: "Composite",
    className: "LinkedService",
    modelProperties: {
      resourceId: {
        required: true,
        serializedName: "properties.resourceId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataSource: msRest.CompositeMapper = {
  serializedName: "DataSource",
  type: {
    name: "Composite",
    className: "DataSource",
    modelProperties: {
      properties: {
        required: true,
        serializedName: "properties",
        type: {
          name: "Object"
        }
      },
      eTag: {
        serializedName: "eTag",
        type: {
          name: "String"
        }
      },
      kind: {
        required: true,
        serializedName: "kind",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataSourceFilter: msRest.CompositeMapper = {
  serializedName: "DataSourceFilter",
  type: {
    name: "Composite",
    className: "DataSourceFilter",
    modelProperties: {
      kind: {
        serializedName: "kind",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IntelligencePack: msRest.CompositeMapper = {
  serializedName: "IntelligencePack",
  type: {
    name: "Composite",
    className: "IntelligencePack",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      enabled: {
        serializedName: "enabled",
        type: {
          name: "Boolean"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SharedKeys: msRest.CompositeMapper = {
  serializedName: "SharedKeys",
  type: {
    name: "Composite",
    className: "SharedKeys",
    modelProperties: {
      primarySharedKey: {
        serializedName: "primarySharedKey",
        type: {
          name: "String"
        }
      },
      secondarySharedKey: {
        serializedName: "secondarySharedKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MetricName: msRest.CompositeMapper = {
  serializedName: "MetricName",
  type: {
    name: "Composite",
    className: "MetricName",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      localizedValue: {
        serializedName: "localizedValue",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UsageMetric: msRest.CompositeMapper = {
  serializedName: "UsageMetric",
  type: {
    name: "Composite",
    className: "UsageMetric",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "Composite",
          className: "MetricName"
        }
      },
      unit: {
        serializedName: "unit",
        type: {
          name: "String"
        }
      },
      currentValue: {
        serializedName: "currentValue",
        type: {
          name: "Number"
        }
      },
      limit: {
        serializedName: "limit",
        type: {
          name: "Number"
        }
      },
      nextResetTime: {
        serializedName: "nextResetTime",
        type: {
          name: "DateTime"
        }
      },
      quotaPeriod: {
        serializedName: "quotaPeriod",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManagementGroup: msRest.CompositeMapper = {
  serializedName: "ManagementGroup",
  type: {
    name: "Composite",
    className: "ManagementGroup",
    modelProperties: {
      serverCount: {
        serializedName: "properties.serverCount",
        type: {
          name: "Number"
        }
      },
      isGateway: {
        serializedName: "properties.isGateway",
        type: {
          name: "Boolean"
        }
      },
      name: {
        serializedName: "properties.name",
        type: {
          name: "String"
        }
      },
      id: {
        serializedName: "properties.id",
        type: {
          name: "String"
        }
      },
      created: {
        serializedName: "properties.created",
        type: {
          name: "DateTime"
        }
      },
      dataReceived: {
        serializedName: "properties.dataReceived",
        type: {
          name: "DateTime"
        }
      },
      version: {
        serializedName: "properties.version",
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "properties.sku",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Sku: msRest.CompositeMapper = {
  serializedName: "Sku",
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Workspace: msRest.CompositeMapper = {
  serializedName: "Workspace",
  type: {
    name: "Composite",
    className: "Workspace",
    modelProperties: {
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      source: {
        readOnly: true,
        serializedName: "properties.source",
        type: {
          name: "String"
        }
      },
      customerId: {
        readOnly: true,
        serializedName: "properties.customerId",
        type: {
          name: "String"
        }
      },
      portalUrl: {
        readOnly: true,
        serializedName: "properties.portalUrl",
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "properties.sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      retentionInDays: {
        serializedName: "properties.retentionInDays",
        constraints: {
          InclusiveMaximum: 730,
          InclusiveMinimum: -1
        },
        type: {
          name: "Number"
        }
      },
      eTag: {
        serializedName: "eTag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
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
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ProxyResource: msRest.CompositeMapper = {
  serializedName: "ProxyResource",
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        serializedName: "code",
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

export const OperationStatus: msRest.CompositeMapper = {
  serializedName: "OperationStatus",
  type: {
    name: "Composite",
    className: "OperationStatus",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "startTime",
        type: {
          name: "String"
        }
      },
      endTime: {
        serializedName: "endTime",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponse"
        }
      }
    }
  }
};

export const LinkedServiceListResult: msRest.CompositeMapper = {
  serializedName: "LinkedServiceListResult",
  type: {
    name: "Composite",
    className: "LinkedServiceListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LinkedService"
            }
          }
        }
      }
    }
  }
};

export const DataSourceListResult: msRest.CompositeMapper = {
  serializedName: "DataSourceListResult",
  type: {
    name: "Composite",
    className: "DataSourceListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataSource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WorkspaceListUsagesResult: msRest.CompositeMapper = {
  serializedName: "WorkspaceListUsagesResult",
  type: {
    name: "Composite",
    className: "WorkspaceListUsagesResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "UsageMetric"
            }
          }
        }
      }
    }
  }
};

export const WorkspaceListManagementGroupsResult: msRest.CompositeMapper = {
  serializedName: "WorkspaceListManagementGroupsResult",
  type: {
    name: "Composite",
    className: "WorkspaceListManagementGroupsResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ManagementGroup"
            }
          }
        }
      }
    }
  }
};

export const WorkspaceListResult: msRest.CompositeMapper = {
  serializedName: "WorkspaceListResult",
  type: {
    name: "Composite",
    className: "WorkspaceListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Workspace"
            }
          }
        }
      }
    }
  }
};

export const OperationListResult: msRest.CompositeMapper = {
  serializedName: "OperationListResult",
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "",
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
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};
