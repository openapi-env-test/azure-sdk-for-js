/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/jobMappers";
import * as Parameters from "../models/parameters";
import { BatchServiceClientContext } from "../batchServiceClientContext";

/** Class representing a Job. */
export class Job {
  private readonly client: BatchServiceClientContext;

  /**
   * Create a Job.
   * @param {BatchServiceClientContext} client Reference to the service client.
   */
  constructor(client: BatchServiceClientContext) {
    this.client = client;
  }

  /**
   * Deleting a Job also deletes all Tasks that are part of that Job, and all Job statistics. This
   * also overrides the retention period for Task data; that is, if the Job contains Tasks which are
   * still retained on Compute Nodes, the Batch services deletes those Tasks' working directories and
   * all their contents.  When a Delete Job request is received, the Batch service sets the Job to
   * the deleting state. All update operations on a Job that is in deleting state will fail with
   * status code 409 (Conflict), with additional information indicating that the Job is being
   * deleted.
   * @summary Deletes a Job.
   * @param jobId The ID of the Job to delete.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobDeleteResponse>
   */
  deleteMethod(jobId: string, options?: Models.JobDeleteMethodOptionalParams): Promise<Models.JobDeleteResponse>;
  /**
   * @param jobId The ID of the Job to delete.
   * @param callback The callback
   */
  deleteMethod(jobId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param jobId The ID of the Job to delete.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(jobId: string, options: Models.JobDeleteMethodOptionalParams, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(jobId: string, options?: Models.JobDeleteMethodOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.JobDeleteResponse> {
    return this.client.sendOperationRequest(
      {
        jobId,
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.JobDeleteResponse>;
  }

  /**
   * @summary Gets information about the specified Job.
   * @param jobId The ID of the Job.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobGetResponse>
   */
  get(jobId: string, options?: Models.JobGetOptionalParams): Promise<Models.JobGetResponse>;
  /**
   * @param jobId The ID of the Job.
   * @param callback The callback
   */
  get(jobId: string, callback: msRest.ServiceCallback<Models.CloudJob>): void;
  /**
   * @param jobId The ID of the Job.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(jobId: string, options: Models.JobGetOptionalParams, callback: msRest.ServiceCallback<Models.CloudJob>): void;
  get(jobId: string, options?: Models.JobGetOptionalParams | msRest.ServiceCallback<Models.CloudJob>, callback?: msRest.ServiceCallback<Models.CloudJob>): Promise<Models.JobGetResponse> {
    return this.client.sendOperationRequest(
      {
        jobId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.JobGetResponse>;
  }

  /**
   * This replaces only the Job properties specified in the request. For example, if the Job has
   * constraints, and a request does not specify the constraints element, then the Job keeps the
   * existing constraints.
   * @summary Updates the properties of the specified Job.
   * @param jobId The ID of the Job whose properties you want to update.
   * @param jobPatchParameter The parameters for the request.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobPatchResponse>
   */
  patch(jobId: string, jobPatchParameter: Models.JobPatchParameter, options?: Models.JobPatchOptionalParams): Promise<Models.JobPatchResponse>;
  /**
   * @param jobId The ID of the Job whose properties you want to update.
   * @param jobPatchParameter The parameters for the request.
   * @param callback The callback
   */
  patch(jobId: string, jobPatchParameter: Models.JobPatchParameter, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param jobId The ID of the Job whose properties you want to update.
   * @param jobPatchParameter The parameters for the request.
   * @param options The optional parameters
   * @param callback The callback
   */
  patch(jobId: string, jobPatchParameter: Models.JobPatchParameter, options: Models.JobPatchOptionalParams, callback: msRest.ServiceCallback<void>): void;
  patch(jobId: string, jobPatchParameter: Models.JobPatchParameter, options?: Models.JobPatchOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.JobPatchResponse> {
    return this.client.sendOperationRequest(
      {
        jobId,
        jobPatchParameter,
        options
      },
      patchOperationSpec,
      callback) as Promise<Models.JobPatchResponse>;
  }

  /**
   * This fully replaces all the updatable properties of the Job. For example, if the Job has
   * constraints associated with it and if constraints is not specified with this request, then the
   * Batch service will remove the existing constraints.
   * @summary Updates the properties of the specified Job.
   * @param jobId The ID of the Job whose properties you want to update.
   * @param jobUpdateParameter The parameters for the request.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobUpdateResponse>
   */
  update(jobId: string, jobUpdateParameter: Models.JobUpdateParameter, options?: Models.JobUpdateOptionalParams): Promise<Models.JobUpdateResponse>;
  /**
   * @param jobId The ID of the Job whose properties you want to update.
   * @param jobUpdateParameter The parameters for the request.
   * @param callback The callback
   */
  update(jobId: string, jobUpdateParameter: Models.JobUpdateParameter, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param jobId The ID of the Job whose properties you want to update.
   * @param jobUpdateParameter The parameters for the request.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(jobId: string, jobUpdateParameter: Models.JobUpdateParameter, options: Models.JobUpdateOptionalParams, callback: msRest.ServiceCallback<void>): void;
  update(jobId: string, jobUpdateParameter: Models.JobUpdateParameter, options?: Models.JobUpdateOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.JobUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        jobId,
        jobUpdateParameter,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.JobUpdateResponse>;
  }

  /**
   * The Batch Service immediately moves the Job to the disabling state. Batch then uses the
   * disableTasks parameter to determine what to do with the currently running Tasks of the Job. The
   * Job remains in the disabling state until the disable operation is completed and all Tasks have
   * been dealt with according to the disableTasks option; the Job then moves to the disabled state.
   * No new Tasks are started under the Job until it moves back to active state. If you try to
   * disable a Job that is in any state other than active, disabling, or disabled, the request fails
   * with status code 409.
   * @summary Disables the specified Job, preventing new Tasks from running.
   * @param jobId The ID of the Job to disable.
   * @param disableTasks What to do with active Tasks associated with the Job. Possible values
   * include: 'requeue', 'terminate', 'wait'
   * @param [options] The optional parameters
   * @returns Promise<Models.JobDisableResponse>
   */
  disable(jobId: string, disableTasks: Models.DisableJobOption, options?: Models.JobDisableOptionalParams): Promise<Models.JobDisableResponse>;
  /**
   * @param jobId The ID of the Job to disable.
   * @param disableTasks What to do with active Tasks associated with the Job. Possible values
   * include: 'requeue', 'terminate', 'wait'
   * @param callback The callback
   */
  disable(jobId: string, disableTasks: Models.DisableJobOption, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param jobId The ID of the Job to disable.
   * @param disableTasks What to do with active Tasks associated with the Job. Possible values
   * include: 'requeue', 'terminate', 'wait'
   * @param options The optional parameters
   * @param callback The callback
   */
  disable(jobId: string, disableTasks: Models.DisableJobOption, options: Models.JobDisableOptionalParams, callback: msRest.ServiceCallback<void>): void;
  disable(jobId: string, disableTasks: Models.DisableJobOption, options?: Models.JobDisableOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.JobDisableResponse> {
    return this.client.sendOperationRequest(
      {
        jobId,
        disableTasks,
        options
      },
      disableOperationSpec,
      callback) as Promise<Models.JobDisableResponse>;
  }

  /**
   * When you call this API, the Batch service sets a disabled Job to the enabling state. After the
   * this operation is completed, the Job moves to the active state, and scheduling of new Tasks
   * under the Job resumes. The Batch service does not allow a Task to remain in the active state for
   * more than 180 days. Therefore, if you enable a Job containing active Tasks which were added more
   * than 180 days ago, those Tasks will not run.
   * @summary Enables the specified Job, allowing new Tasks to run.
   * @param jobId The ID of the Job to enable.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobEnableResponse>
   */
  enable(jobId: string, options?: Models.JobEnableOptionalParams): Promise<Models.JobEnableResponse>;
  /**
   * @param jobId The ID of the Job to enable.
   * @param callback The callback
   */
  enable(jobId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param jobId The ID of the Job to enable.
   * @param options The optional parameters
   * @param callback The callback
   */
  enable(jobId: string, options: Models.JobEnableOptionalParams, callback: msRest.ServiceCallback<void>): void;
  enable(jobId: string, options?: Models.JobEnableOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.JobEnableResponse> {
    return this.client.sendOperationRequest(
      {
        jobId,
        options
      },
      enableOperationSpec,
      callback) as Promise<Models.JobEnableResponse>;
  }

  /**
   * When a Terminate Job request is received, the Batch service sets the Job to the terminating
   * state. The Batch service then terminates any running Tasks associated with the Job and runs any
   * required Job release Tasks. Then the Job moves into the completed state. If there are any Tasks
   * in the Job in the active state, they will remain in the active state. Once a Job is terminated,
   * new Tasks cannot be added and any remaining active Tasks will not be scheduled.
   * @summary Terminates the specified Job, marking it as completed.
   * @param jobId The ID of the Job to terminate.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobTerminateResponse>
   */
  terminate(jobId: string, options?: Models.JobTerminateOptionalParams): Promise<Models.JobTerminateResponse>;
  /**
   * @param jobId The ID of the Job to terminate.
   * @param callback The callback
   */
  terminate(jobId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param jobId The ID of the Job to terminate.
   * @param options The optional parameters
   * @param callback The callback
   */
  terminate(jobId: string, options: Models.JobTerminateOptionalParams, callback: msRest.ServiceCallback<void>): void;
  terminate(jobId: string, options?: Models.JobTerminateOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.JobTerminateResponse> {
    return this.client.sendOperationRequest(
      {
        jobId,
        options
      },
      terminateOperationSpec,
      callback) as Promise<Models.JobTerminateResponse>;
  }

  /**
   * The Batch service supports two ways to control the work done as part of a Job. In the first
   * approach, the user specifies a Job Manager Task. The Batch service launches this Task when it is
   * ready to start the Job. The Job Manager Task controls all other Tasks that run under this Job,
   * by using the Task APIs. In the second approach, the user directly controls the execution of
   * Tasks under an active Job, by using the Task APIs. Also note: when naming Jobs, avoid including
   * sensitive information such as user names or secret project names. This information may appear in
   * telemetry logs accessible to Microsoft Support engineers.
   * @summary Adds a Job to the specified Account.
   * @param job The Job to be added.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobAddResponse>
   */
  add(job: Models.JobAddParameter, options?: Models.JobAddOptionalParams): Promise<Models.JobAddResponse>;
  /**
   * @param job The Job to be added.
   * @param callback The callback
   */
  add(job: Models.JobAddParameter, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param job The Job to be added.
   * @param options The optional parameters
   * @param callback The callback
   */
  add(job: Models.JobAddParameter, options: Models.JobAddOptionalParams, callback: msRest.ServiceCallback<void>): void;
  add(job: Models.JobAddParameter, options?: Models.JobAddOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.JobAddResponse> {
    return this.client.sendOperationRequest(
      {
        job,
        options
      },
      addOperationSpec,
      callback) as Promise<Models.JobAddResponse>;
  }

  /**
   * @summary Lists all of the Jobs in the specified Account.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobListResponse>
   */
  list(options?: Models.JobListOptionalParams): Promise<Models.JobListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.CloudJobListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.JobListOptionalParams, callback: msRest.ServiceCallback<Models.CloudJobListResult>): void;
  list(options?: Models.JobListOptionalParams | msRest.ServiceCallback<Models.CloudJobListResult>, callback?: msRest.ServiceCallback<Models.CloudJobListResult>): Promise<Models.JobListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.JobListResponse>;
  }

  /**
   * @summary Lists the Jobs that have been created under the specified Job Schedule.
   * @param jobScheduleId The ID of the Job Schedule from which you want to get a list of Jobs.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobListFromJobScheduleResponse>
   */
  listFromJobSchedule(jobScheduleId: string, options?: Models.JobListFromJobScheduleOptionalParams): Promise<Models.JobListFromJobScheduleResponse>;
  /**
   * @param jobScheduleId The ID of the Job Schedule from which you want to get a list of Jobs.
   * @param callback The callback
   */
  listFromJobSchedule(jobScheduleId: string, callback: msRest.ServiceCallback<Models.CloudJobListResult>): void;
  /**
   * @param jobScheduleId The ID of the Job Schedule from which you want to get a list of Jobs.
   * @param options The optional parameters
   * @param callback The callback
   */
  listFromJobSchedule(jobScheduleId: string, options: Models.JobListFromJobScheduleOptionalParams, callback: msRest.ServiceCallback<Models.CloudJobListResult>): void;
  listFromJobSchedule(jobScheduleId: string, options?: Models.JobListFromJobScheduleOptionalParams | msRest.ServiceCallback<Models.CloudJobListResult>, callback?: msRest.ServiceCallback<Models.CloudJobListResult>): Promise<Models.JobListFromJobScheduleResponse> {
    return this.client.sendOperationRequest(
      {
        jobScheduleId,
        options
      },
      listFromJobScheduleOperationSpec,
      callback) as Promise<Models.JobListFromJobScheduleResponse>;
  }

  /**
   * This API returns the Job Preparation and Job Release Task status on all Compute Nodes that have
   * run the Job Preparation or Job Release Task. This includes Compute Nodes which have since been
   * removed from the Pool. If this API is invoked on a Job which has no Job Preparation or Job
   * Release Task, the Batch service returns HTTP status code 409 (Conflict) with an error code of
   * JobPreparationTaskNotSpecified.
   * @summary Lists the execution status of the Job Preparation and Job Release Task for the
   * specified Job across the Compute Nodes where the Job has run.
   * @param jobId The ID of the Job.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobListPreparationAndReleaseTaskStatusResponse>
   */
  listPreparationAndReleaseTaskStatus(jobId: string, options?: Models.JobListPreparationAndReleaseTaskStatusOptionalParams): Promise<Models.JobListPreparationAndReleaseTaskStatusResponse>;
  /**
   * @param jobId The ID of the Job.
   * @param callback The callback
   */
  listPreparationAndReleaseTaskStatus(jobId: string, callback: msRest.ServiceCallback<Models.CloudJobListPreparationAndReleaseTaskStatusResult>): void;
  /**
   * @param jobId The ID of the Job.
   * @param options The optional parameters
   * @param callback The callback
   */
  listPreparationAndReleaseTaskStatus(jobId: string, options: Models.JobListPreparationAndReleaseTaskStatusOptionalParams, callback: msRest.ServiceCallback<Models.CloudJobListPreparationAndReleaseTaskStatusResult>): void;
  listPreparationAndReleaseTaskStatus(jobId: string, options?: Models.JobListPreparationAndReleaseTaskStatusOptionalParams | msRest.ServiceCallback<Models.CloudJobListPreparationAndReleaseTaskStatusResult>, callback?: msRest.ServiceCallback<Models.CloudJobListPreparationAndReleaseTaskStatusResult>): Promise<Models.JobListPreparationAndReleaseTaskStatusResponse> {
    return this.client.sendOperationRequest(
      {
        jobId,
        options
      },
      listPreparationAndReleaseTaskStatusOperationSpec,
      callback) as Promise<Models.JobListPreparationAndReleaseTaskStatusResponse>;
  }

  /**
   * Task counts provide a count of the Tasks by active, running or completed Task state, and a count
   * of Tasks which succeeded or failed. Tasks in the preparing state are counted as running. Note
   * that the numbers returned may not always be up to date. If you need exact task counts, use a
   * list query.
   * @summary Gets the Task counts for the specified Job.
   * @param jobId The ID of the Job.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobGetTaskCountsResponse>
   */
  getTaskCounts(jobId: string, options?: Models.JobGetTaskCountsOptionalParams): Promise<Models.JobGetTaskCountsResponse>;
  /**
   * @param jobId The ID of the Job.
   * @param callback The callback
   */
  getTaskCounts(jobId: string, callback: msRest.ServiceCallback<Models.TaskCountsResult>): void;
  /**
   * @param jobId The ID of the Job.
   * @param options The optional parameters
   * @param callback The callback
   */
  getTaskCounts(jobId: string, options: Models.JobGetTaskCountsOptionalParams, callback: msRest.ServiceCallback<Models.TaskCountsResult>): void;
  getTaskCounts(jobId: string, options?: Models.JobGetTaskCountsOptionalParams | msRest.ServiceCallback<Models.TaskCountsResult>, callback?: msRest.ServiceCallback<Models.TaskCountsResult>): Promise<Models.JobGetTaskCountsResponse> {
    return this.client.sendOperationRequest(
      {
        jobId,
        options
      },
      getTaskCountsOperationSpec,
      callback) as Promise<Models.JobGetTaskCountsResponse>;
  }

  /**
   * @summary Lists all of the Jobs in the specified Account.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobListResponse>
   */
  listNext(nextPageLink: string, options?: Models.JobListNextOptionalParams): Promise<Models.JobListResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CloudJobListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.JobListNextOptionalParams, callback: msRest.ServiceCallback<Models.CloudJobListResult>): void;
  listNext(nextPageLink: string, options?: Models.JobListNextOptionalParams | msRest.ServiceCallback<Models.CloudJobListResult>, callback?: msRest.ServiceCallback<Models.CloudJobListResult>): Promise<Models.JobListResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.JobListResponse>;
  }

  /**
   * @summary Lists the Jobs that have been created under the specified Job Schedule.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobListFromJobScheduleResponse>
   */
  listFromJobScheduleNext(nextPageLink: string, options?: Models.JobListFromJobScheduleNextOptionalParams): Promise<Models.JobListFromJobScheduleResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listFromJobScheduleNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CloudJobListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listFromJobScheduleNext(nextPageLink: string, options: Models.JobListFromJobScheduleNextOptionalParams, callback: msRest.ServiceCallback<Models.CloudJobListResult>): void;
  listFromJobScheduleNext(nextPageLink: string, options?: Models.JobListFromJobScheduleNextOptionalParams | msRest.ServiceCallback<Models.CloudJobListResult>, callback?: msRest.ServiceCallback<Models.CloudJobListResult>): Promise<Models.JobListFromJobScheduleResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listFromJobScheduleNextOperationSpec,
      callback) as Promise<Models.JobListFromJobScheduleResponse>;
  }

  /**
   * This API returns the Job Preparation and Job Release Task status on all Compute Nodes that have
   * run the Job Preparation or Job Release Task. This includes Compute Nodes which have since been
   * removed from the Pool. If this API is invoked on a Job which has no Job Preparation or Job
   * Release Task, the Batch service returns HTTP status code 409 (Conflict) with an error code of
   * JobPreparationTaskNotSpecified.
   * @summary Lists the execution status of the Job Preparation and Job Release Task for the
   * specified Job across the Compute Nodes where the Job has run.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobListPreparationAndReleaseTaskStatusResponse>
   */
  listPreparationAndReleaseTaskStatusNext(nextPageLink: string, options?: Models.JobListPreparationAndReleaseTaskStatusNextOptionalParams): Promise<Models.JobListPreparationAndReleaseTaskStatusResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listPreparationAndReleaseTaskStatusNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CloudJobListPreparationAndReleaseTaskStatusResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listPreparationAndReleaseTaskStatusNext(nextPageLink: string, options: Models.JobListPreparationAndReleaseTaskStatusNextOptionalParams, callback: msRest.ServiceCallback<Models.CloudJobListPreparationAndReleaseTaskStatusResult>): void;
  listPreparationAndReleaseTaskStatusNext(nextPageLink: string, options?: Models.JobListPreparationAndReleaseTaskStatusNextOptionalParams | msRest.ServiceCallback<Models.CloudJobListPreparationAndReleaseTaskStatusResult>, callback?: msRest.ServiceCallback<Models.CloudJobListPreparationAndReleaseTaskStatusResult>): Promise<Models.JobListPreparationAndReleaseTaskStatusResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listPreparationAndReleaseTaskStatusNextOperationSpec,
      callback) as Promise<Models.JobListPreparationAndReleaseTaskStatusResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "jobs/{jobId}",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout41
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId50,
    Parameters.returnClientRequestId50,
    Parameters.ocpDate50,
    Parameters.ifMatch16,
    Parameters.ifNoneMatch16,
    Parameters.ifModifiedSince20,
    Parameters.ifUnmodifiedSince20
  ],
  responses: {
    202: {
      headersMapper: Mappers.JobDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobDeleteHeaders
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "jobs/{jobId}",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.select6,
    Parameters.expand4,
    Parameters.timeout42
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId51,
    Parameters.returnClientRequestId51,
    Parameters.ocpDate51,
    Parameters.ifMatch17,
    Parameters.ifNoneMatch17,
    Parameters.ifModifiedSince21,
    Parameters.ifUnmodifiedSince21
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CloudJob,
      headersMapper: Mappers.JobGetHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobGetHeaders
    }
  },
  serializer
};

const patchOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "jobs/{jobId}",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout43
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId52,
    Parameters.returnClientRequestId52,
    Parameters.ocpDate52,
    Parameters.ifMatch18,
    Parameters.ifNoneMatch18,
    Parameters.ifModifiedSince22,
    Parameters.ifUnmodifiedSince22
  ],
  requestBody: {
    parameterPath: "jobPatchParameter",
    mapper: {
      ...Mappers.JobPatchParameter,
      required: true
    }
  },
  contentType: "application/json; odata=minimalmetadata; charset=utf-8",
  responses: {
    200: {
      headersMapper: Mappers.JobPatchHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobPatchHeaders
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "jobs/{jobId}",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout44
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId53,
    Parameters.returnClientRequestId53,
    Parameters.ocpDate53,
    Parameters.ifMatch19,
    Parameters.ifNoneMatch19,
    Parameters.ifModifiedSince23,
    Parameters.ifUnmodifiedSince23
  ],
  requestBody: {
    parameterPath: "jobUpdateParameter",
    mapper: {
      ...Mappers.JobUpdateParameter,
      required: true
    }
  },
  contentType: "application/json; odata=minimalmetadata; charset=utf-8",
  responses: {
    200: {
      headersMapper: Mappers.JobUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobUpdateHeaders
    }
  },
  serializer
};

const disableOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "jobs/{jobId}/disable",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout45
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId54,
    Parameters.returnClientRequestId54,
    Parameters.ocpDate54,
    Parameters.ifMatch20,
    Parameters.ifNoneMatch20,
    Parameters.ifModifiedSince24,
    Parameters.ifUnmodifiedSince24
  ],
  requestBody: {
    parameterPath: {
      disableTasks: "disableTasks"
    },
    mapper: {
      ...Mappers.JobDisableParameter,
      required: true
    }
  },
  contentType: "application/json; odata=minimalmetadata; charset=utf-8",
  responses: {
    202: {
      headersMapper: Mappers.JobDisableHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobDisableHeaders
    }
  },
  serializer
};

const enableOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "jobs/{jobId}/enable",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout46
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId55,
    Parameters.returnClientRequestId55,
    Parameters.ocpDate55,
    Parameters.ifMatch21,
    Parameters.ifNoneMatch21,
    Parameters.ifModifiedSince25,
    Parameters.ifUnmodifiedSince25
  ],
  responses: {
    202: {
      headersMapper: Mappers.JobEnableHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobEnableHeaders
    }
  },
  serializer
};

const terminateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "jobs/{jobId}/terminate",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout47
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId56,
    Parameters.returnClientRequestId56,
    Parameters.ocpDate56,
    Parameters.ifMatch22,
    Parameters.ifNoneMatch22,
    Parameters.ifModifiedSince26,
    Parameters.ifUnmodifiedSince26
  ],
  requestBody: {
    parameterPath: {
      terminateReason: [
        "options",
        "terminateReason"
      ]
    },
    mapper: Mappers.JobTerminateParameter
  },
  contentType: "application/json; odata=minimalmetadata; charset=utf-8",
  responses: {
    202: {
      headersMapper: Mappers.JobTerminateHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobTerminateHeaders
    }
  },
  serializer
};

const addOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "jobs",
  urlParameters: [
    Parameters.batchUrl
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout48
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId57,
    Parameters.returnClientRequestId57,
    Parameters.ocpDate57
  ],
  requestBody: {
    parameterPath: "job",
    mapper: {
      ...Mappers.JobAddParameter,
      required: true
    }
  },
  contentType: "application/json; odata=minimalmetadata; charset=utf-8",
  responses: {
    201: {
      headersMapper: Mappers.JobAddHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobAddHeaders
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "jobs",
  urlParameters: [
    Parameters.batchUrl
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter8,
    Parameters.select7,
    Parameters.expand5,
    Parameters.maxResults9,
    Parameters.timeout49
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId58,
    Parameters.returnClientRequestId58,
    Parameters.ocpDate58
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CloudJobListResult,
      headersMapper: Mappers.JobListHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobListHeaders
    }
  },
  serializer
};

const listFromJobScheduleOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "jobschedules/{jobScheduleId}/jobs",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobScheduleId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter9,
    Parameters.select8,
    Parameters.expand6,
    Parameters.maxResults10,
    Parameters.timeout50
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId59,
    Parameters.returnClientRequestId59,
    Parameters.ocpDate59
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CloudJobListResult,
      headersMapper: Mappers.JobListFromJobScheduleHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobListFromJobScheduleHeaders
    }
  },
  serializer
};

const listPreparationAndReleaseTaskStatusOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "jobs/{jobId}/jobpreparationandreleasetaskstatus",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter10,
    Parameters.select9,
    Parameters.maxResults11,
    Parameters.timeout51
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId60,
    Parameters.returnClientRequestId60,
    Parameters.ocpDate60
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CloudJobListPreparationAndReleaseTaskStatusResult,
      headersMapper: Mappers.JobListPreparationAndReleaseTaskStatusHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobListPreparationAndReleaseTaskStatusHeaders
    }
  },
  serializer
};

const getTaskCountsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "jobs/{jobId}/taskcounts",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.jobId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout52
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId61,
    Parameters.returnClientRequestId61,
    Parameters.ocpDate61
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TaskCountsResult,
      headersMapper: Mappers.JobGetTaskCountsHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobGetTaskCountsHeaders
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "{batchUrl}",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId62,
    Parameters.returnClientRequestId62,
    Parameters.ocpDate62
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CloudJobListResult,
      headersMapper: Mappers.JobListHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobListHeaders
    }
  },
  serializer
};

const listFromJobScheduleNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "{batchUrl}",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId63,
    Parameters.returnClientRequestId63,
    Parameters.ocpDate63
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CloudJobListResult,
      headersMapper: Mappers.JobListFromJobScheduleHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobListFromJobScheduleHeaders
    }
  },
  serializer
};

const listPreparationAndReleaseTaskStatusNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "{batchUrl}",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId64,
    Parameters.returnClientRequestId64,
    Parameters.ocpDate64
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CloudJobListPreparationAndReleaseTaskStatusResult,
      headersMapper: Mappers.JobListPreparationAndReleaseTaskStatusHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError,
      headersMapper: Mappers.JobListPreparationAndReleaseTaskStatusHeaders
    }
  },
  serializer
};
