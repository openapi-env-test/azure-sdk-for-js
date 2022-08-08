/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  PredictiveMetricGetOptionalParams,
  PredictiveMetricGetResponse
} from "../models";

/** Interface representing a PredictiveMetric. */
export interface PredictiveMetric {
  /**
   * get predictive autoscale metric future data
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param autoscaleSettingName The autoscale setting name.
   * @param timespan The timespan of the query. It is a string with the following format
   *                 'startDateTime_ISO/endDateTime_ISO'.
   * @param interval The interval (i.e. timegrain) of the query.
   * @param metricNamespace Metric namespace to query metric definitions for.
   * @param metricName The names of the metrics (comma separated) to retrieve. Special case: If a
   *                   metricname itself has a comma in it then use %2 to indicate it. Eg: 'Metric,Name1' should be
   *                   **'Metric%2Name1'**
   * @param aggregation The list of aggregation types (comma separated) to retrieve.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    autoscaleSettingName: string,
    timespan: string,
    interval: string,
    metricNamespace: string,
    metricName: string,
    aggregation: string,
    options?: PredictiveMetricGetOptionalParams
  ): Promise<PredictiveMetricGetResponse>;
}
