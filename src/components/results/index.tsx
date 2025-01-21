import * as S from './styles'
import result1 from '../../assets/images/result_1.png'
import result2 from '../../assets/images/result_2.png'
import result3 from '../../assets/images/result_3.png'
import result4 from '../../assets/images/result_4.png'
import result5 from '../../assets/images/result_5.png'
import result6 from '../../assets/images/result_6.png'

const Results = () => {

  return (
    <div className="container">
      <S.Container id="results">
        <h2>Resultados</h2>
        <S.Results>
          <img src={result1} alt="result client" />
          <img src={result2} alt="result client" />
          <img src={result3} alt="result client" />
          <img src={result4} alt="result client" />
          <img src={result5} alt="result client" />
          <img src={result6} alt="result client" />
        </S.Results>
      </S.Container>
    </div>
  )
}

export default Results
