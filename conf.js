'use strict';

exports.config = {

    // Boolean. If true, Protractor will connect directly to the browser Drivers
    // at the locations specified by chromeDriver and firefoxPath. Only Chrome
    // and Firefox are supported for direct connect.
    directConnect: true,

    // When run without a command line parameter, all suites will run. If run
    // with --suite=login only the patterns matched by the specified suites will
    // run.
    suites: {
        login: ['./tests/*.js']
    },

    capabilities: {
    browserName: 'firefox',
    },

    // base url on which application starts
    baseUrl: 'https://angularjs.org',

    // The timeout in milliseconds for each script run on the browser. This should
    // be longer than the maximum time your application needs to stabilize between
    // tasks.
    allScriptsTimeout: 11000,

    // How long to wait for a page to load.
    getPageTimeout: 10000,

      jasmineNodeOpts: {
    // If true, display spec names.
    isVerbose: false,
    // If true, print colors to the terminal.
    showColors: true,
    // If true, include stack traces in failures.
    includeStackTrace: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 30000
  }
};
