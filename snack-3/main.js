// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

const auto = [
    {
     marca: "Audi",
     modello: "Modello 1",
     alimentazione: "diesel"   
    },
    {
     marca: "Ferrari",
     modello: "Modello 4",
     alimentazione: "GPL"   
    },
    {
     marca: "Fiat",
     modello: "panda",
     alimentazione: "Benzina"   
    },
    {
     marca: "Fiat",
     modello: "500",
     alimentazione: "elettrico"   
    },
    {
    marca: "lancia",
    modello: "scudo",
    alimentazione: "metano"   
    },
    {
    marca: "Audi",
    modello: "Modello 1",
    alimentazione: "diesel"   
    },
    {
    marca: "Ferrari",
    modello: "Modello 4",
    alimentazione: "GPL"   
    },
    {
    marca: "Fiat",
    modello: "panda",
    alimentazione: "Benzina"   
    },
    {
    marca: "Fiat",
    modello: "500",
    alimentazione: "elettrico"   
    },
    {
    marca: "lancia",
    modello: "scudo",
    alimentazione: "metano"   
    },
];

// creo i miei array vuoti dove mettere le auto in base al tipo di alimentazione

const autoBenzina = [];

const autoDiesel = [];

const otherAuto = [];