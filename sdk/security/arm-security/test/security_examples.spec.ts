/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  Recorder,
  RecorderStartOptions,
  delay,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert } from "chai";
import { Context } from "mocha";
import { SecurityCenter } from "../src/securityCenter";
import { SecurityContact } from "../src/models";

const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "azure_subscription_id"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("security test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: SecurityCenter;
  let location: string;
  let resourceGroup: string;
  let securityContactName: string;
  let securityContact: SecurityContact;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new SecurityCenter(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "eastus";
    resourceGroup = "myjstest";
    securityContactName = "default";
    securityContact = {
      alertNotifications: { minimalSeverity: "Low", state: "On" },
      emails: "john@contoso.com;jane@contoso.com",
      notificationsByRole: { roles: ["Owner"], state: "On" },
      phone: "+214-2754038"
    };
  })

  afterEach(async function () {
    await recorder.stop();
  });

  it("SecurityContact create test", async function () {
    const res = await client.securityContacts.create(
      securityContactName,
      securityContact
    );
    assert.equal(res.name, securityContactName);
  });

  it("SecurityContact get test", async function () {
    const res = await client.securityContacts.get(
      securityContactName
    );
    assert.equal(res.name, securityContactName);
  });

  it("SecurityContact list test", async function () {
    const resArray = new Array();
    const res = client.securityContacts.list()
    for await (let item of res.byPage()) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("SecurityContact delete test", async function () {
    const resArray = new Array();
    const res = await client.securityContacts.delete(securityContactName)
    for await (let item of client.securityContacts.list()) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
})
