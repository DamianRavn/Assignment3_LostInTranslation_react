import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiURL = 'https://assignment3-react.herokuapp.com'
const apiKey = "ffsgqnwrubathttxuatsbsgmkvqvflgeogojnxztvyllhqfhceqcfyznwtuzuyyv";

export const fetchUser = createAsyncThunk('user/fetchUser',
    async (username) => {
        console.log(username);
        return fetch(`${apiURL}/translations?username=${username}`).then((res) => res.json);
    });


const initialStateValue =
{
    id: 0,
    name: "",
    translations: [],
    status: ""
};
export const userSlice = createSlice
    ({
        name: "user",
        initialState:
        {
            value: initialStateValue

        },
        reducers:
        {
            setUserName: (state, action) => {
                state.value.name = action.payload;
            },
            logout: (state) => {
                state.value = initialStateValue
            },
        },
        // Handles the async states
        extraReducers:
        {
            [fetchUser.pending]: (state, action) => {
                state.status = "loading";
                console.log(state.status);
            },
            [fetchUser.fulfilled]: (state, { payload }) => {
                if (payload.length === 1) {
                    console.log(payload);
                    state.value = payload;
                }
                state.status = "sucess";
                console.log(state.status);
            },
            [fetchUser.rejected]: (state, action) => {
                state.status = "failed";
                console.log(state.status);
            }
        }
    });

// Destructure and export the plain action creators
export const { setUserName, logout } = userSlice.actions;

export default userSlice.reducer;