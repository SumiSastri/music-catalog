import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from 'client/src/actions/types.js';

const initialState = {
	items: [ { id: uuid(), name: 'Maitre Gims' }, { id: uuid(), name: 'Yousoupha' }, { id: uuid(), name: 'DJ Khalid' } ]
};
