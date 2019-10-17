// TODO: Give this a better name (doesn't actually clamp)
export const clampUnicode = (codePoint: number) => (
  isNaN(codePoint) ||
  codePoint < 0 ||
  codePoint > 0x10ffff ?
    null :
    codePoint
);
