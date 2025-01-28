import * as S from './styles'

const Footer = () => {
  const ano = new Date().getFullYear()
  console.log(ano)
  return (
    <S.Background>
      <S.Container>
        <p>© {2025} - Camila Matos - developed by Kauã Torres</p>
      </S.Container>
    </S.Background>
  )
}

export default Footer
