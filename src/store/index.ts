import { combineReducers } from 'redux';
import * as inspector from './reducer-inspector';
import * as page from './reducer-page';

export interface RootReducerState {
  inspector: inspector.ReducerState;
  page: page.ReducerState;
}

export default combineReducers<RootReducerState>({
  inspector: inspector.default,
  page: page.default,
});

export const getActiveCodePoint = (state: RootReducerState) => (
  inspector.getActiveCodePoint(state.inspector)
);

export const getActiveConvertType = (state: RootReducerState) => (
  inspector.getActiveConvertType(state.inspector)
);

export const getPageNumber = (state: RootReducerState) => (
  page.getPageNumber(state.page)
);

export const getPageSize = (state: RootReducerState) => (
  page.getPageSize(state.page)
);

export const getFirstPageNumber = () => (
  page.getFirstPageNumber()
);

export const getLastPageNumber = (state: RootReducerState) => (
  page.getLastPageNumber(state.page)
);
