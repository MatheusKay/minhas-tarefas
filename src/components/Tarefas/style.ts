import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Tarefa'
import { Botao } from '../../styles'

type TagProps = {
  status?: enums.Status
  prioridade?: enums.Prioridade
  parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.amarelo2
  } else {
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
  }

  return '#ccc'
}

export const Card = styled.div`
  padding: 16px;
  margin-bottom: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #fcfcfc;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  margin-right: 16px;
  display: inline-block;
  color: #fff;
  background-color: ${(props) => retornaCorDeFundo(props)};
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

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
