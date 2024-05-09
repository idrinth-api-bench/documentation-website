/* eslint max-len:0 */
const lang = {
  meta: {
    title: 'Stockage | Usage',
    description: 'Informations sur le stockage MySQL fourni et comment créer des implémentations de stockage personnalisées pour @idrinth/api-bench',
  },
  description: 'Les classes de stockage stockent chaque ensemble terminé de l\'exécution. Par défaut, rien n\'est stocké, mais un stockage mysql est prévu pour ceux qui le souhaitent.',
  custom: {
    description: 'Pour fournir un stockage personnalisé, implémentez l\'interface ci-dessous. La méthode sera appelée une fois par tâche.',
  },
};

export default lang;
