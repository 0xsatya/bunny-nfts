import { createGlobalStyle} from "styled-components"

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
}

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,500;1,700;1,900&display=swap');

:root {
  --roboto: 'Roboto', sans-serif;
  --poppins: 'Poppins', sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--roboto);
  background: #5DF2BC;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 0.9375rem;
}

.button {
  color: #fff;
  background: linear-gradient(90deg, #ef2c5d 0%, #c72462 86.98%);
  transition: 0.3s;
  border-radius: 3.125rem;
  padding: 12px 1.6875rem;
  border: 0;
  font-weight: 500;
  font-size: 17px;
  text-decoration: none;
  display: inline-block;

}

.button:hover {
  transform: translateY(-10px);
}
`