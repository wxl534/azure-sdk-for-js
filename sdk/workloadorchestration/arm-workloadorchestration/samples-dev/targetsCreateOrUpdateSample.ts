// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadOrchestrationManagementClient } from "@azure/arm-workloadorchestration";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create or update a Target Resource
 *
 * @summary create or update a Target Resource
 * x-ms-original-file: 2026-03-01/Targets_CreateOrUpdate_MaximumSet_Gen.json
 */
async function targetsCreateOrUpdateMaximumSetGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "612CB927-8AC8-42DD-B74E-C676C3960BA5";
  const client = new WorkloadOrchestrationManagementClient(credential, subscriptionId);
  const result = await client.targets.createOrUpdate("rgconfigurationmanager", "testname", {
    properties: {
      displayName: "uqslbtoqsdhxuzhjyxxhh",
      contextId:
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}",
      targetSpecification: {},
      capabilities: ["jo"],
      hierarchyLevel: "gfeixwakwerayliymdejq",
      solutionScope: "testname",
      state: "active",
      description: "tprpzngmtoweelhwwilawu",
    },
    extendedLocation: { name: "ggfwkwklvvkrmlysvvhcj", type: "EdgeZone" },
    tags: {},
    location: "yimw",
  });
  console.log(result);
}

async function main(): Promise<void> {
  await targetsCreateOrUpdateMaximumSetGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRuleGeneratedByMaximumSetRule();
}

main().catch(console.error);
