import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiURL = 'https://assignment3-react.herokuapp.com'
const apiKey = "ffsgqnwrubathttxuatsbsgmkvqvflgeogojnxztvyllhqfhceqcfyznwtuzuyyv";

//fetches user from api. Using redux toolkit thunk middleware
export const fetchUser = createAsyncThunk('user/fetchUser',
    async (username) => 
    {
        return fetch(`${apiURL}/translations?username=${username}`).then((res) => res.json);
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
    name: "",
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
                state.status = "loading";
                console.log(state.status);
            },
            [fetchUser.fulfilled]: (state, payloadObject) => 
            {
                if (payloadObject.payload.length === 0) 
                {
                    console.log(payloadObject);
                    state.value = payloadObject;
                }
                state.status = "sucess";
                console.log(state.status);
            },
            [fetchUser.rejected]: (state, action) => 
            {
                state.status = "failed";
                state.error = action.error.message;
                console.log(state.status);
            },

            //Create user
            [createUser.pending]: (state, action) => 
            {
                state.status = "loading";
                console.log(state.status);
            },
            [createUser.fulfilled]: (state, payloadObject) => 
            {
                console.log(payloadObject)
                state.status = "sucess";
                console.log(state.status);
            },
            [createUser.rejected]: (state, action) => 
            {
                state.status = "failed";
                console.log(state.status);
            }
        }
    });

// Destructure and export the plain action creators
export const { setUserName, logout } = userSlice.actions;

export default userSlice.reducer;