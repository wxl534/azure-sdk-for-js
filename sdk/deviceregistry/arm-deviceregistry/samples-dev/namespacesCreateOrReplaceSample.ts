// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DeviceRegistryManagementClient } from "@azure/arm-deviceregistry";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a Namespace
 *
 * @summary create a Namespace
 * x-ms-original-file: 2026-04-01/CreateOrReplace_Namespace_With_Endpoints.json
 */
async function createOrReplaceNamespaceWithEndpoints(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DeviceRegistryManagementClient(credential, subscriptionId);
  const result = await client.namespaces.createOrReplace(
    "myResourceGroup",
    "adr-namespace-gbk0925-n01",
    {
      location: "North Europe",
      properties: {
        messaging: {
          endpoints: {
            eventGridEndpoint: {
              endpointType: "Microsoft.Devices/IoTHubs",
              address: "https://myeventgridtopic.westeurope-1.eventgrid.azure.net/api/events",
            },
            anotherEventGridEndpoint: {
              endpointType: "Microsoft.Devices/IoTHubs",
              address: "https://myeventgridtopic2.westeurope-1.eventgrid.azure.net/api/events",
            },
          },
        },
      },
      identity: { type: "SystemAssigned" },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to create a Namespace
 *
 * @summary create a Namespace
 * x-ms-original-file: 2026-04-01/CreateOrReplace_Namespace_With_ManagementEndpoints.json
 */
async function createOrReplaceNamespaceWithManagementEndpoints(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DeviceRegistryManagementClient(credential, subscriptionId);
  const result = await client.namespaces.createOrReplace(
    "myResourceGroup",
    "adr-namespace-gbk0925-n01",
    {
      location: "North Europe",
      properties: {
        management: {
          endpoints: {
            customLocation1: {
              endpointType: "Microsoft.EventGrid/Namespaces",
              address: "eg-for-adr.eastus2-1.ts.eventgrid.azure.net",
              scopeId: "scope-id-for-management-endpoint-1",
              resourceId:
                "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.EventGrid/Namespaces/eg-for-adr",
            },
            customLocation2: {
              endpointType: "Microsoft.EventGrid/Namespaces",
              address: "eg-for-adr1.eastus2-1.ts.eventgrid.azure.net",
              scopeId: "scope-id-for-management-endpoint-2",
              resourceId:
                "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.EventGrid/Namespaces/eg-for-adr1",
            },
          },
        },
      },
    },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrReplaceNamespaceWithEndpoints();
  await createOrReplaceNamespaceWithManagementEndpoints();
}

main().catch(console.error);
