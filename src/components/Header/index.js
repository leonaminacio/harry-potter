import React from 'react'

import * as S from './style'

import { Link } from 'gatsby'

export function Header() {
    return (
        <S.Container>
            <S.Menu>
                <Link to="/Sobre">Sobre</Link>
                <Link to="/">Principal</Link>
                <Link to="/Contatos">Contatos</Link>
            </S.Menu>
        </S.Container>
    )
}