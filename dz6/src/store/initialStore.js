import {combineReducers, createStore} from 'redux'
import { chatsReducer } from './chats/chatsReducer';
import { messageReducer } from './message/messageReducer';


export const store = createStore(combineReducers({
	chats: chatsReducer,
	messages: messageReducer,
	}));