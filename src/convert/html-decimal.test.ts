import htmlDecimal from "./html-decimal";

describe("from()", () => {
  it('handles "&#100;"', () => {
    expect(htmlDecimal.to("&#100;")).toBe(100);
  });
});
