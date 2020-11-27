import { saveInLocalStorage } from '~utils/session';
import { Nullable } from '~utils/types';

export interface User {
  accessToken: string;
  uid: string;
  client: string;
}

export interface UserState {
  user: Nullable<User>;
}

enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

export const INITIAL_STATE = {
  user: null
};

interface SetSession {
  type: ActionTypes.LOGIN;
  payload: any;
}

interface ClearSession {
  type: ActionTypes.LOGOUT;
}

export type Action = SetSession | ClearSession;

export const actionCreators = {
  setUser: (user: any): SetSession => {
    const userData = {
      accessToken: user.headers['access-token'],
      uid: user.headers.uid,
      client: user.headers.client
    };
    saveInLocalStorage(userData);
    return { type: ActionTypes.LOGIN, payload: userData };
  },
  resetUser: (): ClearSession => {
    localStorage.clear();
    return { type: ActionTypes.LOGOUT };
  }
};

export const authReducer = (state: UserState, action: Action): UserState => {
  switch (action.type) {
    case ActionTypes.LOGIN: {
      return { ...state, user: action.payload };
    }
    case ActionTypes.LOGOUT: {
      return { ...state, user: null };
    }
    default: {
      return state;
    }
  }
};
