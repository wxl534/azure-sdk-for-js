// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadOrchestrationManagementContext } from "../../api/workloadOrchestrationManagementContext.js";
import { listByParent, get } from "../../api/solutionMetadataVersions/operations.js";
import {
  SolutionMetadataVersionsListByParentOptionalParams,
  SolutionMetadataVersionsGetOptionalParams,
} from "../../api/solutionMetadataVersions/options.js";
import { SolutionMetadataVersion } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a SolutionMetadataVersions operations. */
export interface SolutionMetadataVersionsOperations {
  /** List Solution resources */
  listByParent: (
    resourceUri: string,
    solutionMetadataName: string,
    options?: SolutionMetadataVersionsListByParentOptionalParams,
  ) => PagedAsyncIterableIterator<SolutionMetadataVersion>;
  /** Get a Solution resource */
  get: (
    resourceUri: string,
    solutionMetadataName: string,
    solutionMetadataVersionName: string,
    options?: SolutionMetadataVersionsGetOptionalParams,
  ) => Promise<SolutionMetadataVersion>;
}

function _getSolutionMetadataVersions(context: WorkloadOrchestrationManagementContext) {
  return {
    listByParent: (
      resourceUri: string,
      solutionMetadataName: string,
      options?: SolutionMetadataVersionsListByParentOptionalParams,
    ) => listByParent(context, resourceUri, solutionMetadataName, options),
    get: (
      resourceUri: string,
      solutionMetadataName: string,
      solutionMetadataVersionName: string,
      options?: SolutionMetadataVersionsGetOptionalParams,
    ) => get(context, resourceUri, solutionMetadataName, solutionMetadataVersionName, options),
  };
}

export function _getSolutionMetadataVersionsOperations(
  context: WorkloadOrchestrationManagementContext,
): SolutionMetadataVersionsOperations {
  return {
    ..._getSolutionMetadataVersions(context),
  };
}
