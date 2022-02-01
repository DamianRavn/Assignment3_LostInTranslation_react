import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiURL =  'https://experis-assignment-api.herokuapp.com'
const apiKey =  'floppy-vitamin-cloud';

//fetches user from api. Using redux toolkit thunk middleware
export const fetchUser = createAsyncThunk('user/fetchUser',
    async (username) => 
    {
        return fetch(`${apiURL}/translations?username=${username}`)
        .then(response => response.json())
        .catch(error => {
        })
    });

//creates user from api. Using redux toolkit thunk middleware
export const createUser = createAsyncThunk('user/createUser',
async (username) => 
{
    return fetch(`${apiURL}/translations`, 
    {
        method: 'POST',
        headers: 
        { 
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify
        ({ 
            username: username, 
            translations: []
        })
    })
    .then(response => 
    {
      if (!response.ok) 
      {
        throw new Error('Could not create new user')
      }
      return response.json()
    })
    .catch(error => 
    {
        console.log(error);
    })
});

//base state
const initialStateValue =
{
    id: 0,
    username: "",
    translations: [],
    status: "",
    session: false
};
//Create slice is part of redux toolkit. It has the user state and reducers
export const userSlice = createSlice
    ({
        name: "user",
        initialState:
        {
            value: initialStateValue

        },
        reducers:
        {
            addUserTranslation: (state, action) => 
            {
                state.value.translations = action.payload;
            },
            logout: (state) => 
            { 
                state.value = initialStateValue
                localStorage.removeItem('local-session', JSON.stringify(state.value.session))
            },
        },
        // Handles the async states
        extraReducers:
        {
            //Fetch user
            [fetchUser.pending]: (state, action) => 
            {
                state.value.status = "loading";
            },
            [fetchUser.fulfilled]: (state, payloadObj) => 
            {
                if(payloadObj.payload.length === 0)
                {
                    state.value.username = payloadObj.meta.arg;
                    state.value.status = "newUser"
                    return;
                }
                
                state.value = payloadObj.payload[0];
                state.value.status = "sucess";
                state.value.session = true;
                localStorage.setItem('local-session', JSON.stringify(state.value.session))
            },
            [fetchUser.rejected]: (state, action) => 
            {
                state.value.status = "failed";
                state.value.error = action.error.message;
            },

            //Create user
            [createUser.pending]: (state, action) => 
            {
                state.value.status = "loading";
            },
            [createUser.fulfilled]: (state, payloadObject) => 
            {
                state.value.status = "sucess";
                state.value.session = true;
                localStorage.setItem('local-session', JSON.stringify(state.value.session))
            },
            [createUser.rejected]: (state, action) => 
            {
                state.value.status = "failed";
            }
        }
    });

// Destructure and export the plain action creators
export const { setUserName, addUserTranslation, logout } = userSlice.actions;

export default userSlice.reducer;