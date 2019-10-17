import { Convert } from './types';
import { clampUnicode } from '../clamp-unicode';

const convert: Convert = {
  pattern: /^[0-9a-fA-F]+$/,
  to: str => clampUnicode(parseInt(str, 0x10)),
  from: chr => chr.toString(0x10),
};

export default convert;
