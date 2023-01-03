import React from 'react';

const Form = (props) => {
    const { title,
        setTitle,
        author,
        setAuthor,
        isbn,
        setIsbn,
        currentBookId,
        setCurrentBookId,
        handleClick } = props

    return (
        <form onSubmit= {handleClick}>
            <label>Title</label>
            <input
                autoFocus
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}></input>
            <label>Author</label>
            <input
                autoFocus
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}></input>
            <label>Isbn</label>
            <input
                autoFocus
                type="text"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
            ></input>

    <button tabIndex="0" type="submit">{currentBookId !==null? "Update" : "Add"}</button>
        </form>
    )
}

export default Form;