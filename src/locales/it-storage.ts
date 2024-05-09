/* eslint max-len:0 */
const lang = {
  meta: {
    title: 'Archiviazione | Utilizzo',
    description: 'Informazioni sullo spazio di archiviazione MySQL fornito e su come creare implementazioni di archiviazione personalizzate per @idrinth/api-bench',
  },
  title: 'Archiviazione',
  description: 'Le classi di archiviazione archiviano ogni set finito della run. Per impostazione predefinita, non viene archiviato nulla, ma per coloro che lo desiderano viene fornito un archivio MySQL.',
  experimental: {
    title: 'Sperimentale',
    description: 'Forniamo supporto di archiviazione sperimentale per MSSQL e Postgres a partire dalla versione 2.8.0. Queste implementazioni non sono ancora ben testate.',
  },
  custom: {
    title: 'Archiviazione Personalizzata',
    description: 'Per fornire uno spazio di archiviazione personalizzato, implementare l\'interfaccia seguente. Il metodo verrà chiamato una volta per attività.',
  },
};

export default lang;
