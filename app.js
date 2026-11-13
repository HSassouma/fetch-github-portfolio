/* ==================================================================
   Atelier Fetch × GitHub — app.js (Fichier de départ)
   ================================================================== */

// ---------- Configuration & État ----------
const USERNAME = 'octocat'; // Profil affiché au démarrage
const USE_MOCK = false;     // true = utilise les fichiers locaux du dossier mock/

let allRepos = [];          // Stocke tous les dépôts chargés (utile pour le filtre)
let currentUser = USERNAME; // Mémorise le profil actuel (utile pour le bouton "Retry")


/* ==================================================================
   ÉTAPE 1 — Récupération des données (Fetch)
   ================================================================== */

// Retourne l'URL à appeler (API GitHub ou dossier mock)
function getUrl(path) {
  if (USE_MOCK) return path.includes('/repos') ? './mock/repos.json' : './mock/user.json';
  return `https://api.github.com${path}`;
}

async function fetchJson(url) {
   const response= await fetch(getUrl(url))
   if(!response.ok){
      throw new Error(response.status);
       
   }
   const data =  await response.json()
   return data
}

// TODO [À faire par l'étudiant] : Créer la fonction asynchrone fetchJSON(path)
// Objectif : 
// 1. Appeler fetch() avec getUrl(path)
// 2. Vérifier si response.ok est faux, si oui lancer une nouvelle erreur (throw new Error(response.status))
// 3. Retourner la réponse convertie en JSON (response.json())


/* ==================================================================
   ÉTAPE 2 — Affichage du profil
   ================================================================== */

// TODO [À faire par l'étudiant] : Créer la fonction renderProfile(user)
// Objectif : Mettre à jour les éléments HTML du profil avec les données reçues de l'API
// - Avatar (src et alt)
// - Nom et pseudo (@login)
// - Bio, localisation, date de création du compte (created_at) et lien GitHub
// - Statistiques (nombre de repos, abonnés, abonnements)


/* ==================================================================
   ÉTAPE 3 — Affichage des dépôts (Repositories)
   ================================================================== */

// TODO [À faire par l'étudiant] : Créer la fonction createRepoCard(repo)
// Objectif : Cloner le template HTML (#repo-template), remplir ses champs 
// (nom, lien, description, étoiles, forks, langage, date de mise à jour) et retourner la carte.


// TODO [À faire par l'étudiant] : Créer la fonction renderRepos(repos)
// Objectif : 
// 1. Vider la grille des dépôts (#repo-grid)
// 2. Parcourir le tableau des repos pour y ajouter les cartes générées
// 3. Mettre à jour le compteur de dépôts (#repo-count)
// 4. Gérer l'affichage du message "Aucun projet" (#repo-empty) si le tableau est vide.


/* ==================================================================
   ÉTAPE 4 — Gestion du chargement, des erreurs et du flux principal
   ================================================================== */

// TODO [À faire par l'étudiant] : Créer la fonction showSection(id)
// Objectif : Masquer tous les blocs d'état (#state-loading, #state-error, #content) 
// et afficher uniquement celui passé en paramètre.


// TODO [À faire par l'étudiant] : Créer la fonction getErrorMessage(error, username)
// Objectif : Retourner un message textuel compréhensible selon l'erreur (ex: 404 -> compte introuvable).


// TODO [À faire par l'étudiant] : Créer la fonction asynchrone loadPortfolio(username)
// Objectif : 
// 1. Mettre à jour currentUser et afficher l'écran de chargement.
// 2. Dans un bloc try...catch :
//    - Récupérer l'utilisateur et ses dépôts via fetchJSON
//    - Filtrer les repos pour ignorer les forks (!repo.fork)
//    - Appeler renderProfile et renderRepos, vider la recherche, puis afficher le contenu (#content).
//    - En cas d'erreur (catch), afficher le message d'erreur et l'état d'erreur.


// TODO [À faire par l'étudiant] : Ajouter un écouteur d'événements sur le bouton "Retry" (#retry-btn)
// pour relancer loadPortfolio(currentUser) au clic.


/* ==================================================================
   ÉTAPE 5 — Explorer un autre profil
   ================================================================== */

// TODO [À faire par l'étudiant] : Écouter la soumission du formulaire de recherche (#search-form)
// Objectif : Empêcher le rechargement de la page, récupérer la valeur de l'input (#search-input) 
// nettoyée avec .trim(), et appeler loadPortfolio(username) si elle n'est pas vide.


/* ==================================================================
   ÉTAPE 6 — Filtrer les dépôts en direct
   ================================================================== */

// TODO [À faire par l'étudiant] : Écouter l'événement 'input' sur la barre de recherche des repos (#repo-search)
// Objectif : Récupérer le texte saisi en minuscules, filtrer allRepos selon le nom du dépôt, 
// puis réafficher les résultats avec renderRepos.


/* ==================================================================
   Lancement de l'application
   ================================================================== */

// TODO [À faire par l'étudiant] : Appeler loadPortfolio(USERNAME) tout en bas 
// pour lancer l'application au chargement de la page.