

import GlobalStyles from './styles/Global'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

 

 

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
    <Header />
    <Sidebar />
      <main>{children}</main>
    <Footer />

    </>
  )
}