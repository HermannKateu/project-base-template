/* eslint-env node */
// ***********************************************************
// This example utils/index.ts can be used to load utils
//
// You can change the location of this file or turn off loading
// the utils file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

export default ((on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  return config;
}) as Cypress.PluginConfig;
