import { configureStore } from '@reduxjs/toolkit'
import boardSlice from '../features/board/boardSlice'
import userSlice from '../features/user/userSlice'

export default configureStore({
    reducer: {
        board: boardSlice,
        user: userSlice
    }
})
