import { NextUIProvider } from '@nextui-org/react'
import '../styles/globals.css'
import {darkTheme} from '../themes'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )

}

export default MyApp
