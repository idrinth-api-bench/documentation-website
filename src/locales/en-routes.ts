/* eslint max-len:0 */
const lang = {
  meta: {
    title: 'Routes | Usage',
    description: 'Information about how to create test route definitions with the framework @idrinth/api-bench',
  },
  title: 'Routes',
  description: 'Routes are build as configuration objects, that must be default-exported or provided via module.exports and be in a Javascript file. The object is wrapped in a function to allow environment injection, see below for an example.',
  example: {
    title: 'Example',
    description: 'The code below defines a request to a URL from the environment with GET.',
    middleware: 'To apply middlewares add both the pre and post properties as shown in the example. Then proceed to pass in your middleware functions to be executed.',
  },
};

export default lang;
