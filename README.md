# prova-giocattolo

Il repository di prova di **[Collaudo](https://collaudo.io)**: il collaudatore automatico e imparziale di un
lavoro software. _The test repository of Collaudo, an automatic and impartial acceptance tester for
software work._

- `src/somma.ts` ha un difetto: sottrae invece di sommare.
- `test/somma.test.ts` è la **prova** del contratto: oggi è rossa per la ragione giusta (un'asserzione che
  fallisce, non un'eccezione).
- `test/doppio.test.ts` non c'entra col contratto e deve restare verde.

Un produttore consegna la correzione su un ramo; Collaudo la prova **verde per la ragione giusta** (prova
verde, suite verde, prova intatta, niente trucchi, contro-mutazione superata) e firma un verdetto che
chiunque verifica offline.

Il workflow `.github/workflows/collaudo.yml` richiama il workflow fidato di Collaudo; il contratto l'ha
aperto il cliente spingendo `.collaudo/contratto.json` sul ramo principale (la beta gratuita).
