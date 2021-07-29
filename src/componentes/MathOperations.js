import React from 'react'
import Button from './Button/Button'

const MathOperations = ({onClickOperation, onClickEqual}) => (
    <div className="math-operations">
        <Button text="+" clickHandler={onClickOperation}/>
        <Button text="-" clickHandler={onClickOperation}/>
        <Button text="*" clickHandler={onClickOperation}/>
        <Button text="/" clickHandler={onClickOperation}/>
        <Button text="=" clickHandler={onClickEqual}/>
    </div>   
)


export default MathOperations