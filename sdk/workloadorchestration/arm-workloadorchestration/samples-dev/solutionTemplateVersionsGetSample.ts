// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadOrchestrationManagementClient } from "@azure/arm-workloadorchestration";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a Solution Template Version Resource
 *
 * @summary get a Solution Template Version Resource
 * x-ms-original-file: 2026-03-01/SolutionTemplateVersions_Get_MaximumSet_Gen.json
 */
async function solutionTemplateVersionsGetMaximumSetGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "612CB927-8AC8-42DD-B74E-C676C3960BA5";
  const client = new WorkloadOrchestrationManagementClient(credential, subscriptionId);
  const result = await client.solutionTemplateVersions.get(
    "rgconfigurationmanager",
    "testname",
    "1.0.0",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await solutionTemplateVersionsGetMaximumSetGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRule();
}

main().catch(console.error);
