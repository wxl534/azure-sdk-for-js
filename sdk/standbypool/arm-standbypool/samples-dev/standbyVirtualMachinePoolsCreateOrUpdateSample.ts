// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StandbyPoolManagementClient } from "@azure/arm-standbypool";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a StandbyVirtualMachinePoolResource
 *
 * @summary create a StandbyVirtualMachinePoolResource
 * x-ms-original-file: 2026-04-01/StandbyVirtualMachinePools_CreateOrUpdate.json
 */
async function standbyVirtualMachinePoolsCreateOrUpdate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000009";
  const client = new StandbyPoolManagementClient(credential, subscriptionId);
  const result = await client.standbyVirtualMachinePools.createOrUpdate("rgstandbypool", "pool", {
    properties: {
      elasticityProfile: {
        maxReadyCapacity: 304,
        minReadyCapacity: 300,
        postProvisioningDelay: "PT2S",
        dynamicSizing: { enabled: true },
      },
      virtualMachineState: "Running",
      attachedVirtualMachineScaleSetId:
        "/subscriptions/00000000-0000-0000-0000-000000000009/resourceGroups/rgstandbypool/providers/Microsoft.Compute/virtualMachineScaleSets/myVmss",
    },
    tags: {},
    location: "West US",
  });
  console.log(result);
}

/**
 * This sample demonstrates how to create a StandbyVirtualMachinePoolResource
 *
 * @summary create a StandbyVirtualMachinePoolResource
 * x-ms-original-file: 2026-04-01/StandbyVirtualMachinePools_CreateOrUpdate_MixState.json
 */
async function standbyVirtualMachinePoolsCreateOrUpdateMixState(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000009";
  const client = new StandbyPoolManagementClient(credential, subscriptionId);
  const result = await client.standbyVirtualMachinePools.createOrUpdate("rgstandbypool", "pool", {
    properties: {
      elasticityProfile: {
        maxReadyCapacity: 304,
        minReadyCapacity: 300,
        postProvisioningDelay: "PT2S",
        dynamicSizing: { enabled: true },
      },
      virtualMachineState: "Mix",
      vmStateDistribution: { runningPercent: 20, deallocatedPercent: 80, hibernatedPercent: 0 },
      attachedVirtualMachineScaleSetId:
        "/subscriptions/00000000-0000-0000-0000-000000000009/resourceGroups/rgstandbypool/providers/Microsoft.Compute/virtualMachineScaleSets/myVmss",
    },
    tags: {},
    location: "West US",
  });
  console.log(result);
}

async function main(): Promise<void> {
  await standbyVirtualMachinePoolsCreateOrUpdate();
  await standbyVirtualMachinePoolsCreateOrUpdateMixState();
}

main().catch(console.error);
