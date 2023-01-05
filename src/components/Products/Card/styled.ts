import styled from 'styled-components'

export const Card = styled.article`
width: 100%;
position: relative;
`

export const Box = styled.div`
width: 30%;
aspect-ratio: 2/3;

position: relative;
overflow: hidden;

img{
    transition: all 500ms cubic-bezier(1, 0.01, 0, 1.07);
    transition-timing-function: cubic-bezier(1, 0.01, 0, 1.07);
}

&:after{
    content: '';
    position: absolute;
    width: 100%;
    height: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0);
    z-index: 4;
    transition: all 500ms cubic-bezier(1, 0.01, 0, 1.07);
    transition-timing-function: cubic-bezier(1, 0.01, 0, 1.07);
}
`


export const Content = styled.div`
width: 100%;
padding: 0.5rem 0;
`

export const Title = styled.p`
`

export const Price = styled.span`
`