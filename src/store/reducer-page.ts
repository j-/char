import { Reducer } from 'redux';
import { ActionSetPage, isActionSetPage, ActionSetActive, isActionSetActive } from './actions';

export interface ReducerState {
  number: number;
  size: number;
};

export const DEFAULT_STATE: ReducerState = {
  number: 0,
  size: 0x100,
};

const reducer: Reducer<ReducerState, ActionSetPage | ActionSetActive> = (state = DEFAULT_STATE, action) => {
  if (isActionSetPage(action)) {
    return {
      ...state,
      number: action.data.page,
    };
  }

  if (isActionSetActive(action)) {
    return {
      ...state,
      number: getPageForCodePoint(state, action.data.codePoint),
    }
  }

  return state;
}

export default reducer;

export const getPageNumber = (state: ReducerState) => state.number;

export const getPageSize = (state: ReducerState) => state.size;

export const getFirstPageNumber = () => 0;

export const getLastPageNumber = (state: ReducerState) => Math.ceil(0x10ffff / getPageSize(state));

export const getPageForCodePoint = (state: ReducerState, codePoint: number) => Math.floor(codePoint / getPageSize(state));
