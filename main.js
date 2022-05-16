// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

const zucchine = [
    {
        tipo : "zucchina 1",
        peso : 50,
        lunghezza : 20,
    },
    {
        tipo : "zucchina 2",
        peso : 50,
        lunghezza : 20,
    },
    {
        tipo : "zucchina 3",
        peso : 50,
        lunghezza : 20,
    },
    {
        tipo : "zucchina 4",
        peso : 50,
        lunghezza : 20,
    },
    {
        tipo : "zucchina 5",
        peso : 50,
        lunghezza : 20,
    },
    {
        tipo : "zucchina 6",
        peso : 50,
        lunghezza : 20,
    },
    {
        tipo : "zucchina 7",
        peso : 50,
        lunghezza : 20,
    },
    {
        tipo : "zucchina 8",
        peso : 50,
        lunghezza : 20,
    },
    {
        tipo : "zucchina 9",
        peso : 50,
        lunghezza : 20,
    },
    {
        tipo : "zucchina 10",
        peso : 50,
        lunghezza : 20,
    }
];

let pesoZucchine = 0;

for (let i = 0; i < zucchine.length; i++){
    pesoZucchine += zucchine[i].peso;
    console.log(pesoZucchine);
};
