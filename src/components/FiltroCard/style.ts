import styled from 'styled-components'

import { Props } from '.'

type PropsOmit = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsOmit>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  border-radius: 8px;
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
`

export const Contador = styled.span`
  display: block;
  font-weight: bold;
  font-size: 24px;
`

export const Label = styled.span`
  font-size: 14px;
`