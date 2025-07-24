import Avatar from 'components/Avatar'
import Paragrafo from 'components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SideBarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside style={{ whiteSpace: 'nowrap' }}>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Bruno Oliveira</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        bruno0409
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
