import { Convert } from './types';
import padStart from 'lodash/padStart';

const pattern = /^\\x([0-9A-Fa-f]{2})$/;

const convert: Convert = {
  pattern,
  to: str => pattern.test(str) ? parseInt(str.match(pattern)[1], 0x10) : null,
  from: chr => chr >= 0x100 ? null : `\\x${padStart(chr.toString(0x10).toLowerCase(), 2, '0')}`,
};

export default convert;
