import { expect, it } from "vitest";

import { doppio } from "../src/doppio.ts";

// Lo stesso doppio, provato con uno snapshot su FILE: l'atteso sta in `__snapshots__/`, e Collaudo lo sigilla.
it("il doppio di 21, in uno snapshot", () => {
  expect(doppio(21)).toMatchSnapshot();
});
