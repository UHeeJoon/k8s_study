import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { BoardList } from './features/board/BoardList'
import { AddBoardForm } from './features/board/AddBoard'
import { Login } from './features/user/Login'
import { Join } from './features/user/Join'
import { UserInfo } from './features/user/UserInfo'
import { Home } from './Home'

function App() {
return (
    <BrowserRouter>
    <div className="App">
        <Routes>
        <Route exact path="/home" element={<><Home/><BoardList/><AddBoardForm/></>} />

        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/" element={<Login/>} />

        <Route exact path="/join" element={<Join/>} />

        <Route exact path="/UserInfo" element={<UserInfo/>} />

        <Route exact path="/boardList" element={<BoardList />} />
        </Routes>
    </div>
    </BrowserRouter>
);
}

export default App;