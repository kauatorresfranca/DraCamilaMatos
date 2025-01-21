import styled from "styled-components"
import { breakpoints } from "../../styles"

export const Container = styled.header`
  background: linear-gradient(to right, #d8b994, #c29f7b);
  padding-top: 24px;
  padding-bottom: 24px;

  img {
    margin-left: 120px;
    width: 300px;

    @media (max-width:${breakpoints.tablet}) {
            width: 252px;
            margin-left: 0px;
          }
  }
`

export const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const Link = styled.li`
  margin-right: 64px;

  @media (max-width:${breakpoints.tablet}) {
      margin-top: 12px;
      margin-right: 12px;
      margin-left: 12px;
    }

  a {
    text-decoration: none;
    font-weight: 500;
    color: #fff;

    &:hover {
    color: rgb(90, 86, 70) ;
  }
  }
`

