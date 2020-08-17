import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
    .toggle-btn {
      top: 6px;
      right: 0;
      position: absolute;
      margin-right: 120px;
      border: 1px solid ${({ theme }) => theme.body};
      width: 35px;
      cursor: pointer;
    }
  }`