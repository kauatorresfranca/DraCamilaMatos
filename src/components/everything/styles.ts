import styled from "styled-components"

export const Container = styled.div`
  text-align: center;

  h2 {
    color: #423f32;
    margin-top: 32px;
    margin-bottom: 8px;
  }

  p {
    font-size: 12px;
    color: #423f32;
    margin-bottom: 16px;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    border: none;
  }

  button {
    width: 360px;
    height: 40px;
    border: 2px solid #a98460;
    border-radius: 25px;
    margin-bottom: 16px;
    color: #423f32;

    &:hover {
      background:linear-gradient(to left, #a98460, #d8b994);
      color: #fff;
      cursor: pointer;
    }
  }
`
