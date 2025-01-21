import styled from "styled-components"

export const Container = styled.div`
  text-align: center;
  padding-top: 32px;

  h2 {
    margin-bottom: 32px;
  }
`

export const Results = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  justify-items: center;

  img {
    width: 200px;
    border-radius: 12px;
    border: 3px solid #d8b994;
  }
`
