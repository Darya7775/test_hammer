import { combineReducers } from 'redux'
import theme from './slices/themeSlice'
import auth from './slices/authSlice'
import clients from "./slices/clients-slice"

const rootReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        theme,
        auth,
        clients,
        ...asyncReducers,
    })
    return combinedReducer(state, action)
}
  
export default rootReducer
