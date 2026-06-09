// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadOrchestrationManagementClient } from "@azure/arm-workloadorchestration";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create or update a Solution Resource
 *
 * @summary create or update a Solution Resource
 * x-ms-original-file: 2026-03-01/Solutions_CreateOrUpdate_MaximumSet_Gen.json
 */
async function solutionsCreateOrUpdateMaximumSetGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "612CB927-8AC8-42DD-B74E-C676C3960BA5";
  const client = new WorkloadOrchestrationManagementClient(credential, subscriptionId);
  const result = await client.solutions.createOrUpdate(
    "rgconfigurationmanager",
    "testname",
    "testname",
    { properties: {}, extendedLocation: { name: "ggfwkwklvvkrmlysvvhcj", type: "EdgeZone" } },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await solutionsCreateOrUpdateMaximumSetGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRule();
}

main().catch(console.error);
