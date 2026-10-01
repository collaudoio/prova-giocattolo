import { expect, it } from "vitest";

import { somma } from "../src/somma.ts";

// La seconda fuga degli oracoli: una prova a snapshot SENZA il suo `.snap`. Rossa sul base solo perché
// l'atteso manca: se si sigillasse, il produttore consegnerebbe lui l'atteso. Collaudo non la sigilla.
it("la somma di 2 e 2, in uno snapshot", () => {
  expect(somma(2, 2)).toMatchSnapshot();
});
