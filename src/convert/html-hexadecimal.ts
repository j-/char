import { Convert } from './types';
import padStart from 'lodash/padStart';
import { clampUnicode } from '../clamp-unicode';

const pattern = /^&#x([0-9A-Fa-f]+);$/;

const convert: Convert = {
  pattern,
  to: str => pattern.test(str) ? clampUnicode(parseInt(str.match(pattern)[1], 0x10)) : null,
  from: chr => `&#x${padStart(chr.toString(0x10).toLowerCase(), 4, '0')};`,
};

export default convert;
