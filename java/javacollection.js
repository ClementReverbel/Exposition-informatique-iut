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
    "Date : 1950 - Quelques méga octets pour les premières bandes magnétiques, plusieurs térraoctets pour les plus récentes.",
    "Date : Année 1970 - Une centaine de kilo-octets.",
    "Date : 1982 - 1,44 mégaoctets.",
    "Date : 1995 - 60 mégaoctets environ.",
    "Date : 2008 - De 4 gigaoctets à 8 gigaoctets.",
    "Date : 1970 - De 1 à 4 MHz.",
    "Date : 1989 - Environ 5 MHz.",
    "Date : 1997 - 450 Mhz",
    "Date : entre 1970 et 1980 - 10 mégaoctets.",
    "Date : 1990 - 512 mégaoctets.",
    "Date : 2000 - 256 gigaoctets.",
    "Date : de 1980 à 1990",
    "Date : Début des années 2000",
    "Date : Milieu des années 2000"
];

const titrecollection = [
    "Bande magnétique",
    "Disquette 8 pouces - 100 Ko",
    "Disquette 3,5 pouces - 1.44 Mo",
    "Cassette VHS - 60 Mo",
    "Lecteur DVD - HP TSL-L632 (2008)",
    "Processeur Motorola 6809",
    "Processeur Intel 486 - Boîtier Fakir",
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
    "audio/motorola.mp3",
    "audio/fakir.mp3",
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