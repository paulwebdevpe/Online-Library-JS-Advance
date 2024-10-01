# Online Library app

## Descrizione

Questa applicazione permette di cercare libri in base a una categoria specifica utilizzando l'API di Open Library. Quando l'utente inserisce una categoria, viene effettuata una richiesta per recuperare i libri relativi alla categoria e mostrarli sul sito. Ogni libro ha anche la possibilità di visualizzare una descrizione del libro aggiuntiva tramite un pulsante "Get Info".

## Funzionalità

- Effettua una chiamata API a Open Library in base a una categoria inserito dall'utente.
- Mostra i libri trovati in base alla categoria specificata.
- Fornisce la possibilità di visualizzare la descrizione di ogni libro tramite un pulsante "Get Info".

## Screenshot

![Online Library image]()

## Installazione

1. Clona il repository o scarica i file.
2. Apri il file index.html nel tuo browser.
3. Digita un argomento nel campo di input e premi "Search" per visualizzare i risultati.

## Prerequisiti

Un browser web moderno (come Chrome, Firefox, Edge o Safari).

## Utilizzo

1. L'utente inserisce una categoria di ricerca nel campo di input.
2. Alla pressione del pulsante "Search", l'app effettua una richiesta API per recuperare i libri associati a quell'argomento.
3. I risultati mostrano il titolo del libro, gli autori, e un'immagine della copertina.
4. L'utente può fare clic sul pulsante "Get Info" per visualizzare una descrizione del libro, se disponibile.

## Tecnologie Utilizzate

- HTML: Struttura della pagina web.
- JavaScript: Gestione delle richieste API, manipolazione del DOM.
- Fetch API: Per effettuare le chiamate HTTP all'API di Open Library.
