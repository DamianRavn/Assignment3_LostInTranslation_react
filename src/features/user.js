import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiURL =  'https://experis-assignment-api.herokuapp.com'
const apiKey =  'floppy-vitamin-cloud';

//fetches user from api. Using redux toolkit thunk middleware
export const fetchUser = createAsyncThunk('user/fetchUser',
    async (username) => 
    {
        console.log(username)
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
            translations: ["Hello"] 
        })
    })
    .then(response => 
    {
      if (!response.ok) 
      {
          console.log(response);
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
    status: ""
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
            //Fetch user
            [fetchUser.pending]: (state, action) => 
            {
                state.value.status = "loading";
            },
            [fetchUser.fulfilled]: (state, payloadObj) => 
            {
                if(payloadObj.payload.length === 0)
                {
                    state.value.name = payloadObj.meta.arg;
                    state.value.status = "newUser"
                    return;
                }
                
                state.value = payloadObj.payload[0];
                console.log(state.value);
                state.value.status = "sucess";
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
                console.log(payloadObject)
                state.value.name = "test"
                state.value.status = "sucess";
                console.log("Create user " +state.value.status);
            },
            [createUser.rejected]: (state, action) => 
            {
                state.value.status = "failed";
                console.log("Create user " +state.value.status);
            }
        }
    });

// Destructure and export the plain action creators
export const { setUserName, logout } = userSlice.actions;

export default userSlice.reducer;