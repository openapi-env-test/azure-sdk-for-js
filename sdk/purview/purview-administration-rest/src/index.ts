// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as PurviewAccountClient from "./account";
import * as PurviewMetadataPoliciesClient from "./metadataPolicies";

export { PurviewAccountClient as PurviewAccountClientClient } from "./account/purviewAccountClient";
export { PurviewMetadataPoliciesClient as PurviewMetadataPoliciesClientClient } from "./metadataPolicies/purviewMetadataPoliciesClient";
export { PurviewAccountClient, PurviewMetadataPoliciesClient };
