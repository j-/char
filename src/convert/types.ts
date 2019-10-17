export type ToInput = string;
export type ToOutput = number | null;

export type FromInput = number;
export type FromOutput = string;

export interface Convert {
  pattern: RegExp;
  to(input: ToInput): ToOutput;
  from(input: FromInput): FromOutput;
}

export type ConvertTo = (input: ToInput, type: Type) => ToOutput;
export type ConvertFrom = (input: FromInput, type: Type) => FromOutput;
export type DetectType = (input: string) => Type | null;

export enum Type {
  BINARY = 'binary',
  CHAR = 'char',
  CSS = 'css',
  DECIMAL = 'decimal',
  HEXADECIMAL = 'hexadecimal',
  HTML_DECIMAL = 'html_decimal',
  HTML_ENTITY = 'html_entity',
  HTML_HEXADECIMAL = 'html_hexadecimal',
  JS_LONG = 'js_long',
  JS_SHORT = 'js_short',
  OCTAL = 'octal',
  UNICODE = 'unicode',
};
