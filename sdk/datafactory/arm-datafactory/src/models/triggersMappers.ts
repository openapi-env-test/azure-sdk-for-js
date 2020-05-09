/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

export {
  discriminators,
  Activity,
  ActivityDependency,
  ActivityPolicy,
  AdditionalColumns,
  AmazonMWSLinkedService,
  AmazonMWSObjectDataset,
  AmazonMWSSource,
  AmazonRedshiftLinkedService,
  AmazonRedshiftSource,
  AmazonRedshiftTableDataset,
  AmazonS3Dataset,
  AmazonS3LinkedService,
  AmazonS3Location,
  AmazonS3ReadSettings,
  AppendVariableActivity,
  AvroDataset,
  AvroFormat,
  AvroSink,
  AvroSource,
  AvroWriteSettings,
  AzureBatchLinkedService,
  AzureBlobDataset,
  AzureBlobFSDataset,
  AzureBlobFSLinkedService,
  AzureBlobFSLocation,
  AzureBlobFSReadSettings,
  AzureBlobFSSink,
  AzureBlobFSSource,
  AzureBlobFSWriteSettings,
  AzureBlobStorageLinkedService,
  AzureBlobStorageLocation,
  AzureBlobStorageReadSettings,
  AzureBlobStorageWriteSettings,
  AzureDatabricksLinkedService,
  AzureDataExplorerCommandActivity,
  AzureDataExplorerLinkedService,
  AzureDataExplorerSink,
  AzureDataExplorerSource,
  AzureDataExplorerTableDataset,
  AzureDataLakeAnalyticsLinkedService,
  AzureDataLakeStoreDataset,
  AzureDataLakeStoreLinkedService,
  AzureDataLakeStoreLocation,
  AzureDataLakeStoreReadSettings,
  AzureDataLakeStoreSink,
  AzureDataLakeStoreSource,
  AzureDataLakeStoreWriteSettings,
  AzureFileStorageLinkedService,
  AzureFileStorageLocation,
  AzureFileStorageReadSettings,
  AzureFunctionActivity,
  AzureFunctionLinkedService,
  AzureKeyVaultLinkedService,
  AzureKeyVaultSecretReference,
  AzureMariaDBLinkedService,
  AzureMariaDBSource,
  AzureMariaDBTableDataset,
  AzureMLBatchExecutionActivity,
  AzureMLExecutePipelineActivity,
  AzureMLLinkedService,
  AzureMLServiceLinkedService,
  AzureMLUpdateResourceActivity,
  AzureMLWebServiceFile,
  AzureMySqlLinkedService,
  AzureMySqlSink,
  AzureMySqlSource,
  AzureMySqlTableDataset,
  AzurePostgreSqlLinkedService,
  AzurePostgreSqlSink,
  AzurePostgreSqlSource,
  AzurePostgreSqlTableDataset,
  AzureQueueSink,
  AzureSearchIndexDataset,
  AzureSearchIndexSink,
  AzureSearchLinkedService,
  AzureSqlDatabaseLinkedService,
  AzureSqlDWLinkedService,
  AzureSqlDWTableDataset,
  AzureSqlMILinkedService,
  AzureSqlMITableDataset,
  AzureSqlSink,
  AzureSqlSource,
  AzureSqlTableDataset,
  AzureStorageLinkedService,
  AzureTableDataset,
  AzureTableSink,
  AzureTableSource,
  AzureTableStorageLinkedService,
  BaseResource,
  BinaryDataset,
  BinaryReadSettings,
  BinarySink,
  BinarySource,
  BlobEventsTrigger,
  BlobSink,
  BlobSource,
  BlobTrigger,
  CassandraLinkedService,
  CassandraSource,
  CassandraTableDataset,
  ChainingTrigger,
  CloudError,
  CmdkeySetup,
  CommonDataServiceForAppsEntityDataset,
  CommonDataServiceForAppsLinkedService,
  CommonDataServiceForAppsSink,
  CommonDataServiceForAppsSource,
  ComponentSetup,
  CompressionReadSettings,
  ConcurLinkedService,
  ConcurObjectDataset,
  ConcurSource,
  ControlActivity,
  CopyActivity,
  CopySink,
  CopySource,
  CosmosDbLinkedService,
  CosmosDbMongoDbApiCollectionDataset,
  CosmosDbMongoDbApiLinkedService,
  CosmosDbMongoDbApiSink,
  CosmosDbMongoDbApiSource,
  CosmosDbSqlApiCollectionDataset,
  CosmosDbSqlApiSink,
  CosmosDbSqlApiSource,
  CouchbaseLinkedService,
  CouchbaseSource,
  CouchbaseTableDataset,
  CustomActivity,
  CustomActivityReferenceObject,
  CustomDataset,
  CustomDataSourceLinkedService,
  CustomSetupBase,
  DatabricksNotebookActivity,
  DatabricksSparkJarActivity,
  DatabricksSparkPythonActivity,
  DataFlow,
  DataFlowFolder,
  DataFlowReference,
  DataFlowResource,
  DataFlowSink,
  DataFlowSource,
  DataFlowStagingInfo,
  DataLakeAnalyticsUSQLActivity,
  Dataset,
  DatasetBZip2Compression,
  DatasetCompression,
  DatasetDeflateCompression,
  DatasetFolder,
  DatasetGZipCompression,
  DatasetLocation,
  DatasetReference,
  DatasetResource,
  DatasetStorageFormat,
  DatasetZipDeflateCompression,
  Db2LinkedService,
  Db2Source,
  Db2TableDataset,
  DeleteActivity,
  DelimitedTextDataset,
  DelimitedTextReadSettings,
  DelimitedTextSink,
  DelimitedTextSource,
  DelimitedTextWriteSettings,
  DependencyReference,
  DistcpSettings,
  DocumentDbCollectionDataset,
  DocumentDbCollectionSink,
  DocumentDbCollectionSource,
  DrillLinkedService,
  DrillSource,
  DrillTableDataset,
  DWCopyCommandDefaultValue,
  DWCopyCommandSettings,
  DynamicsAXLinkedService,
  DynamicsAXResourceDataset,
  DynamicsAXSource,
  DynamicsCrmEntityDataset,
  DynamicsCrmLinkedService,
  DynamicsCrmSink,
  DynamicsCrmSource,
  DynamicsEntityDataset,
  DynamicsLinkedService,
  DynamicsSink,
  DynamicsSource,
  EloquaLinkedService,
  EloquaObjectDataset,
  EloquaSource,
  EntityReference,
  EnvironmentVariableSetup,
  ExecuteDataFlowActivity,
  ExecuteDataFlowActivityTypePropertiesCompute,
  ExecutePipelineActivity,
  ExecuteSSISPackageActivity,
  ExecutionActivity,
  ExportSettings,
  Expression,
  Factory,
  FactoryGitHubConfiguration,
  FactoryIdentity,
  FactoryRepoConfiguration,
  FactoryVSTSConfiguration,
  FileServerLinkedService,
  FileServerLocation,
  FileServerReadSettings,
  FileServerWriteSettings,
  FileShareDataset,
  FileSystemSink,
  FileSystemSource,
  FilterActivity,
  ForEachActivity,
  FormatReadSettings,
  FormatWriteSettings,
  FtpReadSettings,
  FtpServerLinkedService,
  FtpServerLocation,
  GetMetadataActivity,
  GlobalParameterSpecification,
  GoogleAdWordsLinkedService,
  GoogleAdWordsObjectDataset,
  GoogleAdWordsSource,
  GoogleBigQueryLinkedService,
  GoogleBigQueryObjectDataset,
  GoogleBigQuerySource,
  GoogleCloudStorageLinkedService,
  GoogleCloudStorageLocation,
  GoogleCloudStorageReadSettings,
  GreenplumLinkedService,
  GreenplumSource,
  GreenplumTableDataset,
  HBaseLinkedService,
  HBaseObjectDataset,
  HBaseSource,
  HdfsLinkedService,
  HdfsLocation,
  HdfsReadSettings,
  HdfsSource,
  HDInsightHiveActivity,
  HDInsightLinkedService,
  HDInsightMapReduceActivity,
  HDInsightOnDemandLinkedService,
  HDInsightPigActivity,
  HDInsightSparkActivity,
  HDInsightStreamingActivity,
  HiveLinkedService,
  HiveObjectDataset,
  HiveSource,
  HttpDataset,
  HttpLinkedService,
  HttpReadSettings,
  HttpServerLocation,
  HttpSource,
  HubspotLinkedService,
  HubspotObjectDataset,
  HubspotSource,
  IfConditionActivity,
  ImpalaLinkedService,
  ImpalaObjectDataset,
  ImpalaSource,
  ImportSettings,
  InformixLinkedService,
  InformixSink,
  InformixSource,
  InformixTableDataset,
  IntegrationRuntime,
  IntegrationRuntimeComputeProperties,
  IntegrationRuntimeCustomSetupScriptProperties,
  IntegrationRuntimeDataFlowProperties,
  IntegrationRuntimeDataProxyProperties,
  IntegrationRuntimeReference,
  IntegrationRuntimeResource,
  IntegrationRuntimeSsisCatalogInfo,
  IntegrationRuntimeSsisProperties,
  IntegrationRuntimeVNetProperties,
  JiraLinkedService,
  JiraObjectDataset,
  JiraSource,
  JsonDataset,
  JsonFormat,
  JsonReadSettings,
  JsonSink,
  JsonSource,
  JsonWriteSettings,
  LinkedIntegrationRuntimeKeyAuthorization,
  LinkedIntegrationRuntimeRbacAuthorization,
  LinkedIntegrationRuntimeType,
  LinkedService,
  LinkedServiceReference,
  LinkedServiceResource,
  LogStorageSettings,
  LookupActivity,
  MagentoLinkedService,
  MagentoObjectDataset,
  MagentoSource,
  ManagedIntegrationRuntime,
  MappingDataFlow,
  MariaDBLinkedService,
  MariaDBSource,
  MariaDBTableDataset,
  MarketoLinkedService,
  MarketoObjectDataset,
  MarketoSource,
  MicrosoftAccessLinkedService,
  MicrosoftAccessSink,
  MicrosoftAccessSource,
  MicrosoftAccessTableDataset,
  MongoDbCollectionDataset,
  MongoDbCursorMethodsProperties,
  MongoDbLinkedService,
  MongoDbSource,
  MongoDbV2CollectionDataset,
  MongoDbV2LinkedService,
  MongoDbV2Source,
  MultiplePipelineTrigger,
  MySqlLinkedService,
  MySqlSource,
  MySqlTableDataset,
  NetezzaLinkedService,
  NetezzaPartitionSettings,
  NetezzaSource,
  NetezzaTableDataset,
  ODataLinkedService,
  ODataResourceDataset,
  ODataSource,
  OdbcLinkedService,
  OdbcSink,
  OdbcSource,
  OdbcTableDataset,
  Office365Dataset,
  Office365LinkedService,
  Office365Source,
  OracleLinkedService,
  OraclePartitionSettings,
  OracleServiceCloudLinkedService,
  OracleServiceCloudObjectDataset,
  OracleServiceCloudSource,
  OracleSink,
  OracleSource,
  OracleTableDataset,
  OrcDataset,
  OrcFormat,
  OrcSink,
  OrcSource,
  PackageStore,
  ParameterSpecification,
  ParquetDataset,
  ParquetFormat,
  ParquetSink,
  ParquetSource,
  PaypalLinkedService,
  PaypalObjectDataset,
  PaypalSource,
  PhoenixLinkedService,
  PhoenixObjectDataset,
  PhoenixSource,
  PipelineFolder,
  PipelineReference,
  PipelineResource,
  PolybaseSettings,
  PostgreSqlLinkedService,
  PostgreSqlSource,
  PostgreSqlTableDataset,
  PrestoLinkedService,
  PrestoObjectDataset,
  PrestoSource,
  QuickBooksLinkedService,
  QuickBooksObjectDataset,
  QuickBooksSource,
  RecurrenceSchedule,
  RecurrenceScheduleOccurrence,
  RedirectIncompatibleRowSettings,
  RedshiftUnloadSettings,
  RelationalSource,
  RelationalTableDataset,
  RerunTumblingWindowTrigger,
  Resource,
  ResponsysLinkedService,
  ResponsysObjectDataset,
  ResponsysSource,
  RestResourceDataset,
  RestServiceLinkedService,
  RestSource,
  RetryPolicy,
  SalesforceLinkedService,
  SalesforceMarketingCloudLinkedService,
  SalesforceMarketingCloudObjectDataset,
  SalesforceMarketingCloudSource,
  SalesforceObjectDataset,
  SalesforceServiceCloudLinkedService,
  SalesforceServiceCloudObjectDataset,
  SalesforceServiceCloudSink,
  SalesforceServiceCloudSource,
  SalesforceSink,
  SalesforceSource,
  SapBwCubeDataset,
  SapBWLinkedService,
  SapBwSource,
  SapCloudForCustomerLinkedService,
  SapCloudForCustomerResourceDataset,
  SapCloudForCustomerSink,
  SapCloudForCustomerSource,
  SapEccLinkedService,
  SapEccResourceDataset,
  SapEccSource,
  SapHanaLinkedService,
  SapHanaPartitionSettings,
  SapHanaSource,
  SapHanaTableDataset,
  SapOpenHubLinkedService,
  SapOpenHubSource,
  SapOpenHubTableDataset,
  SapTableLinkedService,
  SapTablePartitionSettings,
  SapTableResourceDataset,
  SapTableSource,
  ScheduleTrigger,
  ScheduleTriggerRecurrence,
  ScriptAction,
  SecretBase,
  SecureString,
  SelfDependencyTumblingWindowTriggerReference,
  SelfHostedIntegrationRuntime,
  ServiceNowLinkedService,
  ServiceNowObjectDataset,
  ServiceNowSource,
  SetVariableActivity,
  SftpLocation,
  SftpReadSettings,
  SftpServerLinkedService,
  SftpWriteSettings,
  SharePointOnlineListLinkedService,
  SharePointOnlineListResourceDataset,
  SharePointOnlineListSource,
  ShopifyLinkedService,
  ShopifyObjectDataset,
  ShopifySource,
  SkipErrorFile,
  SnowflakeDataset,
  SnowflakeExportCopyCommand,
  SnowflakeImportCopyCommand,
  SnowflakeLinkedService,
  SnowflakeSink,
  SnowflakeSource,
  SparkLinkedService,
  SparkObjectDataset,
  SparkSource,
  SqlDWSink,
  SqlDWSource,
  SqlMISink,
  SqlMISource,
  SqlPartitionSettings,
  SqlServerLinkedService,
  SqlServerSink,
  SqlServerSource,
  SqlServerStoredProcedureActivity,
  SqlServerTableDataset,
  SqlSink,
  SqlSource,
  SquareLinkedService,
  SquareObjectDataset,
  SquareSource,
  SSISAccessCredential,
  SSISChildPackage,
  SSISExecutionCredential,
  SSISExecutionParameter,
  SSISLogLocation,
  SSISPackageLocation,
  SSISPropertyOverride,
  StagingSettings,
  StoredProcedureParameter,
  StoreReadSettings,
  StoreWriteSettings,
  SubResource,
  SwitchActivity,
  SwitchCase,
  SybaseLinkedService,
  SybaseSource,
  SybaseTableDataset,
  TabularSource,
  TeradataLinkedService,
  TeradataPartitionSettings,
  TeradataSource,
  TeradataTableDataset,
  TextFormat,
  Transformation,
  Trigger,
  TriggerDependencyReference,
  TriggerFilterParameters,
  TriggerListResponse,
  TriggerPipelineReference,
  TriggerQueryResponse,
  TriggerReference,
  TriggerResource,
  TriggerSubscriptionOperationStatus,
  TumblingWindowTrigger,
  TumblingWindowTriggerDependencyReference,
  UntilActivity,
  UserProperty,
  ValidationActivity,
  VariableSpecification,
  VerticaLinkedService,
  VerticaSource,
  VerticaTableDataset,
  WaitActivity,
  WebActivity,
  WebActivityAuthentication,
  WebAnonymousAuthentication,
  WebBasicAuthentication,
  WebClientCertificateAuthentication,
  WebHookActivity,
  WebLinkedService,
  WebLinkedServiceTypeProperties,
  WebSource,
  WebTableDataset,
  XeroLinkedService,
  XeroObjectDataset,
  XeroSource,
  ZipDeflateReadSettings,
  ZohoLinkedService,
  ZohoObjectDataset,
  ZohoSource
} from "../models/mappers";
