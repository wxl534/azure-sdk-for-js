// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadOrchestrationManagementClient } from "@azure/arm-workloadorchestration";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a Workflow Version Resource
 *
 * @summary get a Workflow Version Resource
 * x-ms-original-file: 2026-03-01/WorkflowVersions_Get_MaximumSet_Gen.json
 */
async function workflowVersionsGetMaximumSetGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "612CB927-8AC8-42DD-B74E-C676C3960BA5";
  const client = new WorkloadOrchestrationManagementClient(credential, subscriptionId);
  const result = await client.workflowVersions.get(
    "rgconfigurationmanager",
    "testname",
    "testname",
    "abcde",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await workflowVersionsGetMaximumSetGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRule();
}

main().catch(console.error);
