// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadOrchestrationManagementContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  SolutionMetadata,
  solutionMetadataDeserializer,
  _SolutionMetadataListResult,
  _solutionMetadataListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  SolutionMetadatasListByParentOptionalParams,
  SolutionMetadatasGetOptionalParams,
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
  options: SolutionMetadatasListByParentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.Edge/solutionMetadatas{?api%2Dversion}",
    {
      resourceUri: resourceUri,
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
): Promise<_SolutionMetadataListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    if (result.body) {
      error.details = errorResponseDeserializer(result.body);
    }

    throw error;
  }

  return _solutionMetadataListResultDeserializer(result.body);
}

/** List Solution resources */
export function listByParent(
  context: Client,
  resourceUri: string,
  options: SolutionMetadatasListByParentOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<SolutionMetadata> {
  return buildPagedAsyncIterator(
    context,
    () => _listByParentSend(context, resourceUri, options),
    _listByParentDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: context.apiVersion ?? "2026-03-01" },
  );
}

export function _getSend(
  context: Client,
  resourceUri: string,
  solutionMetadataName: string,
  options: SolutionMetadatasGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.Edge/solutionMetadatas/{solutionMetadataName}{?api%2Dversion}",
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

export async function _getDeserialize(result: PathUncheckedResponse): Promise<SolutionMetadata> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    if (result.body) {
      error.details = errorResponseDeserializer(result.body);
    }

    throw error;
  }

  return solutionMetadataDeserializer(result.body);
}

/** Get a Solution resource */
export async function get(
  context: Client,
  resourceUri: string,
  solutionMetadataName: string,
  options: SolutionMetadatasGetOptionalParams = { requestOptions: {} },
): Promise<SolutionMetadata> {
  const result = await _getSend(context, resourceUri, solutionMetadataName, options);
  return _getDeserialize(result);
}
