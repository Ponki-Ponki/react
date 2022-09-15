const initialState ={
	chats: [
		{
			idChats: 1,
			nameChat: 'chat1',
		},
		{
			idChats: 2,
			nameChat: 'chat2',
		},
		{
			idChats: 3,
			nameChat: 'chat3',
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