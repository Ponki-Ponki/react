const initialState ={
	chats: [
		{
			idChats: 1,
			nameChat: 'chat1',
			messages: [{
				id: 1,
				text: 'fetgas'
			},
			{
				id: 2,
				text: 'adfasdfaasdfetgas'
			},
			{
				id: 3,
				text: 'fetgasadfasdf'
			}]
		},
		{
			idChats: 2,
			nameChat: 'chat2',
			messages: [{
				id: 1,
				text: 'fetasdfasdgas'
			},
			{
				id: 2,
				text: 'fdddddadfasdfaasdfetgas'
			},
			{
				id: 3,
				text: 'fetgasasdasdfasdfdfasdf'
			}]
		},
		{
			idChats: 3,
			nameChat: 'chat3',
			messages: [{
				id: 1,
				text: '1as'
			},
			{
				id: 2,
				text: 'afaasdfetgas'
			},
			{
				id: 3,
				text: 'fetgasa3422'
			}]
		}
	]
}

export const chatsReducer = (state = initialState, action) => {
	switch (action.type){
		case 'add_chat': 
			return{
				...state,
				chats: [...state.chats, action.payload]
			}
		case 'delete_chat':
			return{
				...state,
				chats: state.chats.filter(item => item.idChats !== action.payload)
			}
		default: 
			return state
	}
}