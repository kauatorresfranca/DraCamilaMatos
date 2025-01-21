import styled from 'styled-components'

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

  a {
    margin-right: 4px;
    margin-left: 4px;
  }

  h3 {
    margin-bottom: 8px;
  }

  p {
    font-weight: 600;
    font-size: 14px;
    color: #d8b994;
  }
`
