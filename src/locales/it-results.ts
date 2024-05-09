/* eslint max-len:0 */
const lang = {
  meta: {
    title: 'Risultati | Utilizzo',
    description: 'Il framework @idrinth/api-bench fornisce gestori di risultati predefiniti e consente ulteriori gestori di risultati personalizzati',
  },
  title: 'Risultati',
  description: 'Di default, vengono forniti tutti i possibili formati di risultato. I file vengono creati nella radice dell\'applicazione, ma possono essere sovrascritti a livello di codice.',
  csv: {
    description: 'Ciò fornisce un file che può essere facilmente aperto da Excel o gestito a livello di codice.',
  },
  html: {
    description: 'Ciò fornisce un semplice file HTML, che potrebbe essere inviato tramite e-mail, ad esempio.',
  },
  cli: {
    description: 'Ciò fornisce una piccola tabella nella riga di comando, che mostra la maggior parte dei dati.',
  },
  json: {
    description: 'Ciò fornisce un file facilmente gestibile tramite altri software. Per impostazione predefinita, non è formattato per la leggibilità.',
  },
  xray: {
    title: 'XRay su Jira',
    description: 'Forniamo due gestori XRay, che possono essere attivati tramite variabili ENV. Se non imposti tutte le variabili d\'ambiente, il rispettivo reporting verrà saltato.',
    shared: 'Entrambi i provider necessitano dell\'impostazione di XRAY_ENDPOINT e XRAY_TEST_PLAN_KEY. Il primo punta al tuo URL root Jira, il secondo è l\'ID esatto del tuo piano di test, ad esempio TEST-123.',
    cloud: 'Se utilizzi il cloud hosting, XRAY_CLIENT_ID e XRAY_CLIENT_SECRET sono necessari a rendere possibile l\'accesso.',
    onpremise: 'Se utilizzi l\'hosting on premise, fornisci invece i dati di accesso tramite XRAY_USER_NAME e XRAY_PASSWORD.',
    limitations: 'Assicurati che l\'ID del test nell\'ID del percorso inizi con un cancelletto, ad esempio #TEST-876. La mancata osservanza di questo formato potrebbe causare errori o ID test non riconosciuti durante l\'elaborazione XRay.',
  },
  custom: {
    title: 'Risultati Personalizzati',
    description: 'Puoi fornire un\'istanza reporter personalizzata come parte della configurazione nell\'accesso programmatico al framework. Verrà chiamato con il risultato completo dopo che tutti i modificatori del risultato avranno modificato il risultato.',
  },
};

export default lang;
