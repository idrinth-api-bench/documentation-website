/* eslint max-len:0 */
const lang = {
  meta: {
    title: 'Middleware | Utilizzo',
    description: 'Il framework @idrinth/api-bench fornisce middleware predefiniti e consente middleware personalizzati',
  },
  title: 'Middleware',
  description: 'I middleware utilizzano un percorso file assoluto per essere caricati. I seguenti caratteri verranno utilizzati per espandere short form:',
  provided: {
    '403': 'controllo dello status 403',
    '404': 'controllo dello status 404',
    title: 'Middleware forniti',
    encoding: 'JSON e form encode',
    access: 'gestione degli access token',
    csrf: 'gestione del csrf-header',
    '2xx': 'controllo dello status 2xx',
    'user-agent': 'user-agent',
    cookies: 'cookies',
    json: 'json-validator',
    xml: 'xml-validator',
    'silent-server-validator': 'silent-server-validator',
    'success-check': 'controllo della risposta success',
    'failure-check': 'controllo della risposta failure',
  },
  custom: {
    title: 'Middleware Personalizzato',
    description: 'Per il middleware personalizzato, implementare la seguente interfaccia. La Prepare viene chiamata prima di inviare una richiesta, la Process dopo una richiesta. Se viene generato un errore durante la process, eventuali ulteriori convalide vengono ignorate.',
  },
};

export default lang;
