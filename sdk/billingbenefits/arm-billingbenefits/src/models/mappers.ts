/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

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
      }
    }
  }
};

export const AppliedScopeProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AppliedScopeProperties",
    modelProperties: {
      tenantId: {
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      },
      managementGroupId: {
        serializedName: "managementGroupId",
        type: {
          name: "String"
        }
      },
      subscriptionId: {
        serializedName: "subscriptionId",
        type: {
          name: "String"
        }
      },
      resourceGroupId: {
        serializedName: "resourceGroupId",
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

export const Price: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Price",
    modelProperties: {
      currencyCode: {
        serializedName: "currencyCode",
        type: {
          name: "String"
        }
      },
      amount: {
        serializedName: "amount",
        type: {
          name: "Number"
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
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
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

export const BillingPlanInformation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BillingPlanInformation",
    modelProperties: {
      pricingCurrencyTotal: {
        serializedName: "pricingCurrencyTotal",
        type: {
          name: "Composite",
          className: "Price"
        }
      },
      startDate: {
        serializedName: "startDate",
        type: {
          name: "Date"
        }
      },
      nextPaymentDueDate: {
        serializedName: "nextPaymentDueDate",
        type: {
          name: "Date"
        }
      },
      transactions: {
        serializedName: "transactions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PaymentDetail"
            }
          }
        }
      }
    }
  }
};

export const PaymentDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PaymentDetail",
    modelProperties: {
      dueDate: {
        serializedName: "dueDate",
        type: {
          name: "Date"
        }
      },
      paymentDate: {
        serializedName: "paymentDate",
        type: {
          name: "Date"
        }
      },
      pricingCurrencyTotal: {
        serializedName: "pricingCurrencyTotal",
        type: {
          name: "Composite",
          className: "Price"
        }
      },
      billingCurrencyTotal: {
        serializedName: "billingCurrencyTotal",
        type: {
          name: "Composite",
          className: "Price"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      extendedStatusInfo: {
        serializedName: "extendedStatusInfo",
        type: {
          name: "Composite",
          className: "ExtendedStatusInfo"
        }
      },
      billingAccount: {
        serializedName: "billingAccount",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExtendedStatusInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExtendedStatusInfo",
    modelProperties: {
      statusCode: {
        serializedName: "statusCode",
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

export const RoleAssignmentEntity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RoleAssignmentEntity",
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
      principalId: {
        serializedName: "properties.principalId",
        type: {
          name: "String"
        }
      },
      roleDefinitionId: {
        serializedName: "properties.roleDefinitionId",
        type: {
          name: "String"
        }
      },
      scope: {
        serializedName: "properties.scope",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SavingsPlanOrderModelList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SavingsPlanOrderModelList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SavingsPlanOrderModel"
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

export const SavingsPlanModelList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SavingsPlanModelList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SavingsPlanModel"
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

export const Utilization: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Utilization",
    modelProperties: {
      trend: {
        serializedName: "trend",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      aggregates: {
        serializedName: "aggregates",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "UtilizationAggregates"
            }
          }
        }
      }
    }
  }
};

export const UtilizationAggregates: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UtilizationAggregates",
    modelProperties: {
      grain: {
        serializedName: "grain",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      grainUnit: {
        serializedName: "grainUnit",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      valueUnit: {
        serializedName: "valueUnit",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SavingsPlanModelPropertiesRenewProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SavingsPlanModelPropertiesRenewProperties",
    modelProperties: {
      purchaseProperties: {
        serializedName: "purchaseProperties",
        type: {
          name: "Composite",
          className: "PurchaseRequest"
        }
      }
    }
  }
};

export const PurchaseRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PurchaseRequest",
    modelProperties: {
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      displayName: {
        serializedName: "properties.displayName",
        type: {
          name: "String"
        }
      },
      billingScopeId: {
        serializedName: "properties.billingScopeId",
        type: {
          name: "String"
        }
      },
      term: {
        serializedName: "properties.term",
        type: {
          name: "String"
        }
      },
      billingPlan: {
        serializedName: "properties.billingPlan",
        type: {
          name: "String"
        }
      },
      appliedScopeType: {
        serializedName: "properties.appliedScopeType",
        type: {
          name: "String"
        }
      },
      commitment: {
        serializedName: "properties.commitment",
        type: {
          name: "Composite",
          className: "Commitment"
        }
      },
      effectiveDateTime: {
        serializedName: "properties.effectiveDateTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      renew: {
        defaultValue: false,
        serializedName: "properties.renew",
        type: {
          name: "Boolean"
        }
      },
      appliedScopeProperties: {
        serializedName: "properties.appliedScopeProperties",
        type: {
          name: "Composite",
          className: "AppliedScopeProperties"
        }
      }
    }
  }
};

export const SavingsPlanModelListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SavingsPlanModelListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SavingsPlanModel"
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
      },
      additionalProperties: {
        serializedName: "additionalProperties",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SavingsPlanSummary"
            }
          }
        }
      }
    }
  }
};

export const SavingsPlanSummary: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SavingsPlanSummary",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Composite",
          className: "SavingsPlanSummaryCount"
        }
      }
    }
  }
};

export const SavingsPlanSummaryCount: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SavingsPlanSummaryCount",
    modelProperties: {
      succeededCount: {
        serializedName: "succeededCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      failedCount: {
        serializedName: "failedCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      expiringCount: {
        serializedName: "expiringCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      expiredCount: {
        serializedName: "expiredCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      pendingCount: {
        serializedName: "pendingCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      cancelledCount: {
        serializedName: "cancelledCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      processingCount: {
        serializedName: "processingCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      noBenefitCount: {
        serializedName: "noBenefitCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      warningCount: {
        serializedName: "warningCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SavingsPlanUpdateRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SavingsPlanUpdateRequest",
    modelProperties: {
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "SavingsPlanUpdateRequestProperties"
        }
      }
    }
  }
};

export const SavingsPlanUpdateRequestProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SavingsPlanUpdateRequestProperties",
    modelProperties: {
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      appliedScopeType: {
        serializedName: "appliedScopeType",
        type: {
          name: "String"
        }
      },
      appliedScopeProperties: {
        serializedName: "appliedScopeProperties",
        type: {
          name: "Composite",
          className: "AppliedScopeProperties"
        }
      },
      renew: {
        defaultValue: false,
        serializedName: "renew",
        type: {
          name: "Boolean"
        }
      },
      renewProperties: {
        serializedName: "renewProperties",
        type: {
          name: "Composite",
          className: "RenewProperties"
        }
      }
    }
  }
};

export const RenewProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RenewProperties",
    modelProperties: {
      purchaseProperties: {
        serializedName: "purchaseProperties",
        type: {
          name: "Composite",
          className: "PurchaseRequest"
        }
      }
    }
  }
};

export const SavingsPlanUpdateValidateRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SavingsPlanUpdateValidateRequest",
    modelProperties: {
      benefits: {
        serializedName: "benefits",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SavingsPlanUpdateRequestProperties"
            }
          }
        }
      }
    }
  }
};

export const SavingsPlanValidateResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SavingsPlanValidateResponse",
    modelProperties: {
      benefits: {
        serializedName: "benefits",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SavingsPlanValidResponseProperty"
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

export const SavingsPlanValidResponseProperty: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SavingsPlanValidResponseProperty",
    modelProperties: {
      valid: {
        serializedName: "valid",
        type: {
          name: "Boolean"
        }
      },
      reasonCode: {
        serializedName: "reasonCode",
        type: {
          name: "String"
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

export const SavingsPlanPurchaseValidateRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SavingsPlanPurchaseValidateRequest",
    modelProperties: {
      benefits: {
        serializedName: "benefits",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SavingsPlanOrderAliasModel"
            }
          }
        }
      }
    }
  }
};

export const ReservationOrderAliasRequestPropertiesReservedResourceProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "ReservationOrderAliasRequestPropertiesReservedResourceProperties",
    modelProperties: {
      instanceFlexibility: {
        serializedName: "instanceFlexibility",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ReservationOrderAliasResponsePropertiesReservedResourceProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "ReservationOrderAliasResponsePropertiesReservedResourceProperties",
    modelProperties: {
      instanceFlexibility: {
        serializedName: "instanceFlexibility",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationResultError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationResultError",
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

export const BillingInformation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BillingInformation",
    modelProperties: {
      billingCurrencyTotalPaidAmount: {
        serializedName: "billingCurrencyTotalPaidAmount",
        type: {
          name: "Composite",
          className: "Price"
        }
      },
      billingCurrencyProratedAmount: {
        serializedName: "billingCurrencyProratedAmount",
        type: {
          name: "Composite",
          className: "Price"
        }
      },
      billingCurrencyRemainingCommitmentAmount: {
        serializedName: "billingCurrencyRemainingCommitmentAmount",
        type: {
          name: "Composite",
          className: "Price"
        }
      }
    }
  }
};

export const Commitment: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Commitment",
    modelProperties: {
      ...Price.type.modelProperties,
      grain: {
        serializedName: "grain",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PricingCurrencyTotal: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PricingCurrencyTotal",
    modelProperties: {
      ...Price.type.modelProperties,
      duration: {
        serializedName: "duration",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SavingsPlanOrderAliasModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SavingsPlanOrderAliasModel",
    modelProperties: {
      ...Resource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      kind: {
        serializedName: "kind",
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
      savingsPlanOrderId: {
        serializedName: "properties.savingsPlanOrderId",
        readOnly: true,
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
      billingScopeId: {
        serializedName: "properties.billingScopeId",
        type: {
          name: "String"
        }
      },
      term: {
        serializedName: "properties.term",
        type: {
          name: "String"
        }
      },
      billingPlan: {
        serializedName: "properties.billingPlan",
        type: {
          name: "String"
        }
      },
      appliedScopeType: {
        serializedName: "properties.appliedScopeType",
        type: {
          name: "String"
        }
      },
      appliedScopeProperties: {
        serializedName: "properties.appliedScopeProperties",
        type: {
          name: "Composite",
          className: "AppliedScopeProperties"
        }
      },
      commitment: {
        serializedName: "properties.commitment",
        type: {
          name: "Composite",
          className: "Commitment"
        }
      }
    }
  }
};

export const SavingsPlanOrderModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SavingsPlanOrderModel",
    modelProperties: {
      ...Resource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      displayName: {
        serializedName: "properties.displayName",
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
      billingScopeId: {
        serializedName: "properties.billingScopeId",
        type: {
          name: "String"
        }
      },
      billingProfileId: {
        serializedName: "properties.billingProfileId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      customerId: {
        serializedName: "properties.customerId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      billingAccountId: {
        serializedName: "properties.billingAccountId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      term: {
        serializedName: "properties.term",
        type: {
          name: "String"
        }
      },
      billingPlan: {
        serializedName: "properties.billingPlan",
        type: {
          name: "String"
        }
      },
      expiryDateTime: {
        serializedName: "properties.expiryDateTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      benefitStartTime: {
        serializedName: "properties.benefitStartTime",
        type: {
          name: "DateTime"
        }
      },
      planInformation: {
        serializedName: "properties.planInformation",
        type: {
          name: "Composite",
          className: "BillingPlanInformation"
        }
      },
      savingsPlans: {
        serializedName: "properties.savingsPlans",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      extendedStatusInfo: {
        serializedName: "properties.extendedStatusInfo",
        type: {
          name: "Composite",
          className: "ExtendedStatusInfo"
        }
      }
    }
  }
};

export const SavingsPlanModel: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SavingsPlanModel",
    modelProperties: {
      ...Resource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      displayName: {
        serializedName: "properties.displayName",
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
      displayProvisioningState: {
        serializedName: "properties.displayProvisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      billingScopeId: {
        serializedName: "properties.billingScopeId",
        type: {
          name: "String"
        }
      },
      billingProfileId: {
        serializedName: "properties.billingProfileId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      customerId: {
        serializedName: "properties.customerId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      billingAccountId: {
        serializedName: "properties.billingAccountId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      term: {
        serializedName: "properties.term",
        type: {
          name: "String"
        }
      },
      billingPlan: {
        serializedName: "properties.billingPlan",
        type: {
          name: "String"
        }
      },
      appliedScopeType: {
        serializedName: "properties.appliedScopeType",
        type: {
          name: "String"
        }
      },
      userFriendlyAppliedScopeType: {
        serializedName: "properties.userFriendlyAppliedScopeType",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      appliedScopeProperties: {
        serializedName: "properties.appliedScopeProperties",
        type: {
          name: "Composite",
          className: "AppliedScopeProperties"
        }
      },
      commitment: {
        serializedName: "properties.commitment",
        type: {
          name: "Composite",
          className: "Commitment"
        }
      },
      effectiveDateTime: {
        serializedName: "properties.effectiveDateTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      expiryDateTime: {
        serializedName: "properties.expiryDateTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      purchaseDateTime: {
        serializedName: "properties.purchaseDateTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      benefitStartTime: {
        serializedName: "properties.benefitStartTime",
        type: {
          name: "DateTime"
        }
      },
      extendedStatusInfo: {
        serializedName: "properties.extendedStatusInfo",
        type: {
          name: "Composite",
          className: "ExtendedStatusInfo"
        }
      },
      renew: {
        defaultValue: false,
        serializedName: "properties.renew",
        type: {
          name: "Boolean"
        }
      },
      utilization: {
        serializedName: "properties.utilization",
        type: {
          name: "Composite",
          className: "Utilization"
        }
      },
      renewProperties: {
        serializedName: "properties.renewProperties",
        type: {
          name: "Composite",
          className: "SavingsPlanModelPropertiesRenewProperties"
        }
      }
    }
  }
};

export const ReservationOrderAliasRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ReservationOrderAliasRequest",
    modelProperties: {
      ...Resource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      location: {
        serializedName: "location",
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
      billingScopeId: {
        serializedName: "properties.billingScopeId",
        type: {
          name: "String"
        }
      },
      term: {
        serializedName: "properties.term",
        type: {
          name: "String"
        }
      },
      billingPlan: {
        serializedName: "properties.billingPlan",
        type: {
          name: "String"
        }
      },
      appliedScopeType: {
        serializedName: "properties.appliedScopeType",
        type: {
          name: "String"
        }
      },
      appliedScopeProperties: {
        serializedName: "properties.appliedScopeProperties",
        type: {
          name: "Composite",
          className: "AppliedScopeProperties"
        }
      },
      quantity: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "properties.quantity",
        type: {
          name: "Number"
        }
      },
      renew: {
        defaultValue: false,
        serializedName: "properties.renew",
        type: {
          name: "Boolean"
        }
      },
      reservedResourceType: {
        serializedName: "properties.reservedResourceType",
        type: {
          name: "String"
        }
      },
      reviewDateTime: {
        serializedName: "properties.reviewDateTime",
        type: {
          name: "DateTime"
        }
      },
      reservedResourceProperties: {
        serializedName: "properties.reservedResourceProperties",
        type: {
          name: "Composite",
          className:
            "ReservationOrderAliasRequestPropertiesReservedResourceProperties"
        }
      }
    }
  }
};

export const ReservationOrderAliasResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ReservationOrderAliasResponse",
    modelProperties: {
      ...Resource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      location: {
        serializedName: "location",
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
      reservationOrderId: {
        serializedName: "properties.reservationOrderId",
        readOnly: true,
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
      billingScopeId: {
        serializedName: "properties.billingScopeId",
        type: {
          name: "String"
        }
      },
      term: {
        serializedName: "properties.term",
        type: {
          name: "String"
        }
      },
      billingPlan: {
        serializedName: "properties.billingPlan",
        type: {
          name: "String"
        }
      },
      appliedScopeType: {
        serializedName: "properties.appliedScopeType",
        type: {
          name: "String"
        }
      },
      appliedScopeProperties: {
        serializedName: "properties.appliedScopeProperties",
        type: {
          name: "Composite",
          className: "AppliedScopeProperties"
        }
      },
      quantity: {
        serializedName: "properties.quantity",
        type: {
          name: "Number"
        }
      },
      renew: {
        defaultValue: false,
        serializedName: "properties.renew",
        type: {
          name: "Boolean"
        }
      },
      reservedResourceType: {
        serializedName: "properties.reservedResourceType",
        type: {
          name: "String"
        }
      },
      reviewDateTime: {
        serializedName: "properties.reviewDateTime",
        type: {
          name: "DateTime"
        }
      },
      reservedResourceProperties: {
        serializedName: "properties.reservedResourceProperties",
        type: {
          name: "Composite",
          className:
            "ReservationOrderAliasResponsePropertiesReservedResourceProperties"
        }
      }
    }
  }
};

export const SavingsPlanOrderAliasCreateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SavingsPlanOrderAliasCreateHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SavingsPlanUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SavingsPlanUpdateHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ReservationOrderAliasCreateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ReservationOrderAliasCreateHeaders",
    modelProperties: {
      azureAsyncOperation: {
        serializedName: "azure-asyncoperation",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "Number"
        }
      }
    }
  }
};
