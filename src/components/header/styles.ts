import styled from "styled-components"

export const Container = styled.header`
  background: linear-gradient(to right, #d8b994, #c29f7b);
  padding-top: 24px;
  padding-bottom: 24px;

  img {
    margin-left: 120px;
    width: 300px;
  }
`

export const Links = styled.ul`
  display: flex;
  justify-content: center;
`

export const Link = styled.li`
  margin-right: 64px;

  a {
    text-decoration: none;
    font-weight: 500;
    color: #fff;

    &:hover {
    color: rgb(90, 86, 70) ;
  }
  }
`

