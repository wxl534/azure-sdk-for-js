// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { CloudHealthClient } from "@azure/arm-cloudhealth";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get recommended signal configurations for a given Entity (only applicable for Entities representing Azure resources)
 *
 * @summary get recommended signal configurations for a given Entity (only applicable for Entities representing Azure resources)
 * x-ms-original-file: 2026-05-01-preview/Entities_GetSignalRecommendations.json
 */
async function entitiesGetSignalRecommendations(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "4980D7D5-4E07-47AD-AD34-E76C6BC9F061";
  const client = new CloudHealthClient(credential, subscriptionId);
  const result = await client.entities.getSignalRecommendations(
    "rgopenapi",
    "myHealthModel",
    "entity1",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await entitiesGetSignalRecommendations();
}

main().catch(console.error);
