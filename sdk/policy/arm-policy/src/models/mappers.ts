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

export const ErrorAdditionalInfo: msRest.CompositeMapper = {
  serializedName: "ErrorAdditionalInfo",
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      info: {
        readOnly: true,
        serializedName: "info",
        type: {
          name: "Object"
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
        readOnly: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      target: {
        readOnly: true,
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      details: {
        readOnly: true,
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorResponse"
            }
          }
        }
      },
      additionalInfo: {
        readOnly: true,
        serializedName: "additionalInfo",
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

export const ParameterValuesValue: msRest.CompositeMapper = {
  serializedName: "ParameterValuesValue",
  type: {
    name: "Composite",
    className: "ParameterValuesValue",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const PolicySku: msRest.CompositeMapper = {
  serializedName: "PolicySku",
  type: {
    name: "Composite",
    className: "PolicySku",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Identity: msRest.CompositeMapper = {
  serializedName: "Identity",
  type: {
    name: "Composite",
    className: "Identity",
    modelProperties: {
      principalId: {
        readOnly: true,
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      tenantId: {
        readOnly: true,
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "SystemAssigned",
            "None"
          ]
        }
      }
    }
  }
};

export const PolicyAssignment: msRest.CompositeMapper = {
  serializedName: "PolicyAssignment",
  type: {
    name: "Composite",
    className: "PolicyAssignment",
    modelProperties: {
      displayName: {
        serializedName: "properties.displayName",
        type: {
          name: "String"
        }
      },
      policyDefinitionId: {
        serializedName: "properties.policyDefinitionId",
        type: {
          name: "String"
        }
      },
      scope: {
        serializedName: "properties.scope",
        type: {
          name: "String"
        }
      },
      notScopes: {
        serializedName: "properties.notScopes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      parameters: {
        serializedName: "properties.parameters",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className: "ParameterValuesValue"
            }
          }
        }
      },
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      metadata: {
        serializedName: "properties.metadata",
        type: {
          name: "Object"
        }
      },
      enforcementMode: {
        serializedName: "properties.enforcementMode",
        type: {
          name: "String"
        }
      },
      id: {
        readOnly: true,
        serializedName: "id",
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
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "PolicySku"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "Identity"
        }
      }
    }
  }
};

export const ParameterDefinitionsValueMetadata: msRest.CompositeMapper = {
  serializedName: "ParameterDefinitionsValue_metadata",
  type: {
    name: "Composite",
    className: "ParameterDefinitionsValueMetadata",
    modelProperties: {
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    },
    additionalProperties: {
      type: {
        name: "Object"
      }
    }
  }
};

export const ParameterDefinitionsValue: msRest.CompositeMapper = {
  serializedName: "ParameterDefinitionsValue",
  type: {
    name: "Composite",
    className: "ParameterDefinitionsValue",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      allowedValues: {
        serializedName: "allowedValues",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Object"
            }
          }
        }
      },
      defaultValue: {
        serializedName: "defaultValue",
        type: {
          name: "Object"
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Composite",
          className: "ParameterDefinitionsValueMetadata",
          additionalProperties: {
            type: {
              name: "Object"
            }
          }
        }
      }
    }
  }
};

export const PolicyDefinition: msRest.CompositeMapper = {
  serializedName: "PolicyDefinition",
  type: {
    name: "Composite",
    className: "PolicyDefinition",
    modelProperties: {
      policyType: {
        serializedName: "properties.policyType",
        type: {
          name: "String"
        }
      },
      mode: {
        serializedName: "properties.mode",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "properties.displayName",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      policyRule: {
        serializedName: "properties.policyRule",
        type: {
          name: "Object"
        }
      },
      metadata: {
        serializedName: "properties.metadata",
        type: {
          name: "Object"
        }
      },
      parameters: {
        serializedName: "properties.parameters",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className: "ParameterDefinitionsValue"
            }
          }
        }
      },
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
      }
    }
  }
};

export const PolicyDefinitionReference: msRest.CompositeMapper = {
  serializedName: "PolicyDefinitionReference",
  type: {
    name: "Composite",
    className: "PolicyDefinitionReference",
    modelProperties: {
      policyDefinitionId: {
        required: true,
        serializedName: "policyDefinitionId",
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className: "ParameterValuesValue"
            }
          }
        }
      },
      policyDefinitionReferenceId: {
        serializedName: "policyDefinitionReferenceId",
        type: {
          name: "String"
        }
      },
      groupNames: {
        serializedName: "groupNames",
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

export const PolicyDefinitionGroup: msRest.CompositeMapper = {
  serializedName: "PolicyDefinitionGroup",
  type: {
    name: "Composite",
    className: "PolicyDefinitionGroup",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      category: {
        serializedName: "category",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      additionalMetadataId: {
        serializedName: "additionalMetadataId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PolicySetDefinition: msRest.CompositeMapper = {
  serializedName: "PolicySetDefinition",
  type: {
    name: "Composite",
    className: "PolicySetDefinition",
    modelProperties: {
      policyType: {
        serializedName: "properties.policyType",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "properties.displayName",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      metadata: {
        serializedName: "properties.metadata",
        type: {
          name: "Object"
        }
      },
      parameters: {
        serializedName: "properties.parameters",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className: "ParameterDefinitionsValue"
            }
          }
        }
      },
      policyDefinitions: {
        required: true,
        serializedName: "properties.policyDefinitions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PolicyDefinitionReference"
            }
          }
        }
      },
      policyDefinitionGroups: {
        serializedName: "properties.policyDefinitionGroups",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PolicyDefinitionGroup"
            }
          }
        }
      },
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
      }
    }
  }
};

export const PolicyAssignmentListResult: msRest.CompositeMapper = {
  serializedName: "PolicyAssignmentListResult",
  type: {
    name: "Composite",
    className: "PolicyAssignmentListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PolicyAssignment"
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

export const PolicyDefinitionListResult: msRest.CompositeMapper = {
  serializedName: "PolicyDefinitionListResult",
  type: {
    name: "Composite",
    className: "PolicyDefinitionListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PolicyDefinition"
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

export const PolicySetDefinitionListResult: msRest.CompositeMapper = {
  serializedName: "PolicySetDefinitionListResult",
  type: {
    name: "Composite",
    className: "PolicySetDefinitionListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PolicySetDefinition"
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
