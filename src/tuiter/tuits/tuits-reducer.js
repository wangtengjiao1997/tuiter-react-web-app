import { createSlice } from "@reduxjs/toolkit";
import {createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk}
    from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}


const currentUser = {
    "userName": "SpaceX",
    "handle": "@spacex",
    "avator": "../../images/spacex.png",
    "image": "tesla.jfif",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "comment": 0,
    "transfer": 0,
    "likes": 0,
    "title":"New tuit"
}


const tuitsSlice = createSlice({
   name: 'tuits',
   initialState,
   extraReducers: {
       [findTuitsThunk.pending]:
           (state) => {
               state.loading = true
               state.tuits = []
           },
       [findTuitsThunk.fulfilled]:
           (state, { payload }) => {
               state.loading = false
               state.tuits = payload
           },
       [findTuitsThunk.rejected]:
           (state) => {
               state.loading = false
           },
       [deleteTuitThunk.fulfilled] :
           (state, { payload }) => {
               state.loading = false
               state.tuits = state.tuits
                   .filter(t => t._id !== payload)
           },
       [createTuitThunk.fulfilled]:
           (state, { payload }) => {
               state.loading = false
               state.tuits.push(payload)
           },
       [updateTuitThunk.fulfilled]:
           (state, { payload }) => {
               state.loading = false
               const tuitNdx = state.tuits
                   .findIndex((t) => t._id === payload._id)
               state.tuits[tuitNdx] = {
                   ...state.tuits[tuitNdx],
                   ...payload
               }
           }


   },
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