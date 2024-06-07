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
    "Introduite entre 1971 et 1979, la disquette de 8 pouces représentait une avancée significative pour le stockage de données à l'époque. Avec une capacité de 100 Ko, elle était principalement utilisée dans les premiers ordinateurs personnels et systèmes informatiques professionnels. Bien que son utilisation ait rapidement décliné avec l'apparition de formats plus petits et plus pratiques, elle reste un symbole important des débuts de l'informatique.",
    "La disquette de 3,5 pouces, avec une capacité de stockage de 1,44 Mo, a été un support de stockage révolutionnaire dans les années 1980 et 1990. Facilement transportable et relativement robuste, elle a été largement utilisée pour stocker et transférer des fichiers informatiques avant l'avènement des CD, DVD, et des clés USB.",
    "Apparue en 1995, la cassette VHS, bien que principalement utilisée pour l'enregistrement et la lecture de vidéos, pouvait également stocker des données informatiques, avec une capacité d'environ 60 Mo. Ce support magnétique a été populaire pour les vidéos domestiques avant l'ère numérique, grâce à sa facilité d'utilisation et sa capacité de réenregistrement.",
    "Les bandes magnétiques ont été l'un des premiers supports de stockage de masse pour les données informatiques. Utilisées depuis les années 1950, elles offraient une grande capacité de stockage pour l'époque, bien que leur accès séquentiel rende la récupération de données plus lente comparée aux technologies modernes. Elles sont encore utilisées aujourd'hui pour l'archivage de données en raison de leur durabilité et de leur capacité de stockage élevée.",
    "Le lecteur DVD HP modèle TSL-L632, sorti en 2008, est un exemple typique des lecteurs optiques utilisés pour lire et écrire des données sur des disques DVD. Les lecteurs DVD ont succédé aux lecteurs de CD, offrant une capacité de stockage beaucoup plus grande, jusqu'à 4,7 Go par disque simple couche. Ils ont été couramment utilisés pour les logiciels, les films, et les sauvegardes de données avant l'essor du stockage sur disque dur externe et le cloud.",
    "Dans les années 1970 et 1980, les premiers disques durs offraient des capacités de stockage qui semblent incroyablement faibles par rapport aux normes actuelles. Un disque dur typique de cette époque pouvait stocker environ 10 Mo de données. Ces disques étaient volumineux, lourds et coûteux, mais ils représentaient une avancée majeure en matière de stockage rapide et fiable par rapport aux bandes magnétiques.",
    "Au début des années 1990, les capacités des disques durs avaient considérablement augmenté. Un disque dur de 512 Mo était alors considéré comme spacieux et était couramment utilisé dans les ordinateurs personnels. Cette augmentation de capacité a permis aux utilisateurs de stocker plus de logiciels, de fichiers multimédias et de documents, contribuant ainsi à l'essor des applications multimédias et à l'adoption généralisée des PC.",
    "Les disques SSD (Solid State Drive) amovibles de 256 Go sont des exemples de la technologie de stockage moderne. Les SSD offrent des vitesses de lecture et d'écriture bien supérieures à celles des disques durs traditionnels grâce à l'absence de pièces mobiles. Introduits au grand public dans les années 2000, les SSD ont révolutionné le stockage de données avec leur rapidité, leur fiabilité et leur compacité. Un disque SSD amovible de 256 Go permet de stocker une quantité massive de données, incluant des logiciels, des jeux, des vidéos haute définition et de grandes bibliothèques de photos et de documents, tout en étant facilement transportable."
];

const titrecollection = [
    "Disquette 8 pouces - 100 Ko",
    "Disquette 3,5 pouces - 1.44 Mo",
    "Cassette VHS - 60 Mo",
    "Bande magnétique",
    "Lecteur DVD - HP TSL-L632 (2008)",
    "Disque dur - Environ 10 Mo",
    "Disque dur - Environ 512 Mo",
    "Disque SSD Amovible - 256 Go",
];

const imagecollection = [
    "photo/Disquette8.jpg",
    "photo/Disquette35.jpg",
    "photo/cassetteVHS.jpg",
    "photo/bandemagnetique.jpg",
    "photo/LecteurDVD.jpg",
    "photo/Stockage10.jpg",
    "photo/Stockage512.jpg",
    "photo/StockageSSD.jpg"
]

let indexCollection = 0;
const textElementCollection = document.getElementById('contenucollection');
const titleElementCollection = document.getElementById('titrecollection');
const imageElementCollection = document.getElementById('imagecollection')
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