import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';

const currentUser = {
    "userName": "SpaceX",
    "handle": "@spacex",
    "avator": "../../images/spacex.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "comment": 0,
    "transfer": 0,
    "like": 0,
}


const tuitsSlice = createSlice({
   name: 'tuits',
   initialState: tuits,
   reducers: {
   deleteTuit(state, action) {
       const index = state.findIndex(tuit =>
           tuit._id === action.payload);
       state.splice(index, 1);
   },
   createTuit(state, action) {
   state.unshift({
                     content: action.payload.tuit,
                     ...templateTuit,
                     _id: (new Date()).getTime(),
                 })
   },
   likeTuit(state, action){
       const index = state.findIndex(tuit =>
            tuit._id === action.payload);
       state[index].liked = true;
       state[index].like +=1;
   },
   unlikeTuit(state, action){
       const index = state.findIndex(tuit =>
       tuit._id === action.payload);
       state[index].liked = false;
       state[index].like -=1;
   }
   }

});

export const {createTuit, deleteTuit, likeTuit, unlikeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;