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

export const PrivateEndpointProperty: msRest.CompositeMapper = {
  serializedName: "PrivateEndpointProperty",
  type: {
    name: "Composite",
    className: "PrivateEndpointProperty",
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

export const ServerPrivateLinkServiceConnectionStateProperty: msRest.CompositeMapper = {
  serializedName: "ServerPrivateLinkServiceConnectionStateProperty",
  type: {
    name: "Composite",
    className: "ServerPrivateLinkServiceConnectionStateProperty",
    modelProperties: {
      status: {
        required: true,
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      description: {
        required: true,
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      actionsRequired: {
        readOnly: true,
        serializedName: "actionsRequired",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServerPrivateEndpointConnectionProperties: msRest.CompositeMapper = {
  serializedName: "ServerPrivateEndpointConnectionProperties",
  type: {
    name: "Composite",
    className: "ServerPrivateEndpointConnectionProperties",
    modelProperties: {
      privateEndpoint: {
        serializedName: "privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpointProperty"
        }
      },
      privateLinkServiceConnectionState: {
        serializedName: "privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "ServerPrivateLinkServiceConnectionStateProperty"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServerPrivateEndpointConnection: msRest.CompositeMapper = {
  serializedName: "ServerPrivateEndpointConnection",
  type: {
    name: "Composite",
    className: "ServerPrivateEndpointConnection",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      properties: {
        readOnly: true,
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ServerPrivateEndpointConnectionProperties"
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
      }
    }
  }
};

export const TrackedResource: msRest.CompositeMapper = {
  serializedName: "TrackedResource",
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
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
      },
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const StorageProfile: msRest.CompositeMapper = {
  serializedName: "StorageProfile",
  type: {
    name: "Composite",
    className: "StorageProfile",
    modelProperties: {
      backupRetentionDays: {
        serializedName: "backupRetentionDays",
        type: {
          name: "Number"
        }
      },
      geoRedundantBackup: {
        serializedName: "geoRedundantBackup",
        type: {
          name: "String"
        }
      },
      storageMB: {
        serializedName: "storageMB",
        type: {
          name: "Number"
        }
      },
      storageAutogrow: {
        serializedName: "storageAutogrow",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServerPropertiesForCreate: msRest.CompositeMapper = {
  serializedName: "ServerPropertiesForCreate",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "createMode",
      clientName: "createMode"
    },
    uberParent: "ServerPropertiesForCreate",
    className: "ServerPropertiesForCreate",
    modelProperties: {
      version: {
        serializedName: "version",
        type: {
          name: "String"
        }
      },
      sslEnforcement: {
        serializedName: "sslEnforcement",
        type: {
          name: "Enum",
          allowedValues: [
            "Enabled",
            "Disabled"
          ]
        }
      },
      minimalTlsVersion: {
        serializedName: "minimalTlsVersion",
        type: {
          name: "String"
        }
      },
      infrastructureEncryption: {
        serializedName: "infrastructureEncryption",
        type: {
          name: "String"
        }
      },
      publicNetworkAccess: {
        serializedName: "publicNetworkAccess",
        type: {
          name: "String"
        }
      },
      storageProfile: {
        serializedName: "storageProfile",
        type: {
          name: "Composite",
          className: "StorageProfile"
        }
      },
      createMode: {
        required: true,
        serializedName: "createMode",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServerPropertiesForDefaultCreate: msRest.CompositeMapper = {
  serializedName: "Default",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ServerPropertiesForCreate.type.polymorphicDiscriminator,
    uberParent: "ServerPropertiesForCreate",
    className: "ServerPropertiesForDefaultCreate",
    modelProperties: {
      ...ServerPropertiesForCreate.type.modelProperties,
      administratorLogin: {
        required: true,
        serializedName: "administratorLogin",
        type: {
          name: "String"
        }
      },
      administratorLoginPassword: {
        required: true,
        serializedName: "administratorLoginPassword",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServerPropertiesForRestore: msRest.CompositeMapper = {
  serializedName: "PointInTimeRestore",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ServerPropertiesForCreate.type.polymorphicDiscriminator,
    uberParent: "ServerPropertiesForCreate",
    className: "ServerPropertiesForRestore",
    modelProperties: {
      ...ServerPropertiesForCreate.type.modelProperties,
      sourceServerId: {
        required: true,
        serializedName: "sourceServerId",
        type: {
          name: "String"
        }
      },
      restorePointInTime: {
        required: true,
        serializedName: "restorePointInTime",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ServerPropertiesForGeoRestore: msRest.CompositeMapper = {
  serializedName: "GeoRestore",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ServerPropertiesForCreate.type.polymorphicDiscriminator,
    uberParent: "ServerPropertiesForCreate",
    className: "ServerPropertiesForGeoRestore",
    modelProperties: {
      ...ServerPropertiesForCreate.type.modelProperties,
      sourceServerId: {
        required: true,
        serializedName: "sourceServerId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServerPropertiesForReplica: msRest.CompositeMapper = {
  serializedName: "Replica",
  type: {
    name: "Composite",
    polymorphicDiscriminator: ServerPropertiesForCreate.type.polymorphicDiscriminator,
    uberParent: "ServerPropertiesForCreate",
    className: "ServerPropertiesForReplica",
    modelProperties: {
      ...ServerPropertiesForCreate.type.modelProperties,
      sourceServerId: {
        required: true,
        serializedName: "sourceServerId",
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
      },
      capacity: {
        serializedName: "capacity",
        constraints: {
          InclusiveMinimum: 0
        },
        type: {
          name: "Number"
        }
      },
      size: {
        serializedName: "size",
        type: {
          name: "String"
        }
      },
      family: {
        serializedName: "family",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceIdentity: msRest.CompositeMapper = {
  serializedName: "ResourceIdentity",
  type: {
    name: "Composite",
    className: "ResourceIdentity",
    modelProperties: {
      principalId: {
        readOnly: true,
        serializedName: "principalId",
        type: {
          name: "Uuid"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      tenantId: {
        readOnly: true,
        serializedName: "tenantId",
        type: {
          name: "Uuid"
        }
      }
    }
  }
};

export const Server: msRest.CompositeMapper = {
  serializedName: "Server",
  type: {
    name: "Composite",
    className: "Server",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ResourceIdentity"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      administratorLogin: {
        serializedName: "properties.administratorLogin",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "properties.version",
        type: {
          name: "String"
        }
      },
      sslEnforcement: {
        serializedName: "properties.sslEnforcement",
        type: {
          name: "Enum",
          allowedValues: [
            "Enabled",
            "Disabled"
          ]
        }
      },
      minimalTlsVersion: {
        serializedName: "properties.minimalTlsVersion",
        type: {
          name: "String"
        }
      },
      byokEnforcement: {
        readOnly: true,
        serializedName: "properties.byokEnforcement",
        type: {
          name: "String"
        }
      },
      infrastructureEncryption: {
        serializedName: "properties.infrastructureEncryption",
        type: {
          name: "String"
        }
      },
      userVisibleState: {
        serializedName: "properties.userVisibleState",
        type: {
          name: "String"
        }
      },
      fullyQualifiedDomainName: {
        serializedName: "properties.fullyQualifiedDomainName",
        type: {
          name: "String"
        }
      },
      earliestRestoreDate: {
        serializedName: "properties.earliestRestoreDate",
        type: {
          name: "DateTime"
        }
      },
      storageProfile: {
        serializedName: "properties.storageProfile",
        type: {
          name: "Composite",
          className: "StorageProfile"
        }
      },
      replicationRole: {
        serializedName: "properties.replicationRole",
        type: {
          name: "String"
        }
      },
      masterServerId: {
        serializedName: "properties.masterServerId",
        type: {
          name: "String"
        }
      },
      replicaCapacity: {
        serializedName: "properties.replicaCapacity",
        constraints: {
          InclusiveMinimum: 0
        },
        type: {
          name: "Number"
        }
      },
      publicNetworkAccess: {
        serializedName: "properties.publicNetworkAccess",
        type: {
          name: "String"
        }
      },
      privateEndpointConnections: {
        readOnly: true,
        serializedName: "properties.privateEndpointConnections",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ServerPrivateEndpointConnection"
            }
          }
        }
      }
    }
  }
};

export const ServerForCreate: msRest.CompositeMapper = {
  serializedName: "ServerForCreate",
  type: {
    name: "Composite",
    className: "ServerForCreate",
    modelProperties: {
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ResourceIdentity"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      properties: {
        required: true,
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ServerPropertiesForCreate"
        }
      },
      location: {
        required: true,
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

export const ServerUpdateParameters: msRest.CompositeMapper = {
  serializedName: "ServerUpdateParameters",
  type: {
    name: "Composite",
    className: "ServerUpdateParameters",
    modelProperties: {
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ResourceIdentity"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      storageProfile: {
        serializedName: "properties.storageProfile",
        type: {
          name: "Composite",
          className: "StorageProfile"
        }
      },
      administratorLoginPassword: {
        serializedName: "properties.administratorLoginPassword",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "properties.version",
        type: {
          name: "String"
        }
      },
      sslEnforcement: {
        serializedName: "properties.sslEnforcement",
        type: {
          name: "Enum",
          allowedValues: [
            "Enabled",
            "Disabled"
          ]
        }
      },
      minimalTlsVersion: {
        serializedName: "properties.minimalTlsVersion",
        type: {
          name: "String"
        }
      },
      publicNetworkAccess: {
        serializedName: "properties.publicNetworkAccess",
        type: {
          name: "String"
        }
      },
      replicationRole: {
        serializedName: "properties.replicationRole",
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
      ...Resource.type.modelProperties
    }
  }
};

export const FirewallRule: msRest.CompositeMapper = {
  serializedName: "FirewallRule",
  type: {
    name: "Composite",
    className: "FirewallRule",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      startIpAddress: {
        required: true,
        serializedName: "properties.startIpAddress",
        constraints: {
          Pattern: /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/
        },
        type: {
          name: "String"
        }
      },
      endIpAddress: {
        required: true,
        serializedName: "properties.endIpAddress",
        constraints: {
          Pattern: /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualNetworkRule: msRest.CompositeMapper = {
  serializedName: "VirtualNetworkRule",
  type: {
    name: "Composite",
    className: "VirtualNetworkRule",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      virtualNetworkSubnetId: {
        required: true,
        serializedName: "properties.virtualNetworkSubnetId",
        type: {
          name: "String"
        }
      },
      ignoreMissingVnetServiceEndpoint: {
        serializedName: "properties.ignoreMissingVnetServiceEndpoint",
        type: {
          name: "Boolean"
        }
      },
      state: {
        readOnly: true,
        serializedName: "properties.state",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Database: msRest.CompositeMapper = {
  serializedName: "Database",
  type: {
    name: "Composite",
    className: "Database",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      charset: {
        serializedName: "properties.charset",
        type: {
          name: "String"
        }
      },
      collation: {
        serializedName: "properties.collation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Configuration: msRest.CompositeMapper = {
  serializedName: "Configuration",
  type: {
    name: "Composite",
    className: "Configuration",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      value: {
        serializedName: "properties.value",
        type: {
          name: "String"
        }
      },
      description: {
        readOnly: true,
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      defaultValue: {
        readOnly: true,
        serializedName: "properties.defaultValue",
        type: {
          name: "String"
        }
      },
      dataType: {
        readOnly: true,
        serializedName: "properties.dataType",
        type: {
          name: "String"
        }
      },
      allowedValues: {
        readOnly: true,
        serializedName: "properties.allowedValues",
        type: {
          name: "String"
        }
      },
      source: {
        serializedName: "properties.source",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "OperationDisplay",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        readOnly: true,
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        readOnly: true,
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        readOnly: true,
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        readOnly: true,
        serializedName: "description",
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
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        readOnly: true,
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      origin: {
        readOnly: true,
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      properties: {
        readOnly: true,
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Object"
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
      }
    }
  }
};

export const LogFile: msRest.CompositeMapper = {
  serializedName: "LogFile",
  type: {
    name: "Composite",
    className: "LogFile",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      sizeInKB: {
        serializedName: "properties.sizeInKB",
        type: {
          name: "Number"
        }
      },
      createdTime: {
        readOnly: true,
        serializedName: "properties.createdTime",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedTime: {
        readOnly: true,
        serializedName: "properties.lastModifiedTime",
        type: {
          name: "DateTime"
        }
      },
      logFileType: {
        serializedName: "properties.type",
        type: {
          name: "String"
        }
      },
      url: {
        serializedName: "properties.url",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PerformanceTierServiceLevelObjectives: msRest.CompositeMapper = {
  serializedName: "PerformanceTierServiceLevelObjectives",
  type: {
    name: "Composite",
    className: "PerformanceTierServiceLevelObjectives",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      edition: {
        serializedName: "edition",
        type: {
          name: "String"
        }
      },
      vCore: {
        serializedName: "vCore",
        type: {
          name: "Number"
        }
      },
      hardwareGeneration: {
        serializedName: "hardwareGeneration",
        type: {
          name: "String"
        }
      },
      maxBackupRetentionDays: {
        serializedName: "maxBackupRetentionDays",
        type: {
          name: "Number"
        }
      },
      minBackupRetentionDays: {
        serializedName: "minBackupRetentionDays",
        type: {
          name: "Number"
        }
      },
      maxStorageMB: {
        serializedName: "maxStorageMB",
        type: {
          name: "Number"
        }
      },
      minStorageMB: {
        serializedName: "minStorageMB",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const PerformanceTierProperties: msRest.CompositeMapper = {
  serializedName: "PerformanceTierProperties",
  type: {
    name: "Composite",
    className: "PerformanceTierProperties",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      serviceLevelObjectives: {
        serializedName: "serviceLevelObjectives",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PerformanceTierServiceLevelObjectives"
            }
          }
        }
      }
    }
  }
};

export const NameAvailabilityRequest: msRest.CompositeMapper = {
  serializedName: "NameAvailabilityRequest",
  type: {
    name: "Composite",
    className: "NameAvailabilityRequest",
    modelProperties: {
      name: {
        required: true,
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

export const NameAvailability: msRest.CompositeMapper = {
  serializedName: "NameAvailability",
  type: {
    name: "Composite",
    className: "NameAvailability",
    modelProperties: {
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
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
      }
    }
  }
};

export const ServerSecurityAlertPolicy: msRest.CompositeMapper = {
  serializedName: "ServerSecurityAlertPolicy",
  type: {
    name: "Composite",
    className: "ServerSecurityAlertPolicy",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      state: {
        required: true,
        serializedName: "properties.state",
        type: {
          name: "Enum",
          allowedValues: [
            "Enabled",
            "Disabled"
          ]
        }
      },
      disabledAlerts: {
        serializedName: "properties.disabledAlerts",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      emailAddresses: {
        serializedName: "properties.emailAddresses",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      emailAccountAdmins: {
        serializedName: "properties.emailAccountAdmins",
        type: {
          name: "Boolean"
        }
      },
      storageEndpoint: {
        serializedName: "properties.storageEndpoint",
        type: {
          name: "String"
        }
      },
      storageAccountAccessKey: {
        serializedName: "properties.storageAccountAccessKey",
        type: {
          name: "String"
        }
      },
      retentionDays: {
        serializedName: "properties.retentionDays",
        type: {
          name: "Number"
        }
      }
    }
  }
};

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

export const ServerAdministratorResource: msRest.CompositeMapper = {
  serializedName: "ServerAdministratorResource",
  type: {
    name: "Composite",
    className: "ServerAdministratorResource",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      administratorType: {
        required: true,
        isConstant: true,
        serializedName: "properties.administratorType",
        defaultValue: 'ActiveDirectory',
        type: {
          name: "String"
        }
      },
      login: {
        required: true,
        serializedName: "properties.login",
        type: {
          name: "String"
        }
      },
      sid: {
        required: true,
        serializedName: "properties.sid",
        type: {
          name: "Uuid"
        }
      },
      tenantId: {
        required: true,
        serializedName: "properties.tenantId",
        type: {
          name: "Uuid"
        }
      }
    }
  }
};

export const AzureEntityResource: msRest.CompositeMapper = {
  serializedName: "AzureEntityResource",
  type: {
    name: "Composite",
    className: "AzureEntityResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        readOnly: true,
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkServiceConnectionStateProperty: msRest.CompositeMapper = {
  serializedName: "PrivateLinkServiceConnectionStateProperty",
  type: {
    name: "Composite",
    className: "PrivateLinkServiceConnectionStateProperty",
    modelProperties: {
      status: {
        required: true,
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      description: {
        required: true,
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      actionsRequired: {
        readOnly: true,
        serializedName: "actionsRequired",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpointConnection: msRest.CompositeMapper = {
  serializedName: "PrivateEndpointConnection",
  type: {
    name: "Composite",
    className: "PrivateEndpointConnection",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      privateEndpoint: {
        serializedName: "properties.privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpointProperty"
        }
      },
      privateLinkServiceConnectionState: {
        serializedName: "properties.privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkServiceConnectionStateProperty"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TagsObject: msRest.CompositeMapper = {
  serializedName: "TagsObject",
  type: {
    name: "Composite",
    className: "TagsObject",
    modelProperties: {
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

export const PrivateLinkResourceProperties: msRest.CompositeMapper = {
  serializedName: "PrivateLinkResourceProperties",
  type: {
    name: "Composite",
    className: "PrivateLinkResourceProperties",
    modelProperties: {
      groupId: {
        readOnly: true,
        serializedName: "groupId",
        type: {
          name: "String"
        }
      },
      requiredMembers: {
        readOnly: true,
        serializedName: "requiredMembers",
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

export const PrivateLinkResource: msRest.CompositeMapper = {
  serializedName: "PrivateLinkResource",
  type: {
    name: "Composite",
    className: "PrivateLinkResource",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      properties: {
        readOnly: true,
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "PrivateLinkResourceProperties"
        }
      }
    }
  }
};

export const ServerListResult: msRest.CompositeMapper = {
  serializedName: "ServerListResult",
  type: {
    name: "Composite",
    className: "ServerListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Server"
            }
          }
        }
      }
    }
  }
};

export const FirewallRuleListResult: msRest.CompositeMapper = {
  serializedName: "FirewallRuleListResult",
  type: {
    name: "Composite",
    className: "FirewallRuleListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FirewallRule"
            }
          }
        }
      }
    }
  }
};

export const VirtualNetworkRuleListResult: msRest.CompositeMapper = {
  serializedName: "VirtualNetworkRuleListResult",
  type: {
    name: "Composite",
    className: "VirtualNetworkRuleListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualNetworkRule"
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

export const DatabaseListResult: msRest.CompositeMapper = {
  serializedName: "DatabaseListResult",
  type: {
    name: "Composite",
    className: "DatabaseListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Database"
            }
          }
        }
      }
    }
  }
};

export const ConfigurationListResult: msRest.CompositeMapper = {
  serializedName: "ConfigurationListResult",
  type: {
    name: "Composite",
    className: "ConfigurationListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Configuration"
            }
          }
        }
      }
    }
  }
};

export const LogFileListResult: msRest.CompositeMapper = {
  serializedName: "LogFileListResult",
  type: {
    name: "Composite",
    className: "LogFileListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LogFile"
            }
          }
        }
      }
    }
  }
};

export const ServerAdministratorResourceListResult: msRest.CompositeMapper = {
  serializedName: "ServerAdministratorResourceListResult",
  type: {
    name: "Composite",
    className: "ServerAdministratorResourceListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ServerAdministratorResource"
            }
          }
        }
      }
    }
  }
};

export const PerformanceTierListResult: msRest.CompositeMapper = {
  serializedName: "PerformanceTierListResult",
  type: {
    name: "Composite",
    className: "PerformanceTierListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PerformanceTierProperties"
            }
          }
        }
      }
    }
  }
};

export const PrivateEndpointConnectionListResult: msRest.CompositeMapper = {
  serializedName: "PrivateEndpointConnectionListResult",
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
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
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkResourceListResult: msRest.CompositeMapper = {
  serializedName: "PrivateLinkResourceListResult",
  type: {
    name: "Composite",
    className: "PrivateLinkResourceListResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "",
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
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const discriminators = {
  'ServerPropertiesForCreate' : ServerPropertiesForCreate,
  'ServerPropertiesForCreate.Default' : ServerPropertiesForDefaultCreate,
  'ServerPropertiesForCreate.PointInTimeRestore' : ServerPropertiesForRestore,
  'ServerPropertiesForCreate.GeoRestore' : ServerPropertiesForGeoRestore,
  'ServerPropertiesForCreate.Replica' : ServerPropertiesForReplica

};
