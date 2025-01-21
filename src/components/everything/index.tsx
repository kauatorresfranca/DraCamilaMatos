import * as S from './styles'

const EveryThing = () => {

  return (
    <S.Container>
      <h2>Aqui você encontra de tudo!</h2>
      <p>Só rolar para baixo e clicar nos botões :)</p>
      <S.Buttons>
        <a href=""><button>Agende com a Drª camila</button></a>
        <a href="/public/EbookSkinCare.pdf"><button>Ebook de Skin Care</button></a>
        <a href="/public/EbookDeHigieneOral.pdf"><button>Ebook de Higiene Oral TEA</button></a>
      </S.Buttons>
    </S.Container>
  )
}

export default EveryThing
