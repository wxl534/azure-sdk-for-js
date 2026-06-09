// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadOrchestrationManagementContext } from "../../api/workloadOrchestrationManagementContext.js";
import { listBySolutionTemplateVersion, get } from "../../api/solutionSchemas/operations.js";
import {
  SolutionSchemasListBySolutionTemplateVersionOptionalParams,
  SolutionSchemasGetOptionalParams,
} from "../../api/solutionSchemas/options.js";
import { SolutionSchema } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a SolutionSchemas operations. */
export interface SolutionSchemasOperations {
  /** List by SolutionTemplateVersion */
  listBySolutionTemplateVersion: (
    resourceGroupName: string,
    solutionTemplateName: string,
    solutionTemplateVersionName: string,
    options?: SolutionSchemasListBySolutionTemplateVersionOptionalParams,
  ) => PagedAsyncIterableIterator<SolutionSchema>;
  /** Get a SolutionSchema Resource */
  get: (
    resourceGroupName: string,
    solutionTemplateName: string,
    solutionTemplateVersionName: string,
    solutionSchemaName: string,
    options?: SolutionSchemasGetOptionalParams,
  ) => Promise<SolutionSchema>;
}

function _getSolutionSchemas(context: WorkloadOrchestrationManagementContext) {
  return {
    listBySolutionTemplateVersion: (
      resourceGroupName: string,
      solutionTemplateName: string,
      solutionTemplateVersionName: string,
      options?: SolutionSchemasListBySolutionTemplateVersionOptionalParams,
    ) =>
      listBySolutionTemplateVersion(
        context,
        resourceGroupName,
        solutionTemplateName,
        solutionTemplateVersionName,
        options,
      ),
    get: (
      resourceGroupName: string,
      solutionTemplateName: string,
      solutionTemplateVersionName: string,
      solutionSchemaName: string,
      options?: SolutionSchemasGetOptionalParams,
    ) =>
      get(
        context,
        resourceGroupName,
        solutionTemplateName,
        solutionTemplateVersionName,
        solutionSchemaName,
        options,
      ),
  };
}

export function _getSolutionSchemasOperations(
  context: WorkloadOrchestrationManagementContext,
): SolutionSchemasOperations {
  return {
    ..._getSolutionSchemas(context),
  };
}
