import "./App.css";

import EventList from "./components/EventList";

function App() {
    const events = [
        {
            id: 4,
            title: "La HAS sera pr\u00e9sente \u00e0 la journ\u00e9e annuelle de l\u2019exp\u00e9rience patient - mardi 18 juin 2024",
            date: "Le 18/06/2024",
            url: "https://www.has-sante.fr/jcms/p_3517451/fr/la-has-sera-presente-a-la-journee-annuelle-de-l-experience-patient-mardi-18-juin-2024",
            source: null,
        },
        {
            id: 5,
            title: "La HAS \u00e0 la journ\u00e9e annuelle de l'ANRQ-PSY - 14 juin 2024",
            date: "Le 14/06/2024",
            url: "https://www.has-sante.fr/jcms/p_3522113/fr/la-has-a-la-journee-annuelle-de-l-anrq-psy-14-juin-2024",
            source: null,
        },
        {
            id: 6,
            title: "Enqu\u00eate sur votre connaissance de \u00ab PACTE Soins Primaires \u00bb (PACTE SP)",
            date: "Du 13/06/2024\r\n\t\t\t\t\t\t\t\t\t\t\t             au 31/07/2024",
            url: "https://www.has-sante.fr/jcms/p_3522096/fr/enquete-sur-votre-connaissance-de-pacte-soins-primaires-pacte-sp",
            source: null,
        },
        {
            id: 11,
            title: "Webinaire\u202fHAS \u2013 Diab\u00e8te de type 2 de l\u2019adulte : quelles strat\u00e9gies th\u00e9rapeutiques\u202f ?",
            date: "Le 27/06/2024",
            url: "https://www.has-sante.fr/jcms/p_3520038/fr/webinairehas-diabete-de-type-2-de-l-adulte-quelles-strategies-therapeutiques",
            source: null,
        },
        {
            id: 12,
            title: "Sant\u00e9 mentale au travail : l'impact (in)visible",
            date: null,
            url: "https://www.firah.org/article/922/sante-mentale-au-travail-l-impact-in-visible.html",
            source: "FIRAH",
        },
        {
            id: 13,
            title: "R\u00e9sultats de l'enqu\u00eate Sport et Handicap",
            date: null,
            url: "https://www.firah.org/article/921/resultats-de-l-enquete-sport-et-handicap.html",
            source: "FIRAH",
        },
        {
            id: 14,
            title: "Colloque national DYS 2024",
            date: null,
            url: "https://www.firah.org/article/920/colloque-national-dys-2024.html",
            source: "FIRAH",
        },
        {
            id: 15,
            title: "Bulletin d'information Mars 2024",
            date: null,
            url: "https://www.firah.org/article/919/bulletin-d-information-mars-2024.html",
            source: "FIRAH",
        },
        {
            id: 16,
            title: "Recherche et handicap : des cl\u00e9s pour agir",
            date: null,
            url: "https://www.firah.org/article/918/recherche-et-handicap-des-cles-pour-agir.html",
            source: "FIRAH",
        },
        {
            id: 25,
            title: "Exp\u00e9rimenter au service de la participation des personnes : R\u00e9alisations, enseignements et perspectives",
            date: "1er\n                \n                octobre",
            url: "https://www.cnsa.fr/agenda/experimenter-au-service-de-la-participation-des-personnes-realisations-enseignements-et",
            source: "CNSA",
        },
        {
            id: 26,
            title: "Qualit\u00e9 de l\u2019accompagnement en EHPAD : quelle relation au prix ?",
            date: "8\n                \n                octobre",
            url: "https://www.cnsa.fr/agenda/qualite-de-laccompagnement-en-ehpad-quelle-relation-au-prix",
            source: "CNSA",
        },
        {
            id: 27,
            title: "Contraintes et marges de man\u0153uvre dans la mise en \u0153uvre de l\u2019allocation personnalis\u00e9e d\u2019autonomie (APA) : quelles disparit\u00e9s entre les d\u00e9partements ?",
            date: "12\n                \n                novembre",
            url: "https://www.cnsa.fr/agenda/contraintes-et-marges-de-manoeuvre-dans-la-mise-en-oeuvre-de-lallocation-personnalisee",
            source: "CNSA",
        },
    ];

    return (
        <>
            <div>
                <h1>Bienvenue !</h1>
                <EventList events={events}></EventList>
            </div>
        </>
    );
}

export default App;
