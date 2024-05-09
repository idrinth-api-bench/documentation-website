/* eslint max-len:0 */
const lang = {
  meta: {
    title: 'Results | Usage',
    description: 'The framework @idrinth/api-bench provides default result handlers and allows for additional custom result handlers',
  },
  title: 'Results',
  description: 'By default, all possible result formats are provided. The files are created in the application root, but that can be overwritten programmatically.',
  csv: {
    description: 'This provides a file, that can easily opened by excel or handled programmatically.',
  },
  html: {
    description: 'This provides a simple HTML file, that could be sent by email for example.',
  },
  cli: {
    description: 'This provides a small table in the command line, that shows most of the data.',
  },
  json: {
    description: 'This provides a file easily handled via other software. By default, it is not formatted for readability.',
  },
  xray: {
    title: 'XRay on Jira',
    description: 'We provide two XRay handlers, that can be activated via ENV variables. If you don\'t set all of the environment variables, the respective reporting will be skipped.',
    shared: 'Both providers need XRAY_ENDPOINT and XRAY_TEST_PLAN_KEY to be set. The first pointing to your Jira root URL, the second being the exact id of your test plan, for example TEST-123.',
    cloud: 'If you are hosting in the cloud XRAY_CLIENT_ID and XRAY_CLIENT_SECRET are also required to make a login possible.',
    onpremise: 'If you are hosting on premise, provide login data via XRAY_USER_NAME and XRAY_PASSWORD instead.',
    limitations: 'Ensure the test id in your route id starts with a hash sign, e.g., #TEST-876. Failing to follow this format may result in errors or unrecognised test ids during the XRay processing.',
  },
  custom: {
    title: 'Custom Results',
    description: 'You can provide a custom reporter instance as part of your configuration in programmatically accessing the framework. It will be called with the complete result after all result modifiers have modified the result.',
  },
};

export default lang;
