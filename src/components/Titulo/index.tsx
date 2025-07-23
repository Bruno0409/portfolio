import { Titulo as TituloEstilo } from './styles'
import React from 'react'

export type Props = {
  children: React.ReactNode
  fontSize?: number
}

const Titulo = (props: Props) => (
  <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
)

export default Titulo
