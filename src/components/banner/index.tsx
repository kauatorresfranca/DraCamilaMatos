import * as S from './styles'
import photo from '../../../src/assets/images/photo_camila.webp'
import secondLogo from '../../../src/assets/images/logo2_camila.svg'

const Banner = () => {

  return (
    <S.Background>
      <div className="container">
        <S.Container>
          <img src={photo} alt="photo of dra camila" />
          <S.Side>
            <img src={secondLogo} alt="logo" />
            <h3>TRATAMENTOS <br /> ODONTOLÓGICOS</h3>
            <p>Procedimentos clínicos e de harmonização <br /> em Maceió (AL) e Bom Conselho (PE).</p>
            <a href="https://api.whatsapp.com/send/?phone=5582998379582"><button>AGENDAMENTO WHATSAPP</button></a>
          </S.Side>
        </S.Container>
      </div>
    </S.Background>
  )
}

export default Banner
