/* eslint max-len:0 */
const lang = {
  meta: {
    title: 'Quick Start',
    description: 'A few steps to quickly get an api-bench project up and running.',
  },
  title: '@idrinth/api-bench quick start',
  description: 'Starting out with the framework is not difficult. Follow the next couple steps and you will have your first case ready to run in a few minutes.',
  step1: {
    title: 'Requirements',
    description: 'Make sure that Node.js in a supported version is installed. That means one of the latest two versions. The latest long term support(lts) version is always recommended.',
  },
  step2: {
    title: 'Setup',
    description: 'Run the creation command to create a new benchmark project in a folder within your current working directory:',
    result: 'Your project is now set up with the necessary folder structure, ready for further customisation.',
  },
  step3: {
    title: 'Case creation',
    description: 'Go into the newly created project and create a new file at src/routes/main/first-test.ts. Fill it with the following example content:',
    result: 'This will test, that the URL in main returns a 2xx Status Code and send the user agent with the request.',
  },
  step4: {
    title: 'First run',
    description: 'With the following command you can run the example against a public test API to see it in action. Please don\'t try to create a service denial scenario and keep the thread count low. Creating a service denial scenario could result in the machine or network resource to become unavailable to intended users.',
  },
  step5: {
    title: 'Create a route of your own',
    description: 'Create a small route of your own. Most of the work with the framework is route creation, so this will show you how quickly it can be done. Refer to the Usage section for help.',
    result: 'You now have an idea of how to use iab, go ahead and use it for good!',
  },
};

export default lang;
