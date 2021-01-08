export const GET_MUSIC_ITEMS = 'GET_MUSIC_ITEMS';
export const ADD_MUSIC_ITEM = 'ADD_MUSIC';
export const UPDATE_EDIT_MUSIC_ITEM = 'UPDATE_EDIT_MUSIC_ITEM';
export const DELETE_MUSIC_ITEM = 'DELETE_MUSIC_ITEM';
export const LOAD_MUSIC_ITEMS = 'LOAD_MUSIC_ITEMS';

// Action types - what exactly they are doing
// GET_MUSIC_ITEMS (from api) - fetches data from back end HTTP get call (axios), fetch (fetchApi)
// MUSIC_ITEMS_LOADING -  no interaction with BE - checks if data exists and renders list or error-page/ loading page
// ADD_MUSIC_ITEM (push new payload to music items array - CREATE route - new data entry HTTP post call
// UPDATE_MUSIC_ITEM - UPDATE route - fetches partially filled form, user edits it/ updates it, HTTP  put call
// DELETE_MUSIC_ITEM - DELETE route - deletes permanently to back end, HTTP delete call
// SHOW/ HIDE/ FILTER/LOAD - all FE actions like loading based on FE logic AFTER a get call
