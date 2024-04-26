/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const LinkerList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LinkerList",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        nullable: true,
        type: {
          name: "String",
        },
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LinkerResource",
            },
          },
        },
      },
    },
  },
};

export const TargetServiceBase: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TargetServiceBase",
    uberParent: "TargetServiceBase",
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type",
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const AuthInfoBase: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AuthInfoBase",
    uberParent: "AuthInfoBase",
    polymorphicDiscriminator: {
      serializedName: "authType",
      clientName: "authType",
    },
    modelProperties: {
      authType: {
        serializedName: "authType",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const VNetSolution: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VNetSolution",
    modelProperties: {
      type: {
        serializedName: "type",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const SecretStore: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SecretStore",
    modelProperties: {
      keyVaultId: {
        serializedName: "keyVaultId",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String",
        },
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String",
        },
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime",
        },
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String",
        },
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String",
        },
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime",
        },
      },
    },
  },
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
          name: "String",
        },
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
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
          className: "ErrorDetail",
        },
      },
    },
  },
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
          name: "String",
        },
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail",
            },
          },
        },
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo",
            },
          },
        },
      },
    },
  },
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
          name: "String",
        },
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } },
        },
      },
    },
  },
};

export const ValidateOperationResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ValidateOperationResult",
    modelProperties: {
      resourceId: {
        serializedName: "resourceId",
        nullable: true,
        type: {
          name: "String",
        },
      },
      status: {
        serializedName: "status",
        nullable: true,
        type: {
          name: "String",
        },
      },
      linkerName: {
        serializedName: "properties.linkerName",
        nullable: true,
        type: {
          name: "String",
        },
      },
      isConnectionAvailable: {
        serializedName: "properties.isConnectionAvailable",
        nullable: true,
        type: {
          name: "Boolean",
        },
      },
      reportStartTimeUtc: {
        serializedName: "properties.reportStartTimeUtc",
        nullable: true,
        type: {
          name: "DateTime",
        },
      },
      reportEndTimeUtc: {
        serializedName: "properties.reportEndTimeUtc",
        nullable: true,
        type: {
          name: "DateTime",
        },
      },
      sourceId: {
        serializedName: "properties.sourceId",
        nullable: true,
        type: {
          name: "String",
        },
      },
      targetId: {
        serializedName: "properties.targetId",
        nullable: true,
        type: {
          name: "String",
        },
      },
      authType: {
        serializedName: "properties.authType",
        nullable: true,
        type: {
          name: "String",
        },
      },
      validationDetail: {
        serializedName: "properties.validationDetail",
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ValidationResultItem",
            },
          },
        },
      },
    },
  },
};

export const ValidationResultItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ValidationResultItem",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        nullable: true,
        type: {
          name: "String",
        },
      },
      result: {
        serializedName: "result",
        nullable: true,
        type: {
          name: "String",
        },
      },
      errorMessage: {
        serializedName: "errorMessage",
        nullable: true,
        type: {
          name: "String",
        },
      },
      errorCode: {
        serializedName: "errorCode",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const SourceConfigurationResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SourceConfigurationResult",
    modelProperties: {
      configurations: {
        serializedName: "configurations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SourceConfiguration",
            },
          },
        },
      },
    },
  },
};

export const SourceConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SourceConfiguration",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      value: {
        serializedName: "value",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
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
              className: "Operation",
            },
          },
        },
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
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
          name: "String",
        },
      },
      isDataAction: {
        serializedName: "isDataAction",
        readOnly: true,
        type: {
          name: "Boolean",
        },
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay",
        },
      },
      origin: {
        serializedName: "origin",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      actionType: {
        serializedName: "actionType",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
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
          name: "String",
        },
      },
      resource: {
        serializedName: "resource",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      operation: {
        serializedName: "operation",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        readOnly: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const AzureResourcePropertiesBase: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureResourcePropertiesBase",
    uberParent: "AzureResourcePropertiesBase",
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type",
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const SecretInfoBase: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SecretInfoBase",
    uberParent: "SecretInfoBase",
    polymorphicDiscriminator: {
      serializedName: "secretType",
      clientName: "secretType",
    },
    modelProperties: {
      secretType: {
        serializedName: "secretType",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const LinkerPatch: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LinkerPatch",
    modelProperties: {
      targetService: {
        serializedName: "properties.targetService",
        type: {
          name: "Composite",
          className: "TargetServiceBase",
        },
      },
      authInfo: {
        serializedName: "properties.authInfo",
        type: {
          name: "Composite",
          className: "AuthInfoBase",
        },
      },
      clientType: {
        serializedName: "properties.clientType",
        type: {
          name: "String",
        },
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      vNetSolution: {
        serializedName: "properties.vNetSolution",
        type: {
          name: "Composite",
          className: "VNetSolution",
        },
      },
      secretStore: {
        serializedName: "properties.secretStore",
        type: {
          name: "Composite",
          className: "SecretStore",
        },
      },
      scope: {
        serializedName: "properties.scope",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const AzureResource: coreClient.CompositeMapper = {
  serializedName: "AzureResource",
  type: {
    name: "Composite",
    className: "AzureResource",
    uberParent: "TargetServiceBase",
    polymorphicDiscriminator: TargetServiceBase.type.polymorphicDiscriminator,
    modelProperties: {
      ...TargetServiceBase.type.modelProperties,
      id: {
        serializedName: "id",
        type: {
          name: "String",
        },
      },
      resourceProperties: {
        serializedName: "resourceProperties",
        type: {
          name: "Composite",
          className: "AzureResourcePropertiesBase",
        },
      },
    },
  },
};

export const ConfluentBootstrapServer: coreClient.CompositeMapper = {
  serializedName: "ConfluentBootstrapServer",
  type: {
    name: "Composite",
    className: "ConfluentBootstrapServer",
    uberParent: "TargetServiceBase",
    polymorphicDiscriminator: TargetServiceBase.type.polymorphicDiscriminator,
    modelProperties: {
      ...TargetServiceBase.type.modelProperties,
      endpoint: {
        serializedName: "endpoint",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ConfluentSchemaRegistry: coreClient.CompositeMapper = {
  serializedName: "ConfluentSchemaRegistry",
  type: {
    name: "Composite",
    className: "ConfluentSchemaRegistry",
    uberParent: "TargetServiceBase",
    polymorphicDiscriminator: TargetServiceBase.type.polymorphicDiscriminator,
    modelProperties: {
      ...TargetServiceBase.type.modelProperties,
      endpoint: {
        serializedName: "endpoint",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const SecretAuthInfo: coreClient.CompositeMapper = {
  serializedName: "secret",
  type: {
    name: "Composite",
    className: "SecretAuthInfo",
    uberParent: "AuthInfoBase",
    polymorphicDiscriminator: AuthInfoBase.type.polymorphicDiscriminator,
    modelProperties: {
      ...AuthInfoBase.type.modelProperties,
      name: {
        serializedName: "name",
        nullable: true,
        type: {
          name: "String",
        },
      },
      secretInfo: {
        serializedName: "secretInfo",
        type: {
          name: "Composite",
          className: "SecretInfoBase",
        },
      },
    },
  },
};

export const UserAssignedIdentityAuthInfo: coreClient.CompositeMapper = {
  serializedName: "userAssignedIdentity",
  type: {
    name: "Composite",
    className: "UserAssignedIdentityAuthInfo",
    uberParent: "AuthInfoBase",
    polymorphicDiscriminator: AuthInfoBase.type.polymorphicDiscriminator,
    modelProperties: {
      ...AuthInfoBase.type.modelProperties,
      clientId: {
        serializedName: "clientId",
        type: {
          name: "String",
        },
      },
      subscriptionId: {
        serializedName: "subscriptionId",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const SystemAssignedIdentityAuthInfo: coreClient.CompositeMapper = {
  serializedName: "systemAssignedIdentity",
  type: {
    name: "Composite",
    className: "SystemAssignedIdentityAuthInfo",
    uberParent: "AuthInfoBase",
    polymorphicDiscriminator: AuthInfoBase.type.polymorphicDiscriminator,
    modelProperties: {
      ...AuthInfoBase.type.modelProperties,
    },
  },
};

export const ServicePrincipalSecretAuthInfo: coreClient.CompositeMapper = {
  serializedName: "servicePrincipalSecret",
  type: {
    name: "Composite",
    className: "ServicePrincipalSecretAuthInfo",
    uberParent: "AuthInfoBase",
    polymorphicDiscriminator: AuthInfoBase.type.polymorphicDiscriminator,
    modelProperties: {
      ...AuthInfoBase.type.modelProperties,
      clientId: {
        serializedName: "clientId",
        required: true,
        type: {
          name: "String",
        },
      },
      principalId: {
        serializedName: "principalId",
        required: true,
        type: {
          name: "String",
        },
      },
      secret: {
        serializedName: "secret",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ServicePrincipalCertificateAuthInfo: coreClient.CompositeMapper = {
  serializedName: "servicePrincipalCertificate",
  type: {
    name: "Composite",
    className: "ServicePrincipalCertificateAuthInfo",
    uberParent: "AuthInfoBase",
    polymorphicDiscriminator: AuthInfoBase.type.polymorphicDiscriminator,
    modelProperties: {
      ...AuthInfoBase.type.modelProperties,
      clientId: {
        serializedName: "clientId",
        required: true,
        type: {
          name: "String",
        },
      },
      principalId: {
        serializedName: "principalId",
        required: true,
        type: {
          name: "String",
        },
      },
      certificate: {
        serializedName: "certificate",
        required: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const ProxyResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties,
    },
  },
};

export const AzureKeyVaultProperties: coreClient.CompositeMapper = {
  serializedName: "KeyVault",
  type: {
    name: "Composite",
    className: "AzureKeyVaultProperties",
    uberParent: "AzureResourcePropertiesBase",
    polymorphicDiscriminator:
      AzureResourcePropertiesBase.type.polymorphicDiscriminator,
    modelProperties: {
      ...AzureResourcePropertiesBase.type.modelProperties,
      connectAsKubernetesCsiDriver: {
        serializedName: "connectAsKubernetesCsiDriver",
        nullable: true,
        type: {
          name: "Boolean",
        },
      },
    },
  },
};

export const ValueSecretInfo: coreClient.CompositeMapper = {
  serializedName: "rawValue",
  type: {
    name: "Composite",
    className: "ValueSecretInfo",
    uberParent: "SecretInfoBase",
    polymorphicDiscriminator: SecretInfoBase.type.polymorphicDiscriminator,
    modelProperties: {
      ...SecretInfoBase.type.modelProperties,
      value: {
        serializedName: "value",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const KeyVaultSecretReferenceSecretInfo: coreClient.CompositeMapper = {
  serializedName: "keyVaultSecretReference",
  type: {
    name: "Composite",
    className: "KeyVaultSecretReferenceSecretInfo",
    uberParent: "SecretInfoBase",
    polymorphicDiscriminator: SecretInfoBase.type.polymorphicDiscriminator,
    modelProperties: {
      ...SecretInfoBase.type.modelProperties,
      name: {
        serializedName: "name",
        type: {
          name: "String",
        },
      },
      version: {
        serializedName: "version",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const KeyVaultSecretUriSecretInfo: coreClient.CompositeMapper = {
  serializedName: "keyVaultSecretUri",
  type: {
    name: "Composite",
    className: "KeyVaultSecretUriSecretInfo",
    uberParent: "SecretInfoBase",
    polymorphicDiscriminator: SecretInfoBase.type.polymorphicDiscriminator,
    modelProperties: {
      ...SecretInfoBase.type.modelProperties,
      value: {
        serializedName: "value",
        type: {
          name: "String",
        },
      },
    },
  },
};

export const LinkerResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LinkerResource",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData",
        },
      },
      targetService: {
        serializedName: "properties.targetService",
        type: {
          name: "Composite",
          className: "TargetServiceBase",
        },
      },
      authInfo: {
        serializedName: "properties.authInfo",
        type: {
          name: "Composite",
          className: "AuthInfoBase",
        },
      },
      clientType: {
        serializedName: "properties.clientType",
        type: {
          name: "String",
        },
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String",
        },
      },
      vNetSolution: {
        serializedName: "properties.vNetSolution",
        type: {
          name: "Composite",
          className: "VNetSolution",
        },
      },
      secretStore: {
        serializedName: "properties.secretStore",
        type: {
          name: "Composite",
          className: "SecretStore",
        },
      },
      scope: {
        serializedName: "properties.scope",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export let discriminators = {
  TargetServiceBase: TargetServiceBase,
  AuthInfoBase: AuthInfoBase,
  AzureResourcePropertiesBase: AzureResourcePropertiesBase,
  SecretInfoBase: SecretInfoBase,
  "TargetServiceBase.AzureResource": AzureResource,
  "TargetServiceBase.ConfluentBootstrapServer": ConfluentBootstrapServer,
  "TargetServiceBase.ConfluentSchemaRegistry": ConfluentSchemaRegistry,
  "AuthInfoBase.secret": SecretAuthInfo,
  "AuthInfoBase.userAssignedIdentity": UserAssignedIdentityAuthInfo,
  "AuthInfoBase.systemAssignedIdentity": SystemAssignedIdentityAuthInfo,
  "AuthInfoBase.servicePrincipalSecret": ServicePrincipalSecretAuthInfo,
  "AuthInfoBase.servicePrincipalCertificate":
    ServicePrincipalCertificateAuthInfo,
  "AzureResourcePropertiesBase.KeyVault": AzureKeyVaultProperties,
  "SecretInfoBase.rawValue": ValueSecretInfo,
  "SecretInfoBase.keyVaultSecretReference": KeyVaultSecretReferenceSecretInfo,
  "SecretInfoBase.keyVaultSecretUri": KeyVaultSecretUriSecretInfo,
};
