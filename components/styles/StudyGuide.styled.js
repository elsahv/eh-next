import styled from 'styled-components'

export const Title = styled.h2`
text-align: center;
padding: 20px;
`

export const Wrapper = styled.div`
display: flex;
justify-content: center;
`

export const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 1em;
cursor: pointer;
.image {
    border: solid 2px black;
    border-radius: 45px;
}
`

export const PostTitles = styled.h4`
 font-size: 20px;
`