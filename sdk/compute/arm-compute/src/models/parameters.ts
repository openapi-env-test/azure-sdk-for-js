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
  VirtualMachineScaleSet as VirtualMachineScaleSetMapper,
  VirtualMachineScaleSetUpdate as VirtualMachineScaleSetUpdateMapper,
  VirtualMachineScaleSetVMInstanceIDs as VirtualMachineScaleSetVMInstanceIDsMapper,
  VirtualMachineScaleSetVMInstanceRequiredIDs as VirtualMachineScaleSetVMInstanceRequiredIDsMapper,
  VirtualMachineScaleSetReimageParameters as VirtualMachineScaleSetReimageParametersMapper,
  VMScaleSetConvertToSinglePlacementGroupInput as VMScaleSetConvertToSinglePlacementGroupInputMapper,
  OrchestrationServiceStateInput as OrchestrationServiceStateInputMapper,
  VirtualMachineScaleSetExtension as VirtualMachineScaleSetExtensionMapper,
  VirtualMachineScaleSetExtensionUpdate as VirtualMachineScaleSetExtensionUpdateMapper,
  VirtualMachineScaleSetVMExtension as VirtualMachineScaleSetVMExtensionMapper,
  VirtualMachineScaleSetVMExtensionUpdate as VirtualMachineScaleSetVMExtensionUpdateMapper,
  VirtualMachineScaleSetVMReimageParameters as VirtualMachineScaleSetVMReimageParametersMapper,
  VirtualMachineScaleSetVM as VirtualMachineScaleSetVMMapper,
  AttachDetachDataDisksRequest as AttachDetachDataDisksRequestMapper,
  RunCommandInput as RunCommandInputMapper,
  VirtualMachineExtension as VirtualMachineExtensionMapper,
  VirtualMachineExtensionUpdate as VirtualMachineExtensionUpdateMapper,
  VirtualMachineCaptureParameters as VirtualMachineCaptureParametersMapper,
  VirtualMachine as VirtualMachineMapper,
  VirtualMachineUpdate as VirtualMachineUpdateMapper,
  VirtualMachineReimageParameters as VirtualMachineReimageParametersMapper,
  VirtualMachineInstallPatchesParameters as VirtualMachineInstallPatchesParametersMapper,
  AvailabilitySet as AvailabilitySetMapper,
  AvailabilitySetUpdate as AvailabilitySetUpdateMapper,
  ProximityPlacementGroup as ProximityPlacementGroupMapper,
  ProximityPlacementGroupUpdate as ProximityPlacementGroupUpdateMapper,
  DedicatedHostGroup as DedicatedHostGroupMapper,
  DedicatedHostGroupUpdate as DedicatedHostGroupUpdateMapper,
  DedicatedHost as DedicatedHostMapper,
  DedicatedHostUpdate as DedicatedHostUpdateMapper,
  SshPublicKeyResource as SshPublicKeyResourceMapper,
  SshPublicKeyUpdateResource as SshPublicKeyUpdateResourceMapper,
  SshGenerateKeyPairInputParameters as SshGenerateKeyPairInputParametersMapper,
  Image as ImageMapper,
  ImageUpdate as ImageUpdateMapper,
  RestorePointCollection as RestorePointCollectionMapper,
  RestorePointCollectionUpdate as RestorePointCollectionUpdateMapper,
  RestorePoint as RestorePointMapper,
  CapacityReservationGroup as CapacityReservationGroupMapper,
  CapacityReservationGroupUpdate as CapacityReservationGroupUpdateMapper,
  CapacityReservation as CapacityReservationMapper,
  CapacityReservationUpdate as CapacityReservationUpdateMapper,
  RequestRateByIntervalInput as RequestRateByIntervalInputMapper,
  ThrottledRequestsInput as ThrottledRequestsInputMapper,
  VirtualMachineRunCommand as VirtualMachineRunCommandMapper,
  VirtualMachineRunCommandUpdate as VirtualMachineRunCommandUpdateMapper,
  Disk as DiskMapper,
  DiskUpdate as DiskUpdateMapper,
  GrantAccessData as GrantAccessDataMapper,
  DiskAccess as DiskAccessMapper,
  DiskAccessUpdate as DiskAccessUpdateMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
  DiskEncryptionSet as DiskEncryptionSetMapper,
  DiskEncryptionSetUpdate as DiskEncryptionSetUpdateMapper,
  Gallery as GalleryMapper,
  GalleryUpdate as GalleryUpdateMapper,
  GalleryImage as GalleryImageMapper,
  GalleryImageUpdate as GalleryImageUpdateMapper,
  GalleryImageVersion as GalleryImageVersionMapper,
  GalleryImageVersionUpdate as GalleryImageVersionUpdateMapper,
  GalleryApplication as GalleryApplicationMapper,
  GalleryApplicationUpdate as GalleryApplicationUpdateMapper,
  GalleryApplicationVersion as GalleryApplicationVersionMapper,
  GalleryApplicationVersionUpdate as GalleryApplicationVersionUpdateMapper,
  SharingUpdate as SharingUpdateMapper,
  CloudService as CloudServiceMapper,
  CloudServiceUpdate as CloudServiceUpdateMapper,
  RoleInstances as RoleInstancesMapper,
  UpdateDomain as UpdateDomainMapper
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
    defaultValue: "2023-09-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const location: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._]+$")
    },
    serializedName: "location",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
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

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: VirtualMachineScaleSetMapper
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const vmScaleSetName: OperationURLParameter = {
  parameterPath: "vmScaleSetName",
  mapper: {
    serializedName: "vmScaleSetName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const ifMatch: OperationParameter = {
  parameterPath: ["options", "ifMatch"],
  mapper: {
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};

export const ifNoneMatch: OperationParameter = {
  parameterPath: ["options", "ifNoneMatch"],
  mapper: {
    serializedName: "If-None-Match",
    type: {
      name: "String"
    }
  }
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: VirtualMachineScaleSetUpdateMapper
};

export const forceDeletion: OperationQueryParameter = {
  parameterPath: ["options", "forceDeletion"],
  mapper: {
    serializedName: "forceDeletion",
    type: {
      name: "Boolean"
    }
  }
};

export const expand: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const vmInstanceIDs: OperationParameter = {
  parameterPath: ["options", "vmInstanceIDs"],
  mapper: VirtualMachineScaleSetVMInstanceIDsMapper
};

export const hibernate: OperationQueryParameter = {
  parameterPath: ["options", "hibernate"],
  mapper: {
    serializedName: "hibernate",
    type: {
      name: "Boolean"
    }
  }
};

export const vmInstanceIDs1: OperationParameter = {
  parameterPath: "vmInstanceIDs",
  mapper: VirtualMachineScaleSetVMInstanceRequiredIDsMapper
};

export const skipShutdown: OperationQueryParameter = {
  parameterPath: ["options", "skipShutdown"],
  mapper: {
    defaultValue: false,
    serializedName: "skipShutdown",
    type: {
      name: "Boolean"
    }
  }
};

export const vmScaleSetReimageInput: OperationParameter = {
  parameterPath: ["options", "vmScaleSetReimageInput"],
  mapper: VirtualMachineScaleSetReimageParametersMapper
};

export const platformUpdateDomain: OperationQueryParameter = {
  parameterPath: "platformUpdateDomain",
  mapper: {
    serializedName: "platformUpdateDomain",
    required: true,
    type: {
      name: "Number"
    }
  }
};

export const zone: OperationQueryParameter = {
  parameterPath: ["options", "zone"],
  mapper: {
    serializedName: "zone",
    type: {
      name: "String"
    }
  }
};

export const placementGroupId: OperationQueryParameter = {
  parameterPath: ["options", "placementGroupId"],
  mapper: {
    serializedName: "placementGroupId",
    type: {
      name: "String"
    }
  }
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: VMScaleSetConvertToSinglePlacementGroupInputMapper
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: OrchestrationServiceStateInputMapper
};

export const extensionParameters: OperationParameter = {
  parameterPath: "extensionParameters",
  mapper: VirtualMachineScaleSetExtensionMapper
};

export const vmssExtensionName: OperationURLParameter = {
  parameterPath: "vmssExtensionName",
  mapper: {
    serializedName: "vmssExtensionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const extensionParameters1: OperationParameter = {
  parameterPath: "extensionParameters",
  mapper: VirtualMachineScaleSetExtensionUpdateMapper
};

export const expand1: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const extensionParameters2: OperationParameter = {
  parameterPath: "extensionParameters",
  mapper: VirtualMachineScaleSetVMExtensionMapper
};

export const instanceId: OperationURLParameter = {
  parameterPath: "instanceId",
  mapper: {
    serializedName: "instanceId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const vmExtensionName: OperationURLParameter = {
  parameterPath: "vmExtensionName",
  mapper: {
    serializedName: "vmExtensionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const extensionParameters3: OperationParameter = {
  parameterPath: "extensionParameters",
  mapper: VirtualMachineScaleSetVMExtensionUpdateMapper
};

export const vmScaleSetVMReimageInput: OperationParameter = {
  parameterPath: ["options", "vmScaleSetVMReimageInput"],
  mapper: VirtualMachineScaleSetVMReimageParametersMapper
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: VirtualMachineScaleSetVMMapper
};

export const expand2: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "Enum",
      allowedValues: ["instanceView", "userData"]
    }
  }
};

export const virtualMachineScaleSetName: OperationURLParameter = {
  parameterPath: "virtualMachineScaleSetName",
  mapper: {
    serializedName: "virtualMachineScaleSetName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const select: OperationQueryParameter = {
  parameterPath: ["options", "select"],
  mapper: {
    serializedName: "$select",
    type: {
      name: "String"
    }
  }
};

export const sasUriExpirationTimeInMinutes: OperationQueryParameter = {
  parameterPath: ["options", "sasUriExpirationTimeInMinutes"],
  mapper: {
    serializedName: "sasUriExpirationTimeInMinutes",
    type: {
      name: "Number"
    }
  }
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: AttachDetachDataDisksRequestMapper
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: RunCommandInputMapper
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json, text/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const extensionParameters4: OperationParameter = {
  parameterPath: "extensionParameters",
  mapper: VirtualMachineExtensionMapper
};

export const vmName: OperationURLParameter = {
  parameterPath: "vmName",
  mapper: {
    serializedName: "vmName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const extensionParameters5: OperationParameter = {
  parameterPath: "extensionParameters",
  mapper: VirtualMachineExtensionUpdateMapper
};

export const parameters7: OperationParameter = {
  parameterPath: "parameters",
  mapper: VirtualMachineCaptureParametersMapper
};

export const parameters8: OperationParameter = {
  parameterPath: "parameters",
  mapper: VirtualMachineMapper
};

export const parameters9: OperationParameter = {
  parameterPath: "parameters",
  mapper: VirtualMachineUpdateMapper
};

export const expand3: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const statusOnly: OperationQueryParameter = {
  parameterPath: ["options", "statusOnly"],
  mapper: {
    serializedName: "statusOnly",
    type: {
      name: "String"
    }
  }
};

export const expand4: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const parameters10: OperationParameter = {
  parameterPath: ["options", "parameters"],
  mapper: VirtualMachineReimageParametersMapper
};

export const installPatchesInput: OperationParameter = {
  parameterPath: "installPatchesInput",
  mapper: VirtualMachineInstallPatchesParametersMapper
};

export const location1: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    serializedName: "location",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const publisherName: OperationURLParameter = {
  parameterPath: "publisherName",
  mapper: {
    serializedName: "publisherName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const offer: OperationURLParameter = {
  parameterPath: "offer",
  mapper: {
    serializedName: "offer",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const skus: OperationURLParameter = {
  parameterPath: "skus",
  mapper: {
    serializedName: "skus",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const version: OperationURLParameter = {
  parameterPath: "version",
  mapper: {
    serializedName: "version",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const top: OperationQueryParameter = {
  parameterPath: ["options", "top"],
  mapper: {
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
};

export const orderby: OperationQueryParameter = {
  parameterPath: ["options", "orderby"],
  mapper: {
    serializedName: "$orderby",
    type: {
      name: "String"
    }
  }
};

export const edgeZone: OperationURLParameter = {
  parameterPath: "edgeZone",
  mapper: {
    serializedName: "edgeZone",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const typeParam: OperationURLParameter = {
  parameterPath: "typeParam",
  mapper: {
    serializedName: "type",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters11: OperationParameter = {
  parameterPath: "parameters",
  mapper: AvailabilitySetMapper
};

export const availabilitySetName: OperationURLParameter = {
  parameterPath: "availabilitySetName",
  mapper: {
    serializedName: "availabilitySetName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters12: OperationParameter = {
  parameterPath: "parameters",
  mapper: AvailabilitySetUpdateMapper
};

export const parameters13: OperationParameter = {
  parameterPath: "parameters",
  mapper: ProximityPlacementGroupMapper
};

export const proximityPlacementGroupName: OperationURLParameter = {
  parameterPath: "proximityPlacementGroupName",
  mapper: {
    serializedName: "proximityPlacementGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters14: OperationParameter = {
  parameterPath: "parameters",
  mapper: ProximityPlacementGroupUpdateMapper
};

export const includeColocationStatus: OperationQueryParameter = {
  parameterPath: ["options", "includeColocationStatus"],
  mapper: {
    serializedName: "includeColocationStatus",
    type: {
      name: "String"
    }
  }
};

export const parameters15: OperationParameter = {
  parameterPath: "parameters",
  mapper: DedicatedHostGroupMapper
};

export const hostGroupName: OperationURLParameter = {
  parameterPath: "hostGroupName",
  mapper: {
    serializedName: "hostGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters16: OperationParameter = {
  parameterPath: "parameters",
  mapper: DedicatedHostGroupUpdateMapper
};

export const parameters17: OperationParameter = {
  parameterPath: "parameters",
  mapper: DedicatedHostMapper
};

export const hostName: OperationURLParameter = {
  parameterPath: "hostName",
  mapper: {
    serializedName: "hostName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters18: OperationParameter = {
  parameterPath: "parameters",
  mapper: DedicatedHostUpdateMapper
};

export const hostGroupName1: OperationURLParameter = {
  parameterPath: "hostGroupName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._]+$")
    },
    serializedName: "hostGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const hostName1: OperationURLParameter = {
  parameterPath: "hostName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._]+$")
    },
    serializedName: "hostName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters19: OperationParameter = {
  parameterPath: "parameters",
  mapper: SshPublicKeyResourceMapper
};

export const sshPublicKeyName: OperationURLParameter = {
  parameterPath: "sshPublicKeyName",
  mapper: {
    serializedName: "sshPublicKeyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters20: OperationParameter = {
  parameterPath: "parameters",
  mapper: SshPublicKeyUpdateResourceMapper
};

export const parameters21: OperationParameter = {
  parameterPath: ["options", "parameters"],
  mapper: SshGenerateKeyPairInputParametersMapper
};

export const parameters22: OperationParameter = {
  parameterPath: "parameters",
  mapper: ImageMapper
};

export const imageName: OperationURLParameter = {
  parameterPath: "imageName",
  mapper: {
    serializedName: "imageName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters23: OperationParameter = {
  parameterPath: "parameters",
  mapper: ImageUpdateMapper
};

export const parameters24: OperationParameter = {
  parameterPath: "parameters",
  mapper: RestorePointCollectionMapper
};

export const restorePointCollectionName: OperationURLParameter = {
  parameterPath: "restorePointCollectionName",
  mapper: {
    serializedName: "restorePointCollectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters25: OperationParameter = {
  parameterPath: "parameters",
  mapper: RestorePointCollectionUpdateMapper
};

export const expand5: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const parameters26: OperationParameter = {
  parameterPath: "parameters",
  mapper: RestorePointMapper
};

export const restorePointName: OperationURLParameter = {
  parameterPath: "restorePointName",
  mapper: {
    serializedName: "restorePointName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const expand6: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const parameters27: OperationParameter = {
  parameterPath: "parameters",
  mapper: CapacityReservationGroupMapper
};

export const capacityReservationGroupName: OperationURLParameter = {
  parameterPath: "capacityReservationGroupName",
  mapper: {
    serializedName: "capacityReservationGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters28: OperationParameter = {
  parameterPath: "parameters",
  mapper: CapacityReservationGroupUpdateMapper
};

export const expand7: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const expand8: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const parameters29: OperationParameter = {
  parameterPath: "parameters",
  mapper: CapacityReservationMapper
};

export const capacityReservationName: OperationURLParameter = {
  parameterPath: "capacityReservationName",
  mapper: {
    serializedName: "capacityReservationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters30: OperationParameter = {
  parameterPath: "parameters",
  mapper: CapacityReservationUpdateMapper
};

export const expand9: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const parameters31: OperationParameter = {
  parameterPath: "parameters",
  mapper: RequestRateByIntervalInputMapper
};

export const parameters32: OperationParameter = {
  parameterPath: "parameters",
  mapper: ThrottledRequestsInputMapper
};

export const commandId: OperationURLParameter = {
  parameterPath: "commandId",
  mapper: {
    serializedName: "commandId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const runCommand: OperationParameter = {
  parameterPath: "runCommand",
  mapper: VirtualMachineRunCommandMapper
};

export const runCommandName: OperationURLParameter = {
  parameterPath: "runCommandName",
  mapper: {
    serializedName: "runCommandName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const runCommand1: OperationParameter = {
  parameterPath: "runCommand",
  mapper: VirtualMachineRunCommandUpdateMapper
};

export const disk: OperationParameter = {
  parameterPath: "disk",
  mapper: DiskMapper
};

export const diskName: OperationURLParameter = {
  parameterPath: "diskName",
  mapper: {
    serializedName: "diskName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion1: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2023-04-02",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const disk1: OperationParameter = {
  parameterPath: "disk",
  mapper: DiskUpdateMapper
};

export const grantAccessData: OperationParameter = {
  parameterPath: "grantAccessData",
  mapper: GrantAccessDataMapper
};

export const diskAccess: OperationParameter = {
  parameterPath: "diskAccess",
  mapper: DiskAccessMapper
};

export const diskAccessName: OperationURLParameter = {
  parameterPath: "diskAccessName",
  mapper: {
    serializedName: "diskAccessName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const diskAccess1: OperationParameter = {
  parameterPath: "diskAccess",
  mapper: DiskAccessUpdateMapper
};

export const privateEndpointConnection: OperationParameter = {
  parameterPath: "privateEndpointConnection",
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

export const diskEncryptionSet: OperationParameter = {
  parameterPath: "diskEncryptionSet",
  mapper: DiskEncryptionSetMapper
};

export const diskEncryptionSetName: OperationURLParameter = {
  parameterPath: "diskEncryptionSetName",
  mapper: {
    serializedName: "diskEncryptionSetName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const diskEncryptionSet1: OperationParameter = {
  parameterPath: "diskEncryptionSet",
  mapper: DiskEncryptionSetUpdateMapper
};

export const vmRestorePointName: OperationURLParameter = {
  parameterPath: "vmRestorePointName",
  mapper: {
    serializedName: "vmRestorePointName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const diskRestorePointName: OperationURLParameter = {
  parameterPath: "diskRestorePointName",
  mapper: {
    serializedName: "diskRestorePointName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion2: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-07-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const includeExtendedLocations: OperationQueryParameter = {
  parameterPath: ["options", "includeExtendedLocations"],
  mapper: {
    serializedName: "includeExtendedLocations",
    type: {
      name: "String"
    }
  }
};

export const gallery: OperationParameter = {
  parameterPath: "gallery",
  mapper: GalleryMapper
};

export const galleryName: OperationURLParameter = {
  parameterPath: "galleryName",
  mapper: {
    serializedName: "galleryName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion3: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-08-03",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const gallery1: OperationParameter = {
  parameterPath: "gallery",
  mapper: GalleryUpdateMapper
};

export const select1: OperationQueryParameter = {
  parameterPath: ["options", "select"],
  mapper: {
    serializedName: "$select",
    type: {
      name: "String"
    }
  }
};

export const expand10: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const galleryImage: OperationParameter = {
  parameterPath: "galleryImage",
  mapper: GalleryImageMapper
};

export const galleryImageName: OperationURLParameter = {
  parameterPath: "galleryImageName",
  mapper: {
    serializedName: "galleryImageName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const galleryImage1: OperationParameter = {
  parameterPath: "galleryImage",
  mapper: GalleryImageUpdateMapper
};

export const galleryImageVersion: OperationParameter = {
  parameterPath: "galleryImageVersion",
  mapper: GalleryImageVersionMapper
};

export const galleryImageVersionName: OperationURLParameter = {
  parameterPath: "galleryImageVersionName",
  mapper: {
    serializedName: "galleryImageVersionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const galleryImageVersion1: OperationParameter = {
  parameterPath: "galleryImageVersion",
  mapper: GalleryImageVersionUpdateMapper
};

export const expand11: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const galleryApplication: OperationParameter = {
  parameterPath: "galleryApplication",
  mapper: GalleryApplicationMapper
};

export const galleryApplicationName: OperationURLParameter = {
  parameterPath: "galleryApplicationName",
  mapper: {
    serializedName: "galleryApplicationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const galleryApplication1: OperationParameter = {
  parameterPath: "galleryApplication",
  mapper: GalleryApplicationUpdateMapper
};

export const galleryApplicationVersion: OperationParameter = {
  parameterPath: "galleryApplicationVersion",
  mapper: GalleryApplicationVersionMapper
};

export const galleryApplicationVersionName: OperationURLParameter = {
  parameterPath: "galleryApplicationVersionName",
  mapper: {
    serializedName: "galleryApplicationVersionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const galleryApplicationVersion1: OperationParameter = {
  parameterPath: "galleryApplicationVersion",
  mapper: GalleryApplicationVersionUpdateMapper
};

export const sharingUpdate: OperationParameter = {
  parameterPath: "sharingUpdate",
  mapper: SharingUpdateMapper
};

export const sharedTo: OperationQueryParameter = {
  parameterPath: ["options", "sharedTo"],
  mapper: {
    serializedName: "sharedTo",
    type: {
      name: "String"
    }
  }
};

export const galleryUniqueName: OperationURLParameter = {
  parameterPath: "galleryUniqueName",
  mapper: {
    serializedName: "galleryUniqueName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const publicGalleryName: OperationURLParameter = {
  parameterPath: "publicGalleryName",
  mapper: {
    serializedName: "publicGalleryName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const roleInstanceName: OperationURLParameter = {
  parameterPath: "roleInstanceName",
  mapper: {
    serializedName: "roleInstanceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const cloudServiceName: OperationURLParameter = {
  parameterPath: "cloudServiceName",
  mapper: {
    serializedName: "cloudServiceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion4: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-09-04",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const accept2: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/x-rdp",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const roleName: OperationURLParameter = {
  parameterPath: "roleName",
  mapper: {
    serializedName: "roleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters33: OperationParameter = {
  parameterPath: ["options", "parameters"],
  mapper: CloudServiceMapper
};

export const parameters34: OperationParameter = {
  parameterPath: ["options", "parameters"],
  mapper: CloudServiceUpdateMapper
};

export const parameters35: OperationParameter = {
  parameterPath: ["options", "parameters"],
  mapper: RoleInstancesMapper
};

export const parameters36: OperationParameter = {
  parameterPath: ["options", "parameters"],
  mapper: UpdateDomainMapper
};

export const updateDomain: OperationURLParameter = {
  parameterPath: "updateDomain",
  mapper: {
    serializedName: "updateDomain",
    required: true,
    type: {
      name: "Number"
    }
  }
};

export const osVersionName: OperationURLParameter = {
  parameterPath: "osVersionName",
  mapper: {
    serializedName: "osVersionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const osFamilyName: OperationURLParameter = {
  parameterPath: "osFamilyName",
  mapper: {
    serializedName: "osFamilyName",
    required: true,
    type: {
      name: "String"
    }
  }
};
