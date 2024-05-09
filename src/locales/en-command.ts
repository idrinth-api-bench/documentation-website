/* eslint max-len:0 */
const lang = {
  or: 'or',
  deprecated: 'This command is deprecated.',
  cli: 'Available via the CLI package @idrinth/api-bench-cli and the framework.',
  iabr: {
    description: 'runs the current working directory\'s project if the routes folder is properly setup',
    arg_1: 'Argument 1: threads (default 1)',
    arg_2: 'Argument 2: repetitions (default 1)',
    arg_3: 'Argument 3: language code (default en)',
    arg_4: 'Argument 4: task id, that you want to run only (default all)',
  },
  iabmp: {
    description: 'creates a new benchmarking project in a directory within the current working directory',
    arg_1: 'Argument 1: project name (default: benchmark)',
  },
  iabgfoa: {
    description: 'generates test skeletons from an OpenApi documentation for a project in the current working directory',
    arg_1: 'Argument 1: path to the OpenApi document',
  },
  iabgfh: {
    description: 'generates test skeletons from an HAR document for a project in the current working directory',
    arg_1: 'Argument 1: path to the HAR document',
  },
  iabcrd: {
    description: 'checks all routes for possible issues, so there are no surprises, when actually running the code.',
    arg_1: 'Argument 1: language(default: en)',
  },
  iabrl: {
    description: 'runs a load test with the given routes up to a limit of threads. Stops when the limit is reached or an error is found during response validation.',
    arg_1: 'Argument 1: threads (default 1)',
    arg_2: 'Argument 2: repetitions (default 1)',
    arg_3: 'Argument 3: language code (default en)',
    arg_4: 'Argument 4: thread increment (default 1)',
    arg_5: 'Argument 5: maximum threads (default 100)',
  },
  iab: {
    description: 'This command is going to replace all other commands with a  more sensible interface in 3.0.0 and is available from 2.8.0',
    arg_1: 'runs a benchmark with all options being optional.',
    arg_2: 'runs a content test/integration test with all options being optional.',
    arg_3: 'runs a route verification with all options being optional.',
    arg_4: 'runs a load test with all options being optional.',
    arg_5: 'runs a benchmark with all options being optional.',
    arg_6: 'runs a stress test for the desired duration in seconds with all options being optional.',
  },
};

export default lang;
