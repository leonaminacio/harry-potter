import React, { useState, useEffect } from 'react'

import { api } from '../../services/api'

import * as S from './style'

export function Main() {

    const [list, setList] = useState([])

    useEffect(() => {
        api.get()
        .then(response => setList(response.data))
            // console.log(response.data)
    }, [])

    return (
        <S.Container>
            {list.map((item, index) => (
                <div key={index}>
                    <S.Photo src={item.image} alt="" />
                    <S.Name>{item.name}</S.Name>
                </div>    
            ))} 
        </S.Container>
    )
}