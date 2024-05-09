/* eslint max-len:0 */
const lang = {
  meta: {
    title: 'Autowiring | Utilizzo',
    description: 'Il framework @idrinth/api-bench può collegare automaticamente le variabili di ambiente alle definizioni delle rotte.',
  },
  title: 'Autowiring Parametri delle Rotte',
  limitations: 'I tipi di commento prevarranno sempre sui tipi di valore predefiniti. Se questi due non corrispondono, potresti ottenere risultati strani. Purtroppo alcune cose non possono essere fatte.',
  conversion: 'I tipi verranno applicati automaticamente se è presente un valore predefinito da cui ottenere il tipo o un commento come /* boolean */ parametro aggiunto davanti al parametro.',
  parameters: 'I parametri delle funzioni contenute verranno riempiti con i valori delle variabili di ambiente del rispettivo nome (aBc -> A_BC).',
  limitation: {
    title: 'Limiti',
    constants: 'Non utilizzare costanti per i valori predefiniti, non possono essere analizzate correttamente e genereranno un errore.',
    objects: 'Non utilizzare array o oggetti come valori predefiniti, non possono essere cablati automaticamente.',
    destructuring: 'La destrutturazione non è supportata.',
    mixed: 'Tipi di valori predefiniti NON dello stesso tipo del parametro.',
  },
  example: {
    title: 'Esempio',
    description: 'Qui colleghiamo automaticamente tre variabili di ambiente come stringa per rendere il percorso facile da riutilizzare.',
  },
};

export default lang;
