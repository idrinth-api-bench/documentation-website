/* eslint max-len:0 */
const lang = {
  meta: {
    title: 'Home',
    description: 'Benvenuti nel sito della documentazione per il framework @idrinth/api-bench',
  },
  title: 'In cosa consiste questo progetto?',
  what: 'Questo progetto fornisce un framework per testare le API rest e i siti Web per monitorarne i tempi di risposta.',
  why: 'Ciò aiuta a rilevare le modifiche delle prestazioni nel codice in modo rapido e semplice.',
  demo: {
    youtube: 'Versione 2.7.4 Demo',
  },
  benchmark: {
    title: 'Perché utilizzare un Benchmark Runner?',
    microservices: 'Dato che la quantità di API aumenta passando ai microservizi, abbiamo bisogno di un modo per determinare se le modifiche ai tempi di risposta di un servizio sono correlate a modifiche del codice.',
    purpose: 'A questo scopo sembra più utile un carico definito con richieste ripetibili con un numero medio di controlli.',
  },
  'load-test': {
    title: 'Perché usare un Load Test Runner?',
    microservices: 'Ai fini della pianificazione e della scalabilità, dobbiamo sapere quanti utenti possiamo gestire con una determinata quantità di istanze di microservizi.',
    purpose: 'A questo scopo un carico crescente definito con richieste ripetibili con pochi controlli sembra il più utile.',
  },
  'content-test': {
    title: 'Perché usare un Content Test Runner?',
    microservices: 'Con la quantità di API alle stelle, è necessaria la possibilità di testarle rapidamente e con il minimo sforzo possibile.',
    purpose: 'A questo scopo le richieste ripetibili con molti controlli sembrano le più utili.',
  },
  libraries: {
    title: 'Riguardo le librerie esistenti',
    description: 'Gli altri strumenti sono rimasti inattivi per un bel po\' e non forniscono definizioni dei tipi per typescript. Ciò li rende meno desiderabili quando si lavora con progetti in cui un migliore controllo del codice statico rappresenta un enorme aumento della velocità di sviluppo.',
    reusability: 'Un enorme vantaggio derivante dall\'utilizzo di questo framework è scrivere le definizioni delle rotte una volta e riutilizzarle in tutti i tipi di test desiderati.',
    threading: 'Inoltre, questo strumento separa il thread di convalida dal thread che elabora le richieste effettive per ridurre ulteriormente l\'effetto di validazioni complicate o di enormi corpi di risposta sulla raccolta dei dati.',
  },
};

export default lang;
