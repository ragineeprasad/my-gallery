import React from 'react';

const TableField = ({fieldName ,removeBook,editBook, settingsField}) =>{
    return(
        <div className="tableField">
            {fieldName}
            {settingsField &&  
            <><i className="fas fa-edit" onClick={editBook}></i>
            <i className="far fa-trash-alt" onClick={removeBook}></i> 
            </>}

           
        
        </div>
    )
}
export default TableField;