/* eslint max-len:0 */
const lang = {
  meta: {
    title: 'Contribuire',
    description: 'Linee guida per contribuire al framework @idrinth/api-bench',
  },
  title: 'Linee Guida per Contribuire',
  description: 'Tutti i contributi sono incoraggiati.',
  youtube: 'Panoramica della struttura su YouTube',
  structure: {
    title: 'Struttura',
    description: 'Il progetto è un mono-repo raggruppato in più sottoprogetti, ad esempio documentation-website, framework, history-microservice, CLI, mindmap, history-website. Puoi trovare istruzioni più dettagliate per la parte specifica nel file Readme della cartella corrispondente.',
  },
  issues: {
    title: 'Problemi',
    description: 'Qualsiasi idea e segnalazione di bug è considerata un contributo. Non solo aiutano a migliorare il codice base, ma aiutano anche altre persone a sfruttare maggiormente questo framework. Prova a rispettare il formato degli issue type predefiniti per semplificare il filtraggio e la gestione per chiunque sia interessato all\'argomento.',
  },
  code: {
    title: 'Codice',
    style: 'Le linee guida di stile sono fornite tramite eslint. Prova a ottimizzare la leggibilità del codice, poiché il codice verrà letto molto più spesso di quanto verrà modificato.',
    breaking: 'Quando aggiungi funzionalità, tieni presente di rompere le interfacce, i punti di ingresso e le funzionalità esistenti solo se assolutamente necessario.',
    picking: {
      title: 'Scegliere la giusta issue',
      labels: 'I problemi che sono utili per programmatori relativamente nuovi sono contrassegnati come \'Good first issue\', i problemi contrassegnati come \'Help wanted\' richiedono una conoscenza un po\' più ampia del progetto.',
      project: 'All\'interno di una issue, trovi le informazioni sul progetto sul lato destro, aprendole rivelerai ulteriori stime su dimensioni, difficoltà, priorità e parte principale del progetto interessato',
    },
    workflow: {
      title: 'Flusso di lavoro del contributo',
      list_item_1: 'fai il fork della repository',
      list_item_2: 'menziona la issue dicendo che ci stai lavorando (sarà a te assegnata per qualche settimana)',
      list_item_3: 'crea un branch (issue-xxx-does-something) da master',
      list_item_4: 'crea una draft pull request',
      list_item_5: 'menziona \'fixes #xxx\' nella descrizione',
      list_item_6: 'fai i tuoi cambiamenti nel branch',
      list_item_7: 'controlla se tutte le actions diventano verdi',
      list_item_8: 'contrassegna come pronto per la revisione',
      list_item_9: 'ottieni la revisione delle modifiche',
      list_item_10: 'se la revisione è positiva, fai merge delle modifiche, altrimenti correggi e rimanda alla revisione',
    },
    translation: {
      title: 'Traduzioni',
      setup: 'Se desideri testare le traduzioni, c\'è una build automatica nella root del progetto:',
      path: 'Le lingue si trovano nella rispettiva cartella del progetto.',
      example: 'Esempio:',
      youtube: 'YouTube tutorial sulle traduzioni',
    },
    mindmap: {
      title: 'Mindmap',
      youtube: 'Breve Tutorial della Mindmap su YouTube',
      introduction: 'Contribuire alla mindmap è incoraggiato. La mindmap è creata da data.yml in /mindmap e segue il seguente schema:',
      nodes: 'Per poter visualizzare i nodi, devono avere una proprietà text. Potrebbero anche avere; un URL, una descrizione e nodi secondari.',
    },
    tests: {
      title: 'Test',
      description: 'È prevista la creazionedi test per il codice nuovo ed è apprezzata l\'aggiunta di test o il miglioramento dei test per il vecchio codice. L\'obiettivo è trovare la maggior parte dei problemi mediante analisi statica o test unitari e di integrazione.',
      manual: {
        title: 'Test Manuali',
        description: 'Per i test manuali è possibile eseguire \'npm run coai\' nella cartella di origine per estrarre e installare automaticamente tutti i file richiesti per il test.',
      },
      locally: {
        title: 'Esecuzione di Test Localmente',
        description: 'Per visualizzare un elenco di task CI disponibili e i comandi corrispondenti per eseguirle localmente, è possibile eseguire \'npm run local\' nella cartella di origine. Ciò è particolarmente utile per testare task CI specifici prima di confermare le modifiche.',
      },
    },
    naming: {
      title: 'Convenzioni di naming',
      list_item_1: 'camelCase per le variabili e le funzioni',
      list_item_2: 'UPPER_SNAKE_CASE per le costanti',
      list_item_3: 'PascalCase per interfacce e classi',
      list_item_4: 'kebab-case per i nomi dei file',
    },
    requirements: {
      title: 'Requisiti',
      node: 'È richiesta una delle ultime due versioni di node.',
      os: 'Sistemi Operativi Supportati: Linux, Windows, e macOS.',
    },
    setup: {
      title: 'Setup',
      description: 'Esegui i seguenti comandi per creare il progetto completo:',
    },
    commits: {
      title: 'Linee guida per i messaggi di commit',
      preface: '*Questa specifica si ispira alle linee guida sui messaggi di commit di Angular.',
      introduction: 'Queste sono le regole su come formattare i messaggi di commit Git per api-bench. Questo formato facilita la lettura della cronologia dei commit.',
      parts: 'Ogni messaggio di commit è costituito da un\'intestazione, un corpo e un piè di pagina.',
      header: {
        title: 'Intestazione del Messaggio di Commit',
        format: 'Le intestazioni devono rispettare il seguente formato:',
        description: 'L\'intestazione è obbligatoria e deve essere conforme al formato dell\'intestazione del messaggio di commit.',
        type: {
          title: 'Type',
          description: 'Elenco dei tipi supportati:',
          list_item_1: 'build: Modifiche che influiscono sul sistema di compilazione o sulle dipendenze esterne',
          list_item_2: 'ci: Modifiche ai file e agli script di configurazione CI',
          list_item_3: 'docs: Modifiche alla documentazione',
          list_item_4: 'feature: Una nuova funzionalità',
          list_item_5: 'fix: Una correzione di bug',
          list_item_6: 'perf: Una modifica al codice che migliora le prestazioni',
          list_item_7: 'refactor: Una modifica al codice che non risolve un bug né aggiunge una funzionalità',
          list_item_8: 'test: Aggiunta di test mancanti o correzione di test esistenti',
        },
        scope: {
          title: 'Scope',
          description: 'Lo scope dovrebbe essere il nome della parte interessata del progetto. L\'elenco degli scope supportati:',
          list_item_1: 'framework',
          list_item_2: 'website',
          list_item_3: 'history-microservice',
          list_item_4: 'history-website',
          list_item_5: 'dockerfiles',
          list_item_6: 'examples',
        },
        summary: {
          title: 'Summary',
          description: 'Il campo di riepilogo dovrebbe fornire una breve descrizione della modifica.',
          list_item_1: 'usa l\'imperativo presente',
          list_item_2: 'non scrivere in maiuscolo la prima lettera',
          list_item_3: 'nessun punto (.) alla fine',
        },
      },
      body: {
        title: 'Corpo del Messaggio di Commit',
        description: 'Il corpo è obbligatorio per tutti i commit. Dovrebbero essere conformi al formato del corpo del messaggio di commit.',
        content: 'Il corpo del messaggio di commit dovrebbe spiegare *perché* stai apportando la modifica. È possibile includere un confronto tra il comportamento precedente e il nuovo comportamento per illustrare l\'impatto della modifica.',
        time: 'Proprio come nel riassunto, usa l\'imperativo presente.',
      },
      footer: {
        title: 'Piè di Pagina del Messaggio di Commit',
        description: 'Il piè di pagina è facoltativo. Il formato del messaggio di commit del footer descrive lo scopo per cui viene utilizzato il footer e la struttura che deve avere.',
        content: 'Il piè di pagina può contenere informazioni su modifiche sostanziali e deprecazioni ed è anche il luogo in cui fare riferimento ai problemi di GitHub e ad altre richieste pull chiuse da questo commit o a cui è correlato.',
        breaking: 'In caso di modifiche sostanziali e deprecazioni, la sezione deve iniziare rispettivamente con la frase \'BREAKING CHANGE:\' o \'DEPRECATED:\' seguita rispettivamente da una descrizione. Per esempio:',
      },
      complete: {
        title: 'Commit Completo',
        description: 'Ecco un esempio completo di un messaggio di commit corretto:',
      },
      reverts: {
        title: 'Fare Revert dei Commit',
        description: 'Se il commit ripristina un commit precedente, dovrebbe iniziare con \'revert:\', seguito dall\'intestazione del commit ripristinato.',
        content: 'Il contenuto del corpo del messaggio di commit dovrebbe contenere:',
        list_item_1: 'ID del commit ripristinato nel seguente formato: \'This reverts commit <SHA>\'.',
        list_item_2: 'una descrizione chiara del motivo per cui è stato ripristinato il messaggio di commit.',
      },
    },
    pull_requests: {
      title: 'Pull Requests',
      description: 'Apri le tue richieste pull in modalità bozza. Quando sei pronto per la revisione, rimuovi la bozza. Non forzare il push, crea solo lavoro aggiuntivo.',
    },
  },
  documentation: {
    title: 'Documentazione',
    description: 'La documentazione è una parte sottovalutata di ogni software. Aggiungere qualsiasi tipo di chiarimento, esempio o miglioramento è molto apprezzato e incoraggiato. Coloro che scrivono la documentazione sono gli eroi non celebrati del software open source e chiuso.',
  },
  examples: {
    title: 'Esempi',
    description: 'Per gli esempi, tieni presente che non vogliamo sovraccaricare alcuna API. Non utilizzare attività a carico elevato, non utilizzare API non destinate all\'uso pubblico. Ci si aspetta che gli esempi vengano eseguiti senza danneggiare nessuno, compresi terzi.',
  },
};

export default lang;
