// Definicja klasy Ksiazka
class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }

    opiszKsiazke() {
        const status = this.przeczytana ? "została przeczytana" : "nie została przeczytana";
        return `Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i ${status}.`;
    }
}

// Tworzenie instancji obiektów klasy Ksiazka
const ksiazka1 = new Ksiazka("Wiedźmin", "Andrzej Sapkowski", true);
const ksiazka2 = new Ksiazka("Lalka", "Bolesław Prus", false);
const ksiazka3 = new Ksiazka("Pan Tadeusz", "Adam Mickiewicz", false);

// Tworzenie globalnej tablicy i dodanie do niej książek
const biblioteka = [ksiazka1, ksiazka2, ksiazka3];

// Definicja funkcji iloscPrzeczytanych
function iloscPrzeczytanych(ksiazki) {
    let licznik = 0;

    ksiazki.forEach(ksiazka => {
        if (ksiazka.przeczytana) {
            console.log(ksiazka.opiszKsiazke());
            licznik++;
        }
    });

    return licznik;
}

// Wywołanie funkcji i wyświetlenie liczby przeczytanych książek w konsoli
const przeczytaneKsiazki = iloscPrzeczytanych(biblioteka);
console.log(`Ilość przeczytanych książek: ${przeczytaneKsiazki}`);
