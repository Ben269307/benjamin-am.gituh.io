// Création du curseur personnalisé
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

// Fonction pour déplacer le curseur
document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

// Ajouter un effet d'agrandissement du curseur lors du survol des éléments interactifs
const links = document.querySelectorAll("a, button, .dropdown a");
links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
    });
    link.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });
});

// Traduction du site
const translations = {
    "fr": {
        "accueil": "Accueil",
        "recaps": "Les RéCaps",
        "mon_ae_alarme": "Mon AE Alarme",
        "roomba": "Roomba",
        "ne_clique_pas": "NE CLIQUE PAS ICI",
        "qui_suis_je": "Qui suis-je ?",
        "competences": "Mes Compétences",
        "email": "Email : À ajouter plus tard",
        "lang_toggle": "FR",
        "mode_toggle": "🌙"
    },
    "en": {
        "accueil": "Home",
        "recaps": "The Recaps",
        "mon_ae_alarme": "My AE Alarm",
        "roomba": "Roomba",
        "ne_clique_pas": "DO NOT CLICK HERE",
        "qui_suis_je": "Who am I?",
        "competences": "My Skills",
        "email": "Email: To be added later",
        "lang_toggle": "EN",
        "mode_toggle": "🌙"
    }
};

let currentLang = "fr";

// Fonction pour changer la langue
function changeLanguage(language) {
    currentLang = language;
    document.getElementById("lang-toggle").innerText = translations[language]["lang_toggle"];
    document.getElementById("mode-toggle").innerText = translations[language]["mode_toggle"];

    // Mise à jour des autres éléments du texte
    document.querySelector("h2").innerText = translations[language]["qui_suis_je"];
    document.querySelector(".skills h2").innerText = translations[language]["competences"];
    document.getElementById("email").innerText = translations[language]["email"];
    document.querySelector(".dropdown a").innerText = translations[language]["recaps"];
    document.querySelectorAll(".dropdown-menu a")[0].innerText = translations[language]["mon_ae_alarme"];
    document.querySelectorAll(".dropdown-menu a")[1].innerText = translations[language]["roomba"];
    document.querySelector("li a").innerText = translations[language]["accueil"];
    document.querySelector("li:nth-child(3) a").innerText = translations[language]["ne_clique_pas"];
}

// Changer la langue lorsqu'on clique sur le bouton de langue
document.getElementById("lang-toggle").addEventListener("click", function() {
    if (currentLang === "fr") {
        changeLanguage("en");
    } else {
        changeLanguage("fr");
    }
});

// Fonction pour le mode sombre/clair
document.getElementById("mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    let icon = document.getElementById("mode-toggle").innerText;
    if (icon === "🌙") {
        document.getElementById("mode-toggle").innerText = "🌞";
    } else {
        document.getElementById("mode-toggle").innerText = "🌙";
    }
});
