import { Convert } from './types';

const pattern = /^\\([0-9A-Fa-f]{,6})$/;

const convert: Convert = {
  pattern,
  to: str => pattern.test(str) ? parseInt(str.match(pattern)[1], 0x10) : null,
  from: chr => `\\${chr.toString(0x10).toLowerCase()}`,
};

export default convert;
