import { Reducer } from 'redux';
import { ActionSetActive, isActionSetActive } from './actions';
import { Type } from '../convert';

export interface ReducerState {
  active: number;
  type: Type | null;
};

export const DEFAULT_STATE: ReducerState = {
  active: 'J'.charCodeAt(0),
  type: null,
};

const reducer: Reducer<ReducerState, ActionSetActive> = (state = DEFAULT_STATE, action) => {
  if (isActionSetActive(action)) {
    return {
      ...state,
      active: action.data.codePoint,
      type: action.data.type,
    };
  }

  return state;
}

export default reducer;

export const getActiveCodePoint = (state: ReducerState) => state.active;

export const getActiveConvertType = (state: ReducerState) => state.type;
