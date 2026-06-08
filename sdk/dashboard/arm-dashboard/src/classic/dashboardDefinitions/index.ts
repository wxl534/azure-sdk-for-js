// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DashboardManagementContext } from "../../api/dashboardManagementContext.js";
import { list, $delete, create, get } from "../../api/dashboardDefinitions/operations.js";
import {
  DashboardDefinitionsListOptionalParams,
  DashboardDefinitionsDeleteOptionalParams,
  DashboardDefinitionsCreateOptionalParams,
  DashboardDefinitionsGetOptionalParams,
} from "../../api/dashboardDefinitions/options.js";
import { DashboardDefinition } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a DashboardDefinitions operations. */
export interface DashboardDefinitionsOperations {
  /** List all dashboard definitions under the specified dashboard. */
  list: (
    resourceGroupName: string,
    dashboardName: string,
    options?: DashboardDefinitionsListOptionalParams,
  ) => PagedAsyncIterableIterator<DashboardDefinition>;
  /** Delete a dashboard definition. */
  delete: (
    resourceGroupName: string,
    dashboardName: string,
    definitionName: string,
    options?: DashboardDefinitionsDeleteOptionalParams,
  ) => Promise<void>;
  /** Create a dashboard definition to update dashboard resource. */
  create: (
    resourceGroupName: string,
    dashboardName: string,
    definitionName: string,
    requestBodyParameters: DashboardDefinition,
    options?: DashboardDefinitionsCreateOptionalParams,
  ) => Promise<DashboardDefinition>;
  /** Get the properties of a specific dashboard definition. */
  get: (
    resourceGroupName: string,
    dashboardName: string,
    definitionName: string,
    options?: DashboardDefinitionsGetOptionalParams,
  ) => Promise<DashboardDefinition>;
}

function _getDashboardDefinitions(context: DashboardManagementContext) {
  return {
    list: (
      resourceGroupName: string,
      dashboardName: string,
      options?: DashboardDefinitionsListOptionalParams,
    ) => list(context, resourceGroupName, dashboardName, options),
    delete: (
      resourceGroupName: string,
      dashboardName: string,
      definitionName: string,
      options?: DashboardDefinitionsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, dashboardName, definitionName, options),
    create: (
      resourceGroupName: string,
      dashboardName: string,
      definitionName: string,
      requestBodyParameters: DashboardDefinition,
      options?: DashboardDefinitionsCreateOptionalParams,
    ) =>
      create(
        context,
        resourceGroupName,
        dashboardName,
        definitionName,
        requestBodyParameters,
        options,
      ),
    get: (
      resourceGroupName: string,
      dashboardName: string,
      definitionName: string,
      options?: DashboardDefinitionsGetOptionalParams,
    ) => get(context, resourceGroupName, dashboardName, definitionName, options),
  };
}

export function _getDashboardDefinitionsOperations(
  context: DashboardManagementContext,
): DashboardDefinitionsOperations {
  return {
    ..._getDashboardDefinitions(context),
  };
}
