import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        password: '',
    },
    reducers: {
        setUserData: (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
    },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
