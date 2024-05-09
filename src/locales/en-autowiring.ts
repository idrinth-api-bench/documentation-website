/* eslint max-len:0 */
const lang = {
  meta: {
    title: 'Autowiring | Usage',
    description: 'The framework @idrinth/api-bench can autowire environment variables into route definitions',
  },
  title: 'Autowiring Route Parameters',
  limitations: 'Comment types will always win over default value types. If those two don\'t match, you might get weird results. Sadly, a few things can\'t be done.',
  conversion: 'Types will be automatically applied if there is either a default value to get the type from or a comment like /* boolean */ parameter added in front of the parameter.',
  parameters: 'Parameters of contained functions will be filled with environment variable values of the respective name (aBc -> A_BC).',
  limitation: {
    title: 'Limitations',
    constants: 'Do not use constants for their default values, they can\'t be properly analysed and will throw an Error.',
    objects: 'Do not use arrays or objects as default values, they can\'t be autowired.',
    destructuring: 'Destructuring is not supported.',
    mixed: 'Default value types NOT of the same type as the parameter.',
  },
  example: {
    title: 'Example',
    description: 'Here we autowire three environment variables as string to make the route easy to reuse.',
  },
};

export default lang;
