// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadOrchestrationManagementClient } from "@azure/arm-workloadorchestration";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update a Target Resource
 *
 * @summary update a Target Resource
 * x-ms-original-file: 2026-03-01/Targets_Update_MaximumSet_Gen.json
 */
async function targetsUpdateMaximumSetGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "612CB927-8AC8-42DD-B74E-C676C3960BA5";
  const client = new WorkloadOrchestrationManagementClient(credential, subscriptionId);
  const result = await client.targets.update("rgconfigurationmanager", "testname", {
    properties: {
      displayName: "zkcgsktvpwlsxtnuowajfmu",
      contextId:
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}",
      targetSpecification: {},
      capabilities: ["nbizsvnhtvhposoccvfwaf"],
      hierarchyLevel: "zwsfzqtsyswpbbakmorrzepb",
      solutionScope: "testname",
      state: "active",
      description: "gvtsccujzvogbzzccu",
    },
    tags: {},
  });
  console.log(result);
}

async function main(): Promise<void> {
  await targetsUpdateMaximumSetGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRule();
}

main().catch(console.error);
