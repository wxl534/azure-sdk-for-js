// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadOrchestrationManagementClient } from "@azure/arm-workloadorchestration";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create or update a Config Template Version Resource
 *
 * @summary create or update a Config Template Version Resource
 * x-ms-original-file: 2026-03-01/ConfigTemplateVersions_CreateOrUpdate_MaximumSet_Gen.json
 */
async function configTemplateVersionsCreateOrUpdateMaximumSetGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "612CB927-8AC8-42DD-B74E-C676C3960BA5";
  const client = new WorkloadOrchestrationManagementClient(credential, subscriptionId);
  const result = await client.configTemplateVersions.createOrUpdate(
    "rgconfigurationmanager",
    "testname",
    "1.0.0",
    { properties: { configurations: "zsapegdehodzmwjmwl" } },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await configTemplateVersionsCreateOrUpdateMaximumSetGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRule();
}

main().catch(console.error);
