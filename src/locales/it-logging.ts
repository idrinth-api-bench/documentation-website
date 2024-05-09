/* eslint max-len:0 */
const lang = {
  meta: {
    title: 'Logging | Utilizzo',
    description: 'Informazioni sull\'utilizzo del logging e supporto del framework @idrinth/api-bench',
  },
  title: 'Logging',
  description: 'Qualsiasi logger che implementa l\'interfaccia o dispone di un wrapper è un\'opzione. Sono disponibili wrapper per Pino e Winston.',
  used: {
    title: 'Livelli di Logging Utilizzati',
    description: 'La maggior parte dei log sono a livello di debug, con i passaggi principali scritti in info. Il trace attualmente non è utilizzato ma potrebbe essere utilizzato per la stampa dettagliata degli argomenti in un momento o nell\'altro.',
  },
  custom: {
    title: 'Logger Personalizzato',
    final: 'Per facilità d\'uso, viene fornito anche un wrapper, che richiede solo l\'implementazione di un metodo di log.',
    description: 'Puoi implementare l\'interfaccia del logger di seguito e fornire qualsiasi logger che desideri accanto a quelli già forniti.',
  },
};

export default lang;
