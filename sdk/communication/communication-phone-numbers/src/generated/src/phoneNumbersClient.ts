/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PhoneNumbersImpl } from "./operations";
import { PhoneNumbers } from "./operationsInterfaces";
import { PhoneNumbersClientContext } from "./phoneNumbersClientContext";
import { PhoneNumbersClientOptionalParams } from "./models";

export class PhoneNumbersClient extends PhoneNumbersClientContext {
  /**
   * Initializes a new instance of the PhoneNumbersClient class.
   * @param endpoint The communication resource, for example
   *                 https://resourcename.communication.azure.com.
   * @param options The parameter options
   */
  constructor(endpoint: string, options?: PhoneNumbersClientOptionalParams) {
    super(endpoint, options);
    this.phoneNumbers = new PhoneNumbersImpl(this);
  }

  phoneNumbers: PhoneNumbers;
}
