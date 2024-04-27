import React from "react";
import User_table from "../components/user_table";
import { Link } from "react-router-dom";

const Lab6 = () => {
    return (
        <div>
            <h2>Это Лаб 6</h2>
            <p>Реализация GET, PUT, DELETE из axios</p>
            <p>POST реализована в <Link to="/lab5">5 лабораторной</Link></p>
            <User_table />
        </div>
    );
};
export default Lab6;