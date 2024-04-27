import * as React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip} from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { Link as RouterLink} from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';



const User_table = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/users/')
            .then((responce) => {
                setData(responce.data);
            })

            .catch((error) => {
                console.log(error);
            });
    }, []);

    const delete_post = async (id) => {
        if (window.confirm('Вы уверены, что хотите удалить этого пользователя??')) {
           await axios
                .delete(`http://localhost:3000/users/${id}`)
                .then((responce) => {
                    setData(responce.data);
                    setData(data.filter((data) => data.id !== id));
                })
    
                .catch((error) => {
                    console.log(error);
                });
            alert("Пользователь удален");
    
        }
        else {
            return
        };
    };
    return (
        <div>
            <TableContainer style={{ maxHeight: 400, maxWidth:370 }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID Пользователя</TableCell>
                            <TableCell align="right">Фамилия</TableCell>
                            <TableCell align="right">Имя</TableCell>
                            <TableCell align="right">E-mail</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ maxHeight: '200px' }}>
                        {data.map((user) => (
                            <TableRow
                                key={user.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {user.id}
                                </TableCell>
                                <TableCell align="right">{user.surname}</TableCell>
                                <TableCell align="right">{user.name}</TableCell>
                                <TableCell align="right">{user.email}</TableCell>
                                <TableCell align="right"><Tooltip title="Изменить"><IconButton component={RouterLink} to={`/user_update/${user.id}`}><EditIcon/></IconButton></Tooltip></TableCell>
                                <TableCell align="right"><Tooltip title="Удалить"><IconButton color='warning' variant='contained' onClick={() => delete_post(user.id)}><ClearIcon/></IconButton></Tooltip></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default User_table;