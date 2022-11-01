import { createSlice } from "@reduxjs/toolkit";
import profile from './profile.json';


const profileslice = createSlice({
    name: profile,
    initialState:profile,
    reducers:{
        editProfile(state, action){
            state.firstName=action.payload.name.split(" ")[0];
            state.lastName=action.payload.name.split(" ")[1];
            state.bio=action.payload.bio;
            state.location=action.payload.location;
            state.dateOfBirth=action.payload.dateOfBirth;
        }
    }
})
export const {editProfile} = profileslice.actions;
export default profileslice.reducer;