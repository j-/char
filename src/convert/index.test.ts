import { detectType } from "./";
import { Type } from "./types";

describe("detectType()", () => {
  it('handles "&nbsp;"', () => {
    expect(detectType("&nbsp;")).toBe(Type.HTML_ENTITY);
  });
  it('handles "U+0CA0"', () => {
    expect(detectType("U+0CA0")).toBe(Type.UNICODE);
  });
  // ...
});
