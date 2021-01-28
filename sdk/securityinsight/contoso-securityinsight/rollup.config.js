import rollup from "rollup";
import nodeResolve from "rollup-plugin-node-resolve";
import sourcemaps from "rollup-plugin-sourcemaps";

/**
 * @type {rollup.RollupFileOptions}
 */
const config = {
  input: "./esm/securityInsights.js",
  external: [
    "@azure/ms-rest-js",
    "@azure/ms-rest-azure-js"
  ],
  output: {
    file: "./dist/contoso-securityinsight.js",
    format: "umd",
    name: "Azure.ContosoSecurityinsight",
    sourcemap: true,
    globals: {
      "@azure/ms-rest-js": "msRest",
      "@azure/ms-rest-azure-js": "msRestAzure"
    },
    banner: `/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */`
  },
  plugins: [
    nodeResolve({ mainFields: ['module', 'main'] }),
    sourcemaps()
  ]
};

export default config;
