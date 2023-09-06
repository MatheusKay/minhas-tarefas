import { Link } from 'react-router-dom'

import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Botao = styled(Link)`
  height: 64px;
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${variaveis.verde};
  color: #fff;
  border-radius: 50%;
  text-align: center;
  text-decoration: none;
  font-size: 40px;
  font-weight: bold;
`
