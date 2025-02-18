import styled from "styled-components"
import { breakpoints } from "../../styles"

export const Container = styled.div`
  text-align: center;
  padding-top: 32px;
  padding-bottom: 64px;

  h2 {
    margin-bottom: 32px;
  }
`

export const Results = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  justify-items: center;

  @media (max-width:${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  img {

  transition: transform 0.5s ease;

  &:hover{
    transform: scale(1.1);
  }
    width: 200px;
    border-radius: 12px;
    border: 3px solid #a98460;

    @media (max-width:${breakpoints.tablet}) {
      width: 170px;
    }
  }
`
