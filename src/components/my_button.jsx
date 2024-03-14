import React from "react"
import './comp.css'

const my_button = ({label, onClick}) =>{
    return <button onClick={onClick}>{label}!</button>
}
export default my_button