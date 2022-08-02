import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,200&display=swap');

body {
  margin:0px;
  .appLight{
  /* LIGHT-THEME */
    /* Colors */
    --color-text: #000000;
    --color-button:#ffffff; 
    --color-button-hover: #ff452b;
    --color-error-message: #ff452b;

    /* Background */
    --bg-page: #ffffff;
    --bg-page-alt: #ffffff;
    --bg-section-tasks: #fafafa;
    --bg-form: #ffffff;
    --bg-text: #000000;
    --bg-input:  #ffffff;
    --bg-header: #ffffff;
    --bg-button: #ff452b;
    --bg-button-hover:  #ffffff; 
    --bg-card: #ffffff;
  
    /* Border */
    --border-radius: 8px;
    --border-color: #e9e9e9;
    --border-input:#e5e5e5;
    --border-card:#c4c4c4;
  }
  .appDark{
  /* DARK-THEME */
    /* Colors */
    --color-text: #ffffff; 
    --color-button:#ffffff; 
    --color-button-hover: #ffffff; 
    --color-error-message: #ff452b;

    /* Background */
    --bg-page:#1d1d1f;
    --bg-page-alt: #000000;
    --bg-section-tasks:#2e2e2e;
    --bg-form: #000000;
    --bg-input: #353535;
    --bg-text:#ffffff; 
    --bg-input:#1f1f1f;
    --bg-header: #bababa;
    --bg-button: #20c20e;
    --bg-button-hover: #23c23e;
    --bg-card: #232323;

    /* Border */
    --border-radius: 8px;
    --border-color:#1f1f1f;
    --border-input:#1f1f1f;
    --border-card:#222222;
  }
*{
  font-family: 'Nunito', sans-serif;
  box-sizing: border-box;
  margin:0px;}
  }
`;
