import React from 'react'

import { Link } from 'gatsby'

import * as S from './style'

export function Footer() {
    return (
        <S.Container>
            <S.List>
                <Link to="/">Voltar ao Topo</Link>
                <Link to="/Contatos">Contato</Link>
            </S.List>
        </S.Container>
    )
}