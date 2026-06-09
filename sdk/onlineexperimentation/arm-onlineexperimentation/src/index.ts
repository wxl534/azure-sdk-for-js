// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureClouds, AzureSupportedClouds } from "./static-helpers/cloudSettingHelpers.js";
import {
  PageSettings,
  ContinuablePage,
  PagedAsyncIterableIterator,
} from "./static-helpers/pagingHelpers.js";

export { OnlineExperimentationClient } from "./onlineExperimentationClient.js";
export type { RestorePollerOptions } from "./restorePollerHelpers.js";
export { restorePoller } from "./restorePollerHelpers.js";
export type {
  Operation,
  OperationDisplay,
  Origin,
  ActionType,
  ErrorResponse,
  ErrorDetail,
  ErrorAdditionalInfo,
  OnlineExperimentationWorkspace,
  OnlineExperimentationWorkspaceProperties,
  ResourceProvisioningState,
  ResourceEncryptionConfiguration,
  CustomerManagedKeyEncryption,
  KeyEncryptionKeyIdentity,
  KeyEncryptionKeyIdentityType,
  PublicNetworkAccessType,
  PrivateEndpointConnection,
  PrivateEndpointConnectionProperties,
  PrivateEndpoint,
  PrivateLinkServiceConnectionState,
  PrivateEndpointServiceConnectionStatus,
  PrivateEndpointConnectionProvisioningState,
  ManagedServiceIdentity,
  ManagedServiceIdentityType,
  UserAssignedIdentity,
  OnlineExperimentationWorkspaceSku,
  OnlineExperimentationWorkspaceSkuName,
  OnlineExperimentationWorkspaceSkuTier,
  ProxyResource,
  Resource,
  SystemData,
  CreatedByType,
  TrackedResource,
  OnlineExperimentationWorkspacePatch,
  PrivateLinkResource,
  PrivateLinkResourceProperties,
} from "./models/index.js";
export {
  KnownOrigin,
  KnownActionType,
  KnownResourceProvisioningState,
  KnownKeyEncryptionKeyIdentityType,
  KnownPublicNetworkAccessType,
  KnownPrivateEndpointServiceConnectionStatus,
  KnownPrivateEndpointConnectionProvisioningState,
  KnownManagedServiceIdentityType,
  KnownOnlineExperimentationWorkspaceSkuName,
  KnownOnlineExperimentationWorkspaceSkuTier,
  KnownCreatedByType,
  KnownVersions,
} from "./models/index.js";
export type { OnlineExperimentationClientOptionalParams } from "./api/index.js";
export type {
  OnlineExperimentationWorkspacesListBySubscriptionOptionalParams,
  OnlineExperimentationWorkspacesListByResourceGroupOptionalParams,
  OnlineExperimentationWorkspacesDeleteOptionalParams,
  OnlineExperimentationWorkspacesUpdateOptionalParams,
  OnlineExperimentationWorkspacesCreateOrUpdateOptionalParams,
  OnlineExperimentationWorkspacesGetOptionalParams,
} from "./api/onlineExperimentationWorkspaces/index.js";
export type { OperationsListOptionalParams } from "./api/operations/index.js";
export type {
  PrivateEndpointConnectionsListOptionalParams,
  PrivateEndpointConnectionsDeleteOptionalParams,
  PrivateEndpointConnectionsUpdateOptionalParams,
  PrivateEndpointConnectionsGetOptionalParams,
} from "./api/privateEndpointConnections/index.js";
export type {
  PrivateLinkResourcesListOptionalParams,
  PrivateLinkResourcesGetOptionalParams,
} from "./api/privateLinkResources/index.js";
export type {
  OnlineExperimentationWorkspacesOperations,
  OperationsOperations,
  PrivateEndpointConnectionsOperations,
  PrivateLinkResourcesOperations,
} from "./classic/index.js";
export type { PageSettings, ContinuablePage, PagedAsyncIterableIterator };
export { AzureClouds };
export type { AzureSupportedClouds };
export { RestError, isRestError } from "@azure/core-rest-pipeline";
