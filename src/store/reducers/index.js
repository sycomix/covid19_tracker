import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';

import ui from '@/store/reducers/ui'

export default combineReducers({ 
  form: reduxFormReducer,
  ui,
})
