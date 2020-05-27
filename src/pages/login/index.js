import  React, { useState } from 'react'
import './index.css'

export default function Login() {
    const [count, setCount] = useState(0)

    return (
        <div className='login'>
            <div>
               我是login 
            </div>
            <div>
                {count}
            </div>
            <button onClick={() => setCount(count+1)}>+</button>
        </div>
    )
}