import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    userName: '',
    userEmail: '',
    role: '',
    listStat: '',
    isAuthenticated: false,
    error: null
}

export const LoginRequest = createAsyncThunk('user/login', async (formData) => {
    const response = await axios({
        url: 'http://192.168.179.129/api/loginProc', 
        method: 'POST',
        data: formData, 
        withCredentials: true});
    return response.data;
})

export const LogoutRequest = createAsyncThunk('user/logout', async () => {
    const response = await axios.post('http://192.168.179.129/api/logout'); 
    return response.data;
})

export const JoinRequest = createAsyncThunk('user/join', async (user) => {
    const response = await axios.post('http://192.168.179.129/api/join', user); 
    return response.data;
})

export const UserRequest = createAsyncThunk('user/userInfo', async () => {
    const response = await axios.get('http://192.168.179.129/api/user', {withCredentials: true}); 
    return response.data;
})

const boardSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(LoginRequest.fulfilled, (state, action) => {
                console.log("login success");
                console.log(action);
                if(action.payload){
                    state.userEmail= action.payload.email;
                    state.userName = action.payload.name;
                    state.role = action.payload.authorities;
                    state.isAuthenticated = true;
                    state.listStat = 'successed';
                }else{
                    state.isAuthenticated = false;
                    state.listStat = 'failed';
                }
            })
            .addCase(LoginRequest.pending, (state) => {
                state.listStat = '';
            })
            .addCase(LogoutRequest.fulfilled, (state, action) => {
                console.log("Logout");
                console.log(action.payload);
                state.userEmail= '';
                state.userName = '';
                state.role = '';
                state.isAuthenticated = false;
                state.listStat = '';
            })
            .addCase(JoinRequest.fulfilled, (state, action) => {
                state.listStat = 'successed';
            })
            .addCase(UserRequest.fulfilled, (state, action) => {
                console.log(action.payload);
                state.userEmail= action.payload.userEmail;
                state.userName = action.payload.userName;
                state.role = action.payload.role;
                state.listStat = 'successed';
            })
    }
})

export default boardSlice.reducer