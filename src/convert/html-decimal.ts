import { Convert } from './types';
import { clampUnicode } from '../clamp-unicode';

const pattern = /^&#([0-9]+);$/;

const convert: Convert = {
  pattern,
  to: str => pattern.test(str) ? clampUnicode(parseInt(str.match(pattern)[1], 10)) : null,
  from: chr => `&#${chr};`,
};

export default convert;
