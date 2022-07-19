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
  Workspace as WorkspaceMapper,
  WorkspaceUpdateParameters as WorkspaceUpdateParametersMapper,
  DiagnoseWorkspaceParameters as DiagnoseWorkspaceParametersMapper,
  QuotaUpdateParameters as QuotaUpdateParametersMapper,
  ComputeResource as ComputeResourceMapper,
  ClusterUpdateParameters as ClusterUpdateParametersMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
  WorkspaceConnectionPropertiesV2BasicResource as WorkspaceConnectionPropertiesV2BasicResourceMapper,
  PartialMinimalTrackedResourceWithIdentity as PartialMinimalTrackedResourceWithIdentityMapper,
  BatchEndpoint as BatchEndpointMapper,
  PartialBatchDeploymentPartialMinimalTrackedResourceWithProperties as PartialBatchDeploymentPartialMinimalTrackedResourceWithPropertiesMapper,
  BatchDeployment as BatchDeploymentMapper,
  CodeContainer as CodeContainerMapper,
  CodeVersion as CodeVersionMapper,
  ComponentContainer as ComponentContainerMapper,
  ComponentVersion as ComponentVersionMapper,
  DataContainer as DataContainerMapper,
  DataVersionBase as DataVersionBaseMapper,
  Datastore as DatastoreMapper,
  EnvironmentContainer as EnvironmentContainerMapper,
  EnvironmentVersion as EnvironmentVersionMapper,
  JobBase as JobBaseMapper,
  LabelingJob as LabelingJobMapper,
  ExportSummary as ExportSummaryMapper,
  ModelContainer as ModelContainerMapper,
  ModelVersion as ModelVersionMapper,
  OnlineEndpoint as OnlineEndpointMapper,
  RegenerateEndpointKeysRequest as RegenerateEndpointKeysRequestMapper,
  PartialMinimalTrackedResourceWithSku as PartialMinimalTrackedResourceWithSkuMapper,
  OnlineDeployment as OnlineDeploymentMapper,
  DeploymentLogsRequest as DeploymentLogsRequestMapper,
  Schedule as ScheduleMapper
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
    defaultValue: "2022-06-01-preview",
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
      MinLength: 1
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

export const workspaceName: OperationURLParameter = {
  parameterPath: "workspaceName",
  mapper: {
    serializedName: "workspaceName",
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

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: WorkspaceMapper
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: WorkspaceUpdateParametersMapper
};

export const skip: OperationQueryParameter = {
  parameterPath: ["options", "skip"],
  mapper: {
    serializedName: "$skip",
    type: {
      name: "String"
    }
  }
};

export const parameters2: OperationParameter = {
  parameterPath: ["options", "parameters"],
  mapper: DiagnoseWorkspaceParametersMapper
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

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: QuotaUpdateParametersMapper
};

export const computeName: OperationURLParameter = {
  parameterPath: "computeName",
  mapper: {
    serializedName: "computeName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: ComputeResourceMapper
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: ClusterUpdateParametersMapper
};

export const underlyingResourceAction: OperationQueryParameter = {
  parameterPath: "underlyingResourceAction",
  mapper: {
    serializedName: "underlyingResourceAction",
    required: true,
    type: {
      name: "String"
    }
  }
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

export const properties: OperationParameter = {
  parameterPath: "properties",
  mapper: PrivateEndpointConnectionMapper
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: WorkspaceConnectionPropertiesV2BasicResourceMapper
};

export const connectionName: OperationURLParameter = {
  parameterPath: "connectionName",
  mapper: {
    serializedName: "connectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const target: OperationQueryParameter = {
  parameterPath: ["options", "target"],
  mapper: {
    serializedName: "target",
    type: {
      name: "String"
    }
  }
};

export const category: OperationQueryParameter = {
  parameterPath: ["options", "category"],
  mapper: {
    serializedName: "category",
    type: {
      name: "String"
    }
  }
};

export const count: OperationQueryParameter = {
  parameterPath: ["options", "count"],
  mapper: {
    serializedName: "count",
    type: {
      name: "Number"
    }
  }
};

export const endpointName: OperationURLParameter = {
  parameterPath: "endpointName",
  mapper: {
    serializedName: "endpointName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: PartialMinimalTrackedResourceWithIdentityMapper
};

export const endpointName1: OperationURLParameter = {
  parameterPath: "endpointName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9][a-zA-Z0-9\\-_]{0,254}$")
    },
    serializedName: "endpointName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body1: OperationParameter = {
  parameterPath: "body",
  mapper: BatchEndpointMapper
};

export const orderBy: OperationQueryParameter = {
  parameterPath: ["options", "orderBy"],
  mapper: {
    serializedName: "$orderBy",
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

export const deploymentName: OperationURLParameter = {
  parameterPath: "deploymentName",
  mapper: {
    serializedName: "deploymentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body2: OperationParameter = {
  parameterPath: "body",
  mapper: PartialBatchDeploymentPartialMinimalTrackedResourceWithPropertiesMapper
};

export const deploymentName1: OperationURLParameter = {
  parameterPath: "deploymentName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9][a-zA-Z0-9\\-_]{0,254}$")
    },
    serializedName: "deploymentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body3: OperationParameter = {
  parameterPath: "body",
  mapper: BatchDeploymentMapper
};

export const name: OperationURLParameter = {
  parameterPath: "name",
  mapper: {
    serializedName: "name",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body4: OperationParameter = {
  parameterPath: "body",
  mapper: CodeContainerMapper
};

export const name1: OperationURLParameter = {
  parameterPath: "name",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9][a-zA-Z0-9\\-_]{0,254}$")
    },
    serializedName: "name",
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

export const body5: OperationParameter = {
  parameterPath: "body",
  mapper: CodeVersionMapper
};

export const listViewType: OperationQueryParameter = {
  parameterPath: ["options", "listViewType"],
  mapper: {
    serializedName: "listViewType",
    type: {
      name: "String"
    }
  }
};

export const body6: OperationParameter = {
  parameterPath: "body",
  mapper: ComponentContainerMapper
};

export const body7: OperationParameter = {
  parameterPath: "body",
  mapper: ComponentVersionMapper
};

export const body8: OperationParameter = {
  parameterPath: "body",
  mapper: DataContainerMapper
};

export const tags: OperationQueryParameter = {
  parameterPath: ["options", "tags"],
  mapper: {
    serializedName: "$tags",
    type: {
      name: "String"
    }
  }
};

export const body9: OperationParameter = {
  parameterPath: "body",
  mapper: DataVersionBaseMapper
};

export const count1: OperationQueryParameter = {
  parameterPath: ["options", "count"],
  mapper: {
    defaultValue: 30,
    serializedName: "count",
    type: {
      name: "Number"
    }
  }
};

export const isDefault: OperationQueryParameter = {
  parameterPath: ["options", "isDefault"],
  mapper: {
    serializedName: "isDefault",
    type: {
      name: "Boolean"
    }
  }
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
  collectionFormat: "CSV"
};

export const searchText: OperationQueryParameter = {
  parameterPath: ["options", "searchText"],
  mapper: {
    serializedName: "searchText",
    type: {
      name: "String"
    }
  }
};

export const orderBy1: OperationQueryParameter = {
  parameterPath: ["options", "orderBy"],
  mapper: {
    serializedName: "orderBy",
    type: {
      name: "String"
    }
  }
};

export const orderByAsc: OperationQueryParameter = {
  parameterPath: ["options", "orderByAsc"],
  mapper: {
    defaultValue: false,
    serializedName: "orderByAsc",
    type: {
      name: "Boolean"
    }
  }
};

export const body10: OperationParameter = {
  parameterPath: "body",
  mapper: DatastoreMapper
};

export const skipValidation: OperationQueryParameter = {
  parameterPath: ["options", "skipValidation"],
  mapper: {
    defaultValue: false,
    serializedName: "skipValidation",
    type: {
      name: "Boolean"
    }
  }
};

export const body11: OperationParameter = {
  parameterPath: "body",
  mapper: EnvironmentContainerMapper
};

export const body12: OperationParameter = {
  parameterPath: "body",
  mapper: EnvironmentVersionMapper
};

export const jobType: OperationQueryParameter = {
  parameterPath: ["options", "jobType"],
  mapper: {
    serializedName: "jobType",
    type: {
      name: "String"
    }
  }
};

export const tag: OperationQueryParameter = {
  parameterPath: ["options", "tag"],
  mapper: {
    serializedName: "tag",
    type: {
      name: "String"
    }
  }
};

export const scheduled: OperationQueryParameter = {
  parameterPath: ["options", "scheduled"],
  mapper: {
    serializedName: "scheduled",
    type: {
      name: "Boolean"
    }
  }
};

export const scheduleId: OperationQueryParameter = {
  parameterPath: ["options", "scheduleId"],
  mapper: {
    serializedName: "scheduleId",
    type: {
      name: "String"
    }
  }
};

export const id: OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    serializedName: "id",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const body13: OperationParameter = {
  parameterPath: "body",
  mapper: JobBaseMapper
};

export const id1: OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[a-zA-Z0-9][a-zA-Z0-9\\-_]{0,254}$")
    },
    serializedName: "id",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const includeJobInstructions: OperationQueryParameter = {
  parameterPath: ["options", "includeJobInstructions"],
  mapper: {
    defaultValue: false,
    serializedName: "includeJobInstructions",
    type: {
      name: "Boolean"
    }
  }
};

export const includeLabelCategories: OperationQueryParameter = {
  parameterPath: ["options", "includeLabelCategories"],
  mapper: {
    defaultValue: false,
    serializedName: "includeLabelCategories",
    type: {
      name: "Boolean"
    }
  }
};

export const body14: OperationParameter = {
  parameterPath: "body",
  mapper: LabelingJobMapper
};

export const body15: OperationParameter = {
  parameterPath: "body",
  mapper: ExportSummaryMapper
};

export const body16: OperationParameter = {
  parameterPath: "body",
  mapper: ModelContainerMapper
};

export const version1: OperationQueryParameter = {
  parameterPath: ["options", "version"],
  mapper: {
    serializedName: "version",
    type: {
      name: "String"
    }
  }
};

export const description: OperationQueryParameter = {
  parameterPath: ["options", "description"],
  mapper: {
    serializedName: "description",
    type: {
      name: "String"
    }
  }
};

export const offset: OperationQueryParameter = {
  parameterPath: ["options", "offset"],
  mapper: {
    serializedName: "offset",
    type: {
      name: "Number"
    }
  }
};

export const tags1: OperationQueryParameter = {
  parameterPath: ["options", "tags"],
  mapper: {
    serializedName: "tags",
    type: {
      name: "String"
    }
  }
};

export const properties1: OperationQueryParameter = {
  parameterPath: ["options", "properties"],
  mapper: {
    serializedName: "properties",
    type: {
      name: "String"
    }
  }
};

export const feed: OperationQueryParameter = {
  parameterPath: ["options", "feed"],
  mapper: {
    serializedName: "feed",
    type: {
      name: "String"
    }
  }
};

export const body17: OperationParameter = {
  parameterPath: "body",
  mapper: ModelVersionMapper
};

export const name2: OperationQueryParameter = {
  parameterPath: ["options", "name"],
  mapper: {
    serializedName: "name",
    type: {
      name: "String"
    }
  }
};

export const computeType: OperationQueryParameter = {
  parameterPath: ["options", "computeType"],
  mapper: {
    serializedName: "computeType",
    type: {
      name: "String"
    }
  }
};

export const orderBy2: OperationQueryParameter = {
  parameterPath: ["options", "orderBy"],
  mapper: {
    serializedName: "orderBy",
    type: {
      name: "String"
    }
  }
};

export const body18: OperationParameter = {
  parameterPath: "body",
  mapper: OnlineEndpointMapper
};

export const body19: OperationParameter = {
  parameterPath: "body",
  mapper: RegenerateEndpointKeysRequestMapper
};

export const body20: OperationParameter = {
  parameterPath: "body",
  mapper: PartialMinimalTrackedResourceWithSkuMapper
};

export const body21: OperationParameter = {
  parameterPath: "body",
  mapper: OnlineDeploymentMapper
};

export const body22: OperationParameter = {
  parameterPath: "body",
  mapper: DeploymentLogsRequestMapper
};

export const body23: OperationParameter = {
  parameterPath: "body",
  mapper: ScheduleMapper
};
