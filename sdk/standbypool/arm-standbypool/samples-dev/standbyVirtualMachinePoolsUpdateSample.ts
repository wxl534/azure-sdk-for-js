// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StandbyPoolManagementClient } from "@azure/arm-standbypool";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update a StandbyVirtualMachinePoolResource
 *
 * @summary update a StandbyVirtualMachinePoolResource
 * x-ms-original-file: 2026-04-01/StandbyVirtualMachinePools_Update.json
 */
async function standbyVirtualMachinePoolsUpdate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000009";
  const client = new StandbyPoolManagementClient(credential, subscriptionId);
  const result = await client.standbyVirtualMachinePools.update("rgstandbypool", "pool", {
    tags: {},
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
  });
  console.log(result);
}

/**
 * This sample demonstrates how to update a StandbyVirtualMachinePoolResource
 *
 * @summary update a StandbyVirtualMachinePoolResource
 * x-ms-original-file: 2026-04-01/StandbyVirtualMachinePools_Update_MixState.json
 */
async function standbyVirtualMachinePoolsUpdateMixState(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000009";
  const client = new StandbyPoolManagementClient(credential, subscriptionId);
  const result = await client.standbyVirtualMachinePools.update("rgstandbypool", "pool", {
    tags: {},
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
  });
  console.log(result);
}

async function main(): Promise<void> {
  await standbyVirtualMachinePoolsUpdate();
  await standbyVirtualMachinePoolsUpdateMixState();
}

main().catch(console.error);
