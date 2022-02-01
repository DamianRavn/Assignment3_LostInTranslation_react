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
//adds to the users translation history
export const updateTranslation = createAsyncThunk('user/updateTranslation',
async (user) => 
{
    return fetch(`${apiURL}/translations/${user.id}`, 
    {
        method: 'PATCH',
        headers: 
        {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify
        ({
            // Provide new translations to add to user with id 1
            translations: [...user.translations, {translation: user.newTranslation, deleted: false}]
        })
    })
    .then(response => 
    {
        if (!response.ok) 
        {
            throw new Error('Could not update translations history')
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
            
            logout: (state) => 
            { 
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
                    state.value.username = payloadObj.meta.arg;
                    state.value.status = "newUser"
                    return;
                }
                
                state.value = payloadObj.payload[0];
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
            [createUser.fulfilled]: (state, {payload}) => 
            {
                state.value = {...payload};
                state.value.status = "sucess";
            },
            [createUser.rejected]: (state, action) => 
            {
                state.value.status = "failed";
            },

            //Update translation
            [updateTranslation.pending]: (state, action) => 
            {
                state.value.status = "loading";
            },
            [updateTranslation.fulfilled]: (state, {payload}) => 
            {
                state.value = {...payload};
                state.value.status = "sucess";
            },
            [updateTranslation.rejected]: (state, action) => 
            {
                state.value.status = "failed";
            }
        }
    });

// Destructure and export the plain action creators
export const { setUserName, logout } = userSlice.actions;

export default userSlice.reducer;