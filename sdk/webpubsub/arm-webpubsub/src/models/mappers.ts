import * as coreClient from "@azure/core-client";

export const OperationList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationList",
    modelProperties: {
      value: {
        serializedName: "value",
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
        type: {
          name: "String"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
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
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "OperationProperties"
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
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationProperties",
    modelProperties: {
      serviceSpecification: {
        serializedName: "serviceSpecification",
        type: {
          name: "Composite",
          className: "ServiceSpecification"
        }
      }
    }
  }
};

export const ServiceSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServiceSpecification",
    modelProperties: {
      metricSpecifications: {
        serializedName: "metricSpecifications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetricSpecification"
            }
          }
        }
      },
      logSpecifications: {
        serializedName: "logSpecifications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LogSpecification"
            }
          }
        }
      }
    }
  }
};

export const MetricSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetricSpecification",
    modelProperties: {
      name: {
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
      displayDescription: {
        serializedName: "displayDescription",
        type: {
          name: "String"
        }
      },
      unit: {
        serializedName: "unit",
        type: {
          name: "String"
        }
      },
      aggregationType: {
        serializedName: "aggregationType",
        type: {
          name: "String"
        }
      },
      fillGapWithZero: {
        serializedName: "fillGapWithZero",
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
      dimensions: {
        serializedName: "dimensions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Dimension"
            }
          }
        }
      }
    }
  }
};

export const Dimension: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Dimension",
    modelProperties: {
      name: {
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
      internalName: {
        serializedName: "internalName",
        type: {
          name: "String"
        }
      },
      toBeExportedForShoebox: {
        serializedName: "toBeExportedForShoebox",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const LogSpecification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LogSpecification",
    modelProperties: {
      name: {
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

export const NameAvailabilityParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NameAvailabilityParameters",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NameAvailability: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NameAvailability",
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

export const SignalRServiceUsageList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SignalRServiceUsageList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SignalRServiceUsage"
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

export const SignalRServiceUsage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SignalRServiceUsage",
    modelProperties: {
      id: {
        serializedName: "id",
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
      name: {
        serializedName: "name",
        type: {
          name: "Composite",
          className: "SignalRServiceUsageName"
        }
      },
      unit: {
        serializedName: "unit",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SignalRServiceUsageName: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SignalRServiceUsageName",
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

export const WebPubSubResourceList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WebPubSubResourceList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "WebPubSubResource"
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

export const ResourceSku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceSku",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        type: {
          name: "String"
        }
      },
      size: {
        serializedName: "size",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      family: {
        serializedName: "family",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      capacity: {
        serializedName: "capacity",
        type: {
          name: "Number"
        }
      }
    }
  }
};

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

export const PrivateEndpoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpoint",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkServiceConnectionState: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkServiceConnectionState",
    modelProperties: {
      status: {
        serializedName: "status",
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
      actionsRequired: {
        serializedName: "actionsRequired",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WebPubSubTlsSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WebPubSubTlsSettings",
    modelProperties: {
      clientCertEnabled: {
        serializedName: "clientCertEnabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const DiagnosticConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DiagnosticConfiguration",
    modelProperties: {
      enableConnectivityLogs: {
        serializedName: "enableConnectivityLogs",
        type: {
          name: "String"
        }
      },
      enableMessagingLogs: {
        serializedName: "enableMessagingLogs",
        type: {
          name: "String"
        }
      },
      enableLiveTrace: {
        serializedName: "enableLiveTrace",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EventHandlerSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EventHandlerSettings",
    modelProperties: {
      items: {
        serializedName: "items",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Sequence",
              element: {
                type: { name: "Composite", className: "EventHandlerTemplate" }
              }
            }
          }
        }
      }
    }
  }
};

export const EventHandlerTemplate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EventHandlerTemplate",
    modelProperties: {
      urlTemplate: {
        serializedName: "urlTemplate",
        required: true,
        type: {
          name: "String"
        }
      },
      userEventPattern: {
        serializedName: "userEventPattern",
        type: {
          name: "String"
        }
      },
      systemEventPattern: {
        serializedName: "systemEventPattern",
        type: {
          name: "String"
        }
      },
      auth: {
        serializedName: "auth",
        type: {
          name: "Composite",
          className: "UpstreamAuthSettings"
        }
      }
    }
  }
};

export const UpstreamAuthSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UpstreamAuthSettings",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      managedIdentity: {
        serializedName: "managedIdentity",
        type: {
          name: "Composite",
          className: "ManagedIdentitySettings"
        }
      }
    }
  }
};

export const ManagedIdentitySettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedIdentitySettings",
    modelProperties: {
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WebPubSubNetworkACLs: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WebPubSubNetworkACLs",
    modelProperties: {
      defaultAction: {
        serializedName: "defaultAction",
        type: {
          name: "String"
        }
      },
      publicNetwork: {
        serializedName: "publicNetwork",
        type: {
          name: "Composite",
          className: "NetworkACL"
        }
      },
      privateEndpoints: {
        serializedName: "privateEndpoints",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointACL"
            }
          }
        }
      }
    }
  }
};

export const NetworkACL: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NetworkACL",
    modelProperties: {
      allow: {
        serializedName: "allow",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      deny: {
        serializedName: "deny",
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

export const ManagedIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedIdentity",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      userAssignedIdentities: {
        serializedName: "userAssignedIdentities",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className: "UserAssignedIdentityProperty"
            }
          }
        }
      },
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UserAssignedIdentityProperty: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserAssignedIdentityProperty",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      clientId: {
        serializedName: "clientId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WebPubSubKeys: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WebPubSubKeys",
    modelProperties: {
      primaryKey: {
        serializedName: "primaryKey",
        type: {
          name: "String"
        }
      },
      secondaryKey: {
        serializedName: "secondaryKey",
        type: {
          name: "String"
        }
      },
      primaryConnectionString: {
        serializedName: "primaryConnectionString",
        type: {
          name: "String"
        }
      },
      secondaryConnectionString: {
        serializedName: "secondaryConnectionString",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpointConnectionList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection"
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

export const PrivateLinkResourceList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResourceList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateLinkResource"
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

export const ShareablePrivateLinkResourceType: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ShareablePrivateLinkResourceType",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ShareablePrivateLinkResourceProperties"
        }
      }
    }
  }
};

export const ShareablePrivateLinkResourceProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ShareablePrivateLinkResourceProperties",
    modelProperties: {
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      groupId: {
        serializedName: "groupId",
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

export const RegenerateKeyParameters: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RegenerateKeyParameters",
    modelProperties: {
      keyType: {
        serializedName: "keyType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SharedPrivateLinkResourceList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SharedPrivateLinkResourceList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SharedPrivateLinkResource"
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

export const TrackedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
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

export const ProxyResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties
    }
  }
};

export const PrivateEndpointACL: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointACL",
    modelProperties: {
      ...NetworkACL.type.modelProperties,
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WebPubSubResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WebPubSubResource",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "ResourceSku"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ManagedIdentity"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      externalIP: {
        serializedName: "properties.externalIP",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      hostName: {
        serializedName: "properties.hostName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      publicPort: {
        serializedName: "properties.publicPort",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      serverPort: {
        serializedName: "properties.serverPort",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      version: {
        serializedName: "properties.version",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      privateEndpointConnections: {
        serializedName: "properties.privateEndpointConnections",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection"
            }
          }
        }
      },
      sharedPrivateLinkResources: {
        serializedName: "properties.sharedPrivateLinkResources",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SharedPrivateLinkResource"
            }
          }
        }
      },
      tls: {
        serializedName: "properties.tls",
        type: {
          name: "Composite",
          className: "WebPubSubTlsSettings"
        }
      },
      diagnosticConfiguration: {
        serializedName: "properties.diagnosticConfiguration",
        type: {
          name: "Composite",
          className: "DiagnosticConfiguration"
        }
      },
      eventHandler: {
        serializedName: "properties.eventHandler",
        type: {
          name: "Composite",
          className: "EventHandlerSettings"
        }
      },
      networkACLs: {
        serializedName: "properties.networkACLs",
        type: {
          name: "Composite",
          className: "WebPubSubNetworkACLs"
        }
      },
      publicNetworkAccess: {
        defaultValue: "Enabled",
        serializedName: "properties.publicNetworkAccess",
        type: {
          name: "String"
        }
      },
      disableLocalAuth: {
        serializedName: "properties.disableLocalAuth",
        type: {
          name: "Boolean"
        }
      },
      disableAadAuth: {
        serializedName: "properties.disableAadAuth",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const PrivateEndpointConnection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnection",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      privateEndpoint: {
        serializedName: "properties.privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpoint"
        }
      },
      privateLinkServiceConnectionState: {
        serializedName: "properties.privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkServiceConnectionState"
        }
      }
    }
  }
};

export const SharedPrivateLinkResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SharedPrivateLinkResource",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      groupId: {
        serializedName: "properties.groupId",
        type: {
          name: "String"
        }
      },
      privateLinkResourceId: {
        serializedName: "properties.privateLinkResourceId",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      requestMessage: {
        serializedName: "properties.requestMessage",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "properties.status",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResource",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      groupId: {
        serializedName: "properties.groupId",
        type: {
          name: "String"
        }
      },
      requiredMembers: {
        serializedName: "properties.requiredMembers",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      requiredZoneNames: {
        serializedName: "properties.requiredZoneNames",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      shareablePrivateLinkResourceTypes: {
        serializedName: "properties.shareablePrivateLinkResourceTypes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ShareablePrivateLinkResourceType"
            }
          }
        }
      }
    }
  }
};
