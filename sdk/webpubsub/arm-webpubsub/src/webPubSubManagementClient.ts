import * as coreAuth from "@azure/core-auth";
import {
  OperationsImpl,
  WebPubSubImpl,
  UsagesImpl,
  WebPubSubPrivateEndpointConnectionsImpl,
  WebPubSubPrivateLinkResourcesImpl,
  WebPubSubSharedPrivateLinkResourcesImpl
} from "./operations";
import {
  Operations,
  WebPubSub,
  Usages,
  WebPubSubPrivateEndpointConnections,
  WebPubSubPrivateLinkResources,
  WebPubSubSharedPrivateLinkResources
} from "./operationsInterfaces";
import { WebPubSubManagementClientContext } from "./webPubSubManagementClientContext";
import { WebPubSubManagementClientOptionalParams } from "./models";

export class WebPubSubManagementClient extends WebPubSubManagementClientContext {
  /**
   * Initializes a new instance of the WebPubSubManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Gets subscription Id which uniquely identify the Microsoft Azure subscription.
   *                       The subscription ID forms part of the URI for every service call.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: WebPubSubManagementClientOptionalParams
  ) {
    super(credentials, subscriptionId, options);
    this.operations = new OperationsImpl(this);
    this.webPubSub = new WebPubSubImpl(this);
    this.usages = new UsagesImpl(this);
    this.webPubSubPrivateEndpointConnections = new WebPubSubPrivateEndpointConnectionsImpl(
      this
    );
    this.webPubSubPrivateLinkResources = new WebPubSubPrivateLinkResourcesImpl(
      this
    );
    this.webPubSubSharedPrivateLinkResources = new WebPubSubSharedPrivateLinkResourcesImpl(
      this
    );
  }

  operations: Operations;
  webPubSub: WebPubSub;
  usages: Usages;
  webPubSubPrivateEndpointConnections: WebPubSubPrivateEndpointConnections;
  webPubSubPrivateLinkResources: WebPubSubPrivateLinkResources;
  webPubSubSharedPrivateLinkResources: WebPubSubSharedPrivateLinkResources;
}
