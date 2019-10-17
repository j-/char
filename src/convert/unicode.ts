import { Convert } from './types';
import padStart from 'lodash/padStart';

const pattern = /^U\+([0-9A-Fa-f]{4,})$/;

const convert: Convert = {
  pattern,
  to: str => pattern.test(str) ? parseInt(str.match(pattern)[1], 0x10) : null,
  from: chr => `U+${padStart(chr.toString(0x10).toUpperCase(), 4, '0')}`,
};

export default convert;
