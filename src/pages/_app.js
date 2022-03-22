import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '@styles/globals.css'

const GlobalStyle = createGlobalStyle`
  html {
      scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
colors: {
    serif: 'font-family: Merriweather, Garamond, serif',
    sansSerif: 'font-family:Sen, Inter, sans-serif;'
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
