import { Convert } from './types';
import { clampUnicode } from '../clamp-unicode';

const convert: Convert = {
  pattern: /^[01]+$/,
  to: str => clampUnicode(parseInt(str, 0b10)),
  from: chr => chr.toString(0b10),
};

export default convert;
