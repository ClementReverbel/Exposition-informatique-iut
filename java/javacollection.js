var header = document.getElementById("myHeader");
var prevScrollpos = window.pageYOffset;
var scrollSpeed = 50; 
var scrolling = false;

window.onscroll = function() {
    if (!scrolling) {
        scrolling = true;

        var currentScrollPos = window.pageYOffset;

        // Gestion de la position du header
        if (prevScrollpos > currentScrollPos || prevScrollpos - currentScrollPos > 10) {
            header.style.top = "0";
        } else {
            header.style.top = "-200px"; 
        }

        // Ralentissement du défilement
        var scrollAmount = (prevScrollpos - currentScrollPos) / scrollSpeed;
        document.documentElement.scrollTop -= scrollAmount;

        prevScrollpos = currentScrollPos;

        setTimeout(function() {
            scrolling = false;
        }, 20); // Attendez 100 millisecondes avant de réinitialiser scrolling à false
    }
}


var userInputField = document.getElementById("user-input");

userInputField.addEventListener("keydown", function(event) {
    // Vérifier si la touche pressée est "Entrée" (code 13)
    if (event.keyCode === 13) {
        event.preventDefault(); // Empêcher le saut de ligne
    }
});

userInputField.addEventListener("keyup", function(event) {
    // Vérifier si la touche pressée est "Entrée" (code 13) et si le champ de texte est en focus
    if (event.keyCode === 13 && document.activeElement === userInputField) {
        // Appeler la fonction sendQuestion() lorsque la touche "Entrée" est pressée et relâchée
        sendQuestion();
    }
});

function scrollToBottom() {
    var chatDisplay = document.getElementById("chat-display");
    chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

function sendQuestion() {
    var userInput = document.getElementById("user-input").value.toLowerCase(); // Convertir en minuscules pour la recherche
    var chatDisplay = document.getElementById("chat-display");

    // Ajouter la question de l'utilisateur au chat
    chatDisplay.innerHTML += "<p><strong>Vous :</strong> " + userInput + "</p>";

    // Redirection basée sur les mots-clés
    if (userInput.includes("contact") || userInput.includes("créateur") || userInput.includes("coordonnée")) {
        chatDisplay.innerHTML += "<p><strong>Chatbot :</strong> Pour nous contacter, cliquez <a href='contact.html'>ici</a>.</p>";
    } else if (userInput.includes("plan") || userInput.includes("détail") || userInput.includes("situe") || userInput.includes("carte") ) {4
        chatDisplay.innerHTML += "<p><strong>Chatbot :</strong> Pour accéder au point information, cliquez <a href='ptinfo.html'>ici</a>.</p>";
    } else if (userInput.includes("contenu") || userInput.includes("collection") || userInput.includes("composant")) {
        chatDisplay.innerHTML += "<p><strong>Chatbot :</strong> Pour accéder à la collection, cliquez <a href='collection.html'>ici</a>.</p>";
    } else if (userInput.includes("programme") || userInput.includes("planning") || userInput.includes("horaire")) {
        chatDisplay.innerHTML += "<p><strong>Chatbot :</strong> Pour accéder au programme, cliquez <a href='programme.html'>ici</a>.</p>";
    } else if (userInput.includes("expo") || userInput.includes("intro") || userInput.includes("description") || userInput.includes("présentation") || userInput.includes("accueil")) {
        chatDisplay.innerHTML += "<p><strong>Chatbot :</strong> Pour accéder l'exposition, cliquez <a href='index.html'>ici</a>.</p>";
    } else {
        chatDisplay.innerHTML += "<p><strong>Chatbot :</strong> Désolé, je ne comprends pas.</p>";
    }

    // Effacer le champ de saisie après l'envoi de la question
    document.getElementById("user-input").value = "";
    scrollToBottom();
}

const contenucollection = [
    "Les bandes magnétiques ont été l'un des premiers supports de stockage de masse pour les données informatiques. Utilisées depuis les années 1950, elles offraient une grande capacité de stockage pour l'époque, bien que leur accès séquentiel rende la récupération de données plus lente comparée aux technologies modernes. Elles sont encore utilisées aujourd'hui pour l'archivage de données en raison de leur durabilité et de leur capacité de stockage élevée.",
    "Introduite entre 1971 et 1979, la disquette de 8 pouces représentait une avancée significative pour le stockage de données à l'époque. Avec une capacité de 100 Ko, elle était principalement utilisée dans les premiers ordinateurs personnels et systèmes informatiques professionnels. Bien que son utilisation ait rapidement décliné avec l'apparition de formats plus petits et plus pratiques, elle reste un symbole important des débuts de l'informatique.",
    "La disquette de 3,5 pouces, avec une capacité de stockage de 1,44 Mo, a été un support de stockage révolutionnaire dans les années 1980 et 1990. Facilement transportable et relativement robuste, elle a été largement utilisée pour stocker et transférer des fichiers informatiques avant l'avènement des CD, DVD, et des clés USB.",
    "Apparue en 1995, la cassette VHS, bien que principalement utilisée pour l'enregistrement et la lecture de vidéos, pouvait également stocker des données informatiques, avec une capacité d'environ 60 Mo. Ce support magnétique a été populaire pour les vidéos domestiques avant l'ère numérique, grâce à sa facilité d'utilisation et sa capacité de réenregistrement.",
    "Le lecteur DVD HP modèle TSL-L632, sorti en 2008, est un exemple typique des lecteurs optiques utilisés pour lire et écrire des données sur des disques DVD. Les lecteurs DVD ont succédé aux lecteurs de CD, offrant une capacité de stockage beaucoup plus grande, jusqu'à 4,7 Go par disque simple couche. Ils ont été couramment utilisés pour les logiciels, les films, et les sauvegardes de données avant l'essor du stockage sur disque dur externe et le cloud.",
    "Le processeur Intel 486, lancé en 1989, est un élément clé de l'évolution des ordinateurs personnels, offrant des performances améliorées grâce à une conception plus avancée et un cache intégré pour accélérer le traitement des données. Ce processeur, disponible en plusieurs versions comme le 486SX (sans coprocesseur mathématique) et le 486DX (avec coprocesseur mathématique), utilisait un boîtier fakir caractérisé par de nombreuses petites broches permettant de le connecter à la carte mère. Cette innovation a permis aux ordinateurs de devenir plus rapides et capables de gérer des programmes plus complexes, contribuant ainsi à la popularisation des ordinateurs personnels et à l'avènement des technologies informatiques modernes.",
    "Le processeur Motorola 6809, lancé à la fin des années 1970, est un jalon important dans l'évolution des microprocesseurs, offrant des fonctionnalités avancées grâce à une conception innovante et une architecture flexible. Ce processeur, célèbre pour son jeu d'instructions orthogonal et ses capacités d'adressage indexé, était considéré comme l'un des microprocesseurs 8 bits les plus avancés de son époque. Disponible en plusieurs versions, dont le 6809E (avec horloge externe) et le 6809L (version à faible consommation), il se distinguait par ses deux accumulateurs 8 bits combinables et sa capacité à traiter efficacement des données complexes. Utilisant un boîtier à broches classiques, le 6809 permettait une intégration facile dans diverses applications, des ordinateurs personnels comme le Tandy TRS-80 Color Computer aux systèmes embarqués industriels. Cette innovation a permis aux systèmes de devenir plus polyvalents et performants, favorisant ainsi l'émergence des technologies informatiques modernes et l'évolution rapide de l'informatique personnelle et industrielle.",
    "Le processeur Intel Pentium II, lancé en 1997, est une avancée majeure dans l'évolution des ordinateurs personnels, offrant des performances accrues et une meilleure gestion thermique grâce à son format SECC (Single Edge Contact Cartridge). Ce format unique intégrait le processeur et le cache L2 sur une seule carte, avec un ventilateur directement monté pour améliorer la dissipation de chaleur. Disponible en plusieurs versions, dont le Pentium II Xeon pour les serveurs, il utilisait l'architecture P6, offrant des capacités multitâches avancées et une exécution plus rapide des applications 32 bits. Cette innovation a permis aux PC de devenir plus puissants et polyvalents, contribuant à l'essor des technologies informatiques modernes.0",
    "Dans les années 1970 et 1980, les premiers disques durs offraient des capacités de stockage qui semblent incroyablement faibles par rapport aux normes actuelles. Un disque dur typique de cette époque pouvait stocker environ 10 Mo de données. Ces disques étaient volumineux, lourds et coûteux, mais ils représentaient une avancée majeure en matière de stockage rapide et fiable par rapport aux bandes magnétiques.",
    "Au début des années 1990, les capacités des disques durs avaient considérablement augmenté. Un disque dur de 512 Mo était alors considéré comme spacieux et était couramment utilisé dans les ordinateurs personnels. Cette augmentation de capacité a permis aux utilisateurs de stocker plus de logiciels, de fichiers multimédias et de documents, contribuant ainsi à l'essor des applications multimédias et à l'adoption généralisée des PC.",
    "Les disques SSD (Solid State Drive) amovibles de 256 Go sont des exemples de la technologie de stockage moderne. Les SSD offrent des vitesses de lecture et d'écriture bien supérieures à celles des disques durs traditionnels grâce à l'absence de pièces mobiles. Introduits au grand public dans les années 2000, les SSD ont révolutionné le stockage de données avec leur rapidité, leur fiabilité et leur compacité. Un disque SSD amovible de 256 Go permet de stocker une quantité massive de données, incluant des logiciels, des jeux, des vidéos haute définition et de grandes bibliothèques de photos et de documents, tout en étant facilement transportable.",
    "La carte électronique illustrée est équipée de 36 puces de RAM de type DRAM (Dynamic Random Access Memory), disposées en rangées. Ces puces de DRAM, typiques des années 1980 et 1990, sont de type DIP (Dual Inline Package) et jouent un rôle crucial dans le stockage temporaire des données. La DRAM, avec sa nécessité de rafraîchissement périodique, offre un accès rapide aux données, permettant aux systèmes de cette époque de gérer des applications complexes. Chaque puce contribue à augmenter la capacité totale de la mémoire, facilitant une meilleure performance et une gestion efficace des tâches par le système. Cette configuration de multiples puces DRAM démontre l'importance de la mémoire vive dans les anciens systèmes informatiques pour améliorer la rapidité et la capacité de traitement des données.",
    "La RAM DDR1, ou DDR (Double Data Rate) SDRAM de première génération, avec une capacité de 128 Mo, est un type de mémoire vive utilisé dans les ordinateurs à partir des années 2000. Elle permettait des transferts de données plus rapides que les précédentes mémoires SDRAM en effectuant des transferts à la montée et à la descente de chaque cycle d'horloge. La DDR1 a significativement amélioré les performances des systèmes informatiques, rendant les applications et les systèmes d'exploitation plus réactifs et capables de gérer des tâches plus complexes, ouvrant la voie aux générations suivantes de mémoire DDR avec des capacités et des vitesses encore accrues.",
    "La DDR2, ou DDR (Double Data Rate) SDRAM de deuxième génération, est une mémoire vive qui succède à la DDR1, apportant des améliorations en termes de vitesse et d'efficacité énergétique. Une barrette de DDR2 avec une capacité de 256 Mo (légèrement plus que 250 Mo) permet des transferts de données encore plus rapides grâce à des fréquences d'horloge plus élevées et une meilleure gestion de l'énergie. Utilisée dans les ordinateurs à partir du milieu des années 2000, la DDR2 a permis des performances accrues, rendant les systèmes informatiques plus efficaces et capables de gérer des applications plus gourmandes en ressources, tout en posant les bases pour les générations de mémoire suivantes."
];

const titrecollection = [
    "Bande magnétique",
    "Disquette 8 pouces - 100 Ko",
    "Disquette 3,5 pouces - 1.44 Mo",
    "Cassette VHS - 60 Mo",
    "Lecteur DVD - HP TSL-L632 (2008)",
    "Processeur Intel 486 - Boîtier Fakir",
    "Processeur Motorola 6809",
    "Processeur Intel Pentium II",
    "Disque dur - Environ 10 Mo",
    "Disque dur - Environ 512 Mo",
    "Disque SSD Amovible - 256 Go",
    "La DRAM",
    "La RAM DDR1",
    "La RAM DDR2"
];

const audiocollection = [
    "audio/Bandemagnetique.mp3",
    "audio/Disquette8.mp3",
    "audio/Disquette35.mp3",
    "audio/CassetteVHS.mp3",
    "audio/LecteurDVD.mp3",
    "audio/fakir.mp3",
    "audio/motorola.mp3",
    "audio/pentium.mp3",
    "audio/Disquedur10.mp3",
    "audio/Disquedur512.mp3",
    "audio/DisqueSSD.mp3",
    "audio/DRAM.mp3",
    "audio/DDR1.mp3",
    "audio/DDR2.mp3"
];


const imagecollection = [
    "photo/bandemagnetique.jpg",
    "photo/Disquette8.jpg",
    "photo/Disquette35.jpg",
    "photo/cassetteVHS.jpg",
    "photo/LecteurDVD.jpg",
    "photo/fakir.jpg",
    "photo/motorola.jpg",
    "photo/pentium.jpg",
    "photo/Stockage10.jpg",
    "photo/Stockage512.jpg",
    "photo/StockageSSD.jpg",
    "photo/DRAM.jpg",
    "photo/DDR1.jpg",
    "photo/DDR2.jpg"
]

let indexCollection = 0;
const textElementCollection = document.getElementById('contenucollection');
const titleElementCollection = document.getElementById('titrecollection');
const imageElementCollection = document.getElementById('imagecollection');
const audioElementCollection = document.getElementById('audiocollection'); 
const flecheGauchecollection = document.getElementById('flecheGauchecollection');
const flecheDroitecollection = document.getElementById('flecheDroitecollection');

function afficherContenuCollection(direction) {
    if (direction === 'gauche') {
        indexCollection = (indexCollection === 0) ? contenucollection.length - 1 : indexCollection - 1;
    } else {
        indexCollection = (indexCollection === contenucollection.length - 1) ? 0 : indexCollection + 1;
    }
    textElementCollection.innerHTML = `<p>${contenucollection[indexCollection]}</p>`;
    titleElementCollection.innerHTML = `<h3>${titrecollection[indexCollection]}</h3>`;
    audioElementCollection.src = audiocollection[indexCollection];
    audioElementCollection.load();
    imageElementCollection.src = imagecollection[indexCollection];
    textElementCollection.classList.remove('contenu-gauche', 'contenu-droite');
    void textElementCollection.offsetWidth; // Réinitialiser le rendu
    textElementCollection.classList.add(direction === 'gauche' ? 'contenu-gauche' : 'contenu-droite');
}

flecheGauchecollection.addEventListener('click', () => {
    event.preventDefault();
    afficherContenuCollection('gauche');
});

flecheDroitecollection.addEventListener('click', () => {
    event.preventDefault();
    afficherContenuCollection('droite');
});
window.addEventListener('scroll', function() {
    var body = document.body;
    if (window.scrollY > window.innerHeight / 2) { // Déclencher l'effet de transition lorsque la moitié de la page est défilée
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
});