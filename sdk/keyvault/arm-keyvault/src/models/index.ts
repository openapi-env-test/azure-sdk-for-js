/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * SKU details
 */
export interface Sku {
  /**
   * SKU name to specify whether the key vault is a standard vault or a premium vault. Possible
   * values include: 'standard', 'premium'
   */
  name: SkuName;
}

/**
 * Permissions the identity has for keys, secrets, certificates and storage.
 */
export interface Permissions {
  /**
   * Permissions to keys
   */
  keys?: KeyPermissions[];
  /**
   * Permissions to secrets
   */
  secrets?: SecretPermissions[];
  /**
   * Permissions to certificates
   */
  certificates?: CertificatePermissions[];
  /**
   * Permissions to storage accounts
   */
  storage?: StoragePermissions[];
}

/**
 * An identity that have access to the key vault. All identities in the array must use the same
 * tenant ID as the key vault's tenant ID.
 */
export interface AccessPolicyEntry {
  /**
   * The Azure Active Directory tenant ID that should be used for authenticating requests to the
   * key vault.
   */
  tenantId: string;
  /**
   * The object ID of a user, service principal or security group in the Azure Active Directory
   * tenant for the vault. The object ID must be unique for the list of access policies.
   */
  objectId: string;
  /**
   * Application ID of the client making request on behalf of a principal
   */
  applicationId?: string;
  /**
   * Permissions the identity has for keys, secrets and certificates.
   */
  permissions: Permissions;
}

/**
 * A rule governing the accessibility of a vault from a specific ip address or ip range.
 */
export interface IPRule {
  /**
   * An IPv4 address range in CIDR notation, such as '124.56.78.91' (simple IP address) or
   * '124.56.78.0/24' (all addresses that start with 124.56.78).
   */
  value: string;
}

/**
 * A rule governing the accessibility of a vault from a specific virtual network.
 */
export interface VirtualNetworkRule {
  /**
   * Full resource id of a vnet subnet, such as
   * '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1'.
   */
  id: string;
}

/**
 * A set of rules governing the network accessibility of a vault.
 */
export interface NetworkRuleSet {
  /**
   * Tells what traffic can bypass network rules. This can be 'AzureServices' or 'None'.  If not
   * specified the default is 'AzureServices'. Possible values include: 'AzureServices', 'None'
   */
  bypass?: NetworkRuleBypassOptions;
  /**
   * The default action when no rule from ipRules and from virtualNetworkRules match. This is only
   * used after the bypass property has been evaluated. Possible values include: 'Allow', 'Deny'
   */
  defaultAction?: NetworkRuleAction;
  /**
   * The list of IP address rules.
   */
  ipRules?: IPRule[];
  /**
   * The list of virtual network rules.
   */
  virtualNetworkRules?: VirtualNetworkRule[];
}

/**
 * Private endpoint object properties.
 */
export interface PrivateEndpoint {
  /**
   * Full identifier of the private endpoint resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
}

/**
 * An object that represents the approval state of the private link connection.
 */
export interface PrivateLinkServiceConnectionState {
  /**
   * Indicates whether the connection has been approved, rejected or removed by the key vault
   * owner. Possible values include: 'Pending', 'Approved', 'Rejected', 'Disconnected'
   */
  status?: PrivateEndpointServiceConnectionStatus;
  /**
   * The reason for approval or rejection.
   */
  description?: string;
  /**
   * A message indicating if changes on the service provider require any updates on the consumer.
   */
  actionRequired?: string;
}

/**
 * Private endpoint connection item.
 */
export interface PrivateEndpointConnectionItem {
  /**
   * Properties of the private endpoint object.
   */
  privateEndpoint?: PrivateEndpoint;
  /**
   * Approval state of the private link connection.
   */
  privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
  /**
   * Provisioning state of the private endpoint connection. Possible values include: 'Succeeded',
   * 'Creating', 'Updating', 'Deleting', 'Failed', 'Disconnected'
   */
  provisioningState?: PrivateEndpointConnectionProvisioningState;
}

/**
 * Properties of the vault
 */
export interface VaultProperties {
  /**
   * The Azure Active Directory tenant ID that should be used for authenticating requests to the
   * key vault.
   */
  tenantId: string;
  /**
   * SKU details
   */
  sku: Sku;
  /**
   * An array of 0 to 16 identities that have access to the key vault. All identities in the array
   * must use the same tenant ID as the key vault's tenant ID. When `createMode` is set to
   * `recover`, access policies are not required. Otherwise, access policies are required.
   */
  accessPolicies?: AccessPolicyEntry[];
  /**
   * The URI of the vault for performing operations on keys and secrets.
   */
  vaultUri?: string;
  /**
   * Property to specify whether Azure Virtual Machines are permitted to retrieve certificates
   * stored as secrets from the key vault.
   */
  enabledForDeployment?: boolean;
  /**
   * Property to specify whether Azure Disk Encryption is permitted to retrieve secrets from the
   * vault and unwrap keys.
   */
  enabledForDiskEncryption?: boolean;
  /**
   * Property to specify whether Azure Resource Manager is permitted to retrieve secrets from the
   * key vault.
   */
  enabledForTemplateDeployment?: boolean;
  /**
   * Property to specify whether the 'soft delete' functionality is enabled for this key vault. If
   * it's not set to any value(true or false) when creating new key vault, it will be set to true
   * by default. Once set to true, it cannot be reverted to false. Default value: true.
   */
  enableSoftDelete?: boolean;
  /**
   * softDelete data retention days. It accepts >=7 and <=90. Default value: 90.
   */
  softDeleteRetentionInDays?: number;
  /**
   * Property that controls how data actions are authorized. When true, the key vault will use Role
   * Based Access Control (RBAC) for authorization of data actions, and the access policies
   * specified in vault properties will be  ignored (warning: this is a preview feature). When
   * false, the key vault will use the access policies specified in vault properties, and any
   * policy stored on Azure Resource Manager will be ignored. If null or not specified, the vault
   * is created with the default value of false. Note that management actions are always authorized
   * with RBAC. Default value: false.
   */
  enableRbacAuthorization?: boolean;
  /**
   * The vault's create mode to indicate whether the vault need to be recovered or not. Possible
   * values include: 'recover', 'default'
   */
  createMode?: CreateMode;
  /**
   * Property specifying whether protection against purge is enabled for this vault. Setting this
   * property to true activates protection against purge for this vault and its content - only the
   * Key Vault service may initiate a hard, irrecoverable deletion. The setting is effective only
   * if soft delete is also enabled. Enabling this functionality is irreversible - that is, the
   * property does not accept false as its value.
   */
  enablePurgeProtection?: boolean;
  /**
   * Rules governing the accessibility of the key vault from specific network locations.
   */
  networkAcls?: NetworkRuleSet;
  /**
   * List of private endpoint connections associated with the key vault.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly privateEndpointConnections?: PrivateEndpointConnectionItem[];
}

/**
 * Properties of the vault
 */
export interface VaultPatchProperties {
  /**
   * The Azure Active Directory tenant ID that should be used for authenticating requests to the
   * key vault.
   */
  tenantId?: string;
  /**
   * SKU details
   */
  sku?: Sku;
  /**
   * An array of 0 to 16 identities that have access to the key vault. All identities in the array
   * must use the same tenant ID as the key vault's tenant ID.
   */
  accessPolicies?: AccessPolicyEntry[];
  /**
   * Property to specify whether Azure Virtual Machines are permitted to retrieve certificates
   * stored as secrets from the key vault.
   */
  enabledForDeployment?: boolean;
  /**
   * Property to specify whether Azure Disk Encryption is permitted to retrieve secrets from the
   * vault and unwrap keys.
   */
  enabledForDiskEncryption?: boolean;
  /**
   * Property to specify whether Azure Resource Manager is permitted to retrieve secrets from the
   * key vault.
   */
  enabledForTemplateDeployment?: boolean;
  /**
   * Property to specify whether the 'soft delete' functionality is enabled for this key vault.
   * Once set to true, it cannot be reverted to false.
   */
  enableSoftDelete?: boolean;
  /**
   * Property that controls how data actions are authorized. When true, the key vault will use Role
   * Based Access Control (RBAC) for authorization of data actions, and the access policies
   * specified in vault properties will be  ignored (warning: this is a preview feature). When
   * false, the key vault will use the access policies specified in vault properties, and any
   * policy stored on Azure Resource Manager will be ignored. If null or not specified, the value
   * of this property will not change.
   */
  enableRbacAuthorization?: boolean;
  /**
   * softDelete data retention days. It accepts >=7 and <=90.
   */
  softDeleteRetentionInDays?: number;
  /**
   * The vault's create mode to indicate whether the vault need to be recovered or not. Possible
   * values include: 'recover', 'default'
   */
  createMode?: CreateMode;
  /**
   * Property specifying whether protection against purge is enabled for this vault. Setting this
   * property to true activates protection against purge for this vault and its content - only the
   * Key Vault service may initiate a hard, irrecoverable deletion. The setting is effective only
   * if soft delete is also enabled. Enabling this functionality is irreversible - that is, the
   * property does not accept false as its value.
   */
  enablePurgeProtection?: boolean;
  /**
   * A collection of rules governing the accessibility of the vault from specific network
   * locations.
   */
  networkAcls?: NetworkRuleSet;
}

/**
 * Properties of the vault access policy
 */
export interface VaultAccessPolicyProperties {
  /**
   * An array of 0 to 16 identities that have access to the key vault. All identities in the array
   * must use the same tenant ID as the key vault's tenant ID.
   */
  accessPolicies: AccessPolicyEntry[];
}

/**
 * Properties of the deleted vault.
 */
export interface DeletedVaultProperties {
  /**
   * The resource id of the original vault.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly vaultId?: string;
  /**
   * The location of the original vault.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly location?: string;
  /**
   * The deleted date.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly deletionDate?: Date;
  /**
   * The scheduled purged date.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly scheduledPurgeDate?: Date;
  /**
   * Tags of the original vault.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tags?: { [propertyName: string]: string };
}

/**
 * Parameters for creating or updating a vault
 */
export interface VaultCreateOrUpdateParameters extends BaseResource {
  /**
   * The supported Azure location where the key vault should be created.
   */
  location: string;
  /**
   * The tags that will be assigned to the key vault.
   */
  tags?: { [propertyName: string]: string };
  /**
   * Properties of the vault
   */
  properties: VaultProperties;
}

/**
 * Parameters for creating or updating a vault
 */
export interface VaultPatchParameters extends BaseResource {
  /**
   * The tags that will be assigned to the key vault.
   */
  tags?: { [propertyName: string]: string };
  /**
   * Properties of the vault
   */
  properties?: VaultPatchProperties;
}

/**
 * Parameters for updating the access policy in a vault
 */
export interface VaultAccessPolicyParameters extends BaseResource {
  /**
   * The resource id of the access policy.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The resource name of the access policy.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The resource name of the access policy.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * The resource type of the access policy.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly location?: string;
  /**
   * Properties of the access policy
   */
  properties: VaultAccessPolicyProperties;
}

/**
 * Resource information with extended details.
 */
export interface Vault extends BaseResource {
  /**
   * Fully qualified identifier of the key vault resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Name of the key vault resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Resource type of the key vault resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * Azure location of the key vault resource.
   */
  location?: string;
  /**
   * Tags assigned to the key vault resource.
   */
  tags?: { [propertyName: string]: string };
  /**
   * Properties of the vault
   */
  properties: VaultProperties;
}

/**
 * Deleted vault information with extended details.
 */
export interface DeletedVault {
  /**
   * The resource ID for the deleted key vault.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The name of the key vault.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The resource type of the key vault.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * Properties of the vault
   */
  properties?: DeletedVaultProperties;
}

/**
 * Key Vault resource
 */
export interface Resource extends BaseResource {
  /**
   * Fully qualified identifier of the key vault resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Name of the key vault resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Resource type of the key vault resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * Azure location of the key vault resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly location?: string;
  /**
   * Tags assigned to the key vault resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tags?: { [propertyName: string]: string };
}

/**
 * The parameters used to check the availability of the vault name.
 */
export interface VaultCheckNameAvailabilityParameters {
  /**
   * The vault name.
   */
  name: string;
}

/**
 * The CheckNameAvailability operation response.
 */
export interface CheckNameAvailabilityResult {
  /**
   * A boolean value that indicates whether the name is available for you to use. If true, the name
   * is available. If false, the name has already been taken or is invalid and cannot be used.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nameAvailable?: boolean;
  /**
   * The reason that a vault name could not be used. The Reason element is only returned if
   * NameAvailable is false. Possible values include: 'AccountNameInvalid', 'AlreadyExists'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly reason?: Reason;
  /**
   * An error message explaining the Reason value in more detail.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly message?: string;
}

/**
 * Private endpoint connection resource.
 */
export interface PrivateEndpointConnection extends BaseResource {
  /**
   * Properties of the private endpoint object.
   */
  privateEndpoint?: PrivateEndpoint;
  /**
   * Approval state of the private link connection.
   */
  privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
  /**
   * Provisioning state of the private endpoint connection. Possible values include: 'Succeeded',
   * 'Creating', 'Updating', 'Deleting', 'Failed', 'Disconnected'
   */
  provisioningState?: PrivateEndpointConnectionProvisioningState;
}

/**
 * A private link resource
 */
export interface PrivateLinkResource extends Resource {
  /**
   * Group identifier of private link resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly groupId?: string;
  /**
   * Required member names of private link resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly requiredMembers?: string[];
  /**
   * Required DNS zone names of the the private link resource.
   */
  requiredZoneNames?: string[];
}

/**
 * A list of private link resources
 */
export interface PrivateLinkResourceListResult {
  /**
   * Array of private link resources
   */
  value?: PrivateLinkResource[];
}

/**
 * Display metadata associated with the operation.
 */
export interface OperationDisplay {
  /**
   * Service provider: Microsoft Key Vault.
   */
  provider?: string;
  /**
   * Resource on which the operation is performed etc.
   */
  resource?: string;
  /**
   * Type of operation: get, read, delete, etc.
   */
  operation?: string;
  /**
   * Description of operation.
   */
  description?: string;
}

/**
 * Log specification of operation.
 */
export interface LogSpecification {
  /**
   * Name of log specification.
   */
  name?: string;
  /**
   * Display name of log specification.
   */
  displayName?: string;
  /**
   * Blob duration of specification.
   */
  blobDuration?: string;
}

/**
 * One property of operation, include log specifications.
 */
export interface ServiceSpecification {
  /**
   * Log specifications of operation.
   */
  logSpecifications?: LogSpecification[];
}

/**
 * Key Vault REST API operation definition.
 */
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{operation}
   */
  name?: string;
  /**
   * Display metadata associated with the operation.
   */
  display?: OperationDisplay;
  /**
   * The origin of operations.
   */
  origin?: string;
  /**
   * One property of operation, include metric specifications.
   */
  serviceSpecification?: ServiceSpecification;
}

/**
 * Optional Parameters.
 */
export interface VaultsListByResourceGroupOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Maximum number of results to return.
   */
  top?: number;
}

/**
 * Optional Parameters.
 */
export interface VaultsListBySubscriptionOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Maximum number of results to return.
   */
  top?: number;
}

/**
 * Optional Parameters.
 */
export interface VaultsListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Maximum number of results to return.
   */
  top?: number;
}

/**
 * An interface representing KeyVaultManagementClientOptions.
 */
export interface KeyVaultManagementClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * Defines headers for Put operation.
 */
export interface PrivateEndpointConnectionsPutHeaders {
  /**
   * (specified only if operation does not finish synchronously) The recommended number of seconds
   * to wait before calling the URI specified in Azure-AsyncOperation.
   */
  retryAfter: number;
  /**
   * (specified only if operation does not finish synchronously) The URI to poll for completion
   * status. The response of this URI may be synchronous or asynchronous.
   */
  azureAsyncOperation: string;
}

/**
 * Defines headers for Delete operation.
 */
export interface PrivateEndpointConnectionsDeleteHeaders {
  /**
   * The recommended number of seconds to wait before calling the URI specified in the location
   * header.
   */
  retryAfter: number;
  /**
   * The URI to poll for completion status.
   */
  locationHeader: string;
}

/**
 * @interface
 * List of vaults
 * @extends Array<Vault>
 */
export interface VaultListResult extends Array<Vault> {
  /**
   * The URL to get the next set of vaults.
   */
  nextLink?: string;
}

/**
 * @interface
 * List of vaults
 * @extends Array<DeletedVault>
 */
export interface DeletedVaultListResult extends Array<DeletedVault> {
  /**
   * The URL to get the next set of deleted vaults.
   */
  nextLink?: string;
}

/**
 * @interface
 * List of vault resources.
 * @extends Array<Resource>
 */
export interface ResourceListResult extends Array<Resource> {
  /**
   * The URL to get the next set of vault resources.
   */
  nextLink?: string;
}

/**
 * @interface
 * Result of the request to list Storage operations. It contains a list of operations and a URL
 * link to get the next set of results.
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
  /**
   * The URL to get the next set of operations.
   */
  nextLink?: string;
}

/**
 * Defines values for SkuName.
 * Possible values include: 'standard', 'premium'
 * @readonly
 * @enum {string}
 */
export type SkuName = 'standard' | 'premium';

/**
 * Defines values for KeyPermissions.
 * Possible values include: 'encrypt', 'decrypt', 'wrapKey', 'unwrapKey', 'sign', 'verify', 'get',
 * 'list', 'create', 'update', 'import', 'delete', 'backup', 'restore', 'recover', 'purge'
 * @readonly
 * @enum {string}
 */
export type KeyPermissions = 'encrypt' | 'decrypt' | 'wrapKey' | 'unwrapKey' | 'sign' | 'verify' | 'get' | 'list' | 'create' | 'update' | 'import' | 'delete' | 'backup' | 'restore' | 'recover' | 'purge';

/**
 * Defines values for SecretPermissions.
 * Possible values include: 'get', 'list', 'set', 'delete', 'backup', 'restore', 'recover', 'purge'
 * @readonly
 * @enum {string}
 */
export type SecretPermissions = 'get' | 'list' | 'set' | 'delete' | 'backup' | 'restore' | 'recover' | 'purge';

/**
 * Defines values for CertificatePermissions.
 * Possible values include: 'get', 'list', 'delete', 'create', 'import', 'update',
 * 'managecontacts', 'getissuers', 'listissuers', 'setissuers', 'deleteissuers', 'manageissuers',
 * 'recover', 'purge', 'backup', 'restore'
 * @readonly
 * @enum {string}
 */
export type CertificatePermissions = 'get' | 'list' | 'delete' | 'create' | 'import' | 'update' | 'managecontacts' | 'getissuers' | 'listissuers' | 'setissuers' | 'deleteissuers' | 'manageissuers' | 'recover' | 'purge' | 'backup' | 'restore';

/**
 * Defines values for StoragePermissions.
 * Possible values include: 'get', 'list', 'delete', 'set', 'update', 'regeneratekey', 'recover',
 * 'purge', 'backup', 'restore', 'setsas', 'listsas', 'getsas', 'deletesas'
 * @readonly
 * @enum {string}
 */
export type StoragePermissions = 'get' | 'list' | 'delete' | 'set' | 'update' | 'regeneratekey' | 'recover' | 'purge' | 'backup' | 'restore' | 'setsas' | 'listsas' | 'getsas' | 'deletesas';

/**
 * Defines values for CreateMode.
 * Possible values include: 'recover', 'default'
 * @readonly
 * @enum {string}
 */
export type CreateMode = 'recover' | 'default';

/**
 * Defines values for NetworkRuleBypassOptions.
 * Possible values include: 'AzureServices', 'None'
 * @readonly
 * @enum {string}
 */
export type NetworkRuleBypassOptions = 'AzureServices' | 'None';

/**
 * Defines values for NetworkRuleAction.
 * Possible values include: 'Allow', 'Deny'
 * @readonly
 * @enum {string}
 */
export type NetworkRuleAction = 'Allow' | 'Deny';

/**
 * Defines values for PrivateEndpointServiceConnectionStatus.
 * Possible values include: 'Pending', 'Approved', 'Rejected', 'Disconnected'
 * @readonly
 * @enum {string}
 */
export type PrivateEndpointServiceConnectionStatus = 'Pending' | 'Approved' | 'Rejected' | 'Disconnected';

/**
 * Defines values for PrivateEndpointConnectionProvisioningState.
 * Possible values include: 'Succeeded', 'Creating', 'Updating', 'Deleting', 'Failed',
 * 'Disconnected'
 * @readonly
 * @enum {string}
 */
export type PrivateEndpointConnectionProvisioningState = 'Succeeded' | 'Creating' | 'Updating' | 'Deleting' | 'Failed' | 'Disconnected';

/**
 * Defines values for Reason.
 * Possible values include: 'AccountNameInvalid', 'AlreadyExists'
 * @readonly
 * @enum {string}
 */
export type Reason = 'AccountNameInvalid' | 'AlreadyExists';

/**
 * Defines values for AccessPolicyUpdateKind.
 * Possible values include: 'add', 'replace', 'remove'
 * @readonly
 * @enum {string}
 */
export type AccessPolicyUpdateKind = 'add' | 'replace' | 'remove';

/**
 * Contains response data for the createOrUpdate operation.
 */
export type VaultsCreateOrUpdateResponse = Vault & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Vault;
    };
};

/**
 * Contains response data for the update operation.
 */
export type VaultsUpdateResponse = Vault & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Vault;
    };
};

/**
 * Contains response data for the get operation.
 */
export type VaultsGetResponse = Vault & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Vault;
    };
};

/**
 * Contains response data for the updateAccessPolicy operation.
 */
export type VaultsUpdateAccessPolicyResponse = VaultAccessPolicyParameters & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: VaultAccessPolicyParameters;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type VaultsListByResourceGroupResponse = VaultListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: VaultListResult;
    };
};

/**
 * Contains response data for the listBySubscription operation.
 */
export type VaultsListBySubscriptionResponse = VaultListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: VaultListResult;
    };
};

/**
 * Contains response data for the listDeleted operation.
 */
export type VaultsListDeletedResponse = DeletedVaultListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: DeletedVaultListResult;
    };
};

/**
 * Contains response data for the getDeleted operation.
 */
export type VaultsGetDeletedResponse = DeletedVault & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: DeletedVault;
    };
};

/**
 * Contains response data for the list operation.
 */
export type VaultsListResponse = ResourceListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ResourceListResult;
    };
};

/**
 * Contains response data for the checkNameAvailability operation.
 */
export type VaultsCheckNameAvailabilityResponse = CheckNameAvailabilityResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CheckNameAvailabilityResult;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type VaultsBeginCreateOrUpdateResponse = Vault & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Vault;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type VaultsListByResourceGroupNextResponse = VaultListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: VaultListResult;
    };
};

/**
 * Contains response data for the listBySubscriptionNext operation.
 */
export type VaultsListBySubscriptionNextResponse = VaultListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: VaultListResult;
    };
};

/**
 * Contains response data for the listDeletedNext operation.
 */
export type VaultsListDeletedNextResponse = DeletedVaultListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: DeletedVaultListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type VaultsListNextResponse = ResourceListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ResourceListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type PrivateEndpointConnectionsGetResponse = PrivateEndpointConnection & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateEndpointConnection;
    };
};

/**
 * Contains response data for the put operation.
 */
export type PrivateEndpointConnectionsPutResponse = PrivateEndpointConnection & PrivateEndpointConnectionsPutHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: PrivateEndpointConnectionsPutHeaders;

      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateEndpointConnection;
    };
};

/**
 * Contains response data for the deleteMethod operation.
 */
export type PrivateEndpointConnectionsDeleteResponse = PrivateEndpointConnection & PrivateEndpointConnectionsDeleteHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: PrivateEndpointConnectionsDeleteHeaders;

      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateEndpointConnection;
    };
};

/**
 * Contains response data for the listByVault operation.
 */
export type PrivateLinkResourcesListByVaultResponse = PrivateLinkResourceListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateLinkResourceListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};
