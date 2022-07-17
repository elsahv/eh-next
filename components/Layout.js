

import GlobalStyles from './Global.js'
// import Footer from './Footer'
import Sidebar from './Sidebar'

 

 

export default function Layout({ children }) {
  return (  
    <>
      <GlobalStyles />
    <Sidebar />
      <main>{children}</main>
    {/* <Footer /> */}
    </>
  )
}