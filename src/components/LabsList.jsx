import React from "react"
import './comp.css'
const LabList = () =>{
    return(
        <div className="labslist_main">
            <h2>Это список лабораторных работ</h2>
            <ul>
                <li><a href="#">2 лабораторная</a></li>
                <li><a href="#">3 лабораторная</a></li>
                <li><a href="#">4 лабораторная</a></li>
            </ul>
        </div>
    )
}
export default LabList