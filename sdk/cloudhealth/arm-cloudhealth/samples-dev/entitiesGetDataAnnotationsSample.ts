// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { CloudHealthClient } from "@azure/arm-cloudhealth";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to retrieve data annotations for an entity
 *
 * @summary retrieve data annotations for an entity
 * x-ms-original-file: 2026-05-01-preview/Entities_GetDataAnnotations.json
 */
async function entitiesGetDataAnnotations(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "4980D7D5-4E07-47AD-AD34-E76C6BC9F061";
  const client = new CloudHealthClient(credential, subscriptionId);
  const result = await client.entities.getDataAnnotations("rgopenapi", "myHealthModel", "entity1", {
    startAt: new Date("2026-04-09T00:00:00Z"),
    endAt: new Date("2026-04-10T23:59:59Z"),
  });
  console.log(result);
}

async function main(): Promise<void> {
  await entitiesGetDataAnnotations();
}

main().catch(console.error);
