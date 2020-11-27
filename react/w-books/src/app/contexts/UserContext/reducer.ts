import { saveInLocalStorage } from '~utils/session';

export interface User {
  accessToken: string;
  uid: string;
  client: string;
}

export interface UserState {
  user?: {
    payload?: User;
    logged: boolean;
  };
}

enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

export const INITIAL_STATE = {
  user: {
    logged: !!localStorage.getItem('access-token')
  }
};

interface SetSession {
  type: ActionTypes.LOGIN;
  payload: any;
}

interface ClearSession {
  type: ActionTypes.LOGOUT;
  payload: any;
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
    return { type: ActionTypes.LOGIN, payload: { userData, logged: true } };
  },
  resetUser: (): ClearSession => {
    localStorage.clear();
    return { type: ActionTypes.LOGOUT, payload: { logged: false } };
  }
};

export const authReducer = (state: UserState, action: Action): UserState => {
  switch (action.type) {
    case ActionTypes.LOGIN: {
      return { ...state, user: action.payload };
    }
    case ActionTypes.LOGOUT: {
      return { ...state, user: undefined };
    }
    default: {
      return state;
    }
  }
};
