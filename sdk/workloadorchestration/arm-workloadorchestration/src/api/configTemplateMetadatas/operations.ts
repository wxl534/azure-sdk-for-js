// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadOrchestrationManagementContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  ConfigTemplateMetadata,
  configTemplateMetadataSerializer,
  configTemplateMetadataDeserializer,
  ConfigTemplateMetadataUpdate,
  configTemplateMetadataUpdateSerializer,
  _ConfigTemplateMetadataListResult,
  _configTemplateMetadataListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  ConfigTemplateMetadatasListByConfigTemplateOptionalParams,
  ConfigTemplateMetadatasDeleteOptionalParams,
  ConfigTemplateMetadatasUpdateOptionalParams,
  ConfigTemplateMetadatasCreateOrUpdateOptionalParams,
  ConfigTemplateMetadatasGetOptionalParams,
} from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _listByConfigTemplateSend(
  context: Client,
  resourceGroupName: string,
  configTemplateName: string,
  options: ConfigTemplateMetadatasListByConfigTemplateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates/{configTemplateName}/configTemplateMetadatas{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      configTemplateName: configTemplateName,
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

export async function _listByConfigTemplateDeserialize(
  result: PathUncheckedResponse,
): Promise<_ConfigTemplateMetadataListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    if (result.body) {
      error.details = errorResponseDeserializer(result.body);
    }

    throw error;
  }

  return _configTemplateMetadataListResultDeserializer(result.body);
}

/** List by ConfigTemplate */
export function listByConfigTemplate(
  context: Client,
  resourceGroupName: string,
  configTemplateName: string,
  options: ConfigTemplateMetadatasListByConfigTemplateOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ConfigTemplateMetadata> {
  return buildPagedAsyncIterator(
    context,
    () => _listByConfigTemplateSend(context, resourceGroupName, configTemplateName, options),
    _listByConfigTemplateDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink", apiVersion: context.apiVersion ?? "2026-03-01" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  configTemplateName: string,
  configTemplateMetadataName: string,
  options: ConfigTemplateMetadatasDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates/{configTemplateName}/configTemplateMetadatas/{configTemplateMetadataName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      configTemplateName: configTemplateName,
      configTemplateMetadataName: configTemplateMetadataName,
      "api%2Dversion": context.apiVersion ?? "2026-03-01",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    if (result.body) {
      error.details = errorResponseDeserializer(result.body);
    }

    throw error;
  }

  return;
}

/** Delete a ConfigTemplateMetadata Resource */
export function $delete(
  context: Client,
  resourceGroupName: string,
  configTemplateName: string,
  configTemplateMetadataName: string,
  options: ConfigTemplateMetadatasDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        resourceGroupName,
        configTemplateName,
        configTemplateMetadataName,
        options,
      ),
    resourceLocationConfig: "location",
    apiVersion: context.apiVersion ?? "2026-03-01",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  configTemplateName: string,
  configTemplateMetadataName: string,
  properties: ConfigTemplateMetadataUpdate,
  options: ConfigTemplateMetadatasUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates/{configTemplateName}/configTemplateMetadatas/{configTemplateMetadataName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      configTemplateName: configTemplateName,
      configTemplateMetadataName: configTemplateMetadataName,
      "api%2Dversion": context.apiVersion ?? "2026-03-01",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: configTemplateMetadataUpdateSerializer(properties),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<ConfigTemplateMetadata> {
  const expectedStatuses = ["200", "202", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    if (result.body) {
      error.details = errorResponseDeserializer(result.body);
    }

    throw error;
  }

  return configTemplateMetadataDeserializer(result.body);
}

/** Update a ConfigTemplateMetadata Resource */
export function update(
  context: Client,
  resourceGroupName: string,
  configTemplateName: string,
  configTemplateMetadataName: string,
  properties: ConfigTemplateMetadataUpdate,
  options: ConfigTemplateMetadatasUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ConfigTemplateMetadata>, ConfigTemplateMetadata> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "202", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        resourceGroupName,
        configTemplateName,
        configTemplateMetadataName,
        properties,
        options,
      ),
    resourceLocationConfig: "location",
    apiVersion: context.apiVersion ?? "2026-03-01",
  }) as PollerLike<OperationState<ConfigTemplateMetadata>, ConfigTemplateMetadata>;
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  configTemplateName: string,
  configTemplateMetadataName: string,
  resource: ConfigTemplateMetadata,
  options: ConfigTemplateMetadatasCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates/{configTemplateName}/configTemplateMetadatas/{configTemplateMetadataName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      configTemplateName: configTemplateName,
      configTemplateMetadataName: configTemplateMetadataName,
      "api%2Dversion": context.apiVersion ?? "2026-03-01",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: { accept: "application/json", ...options.requestOptions?.headers },
      body: configTemplateMetadataSerializer(resource),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ConfigTemplateMetadata> {
  const expectedStatuses = ["200", "201", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    if (result.body) {
      error.details = errorResponseDeserializer(result.body);
    }

    throw error;
  }

  return configTemplateMetadataDeserializer(result.body);
}

/** Create or update a ConfigTemplateMetadata Resource */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  configTemplateName: string,
  configTemplateMetadataName: string,
  resource: ConfigTemplateMetadata,
  options: ConfigTemplateMetadatasCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<ConfigTemplateMetadata>, ConfigTemplateMetadata> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        resourceGroupName,
        configTemplateName,
        configTemplateMetadataName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
    apiVersion: context.apiVersion ?? "2026-03-01",
  }) as PollerLike<OperationState<ConfigTemplateMetadata>, ConfigTemplateMetadata>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  configTemplateName: string,
  configTemplateMetadataName: string,
  options: ConfigTemplateMetadatasGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Edge/configTemplates/{configTemplateName}/configTemplateMetadatas/{configTemplateMetadataName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      configTemplateName: configTemplateName,
      configTemplateMetadataName: configTemplateMetadataName,
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
): Promise<ConfigTemplateMetadata> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    if (result.body) {
      error.details = errorResponseDeserializer(result.body);
    }

    throw error;
  }

  return configTemplateMetadataDeserializer(result.body);
}

/** Get a ConfigTemplateMetadata Resource */
export async function get(
  context: Client,
  resourceGroupName: string,
  configTemplateName: string,
  configTemplateMetadataName: string,
  options: ConfigTemplateMetadatasGetOptionalParams = { requestOptions: {} },
): Promise<ConfigTemplateMetadata> {
  const result = await _getSend(
    context,
    resourceGroupName,
    configTemplateName,
    configTemplateMetadataName,
    options,
  );
  return _getDeserialize(result);
}
