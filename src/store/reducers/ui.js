import { handleActions } from 'redux-actions'

import {
  INITIAL_STATE,
  SET_FIREBASE_READY,
  SET_VIEWPORT,
  SET_SHOW_LOGIN,
} from '@/store/types/ui'

const initialState = {
  isFirebaseReady: false,
  userExists: false,
  viewport: 'xs',
  isMobile: true,
  isMobPad: true,
  showLogin: false,
}

const reducer = handleActions({
  [INITIAL_STATE]: () => (
    { ...initialState }
  ),
  [SET_FIREBASE_READY]: (state, action) => {
    return {
      ...state,
      isFirebaseReady: true,
      userExists: action.payload,
    }
  },
  [SET_VIEWPORT]: (state, action) => {
    return {
      ...state,
      viewport: action.payload,
      isMobile: action.payload === 'xs',
      isMobPad: action.payload === 'xs' || action.payload === 'sm',
    }
  },
  [SET_SHOW_LOGIN]: (state, action) => {
    return {
      ...state,
      showLogin: action.payload,
    }
  },
}, initialState)

export default reducer
