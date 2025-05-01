import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchBoardList } from './boardSlice'

export const BoardList = () => {
    const boardList = useSelector((state) => state.board.boardList);
    const listStat = useSelector((state) => state.board.listStat);
    const dispatch = useDispatch();

    useEffect(() => {
        if(listStat === 'idle'){
            dispatch(fetchBoardList());
        }
    }, [listStat])

    const renderedBoard= boardList.map((board) => {
        return (
        <article className="excerpt" key={board.id}>
            <h3>제목 : {board.title}</h3>
            <p className="content">글 : {board.content.substring(0, 100)}</p>
        </article>
        )
    })

    return (
        <section className="board-list">
        <h2>게시판</h2>
        {renderedBoard}
        </section>
    )
}