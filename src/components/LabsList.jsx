import React from "react"
import './comp.css'
import { Link } from 'react-router-dom'
const LabList = () => {
    return (
        <div className="labslist_main">
            <h2>Это список лабораторных работ</h2>
            <ul>
                <li><Link to="/lab2">2 лабораторная</Link></li>
                <li><Link to="/lab3">3 лабораторная</Link></li>
                <li><Link to="/lab4">4 лабораторная</Link></li>
                <li><Link to="/lab5">5 лабораторная</Link></li>
            </ul>
        </div>
    )
}
export default LabList