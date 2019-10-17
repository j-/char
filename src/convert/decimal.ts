import { Convert } from './types';
import { clampUnicode } from '../clamp-unicode';

const convert: Convert = {
  pattern: /^[0-9]+$/,
  to: str => clampUnicode(parseInt(str, 10)),
  from: chr => chr.toString(10),
};

export default convert;
