/* eslint max-len:0 */
const lang = {
  meta: {
    title: 'Avvio rapido',
    description: 'Pochi passaggi per rendere rapidamente operativo un progetto api-bench.',
  },
  title: '@idrinth/api-bench avvio rapido',
  description: 'Iniziare con il framework non è difficile. Segui i prossimi due passaggi e avrai il tuo primo caso pronto per l\'esecuzione in pochi minuti.',
  step1: {
    title: 'Requisiti',
    description: 'Assicurati che sia installata una versione supportata di Node.js. Ciò significa una delle ultime due versioni. Si consiglia sempre l\'ultima versione con supporto a lungo termine (lts).',
  },
  step2: {
    title: 'Configurazione',
    description: 'Esegui il comando di creazione per creare un nuovo progetto benchmark in una cartella all\'interno della directory di lavoro corrente:',
    result: 'Il tuo progetto è ora configurato con la struttura di cartelle necessaria, pronto per un\'ulteriore personalizzazione.',
  },
  step3: {
    title: 'Creazione dei case',
    description: 'Accedi al progetto appena creato e crea un nuovo file su src/routes/main/first-test.ts. Compilalo con il seguente contenuto di esempio:',
    result: 'Ciò verificherà che l\'URL principale restituisce un codice di stato 2xx e invierà l\'user agent con la risposta.',
  },
  step4: {
    title: 'Primo utilizzo',
    description: 'Con il comando seguente puoi eseguire l\'esempio su un\'API di test pubblica per vederlo in azione. Non provare a creare uno scenario di service denial e mantieni basso il numero di thread. La creazione di uno scenario di service denial potrebbe rendere la macchina o la risorsa di rete non più disponibili per gli utenti previsti.',
  },
  step5: {
    title: 'Crea una tua rotta',
    description: 'Crea una piccola route tutta tua. La maggior parte del lavoro con il framework riguarda la creazione delle rotte, quindi questo ti mostrerà quanto velocemente può essere eseguita. Fare riferimento alla sezione Utilizzo per assistenza.',
    result: 'Ora hai un\'idea di come usare iab, vai avanti e usalo per bene!',
  },
};

export default lang;
