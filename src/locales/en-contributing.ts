/* eslint max-len:0 */
const lang = {
  meta: {
    title: 'Contributing',
    description: 'Contribution guidelines for the framework @idrinth/api-bench',
  },
  title: 'Contributing Guidelines',
  description: 'Any and all contributions are encouraged.',
  youtube: 'Structure Overview on YouTube',
  structure: {
    title: 'Structure',
    description: 'The project is a mono-repo grouped into multiple subprojects, for example documentation-website, framework, history-microservice, CLI, mindmap, history-website. You can find more detailed instructions for the specific part in the corresponding folder\'s readme.',
  },
  issues: {
    title: 'Issues',
    description: 'Any idea and bug report is considered a contribution. Not only do they help improving the code base, they help other people to get more use out of this framework. Please try to stick to the format of predefined issue types to make it easier to filter and handle for anyone interested in the topic.',
  },
  code: {
    title: 'Code',
    style: 'The style guidelines are provided via eslint. Please try to optimise code for readability, since code will be read way more often than it will be changed.',
    breaking: 'While adding functionality, keep in mind to break existing interfaces, entry points and functionality only if absolutely necessary.',
    picking: {
      title: 'Picking the right issue',
      labels: 'Issues that are good for relatively new coders are marked as `Good first issue`, issues marked as `help wanted` require a bit more knowledge about the project.',
      project: 'Within an issue, you find the project information on the right-hand side, opening them up will reveal further estimates about size, difficulty, priority and main affected project part',
    },
    workflow: {
      title: 'Contribution workflow',
      list_item_1: 'fork the repository',
      list_item_2: 'mention in the issue, that you are working on it (it will be assigned for a few weeks then)',
      list_item_3: 'create a feature branch (issue-xxx-does-something) from the-one',
      list_item_4: 'create a draft pull request',
      list_item_5: 'mention fixes #xxx in the description',
      list_item_6: 'make your changes to the branch',
      list_item_7: 'check if actions are all green',
      list_item_8: 'mark as ready to review',
      list_item_9: 'get changes reviewed',
      list_item_10: 'if review is positive get changes merged otherwise fix and the send back to review',
    },
    translation: {
      title: 'Translation',
      setup: 'If you\'d like to test translations, there\'s an auto-rebuild in the project root:',
      path: 'Languages can be found in their respective project folder.',
      example: 'Example:',
      youtube: 'Translation YouTube tutorial',
    },
    mindmap: {
      title: 'Mindmap',
      youtube: 'Short Mindmap YouTube Tutorial',
      introduction: 'Contributing to the mindmap is encouraged. The mindmap is built from data.yml in /mindmap and follows the following schema:',
      nodes: 'In order to display nodes, they must have a text property. They may also have; a URL, description, and child nodes.',
    },
    tests: {
      title: 'Tests',
      description: 'Testing new code is expected and adding tests or improving tests for old code is appreciated. The goal is to find most issues by either static analysis or unit and integration tests.',
      manual: {
        title: 'Manual Tests',
        description: 'For manual testing you can run \'npm run coai\' in the source folder to automatically check out and install all required files for testing.',
      },
      locally: {
        title: 'Running Tests Locally',
        description: 'To see a list of available CI tasks and their corresponding commands to run them locally, you can run \'npm run local\' in the source folder. This is particularly useful for testing specific CI tasks before committing your changes.',
      },
    },
    naming: {
      title: 'Naming conventions',
      list_item_1: 'camelCase for variables and functions',
      list_item_2: 'UPPER_SNAKE_CASE for constants',
      list_item_3: 'PascalCase for interfaces and classes',
      list_item_4: 'kebab-case for file names',
    },
    requirements: {
      title: 'Requirements',
      node: 'One of the last two node versions is required.',
      os: 'Supported Operating Systems: Linux, Windows, and macOS.',
    },
    setup: {
      title: 'Setup',
      description: 'Run the following commands to create the full project:',
    },
    commits: {
      title: 'Commit Message Guidelines',
      preface: '*This specification is inspired by Angular commit messages guidelines.',
      introduction: 'These are the rules for how Git commit messages for api-bench should be formatted. This format leads to easier to read commit history.',
      parts: 'Each commit message consists of a header, a body, and a footer.',
      header: {
        title: 'Commit Message Header',
        format: 'Headers must adhere to the following format:',
        description: 'The header is mandatory and should conform to the Commit Message Header format.',
        type: {
          title: 'Type',
          description: 'The list of supported types:',
          list_item_1: 'build: Changes that affect the build system or external dependencies',
          list_item_2: 'ci: Changes to CI configuration files and scripts',
          list_item_3: 'docs: Documentation changes',
          list_item_4: 'feature: A new feature',
          list_item_5: 'fix: A bug fix',
          list_item_6: 'perf: A code change that improves performance',
          list_item_7: 'refactor: A code change that neither fixes a bug nor adds a feature',
          list_item_8: 'test: Adding missing tests or correcting existing tests',
        },
        scope: {
          title: 'Scope',
          description: 'The scope should be the name of the affected part of the project. The list of supported scopes:',
          list_item_1: 'framework',
          list_item_2: 'website',
          list_item_3: 'history-microservice',
          list_item_4: 'history-website',
          list_item_5: 'dockerfiles',
          list_item_6: 'examples',
        },
        summary: {
          title: 'Summary',
          description: 'The summary field should provide a succinct description of the change.',
          list_item_1: 'use the imperative, present tense',
          list_item_2: 'don\'t capitalise the first letter',
          list_item_3: 'no dot (.) at the end',
        },
      },
      body: {
        title: 'Commit Message Body',
        description: 'The body is mandatory for all commits. They should conform to the Commit Message Body format.',
        content: 'The commit message body should explain *why* you are making the change. You can include a comparison of the previous behaviour with the new behaviour in order to illustrate the impact of the change.',
        time: 'Just as in the summary, use the imperative, present tense.',
      },
      footer: {
        title: 'Commit Message Footer',
        description: 'The footer is optional. The Commit Message Footer format describes what the footer is used for and the structure it must have.',
        content: 'The footer can contain information about breaking changes and deprecations and is also the place to reference GitHub issues and other pull requests that this commit closes or is related to.',
        breaking: 'In case of breaking changes and deprecations the section should start with the phrase \'BREAKING CHANGE:\' or \'DEPRECATED: \' respectively followed by a description. For example:',
      },
      complete: {
        title: 'Complete Commit',
        description: 'Here\' a complete example of a correct commit message:',
      },
      reverts: {
        title: 'Revert commits',
        description: 'If the commit reverts a previous commit, it should begin with \'revert:\', followed by the header of the reverted commit.',
        content: 'The content of the commit message body should contain:',
        list_item_1: 'ID of the commit being reverted in the following format: `This reverts commit <SHA>`',
        list_item_2: 'a clear description of the reason for reverting the commit message.',
      },
    },
    pull_requests: {
      title: 'Pull Requests',
      description: 'Please open your pull requests in draft mode. When ready to review remove the draft. Do not force-push, it just creates additional work.',
    },
  },
  documentation: {
    title: 'Documentation',
    description: 'Documentation is an underrated part of every software. Adding any kind of clarification, example or improvement is highly appreciated and encouraged. The ones writing the documentation are the unsung heroes of open and closed source software.',
  },
  examples: {
    title: 'Examples',
    description: 'For examples, please keep in mind, that we don\'t want to overload any API. Don\'t use high load tasks, don\'t use APIs that are not for public use. Examples are expected to run without damaging anyone, including third parties.',
  },
};

export default lang;
