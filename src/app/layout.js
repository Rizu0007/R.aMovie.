import Header from '@/components/Header'
import './globals.css'
import Provider from './Provider'
import NavBar from './../components/NavBar';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <Provider>

      <Header/>
    <NavBar/>

      {children}
      
      </Provider>
      </body>
    </html>
  )
}
