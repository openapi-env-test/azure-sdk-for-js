// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  Test,
  TestAppComponents,
  TestServerMetricConfig,
  TestRun,
  MetricRequestPayload,
  TestRunAppComponents,
  TestRunServerMetricConfig,
} from "./models";

/** The resource instance. */
export type TestResourceMergeAndPatch = Partial<Test>;

export interface LoadTestAdministrationCreateOrUpdateTestBodyParam {
  /** The resource instance. */
  body: TestResourceMergeAndPatch;
}

export interface LoadTestAdministrationCreateOrUpdateTestMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type LoadTestAdministrationCreateOrUpdateTestParameters =
  LoadTestAdministrationCreateOrUpdateTestMediaTypesParam &
    LoadTestAdministrationCreateOrUpdateTestBodyParam &
    RequestParameters;
export type LoadTestAdministrationDeleteTestParameters = RequestParameters;
export type LoadTestAdministrationGetTestParameters = RequestParameters;

export interface LoadTestAdministrationListTestsQueryParamProperties {
  /**
   * Sort on the supported fields in (field asc/desc) format. eg:
   * lastModifiedDateTime asc. Supported fields - lastModifiedDateTime
   */
  orderby?: string;
  /**
   * Prefix based, case sensitive search on searchable fields - displayName,
   * createdBy. For example, to search for a test, with display name is Login Test,
   * the search parameter can be Login.
   */
  search?: string;
  /** Start DateTime(RFC 3339 literal format) of the last updated time range to filter tests. */
  lastModifiedStartTime?: Date | string;
  /** End DateTime(RFC 3339 literal format) of the last updated time range to filter tests. */
  lastModifiedEndTime?: Date | string;
  /** Number of results in response. */
  maxpagesize?: number;
}

export interface LoadTestAdministrationListTestsQueryParam {
  queryParameters?: LoadTestAdministrationListTestsQueryParamProperties;
}

export type LoadTestAdministrationListTestsParameters =
  LoadTestAdministrationListTestsQueryParam & RequestParameters;

export interface LoadTestAdministrationUploadTestFileBodyParam {
  /**
   * The file content as application/octet-stream.
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface LoadTestAdministrationUploadTestFileQueryParamProperties {
  /**
   * File type
   *
   * Possible values: JMX_FILE, USER_PROPERTIES, ADDITIONAL_ARTIFACTS, ZIPPED_ARTIFACTS, URL_TEST_CONFIG_JSON
   */
  fileType?: string;
}

export interface LoadTestAdministrationUploadTestFileQueryParam {
  queryParameters?: LoadTestAdministrationUploadTestFileQueryParamProperties;
}

export interface LoadTestAdministrationUploadTestFileMediaTypesParam {
  /** Content type. */
  contentType: "application/octet-stream";
}

export type LoadTestAdministrationUploadTestFileParameters =
  LoadTestAdministrationUploadTestFileQueryParam &
    LoadTestAdministrationUploadTestFileMediaTypesParam &
    LoadTestAdministrationUploadTestFileBodyParam &
    RequestParameters;
export type LoadTestAdministrationGetTestFileParameters = RequestParameters;
export type LoadTestAdministrationDeleteTestFileParameters = RequestParameters;
export type LoadTestAdministrationListTestFilesParameters = RequestParameters;
/** App Component model. */
export type TestAppComponentsResourceMergeAndPatch = Partial<TestAppComponents>;

export interface LoadTestAdministrationCreateOrUpdateAppComponentsBodyParam {
  /** App Component model. */
  body: TestAppComponentsResourceMergeAndPatch;
}

export interface LoadTestAdministrationCreateOrUpdateAppComponentsMediaTypesParam {
  /** Content type. */
  contentType: "application/merge-patch+json";
}

export type LoadTestAdministrationCreateOrUpdateAppComponentsParameters =
  LoadTestAdministrationCreateOrUpdateAppComponentsMediaTypesParam &
    LoadTestAdministrationCreateOrUpdateAppComponentsBodyParam &
    RequestParameters;
export type LoadTestAdministrationGetAppComponentsParameters =
  RequestParameters;
/** Server metric configuration model. */
export type TestServerMetricConfigResourceMergeAndPatch =
  Partial<TestServerMetricConfig>;

export interface LoadTestAdministrationCreateOrUpdateServerMetricsConfigBodyParam {
  /** Server metric configuration model. */
  body: TestServerMetricConfigResourceMergeAndPatch;
}

export interface LoadTestAdministrationCreateOrUpdateServerMetricsConfigMediaTypesParam {
  /** Content type. */
  contentType: "application/merge-patch+json";
}

export type LoadTestAdministrationCreateOrUpdateServerMetricsConfigParameters =
  LoadTestAdministrationCreateOrUpdateServerMetricsConfigMediaTypesParam &
    LoadTestAdministrationCreateOrUpdateServerMetricsConfigBodyParam &
    RequestParameters;
export type LoadTestAdministrationGetServerMetricsConfigParameters =
  RequestParameters;
export type LoadTestRunGetTestRunParameters = RequestParameters;
/** The resource instance. */
export type TestRunResourceMergeAndPatch = Partial<TestRun>;

export interface LoadTestRunCreateOrUpdateTestRunBodyParam {
  /** The resource instance. */
  body: TestRunResourceMergeAndPatch;
}

export interface LoadTestRunCreateOrUpdateTestRunQueryParamProperties {
  /**
   * Existing test run identifier that should be rerun, if this is provided, the
   * test will run with the JMX file, configuration and app components from the
   * existing test run. You can override the configuration values for new test run
   * in the request body.
   */
  oldTestRunId?: string;
}

export interface LoadTestRunCreateOrUpdateTestRunQueryParam {
  queryParameters?: LoadTestRunCreateOrUpdateTestRunQueryParamProperties;
}

export interface LoadTestRunCreateOrUpdateTestRunMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type LoadTestRunCreateOrUpdateTestRunParameters =
  LoadTestRunCreateOrUpdateTestRunQueryParam &
    LoadTestRunCreateOrUpdateTestRunMediaTypesParam &
    LoadTestRunCreateOrUpdateTestRunBodyParam &
    RequestParameters;
export type LoadTestRunDeleteTestRunParameters = RequestParameters;

export interface LoadTestRunListTestRunsQueryParamProperties {
  /**
   * Sort on the supported fields in (field asc/desc) format. eg: executedDateTime
   * asc. Supported fields - executedDateTime
   */
  orderby?: string;
  /**
   * Prefix based, case sensitive search on searchable fields - description,
   * executedUser. For example, to search for a test run, with description 500 VUs,
   * the search parameter can be 500.
   */
  search?: string;
  /** Unique name of an existing load test. */
  testId?: string;
  /** Start DateTime(RFC 3339 literal format) of test-run execution time filter range. */
  executionFrom?: Date | string;
  /** End DateTime(RFC 3339 literal format) of test-run execution time filter range. */
  executionTo?: Date | string;
  /** Comma separated list of test run status. */
  status?: string;
  /** Number of results in response. */
  maxpagesize?: number;
}

export interface LoadTestRunListTestRunsQueryParam {
  queryParameters?: LoadTestRunListTestRunsQueryParamProperties;
}

export type LoadTestRunListTestRunsParameters =
  LoadTestRunListTestRunsQueryParam & RequestParameters;
export type LoadTestRunGetTestRunFileParameters = RequestParameters;
export type LoadTestRunStopParameters = RequestParameters;
export type LoadTestRunListMetricNamespacesParameters = RequestParameters;

export interface LoadTestRunListMetricDefinitionsQueryParamProperties {
  /** Metric namespace to query metric definitions for. */
  metricNamespace: string;
}

export interface LoadTestRunListMetricDefinitionsQueryParam {
  queryParameters: LoadTestRunListMetricDefinitionsQueryParamProperties;
}

export type LoadTestRunListMetricDefinitionsParameters =
  LoadTestRunListMetricDefinitionsQueryParam & RequestParameters;

export interface LoadTestRunListMetricsBodyParam {
  /** Metric dimension filter */
  body?: MetricRequestPayload;
}

export interface LoadTestRunListMetricsQueryParamProperties {
  /** The aggregation */
  aggregation?: string;
  /** Metric name */
  metricname: string;
  /**
   * The interval (i.e. timegrain) of the query.
   *
   * Possible values: PT5S, PT10S, PT1M, PT5M, PT1H
   */
  interval?: string;
  /** Metric namespace to query metric definitions for. */
  metricNamespace: string;
  /** The timespan of the query. It is a string with the following format 'startDateTime_ISO/endDateTime_ISO'. */
  timespan: string;
}

export interface LoadTestRunListMetricsQueryParam {
  queryParameters: LoadTestRunListMetricsQueryParamProperties;
}

export type LoadTestRunListMetricsParameters =
  LoadTestRunListMetricsQueryParam &
    LoadTestRunListMetricsBodyParam &
    RequestParameters;

export interface LoadTestRunListMetricDimensionValuesQueryParamProperties {
  /** Metric name */
  metricname: string;
  /**
   * The interval (i.e. timegrain) of the query.
   *
   * Possible values: PT5S, PT10S, PT1M, PT5M, PT1H
   */
  interval?: string;
  /** Metric namespace to query metric definitions for. */
  metricNamespace: string;
  /** The timespan of the query. It is a string with the following format 'startDateTime_ISO/endDateTime_ISO'. */
  timespan: string;
}

export interface LoadTestRunListMetricDimensionValuesQueryParam {
  queryParameters: LoadTestRunListMetricDimensionValuesQueryParamProperties;
}

export type LoadTestRunListMetricDimensionValuesParameters =
  LoadTestRunListMetricDimensionValuesQueryParam & RequestParameters;
/** App Component model. */
export type TestRunAppComponentsResourceMergeAndPatch =
  Partial<TestRunAppComponents>;

export interface LoadTestRunCreateOrUpdateAppComponentsBodyParam {
  /** App Component model. */
  body: TestRunAppComponentsResourceMergeAndPatch;
}

export interface LoadTestRunCreateOrUpdateAppComponentsMediaTypesParam {
  /** Content type. */
  contentType: "application/merge-patch+json";
}

export type LoadTestRunCreateOrUpdateAppComponentsParameters =
  LoadTestRunCreateOrUpdateAppComponentsMediaTypesParam &
    LoadTestRunCreateOrUpdateAppComponentsBodyParam &
    RequestParameters;
export type LoadTestRunGetAppComponentsParameters = RequestParameters;
/** Server metric configuration model. */
export type TestRunServerMetricConfigResourceMergeAndPatch =
  Partial<TestRunServerMetricConfig>;

export interface LoadTestRunCreateOrUpdateServerMetricsConfigBodyParam {
  /** Server metric configuration model. */
  body: TestRunServerMetricConfigResourceMergeAndPatch;
}

export interface LoadTestRunCreateOrUpdateServerMetricsConfigMediaTypesParam {
  /** Content type. */
  contentType: "application/merge-patch+json";
}

export type LoadTestRunCreateOrUpdateServerMetricsConfigParameters =
  LoadTestRunCreateOrUpdateServerMetricsConfigMediaTypesParam &
    LoadTestRunCreateOrUpdateServerMetricsConfigBodyParam &
    RequestParameters;
export type LoadTestRunGetServerMetricsConfigParameters = RequestParameters;
