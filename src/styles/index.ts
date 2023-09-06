import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  height: 100vh;
  padding: 0 40px;
  overflow-y: scroll;
`

export const Titulo = styled.p`
  display: block;
  margin: 40px 0;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  width: 100%;
  padding: 8px;
  background-color: #fff;
  color: #666;
  border-color: #666;
  border-radius: 8px;
  font-weight: bold;
`

export const Botao = styled.button`
  padding: 8px 12px;
  margin-right: 8px;
  font-size: 12px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  background-color: ${variaveis.azulEscuro};
  color: #fff;
  cursor: pointer;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
