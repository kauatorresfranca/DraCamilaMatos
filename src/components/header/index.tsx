import * as S from './styles'
import logo from '../../assets/images/logo_camila.png'

const Header = () => {

  return (
    <S.Container>
      <h1><a href="#"><img src={logo} alt="logo" /></a></h1>
      <div className="container">
        <S.Links>
          <S.Link><a href='#'>Inicio</a></S.Link>
          <S.Link><a href='#about'>Sobre</a></S.Link>
          <S.Link><a href='#procedures'>Procedimentos</a></S.Link>
          <S.Link><a href='#results'>Resultados</a></S.Link>
          <S.Link><a href='#contact'>Contato</a></S.Link>
        </S.Links>
      </div>
    </S.Container>
  )
}

export default Header
