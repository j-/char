import { Convert } from './types';
import { clampUnicode } from '../clamp-unicode';

const convert: Convert = {
  pattern: /^[0-8]+$/,
  to: str => clampUnicode(parseInt(str, 0o10)),
  from: chr => chr.toString(0o10),
};

export default convert;
