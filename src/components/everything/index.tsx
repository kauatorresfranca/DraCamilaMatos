import * as S from './styles'

const EveryThing = () => {

  return (
    <S.Container>
      <h2>Aqui você encontra de tudo!</h2>
      <p>Só rolar para baixo e clicar nos botões :)</p>
      <S.Buttons>
        <a href="https://api.whatsapp.com/send/?phone=5582998379582"><button>Agende com a Drª Camila</button></a>
        <a href="/public/EbookSkinCare.pdf"><button>Ebook de Skin Care</button></a>
        <a href="/public/EbookDeHigieneOral.pdf"><button>Ebook de Higiene Oral TEA</button></a>
      </S.Buttons>
    </S.Container>
  )
}

export default EveryThing
