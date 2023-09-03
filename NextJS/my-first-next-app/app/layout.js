/* ES LA PÁGINA QUE ENVUELVE TODA LA APLICACIÓN */
/*La parte del layout no cambia */

//Importa el css general para toda la app
import './globals.css'
import { Inter } from 'next/font/google'

//Component imports
import Navigation from './components/Navigation'

//const
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My first NEXT page',
  description: 'Generated by create next app'
}

//el prop children proviene de page.jsx
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>

        <Navigation />

        {children}
      </body>
    </html>
  )
}
