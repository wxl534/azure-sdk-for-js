// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadOrchestrationManagementClient } from "@azure/arm-workloadorchestration";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update a ConfigTemplateMetadata Resource
 *
 * @summary update a ConfigTemplateMetadata Resource
 * x-ms-original-file: 2026-03-01/ConfigTemplateMetadatas_Update_MaximumSet_Gen.json
 */
async function configTemplateMetadatasUpdateMaximumSetGeneratedByMaximumSetRuleGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "612CB927-8AC8-42DD-B74E-C676C3960BA5";
  const client = new WorkloadOrchestrationManagementClient(credential, subscriptionId);
  const result = await client.configTemplateMetadatas.update(
    "rgconfigurationmanager",
    "abcde",
    "abcde",
    {
      properties: {
        contextId:
          "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}",
        linkedHierarchies: [
          {
            hierarchyIds: [
              "/subscriptions/612CB927-8AC8-42DD-B74E-C676C3960BA5/resourceGroups/rgconfigurationmanager/providers/Microsoft.Edge/targets/testname",
            ],
            level: "uwljjosdlhmyalhrvq",
          },
        ],
        unLinkedHierarchies: [
          {
            hierarchyIds: [
              "/subscriptions/612CB927-8AC8-42DD-B74E-C676C3960BA5/resourceGroups/rgconfigurationmanager/providers/Microsoft.Edge/targets/testname",
            ],
            level: "zuwwzwpeur",
          },
        ],
      },
    },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await configTemplateMetadatasUpdateMaximumSetGeneratedByMaximumSetRuleGeneratedByMaximumSetRule();
}

main().catch(console.error);
