export default function(state=null, action) {
	switch (action.type) {
		case 'FETCH_MAP':
			return action.payload.data;
	}
	return state;
}