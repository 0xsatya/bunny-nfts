import { useState } from "react"
import 'normalize.css';
import "../src/styles/global.css";

/* import { ThemeProvider } from "styled-components"; */
// import { lightTheme, darkTheme, GlobalStyles } from "../themeConfig"

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <>
    {/* <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/> */}
      {/* <button onClick={toggleTheme}>Switch Theme</button> */}
      <Component {...pageProps} />
    {/* </ThemeProvider> */}
    </>
  )
}
export default MyApp
