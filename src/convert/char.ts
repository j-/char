import { Convert } from './types';

const convert: Convert = {
  // eslint-disable-next-line no-control-regex
  pattern: /^.$/,
  to: str => str.length > 0 ? str.charCodeAt(0) : null,
  from: chr => String.fromCharCode(chr),
};

export default convert;
