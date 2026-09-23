import { expect, it } from "vitest";

import { doppio } from "../src/doppio.ts";

it("il doppio di 21 è 42", () => {
  expect(doppio(21)).toBe(42);
});
