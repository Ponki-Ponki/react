const initialState ={
	messages: [
		{
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
		}
	]
}

export const messageReducer = (state = initialState , action) => {
	switch (action.type){
		case 'add_message': {
			return{
				...state,
				messages: [...state.messages, action.payload]
			}
		}
		case 'delete_message':
			return{
				...state,
				messages: state.messages.filter(item => item.id !== action.payload)
			}


		default: 
			return state
	}
}