import {combineReducers, createStore, applyMiddleware} from 'redux'
import { chatsReducer } from './chats/chatsReducer';
// import { messageReducer } from './message/messageReducer';
import {createLogger} from 'redux-logger'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';

const time = store => next => action => {
	const delay = action?.meta?.delay;
	if (!delay){
		return next(action)
	}
	const timeout = setTimeout(()=> next(action), delay) 

	return ()=>{
		clearTimeout(timeout)
	}
}

const loggers = createLogger({
  collapsed: time ()
});

const persistConfig ={
	key: 'root',
	storage
}


const reduser = combineReducers({
	chats: chatsReducer,
	// messages: messageReducer,
	});

const permistedReduser = persistReducer(persistConfig,reduser)

export const store = createStore((permistedReduser), applyMiddleware(loggers))
export const persist = persistStore(store)