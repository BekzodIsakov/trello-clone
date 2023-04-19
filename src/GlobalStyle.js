import { createGlobalStyle } from "styled-components";
import un from "./assets/images/un.jpg";

export const styles = {
  colors: {
    white: "#ffffff",
    gray: "#ebecf0",
    gray50: "#e4e4e5",
    gray100: "#091e4214",
    gray200: "#dddedf",
    gray300: "#9d9d9f",
    blue: "#0079bf",
    blue50: "#0079BF",
    blue100: "#026aa7",
    blue200: "#172b4d",
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border-radius: .3rem;
  }

  html {
    font-size: 62.5%;
  }

  body {
    height: 100vh;
    background: gray url(${un}) no-repeat 0 30%;
    background-size: cover;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${styles.colors.blue200};
  }

  input {
    color: ${styles.colors.blue200};
  }
`;
