const initialSate = {
  itemList: [],
  loading: false,
}
const reducer = (state = initialSate , action) => {
  switch (action.type) {
    case 'GET_ITEM':
      return { ...state, loading: true };
    case 'ITEM_RECEIVED': {
      return { ...state, itemList: action.json, loading: false };
    }
    default: 
      return state;
  }
};
export default reducer;