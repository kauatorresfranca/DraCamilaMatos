import * as S from './styles'
import profilaxia from '../../assets/images/profilaxia.jpeg'
import restauracao from '../../assets/images/restauracao.jpeg'
import clareamento from '../../assets/images/clareamento.jpeg'
import restauracaoEstetica from '../../assets/images/restauracaoEstetica.jpeg'
import botulinica from '../../assets/images/botulinica.jpeg'
import preenchimento from '../../assets/images/preenchimento.jpeg'
import protese from '../../assets/images/protese.jpeg'
import infantil from '../../assets/images/infantil.jpeg'
import cirurgia from '../../assets/images/cirurgia.jpeg'

const Procedures = () => {

  return (
    <S.Background id="procedures">
      <div className="container">
        <S.Container>
          <h2>NOSSOS PROCEDIMENTOS</h2>
          <S.Procedures>
            <S.Procedure className='flex'>
              <div>
                <h3>PROFILAXIA + RASPAGEM</h3>
                <p>A profilaxia e a raspagem odontológica são procedimentos essenciais para manter a saúde bucal e trazem diversos benefícios, como: prevenção de cárie e doenças gengivais, prevenção de manchas, melhoria da saúde geral.</p>
              </div>
              <img src={profilaxia} alt="profilaxia" />
            </S.Procedure>
            <S.Procedure className='flex-reverse'>
              <div>
                <h3>RESTAURAÇÃO DENTÁRIA</h3>
                <p>A restauração dentária oferece diversos benefícios importantes para a saúde bucal e o bem-estar geral, como: recuperação da função mastigatória, prevenção de problemas futuros, estética do sorriso, durabilidade e proteção.</p>
              </div>
              <img src={restauracao} alt="profilaxia" />
            </S.Procedure>
            <S.Procedure className='flex'>
              <div>
                <h3>CLAREAMENTO DENTAL</h3>
                <p>O clareamento dental, por meio da nossa técnica, proporciona ao paciente um sorriso mais iluminado, sem que haja dor ou sensibilidade.
                  Invista no clareamento para conquistar um sorriso que reflete sua melhor versão.</p>
              </div>
              <img src={clareamento} alt="profilaxia" />
            </S.Procedure>
            <S.Procedure className='flex-reverse'>
              <div>
                <h3>RESTAURAÇÃO ESTÉTICA</h3>
                <p>É a área da odontologia dedicada a melhorar a aparência do sorriso, proporcionando aos pacientes mais confiança e autoestima. Assim, não só transforma a estética dos dentes, como também a qualidade de vida dos pacientes, possibilitando sorrir com orgulho e felicidade. </p>
              </div>
              <img src={restauracaoEstetica} alt="profilaxia" />
            </S.Procedure>
            <S.Procedure className='flex'>
              <div>
                <h3>TOXINA BOTUlÍNICA</h3>
                <p>A toxina botulínica, popularmente conhecida como botox, oferece uma gama de benefícios aos pacientes, tanto estético como terapêutico. O procedimento promove redução de rugas e linhas de expressão, aparência mais jovem, prevenção de rugas futuras e correção de assimetrias faciais.</p>
              </div>
              <img src={botulinica} alt="profilaxia" />
            </S.Procedure>
            <S.Procedure className='flex-reverse'>
              <div>
                <h3>PREENCHIMENTO</h3>
                <p>O preenchimento facial possibilita ao paciente um rejuvenescimento da pele, além de resultados naturais e personalizados. A harmonização facial define e equilibra os traços da face, trazendo mais simetria ao rosto.</p>
              </div>
              <img src={preenchimento} alt="profilaxia" />
            </S.Procedure>
            <S.Procedure className='flex'>
              <div>
                <h3>PRÓTESE FIXA</h3>
                <p>A prótese fixa é utilizada para pacientes que possuem a coroa do dente ausente ou enfraquecido, com o intuito de devolver a função mastigatória, estética e também a saúde bucal. Para garantir uma longevidade, é importante cuidar da higiene oral e realizar visitas periódicas ao dentista.</p>
              </div>
              <img src={protese} alt="profilaxia" />
            </S.Procedure>
            <S.Procedure className='flex-reverse'>
              <div>
                <h3>ATENDIMENTO INFANTIL</h3>
                <p>O atendimento odontológico infantil é essencial para cuidar da saúde bucal das crianças e criar hábitos saudáveis desde cedo. Assim, será trabalhado a prevenção de problemas futuros, educação sobre higiene oral, desenvolvimento de confiança da criança e manutenção e acompanhamento do crescimento dos dentes de leite.</p>
              </div>
              <img src={infantil} alt="profilaxia" />
            </S.Procedure>
            <S.Procedure className='flex'>
              <div>
                <h3>CIRURGIA</h3>
                <p>As cirurgias odontológicas simples são procedimentos rápidos e minimamente invasivos, fundamentais para a saúde bucal. Com isso, poderá ser solucionado problemas de saúde bucal, prevenção de focos infecciosos, melhora da saúde geral e rápida recuperação.</p>
              </div>
              <img src={cirurgia} alt="profilaxia" />
            </S.Procedure>
          </S.Procedures>
        </S.Container>
      </div>
    </S.Background>
  )
}

export default Procedures
