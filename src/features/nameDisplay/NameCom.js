import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendName, showName } from './nameSclice';

export function NameCom() {
    const user = useSelector(sendName)
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=> dispatch(showName())}>display name</button>
            <h1>{user}</h1>
        </div>
    )
}


