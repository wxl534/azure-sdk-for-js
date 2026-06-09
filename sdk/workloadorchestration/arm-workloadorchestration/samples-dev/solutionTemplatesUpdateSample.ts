// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadOrchestrationManagementClient } from "@azure/arm-workloadorchestration";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update a Solution Template Resource
 *
 * @summary update a Solution Template Resource
 * x-ms-original-file: 2026-03-01/SolutionTemplates_Update_MaximumSet_Gen.json
 */
async function solutionTemplatesUpdateMaximumSetGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "612CB927-8AC8-42DD-B74E-C676C3960BA5";
  const client = new WorkloadOrchestrationManagementClient(credential, subscriptionId);
  const result = await client.solutionTemplates.update("rgconfigurationmanager", "testname", {
    properties: {
      capabilities: ["wjgogxhkayhrcn"],
      state: "active",
      enableExternalValidation: true,
      description: "jbsuwcclfsxtzglvk",
    },
    tags: {},
  });
  console.log(result);
}

async function main(): Promise<void> {
  await solutionTemplatesUpdateMaximumSetGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRule();
}

main().catch(console.error);
