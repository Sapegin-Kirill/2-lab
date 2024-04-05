import React from "react"
import { useState } from 'react'
import '../components/comp.css'
import my_button from "../components/my_button"

const Lab3 = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div className="buttons">
                <h2>В этой лабораторной нужно было сделать свои кнопки-компоненты и ссылки-навигацию</h2>
                <my_button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </my_button>
                <my_button onClick={() => alert("Hello world")}>
                    Выводим alert
                </my_button>
            </div>
            <p>
                Это работающие кнопки
            </p>
        </div>
    )
}
export default Lab3