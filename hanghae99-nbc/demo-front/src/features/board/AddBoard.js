import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBoard } from './boardSlice'

export const AddBoardForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()

    const onTitleChanged = (e) => setTitle(e.target.value)
    const onContentChanged = (e) => setContent(e.target.value)

    const onSaveClicked = () => {
        if (title && content) {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            
            dispatch( addBoard(formData))
            setTitle('')
            setContent('')
        }
    }

    return (
        <section>
        <h2>글 작성</h2>
        <form>
            <label htmlFor="title">제목:</label>
            <input type="text" id="title" name="title" value={title} onChange={onTitleChanged} />
            <label htmlFor="content">내용:</label>
            <textarea id="content" name="content" value={content} onChange={onContentChanged} />
            <button type="button" onClick={onSaveClicked}> 저장 </button>
        </form>
        </section>
    )
}