import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    boardList: [],
    listStat: 'idle',
    currentBoard: null,
    error: null
}

export const fetchBoardList = createAsyncThunk('board/boardList', async () => {
    const response = await axios.get('http://192.168.179.129/api/svc/boards', {withCredentials: true});
    return response.data;
})

export const addBoard = createAsyncThunk('board/addBoard', async (boardObj) => {
    const response = await axios({
        url: 'http://192.168.179.129/api/svc/board', 
        method: 'POST',
        data: boardObj, 
        withCredentials: true});
    return response.data;
})

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchBoardList.fulfilled, (state, action) => {
                state.boardList = action.payload;
                state.listStat = 'successed';
            })
            .addCase(addBoard.fulfilled, (state, action) => {
                state.boardList = [...state.boardList, action.payload];
                state.listStat = 'successed';
            })
    }
})

export const { postUpdated } = boardSlice.actions;

export default boardSlice.reducer