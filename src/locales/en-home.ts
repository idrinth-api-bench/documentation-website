/* eslint max-len:0 */
const lang = {
  meta: {
    title: 'Home',
    description: 'Welcome to the documentation for the framework @idrinth/api-bench',
  },
  title: 'What does this project do?',
  what: 'This project provides an API performance measuring and monitoring framework, that strives to provide the best developer experience possible while keeping it easy to expand and configure.',
  why: 'This helps to detect performance changes in code in a quick and simple manner.',
  demo: {
    youtube: 'Version 2.7.4 Demo',
  },
  benchmark: {
    title: 'Why use a Benchmark Runner?',
    microservices: 'Given that the amount of APIs increase by moving to microservices, we need a way to determine if changes to a service\'s response times are related to code changes.',
    purpose: 'For this purpose a defined load with repeatable requests with a medium amount of checks seems the most useful.',
  },
  'load-test': {
    title: 'Why use a Load Test Runner?',
    microservices: 'For planning and scaling purposes, we need to know how many users we can handle with a given amount of microservice instances.',
    purpose: 'For this purpose a defined growing load with repeatable requests with few checks seems the most useful.',
  },
  'content-test': {
    title: 'Why use a Content Test Runner?',
    microservices: 'With the amount of APIs skyrocketing, the need to test them quickly and with as little effort as possible is required.',
    purpose: 'For this purpose repeatable requests with many checks seems the most useful.',
  },
  libraries: {
    title: 'Regarding existing libraries',
    description: 'Other tools are all either untouched for quite a while and don\'t provide type definitions for typescript. This makes them less desirable when working with projects where the better static code check is a huge boost in development speed.',
    reusability: 'A huge benefit of using this framework is writing route definitions once and reusing them across all desired test types.',
    threading: 'Additionally, this tool separates the validation thread from the thread processing the actual requests to further minimise the effect of complicated validations or huge response bodies on the data gathering.',
  },
};

export default lang;
