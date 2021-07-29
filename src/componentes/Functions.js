import React from 'react'
import Button from './Button/Button'

const Functions = ({onContentClear, onDelete}) =>(
    <div className="functions">
        <Button type="button-long-text" text="clear" clickHandler={onContentClear}/> 
        <Button text="&larr;" clickHandler={onDelete} /> 
    </div>
)

export default Functions