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
import * as Models from "../models";
import * as Mappers from "../models/assessmentsMappers";
import * as Parameters from "../models/parameters";
import { AzureMigrateContext } from "../azureMigrateContext";

/** Class representing a Assessments. */
export class Assessments {
  private readonly client: AzureMigrateContext;

  /**
   * Create a Assessments.
   * @param {AzureMigrateContext} client Reference to the service client.
   */
  constructor(client: AzureMigrateContext) {
    this.client = client;
  }

  /**
   * Get all assessments created for the specified group.
   *
   * Returns a json array of objects of type 'assessment' as specified in Models section.
   * @summary Get all assessments created for the specified group.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param [options] The optional parameters
   * @returns Promise<Models.AssessmentsListByGroupResponse>
   */
  listByGroup(resourceGroupName: string, projectName: string, groupName: string, options?: msRest.RequestOptionsBase): Promise<Models.AssessmentsListByGroupResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param callback The callback
   */
  listByGroup(resourceGroupName: string, projectName: string, groupName: string, callback: msRest.ServiceCallback<Models.AssessmentResultList>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByGroup(resourceGroupName: string, projectName: string, groupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AssessmentResultList>): void;
  listByGroup(resourceGroupName: string, projectName: string, groupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AssessmentResultList>, callback?: msRest.ServiceCallback<Models.AssessmentResultList>): Promise<Models.AssessmentsListByGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        groupName,
        options
      },
      listByGroupOperationSpec,
      callback) as Promise<Models.AssessmentsListByGroupResponse>;
  }

  /**
   * Get all assessments created in the project.
   *
   * Returns a json array of objects of type 'assessment' as specified in Models section.
   * @summary Get all assessments created in the project.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param [options] The optional parameters
   * @returns Promise<Models.AssessmentsListByProjectResponse>
   */
  listByProject(resourceGroupName: string, projectName: string, options?: msRest.RequestOptionsBase): Promise<Models.AssessmentsListByProjectResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param callback The callback
   */
  listByProject(resourceGroupName: string, projectName: string, callback: msRest.ServiceCallback<Models.AssessmentResultList>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByProject(resourceGroupName: string, projectName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AssessmentResultList>): void;
  listByProject(resourceGroupName: string, projectName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AssessmentResultList>, callback?: msRest.ServiceCallback<Models.AssessmentResultList>): Promise<Models.AssessmentsListByProjectResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        options
      },
      listByProjectOperationSpec,
      callback) as Promise<Models.AssessmentsListByProjectResponse>;
  }

  /**
   * Get an existing assessment with the specified name. Returns a json object of type 'assessment'
   * as specified in Models section.
   * @summary Get an assessment.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param [options] The optional parameters
   * @returns Promise<Models.AssessmentsGetResponse>
   */
  get(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, options?: msRest.RequestOptionsBase): Promise<Models.AssessmentsGetResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param callback The callback
   */
  get(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, callback: msRest.ServiceCallback<Models.Assessment>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Assessment>): void;
  get(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Assessment>, callback?: msRest.ServiceCallback<Models.Assessment>): Promise<Models.AssessmentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        groupName,
        assessmentName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AssessmentsGetResponse>;
  }

  /**
   * Create a new assessment with the given name and the specified settings. Since name of an
   * assessment in a project is a unique identifier, if an assessment with the name provided already
   * exists, then the existing assessment is updated.
   *
   * Any PUT operation, resulting in either create or update on an assessment, will cause the
   * assessment to go in a "InProgress" state. This will be indicated by the field 'computationState'
   * on the Assessment object. During this time no other PUT operation will be allowed on that
   * assessment object, nor will a Delete operation. Once the computation for the assessment is
   * complete, the field 'computationState' will be updated to 'Ready', and then other PUT or DELETE
   * operations can happen on the assessment.
   *
   * When assessment is under computation, any PUT will lead to a 400 - Bad Request error.
   * @summary Create or Update assessment.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param azureLocation Target Azure location for which the machines should be assessed. These
   * enums are the same as used by Compute API. Possible values include: 'Unknown', 'EastAsia',
   * 'SoutheastAsia', 'AustraliaEast', 'AustraliaSoutheast', 'BrazilSouth', 'CanadaCentral',
   * 'CanadaEast', 'WestEurope', 'NorthEurope', 'CentralIndia', 'SouthIndia', 'WestIndia',
   * 'JapanEast', 'JapanWest', 'KoreaCentral', 'KoreaSouth', 'UkWest', 'UkSouth', 'NorthCentralUs',
   * 'EastUs', 'WestUs2', 'SouthCentralUs', 'CentralUs', 'EastUs2', 'WestUs', 'WestCentralUs',
   * 'GermanyCentral', 'GermanyNortheast', 'ChinaNorth', 'ChinaEast'
   * @param azureOfferCode Offer code according to which cost estimation is done. Possible values
   * include: 'Unknown', 'MSAZR0003P', 'MSAZR0044P', 'MSAZR0059P', 'MSAZR0060P', 'MSAZR0062P',
   * 'MSAZR0063P', 'MSAZR0064P', 'MSAZR0029P', 'MSAZR0022P', 'MSAZR0023P', 'MSAZR0148P',
   * 'MSAZR0025P', 'MSAZR0036P', 'MSAZR0120P', 'MSAZR0121P', 'MSAZR0122P', 'MSAZR0123P',
   * 'MSAZR0124P', 'MSAZR0125P', 'MSAZR0126P', 'MSAZR0127P', 'MSAZR0128P', 'MSAZR0129P',
   * 'MSAZR0130P', 'MSAZR0111P', 'MSAZR0144P', 'MSAZR0149P', 'MSMCAZR0044P', 'MSMCAZR0059P',
   * 'MSMCAZR0060P', 'MSMCAZR0063P', 'MSMCAZR0120P', 'MSMCAZR0121P', 'MSMCAZR0125P', 'MSMCAZR0128P',
   * 'MSAZRDE0003P', 'MSAZRDE0044P'
   * @param azurePricingTier Pricing tier for Size evaluation. Possible values include: 'Standard',
   * 'Basic'
   * @param azureStorageRedundancy Storage Redundancy type offered by Azure. Possible values include:
   * 'Unknown', 'LocallyRedundant', 'ZoneRedundant', 'GeoRedundant', 'ReadAccessGeoRedundant'
   * @param scalingFactor Scaling factor used over utilization data to add a performance buffer for
   * new machines to be created in Azure. Min Value = 1.0, Max value = 1.9, Default = 1.3.
   * @param percentile Percentile of performance data used to recommend Azure size. Possible values
   * include: 'Percentile50', 'Percentile90', 'Percentile95', 'Percentile99'
   * @param timeRange Time range of performance data used to recommend a size. Possible values
   * include: 'Day', 'Week', 'Month'
   * @param stage User configurable setting that describes the status of the assessment. Possible
   * values include: 'InProgress', 'UnderReview', 'Approved'
   * @param currency Currency to report prices in. Possible values include: 'Unknown', 'USD', 'DKK',
   * 'CAD', 'IDR', 'JPY', 'KRW', 'NZD', 'NOK', 'RUB', 'SAR', 'ZAR', 'SEK', 'TRY', 'GBP', 'MXN',
   * 'MYR', 'INR', 'HKD', 'BRL', 'TWD', 'EUR', 'CHF', 'ARS', 'AUD', 'CNY'
   * @param azureHybridUseBenefit AHUB discount on windows virtual machines. Possible values include:
   * 'Unknown', 'Yes', 'No'
   * @param discountPercentage Custom discount percentage to be applied on final costs. Can be in the
   * range [0, 100].
   * @param sizingCriterion Assessment sizing criterion. Possible values include: 'PerformanceBased',
   * 'AsOnPremises'
   * @param [options] The optional parameters
   * @returns Promise<Models.AssessmentsCreateResponse>
   */
  create(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, azureLocation: Models.AzureLocation, azureOfferCode: Models.AzureOfferCode, azurePricingTier: Models.AzurePricingTier, azureStorageRedundancy: Models.AzureStorageRedundancy, scalingFactor: number, percentile: Models.Percentile, timeRange: Models.TimeRange, stage: Models.AssessmentStage, currency: Models.Currency, azureHybridUseBenefit: Models.AzureHybridUseBenefit, discountPercentage: number, sizingCriterion: Models.AssessmentSizingCriterion, options?: Models.AssessmentsCreateOptionalParams): Promise<Models.AssessmentsCreateResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param azureLocation Target Azure location for which the machines should be assessed. These
   * enums are the same as used by Compute API. Possible values include: 'Unknown', 'EastAsia',
   * 'SoutheastAsia', 'AustraliaEast', 'AustraliaSoutheast', 'BrazilSouth', 'CanadaCentral',
   * 'CanadaEast', 'WestEurope', 'NorthEurope', 'CentralIndia', 'SouthIndia', 'WestIndia',
   * 'JapanEast', 'JapanWest', 'KoreaCentral', 'KoreaSouth', 'UkWest', 'UkSouth', 'NorthCentralUs',
   * 'EastUs', 'WestUs2', 'SouthCentralUs', 'CentralUs', 'EastUs2', 'WestUs', 'WestCentralUs',
   * 'GermanyCentral', 'GermanyNortheast', 'ChinaNorth', 'ChinaEast'
   * @param azureOfferCode Offer code according to which cost estimation is done. Possible values
   * include: 'Unknown', 'MSAZR0003P', 'MSAZR0044P', 'MSAZR0059P', 'MSAZR0060P', 'MSAZR0062P',
   * 'MSAZR0063P', 'MSAZR0064P', 'MSAZR0029P', 'MSAZR0022P', 'MSAZR0023P', 'MSAZR0148P',
   * 'MSAZR0025P', 'MSAZR0036P', 'MSAZR0120P', 'MSAZR0121P', 'MSAZR0122P', 'MSAZR0123P',
   * 'MSAZR0124P', 'MSAZR0125P', 'MSAZR0126P', 'MSAZR0127P', 'MSAZR0128P', 'MSAZR0129P',
   * 'MSAZR0130P', 'MSAZR0111P', 'MSAZR0144P', 'MSAZR0149P', 'MSMCAZR0044P', 'MSMCAZR0059P',
   * 'MSMCAZR0060P', 'MSMCAZR0063P', 'MSMCAZR0120P', 'MSMCAZR0121P', 'MSMCAZR0125P', 'MSMCAZR0128P',
   * 'MSAZRDE0003P', 'MSAZRDE0044P'
   * @param azurePricingTier Pricing tier for Size evaluation. Possible values include: 'Standard',
   * 'Basic'
   * @param azureStorageRedundancy Storage Redundancy type offered by Azure. Possible values include:
   * 'Unknown', 'LocallyRedundant', 'ZoneRedundant', 'GeoRedundant', 'ReadAccessGeoRedundant'
   * @param scalingFactor Scaling factor used over utilization data to add a performance buffer for
   * new machines to be created in Azure. Min Value = 1.0, Max value = 1.9, Default = 1.3.
   * @param percentile Percentile of performance data used to recommend Azure size. Possible values
   * include: 'Percentile50', 'Percentile90', 'Percentile95', 'Percentile99'
   * @param timeRange Time range of performance data used to recommend a size. Possible values
   * include: 'Day', 'Week', 'Month'
   * @param stage User configurable setting that describes the status of the assessment. Possible
   * values include: 'InProgress', 'UnderReview', 'Approved'
   * @param currency Currency to report prices in. Possible values include: 'Unknown', 'USD', 'DKK',
   * 'CAD', 'IDR', 'JPY', 'KRW', 'NZD', 'NOK', 'RUB', 'SAR', 'ZAR', 'SEK', 'TRY', 'GBP', 'MXN',
   * 'MYR', 'INR', 'HKD', 'BRL', 'TWD', 'EUR', 'CHF', 'ARS', 'AUD', 'CNY'
   * @param azureHybridUseBenefit AHUB discount on windows virtual machines. Possible values include:
   * 'Unknown', 'Yes', 'No'
   * @param discountPercentage Custom discount percentage to be applied on final costs. Can be in the
   * range [0, 100].
   * @param sizingCriterion Assessment sizing criterion. Possible values include: 'PerformanceBased',
   * 'AsOnPremises'
   * @param callback The callback
   */
  create(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, azureLocation: Models.AzureLocation, azureOfferCode: Models.AzureOfferCode, azurePricingTier: Models.AzurePricingTier, azureStorageRedundancy: Models.AzureStorageRedundancy, scalingFactor: number, percentile: Models.Percentile, timeRange: Models.TimeRange, stage: Models.AssessmentStage, currency: Models.Currency, azureHybridUseBenefit: Models.AzureHybridUseBenefit, discountPercentage: number, sizingCriterion: Models.AssessmentSizingCriterion, callback: msRest.ServiceCallback<Models.Assessment>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param azureLocation Target Azure location for which the machines should be assessed. These
   * enums are the same as used by Compute API. Possible values include: 'Unknown', 'EastAsia',
   * 'SoutheastAsia', 'AustraliaEast', 'AustraliaSoutheast', 'BrazilSouth', 'CanadaCentral',
   * 'CanadaEast', 'WestEurope', 'NorthEurope', 'CentralIndia', 'SouthIndia', 'WestIndia',
   * 'JapanEast', 'JapanWest', 'KoreaCentral', 'KoreaSouth', 'UkWest', 'UkSouth', 'NorthCentralUs',
   * 'EastUs', 'WestUs2', 'SouthCentralUs', 'CentralUs', 'EastUs2', 'WestUs', 'WestCentralUs',
   * 'GermanyCentral', 'GermanyNortheast', 'ChinaNorth', 'ChinaEast'
   * @param azureOfferCode Offer code according to which cost estimation is done. Possible values
   * include: 'Unknown', 'MSAZR0003P', 'MSAZR0044P', 'MSAZR0059P', 'MSAZR0060P', 'MSAZR0062P',
   * 'MSAZR0063P', 'MSAZR0064P', 'MSAZR0029P', 'MSAZR0022P', 'MSAZR0023P', 'MSAZR0148P',
   * 'MSAZR0025P', 'MSAZR0036P', 'MSAZR0120P', 'MSAZR0121P', 'MSAZR0122P', 'MSAZR0123P',
   * 'MSAZR0124P', 'MSAZR0125P', 'MSAZR0126P', 'MSAZR0127P', 'MSAZR0128P', 'MSAZR0129P',
   * 'MSAZR0130P', 'MSAZR0111P', 'MSAZR0144P', 'MSAZR0149P', 'MSMCAZR0044P', 'MSMCAZR0059P',
   * 'MSMCAZR0060P', 'MSMCAZR0063P', 'MSMCAZR0120P', 'MSMCAZR0121P', 'MSMCAZR0125P', 'MSMCAZR0128P',
   * 'MSAZRDE0003P', 'MSAZRDE0044P'
   * @param azurePricingTier Pricing tier for Size evaluation. Possible values include: 'Standard',
   * 'Basic'
   * @param azureStorageRedundancy Storage Redundancy type offered by Azure. Possible values include:
   * 'Unknown', 'LocallyRedundant', 'ZoneRedundant', 'GeoRedundant', 'ReadAccessGeoRedundant'
   * @param scalingFactor Scaling factor used over utilization data to add a performance buffer for
   * new machines to be created in Azure. Min Value = 1.0, Max value = 1.9, Default = 1.3.
   * @param percentile Percentile of performance data used to recommend Azure size. Possible values
   * include: 'Percentile50', 'Percentile90', 'Percentile95', 'Percentile99'
   * @param timeRange Time range of performance data used to recommend a size. Possible values
   * include: 'Day', 'Week', 'Month'
   * @param stage User configurable setting that describes the status of the assessment. Possible
   * values include: 'InProgress', 'UnderReview', 'Approved'
   * @param currency Currency to report prices in. Possible values include: 'Unknown', 'USD', 'DKK',
   * 'CAD', 'IDR', 'JPY', 'KRW', 'NZD', 'NOK', 'RUB', 'SAR', 'ZAR', 'SEK', 'TRY', 'GBP', 'MXN',
   * 'MYR', 'INR', 'HKD', 'BRL', 'TWD', 'EUR', 'CHF', 'ARS', 'AUD', 'CNY'
   * @param azureHybridUseBenefit AHUB discount on windows virtual machines. Possible values include:
   * 'Unknown', 'Yes', 'No'
   * @param discountPercentage Custom discount percentage to be applied on final costs. Can be in the
   * range [0, 100].
   * @param sizingCriterion Assessment sizing criterion. Possible values include: 'PerformanceBased',
   * 'AsOnPremises'
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, azureLocation: Models.AzureLocation, azureOfferCode: Models.AzureOfferCode, azurePricingTier: Models.AzurePricingTier, azureStorageRedundancy: Models.AzureStorageRedundancy, scalingFactor: number, percentile: Models.Percentile, timeRange: Models.TimeRange, stage: Models.AssessmentStage, currency: Models.Currency, azureHybridUseBenefit: Models.AzureHybridUseBenefit, discountPercentage: number, sizingCriterion: Models.AssessmentSizingCriterion, options: Models.AssessmentsCreateOptionalParams, callback: msRest.ServiceCallback<Models.Assessment>): void;
  create(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, azureLocation: Models.AzureLocation, azureOfferCode: Models.AzureOfferCode, azurePricingTier: Models.AzurePricingTier, azureStorageRedundancy: Models.AzureStorageRedundancy, scalingFactor: number, percentile: Models.Percentile, timeRange: Models.TimeRange, stage: Models.AssessmentStage, currency: Models.Currency, azureHybridUseBenefit: Models.AzureHybridUseBenefit, discountPercentage: number, sizingCriterion: Models.AssessmentSizingCriterion, options?: Models.AssessmentsCreateOptionalParams | msRest.ServiceCallback<Models.Assessment>, callback?: msRest.ServiceCallback<Models.Assessment>): Promise<Models.AssessmentsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        groupName,
        assessmentName,
        azureLocation,
        azureOfferCode,
        azurePricingTier,
        azureStorageRedundancy,
        scalingFactor,
        percentile,
        timeRange,
        stage,
        currency,
        azureHybridUseBenefit,
        discountPercentage,
        sizingCriterion,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.AssessmentsCreateResponse>;
  }

  /**
   * Delete an assessment from the project. The machines remain in the assessment. Deleting a
   * non-existent assessment results in a no-operation.
   *
   * When an assessment is under computation, as indicated by the 'computationState' field, it cannot
   * be deleted. Any such attempt will return a 400 - Bad Request.
   * @summary Deletes an assessment from the project.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param [options] The optional parameters
   * @returns Promise<Models.AssessmentsDeleteResponse>
   */
  deleteMethod(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, options?: msRest.RequestOptionsBase): Promise<Models.AssessmentsDeleteResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.AssessmentsDeleteResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        groupName,
        assessmentName,
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.AssessmentsDeleteResponse>;
  }

  /**
   * Get the URL for downloading the assessment in a report format.
   * @summary Get download URL for the assessment report.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param [options] The optional parameters
   * @returns Promise<Models.AssessmentsGetReportDownloadUrlResponse>
   */
  getReportDownloadUrl(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, options?: msRest.RequestOptionsBase): Promise<Models.AssessmentsGetReportDownloadUrlResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param callback The callback
   */
  getReportDownloadUrl(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, callback: msRest.ServiceCallback<Models.DownloadUrl>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param options The optional parameters
   * @param callback The callback
   */
  getReportDownloadUrl(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DownloadUrl>): void;
  getReportDownloadUrl(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.DownloadUrl>, callback?: msRest.ServiceCallback<Models.DownloadUrl>): Promise<Models.AssessmentsGetReportDownloadUrlResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        groupName,
        assessmentName,
        options
      },
      getReportDownloadUrlOperationSpec,
      callback) as Promise<Models.AssessmentsGetReportDownloadUrlResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}/assessments",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.groupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AssessmentResultList,
      headersMapper: Mappers.AssessmentsListByGroupHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByProjectOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/assessments",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AssessmentResultList,
      headersMapper: Mappers.AssessmentsListByProjectHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}/assessments/{assessmentName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.groupName,
    Parameters.assessmentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Assessment,
      headersMapper: Mappers.AssessmentsGetHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}/assessments/{assessmentName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.groupName,
    Parameters.assessmentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      eTag: [
        "options",
        "eTag"
      ],
      azureLocation: "azureLocation",
      azureOfferCode: "azureOfferCode",
      azurePricingTier: "azurePricingTier",
      azureStorageRedundancy: "azureStorageRedundancy",
      scalingFactor: "scalingFactor",
      percentile: "percentile",
      timeRange: "timeRange",
      stage: "stage",
      currency: "currency",
      azureHybridUseBenefit: "azureHybridUseBenefit",
      discountPercentage: "discountPercentage",
      sizingCriterion: "sizingCriterion"
    },
    mapper: Mappers.Assessment
  },
  responses: {
    200: {
      bodyMapper: Mappers.Assessment,
      headersMapper: Mappers.AssessmentsCreateHeaders
    },
    201: {
      bodyMapper: Mappers.Assessment,
      headersMapper: Mappers.AssessmentsCreateHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}/assessments/{assessmentName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.groupName,
    Parameters.assessmentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.AssessmentsDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getReportDownloadUrlOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}/assessments/{assessmentName}/downloadUrl",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.groupName,
    Parameters.assessmentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DownloadUrl,
      headersMapper: Mappers.AssessmentsGetReportDownloadUrlHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
