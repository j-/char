import htmlEntity from "./html-entity";

describe("from()", () => {
  it('handles "&nbsp;"', () => {
    expect(htmlEntity.to("&nbsp;")).toBe(0xa0);
  });
});
