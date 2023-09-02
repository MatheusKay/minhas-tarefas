import styled from 'styled-components'

export const Card = styled.div`
  padding: 16px;
  margin-bottom: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #fcfcfc;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Tag = styled.span`
  padding: 4px 8px;
  margin-right: 16px;
  display: inline-block;
  color: #fff;
  background-color: #e1a32a;
  border-radius: 8px;
  font-weight: bold;
  font-size: 10px;
`

export const Descricao = styled.textarea`
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  display: block;
  color: #8b8b8b;
  background-color: transparent;
  font-size: 14px;
  font-family: 'Roboto Mono', monospance;
  line-height: 24px;
  resize: none;
  border: none;
`

export const BarraAcoes = styled.div`
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`

export const Botao = styled.button`
  padding: 8px 12px;
  margin-right: 8px;
  font-size: 12px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  background-color: #2f3640;
  color: #fff;
  cursor: pointer;
`
