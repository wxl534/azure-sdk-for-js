// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadOrchestrationManagementContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  SolutionMetadataVersion,
  solutionMetadataVersionDeserializer,
  _SolutionMetadataVersionListResult,
  _solutionMetadataVersionListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  SolutionMetadataVersionsListByParentOptionalParams,
  SolutionMetadataVersionsGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listByParentSend(
  context: Client,
  resourceUri: string,
  solutionMetadataName: string,
  options: SolutionMetadataVersionsListByParentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.Edge/solutionMetadatas/{solutionMetadataName}/versions{?api%2Dversion}",
    {
      resourceUri: resourceUri,
      solutionMetadataName: solutionMetadataName,
      "api%2Dversion": context.apiVersion ?? "2026-03-01",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _listByParentDeserialize(
  result: PathUncheckedResponse,
): Promise<_SolutionMetadataVersionListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    if (result.body) {
      error.details = errorResponseDeserializer(result.body);
    }

    throw error;
  }

  return _solutionMetadataVersionListResultDeserializer(result.body);
}

/** List Solution resources */
export function listByParent(
  context: Client,
  resourceUri: string,
  solutionMetadataName: string,
  options: SolutionMetadataVersionsListByParentOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<SolutionMetadataVersion> {
  return buildPagedAsyncIterator(
    context,
    () => _listByParentSend(context, resourceUri, solutionMetadataName, options),
    _listByParentDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: context.apiVersion ?? "2026-03-01" },
  );
}

export function _getSend(
  context: Client,
  resourceUri: string,
  solutionMetadataName: string,
  solutionMetadataVersionName: string,
  options: SolutionMetadataVersionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.Edge/solutionMetadatas/{solutionMetadataName}/versions/{solutionMetadataVersionName}{?api%2Dversion}",
    {
      resourceUri: resourceUri,
      solutionMetadataName: solutionMetadataName,
      solutionMetadataVersionName: solutionMetadataVersionName,
      "api%2Dversion": context.apiVersion ?? "2026-03-01",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<SolutionMetadataVersion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    if (result.body) {
      error.details = errorResponseDeserializer(result.body);
    }

    throw error;
  }

  return solutionMetadataVersionDeserializer(result.body);
}

/** Get a Solution resource */
export async function get(
  context: Client,
  resourceUri: string,
  solutionMetadataName: string,
  solutionMetadataVersionName: string,
  options: SolutionMetadataVersionsGetOptionalParams = { requestOptions: {} },
): Promise<SolutionMetadataVersion> {
  const result = await _getSend(
    context,
    resourceUri,
    solutionMetadataName,
    solutionMetadataVersionName,
    options,
  );
  return _getDeserialize(result);
}
