import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiURL =  'https://experis-assignment-api.herokuapp.com/' //'https://assignment3-react.herokuapp.com'
const apiKey = 'floppy-vitamin-cloud' //"ffsgqnwrubathttxuatsbsgmkvqvflgeogojnxztvyllhqfhceqcfyznwtuzuyyv";

//fetches user from api. Using redux toolkit thunk middleware
export const fetchUser = createAsyncThunk('user/fetchUser',
    async (username) => 
    {
        return fetch(`${apiURL}/translation?username=${username}`).then((res) => res.json);
    });

//creates user from api. Using redux toolkit thunk middleware
export const createUser = createAsyncThunk('user/createUser',
async (username) => 
{
    return fetch(`${apiURL}/translation`, 
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
                state.value.status = "loading";
                console.log(state.value.status);
            },
            [fetchUser.fulfilled]: (state, {payload}) => 
            {
                console.log(payload)
                if(payload.length === 0)
                {
                    state.value.name = "";
                }
                state.value.status = "sucess";
                console.log(state.value.status);
            },
            [fetchUser.rejected]: (state, action) => 
            {
                state.value.status = "failed";
                state.value.error = action.error.message;
                console.log(state.value.status);
            },

            //Create user
            [createUser.pending]: (state, action) => 
            {
                state.value.status = "loading";
                console.log("Create user " +state.value.status);
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