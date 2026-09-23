import { describe, expect, it } from "vitest";

import { somma } from "../src/somma.ts";

// LA PROVA del contratto: oggi è rossa per la ragione giusta (un'asserzione, non un'eccezione).
describe("somma", () => {
  it("somma due numeri", () => {
    expect(somma(2, 3)).toBe(5);
  });

  it("somma con lo zero", () => {
    expect(somma(7, 0)).toBe(7);
  });
});
