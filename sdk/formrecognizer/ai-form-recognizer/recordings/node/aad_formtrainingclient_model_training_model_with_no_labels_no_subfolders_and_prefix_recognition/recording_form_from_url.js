let nock = require('nock');

module.exports.hash = "9eb7e85286e71321914e1d054139d46b";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fcognitiveservices.azure.com%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'c10d1ebe-0480-42e8-8f74-875715153000',
  'x-ms-ests-server',
  '2.1.11251.20 - WUS2 ProdSlices',
  'Set-Cookie',
  'fpc=Apg17y9k0ERCls3vRND0TAzGLH8mAQAAAN8_StcOAAAA; expires=Sun, 20-Dec-2020 22:53:19 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Fri, 20 Nov 2020 22:53:19 GMT',
  'Content-Length',
  '1331'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .post('/formrecognizer/v2.1-preview.2/custom/models/ee77b711-af30-4e5b-9db4-4d90cd3e3362/analyze', {"source":"https://storageaccount/testingdata/Form_1.jpg?sastoken"})
  .reply(202, "", [
  'Content-Length',
  '0',
  'Operation-Location',
  'https://endpoint/formrecognizer/v2.1-preview.2/custom/models/ee77b711-af30-4e5b-9db4-4d90cd3e3362/analyzeresults/cdf27fb1-e969-460c-ae29-d49d15bc1cb7',
  'x-envoy-upstream-service-time',
  '81',
  'apim-request-id',
  'ef7576a3-4ca5-4d95-b10f-d715fe623173',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Fri, 20 Nov 2020 22:53:19 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.2/custom/models/ee77b711-af30-4e5b-9db4-4d90cd3e3362/analyzeResults/cdf27fb1-e969-460c-ae29-d49d15bc1cb7')
  .reply(200, {"status":"notStarted","createdDateTime":"2020-11-20T22:53:19Z","lastUpdatedDateTime":"2020-11-20T22:53:19Z"}, [
  'Content-Length',
  '109',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '20',
  'apim-request-id',
  'c730c244-d308-44b8-a550-cd24b3d324bc',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Fri, 20 Nov 2020 22:53:19 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.2/custom/models/ee77b711-af30-4e5b-9db4-4d90cd3e3362/analyzeResults/cdf27fb1-e969-460c-ae29-d49d15bc1cb7')
  .reply(200, {"status":"notStarted","createdDateTime":"2020-11-20T22:53:19Z","lastUpdatedDateTime":"2020-11-20T22:53:19Z"}, [
  'Content-Length',
  '109',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '40',
  'apim-request-id',
  '673eaa94-ab43-4d61-b506-f0bf7dc929b1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Fri, 20 Nov 2020 22:53:19 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.2/custom/models/ee77b711-af30-4e5b-9db4-4d90cd3e3362/analyzeResults/cdf27fb1-e969-460c-ae29-d49d15bc1cb7')
  .reply(200, {"status":"running","createdDateTime":"2020-11-20T22:53:19Z","lastUpdatedDateTime":"2020-11-20T22:53:20Z","analyzeResult":null}, [
  'Content-Length',
  '134',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '26',
  'apim-request-id',
  '639f3caf-29a7-46f7-afb8-d6a36be0078d',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Fri, 20 Nov 2020 22:53:24 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.2/custom/models/ee77b711-af30-4e5b-9db4-4d90cd3e3362/analyzeResults/cdf27fb1-e969-460c-ae29-d49d15bc1cb7')
  .reply(200, {"status":"succeeded","createdDateTime":"2020-11-20T22:53:19Z","lastUpdatedDateTime":"2020-11-20T22:53:25Z","analyzeResult":{"version":null,"readResults":[{"page":1,"angle":0,"width":1700,"height":2200,"unit":"pixel","lines":[]}],"pageResults":[{"page":1,"keyValuePairs":[{"key":{"text":"Company Phone:","boundingBox":[163,352,359,352,359,378,163,378],"elements":null},"value":{"text":"555-348-6512","boundingBox":[364,351,528,351,528,378,364,378],"elements":null},"confidence":1},{"key":{"text":"Website:","boundingBox":[167,394,269,394,269,417,167,417],"elements":null},"value":{"text":"www.herolimited.com","boundingBox":[273,393,531,393,531,418,273,418],"elements":null},"confidence":1},{"key":{"text":"Email:","boundingBox":[165,435,237,435,237,460,165,460],"elements":null},"value":{"text":"accounts@herolimited.com","boundingBox":[164,481,479,481,479,503,164,503],"elements":null},"confidence":1},{"key":{"text":"Dated As:","boundingBox":[1025,421,1160,421,1160,448,1025,448],"elements":null},"value":{"text":"12/20/2020","boundingBox":[1165,420,1317,420,1317,448,1165,448],"elements":null},"confidence":1},{"key":{"text":"Purchase Order #:","boundingBox":[1023,461,1272,461,1272,488,1023,488],"elements":null},"value":{"text":"948284","boundingBox":[1277,461,1376,461,1376,489,1277,489],"elements":null},"confidence":1},{"key":{"text":"Vendor Name:","boundingBox":[160,611,344,611,344,637,160,637],"elements":null},"value":{"text":"Hillary Swank","boundingBox":[350,609,521,609,521,639,350,639],"elements":null},"confidence":0.7},{"key":{"text":"Company Name:","boundingBox":[160,648,370,648,370,677,160,677],"elements":null},"value":{"text":"Higgly Wiggly Books","boundingBox":[375,646,630,646,630,679,375,679],"elements":null},"confidence":1},{"key":{"text":"Address:","boundingBox":[161,685,269,685,269,711,161,711],"elements":null},"value":{"text":"938 NE Burner Road Boulder City, CO 92848","boundingBox":[274,685,565,685,565,751,274,751],"elements":null},"confidence":1},{"key":{"text":"Phone:","boundingBox":[613,722,702,722,702,749,613,749],"elements":null},"value":{"text":"938-294-2949","boundingBox":[708,722,885,722,885,749,708,749],"elements":null},"confidence":1},{"key":{"text":"Name:","boundingBox":[166,853,250,853,250,879,166,879],"elements":null},"value":{"text":"Bernie Sanders","boundingBox":[255,852,446,852,446,880,255,880],"elements":null},"confidence":0.53},{"key":{"text":"Company Name:","boundingBox":[164,890,374,890,374,919,164,919],"elements":null},"value":{"text":"Jupiter Book Supply","boundingBox":[380,889,629,889,629,919,380,919],"elements":null},"confidence":0.53},{"key":{"text":"Address:","boundingBox":[166,926,273,926,273,953,166,953],"elements":null},"value":{"text":"383 N Kinnick Road Seattle, WA 38383","boundingBox":[279,926,521,926,521,991,279,991],"elements":null},"confidence":1},{"key":{"text":"Phone:","boundingBox":[760,964,849,964,849,990,760,990],"elements":null},"value":{"text":"932-299-0292","boundingBox":[855,964,1033,964,1033,990,855,990],"elements":null},"confidence":1},{"key":{"text":"SUBTOTAL","boundingBox":[1147,1575,1296,1575,1296,1600,1147,1600],"elements":null},"value":{"text":"$140.00","boundingBox":[1426,1571,1529,1571,1529,1599,1426,1599],"elements":null},"confidence":1},{"key":{"text":"TAX","boundingBox":[1238,1618,1296,1618,1296,1643,1238,1643],"elements":null},"value":{"text":"$4.00","boundingBox":[1458,1615,1529,1615,1529,1643,1458,1643],"elements":null},"confidence":1},{"key":{"text":"TOTAL","boundingBox":[1204,1674,1297,1674,1297,1699,1204,1699],"elements":null},"value":{"text":"$144.00","boundingBox":[1427,1671,1529,1671,1529,1698,1427,1698],"elements":null},"confidence":1},{"key":{"text":"Additional Notes:","boundingBox":[173,1796,479,1796,479,1831,173,1831],"elements":null},"value":{"text":"Do not Jostle Box. Unpack carefully. Enjoy. Jupiter Book Supply will refund you 50% per book if returned within 60 days of reading and offer you 25% off you next total purchase.","boundingBox":[169,1880,1511,1880,1511,1992,169,1992],"elements":null},"confidence":0.53}],"tables":[{"rows":5,"columns":4,"cells":[{"text":"Details","rowIndex":0,"columnIndex":0,"boundingBox":[447,1048,558,1048,558,1078,447,1078],"confidence":1,"rowSpan":1,"columnSpan":1,"elements":null,"isHeader":true,"isFooter":false},{"text":"Quantity","rowIndex":0,"columnIndex":1,"boundingBox":[886,1048,1034,1048,1034,1084,886,1084],"confidence":1,"rowSpan":1,"columnSpan":1,"elements":null,"isHeader":true,"isFooter":false},{"text":"Unit Price","rowIndex":0,"columnIndex":2,"boundingBox":[1111,1047,1269,1047,1269,1078,1111,1078],"confidence":1,"rowSpan":1,"columnSpan":1,"elements":null,"isHeader":true,"isFooter":false},{"text":"Total","rowIndex":0,"columnIndex":3,"boundingBox":[1383,1047,1467,1047,1467,1077,1383,1077],"confidence":1,"rowSpan":1,"columnSpan":1,"elements":null,"isHeader":true,"isFooter":false},{"text":"Bindings","rowIndex":1,"columnIndex":0,"boundingBox":[172,1094,280,1094,280,1122,172,1122],"confidence":1,"rowSpan":1,"columnSpan":1,"elements":null,"isHeader":false,"isFooter":false},{"text":"20","rowIndex":1,"columnIndex":1,"boundingBox":[861,1094,892,1094,892,1119,861,1119],"confidence":1,"rowSpan":1,"columnSpan":1,"elements":null,"isHeader":false,"isFooter":false},{"text":"1.00","rowIndex":1,"columnIndex":2,"boundingBox":[1241,1095,1293,1095,1293,1118,1241,1118],"confidence":1,"rowSpan":1,"columnSpan":1,"elements":null,"isHeader":false,"isFooter":false},{"text":"20.00","rowIndex":1,"columnIndex":3,"boundingBox":[1458,1096,1531,1096,1531,1119,1458,1119],"confidence":1,"rowSpan":1,"columnSpan":1,"elements":null,"isHeader":false,"isFooter":false},{"text":"Covers Small","rowIndex":2,"columnIndex":0,"boundingBox":[170,1136,333,1136,333,1161,170,1161],"confidence":1,"rowSpan":1,"columnSpan":1,"elements":null,"isHeader":false,"isFooter":false},{"text":"20","rowIndex":2,"columnIndex":1,"boundingBox":[861,1135,892,1135,892,1160,861,1160],"confidence":1,"rowSpan":1,"columnSpan":1,"elements":null,"isHeader":false,"isFooter":false},{"text":"1.00","rowIndex":2,"columnIndex":2,"boundingBox":[1240,1135,1294,1135,1294,1160,1240,1160],"confidence":1,"rowSpan":1,"columnSpan":1,"elements":null,"isHeader":false,"isFooter":false},{"text":"20.00","rowIndex":2,"columnIndex":3,"boundingBox":[1458,1135,1529,1135,1529,1160,1458,1160],"confidence":1,"rowSpan":1,"columnSpan":1,"elements":null,"isHeader":false,"isFooter":false},{"text":"Feather Bookmark","rowIndex":3,"columnIndex":0,"boundingBox":[173,1179,402,1179,402,1206,173,1206],"confidence":1,"rowSpan":1,"columnSpan":1,"elements":null,"isHeader":false,"isFooter":false},{"text":"20","rowIndex":3,"columnIndex":1,"boundingBox":[863,1179,892,1179,892,1204,863,1204],"confidence":1,"rowSpan":1,"columnSpan":1,"elements":null,"isHeader":false,"isFooter":false},{"text":"5.00","rowIndex":3,"columnIndex":2,"boundingBox":[1239,1179,1294,1179,1294,1204,1239,1204],"confidence":1,"rowSpan":1,"columnSpan":1,"elements":null,"isHeader":false,"isFooter":false},{"text":"100.00","rowIndex":3,"columnIndex":3,"boundingBox":[1443,1181,1529,1181,1529,1205,1443,1205],"confidence":1,"rowSpan":1,"columnSpan":1,"elements":null,"isHeader":false,"isFooter":false},{"text":"Copper Swirl Marker","rowIndex":4,"columnIndex":0,"boundingBox":[170,1222,429,1222,429,1252,170,1252],"confidence":1,"rowSpan":1,"columnSpan":1,"elements":null,"isHeader":false,"isFooter":false},{"text":"20","rowIndex":4,"columnIndex":1,"boundingBox":[860,1223,892,1223,892,1247,860,1247],"confidence":1,"rowSpan":1,"columnSpan":1,"elements":null,"isHeader":false,"isFooter":false},{"text":"5.00","rowIndex":4,"columnIndex":2,"boundingBox":[1239,1221,1293,1221,1293,1247,1239,1247],"confidence":1,"rowSpan":1,"columnSpan":1,"elements":null,"isHeader":false,"isFooter":false},{"text":"100.00","rowIndex":4,"columnIndex":3,"boundingBox":[1444,1224,1530,1224,1530,1248,1444,1248],"confidence":1,"rowSpan":1,"columnSpan":1,"elements":null,"isHeader":false,"isFooter":false}]}],"clusterId":0}],"documentResults":[],"errors":[]}}, [
  'Content-Length',
  '9178',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '30',
  'apim-request-id',
  'd73c27e7-78cd-454f-b4e3-d7dfc87329cb',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Fri, 20 Nov 2020 22:53:29 GMT'
]);
