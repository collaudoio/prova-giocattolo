import { expect, it } from "vitest";

import { media } from "../src/media.ts";

// La prova del contratto di O-176 (la prova intera dei tre job): oggi rossa per un'asserzione.
it("la media di 2 e 4 è 3, quella di 1 e 2 è 1,5", () => {
  expect(media(2, 4)).toBe(3);
  expect(media(1, 2)).toBe(1.5);
});
