import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../actionsRedusers/Action';


export default function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count)
    return (
        <div>
            <p>{count}</p>
            <Button variant='contained' onClick={() => dispatch(increment())}>Плюс</Button>
            <Button variant='contained' color='secondary' onClick={() => dispatch(decrement())}>Минус</Button>
        </div>
    )
}