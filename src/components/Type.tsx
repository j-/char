import * as React from 'react';
import { Type as ConvertType } from '../convert/types';

export interface Props {
  type: ConvertType;
}

const Type: React.FC<Props> = ({ type }) => {
  switch (type) {
    case ConvertType.BINARY:            return <>Binary</>;
    case ConvertType.CHAR:              return <>Character</>;
    case ConvertType.CSS:               return <>CSS</>;
    case ConvertType.DECIMAL:           return <>Decimal</>;
    case ConvertType.HEXADECIMAL:       return <>Hexadecimal</>;
    case ConvertType.HTML_DECIMAL:      return <>HTML (Decimal)</>;
    case ConvertType.HTML_ENTITY:       return <>HTML (Named entity)</>;
    case ConvertType.HTML_HEXADECIMAL:  return <>HTML (Hexadecimal)</>;
    case ConvertType.JS_LONG:           return <>JavaScript/RegEx (Unicode)</>;
    case ConvertType.JS_SHORT:          return <>JavaScript/Regex (Hexadecimal)</>;
    case ConvertType.OCTAL:             return <>Octal</>;
    case ConvertType.UNICODE:           return <>Unicode</>;
    
    default: return <>Unknown</>;
  }
};

export default Type;
