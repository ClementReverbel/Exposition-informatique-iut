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

const contenuptinfo = [
    "Cette exposition est issue d'un travail étudiant. Ce travail avait pour thème d'organiser une exposition virtuelle sur l'histoire de l'informatique. De notre côté, nous avons décider de choisir les composants informatiques. Ses derniers étant des objets physiques et non pas des concepts, cela est plus facile pour le lecteur/visiteur de se répérer et de visualiser la chose. Vu qu'une grande partie de l'informatique est constituée de concept peu parlant, il fallait faire quelque chose de simpe qui parlait à tous.",
    "Ce travail a été fait au sein de l'IUT Informatique de Paul Sabatier. Nos professeurs (Madame NOTTIN et Madame RASPAUD) nous ont guidés tout le long pour sortir le travail qui correspondait le plus à leur attente. Nous étions 4 étudiants : REYNIER Zyad, MASSAT Diego, LEMEUNIER Lou-Ann, REVERBEL Clément. Nous avons également demandé un peu d'aide à une association à Toulouse : La Rebooterie. Elle nous a permit de récupérer quelques pièces détachées pour notre exposition.",
    "Ce projet était assez difficile à réaliser. C'était une première exposition virtuelle pour nous et nous voulions faire quelque chose d'assez immersif. Evidemment tout ce travail est amateur et loin d'être parfait. Nous avons fait de notre mieux avec les informations que nous avons trouvés et avec le matériel que nous avions. Certaines de nos attentes, on était revu à la baisse mais nous sommes tout de même satisfait du travail que nous avons rendu."
];

const titreptinfo = [
    "Description du projet",
    "Créateur du projet",
    "Difficultés rencontrées",
];

let index = 0;
const textElement = document.getElementById('contenuptinfo');
const titleElement = document.getElementById('titreptinfo');
const flecheGaucheptinfo = document.getElementById('flecheGaucheptinfo');
const flecheDroiteptinfo = document.getElementById('flecheDroiteptinfo');

function afficherContenuptinfo(direction) {
    if (direction === 'gauche') {
        index = (index === 0) ? contenuptinfo.length - 1 : index - 1;
    } else {
        index = (index === contenuptinfo.length - 1) ? 0 : index + 1;
    }
    textElement.innerHTML = `<p>${contenuptinfo[index]}</p>`;
    titleElement.innerHTML = `<h3>${titreptinfo[index]}</h3>`;
    textElement.classList.remove('contenu-gauche', 'contenu-droite');
    void textElement.offsetWidth; // Réinitialiser le rendu
    textElement.classList.add(direction === 'gauche' ? 'contenu-gauche' : 'contenu-droite');
}

flecheGaucheptinfo.addEventListener('click', () => {
    event.preventDefault();
    afficherContenuptinfo('gauche');
});

flecheDroiteptinfo.addEventListener('click', () => {
    event.preventDefault();
    afficherContenuptinfo('droite');
});

window.addEventListener('scroll', function() {
    var body = document.body;
    if (window.scrollY > window.innerHeight / 2) { // Déclencher l'effet de transition lorsque la moitié de la page est défilée
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
});