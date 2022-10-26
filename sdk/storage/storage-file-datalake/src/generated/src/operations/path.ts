/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageClientContext } from "../storageClientContext";
import {
  PathCreateOptionalParams,
  PathCreateResponse,
  PathUpdateAction,
  PathSetAccessControlRecursiveMode,
  PathUpdateOptionalParams,
  PathUpdateResponse,
  PathLeaseAction,
  PathLeaseOptionalParams,
  PathLeaseResponse,
  PathReadOptionalParams,
  PathReadResponse,
  PathGetPropertiesOptionalParams,
  PathGetPropertiesResponse,
  PathDeleteOptionalParams,
  PathDeleteResponse,
  PathSetAccessControlOptionalParams,
  PathSetAccessControlResponse,
  PathSetAccessControlRecursiveOptionalParams,
  PathSetAccessControlRecursiveResponse,
  PathFlushDataOptionalParams,
  PathFlushDataResponse,
  PathAppendDataOptionalParams,
  PathAppendDataResponse,
  PathExpiryOptions,
  PathSetExpiryOptionalParams,
  PathSetExpiryResponse,
  PathUndeleteOptionalParams,
  PathUndeleteResponse
} from "../models";

/** Class representing a Path. */
export class Path {
  private readonly client: StorageClientContext;

  /**
   * Initialize a new instance of the class Path class.
   * @param client Reference to the service client
   */
  constructor(client: StorageClientContext) {
    this.client = client;
  }

  /**
   * Create or rename a file or directory.    By default, the destination is overwritten and if the
   * destination already exists and has a lease the lease is broken.  This operation supports conditional
   * HTTP requests.  For more information, see [Specifying Conditional Headers for Blob Service
   * Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).
   *  To fail if the destination already exists, use a conditional request with If-None-Match: "*".
   * @param options The options parameters.
   */
  create(options?: PathCreateOptionalParams): Promise<PathCreateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      createOperationSpec
    ) as Promise<PathCreateResponse>;
  }

  /**
   * Uploads data to be appended to a file, flushes (writes) previously uploaded data to a file, sets
   * properties for a file or directory, or sets access control for a file or directory. Data can only be
   * appended to a file. Concurrent writes to the same file using multiple clients are not supported.
   * This operation supports conditional HTTP requests. For more information, see [Specifying Conditional
   * Headers for Blob Service
   * Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).
   * @param action The action must be "append" to upload data to be appended to a file, "flush" to flush
   *               previously uploaded data to a file, "setProperties" to set the properties of a file or directory,
   *               "setAccessControl" to set the owner, group, permissions, or access control list for a file or
   *               directory, or  "setAccessControlRecursive" to set the access control list for a directory
   *               recursively. Note that Hierarchical Namespace must be enabled for the account in order to use access
   *               control.  Also note that the Access Control List (ACL) includes permissions for the owner, owning
   *               group, and others, so the x-ms-permissions and x-ms-acl request headers are mutually exclusive.
   * @param mode Mode "set" sets POSIX access control rights on files and directories, "modify" modifies
   *             one or more POSIX access control rights  that pre-exist on files and directories, "remove" removes
   *             one or more POSIX access control rights  that were present earlier on files and directories
   * @param body Initial data
   * @param options The options parameters.
   */
  update(
    action: PathUpdateAction,
    mode: PathSetAccessControlRecursiveMode,
    body: coreHttp.HttpRequestBody,
    options?: PathUpdateOptionalParams
  ): Promise<PathUpdateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      action,
      mode,
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      updateOperationSpec
    ) as Promise<PathUpdateResponse>;
  }

  /**
   * Create and manage a lease to restrict write and delete access to the path. This operation supports
   * conditional HTTP requests.  For more information, see [Specifying Conditional Headers for Blob
   * Service
   * Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).
   * @param xMsLeaseAction There are five lease actions: "acquire", "break", "change", "renew", and
   *                       "release". Use "acquire" and specify the "x-ms-proposed-lease-id" and "x-ms-lease-duration" to
   *                       acquire a new lease. Use "break" to break an existing lease. When a lease is broken, the lease break
   *                       period is allowed to elapse, during which time no lease operation except break and release can be
   *                       performed on the file. When a lease is successfully broken, the response indicates the interval in
   *                       seconds until a new lease can be acquired. Use "change" and specify the current lease ID in
   *                       "x-ms-lease-id" and the new lease ID in "x-ms-proposed-lease-id" to change the lease ID of an active
   *                       lease. Use "renew" and specify the "x-ms-lease-id" to renew an existing lease. Use "release" and
   *                       specify the "x-ms-lease-id" to release a lease.
   * @param options The options parameters.
   */
  lease(
    xMsLeaseAction: PathLeaseAction,
    options?: PathLeaseOptionalParams
  ): Promise<PathLeaseResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      xMsLeaseAction,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      leaseOperationSpec
    ) as Promise<PathLeaseResponse>;
  }

  /**
   * Read the contents of a file.  For read operations, range requests are supported. This operation
   * supports conditional HTTP requests.  For more information, see [Specifying Conditional Headers for
   * Blob Service
   * Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).
   * @param options The options parameters.
   */
  read(options?: PathReadOptionalParams): Promise<PathReadResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      readOperationSpec
    ) as Promise<PathReadResponse>;
  }

  /**
   * Get Properties returns all system and user defined properties for a path. Get Status returns all
   * system defined properties for a path. Get Access Control List returns the access control list for a
   * path. This operation supports conditional HTTP requests.  For more information, see [Specifying
   * Conditional Headers for Blob Service
   * Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).
   * @param options The options parameters.
   */
  getProperties(
    options?: PathGetPropertiesOptionalParams
  ): Promise<PathGetPropertiesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getPropertiesOperationSpec
    ) as Promise<PathGetPropertiesResponse>;
  }

  /**
   * Delete the file or directory. This operation supports conditional HTTP requests.  For more
   * information, see [Specifying Conditional Headers for Blob Service
   * Operations](https://docs.microsoft.com/en-us/rest/api/storageservices/specifying-conditional-headers-for-blob-service-operations).
   * @param options The options parameters.
   */
  delete(options?: PathDeleteOptionalParams): Promise<PathDeleteResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteOperationSpec
    ) as Promise<PathDeleteResponse>;
  }

  /**
   * Set the owner, group, permissions, or access control list for a path.
   * @param options The options parameters.
   */
  setAccessControl(
    options?: PathSetAccessControlOptionalParams
  ): Promise<PathSetAccessControlResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      setAccessControlOperationSpec
    ) as Promise<PathSetAccessControlResponse>;
  }

  /**
   * Set the access control list for a path and sub-paths.
   * @param mode Mode "set" sets POSIX access control rights on files and directories, "modify" modifies
   *             one or more POSIX access control rights  that pre-exist on files and directories, "remove" removes
   *             one or more POSIX access control rights  that were present earlier on files and directories
   * @param options The options parameters.
   */
  setAccessControlRecursive(
    mode: PathSetAccessControlRecursiveMode,
    options?: PathSetAccessControlRecursiveOptionalParams
  ): Promise<PathSetAccessControlRecursiveResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      mode,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      setAccessControlRecursiveOperationSpec
    ) as Promise<PathSetAccessControlRecursiveResponse>;
  }

  /**
   * Set the owner, group, permissions, or access control list for a path.
   * @param options The options parameters.
   */
  flushData(
    options?: PathFlushDataOptionalParams
  ): Promise<PathFlushDataResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      flushDataOperationSpec
    ) as Promise<PathFlushDataResponse>;
  }

  /**
   * Append data to the file.
   * @param body Initial data
   * @param options The options parameters.
   */
  appendData(
    body: coreHttp.HttpRequestBody,
    options?: PathAppendDataOptionalParams
  ): Promise<PathAppendDataResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      body,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      appendDataOperationSpec
    ) as Promise<PathAppendDataResponse>;
  }

  /**
   * Sets the time a blob will expire and be deleted.
   * @param expiryOptions Required. Indicates mode of the expiry time
   * @param options The options parameters.
   */
  setExpiry(
    expiryOptions: PathExpiryOptions,
    options?: PathSetExpiryOptionalParams
  ): Promise<PathSetExpiryResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      expiryOptions,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      setExpiryOperationSpec
    ) as Promise<PathSetExpiryResponse>;
  }

  /**
   * Undelete a path that was previously soft deleted
   * @param options The options parameters.
   */
  undelete(
    options?: PathUndeleteOptionalParams
  ): Promise<PathUndeleteResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      undeleteOperationSpec
    ) as Promise<PathUndeleteResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const createOperationSpec: coreHttp.OperationSpec = {
  path: "/{filesystem}/{path}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.PathCreateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PathCreateExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.continuation,
    Parameters.timeout,
    Parameters.resource2,
    Parameters.mode
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.accept,
    Parameters.requestId,
    Parameters.version,
    Parameters.properties,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.cacheControl,
    Parameters.contentEncoding,
    Parameters.contentLanguage,
    Parameters.contentDisposition,
    Parameters.contentType,
    Parameters.renameSource,
    Parameters.leaseId,
    Parameters.sourceLeaseId,
    Parameters.permissions,
    Parameters.umask,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.sourceIfMatch,
    Parameters.sourceIfNoneMatch,
    Parameters.sourceIfModifiedSince,
    Parameters.sourceIfUnmodifiedSince,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.owner,
    Parameters.group,
    Parameters.acl,
    Parameters.proposedLeaseId,
    Parameters.leaseDuration,
    Parameters.expiryOptions,
    Parameters.expiresOn
  ],
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path: "/{filesystem}/{path}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SetAccessControlRecursiveResponse,
      headersMapper: Mappers.PathUpdateHeaders
    },
    202: {
      headersMapper: Mappers.PathUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PathUpdateExceptionHeaders
    }
  },
  requestBody: Parameters.body,
  queryParameters: [
    Parameters.continuation,
    Parameters.timeout,
    Parameters.action,
    Parameters.maxRecords,
    Parameters.mode1,
    Parameters.forceFlag,
    Parameters.position,
    Parameters.retainUncommittedData,
    Parameters.close
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.requestId,
    Parameters.version,
    Parameters.properties,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.cacheControl,
    Parameters.contentEncoding,
    Parameters.contentLanguage,
    Parameters.contentDisposition,
    Parameters.contentType,
    Parameters.leaseId,
    Parameters.permissions,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.owner,
    Parameters.group,
    Parameters.acl,
    Parameters.contentType1,
    Parameters.accept2,
    Parameters.contentLength,
    Parameters.contentMD5
  ],
  mediaType: "binary",
  serializer
};
const leaseOperationSpec: coreHttp.OperationSpec = {
  path: "/{filesystem}/{path}",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.PathLeaseHeaders
    },
    201: {
      headersMapper: Mappers.PathLeaseHeaders
    },
    202: {
      headersMapper: Mappers.PathLeaseHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PathLeaseExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeout],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.accept,
    Parameters.requestId,
    Parameters.version,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.leaseId,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.proposedLeaseId,
    Parameters.xMsLeaseAction,
    Parameters.xMsLeaseDuration,
    Parameters.xMsLeaseBreakPeriod
  ],
  serializer
};
const readOperationSpec: coreHttp.OperationSpec = {
  path: "/{filesystem}/{path}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Stream" },
        serializedName: "parsedResponse"
      },
      headersMapper: Mappers.PathReadHeaders
    },
    206: {
      bodyMapper: {
        type: { name: "Stream" },
        serializedName: "parsedResponse"
      },
      headersMapper: Mappers.PathReadHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PathReadExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeout],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.accept,
    Parameters.requestId,
    Parameters.version,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.leaseId,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.range,
    Parameters.xMsRangeGetContentMd5
  ],
  serializer
};
const getPropertiesOperationSpec: coreHttp.OperationSpec = {
  path: "/{filesystem}/{path}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.PathGetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PathGetPropertiesExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeout, Parameters.upn, Parameters.action1],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.accept,
    Parameters.requestId,
    Parameters.version,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.leaseId,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path: "/{filesystem}/{path}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.PathDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PathDeleteExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.continuation,
    Parameters.timeout,
    Parameters.recursive1
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.accept,
    Parameters.requestId,
    Parameters.version,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.leaseId,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  serializer
};
const setAccessControlOperationSpec: coreHttp.OperationSpec = {
  path: "/{filesystem}/{path}",
  httpMethod: "PATCH",
  responses: {
    200: {
      headersMapper: Mappers.PathSetAccessControlHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PathSetAccessControlExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeout, Parameters.action2],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.accept,
    Parameters.requestId,
    Parameters.version,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.leaseId,
    Parameters.permissions,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.owner,
    Parameters.group,
    Parameters.acl
  ],
  serializer
};
const setAccessControlRecursiveOperationSpec: coreHttp.OperationSpec = {
  path: "/{filesystem}/{path}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SetAccessControlRecursiveResponse,
      headersMapper: Mappers.PathSetAccessControlRecursiveHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PathSetAccessControlRecursiveExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.continuation,
    Parameters.timeout,
    Parameters.maxRecords,
    Parameters.mode1,
    Parameters.forceFlag,
    Parameters.action3
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.accept,
    Parameters.requestId,
    Parameters.version,
    Parameters.acl
  ],
  serializer
};
const flushDataOperationSpec: coreHttp.OperationSpec = {
  path: "/{filesystem}/{path}",
  httpMethod: "PATCH",
  responses: {
    200: {
      headersMapper: Mappers.PathFlushDataHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PathFlushDataExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeout,
    Parameters.position,
    Parameters.retainUncommittedData,
    Parameters.close,
    Parameters.action4
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.accept,
    Parameters.requestId,
    Parameters.version,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.cacheControl,
    Parameters.contentEncoding,
    Parameters.contentLanguage,
    Parameters.contentDisposition,
    Parameters.contentType,
    Parameters.leaseId,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.contentLength,
    Parameters.contentMD5
  ],
  serializer
};
const appendDataOperationSpec: coreHttp.OperationSpec = {
  path: "/{filesystem}/{path}",
  httpMethod: "PATCH",
  responses: {
    202: {
      headersMapper: Mappers.PathAppendDataHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PathAppendDataExceptionHeaders
    }
  },
  requestBody: Parameters.body,
  queryParameters: [
    Parameters.timeout,
    Parameters.position,
    Parameters.action5,
    Parameters.flush
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.requestId,
    Parameters.version,
    Parameters.leaseId,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.accept2,
    Parameters.contentLength,
    Parameters.contentType2,
    Parameters.transactionalContentHash,
    Parameters.transactionalContentCrc64
  ],
  mediaType: "binary",
  serializer
};
const setExpiryOperationSpec: coreHttp.OperationSpec = {
  path: "/{filesystem}/{path}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.PathSetExpiryHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PathSetExpiryExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeout, Parameters.comp1],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.accept,
    Parameters.requestId,
    Parameters.version,
    Parameters.expiresOn,
    Parameters.expiryOptions1
  ],
  serializer
};
const undeleteOperationSpec: coreHttp.OperationSpec = {
  path: "/{filesystem}/{path}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.PathUndeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.PathUndeleteExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeout, Parameters.comp2],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.accept,
    Parameters.requestId,
    Parameters.version,
    Parameters.undeleteSource
  ],
  serializer
};
