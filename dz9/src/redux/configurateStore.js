import {createStore,applyMiddleware} from "redux"
import { reducer } from "./reducers/reducers"
import thunk from "redux-thunk"


export const store = createStore(reducer, applyMiddleware(thunk))