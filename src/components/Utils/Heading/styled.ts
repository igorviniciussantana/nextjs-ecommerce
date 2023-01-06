import { HTMLAttributes } from 'react';
import styled from 'styled-components'

interface HeadingProps{
marginBottom?: string;
align?: string;
}

export const TitleBox = styled.div<HeadingProps>`
margin-bottom: ${(props) => (props.marginBottom ? '4rem' : '2rem')};
text-align: ${(props) => props.align || 'center'}
`