/* eslint max-len:0 */
const lang = {
  meta: {
    title: 'Middlewares | Usage',
    description: 'The framework @idrinth/api-bench provides default middlewares and allows for custom middlewares',
  },
  title: 'Middlewares',
  description: 'Middlewares use an absolute file path to be loaded. The following characters will be used to expand short forms:',
  provided: {
    '403': 'status 403 check',
    '404': 'status 404 check',
    title: 'Provided Middlewares',
    encoding: 'JSON and form encode',
    access: 'access token handling',
    csrf: 'csrf-header handling',
    '2xx': 'status 2xx check',
    'user-agent': 'user-agent',
    cookies: 'cookies',
    json: 'json-validator',
    xml: 'xml-validator',
    'silent-server-validator': 'silent-server-validator',
    'success-check': 'check response for success',
    'failure-check': 'check response for failure',
  },
  custom: {
    title: 'Custom Middleware',
    description: 'For custom middleware, implement the following interface. Prepare is called before sending a request, process after a request. If an error is thrown in process, any further validations are skipped.',
  },
};

export default lang;
