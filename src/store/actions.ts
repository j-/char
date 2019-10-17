import { Action, ActionCreator } from 'redux';
import { Type } from '../convert';

export const ACTION_SET_PAGE = 'SET_PAGE';

export interface ActionSetPage extends Action<typeof ACTION_SET_PAGE> {
  data: {
    page: number;
  };
};

export const isActionSetPage = (action: Action): action is ActionSetPage => (
  action.type === ACTION_SET_PAGE
);

export const setPage: ActionCreator<ActionSetPage> = (page: number) => ({
  type: ACTION_SET_PAGE,
  data: {
    page,
  },
});

export const ACTION_SET_ACTIVE = 'SET_ACTIVE';

export interface ActionSetActive extends Action<typeof ACTION_SET_ACTIVE> {
  data: {
    codePoint: number;
    type: Type | null;
  };
};

export const isActionSetActive = (action: Action): action is ActionSetActive => (
  action.type === ACTION_SET_ACTIVE
);

export const setActive: ActionCreator<ActionSetActive> = (codePoint: number, type: Type | null) => ({
  type: ACTION_SET_ACTIVE,
  data: {
    codePoint,
    type,
  },
});
