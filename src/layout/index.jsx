import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import '../comps/main/main.css';


const Layout = ({children}) => {
  return (
      <div className='content'>
          <Header/>
          {children}
          <Footer/>
      </div>
  )
}


export default Layout;