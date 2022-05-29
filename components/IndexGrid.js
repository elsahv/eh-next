/* eslint-disable @next/next/no-img-element */
import {
  HomeLeft,
  HomeRight,
} from './styles/IndexGrid.styled'
 
 

export default function IndexGrid() {
  return ( 
    <>
   <div className="main-grid"
        data-aos='zoom-in'
         data-aos-duration='1000'
         data-aos-once='true'
         data-aos-anchor-placement='center bottom'
   >
       <HomeLeft>
           <div className="jtpic">
           <img
            className='jt-img'
            src='images/joshuatreeabout.png'
            alt='joshua tree'
            />
              </div>
              </HomeLeft>

              <HomeRight>
             <h2 className="intro">{"Hi there, I'm Elsa"}</h2>         
             <span className="about-me">{"I'm a web developer based in Joshua Tree, CA. I create niche websites and solutions for small business owners and creatives. "}</span>
        </HomeRight>
        </div>
      </>

 )
}

