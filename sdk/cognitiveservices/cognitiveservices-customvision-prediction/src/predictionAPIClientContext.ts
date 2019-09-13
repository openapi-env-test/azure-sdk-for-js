/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

const packageName = "@azure/cognitiveservices-customvision-prediction";
const packageVersion = "4.0.0";

export class PredictionAPIClientContext extends msRest.ServiceClient {
  apiKey: string;
  endpoint: string;

  /**
   * Initializes a new instance of the PredictionAPIClientContext class.
   * @param apiKey API key.
   * @param endpoint Supported Cognitive Services endpoints.
   * @param [options] The parameter options
   */
  constructor(apiKey: string, endpoint: string, options?: msRest.ServiceClientOptions) {
    if (apiKey == undefined) {
      throw new Error("'apiKey' cannot be null.");
    }
    if (endpoint == undefined) {
      throw new Error("'endpoint' cannot be null.");
    }

    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = msRest.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.baseUri = "{Endpoint}/customvision/v3.0/prediction";
    this.requestContentType = "application/json; charset=utf-8";
    this.apiKey = apiKey;
    this.endpoint = endpoint;
  }
}
