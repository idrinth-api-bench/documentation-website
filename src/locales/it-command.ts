/* eslint max-len:0 */
const lang = {
  or: 'oppure',
  deprecated: 'Questo comando è deprecato.',
  cli: 'Disponibile tramite il pacchetto CLI @idrinth/api-bench-cli ed il framework.',
  iabr: {
    description: 'esegue il progetto della directory di lavoro corrente se la cartella delle rotte è configurata correttamente',
    arg_1: 'Parametro 1: threads (default 1)',
    arg_2: 'Parametro 2: ripetizioni (default 1)',
    arg_3: 'Parametro 3: codice della lingua (default en)',
    arg_4: 'Parametro 4: task id, che vuoi eseguire da solo (default all)',
  },
  iabmp: {
    description: 'crea un nuovo progetto di benchmarking in una directory all\'interno della directory di lavoro corrente',
    arg_1: 'Parametro 1: nome del progetto (default: benchmark)',
  },
  iabgfoa: {
    description: 'genera scheletri di test da una documentazione OpenApi per un progetto nella directory di lavoro corrente',
    arg_1: 'Parametro 1: percorso del documento OpenApi',
  },
  iabgfh: {
    description: 'genera scheletri di test da un documento HAR per un progetto nella directory di lavoro corrente',
    arg_1: 'Parametro 1: pecorso del documento HAR',
  },
  iabcrd: {
    description: 'controlla tutte le rotte per possibili problemi, quindi non ci sono sorprese durante l\'esecuzione effettiva del codice.',
    arg_1: 'Parametro 1: lingua (default: en)',
  },
  iabrl: {
    description: 'esegue un test di carico con i percorsi specificati fino a un limite di thread. Si arresta quando viene raggiunto il limite o viene rilevato un errore durante la convalida della risposta.',
    arg_1: 'Parametro 1: threads (default 1)',
    arg_2: 'Parametro 2: ripetizioni (default 1)',
    arg_3: 'Parametro 3: codice della lingua (default en)',
    arg_4: 'Parametro 4: incremento di thread (default 1)',
    arg_5: 'Parametro 5: thread massimi (default 100)',
  },
  iab: {
    description: 'Questo comando sostituirà tutti gli altri comandi con un\'interfaccia più sensata nella versione 3.0.0 ed è disponibile dalla versione 2.8.0',
    arg_1: 'esegue un benchmark con tutte le opzioni facoltative.',
    arg_2: 'esegue un test del contenuto/test di integrazione con tutte le opzioni facoltative.',
    arg_3: 'esegue una verifica delle rotte con tutte le opzioni facoltative.',
    arg_4: 'esegue un test di carico con tutte le opzioni facoltative.',
    arg_5: 'esegue un benchmark con tutte le opzioni facoltative.',
    arg_6: 'esegue uno stress test per la durata desiderata in secondi con tutte le opzioni facoltative.',
  },
};

export default lang;
