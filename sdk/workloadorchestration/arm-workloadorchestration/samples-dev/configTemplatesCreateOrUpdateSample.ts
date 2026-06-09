// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadOrchestrationManagementClient } from "@azure/arm-workloadorchestration";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create or update a Config Template Resource
 *
 * @summary create or update a Config Template Resource
 * x-ms-original-file: 2026-03-01/ConfigTemplates_CreateOrUpdate_MaximumSet_Gen.json
 */
async function configTemplatesCreateOrUpdateMaximumSetGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "612CB927-8AC8-42DD-B74E-C676C3960BA5";
  const client = new WorkloadOrchestrationManagementClient(credential, subscriptionId);
  const result = await client.configTemplates.createOrUpdate("rgconfigurationmanager", "testname", {
    properties: { description: "fvklsykvqiyosqetvdnjg" },
    tags: {},
    location: "lltpsbfqidpuumxvdnidshkdsx",
  });
  console.log(result);
}

async function main(): Promise<void> {
  await configTemplatesCreateOrUpdateMaximumSetGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRule();
}

main().catch(console.error);
