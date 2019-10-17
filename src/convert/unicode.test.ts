import unicode from "./unicode";

describe("from()", () => {
  it('handles "U+0CA0"', () => {
    expect(unicode.to("U+0CA0")).toBe(0xca0);
  });
});
