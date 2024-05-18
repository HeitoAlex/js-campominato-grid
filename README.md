# js-campominato-grid

Consegna:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

creo una variabile con cui richiamo il bottone 
realizzo un event listener che al click sul bottone crei una variabile che richiami la section
all'interno della section creo un ciclo for che generi 100 quadrati uguali 
assegno una classe ai quadrati
appendo a questi quadrati l'index del ciclo for per far apparire il numero al rispettivo quadrato
creo un altro event listener che al click sul quadrato aggiunga una nuova classe al quadrato così da capire che è stato cliccato
appendo infine tutti i quadrati alla section