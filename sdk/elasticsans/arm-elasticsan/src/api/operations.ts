// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticSanManagementContext as Client } from "./index.js";
import { Volume, volumeDeserializer, errorResponseDeserializer } from "../models/models.js";
import { getLongRunningPoller } from "../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../static-helpers/urlTemplate.js";
import { RestoreVolumeOptionalParams } from "./options.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _restoreVolumeSend(
  context: Client,
  resourceGroupName: string,
  elasticSanName: string,
  volumeGroupName: string,
  volumeName: string,
  options: RestoreVolumeOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}/restore{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      elasticSanName: elasticSanName,
      volumeGroupName: volumeGroupName,
      volumeName: volumeName,
      "api%2Dversion": context.apiVersion ?? "2026-04-01-preview",
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: { accept: "application/json", ...options.requestOptions?.headers },
    });
}

export async function _restoreVolumeDeserialize(result: PathUncheckedResponse): Promise<Volume> {
  const expectedStatuses = ["200", "202", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    if (result.body) {
      error.details = errorResponseDeserializer(result.body);
    }

    throw error;
  }

  return volumeDeserializer(result.body);
}

/** Restore Soft Deleted Volumes. The volume name is obtained by using the API to list soft deleted volumes by volume group */
export function restoreVolume(
  context: Client,
  resourceGroupName: string,
  elasticSanName: string,
  volumeGroupName: string,
  volumeName: string,
  options: RestoreVolumeOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Volume>, Volume> {
  return getLongRunningPoller(context, _restoreVolumeDeserialize, ["200", "202", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _restoreVolumeSend(
        context,
        resourceGroupName,
        elasticSanName,
        volumeGroupName,
        volumeName,
        options,
      ),
    resourceLocationConfig: "location",
    apiVersion: context.apiVersion ?? "2026-04-01-preview",
  }) as PollerLike<OperationState<Volume>, Volume>;
}
