// importar
import React, {useState} from 'react'
import Functions from './componentes/Functions'
import Numbers from './componentes/Numbers'
import MathOperations from './componentes/MathOperations'
import Result from './componentes/Result'
import words from 'lodash.words'
import './App.css'
// generar compo

const App = () => {
    const [stack, setStack ] = useState('')

    const items = words(stack, /[^-^+^*^/]+/g)
    // lo que ejecuta la funcion
    return (<main className="react-calculator">
        <Result value={items[items.length-1]} />
        <Numbers onClickNumber={number =>{
            console.log('click en numero', items)
            setStack(`${stack}${number}`)
            }}/>
        <Functions
            onContentClear={() =>
                setStack('')
            }
            onDelete={() =>{
                if (stack.length > 0){
                    const newStack = stack.substring(0,stack.length -1)
                    setStack(newStack)
                }
            }}
            />
        <MathOperations 
            onClickOperation= {operation =>{
                console.log(operation)
                setStack(`${stack}${operation}`)
            }}
            onClickEqual ={equal => {
                console.log(equal)
                setStack(eval(stack))
            }}
        />
    </main>)
}



export default App