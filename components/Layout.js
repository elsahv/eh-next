  

import GlobalStyles from './styles/Global'
import Header from './Header'
import Footer from './Footer'

 

 

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
    <Header />
      <main className="main-container">{children}</main>
    <Footer />

    </>
  )
}