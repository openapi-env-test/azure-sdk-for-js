/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const ElasticSanOperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ElasticSanOperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ElasticSanRPOperation"
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

export const ElasticSanRPOperation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ElasticSanRPOperation",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
        required: true,
        type: {
          name: "Boolean"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "ElasticSanOperationDisplay"
        }
      }
    }
  }
};

export const ElasticSanOperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ElasticSanOperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        required: true,
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        required: true,
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
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

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
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
              className: "ErrorResponse"
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

export const SkuInformationList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SkuInformationList",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceTypeSku"
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

export const ResourceTypeSku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceTypeSku",
    modelProperties: {
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      locationInfo: {
        serializedName: "locationInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SkuLocationInfo"
            }
          }
        }
      },
      san: {
        serializedName: "san",
        type: {
          name: "Composite",
          className: "SanTierInfo"
        }
      },
      volumeGroup: {
        serializedName: "volumeGroup",
        type: {
          name: "Composite",
          className: "VolumeGroupTierInfo"
        }
      },
      volume: {
        serializedName: "volume",
        type: {
          name: "Composite",
          className: "VolumeTierInfo"
        }
      }
    }
  }
};

export const Sku: coreClient.CompositeMapper = {
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
      }
    }
  }
};

export const SkuLocationInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SkuLocationInfo",
    modelProperties: {
      location: {
        serializedName: "location",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      zones: {
        serializedName: "zones",
        readOnly: true,
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

export const SanTierInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SanTierInfo",
    modelProperties: {
      maxSizeTB: {
        serializedName: "maxSizeTB",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      minSizeTB: {
        serializedName: "minSizeTB",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      minIncrementSizeTB: {
        serializedName: "minIncrementSizeTB",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      maxIopsPerTB: {
        serializedName: "maxIopsPerTB",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      maxMBpsPerTB: {
        serializedName: "maxMBpsPerTB",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      maxIops: {
        serializedName: "maxIops",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      maxMBps: {
        serializedName: "maxMBps",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      maxVolumeGroupCount: {
        serializedName: "maxVolumeGroupCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const VolumeGroupTierInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VolumeGroupTierInfo",
    modelProperties: {
      maxVolumeCount: {
        serializedName: "maxVolumeCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      maxSnapshotCount: {
        serializedName: "maxSnapshotCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const VolumeTierInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VolumeTierInfo",
    modelProperties: {
      maxSizeGB: {
        serializedName: "maxSizeGB",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      minSizeGB: {
        serializedName: "minSizeGB",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      minIncrementSizeGB: {
        serializedName: "minIncrementSizeGB",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      maxIopsPerGB: {
        serializedName: "maxIopsPerGB",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      maxMBpsPerGB: {
        serializedName: "maxMBpsPerGB",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      maxIops: {
        serializedName: "maxIops",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      maxMBps: {
        serializedName: "maxMBps",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      maxSnapshotCount: {
        serializedName: "maxSnapshotCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      maxConnectedClientCount: {
        serializedName: "maxConnectedClientCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ElasticSanList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ElasticSanList",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ElasticSan"
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

export const ElasticSanUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ElasticSanUpdate",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      baseSizeTB: {
        serializedName: "properties.baseSizeTB",
        type: {
          name: "Number"
        }
      },
      extendedSizeTB: {
        serializedName: "properties.extendedSizeTB",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const VolumeGroupList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VolumeGroupList",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VolumeGroup"
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

export const NetworkRuleSet: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NetworkRuleSet",
    modelProperties: {
      virtualNetworkRules: {
        serializedName: "virtualNetworkRules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualNetworkRule"
            }
          }
        }
      }
    }
  }
};

export const VirtualNetworkRule: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualNetworkRule",
    modelProperties: {
      virtualNetworkResourceId: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      action: {
        defaultValue: "Allow",
        isConstant: true,
        serializedName: "action",
        type: {
          name: "String"
        }
      },
      state: {
        serializedName: "state",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: [
            "provisioning",
            "deprovisioning",
            "succeeded",
            "failed",
            "networkSourceDeleted"
          ]
        }
      }
    }
  }
};

export const VolumeGroupUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VolumeGroupUpdate",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      protocolType: {
        serializedName: "properties.protocolType",
        type: {
          name: "String"
        }
      },
      encryption: {
        serializedName: "properties.encryption",
        type: {
          name: "String"
        }
      },
      networkAcls: {
        serializedName: "properties.networkAcls",
        type: {
          name: "Composite",
          className: "NetworkRuleSet"
        }
      }
    }
  }
};

export const SourceCreationData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SourceCreationData",
    modelProperties: {
      createSource: {
        defaultValue: "None",
        isConstant: true,
        serializedName: "createSource",
        type: {
          name: "String"
        }
      },
      sourceUri: {
        serializedName: "sourceUri",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IscsiTargetInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IscsiTargetInfo",
    modelProperties: {
      targetIqn: {
        serializedName: "targetIqn",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
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
      endpoints: {
        serializedName: "endpoints",
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

export const VolumeUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VolumeUpdate",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      sizeGB: {
        serializedName: "properties.sizeGB",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const VolumeList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VolumeList",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Volume"
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

export const SnapshotList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SnapshotList",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Snapshot"
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

export const SnapshotCreationData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SnapshotCreationData",
    modelProperties: {
      sourceUri: {
        serializedName: "sourceUri",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SnapshotUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SnapshotUpdate",
    modelProperties: {
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

export const TargetCreationData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TargetCreationData",
    modelProperties: {
      targetUri: {
        serializedName: "targetUri",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SnapshotSku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SnapshotSku",
    modelProperties: {
      name: {
        serializedName: "name",
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
      }
    }
  }
};

export const VolumeGroup: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VolumeGroup",
    modelProperties: {
      ...Resource.type.modelProperties,
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
      protocolType: {
        serializedName: "properties.protocolType",
        type: {
          name: "String"
        }
      },
      encryption: {
        serializedName: "properties.encryption",
        type: {
          name: "String"
        }
      },
      networkAcls: {
        serializedName: "properties.networkAcls",
        type: {
          name: "Composite",
          className: "NetworkRuleSet"
        }
      }
    }
  }
};

export const Volume: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Volume",
    modelProperties: {
      ...Resource.type.modelProperties,
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      volumeId: {
        serializedName: "properties.volumeId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      creationData: {
        serializedName: "properties.creationData",
        type: {
          name: "Composite",
          className: "SourceCreationData"
        }
      },
      sizeGB: {
        serializedName: "properties.sizeGB",
        type: {
          name: "Number"
        }
      },
      storageTarget: {
        serializedName: "properties.storageTarget",
        type: {
          name: "Composite",
          className: "IscsiTargetInfo"
        }
      }
    }
  }
};

export const ExportSnapshot: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExportSnapshot",
    modelProperties: {
      ...Resource.type.modelProperties,
      creationData: {
        serializedName: "properties.creationData",
        type: {
          name: "Composite",
          className: "TargetCreationData"
        }
      }
    }
  }
};

export const ElasticSan: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ElasticSan",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      sku: {
        serializedName: "properties.sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      availabilityZones: {
        serializedName: "properties.availabilityZones",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      baseSizeTB: {
        serializedName: "properties.baseSizeTB",
        type: {
          name: "Number"
        }
      },
      extendedSizeTB: {
        serializedName: "properties.extendedSizeTB",
        type: {
          name: "Number"
        }
      },
      totalSizeTB: {
        serializedName: "properties.totalSizeTB",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      provisionedIops: {
        serializedName: "properties.provisionedIops",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      provisionedMBps: {
        serializedName: "properties.provisionedMBps",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      volumeGroupCount: {
        serializedName: "properties.volumeGroupCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      totalVolumeSizeGiB: {
        serializedName: "properties.totalVolumeSizeGiB",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Snapshot: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Snapshot",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      creationData: {
        serializedName: "properties.creationData",
        type: {
          name: "Composite",
          className: "SnapshotCreationData"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};
