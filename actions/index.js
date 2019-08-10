export const GET_ITEM = 'GET_ITEM';
export const ITEM_RECEIVED = 'ITEM_RECEIVED';

export const getItem = () => ({
  type: GET_ITEM,
});

export const itemReceived = (data) => ({
  json: data,
  type: ITEM_RECEIVED,
})