/* eslint max-len:0 */
const lang = {
  meta: {
    title: 'Logging | Usage',
    description: 'Information about logging usage and support of the framework @idrinth/api-bench',
  },
  title: 'Logging',
  description: 'Any logger that either implements the interface or has a wrapper is an option. Wrappers for pino and winston are available.',
  used: {
    title: 'Logging levels used',
    description: 'Most log entries are debug level, with the major steps being written to info. Trace is currently not used but may be used for detailed argument printing at some point.',
  },
  custom: {
    title: 'Custom Logger',
    final: 'For ease of use, a wrapper is provided as well, that only requires a log method to be implemented.',
    description: 'You can implement the logger interface below and provide any logger you want to next to the already provided ones.',
  },
};

export default lang;
