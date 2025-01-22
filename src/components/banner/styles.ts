import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Background = styled.div`
  background: linear-gradient(to bottom, #d8b994,  #a98460);
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-around;

  > img {
    width: 260px;
    height: 400px;

    @media (max-width:${breakpoints.tablet}) {
        width: 200px;
        height: 310px;
      }
  }
`

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    width: 280px;

    @media (max-width:${breakpoints.tablet}) {
        width: 200px;
      }
  }

  h3 {
    color:rgb(53, 51, 44);
    line-height: 32px;

    @media (max-width:${breakpoints.tablet}) {
        font-size: 18px;
      }
  }

  p {
    color: #423f32;
    font-size: 12px;
    margin-top: 16px;
    margin-bottom: 16px;

    @media (max-width:${breakpoints.tablet}) {
        font-size: 10px;
      }
  }

  button {
    color: #a98460;
    background-color: #fff;
    width: 270px;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    height: 32px;
    font-weight: 600;

    @media (max-width:${breakpoints.tablet}) {
        width: 210px;
      }

    &:hover {
      color: #fff;
      background-color: #a98460;
    }
  }
`
