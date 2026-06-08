// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StorageActionsManagementClient } from "@azure/arm-storageactions";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to stops all active running assignments for the storage task
 *
 * @summary stops all active running assignments for the storage task
 * x-ms-original-file: 2026-03-01/storageTasksCrud/StopAllAssignments.json
 */
async function stopAllAssignments(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "1f31ba14-ce16-4281-b9b4-3e78da6e1616";
  const client = new StorageActionsManagementClient(credential, subscriptionId);
  await client.storageTasks.stopAllAssignments("res4228", "mytask1");
}

async function main(): Promise<void> {
  await stopAllAssignments();
}

main().catch(console.error);
