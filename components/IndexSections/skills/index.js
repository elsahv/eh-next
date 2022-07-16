import Image from 'next/image'

import {
  Wrapper
} from './skills.styled'



const skills = () => {
  return (
    <Wrapper>
               <Image
                 className='jt-img'
                 src='/images/icons/css.png'
                 alt='joshua tree'
                 width="80"
                 height="80"
                 />
                    <Image
                 className='jt-img'
                 src='/images/icons/git.png'
                 alt='joshua tree'
                 width="80"
                 height="80"
                 />
                    <Image
                 className='jt-img'
                 src='/images/icons/github.png'
                 alt='joshua tree'
                 width="80"
                 height="80"
                 />
                    <Image
                 className='jt-img'
                 src='/images/icons/javascript.png'
                 alt='joshua tree'
                 width="80"
                 height="80"
                 />
                    <Image
                 className='jt-img'
                 src='/images/icons/nextjs.png'
                 alt='joshua tree'
                 width="80"
                 height="80"
                 />
                    <Image
                 className='jt-img'
                 src='/images/icons/react.png'
                 alt='joshua tree'
                 width="80"
                 height="80"
                 />
                    <Image
                 className='jt-img'
                 src='/images/icons/styled-components.png'
                 alt='joshua tree'
                 width="80"
                 height="80"
                 />
         
    </Wrapper>
  )
}

export default skills