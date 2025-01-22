import styled from 'styled-components'
import { breakpoints } from '../../styles'


export const Background = styled.div`
  background: linear-gradient(to left, #d8b994, #a98460 )
`

export const Container = styled.div`
  text-align: center;

  h2 {
    color: rgb(53, 51, 44);
    padding-top: 32px;
    margin-bottom: 24px;

    @media (min-width:${breakpoints.desktop}) {
    margin-bottom: 64px;
  }
  }
`

export const Procedures = styled.div`

  @media (min-width:${breakpoints.desktop}) {
    padding-bottom: 48px;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .flex-reverse {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
  }

  @media (max-width:${breakpoints.tablet}) {
    .flex-reverse {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .flex {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

    }
`

export const Procedure = styled.div`

  @media (min-width:${breakpoints.desktop}) {
    padding-bottom: 80px;
  }

  h3 {
    color: #fff;
    margin-bottom: 16px;

    @media (min-width:${breakpoints.desktop}) {
    margin-bottom: 24px;
  }
  }

  p {
    color: #fff;
    margin-top: 8px;
    margin-bottom: 16px;
    width: 100%;
    max-width: 560px;

    @media (max-width:${breakpoints.tablet}) {
      width: 100%;
      max-width: 420px;
      overflow-wrap: break-word; /* Ou word-wrap */
      word-break: break-word; /* Adicional para compatibilidade */
      white-space: normal; /* Permite quebra de linha */
    }
  }

  img {
    height: 220px;
    width: 320px;
    border-radius: 6px;
    border: 6px solid #fff;

    @media (max-width:${breakpoints.tablet}) {
      margin-bottom: 62px;
    }
  }
`
