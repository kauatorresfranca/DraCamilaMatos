import styled from 'styled-components'
import { colors } from '../../styles'


export const Background = styled.div`
  padding-top: 32px;
  background: linear-gradient(to right, #d8b994, #c29f7b);
`


export const Container = styled.div`
  text-align: center;
  padding-bottom: 64px;

  h2 {
    margin-bottom: 32px;
  }
`

export const ContactsWays = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 16px;
`

export const ContactWay = styled.div`

  h3 {
    margin-bottom: 8px;
  }

  p {
    font-weight: 600;
    font-size: 14px;
    color: ${colors.textColor};
  }
`
