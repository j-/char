import { Type, ConvertTo, ConvertFrom, DetectType } from './types';

import binary from './binary';
import char from './char';
import css from './css';
import decimal from './decimal';
import hexadecimal from './hexadecimal';
import htmlDecimal from './html-decimal';
import htmlEntity from './html-entity';
import htmlHexadecimal from './html-hexadecimal';
import jsLong from './js-long';
import jsShort from './js-short';
import octal from './octal';
import unicode from './unicode';

export const modules = new Map([
  [Type.BINARY, binary],
  [Type.CHAR, char],
  [Type.CSS, css],
  [Type.DECIMAL, decimal],
  [Type.HEXADECIMAL, hexadecimal],
  [Type.HTML_DECIMAL, htmlDecimal],
  [Type.HTML_ENTITY, htmlEntity],
  [Type.HTML_HEXADECIMAL, htmlHexadecimal],
  [Type.JS_LONG, jsLong],
  [Type.JS_SHORT, jsShort],
  [Type.OCTAL, octal],
  [Type.UNICODE, unicode],
]);

export const convertFrom: ConvertFrom = (chr, type) => {
  const module = modules.get(type);
  return module.from(chr);
};

export const convertTo: ConvertTo = (str, type) => {
  const module = modules.get(type);
  return module.to(str);
};

export const detectType: DetectType = (str) => {
  // Ignore empty strings
  if (str === '') return null;
  // Implemented in preference order
  // Numeric types are not detected
  if (unicode.to(str) !== null) return Type.UNICODE;
  if (htmlEntity.to(str) !== null) return Type.HTML_ENTITY;
  if (htmlHexadecimal.to(str) !== null) return Type.HTML_HEXADECIMAL;
  if (htmlDecimal.to(str) !== null) return Type.HTML_DECIMAL;
  if (jsLong.to(str) !== null) return Type.JS_LONG;
  if (jsShort.to(str) !== null) return Type.JS_SHORT;
  if (css.to(str) !== null) return Type.CSS;
  // Interpret as literal string
  if (str.length === 1) return Type.CHAR;
  // Type is unknown
  return null;
};

export { Type };
