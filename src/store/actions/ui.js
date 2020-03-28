import { createAction } from 'redux-actions'

import {
  SET_FIREBASE_READY,
  SET_VIEWPORT,
  SET_SHOW_LOGIN,
} from '@/store/types/ui'

// Dispatch Actions
const setFirebaseReadyAct = createAction(SET_FIREBASE_READY)
export const setFirebaseReady = data => (dispatch) => {
  dispatch(setFirebaseReadyAct(data))
}

const setViewportAct = createAction(SET_VIEWPORT)
export const setViewport = data => (dispatch) => {
  dispatch(setViewportAct(data))
}

const setShowLoginAct = createAction(SET_SHOW_LOGIN)
export const setShowLogin = data => (dispatch) => {
  dispatch(setShowLoginAct(data))
}

