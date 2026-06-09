// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { CloudHealthClient } from "@azure/arm-cloudhealth";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to add a data annotation to an entity
 *
 * @summary add a data annotation to an entity
 * x-ms-original-file: 2026-05-01-preview/Entities_AddDataAnnotation.json
 */
async function entitiesAddDataAnnotation(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "4980D7D5-4E07-47AD-AD34-E76C6BC9F061";
  const client = new CloudHealthClient(credential, subscriptionId);
  const result = await client.entities.addDataAnnotation("rgopenapi", "myHealthModel", "entity1", {
    annotationDetails: {
      environment: "production",
      deploymentId: "deploy-2026-04-10-001",
      changedBy: "release-pipeline",
    },
    description: "Production deployment of v2.4.1",
  });
  console.log(result);
}

async function main(): Promise<void> {
  await entitiesAddDataAnnotation();
}

main().catch(console.error);
