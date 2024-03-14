import React from "react"
import { useState } from 'react'
import './comp.css'
import my_button from "./my_button"

const Content = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="content_main">
            <div className="buttons">
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
export default Content