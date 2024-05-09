/* eslint max-len:0 */
const lang = {
  meta: {
    title: 'Storage | Usage',
    description: 'Information about the provided MySQL storage and how to create custom storage implementations for @idrinth/api-bench',
  },
  title: 'Storage',
  description: 'Storage classes store each finished set of the run. By default, nothing is stored, but a MySQL storage is provided for those wanting it.',
  experimental: {
    title: 'Experimental',
    description: 'We are providing experimental storage support for MSSQL and Postgres starting with 2.8.0. These implementations are not yet well tested.',
  },
  custom: {
    title: 'Custom Storage',
    description: 'To provide a custom storage, implement the interface below. The method will be called once per task.',
  },
};

export default lang;
